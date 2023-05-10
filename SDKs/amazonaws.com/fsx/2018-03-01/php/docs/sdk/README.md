# SDK

## Overview

Amazon FSx is a fully managed service that makes it easy for storage and application administrators to launch and use shared file storage.

Amazon Web Services documentation
<https://docs.aws.amazon.com/fsx/>
### Available Operations

* [associateFileSystemAliases](#associatefilesystemaliases) - <p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including additional steps you must take to be able to access your file system using a DNS alias.</p> <p>The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.</p>
* [cancelDataRepositoryTask](#canceldatarepositorytask) - <p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p> <ul> <li> <p>Any files that FSx has already exported are not reverted.</p> </li> <li> <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p> </li> <li> <p>FSx does not export any files that have not yet been exported.</p> </li> </ul>
* [copyBackup](#copybackup) - <p>Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account.</p> <p>You can use cross-Region backup copies for cross-Region disaster recovery. You can periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently has three partitions: <code>aws</code> (Standard Regions), <code>aws-cn</code> (China Regions), and <code>aws-us-gov</code> (Amazon Web Services GovCloud [US] Regions).</p> <p>You can also use backup copies to clone your file dataset to another Region or within the same Region.</p> <p>You can use the <code>SourceRegion</code> parameter to specify the Amazon Web Services Region from which the backup will be copied. For example, if you make the call from the <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code> Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter to make a cross-Region copy. If you don't specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy).</p> <p>For more information about creating backup copies, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups"> Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>
* [createBackup](#createbackup) - <p>Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume.</p> <p>For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration:</p> <ul> <li> <p>A Persistent deployment type</p> </li> <li> <p>Are <i>not</i> linked to a data repository</p> </li> </ul> <p>For more information about backups, see the following:</p> <ul> <li> <p>For Amazon FSx for Lustre, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for Lustre backups</a>.</p> </li> <li> <p>For Amazon FSx for Windows, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for Windows backups</a>.</p> </li> <li> <p>For Amazon FSx for NetApp ONTAP, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp ONTAP backups</a>.</p> </li> <li> <p>For Amazon FSx for OpenZFS, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html">Working with FSx for OpenZFS backups</a>.</p> </li> </ul> <p>If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a backup with the specified client request token doesn't exist, <code>CreateBackup</code> does the following: </p> <ul> <li> <p>Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the backup.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateBackup</code> operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateBackup</code> operation returns while the backup's lifecycle state is still <code>CREATING</code>. You can check the backup creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html">DescribeBackups</a> operation, which returns the backup state along with other information.</p>
* [createDataRepositoryAssociation](#createdatarepositoryassociation) - <p>Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.</p> <p>Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p> <note> <p> <code>CreateDataRepositoryAssociation</code> isn't supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the <code>CreateFileCache</code> operation.</p> </note>
* [createDataRepositoryTask](#createdatarepositorytask) - Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. A <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.
* [createFileCache](#createfilecache) - <p>Creates a new Amazon File Cache resource.</p> <p>You can use this operation with a client request token in the request that Amazon File Cache uses to ensure idempotent creation. If a cache with the specified client request token exists and the parameters match, <code>CreateFileCache</code> returns the description of the existing cache. If a cache with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file cache with the specified client request token doesn't exist, <code>CreateFileCache</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon File Cache resourcewith an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the cache in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileCache</code> call returns while the cache's lifecycle state is still <code>CREATING</code>. You can check the cache creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns the cache state along with other information.</p> </note>
* [createFileSystem](#createfilesystem) - <p>Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the <code>CreateFileSystem</code> API operation:</p> <ul> <li> <p>Amazon FSx for Lustre</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a <code>CreateFileSystem</code> operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <p>If a file system with the specified client request token exists and the parameters match, <code>CreateFileSystem</code> returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, <code>CreateFileSystem</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>
* [createFileSystemFromBackup](#createfilesystemfrombackup) - <p>Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup.</p> <p>If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, this operation does the following:</p> <ul> <li> <p>Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings.</p> <p>By using the idempotent operation, you can retry a <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html"> DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>
* [createSnapshot](#createsnapshot) - <p>Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version.</p> <p>If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a snapshot with the specified client request token doesn't exist, <code>CreateSnapshot</code> does the following:</p> <ul> <li> <p>Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the snapshot.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateSnapshot</code> operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateSnapshot</code> operation returns while the snapshot's lifecycle state is still <code>CREATING</code>. You can check the snapshot creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> operation, which returns the snapshot state along with other information.</p>
* [createStorageVirtualMachine](#createstoragevirtualmachine) - Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.
* [createVolume](#createvolume) - Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.
* [createVolumeFromBackup](#createvolumefrombackup) - Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.
* [deleteBackup](#deletebackup) - <p>Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone.</p> <p>The <code>DeleteBackup</code> call returns instantly. The backup won't show up in later <code>DescribeBackups</code> calls.</p> <important> <p>The data in a deleted backup is also deleted and can't be recovered by any means.</p> </important>
* [deleteDataRepositoryAssociation](#deletedatarepositoryassociation) - Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.
* [deleteFileCache](#deletefilecache) - <p>Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone.</p> <p>The <code>DeleteFileCache</code> operation returns while the cache has the <code>DELETING</code> status. You can check the cache deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the <code>DescribeFileCaches</code> operation returns a <code>FileCacheNotFound</code> error.</p> <important> <p>The data in a deleted cache is also deleted and can't be recovered by any means.</p> </important>
* [deleteFileSystem](#deletefilesystem) - <p>Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted.</p> <p>To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a <code>FileSystemId</code> value to the <code>DeleFileSystem</code> operation.</p> <p>By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted.</p> <p>The <code>DeleteFileSystem</code> operation returns while the file system has the <code>DELETING</code> status. You can check the file system deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the <code>DescribeFileSystems</code> operation returns a <code>FileSystemNotFound</code> error.</p> <note> <p>If a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code> state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request).</p> </note> <important> <p>The data in a deleted file system is also deleted and can't be recovered by any means.</p> </important>
* [deleteSnapshot](#deletesnapshot) - <p>Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup. </p> <p>The <code>DeleteSnapshot</code> operation returns instantly. The snapshot appears with the lifecycle status of <code>DELETING</code> until the deletion is complete.</p>
* [deleteStorageVirtualMachine](#deletestoragevirtualmachine) - Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.
* [deleteVolume](#deletevolume) - Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.
* [describeBackups](#describebackups) - <p>Returns the description of a specific Amazon FSx backup, if a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code> parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of the <code>NextToken</code> value from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your backups. <code>DescribeBackups</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of backup descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of the backups returned in the response of one <code>DescribeBackups</code> call and the order of the backups returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>
* [describeDataRepositoryAssociations](#describedatarepositoryassociations) - <p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository associations, if one or more <code>AssociationIds</code> values are provided in the request, or if filters are used in the request. Data repository associations are supported on Amazon File Cache resources and all Amazon FSx for Lustre file systems excluding <code>Scratch_1</code> deployment types.</p> <p>You can use filters to narrow the response to include just data repository associations for specific file systems (use the <code>file-system-id</code> filter with the ID of the file system) or caches (use the <code>file-cache-id</code> filter with the ID of the cache), or data repository associations for a specific repository type (use the <code>data-repository-type</code> filter with a value of <code>S3</code> or <code>NFS</code>). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all data repository associations, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>
* [describeDataRepositoryTasks](#describedatarepositorytasks) - <p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems or caches, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all tasks, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of tasks returned in a response. If more tasks remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>
* [describeFileCaches](#describefilecaches) - <p>Returns the description of a specific Amazon File Cache resource, if a <code>FileCacheIds</code> value is provided for that cache. Otherwise, it returns descriptions of all caches owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all cache descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more cache descriptions remain, the operation returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your cache descriptions. <code>DescribeFileCaches</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> cache descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of caches returned in the response of one <code>DescribeFileCaches</code> call and the order of caches returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>
* [describeFileSystemAliases](#describefilesystemaliases) - Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a> provided in the <a>DescribeFileSystems</a> operation response.
* [describeFileSystems](#describefilesystems) - <p>Returns the description of specific Amazon FSx file systems, if a <code>FileSystemIds</code> value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your file system descriptions. <code>DescribeFileSystems</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>
* [describeSnapshots](#describesnapshots) - <p>Returns the description of specific Amazon FSx for OpenZFS snapshots, if a <code>SnapshotIds</code> value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all snapshots, you can optionally specify the <code>MaxResults</code> parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response. </p> <p>Use this operation in an iterative process to retrieve a list of your snapshots. <code>DescribeSnapshots</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of snapshot descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of snapshots returned in the response of one <code>DescribeSnapshots</code> call and the order of backups returned across the responses of a multi-call iteration is unspecified. </p> </li> </ul>
* [describeStorageVirtualMachines](#describestoragevirtualmachines) - Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).
* [describeVolumes](#describevolumes) - Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.
* [disassociateFileSystemAliases](#disassociatefilesystemaliases) - <p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p> <p>The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.</p>
* [listTagsForResource](#listtagsforresource) - <p>Lists tags for Amazon FSx resources.</p> <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code> parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your tags. <code>ListTagsForResource</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of tags returned in the response of one <code>ListTagsForResource</code> call and the order of tags returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>
* [releaseFileSystemNfsV3Locks](#releasefilesystemnfsv3locks) - Releases the file system lock from an Amazon FSx for OpenZFS file system.
* [restoreVolumeFromSnapshot](#restorevolumefromsnapshot) - Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot.
* [tagResource](#tagresource) - Tags an Amazon FSx resource.
* [untagResource](#untagresource) - This action removes a tag from an Amazon FSx resource.
* [updateDataRepositoryAssociation](#updatedatarepositoryassociation) - Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.
* [updateFileCache](#updatefilecache) - Updates the configuration of an existing Amazon File Cache resource. You can update multiple properties in a single request.
* [updateFileSystem](#updatefilesystem) - <p>Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request.</p> <p>For FSx for Windows File Server file systems, you can update the following properties:</p> <ul> <li> <p> <code>AuditLogConfiguration</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>SelfManagedActiveDirectoryConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for Lustre file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DataCompressionType</code> </p> </li> <li> <p> <code>LustreRootSquashConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for ONTAP file systems, you can update the following properties:</p> <ul> <li> <p> <code>AddRouteTableIds</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>FsxAdminPassword</code> </p> </li> <li> <p> <code>RemoveRouteTableIds</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for OpenZFS file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>CopyTagsToBackups</code> </p> </li> <li> <p> <code>CopyTagsToVolumes</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul>
* [updateSnapshot](#updatesnapshot) - Updates the name of an Amazon FSx for OpenZFS snapshot.
* [updateStorageVirtualMachine](#updatestoragevirtualmachine) - Updates an Amazon FSx for ONTAP storage virtual machine (SVM).
* [updateVolume](#updatevolume) - Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

## associateFileSystemAliases

<p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including additional steps you must take to be able to access your file system using a DNS alias.</p> <p>The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFileSystemAliasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateFileSystemAliasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFileSystemAliasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateFileSystemAliasesRequest();
    $request->associateFileSystemAliasesRequest = new AssociateFileSystemAliasesRequest();
    $request->associateFileSystemAliasesRequest->aliases = [
        'debitis',
        'ipsa',
    ];
    $request->associateFileSystemAliasesRequest->clientRequestToken = 'delectus';
    $request->associateFileSystemAliasesRequest->fileSystemId = 'tempora';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = AssociateFileSystemAliasesXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_ASSOCIATE_FILE_SYSTEM_ALIASES;

    $response = $sdk->sdk->associateFileSystemAliases($request);

    if ($response->associateFileSystemAliasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelDataRepositoryTask

<p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p> <ul> <li> <p>Any files that FSx has already exported are not reverted.</p> </li> <li> <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p> </li> <li> <p>FSx does not export any files that have not yet been exported.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelDataRepositoryTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelDataRepositoryTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelDataRepositoryTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelDataRepositoryTaskRequest();
    $request->cancelDataRepositoryTaskRequest = new CancelDataRepositoryTaskRequest();
    $request->cancelDataRepositoryTaskRequest->taskId = 'nisi';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = CancelDataRepositoryTaskXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_CANCEL_DATA_REPOSITORY_TASK;

    $response = $sdk->sdk->cancelDataRepositoryTask($request);

    if ($response->cancelDataRepositoryTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copyBackup

<p>Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account.</p> <p>You can use cross-Region backup copies for cross-Region disaster recovery. You can periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently has three partitions: <code>aws</code> (Standard Regions), <code>aws-cn</code> (China Regions), and <code>aws-us-gov</code> (Amazon Web Services GovCloud [US] Regions).</p> <p>You can also use backup copies to clone your file dataset to another Region or within the same Region.</p> <p>You can use the <code>SourceRegion</code> parameter to specify the Amazon Web Services Region from which the backup will be copied. For example, if you make the call from the <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code> Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter to make a cross-Region copy. If you don't specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy).</p> <p>For more information about creating backup copies, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups"> Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopyBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopyBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CopyBackupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyBackupRequest();
    $request->copyBackupRequest = new CopyBackupRequest();
    $request->copyBackupRequest->clientRequestToken = 'ipsam';
    $request->copyBackupRequest->copyTags = false;
    $request->copyBackupRequest->kmsKeyId = 'repellendus';
    $request->copyBackupRequest->sourceBackupId = 'sapiente';
    $request->copyBackupRequest->sourceRegion = 'quo';
    $request->copyBackupRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = CopyBackupXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_COPY_BACKUP;

    $response = $sdk->sdk->copyBackup($request);

    if ($response->copyBackupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBackup

<p>Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume.</p> <p>For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration:</p> <ul> <li> <p>A Persistent deployment type</p> </li> <li> <p>Are <i>not</i> linked to a data repository</p> </li> </ul> <p>For more information about backups, see the following:</p> <ul> <li> <p>For Amazon FSx for Lustre, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for Lustre backups</a>.</p> </li> <li> <p>For Amazon FSx for Windows, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for Windows backups</a>.</p> </li> <li> <p>For Amazon FSx for NetApp ONTAP, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp ONTAP backups</a>.</p> </li> <li> <p>For Amazon FSx for OpenZFS, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html">Working with FSx for OpenZFS backups</a>.</p> </li> </ul> <p>If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a backup with the specified client request token doesn't exist, <code>CreateBackup</code> does the following: </p> <ul> <li> <p>Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the backup.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateBackup</code> operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateBackup</code> operation returns while the backup's lifecycle state is still <code>CREATING</code>. You can check the backup creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html">DescribeBackups</a> operation, which returns the backup state along with other information.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBackupRequest();
    $request->createBackupRequest = new CreateBackupRequest();
    $request->createBackupRequest->clientRequestToken = 'totam';
    $request->createBackupRequest->fileSystemId = 'porro';
    $request->createBackupRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createBackupRequest->volumeId = 'dicta';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = CreateBackupXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_CREATE_BACKUP;

    $response = $sdk->sdk->createBackup($request);

    if ($response->createBackupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataRepositoryAssociation

<p>Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.</p> <p>Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p> <note> <p> <code>CreateDataRepositoryAssociation</code> isn't supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the <code>CreateFileCache</code> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataRepositoryAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDataRepositoryAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\S3DataRepositoryConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoExportPolicy;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoImportPolicy;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataRepositoryAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataRepositoryAssociationRequest();
    $request->createDataRepositoryAssociationRequest = new CreateDataRepositoryAssociationRequest();
    $request->createDataRepositoryAssociationRequest->batchImportMetaDataOnCreate = false;
    $request->createDataRepositoryAssociationRequest->clientRequestToken = 'totam';
    $request->createDataRepositoryAssociationRequest->dataRepositoryPath = 'beatae';
    $request->createDataRepositoryAssociationRequest->fileSystemId = 'commodi';
    $request->createDataRepositoryAssociationRequest->fileSystemPath = 'molestiae';
    $request->createDataRepositoryAssociationRequest->importedFileChunkSize = 264555;
    $request->createDataRepositoryAssociationRequest->s3 = new S3DataRepositoryConfiguration();
    $request->createDataRepositoryAssociationRequest->s3->autoExportPolicy = new AutoExportPolicy();
    $request->createDataRepositoryAssociationRequest->s3->autoExportPolicy->events = [
        EventTypeEnum::DELETED,
    ];
    $request->createDataRepositoryAssociationRequest->s3->autoImportPolicy = new AutoImportPolicy();
    $request->createDataRepositoryAssociationRequest->s3->autoImportPolicy->events = [
        EventTypeEnum::CHANGED,
        EventTypeEnum::NEW,
        EventTypeEnum::CHANGED,
    ];
    $request->createDataRepositoryAssociationRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = CreateDataRepositoryAssociationXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_CREATE_DATA_REPOSITORY_ASSOCIATION;

    $response = $sdk->sdk->createDataRepositoryAssociation($request);

    if ($response->createDataRepositoryAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataRepositoryTask

Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. A <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataRepositoryTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDataRepositoryTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompletionReport;
use \OpenAPI\OpenAPI\Models\Shared\ReportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\DataRepositoryTaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataRepositoryTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataRepositoryTaskRequest();
    $request->createDataRepositoryTaskRequest = new CreateDataRepositoryTaskRequest();
    $request->createDataRepositoryTaskRequest->capacityToRelease = 386489;
    $request->createDataRepositoryTaskRequest->clientRequestToken = 'hic';
    $request->createDataRepositoryTaskRequest->fileSystemId = 'saepe';
    $request->createDataRepositoryTaskRequest->paths = [
        'in',
        'corporis',
        'iste',
    ];
    $request->createDataRepositoryTaskRequest->report = new CompletionReport();
    $request->createDataRepositoryTaskRequest->report->enabled = false;
    $request->createDataRepositoryTaskRequest->report->format = ReportFormatEnum::REPORT_CSV20191124;
    $request->createDataRepositoryTaskRequest->report->path = 'iure';
    $request->createDataRepositoryTaskRequest->report->scope = ReportScopeEnum::FAILED_FILES_ONLY;
    $request->createDataRepositoryTaskRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createDataRepositoryTaskRequest->type = DataRepositoryTaskTypeEnum::RELEASE_DATA_FROM_FILESYSTEM;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = CreateDataRepositoryTaskXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_CREATE_DATA_REPOSITORY_TASK;

    $response = $sdk->sdk->createDataRepositoryTask($request);

    if ($response->createDataRepositoryTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFileCache

<p>Creates a new Amazon File Cache resource.</p> <p>You can use this operation with a client request token in the request that Amazon File Cache uses to ensure idempotent creation. If a cache with the specified client request token exists and the parameters match, <code>CreateFileCache</code> returns the description of the existing cache. If a cache with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file cache with the specified client request token doesn't exist, <code>CreateFileCache</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon File Cache resourcewith an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the cache in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileCache</code> call returns while the cache's lifecycle state is still <code>CREATING</code>. You can check the cache creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns the cache state along with other information.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileCacheRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileCacheRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileCacheDataRepositoryAssociation;
use \OpenAPI\OpenAPI\Models\Shared\FileCacheNFSConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\NfsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileCacheTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileCacheLustreConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FileCacheLustreDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileCacheLustreMetadataConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileCacheXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFileCacheRequest();
    $request->createFileCacheRequest = new CreateFileCacheRequest();
    $request->createFileCacheRequest->clientRequestToken = 'dolorem';
    $request->createFileCacheRequest->copyTagsToDataRepositoryAssociations = false;
    $request->createFileCacheRequest->dataRepositoryAssociations = [
        new FileCacheDataRepositoryAssociation(),
        new FileCacheDataRepositoryAssociation(),
    ];
    $request->createFileCacheRequest->fileCacheType = FileCacheTypeEnum::LUSTRE;
    $request->createFileCacheRequest->fileCacheTypeVersion = 'explicabo';
    $request->createFileCacheRequest->kmsKeyId = 'nobis';
    $request->createFileCacheRequest->lustreConfiguration = new CreateFileCacheLustreConfiguration();
    $request->createFileCacheRequest->lustreConfiguration->deploymentType = FileCacheLustreDeploymentTypeEnum::CACHE1;
    $request->createFileCacheRequest->lustreConfiguration->metadataConfiguration = new FileCacheLustreMetadataConfiguration();
    $request->createFileCacheRequest->lustreConfiguration->metadataConfiguration->storageCapacity = 315428;
    $request->createFileCacheRequest->lustreConfiguration->perUnitStorageThroughput = 607831;
    $request->createFileCacheRequest->lustreConfiguration->weeklyMaintenanceStartTime = 'nemo';
    $request->createFileCacheRequest->securityGroupIds = [
        'excepturi',
        'accusantium',
    ];
    $request->createFileCacheRequest->storageCapacity = 438601;
    $request->createFileCacheRequest->subnetIds = [
        'doloribus',
        'sapiente',
        'architecto',
    ];
    $request->createFileCacheRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = CreateFileCacheXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_CREATE_FILE_CACHE;

    $response = $sdk->sdk->createFileCache($request);

    if ($response->createFileCacheResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFileSystem

<p>Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the <code>CreateFileSystem</code> API operation:</p> <ul> <li> <p>Amazon FSx for Lustre</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a <code>CreateFileSystem</code> operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <p>If a file system with the specified client request token exists and the parameters match, <code>CreateFileSystem</code> returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, <code>CreateFileSystem</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileSystemLustreConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoImportPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LustreDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DriveCacheTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LustreLogCreateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LustreAccessAuditLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\LustreRootSquashConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileSystemOntapConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OntapDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskIopsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiskIopsConfigurationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileSystemOpenZFSConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSCreateRootVolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSDataCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSNfsExport;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSClientConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSUserOrGroupQuota;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSQuotaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StorageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileSystemWindowsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WindowsAuditLogCreateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WindowsAccessAuditLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindowsDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SelfManagedActiveDirectoryConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileSystemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFileSystemRequest();
    $request->createFileSystemRequest = new CreateFileSystemRequest();
    $request->createFileSystemRequest->clientRequestToken = 'commodi';
    $request->createFileSystemRequest->fileSystemType = FileSystemTypeEnum::LUSTRE;
    $request->createFileSystemRequest->fileSystemTypeVersion = 'molestiae';
    $request->createFileSystemRequest->kmsKeyId = 'velit';
    $request->createFileSystemRequest->lustreConfiguration = new CreateFileSystemLustreConfiguration();
    $request->createFileSystemRequest->lustreConfiguration->autoImportPolicy = AutoImportPolicyTypeEnum::NEW_CHANGED;
    $request->createFileSystemRequest->lustreConfiguration->automaticBackupRetentionDays = 158969;
    $request->createFileSystemRequest->lustreConfiguration->copyTagsToBackups = false;
    $request->createFileSystemRequest->lustreConfiguration->dailyAutomaticBackupStartTime = 'quis';
    $request->createFileSystemRequest->lustreConfiguration->dataCompressionType = DataCompressionTypeEnum::NONE;
    $request->createFileSystemRequest->lustreConfiguration->deploymentType = LustreDeploymentTypeEnum::PERSISTENT1;
    $request->createFileSystemRequest->lustreConfiguration->driveCacheType = DriveCacheTypeEnum::READ;
    $request->createFileSystemRequest->lustreConfiguration->exportPath = 'enim';
    $request->createFileSystemRequest->lustreConfiguration->importPath = 'odit';
    $request->createFileSystemRequest->lustreConfiguration->importedFileChunkSize = 778346;
    $request->createFileSystemRequest->lustreConfiguration->logConfiguration = new LustreLogCreateConfiguration();
    $request->createFileSystemRequest->lustreConfiguration->logConfiguration->destination = 'sequi';
    $request->createFileSystemRequest->lustreConfiguration->logConfiguration->level = LustreAccessAuditLogLevelEnum::WARN_ERROR;
    $request->createFileSystemRequest->lustreConfiguration->perUnitStorageThroughput = 368725;
    $request->createFileSystemRequest->lustreConfiguration->rootSquashConfiguration = new LustreRootSquashConfiguration();
    $request->createFileSystemRequest->lustreConfiguration->rootSquashConfiguration->noSquashNids = [
        'possimus',
        'aut',
        'quasi',
    ];
    $request->createFileSystemRequest->lustreConfiguration->rootSquashConfiguration->rootSquash = 'error';
    $request->createFileSystemRequest->lustreConfiguration->weeklyMaintenanceStartTime = 'temporibus';
    $request->createFileSystemRequest->ontapConfiguration = new CreateFileSystemOntapConfiguration();
    $request->createFileSystemRequest->ontapConfiguration->automaticBackupRetentionDays = 673660;
    $request->createFileSystemRequest->ontapConfiguration->dailyAutomaticBackupStartTime = 'quasi';
    $request->createFileSystemRequest->ontapConfiguration->deploymentType = OntapDeploymentTypeEnum::SINGLE_AZ1;
    $request->createFileSystemRequest->ontapConfiguration->diskIopsConfiguration = new DiskIopsConfiguration();
    $request->createFileSystemRequest->ontapConfiguration->diskIopsConfiguration->iops = 976460;
    $request->createFileSystemRequest->ontapConfiguration->diskIopsConfiguration->mode = DiskIopsConfigurationModeEnum::USER_PROVISIONED;
    $request->createFileSystemRequest->ontapConfiguration->endpointIpAddressRange = 'nihil';
    $request->createFileSystemRequest->ontapConfiguration->fsxAdminPassword = 'praesentium';
    $request->createFileSystemRequest->ontapConfiguration->preferredSubnetId = 'voluptatibus';
    $request->createFileSystemRequest->ontapConfiguration->routeTableIds = [
        'omnis',
    ];
    $request->createFileSystemRequest->ontapConfiguration->throughputCapacity = 451159;
    $request->createFileSystemRequest->ontapConfiguration->weeklyMaintenanceStartTime = 'cum';
    $request->createFileSystemRequest->openZFSConfiguration = new CreateFileSystemOpenZFSConfiguration();
    $request->createFileSystemRequest->openZFSConfiguration->automaticBackupRetentionDays = 19987;
    $request->createFileSystemRequest->openZFSConfiguration->copyTagsToBackups = false;
    $request->createFileSystemRequest->openZFSConfiguration->copyTagsToVolumes = false;
    $request->createFileSystemRequest->openZFSConfiguration->dailyAutomaticBackupStartTime = 'doloremque';
    $request->createFileSystemRequest->openZFSConfiguration->deploymentType = OpenZFSDeploymentTypeEnum::SINGLE_AZ1;
    $request->createFileSystemRequest->openZFSConfiguration->diskIopsConfiguration = new DiskIopsConfiguration();
    $request->createFileSystemRequest->openZFSConfiguration->diskIopsConfiguration->iops = 282807;
    $request->createFileSystemRequest->openZFSConfiguration->diskIopsConfiguration->mode = DiskIopsConfigurationModeEnum::USER_PROVISIONED;
    $request->createFileSystemRequest->openZFSConfiguration->rootVolumeConfiguration = new OpenZFSCreateRootVolumeConfiguration();
    $request->createFileSystemRequest->openZFSConfiguration->rootVolumeConfiguration->copyTagsToSnapshots = false;
    $request->createFileSystemRequest->openZFSConfiguration->rootVolumeConfiguration->dataCompressionType = OpenZFSDataCompressionTypeEnum::NONE;
    $request->createFileSystemRequest->openZFSConfiguration->rootVolumeConfiguration->nfsExports = [
        new OpenZFSNfsExport(),
        new OpenZFSNfsExport(),
    ];
    $request->createFileSystemRequest->openZFSConfiguration->rootVolumeConfiguration->readOnly = false;
    $request->createFileSystemRequest->openZFSConfiguration->rootVolumeConfiguration->recordSizeKiB = 296140;
    $request->createFileSystemRequest->openZFSConfiguration->rootVolumeConfiguration->userAndGroupQuotas = [
        new OpenZFSUserOrGroupQuota(),
        new OpenZFSUserOrGroupQuota(),
    ];
    $request->createFileSystemRequest->openZFSConfiguration->throughputCapacity = 118727;
    $request->createFileSystemRequest->openZFSConfiguration->weeklyMaintenanceStartTime = 'harum';
    $request->createFileSystemRequest->securityGroupIds = [
        'accusamus',
        'commodi',
    ];
    $request->createFileSystemRequest->storageCapacity = 918236;
    $request->createFileSystemRequest->storageType = StorageTypeEnum::SSD;
    $request->createFileSystemRequest->subnetIds = [
        'quidem',
    ];
    $request->createFileSystemRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createFileSystemRequest->windowsConfiguration = new CreateFileSystemWindowsConfiguration();
    $request->createFileSystemRequest->windowsConfiguration->activeDirectoryId = 'excepturi';
    $request->createFileSystemRequest->windowsConfiguration->aliases = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->createFileSystemRequest->windowsConfiguration->auditLogConfiguration = new WindowsAuditLogCreateConfiguration();
    $request->createFileSystemRequest->windowsConfiguration->auditLogConfiguration->auditLogDestination = 'quasi';
    $request->createFileSystemRequest->windowsConfiguration->auditLogConfiguration->fileAccessAuditLogLevel = WindowsAccessAuditLogLevelEnum::SUCCESS_AND_FAILURE;
    $request->createFileSystemRequest->windowsConfiguration->auditLogConfiguration->fileShareAccessAuditLogLevel = WindowsAccessAuditLogLevelEnum::FAILURE_ONLY;
    $request->createFileSystemRequest->windowsConfiguration->automaticBackupRetentionDays = 83112;
    $request->createFileSystemRequest->windowsConfiguration->copyTagsToBackups = false;
    $request->createFileSystemRequest->windowsConfiguration->dailyAutomaticBackupStartTime = 'itaque';
    $request->createFileSystemRequest->windowsConfiguration->deploymentType = WindowsDeploymentTypeEnum::MULTI_AZ1;
    $request->createFileSystemRequest->windowsConfiguration->preferredSubnetId = 'enim';
    $request->createFileSystemRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfiguration();
    $request->createFileSystemRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->dnsIps = [
        'est',
    ];
    $request->createFileSystemRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->domainName = 'quibusdam';
    $request->createFileSystemRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->fileSystemAdministratorsGroup = 'explicabo';
    $request->createFileSystemRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->organizationalUnitDistinguishedName = 'deserunt';
    $request->createFileSystemRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->password = 'distinctio';
    $request->createFileSystemRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->userName = 'Ron18';
    $request->createFileSystemRequest->windowsConfiguration->throughputCapacity = 397821;
    $request->createFileSystemRequest->windowsConfiguration->weeklyMaintenanceStartTime = 'cupiditate';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = CreateFileSystemXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_CREATE_FILE_SYSTEM;

    $response = $sdk->sdk->createFileSystem($request);

    if ($response->createFileSystemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFileSystemFromBackup

<p>Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup.</p> <p>If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, this operation does the following:</p> <ul> <li> <p>Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings.</p> <p>By using the idempotent operation, you can retry a <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html"> DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileSystemFromBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileSystemFromBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileSystemLustreConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoImportPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LustreDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DriveCacheTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LustreLogCreateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LustreAccessAuditLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\LustreRootSquashConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileSystemOpenZFSConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskIopsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiskIopsConfigurationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSCreateRootVolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSDataCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSNfsExport;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSClientConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSUserOrGroupQuota;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSQuotaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StorageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\CreateFileSystemWindowsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WindowsAuditLogCreateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WindowsAccessAuditLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindowsDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SelfManagedActiveDirectoryConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileSystemFromBackupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFileSystemFromBackupRequest();
    $request->createFileSystemFromBackupRequest = new CreateFileSystemFromBackupRequest();
    $request->createFileSystemFromBackupRequest->backupId = 'dolorum';
    $request->createFileSystemFromBackupRequest->clientRequestToken = 'excepturi';
    $request->createFileSystemFromBackupRequest->fileSystemTypeVersion = 'tempora';
    $request->createFileSystemFromBackupRequest->kmsKeyId = 'facilis';
    $request->createFileSystemFromBackupRequest->lustreConfiguration = new CreateFileSystemLustreConfiguration();
    $request->createFileSystemFromBackupRequest->lustreConfiguration->autoImportPolicy = AutoImportPolicyTypeEnum::NEW_CHANGED;
    $request->createFileSystemFromBackupRequest->lustreConfiguration->automaticBackupRetentionDays = 288476;
    $request->createFileSystemFromBackupRequest->lustreConfiguration->copyTagsToBackups = false;
    $request->createFileSystemFromBackupRequest->lustreConfiguration->dailyAutomaticBackupStartTime = 'delectus';
    $request->createFileSystemFromBackupRequest->lustreConfiguration->dataCompressionType = DataCompressionTypeEnum::NONE;
    $request->createFileSystemFromBackupRequest->lustreConfiguration->deploymentType = LustreDeploymentTypeEnum::SCRATCH1;
    $request->createFileSystemFromBackupRequest->lustreConfiguration->driveCacheType = DriveCacheTypeEnum::READ;
    $request->createFileSystemFromBackupRequest->lustreConfiguration->exportPath = 'sint';
    $request->createFileSystemFromBackupRequest->lustreConfiguration->importPath = 'aliquid';
    $request->createFileSystemFromBackupRequest->lustreConfiguration->importedFileChunkSize = 592042;
    $request->createFileSystemFromBackupRequest->lustreConfiguration->logConfiguration = new LustreLogCreateConfiguration();
    $request->createFileSystemFromBackupRequest->lustreConfiguration->logConfiguration->destination = 'necessitatibus';
    $request->createFileSystemFromBackupRequest->lustreConfiguration->logConfiguration->level = LustreAccessAuditLogLevelEnum::ERROR_ONLY;
    $request->createFileSystemFromBackupRequest->lustreConfiguration->perUnitStorageThroughput = 638921;
    $request->createFileSystemFromBackupRequest->lustreConfiguration->rootSquashConfiguration = new LustreRootSquashConfiguration();
    $request->createFileSystemFromBackupRequest->lustreConfiguration->rootSquashConfiguration->noSquashNids = [
        'debitis',
    ];
    $request->createFileSystemFromBackupRequest->lustreConfiguration->rootSquashConfiguration->rootSquash = 'a';
    $request->createFileSystemFromBackupRequest->lustreConfiguration->weeklyMaintenanceStartTime = 'dolorum';
    $request->createFileSystemFromBackupRequest->openZFSConfiguration = new CreateFileSystemOpenZFSConfiguration();
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->automaticBackupRetentionDays = 447125;
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->copyTagsToBackups = false;
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->copyTagsToVolumes = false;
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->dailyAutomaticBackupStartTime = 'in';
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->deploymentType = OpenZFSDeploymentTypeEnum::SINGLE_AZ2;
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->diskIopsConfiguration = new DiskIopsConfiguration();
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->diskIopsConfiguration->iops = 978571;
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->diskIopsConfiguration->mode = DiskIopsConfigurationModeEnum::USER_PROVISIONED;
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->rootVolumeConfiguration = new OpenZFSCreateRootVolumeConfiguration();
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->rootVolumeConfiguration->copyTagsToSnapshots = false;
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->rootVolumeConfiguration->dataCompressionType = OpenZFSDataCompressionTypeEnum::NONE;
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->rootVolumeConfiguration->nfsExports = [
        new OpenZFSNfsExport(),
        new OpenZFSNfsExport(),
    ];
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->rootVolumeConfiguration->readOnly = false;
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->rootVolumeConfiguration->recordSizeKiB = 767024;
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->rootVolumeConfiguration->userAndGroupQuotas = [
        new OpenZFSUserOrGroupQuota(),
        new OpenZFSUserOrGroupQuota(),
        new OpenZFSUserOrGroupQuota(),
        new OpenZFSUserOrGroupQuota(),
    ];
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->throughputCapacity = 411820;
    $request->createFileSystemFromBackupRequest->openZFSConfiguration->weeklyMaintenanceStartTime = 'aliquid';
    $request->createFileSystemFromBackupRequest->securityGroupIds = [
        'accusamus',
        'non',
        'occaecati',
    ];
    $request->createFileSystemFromBackupRequest->storageCapacity = 313218;
    $request->createFileSystemFromBackupRequest->storageType = StorageTypeEnum::HDD;
    $request->createFileSystemFromBackupRequest->subnetIds = [
        'quidem',
        'provident',
        'nam',
        'id',
    ];
    $request->createFileSystemFromBackupRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createFileSystemFromBackupRequest->windowsConfiguration = new CreateFileSystemWindowsConfiguration();
    $request->createFileSystemFromBackupRequest->windowsConfiguration->activeDirectoryId = 'deleniti';
    $request->createFileSystemFromBackupRequest->windowsConfiguration->aliases = [
        'amet',
        'deserunt',
        'nisi',
        'vel',
    ];
    $request->createFileSystemFromBackupRequest->windowsConfiguration->auditLogConfiguration = new WindowsAuditLogCreateConfiguration();
    $request->createFileSystemFromBackupRequest->windowsConfiguration->auditLogConfiguration->auditLogDestination = 'natus';
    $request->createFileSystemFromBackupRequest->windowsConfiguration->auditLogConfiguration->fileAccessAuditLogLevel = WindowsAccessAuditLogLevelEnum::FAILURE_ONLY;
    $request->createFileSystemFromBackupRequest->windowsConfiguration->auditLogConfiguration->fileShareAccessAuditLogLevel = WindowsAccessAuditLogLevelEnum::SUCCESS_ONLY;
    $request->createFileSystemFromBackupRequest->windowsConfiguration->automaticBackupRetentionDays = 19193;
    $request->createFileSystemFromBackupRequest->windowsConfiguration->copyTagsToBackups = false;
    $request->createFileSystemFromBackupRequest->windowsConfiguration->dailyAutomaticBackupStartTime = 'nihil';
    $request->createFileSystemFromBackupRequest->windowsConfiguration->deploymentType = WindowsDeploymentTypeEnum::MULTI_AZ1;
    $request->createFileSystemFromBackupRequest->windowsConfiguration->preferredSubnetId = 'distinctio';
    $request->createFileSystemFromBackupRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfiguration();
    $request->createFileSystemFromBackupRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->dnsIps = [
        'labore',
        'labore',
        'suscipit',
    ];
    $request->createFileSystemFromBackupRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->domainName = 'natus';
    $request->createFileSystemFromBackupRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->fileSystemAdministratorsGroup = 'nobis';
    $request->createFileSystemFromBackupRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->organizationalUnitDistinguishedName = 'eum';
    $request->createFileSystemFromBackupRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->password = 'vero';
    $request->createFileSystemFromBackupRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->userName = 'Brice9';
    $request->createFileSystemFromBackupRequest->windowsConfiguration->throughputCapacity = 569965;
    $request->createFileSystemFromBackupRequest->windowsConfiguration->weeklyMaintenanceStartTime = 'ullam';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = CreateFileSystemFromBackupXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_CREATE_FILE_SYSTEM_FROM_BACKUP;

    $response = $sdk->sdk->createFileSystemFromBackup($request);

    if ($response->createFileSystemFromBackupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSnapshot

<p>Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version.</p> <p>If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a snapshot with the specified client request token doesn't exist, <code>CreateSnapshot</code> does the following:</p> <ul> <li> <p>Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the snapshot.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateSnapshot</code> operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateSnapshot</code> operation returns while the snapshot's lifecycle state is still <code>CREATING</code>. You can check the snapshot creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> operation, which returns the snapshot state along with other information.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSnapshotRequest();
    $request->createSnapshotRequest = new CreateSnapshotRequest();
    $request->createSnapshotRequest->clientRequestToken = 'ad';
    $request->createSnapshotRequest->name = 'Carmen Treutel';
    $request->createSnapshotRequest->tags = [
        new Tag(),
    ];
    $request->createSnapshotRequest->volumeId = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = CreateSnapshotXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_CREATE_SNAPSHOT;

    $response = $sdk->sdk->createSnapshot($request);

    if ($response->createSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStorageVirtualMachine

Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStorageVirtualMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateStorageVirtualMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSvmActiveDirectoryConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SelfManagedActiveDirectoryConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StorageVirtualMachineRootVolumeSecurityStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateStorageVirtualMachineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStorageVirtualMachineRequest();
    $request->createStorageVirtualMachineRequest = new CreateStorageVirtualMachineRequest();
    $request->createStorageVirtualMachineRequest->activeDirectoryConfiguration = new CreateSvmActiveDirectoryConfiguration();
    $request->createStorageVirtualMachineRequest->activeDirectoryConfiguration->netBiosName = 'architecto';
    $request->createStorageVirtualMachineRequest->activeDirectoryConfiguration->selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfiguration();
    $request->createStorageVirtualMachineRequest->activeDirectoryConfiguration->selfManagedActiveDirectoryConfiguration->dnsIps = [
        'repudiandae',
    ];
    $request->createStorageVirtualMachineRequest->activeDirectoryConfiguration->selfManagedActiveDirectoryConfiguration->domainName = 'ullam';
    $request->createStorageVirtualMachineRequest->activeDirectoryConfiguration->selfManagedActiveDirectoryConfiguration->fileSystemAdministratorsGroup = 'expedita';
    $request->createStorageVirtualMachineRequest->activeDirectoryConfiguration->selfManagedActiveDirectoryConfiguration->organizationalUnitDistinguishedName = 'nihil';
    $request->createStorageVirtualMachineRequest->activeDirectoryConfiguration->selfManagedActiveDirectoryConfiguration->password = 'repellat';
    $request->createStorageVirtualMachineRequest->activeDirectoryConfiguration->selfManagedActiveDirectoryConfiguration->userName = 'Roman_Cormier3';
    $request->createStorageVirtualMachineRequest->clientRequestToken = 'consequuntur';
    $request->createStorageVirtualMachineRequest->fileSystemId = 'praesentium';
    $request->createStorageVirtualMachineRequest->name = 'Victor Casper';
    $request->createStorageVirtualMachineRequest->rootVolumeSecurityStyle = StorageVirtualMachineRootVolumeSecurityStyleEnum::MIXED;
    $request->createStorageVirtualMachineRequest->svmAdminPassword = 'maxime';
    $request->createStorageVirtualMachineRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = CreateStorageVirtualMachineXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_CREATE_STORAGE_VIRTUAL_MACHINE;

    $response = $sdk->sdk->createStorageVirtualMachine($request);

    if ($response->createStorageVirtualMachineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVolume

Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateOntapVolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputOntapVolumeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\TieringPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TieringPolicyNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateOpenZFSVolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSDataCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSNfsExport;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSClientConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CreateOpenZFSOriginSnapshotConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSCopyStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSUserOrGroupQuota;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSQuotaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VolumeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateVolumeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVolumeRequest();
    $request->createVolumeRequest = new CreateVolumeRequest();
    $request->createVolumeRequest->clientRequestToken = 'ipsam';
    $request->createVolumeRequest->name = 'Dr. Stacey Reichert';
    $request->createVolumeRequest->ontapConfiguration = new CreateOntapVolumeConfiguration();
    $request->createVolumeRequest->ontapConfiguration->copyTagsToBackups = false;
    $request->createVolumeRequest->ontapConfiguration->junctionPath = 'voluptatibus';
    $request->createVolumeRequest->ontapConfiguration->ontapVolumeType = InputOntapVolumeTypeEnum::RW;
    $request->createVolumeRequest->ontapConfiguration->securityStyle = SecurityStyleEnum::MIXED;
    $request->createVolumeRequest->ontapConfiguration->sizeInMegabytes = 230742;
    $request->createVolumeRequest->ontapConfiguration->snapshotPolicy = 'aut';
    $request->createVolumeRequest->ontapConfiguration->storageEfficiencyEnabled = false;
    $request->createVolumeRequest->ontapConfiguration->storageVirtualMachineId = 'cumque';
    $request->createVolumeRequest->ontapConfiguration->tieringPolicy = new TieringPolicy();
    $request->createVolumeRequest->ontapConfiguration->tieringPolicy->coolingPeriod = 359978;
    $request->createVolumeRequest->ontapConfiguration->tieringPolicy->name = TieringPolicyNameEnum::NONE;
    $request->createVolumeRequest->openZFSConfiguration = new CreateOpenZFSVolumeConfiguration();
    $request->createVolumeRequest->openZFSConfiguration->copyTagsToSnapshots = false;
    $request->createVolumeRequest->openZFSConfiguration->dataCompressionType = OpenZFSDataCompressionTypeEnum::LZ4;
    $request->createVolumeRequest->openZFSConfiguration->nfsExports = [
        new OpenZFSNfsExport(),
        new OpenZFSNfsExport(),
        new OpenZFSNfsExport(),
    ];
    $request->createVolumeRequest->openZFSConfiguration->originSnapshot = new CreateOpenZFSOriginSnapshotConfiguration();
    $request->createVolumeRequest->openZFSConfiguration->originSnapshot->copyStrategy = OpenZFSCopyStrategyEnum::CLONE;
    $request->createVolumeRequest->openZFSConfiguration->originSnapshot->snapshotARN = 'quis';
    $request->createVolumeRequest->openZFSConfiguration->parentVolumeId = 'totam';
    $request->createVolumeRequest->openZFSConfiguration->readOnly = false;
    $request->createVolumeRequest->openZFSConfiguration->recordSizeKiB = 489549;
    $request->createVolumeRequest->openZFSConfiguration->storageCapacityQuotaGiB = 54338;
    $request->createVolumeRequest->openZFSConfiguration->storageCapacityReservationGiB = 338985;
    $request->createVolumeRequest->openZFSConfiguration->userAndGroupQuotas = [
        new OpenZFSUserOrGroupQuota(),
    ];
    $request->createVolumeRequest->tags = [
        new Tag(),
    ];
    $request->createVolumeRequest->volumeType = VolumeTypeEnum::ONTAP;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = CreateVolumeXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_CREATE_VOLUME;

    $response = $sdk->sdk->createVolume($request);

    if ($response->createVolumeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVolumeFromBackup

Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVolumeFromBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVolumeFromBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateOntapVolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputOntapVolumeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\TieringPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TieringPolicyNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateVolumeFromBackupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVolumeFromBackupRequest();
    $request->createVolumeFromBackupRequest = new CreateVolumeFromBackupRequest();
    $request->createVolumeFromBackupRequest->backupId = 'recusandae';
    $request->createVolumeFromBackupRequest->clientRequestToken = 'omnis';
    $request->createVolumeFromBackupRequest->name = 'Freddie Bartoletti';
    $request->createVolumeFromBackupRequest->ontapConfiguration = new CreateOntapVolumeConfiguration();
    $request->createVolumeFromBackupRequest->ontapConfiguration->copyTagsToBackups = false;
    $request->createVolumeFromBackupRequest->ontapConfiguration->junctionPath = 'blanditiis';
    $request->createVolumeFromBackupRequest->ontapConfiguration->ontapVolumeType = InputOntapVolumeTypeEnum::DP;
    $request->createVolumeFromBackupRequest->ontapConfiguration->securityStyle = SecurityStyleEnum::UNIX;
    $request->createVolumeFromBackupRequest->ontapConfiguration->sizeInMegabytes = 577229;
    $request->createVolumeFromBackupRequest->ontapConfiguration->snapshotPolicy = 'rerum';
    $request->createVolumeFromBackupRequest->ontapConfiguration->storageEfficiencyEnabled = false;
    $request->createVolumeFromBackupRequest->ontapConfiguration->storageVirtualMachineId = 'adipisci';
    $request->createVolumeFromBackupRequest->ontapConfiguration->tieringPolicy = new TieringPolicy();
    $request->createVolumeFromBackupRequest->ontapConfiguration->tieringPolicy->coolingPeriod = 992397;
    $request->createVolumeFromBackupRequest->ontapConfiguration->tieringPolicy->name = TieringPolicyNameEnum::NONE;
    $request->createVolumeFromBackupRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = CreateVolumeFromBackupXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_CREATE_VOLUME_FROM_BACKUP;

    $response = $sdk->sdk->createVolumeFromBackup($request);

    if ($response->createVolumeFromBackupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBackup

<p>Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone.</p> <p>The <code>DeleteBackup</code> call returns instantly. The backup won't show up in later <code>DescribeBackups</code> calls.</p> <important> <p>The data in a deleted backup is also deleted and can't be recovered by any means.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBackupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBackupRequest();
    $request->deleteBackupRequest = new DeleteBackupRequest();
    $request->deleteBackupRequest->backupId = 'delectus';
    $request->deleteBackupRequest->clientRequestToken = 'quaerat';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DeleteBackupXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DELETE_BACKUP;

    $response = $sdk->sdk->deleteBackup($request);

    if ($response->deleteBackupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataRepositoryAssociation

Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataRepositoryAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDataRepositoryAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataRepositoryAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataRepositoryAssociationRequest();
    $request->deleteDataRepositoryAssociationRequest = new DeleteDataRepositoryAssociationRequest();
    $request->deleteDataRepositoryAssociationRequest->associationId = 'hic';
    $request->deleteDataRepositoryAssociationRequest->clientRequestToken = 'excepturi';
    $request->deleteDataRepositoryAssociationRequest->deleteDataInFileSystem = false;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = DeleteDataRepositoryAssociationXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DELETE_DATA_REPOSITORY_ASSOCIATION;

    $response = $sdk->sdk->deleteDataRepositoryAssociation($request);

    if ($response->deleteDataRepositoryAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFileCache

<p>Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone.</p> <p>The <code>DeleteFileCache</code> operation returns while the cache has the <code>DELETING</code> status. You can check the cache deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the <code>DescribeFileCaches</code> operation returns a <code>FileCacheNotFound</code> error.</p> <important> <p>The data in a deleted cache is also deleted and can't be recovered by any means.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileCacheRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileCacheRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileCacheXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFileCacheRequest();
    $request->deleteFileCacheRequest = new DeleteFileCacheRequest();
    $request->deleteFileCacheRequest->clientRequestToken = 'veritatis';
    $request->deleteFileCacheRequest->fileCacheId = 'ipsa';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DeleteFileCacheXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DELETE_FILE_CACHE;

    $response = $sdk->sdk->deleteFileCache($request);

    if ($response->deleteFileCacheResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFileSystem

<p>Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted.</p> <p>To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a <code>FileSystemId</code> value to the <code>DeleFileSystem</code> operation.</p> <p>By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted.</p> <p>The <code>DeleteFileSystem</code> operation returns while the file system has the <code>DELETING</code> status. You can check the file system deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the <code>DescribeFileSystems</code> operation returns a <code>FileSystemNotFound</code> error.</p> <note> <p>If a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code> state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request).</p> </note> <important> <p>The data in a deleted file system is also deleted and can't be recovered by any means.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileSystemLustreConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileSystemOpenZFSConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileSystemOpenZFSOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFileSystemWindowsConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileSystemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFileSystemRequest();
    $request->deleteFileSystemRequest = new DeleteFileSystemRequest();
    $request->deleteFileSystemRequest->clientRequestToken = 'voluptas';
    $request->deleteFileSystemRequest->fileSystemId = 'natus';
    $request->deleteFileSystemRequest->lustreConfiguration = new DeleteFileSystemLustreConfiguration();
    $request->deleteFileSystemRequest->lustreConfiguration->finalBackupTags = [
        new Tag(),
    ];
    $request->deleteFileSystemRequest->lustreConfiguration->skipFinalBackup = false;
    $request->deleteFileSystemRequest->openZFSConfiguration = new DeleteFileSystemOpenZFSConfiguration();
    $request->deleteFileSystemRequest->openZFSConfiguration->finalBackupTags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->deleteFileSystemRequest->openZFSConfiguration->options = [
        DeleteFileSystemOpenZFSOptionEnum::DELETE_CHILD_VOLUMES_AND_SNAPSHOTS,
    ];
    $request->deleteFileSystemRequest->openZFSConfiguration->skipFinalBackup = false;
    $request->deleteFileSystemRequest->windowsConfiguration = new DeleteFileSystemWindowsConfiguration();
    $request->deleteFileSystemRequest->windowsConfiguration->finalBackupTags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->deleteFileSystemRequest->windowsConfiguration->skipFinalBackup = false;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = DeleteFileSystemXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DELETE_FILE_SYSTEM;

    $response = $sdk->sdk->deleteFileSystem($request);

    if ($response->deleteFileSystemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSnapshot

<p>Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup. </p> <p>The <code>DeleteSnapshot</code> operation returns instantly. The snapshot appears with the lifecycle status of <code>DELETING</code> until the deletion is complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSnapshotRequest();
    $request->deleteSnapshotRequest = new DeleteSnapshotRequest();
    $request->deleteSnapshotRequest->clientRequestToken = 'omnis';
    $request->deleteSnapshotRequest->snapshotId = 'necessitatibus';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = DeleteSnapshotXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DELETE_SNAPSHOT;

    $response = $sdk->sdk->deleteSnapshot($request);

    if ($response->deleteSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStorageVirtualMachine

Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStorageVirtualMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteStorageVirtualMachineRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStorageVirtualMachineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStorageVirtualMachineRequest();
    $request->deleteStorageVirtualMachineRequest = new DeleteStorageVirtualMachineRequest();
    $request->deleteStorageVirtualMachineRequest->clientRequestToken = 'eius';
    $request->deleteStorageVirtualMachineRequest->storageVirtualMachineId = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = DeleteStorageVirtualMachineXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DELETE_STORAGE_VIRTUAL_MACHINE;

    $response = $sdk->sdk->deleteStorageVirtualMachine($request);

    if ($response->deleteStorageVirtualMachineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVolume

Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVolumeOntapConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVolumeOpenZFSConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeleteOpenZFSVolumeOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVolumeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVolumeRequest();
    $request->deleteVolumeRequest = new DeleteVolumeRequest();
    $request->deleteVolumeRequest->clientRequestToken = 'deserunt';
    $request->deleteVolumeRequest->ontapConfiguration = new DeleteVolumeOntapConfiguration();
    $request->deleteVolumeRequest->ontapConfiguration->finalBackupTags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->deleteVolumeRequest->ontapConfiguration->skipFinalBackup = false;
    $request->deleteVolumeRequest->openZFSConfiguration = new DeleteVolumeOpenZFSConfiguration();
    $request->deleteVolumeRequest->openZFSConfiguration->options = [
        DeleteOpenZFSVolumeOptionEnum::DELETE_CHILD_VOLUMES_AND_SNAPSHOTS,
        DeleteOpenZFSVolumeOptionEnum::DELETE_CHILD_VOLUMES_AND_SNAPSHOTS,
    ];
    $request->deleteVolumeRequest->volumeId = 'repellendus';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DeleteVolumeXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DELETE_VOLUME;

    $response = $sdk->sdk->deleteVolume($request);

    if ($response->deleteVolumeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBackups

<p>Returns the description of a specific Amazon FSx backup, if a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code> parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of the <code>NextToken</code> value from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your backups. <code>DescribeBackups</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of backup descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of the backups returned in the response of one <code>DescribeBackups</code> call and the order of the backups returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBackupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBackupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBackupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBackupsRequest();
    $request->describeBackupsRequest = new DescribeBackupsRequest();
    $request->describeBackupsRequest->backupIds = [
        'officiis',
        'qui',
        'dolorum',
        'a',
    ];
    $request->describeBackupsRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->describeBackupsRequest->maxResults = 687488;
    $request->describeBackupsRequest->nextToken = 'iusto';
    $request->maxResults = 'ipsum';
    $request->nextToken = 'quisquam';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DescribeBackupsXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_BACKUPS;

    $response = $sdk->sdk->describeBackups($request);

    if ($response->describeBackupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataRepositoryAssociations

<p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository associations, if one or more <code>AssociationIds</code> values are provided in the request, or if filters are used in the request. Data repository associations are supported on Amazon File Cache resources and all Amazon FSx for Lustre file systems excluding <code>Scratch_1</code> deployment types.</p> <p>You can use filters to narrow the response to include just data repository associations for specific file systems (use the <code>file-system-id</code> filter with the ID of the file system) or caches (use the <code>file-cache-id</code> filter with the ID of the cache), or data repository associations for a specific repository type (use the <code>data-repository-type</code> filter with a value of <code>S3</code> or <code>NFS</code>). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all data repository associations, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataRepositoryAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDataRepositoryAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataRepositoryAssociationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDataRepositoryAssociationsRequest();
    $request->describeDataRepositoryAssociationsRequest = new DescribeDataRepositoryAssociationsRequest();
    $request->describeDataRepositoryAssociationsRequest->associationIds = [
        'totam',
        'nihil',
        'sit',
        'expedita',
    ];
    $request->describeDataRepositoryAssociationsRequest->filters = [
        new Filter(),
    ];
    $request->describeDataRepositoryAssociationsRequest->maxResults = 153694;
    $request->describeDataRepositoryAssociationsRequest->nextToken = 'vel';
    $request->maxResults = 'libero';
    $request->nextToken = 'voluptas';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = DescribeDataRepositoryAssociationsXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_DATA_REPOSITORY_ASSOCIATIONS;

    $response = $sdk->sdk->describeDataRepositoryAssociations($request);

    if ($response->describeDataRepositoryAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataRepositoryTasks

<p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems or caches, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all tasks, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of tasks returned in a response. If more tasks remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataRepositoryTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDataRepositoryTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataRepositoryTaskFilter;
use \OpenAPI\OpenAPI\Models\Shared\DataRepositoryTaskFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataRepositoryTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDataRepositoryTasksRequest();
    $request->describeDataRepositoryTasksRequest = new DescribeDataRepositoryTasksRequest();
    $request->describeDataRepositoryTasksRequest->filters = [
        new DataRepositoryTaskFilter(),
        new DataRepositoryTaskFilter(),
        new DataRepositoryTaskFilter(),
        new DataRepositoryTaskFilter(),
    ];
    $request->describeDataRepositoryTasksRequest->maxResults = 747080;
    $request->describeDataRepositoryTasksRequest->nextToken = 'dicta';
    $request->describeDataRepositoryTasksRequest->taskIds = [
        'totam',
        'incidunt',
        'aspernatur',
    ];
    $request->maxResults = 'dolores';
    $request->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = DescribeDataRepositoryTasksXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_DATA_REPOSITORY_TASKS;

    $response = $sdk->sdk->describeDataRepositoryTasks($request);

    if ($response->describeDataRepositoryTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFileCaches

<p>Returns the description of a specific Amazon File Cache resource, if a <code>FileCacheIds</code> value is provided for that cache. Otherwise, it returns descriptions of all caches owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all cache descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more cache descriptions remain, the operation returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your cache descriptions. <code>DescribeFileCaches</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> cache descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of caches returned in the response of one <code>DescribeFileCaches</code> call and the order of caches returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFileCachesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFileCachesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFileCachesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFileCachesRequest();
    $request->describeFileCachesRequest = new DescribeFileCachesRequest();
    $request->describeFileCachesRequest->fileCacheIds = [
        'magni',
    ];
    $request->describeFileCachesRequest->maxResults = 488056;
    $request->describeFileCachesRequest->nextToken = 'sunt';
    $request->maxResults = 'ullam';
    $request->nextToken = 'nam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = DescribeFileCachesXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_FILE_CACHES;

    $response = $sdk->sdk->describeFileCaches($request);

    if ($response->describeFileCachesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFileSystemAliases

Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a> provided in the <a>DescribeFileSystems</a> operation response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFileSystemAliasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFileSystemAliasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFileSystemAliasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFileSystemAliasesRequest();
    $request->describeFileSystemAliasesRequest = new DescribeFileSystemAliasesRequest();
    $request->describeFileSystemAliasesRequest->clientRequestToken = 'ipsum';
    $request->describeFileSystemAliasesRequest->fileSystemId = 'veritatis';
    $request->describeFileSystemAliasesRequest->maxResults = 749255;
    $request->describeFileSystemAliasesRequest->nextToken = 'quos';
    $request->maxResults = 'tempore';
    $request->nextToken = 'cupiditate';
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = DescribeFileSystemAliasesXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_FILE_SYSTEM_ALIASES;

    $response = $sdk->sdk->describeFileSystemAliases($request);

    if ($response->describeFileSystemAliasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFileSystems

<p>Returns the description of specific Amazon FSx file systems, if a <code>FileSystemIds</code> value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your file system descriptions. <code>DescribeFileSystems</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFileSystemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFileSystemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFileSystemsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFileSystemsRequest();
    $request->describeFileSystemsRequest = new DescribeFileSystemsRequest();
    $request->describeFileSystemsRequest->fileSystemIds = [
        'quae',
    ];
    $request->describeFileSystemsRequest->maxResults = 16429;
    $request->describeFileSystemsRequest->nextToken = 'quas';
    $request->maxResults = 'itaque';
    $request->nextToken = 'consequatur';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = DescribeFileSystemsXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_FILE_SYSTEMS;

    $response = $sdk->sdk->describeFileSystems($request);

    if ($response->describeFileSystemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSnapshots

<p>Returns the description of specific Amazon FSx for OpenZFS snapshots, if a <code>SnapshotIds</code> value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all snapshots, you can optionally specify the <code>MaxResults</code> parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response. </p> <p>Use this operation in an iterative process to retrieve a list of your snapshots. <code>DescribeSnapshots</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of snapshot descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of snapshots returned in the response of one <code>DescribeSnapshots</code> call and the order of backups returned across the responses of a multi-call iteration is unspecified. </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotFilter;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSnapshotsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSnapshotsRequest();
    $request->describeSnapshotsRequest = new DescribeSnapshotsRequest();
    $request->describeSnapshotsRequest->filters = [
        new SnapshotFilter(),
    ];
    $request->describeSnapshotsRequest->maxResults = 63955;
    $request->describeSnapshotsRequest->nextToken = 'laudantium';
    $request->describeSnapshotsRequest->snapshotIds = [
        'occaecati',
        'voluptatibus',
    ];
    $request->maxResults = 'quisquam';
    $request->nextToken = 'vero';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DescribeSnapshotsXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_SNAPSHOTS;

    $response = $sdk->sdk->describeSnapshots($request);

    if ($response->describeSnapshotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStorageVirtualMachines

Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStorageVirtualMachinesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStorageVirtualMachinesRequest;
use \OpenAPI\OpenAPI\Models\Shared\StorageVirtualMachineFilter;
use \OpenAPI\OpenAPI\Models\Shared\StorageVirtualMachineFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStorageVirtualMachinesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStorageVirtualMachinesRequest();
    $request->describeStorageVirtualMachinesRequest = new DescribeStorageVirtualMachinesRequest();
    $request->describeStorageVirtualMachinesRequest->filters = [
        new StorageVirtualMachineFilter(),
        new StorageVirtualMachineFilter(),
        new StorageVirtualMachineFilter(),
        new StorageVirtualMachineFilter(),
    ];
    $request->describeStorageVirtualMachinesRequest->maxResults = 492268;
    $request->describeStorageVirtualMachinesRequest->nextToken = 'hic';
    $request->describeStorageVirtualMachinesRequest->storageVirtualMachineIds = [
        'quod',
        'odio',
        'similique',
    ];
    $request->maxResults = 'facilis';
    $request->nextToken = 'vero';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = DescribeStorageVirtualMachinesXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_STORAGE_VIRTUAL_MACHINES;

    $response = $sdk->sdk->describeStorageVirtualMachines($request);

    if ($response->describeStorageVirtualMachinesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVolumes

Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVolumesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeVolumesRequest;
use \OpenAPI\OpenAPI\Models\Shared\VolumeFilter;
use \OpenAPI\OpenAPI\Models\Shared\VolumeFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVolumesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVolumesRequest();
    $request->describeVolumesRequest = new DescribeVolumesRequest();
    $request->describeVolumesRequest->filters = [
        new VolumeFilter(),
    ];
    $request->describeVolumesRequest->maxResults = 974259;
    $request->describeVolumesRequest->nextToken = 'exercitationem';
    $request->describeVolumesRequest->volumeIds = [
        'fugit',
        'porro',
        'maiores',
        'doloribus',
    ];
    $request->maxResults = 'iusto';
    $request->nextToken = 'eligendi';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = DescribeVolumesXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_VOLUMES;

    $response = $sdk->sdk->describeVolumes($request);

    if ($response->describeVolumesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateFileSystemAliases

<p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p> <p>The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFileSystemAliasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateFileSystemAliasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFileSystemAliasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateFileSystemAliasesRequest();
    $request->disassociateFileSystemAliasesRequest = new DisassociateFileSystemAliasesRequest();
    $request->disassociateFileSystemAliasesRequest->aliases = [
        'possimus',
        'magnam',
    ];
    $request->disassociateFileSystemAliasesRequest->clientRequestToken = 'ratione';
    $request->disassociateFileSystemAliasesRequest->fileSystemId = 'ex';
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = DisassociateFileSystemAliasesXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_DISASSOCIATE_FILE_SYSTEM_ALIASES;

    $response = $sdk->sdk->disassociateFileSystemAliases($request);

    if ($response->disassociateFileSystemAliasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Lists tags for Amazon FSx resources.</p> <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code> parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your tags. <code>ListTagsForResource</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of tags returned in the response of one <code>ListTagsForResource</code> call and the order of tags returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->maxResults = 569211;
    $request->listTagsForResourceRequest->nextToken = 'voluptatibus';
    $request->listTagsForResourceRequest->resourceARN = 'nostrum';
    $request->maxResults = 'sapiente';
    $request->nextToken = 'quisquam';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'inventore';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releaseFileSystemNfsV3Locks

Releases the file system lock from an Amazon FSx for OpenZFS file system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReleaseFileSystemNfsV3LocksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseFileSystemNfsV3LocksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleaseFileSystemNfsV3LocksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleaseFileSystemNfsV3LocksRequest();
    $request->releaseFileSystemNfsV3LocksRequest = new ReleaseFileSystemNfsV3LocksRequest();
    $request->releaseFileSystemNfsV3LocksRequest->clientRequestToken = 'magnam';
    $request->releaseFileSystemNfsV3LocksRequest->fileSystemId = 'ea';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = ReleaseFileSystemNfsV3LocksXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_RELEASE_FILE_SYSTEM_NFS_V3_LOCKS;

    $response = $sdk->sdk->releaseFileSystemNfsV3Locks($request);

    if ($response->releaseFileSystemNfsV3LocksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreVolumeFromSnapshot

Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreVolumeFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreVolumeFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreOpenZFSVolumeOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\RestoreVolumeFromSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreVolumeFromSnapshotRequest();
    $request->restoreVolumeFromSnapshotRequest = new RestoreVolumeFromSnapshotRequest();
    $request->restoreVolumeFromSnapshotRequest->clientRequestToken = 'libero';
    $request->restoreVolumeFromSnapshotRequest->options = [
        RestoreOpenZFSVolumeOptionEnum::DELETE_INTERMEDIATE_SNAPSHOTS,
    ];
    $request->restoreVolumeFromSnapshotRequest->snapshotId = 'deleniti';
    $request->restoreVolumeFromSnapshotRequest->volumeId = 'impedit';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = RestoreVolumeFromSnapshotXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_RESTORE_VOLUME_FROM_SNAPSHOT;

    $response = $sdk->sdk->restoreVolumeFromSnapshot($request);

    if ($response->restoreVolumeFromSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Tags an Amazon FSx resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'laborum';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

This action removes a tag from an Amazon FSx resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'voluptas';
    $request->untagResourceRequest->tagKeys = [
        'quasi',
        'tempora',
        'numquam',
    ];
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDataRepositoryAssociation

Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataRepositoryAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDataRepositoryAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\S3DataRepositoryConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoExportPolicy;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoImportPolicy;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataRepositoryAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDataRepositoryAssociationRequest();
    $request->updateDataRepositoryAssociationRequest = new UpdateDataRepositoryAssociationRequest();
    $request->updateDataRepositoryAssociationRequest->associationId = 'esse';
    $request->updateDataRepositoryAssociationRequest->clientRequestToken = 'esse';
    $request->updateDataRepositoryAssociationRequest->importedFileChunkSize = 524593;
    $request->updateDataRepositoryAssociationRequest->s3 = new S3DataRepositoryConfiguration();
    $request->updateDataRepositoryAssociationRequest->s3->autoExportPolicy = new AutoExportPolicy();
    $request->updateDataRepositoryAssociationRequest->s3->autoExportPolicy->events = [
        EventTypeEnum::CHANGED,
        EventTypeEnum::DELETED,
        EventTypeEnum::DELETED,
    ];
    $request->updateDataRepositoryAssociationRequest->s3->autoImportPolicy = new AutoImportPolicy();
    $request->updateDataRepositoryAssociationRequest->s3->autoImportPolicy->events = [
        EventTypeEnum::CHANGED,
        EventTypeEnum::CHANGED,
    ];
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = UpdateDataRepositoryAssociationXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_UPDATE_DATA_REPOSITORY_ASSOCIATION;

    $response = $sdk->sdk->updateDataRepositoryAssociation($request);

    if ($response->updateDataRepositoryAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFileCache

Updates the configuration of an existing Amazon File Cache resource. You can update multiple properties in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFileCacheRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFileCacheRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFileCacheLustreConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFileCacheXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFileCacheRequest();
    $request->updateFileCacheRequest = new UpdateFileCacheRequest();
    $request->updateFileCacheRequest->clientRequestToken = 'quidem';
    $request->updateFileCacheRequest->fileCacheId = 'neque';
    $request->updateFileCacheRequest->lustreConfiguration = new UpdateFileCacheLustreConfiguration();
    $request->updateFileCacheRequest->lustreConfiguration->weeklyMaintenanceStartTime = 'quo';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = UpdateFileCacheXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_UPDATE_FILE_CACHE;

    $response = $sdk->sdk->updateFileCache($request);

    if ($response->updateFileCacheResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFileSystem

<p>Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request.</p> <p>For FSx for Windows File Server file systems, you can update the following properties:</p> <ul> <li> <p> <code>AuditLogConfiguration</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>SelfManagedActiveDirectoryConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for Lustre file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DataCompressionType</code> </p> </li> <li> <p> <code>LustreRootSquashConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for ONTAP file systems, you can update the following properties:</p> <ul> <li> <p> <code>AddRouteTableIds</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>FsxAdminPassword</code> </p> </li> <li> <p> <code>RemoveRouteTableIds</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for OpenZFS file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>CopyTagsToBackups</code> </p> </li> <li> <p> <code>CopyTagsToVolumes</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFileSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFileSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFileSystemLustreConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoImportPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LustreLogCreateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LustreAccessAuditLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\LustreRootSquashConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFileSystemOntapConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiskIopsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiskIopsConfigurationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFileSystemOpenZFSConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFileSystemWindowsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WindowsAuditLogCreateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WindowsAccessAuditLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\SelfManagedActiveDirectoryConfigurationUpdates;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFileSystemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFileSystemRequest();
    $request->updateFileSystemRequest = new UpdateFileSystemRequest();
    $request->updateFileSystemRequest->clientRequestToken = 'cupiditate';
    $request->updateFileSystemRequest->fileSystemId = 'consequatur';
    $request->updateFileSystemRequest->lustreConfiguration = new UpdateFileSystemLustreConfiguration();
    $request->updateFileSystemRequest->lustreConfiguration->autoImportPolicy = AutoImportPolicyTypeEnum::NEW;
    $request->updateFileSystemRequest->lustreConfiguration->automaticBackupRetentionDays = 892050;
    $request->updateFileSystemRequest->lustreConfiguration->dailyAutomaticBackupStartTime = 'ipsam';
    $request->updateFileSystemRequest->lustreConfiguration->dataCompressionType = DataCompressionTypeEnum::NONE;
    $request->updateFileSystemRequest->lustreConfiguration->logConfiguration = new LustreLogCreateConfiguration();
    $request->updateFileSystemRequest->lustreConfiguration->logConfiguration->destination = 'sequi';
    $request->updateFileSystemRequest->lustreConfiguration->logConfiguration->level = LustreAccessAuditLogLevelEnum::WARN_ERROR;
    $request->updateFileSystemRequest->lustreConfiguration->rootSquashConfiguration = new LustreRootSquashConfiguration();
    $request->updateFileSystemRequest->lustreConfiguration->rootSquashConfiguration->noSquashNids = [
        'recusandae',
        'aperiam',
    ];
    $request->updateFileSystemRequest->lustreConfiguration->rootSquashConfiguration->rootSquash = 'distinctio';
    $request->updateFileSystemRequest->lustreConfiguration->weeklyMaintenanceStartTime = 'quod';
    $request->updateFileSystemRequest->ontapConfiguration = new UpdateFileSystemOntapConfiguration();
    $request->updateFileSystemRequest->ontapConfiguration->addRouteTableIds = [
        'inventore',
        'nihil',
    ];
    $request->updateFileSystemRequest->ontapConfiguration->automaticBackupRetentionDays = 518835;
    $request->updateFileSystemRequest->ontapConfiguration->dailyAutomaticBackupStartTime = 'accusamus';
    $request->updateFileSystemRequest->ontapConfiguration->diskIopsConfiguration = new DiskIopsConfiguration();
    $request->updateFileSystemRequest->ontapConfiguration->diskIopsConfiguration->iops = 306810;
    $request->updateFileSystemRequest->ontapConfiguration->diskIopsConfiguration->mode = DiskIopsConfigurationModeEnum::AUTOMATIC;
    $request->updateFileSystemRequest->ontapConfiguration->fsxAdminPassword = 'occaecati';
    $request->updateFileSystemRequest->ontapConfiguration->removeRouteTableIds = [
        'sapiente',
        'dolores',
    ];
    $request->updateFileSystemRequest->ontapConfiguration->throughputCapacity = 645570;
    $request->updateFileSystemRequest->ontapConfiguration->weeklyMaintenanceStartTime = 'molestiae';
    $request->updateFileSystemRequest->openZFSConfiguration = new UpdateFileSystemOpenZFSConfiguration();
    $request->updateFileSystemRequest->openZFSConfiguration->automaticBackupRetentionDays = 35362;
    $request->updateFileSystemRequest->openZFSConfiguration->copyTagsToBackups = false;
    $request->updateFileSystemRequest->openZFSConfiguration->copyTagsToVolumes = false;
    $request->updateFileSystemRequest->openZFSConfiguration->dailyAutomaticBackupStartTime = 'porro';
    $request->updateFileSystemRequest->openZFSConfiguration->diskIopsConfiguration = new DiskIopsConfiguration();
    $request->updateFileSystemRequest->openZFSConfiguration->diskIopsConfiguration->iops = 430402;
    $request->updateFileSystemRequest->openZFSConfiguration->diskIopsConfiguration->mode = DiskIopsConfigurationModeEnum::USER_PROVISIONED;
    $request->updateFileSystemRequest->openZFSConfiguration->throughputCapacity = 510017;
    $request->updateFileSystemRequest->openZFSConfiguration->weeklyMaintenanceStartTime = 'consequuntur';
    $request->updateFileSystemRequest->storageCapacity = 536178;
    $request->updateFileSystemRequest->windowsConfiguration = new UpdateFileSystemWindowsConfiguration();
    $request->updateFileSystemRequest->windowsConfiguration->auditLogConfiguration = new WindowsAuditLogCreateConfiguration();
    $request->updateFileSystemRequest->windowsConfiguration->auditLogConfiguration->auditLogDestination = 'fugit';
    $request->updateFileSystemRequest->windowsConfiguration->auditLogConfiguration->fileAccessAuditLogLevel = WindowsAccessAuditLogLevelEnum::FAILURE_ONLY;
    $request->updateFileSystemRequest->windowsConfiguration->auditLogConfiguration->fileShareAccessAuditLogLevel = WindowsAccessAuditLogLevelEnum::FAILURE_ONLY;
    $request->updateFileSystemRequest->windowsConfiguration->automaticBackupRetentionDays = 277596;
    $request->updateFileSystemRequest->windowsConfiguration->dailyAutomaticBackupStartTime = 'atque';
    $request->updateFileSystemRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfigurationUpdates();
    $request->updateFileSystemRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->dnsIps = [
        'minima',
    ];
    $request->updateFileSystemRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->password = 'nisi';
    $request->updateFileSystemRequest->windowsConfiguration->selfManagedActiveDirectoryConfiguration->userName = 'Caesar18';
    $request->updateFileSystemRequest->windowsConfiguration->throughputCapacity = 129412;
    $request->updateFileSystemRequest->windowsConfiguration->weeklyMaintenanceStartTime = 'saepe';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = UpdateFileSystemXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_UPDATE_FILE_SYSTEM;

    $response = $sdk->sdk->updateFileSystem($request);

    if ($response->updateFileSystemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSnapshot

Updates the name of an Amazon FSx for OpenZFS snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSnapshotRequest();
    $request->updateSnapshotRequest = new UpdateSnapshotRequest();
    $request->updateSnapshotRequest->clientRequestToken = 'esse';
    $request->updateSnapshotRequest->name = 'Marco Terry PhD';
    $request->updateSnapshotRequest->snapshotId = 'vel';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = UpdateSnapshotXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_UPDATE_SNAPSHOT;

    $response = $sdk->sdk->updateSnapshot($request);

    if ($response->updateSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStorageVirtualMachine

Updates an Amazon FSx for ONTAP storage virtual machine (SVM).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStorageVirtualMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStorageVirtualMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSvmActiveDirectoryConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SelfManagedActiveDirectoryConfigurationUpdates;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStorageVirtualMachineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStorageVirtualMachineRequest();
    $request->updateStorageVirtualMachineRequest = new UpdateStorageVirtualMachineRequest();
    $request->updateStorageVirtualMachineRequest->activeDirectoryConfiguration = new UpdateSvmActiveDirectoryConfiguration();
    $request->updateStorageVirtualMachineRequest->activeDirectoryConfiguration->selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfigurationUpdates();
    $request->updateStorageVirtualMachineRequest->activeDirectoryConfiguration->selfManagedActiveDirectoryConfiguration->dnsIps = [
        'culpa',
    ];
    $request->updateStorageVirtualMachineRequest->activeDirectoryConfiguration->selfManagedActiveDirectoryConfiguration->password = 'tempore';
    $request->updateStorageVirtualMachineRequest->activeDirectoryConfiguration->selfManagedActiveDirectoryConfiguration->userName = 'Dax0';
    $request->updateStorageVirtualMachineRequest->clientRequestToken = 'minus';
    $request->updateStorageVirtualMachineRequest->storageVirtualMachineId = 'quaerat';
    $request->updateStorageVirtualMachineRequest->svmAdminPassword = 'sapiente';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = UpdateStorageVirtualMachineXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_UPDATE_STORAGE_VIRTUAL_MACHINE;

    $response = $sdk->sdk->updateStorageVirtualMachine($request);

    if ($response->updateStorageVirtualMachineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVolume

Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateOntapVolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SecurityStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\TieringPolicy;
use \OpenAPI\OpenAPI\Models\Shared\TieringPolicyNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateOpenZFSVolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSDataCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSNfsExport;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSClientConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSUserOrGroupQuota;
use \OpenAPI\OpenAPI\Models\Shared\OpenZFSQuotaTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVolumeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVolumeRequest();
    $request->updateVolumeRequest = new UpdateVolumeRequest();
    $request->updateVolumeRequest->clientRequestToken = 'esse';
    $request->updateVolumeRequest->name = 'Lorene Mueller';
    $request->updateVolumeRequest->ontapConfiguration = new UpdateOntapVolumeConfiguration();
    $request->updateVolumeRequest->ontapConfiguration->copyTagsToBackups = false;
    $request->updateVolumeRequest->ontapConfiguration->junctionPath = 'possimus';
    $request->updateVolumeRequest->ontapConfiguration->securityStyle = SecurityStyleEnum::UNIX;
    $request->updateVolumeRequest->ontapConfiguration->sizeInMegabytes = 908844;
    $request->updateVolumeRequest->ontapConfiguration->snapshotPolicy = 'asperiores';
    $request->updateVolumeRequest->ontapConfiguration->storageEfficiencyEnabled = false;
    $request->updateVolumeRequest->ontapConfiguration->tieringPolicy = new TieringPolicy();
    $request->updateVolumeRequest->ontapConfiguration->tieringPolicy->coolingPeriod = 815524;
    $request->updateVolumeRequest->ontapConfiguration->tieringPolicy->name = TieringPolicyNameEnum::SNAPSHOT_ONLY;
    $request->updateVolumeRequest->openZFSConfiguration = new UpdateOpenZFSVolumeConfiguration();
    $request->updateVolumeRequest->openZFSConfiguration->dataCompressionType = OpenZFSDataCompressionTypeEnum::NONE;
    $request->updateVolumeRequest->openZFSConfiguration->nfsExports = [
        new OpenZFSNfsExport(),
    ];
    $request->updateVolumeRequest->openZFSConfiguration->readOnly = false;
    $request->updateVolumeRequest->openZFSConfiguration->recordSizeKiB = 628899;
    $request->updateVolumeRequest->openZFSConfiguration->storageCapacityQuotaGiB = 633608;
    $request->updateVolumeRequest->openZFSConfiguration->storageCapacityReservationGiB = 398434;
    $request->updateVolumeRequest->openZFSConfiguration->userAndGroupQuotas = [
        new OpenZFSUserOrGroupQuota(),
        new OpenZFSUserOrGroupQuota(),
        new OpenZFSUserOrGroupQuota(),
        new OpenZFSUserOrGroupQuota(),
    ];
    $request->updateVolumeRequest->volumeId = 'quae';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = UpdateVolumeXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_UPDATE_VOLUME;

    $response = $sdk->sdk->updateVolume($request);

    if ($response->updateVolumeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
