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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesRequest;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesResponse;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateFileSystemAliasesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFileSystemAliasesRequest req = new AssociateFileSystemAliasesRequest(                new AssociateFileSystemAliasesRequest(                new String[]{{
                                                add("delectus"),
                                            }}, "tempora") {{
                                clientRequestToken = "suscipit";
                            }};, AssociateFileSystemAliasesXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_ASSOCIATE_FILE_SYSTEM_ALIASES) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "placeat";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "nisi";
            }};            

            AssociateFileSystemAliasesResponse res = sdk.sdk.associateFileSystemAliases(req);

            if (res.associateFileSystemAliasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelDataRepositoryTask

<p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p> <ul> <li> <p>Any files that FSx has already exported are not reverted.</p> </li> <li> <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p> </li> <li> <p>FSx does not export any files that have not yet been exported.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelDataRepositoryTaskRequest;
import org.openapis.openapi.models.operations.CancelDataRepositoryTaskResponse;
import org.openapis.openapi.models.operations.CancelDataRepositoryTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelDataRepositoryTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelDataRepositoryTaskRequest req = new CancelDataRepositoryTaskRequest(                new CancelDataRepositoryTaskRequest("temporibus");, CancelDataRepositoryTaskXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_CANCEL_DATA_REPOSITORY_TASK) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "quis";
                xAmzCredential = "veritatis";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "repellendus";
            }};            

            CancelDataRepositoryTaskResponse res = sdk.sdk.cancelDataRepositoryTask(req);

            if (res.cancelDataRepositoryTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copyBackup

<p>Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account.</p> <p>You can use cross-Region backup copies for cross-Region disaster recovery. You can periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently has three partitions: <code>aws</code> (Standard Regions), <code>aws-cn</code> (China Regions), and <code>aws-us-gov</code> (Amazon Web Services GovCloud [US] Regions).</p> <p>You can also use backup copies to clone your file dataset to another Region or within the same Region.</p> <p>You can use the <code>SourceRegion</code> parameter to specify the Amazon Web Services Region from which the backup will be copied. For example, if you make the call from the <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code> Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter to make a cross-Region copy. If you don't specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy).</p> <p>For more information about creating backup copies, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups"> Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyBackupRequest;
import org.openapis.openapi.models.operations.CopyBackupResponse;
import org.openapis.openapi.models.operations.CopyBackupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CopyBackupRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopyBackupRequest req = new CopyBackupRequest(                new CopyBackupRequest("quo") {{
                                clientRequestToken = "odit";
                                copyTags = false;
                                kmsKeyId = "at";
                                sourceRegion = "at";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quod", "esse") {{
                                        key = "molestiae";
                                        value = "quod";
                                    }}),
                                    add(new Tag("dolorum", "dicta") {{
                                        key = "totam";
                                        value = "porro";
                                    }}),
                                    add(new Tag("occaecati", "fugit") {{
                                        key = "nam";
                                        value = "officia";
                                    }}),
                                    add(new Tag("optio", "totam") {{
                                        key = "deleniti";
                                        value = "hic";
                                    }}),
                                }};
                            }};, CopyBackupXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_COPY_BACKUP) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "molestiae";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "cum";
            }};            

            CopyBackupResponse res = sdk.sdk.copyBackup(req);

            if (res.copyBackupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBackup

<p>Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume.</p> <p>For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration:</p> <ul> <li> <p>A Persistent deployment type</p> </li> <li> <p>Are <i>not</i> linked to a data repository</p> </li> </ul> <p>For more information about backups, see the following:</p> <ul> <li> <p>For Amazon FSx for Lustre, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for Lustre backups</a>.</p> </li> <li> <p>For Amazon FSx for Windows, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for Windows backups</a>.</p> </li> <li> <p>For Amazon FSx for NetApp ONTAP, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp ONTAP backups</a>.</p> </li> <li> <p>For Amazon FSx for OpenZFS, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html">Working with FSx for OpenZFS backups</a>.</p> </li> </ul> <p>If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a backup with the specified client request token doesn't exist, <code>CreateBackup</code> does the following: </p> <ul> <li> <p>Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the backup.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateBackup</code> operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateBackup</code> operation returns while the backup's lifecycle state is still <code>CREATING</code>. You can check the backup creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html">DescribeBackups</a> operation, which returns the backup state along with other information.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBackupRequest;
import org.openapis.openapi.models.operations.CreateBackupResponse;
import org.openapis.openapi.models.operations.CreateBackupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateBackupRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBackupRequest req = new CreateBackupRequest(                new CreateBackupRequest() {{
                                clientRequestToken = "ipsum";
                                fileSystemId = "excepturi";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("natus", "sed") {{
                                        key = "perferendis";
                                        value = "ad";
                                    }}),
                                }};
                                volumeId = "iste";
                            }};, CreateBackupXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_CREATE_BACKUP) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            CreateBackupResponse res = sdk.sdk.createBackup(req);

            if (res.createBackupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataRepositoryAssociation

<p>Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.</p> <p>Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p> <note> <p> <code>CreateDataRepositoryAssociation</code> isn't supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the <code>CreateFileCache</code> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataRepositoryAssociationRequest;
import org.openapis.openapi.models.operations.CreateDataRepositoryAssociationResponse;
import org.openapis.openapi.models.operations.CreateDataRepositoryAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoExportPolicy;
import org.openapis.openapi.models.shared.AutoImportPolicy;
import org.openapis.openapi.models.shared.CreateDataRepositoryAssociationRequest;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.S3DataRepositoryConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataRepositoryAssociationRequest req = new CreateDataRepositoryAssociationRequest(                new CreateDataRepositoryAssociationRequest("iste", "iure") {{
                                batchImportMetaDataOnCreate = false;
                                clientRequestToken = "saepe";
                                fileSystemPath = "quidem";
                                importedFileChunkSize = 99280L;
                                s3 = new S3DataRepositoryConfiguration() {{
                                    autoExportPolicy = new AutoExportPolicy() {{
                                        events = new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                            add(EventTypeEnum.DELETED),
                                        }};
                                    }};;
                                    autoImportPolicy = new AutoImportPolicy() {{
                                        events = new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                            add(EventTypeEnum.CHANGED),
                                            add(EventTypeEnum.DELETED),
                                            add(EventTypeEnum.NEW_),
                                        }};
                                    }};;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nobis", "enim") {{
                                        key = "corporis";
                                        value = "explicabo";
                                    }}),
                                }};
                            }};, CreateDataRepositoryAssociationXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_CREATE_DATA_REPOSITORY_ASSOCIATION) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            CreateDataRepositoryAssociationResponse res = sdk.sdk.createDataRepositoryAssociation(req);

            if (res.createDataRepositoryAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataRepositoryTask

Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. A <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataRepositoryTaskRequest;
import org.openapis.openapi.models.operations.CreateDataRepositoryTaskResponse;
import org.openapis.openapi.models.operations.CreateDataRepositoryTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.CompletionReport;
import org.openapis.openapi.models.shared.CreateDataRepositoryTaskRequest;
import org.openapis.openapi.models.shared.DataRepositoryTaskTypeEnum;
import org.openapis.openapi.models.shared.ReportFormatEnum;
import org.openapis.openapi.models.shared.ReportScopeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataRepositoryTaskRequest req = new CreateDataRepositoryTaskRequest(                new CreateDataRepositoryTaskRequest("sapiente",                 new CompletionReport(false) {{
                                                format = ReportFormatEnum.REPORT_CSV20191124;
                                                path = "architecto";
                                                scope = ReportScopeEnum.FAILED_FILES_ONLY;
                                            }};, DataRepositoryTaskTypeEnum.RELEASE_DATA_FROM_FILESYSTEM) {{
                                capacityToRelease = 208876L;
                                clientRequestToken = "culpa";
                                paths = new String[]{{
                                    add("repellat"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("commodi", "quam") {{
                                        key = "occaecati";
                                        value = "numquam";
                                    }}),
                                    add(new Tag("error", "quia") {{
                                        key = "molestiae";
                                        value = "velit";
                                    }}),
                                    add(new Tag("laborum", "animi") {{
                                        key = "quis";
                                        value = "vitae";
                                    }}),
                                }};
                            }};, CreateDataRepositoryTaskXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_CREATE_DATA_REPOSITORY_TASK) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
            }};            

            CreateDataRepositoryTaskResponse res = sdk.sdk.createDataRepositoryTask(req);

            if (res.createDataRepositoryTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFileCache

<p>Creates a new Amazon File Cache resource.</p> <p>You can use this operation with a client request token in the request that Amazon File Cache uses to ensure idempotent creation. If a cache with the specified client request token exists and the parameters match, <code>CreateFileCache</code> returns the description of the existing cache. If a cache with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file cache with the specified client request token doesn't exist, <code>CreateFileCache</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon File Cache resourcewith an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the cache in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileCache</code> call returns while the cache's lifecycle state is still <code>CREATING</code>. You can check the cache creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns the cache state along with other information.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFileCacheRequest;
import org.openapis.openapi.models.operations.CreateFileCacheResponse;
import org.openapis.openapi.models.operations.CreateFileCacheXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateFileCacheLustreConfiguration;
import org.openapis.openapi.models.shared.CreateFileCacheRequest;
import org.openapis.openapi.models.shared.FileCacheDataRepositoryAssociation;
import org.openapis.openapi.models.shared.FileCacheLustreDeploymentTypeEnum;
import org.openapis.openapi.models.shared.FileCacheLustreMetadataConfiguration;
import org.openapis.openapi.models.shared.FileCacheNFSConfiguration;
import org.openapis.openapi.models.shared.FileCacheTypeEnum;
import org.openapis.openapi.models.shared.NfsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFileCacheRequest req = new CreateFileCacheRequest(                new CreateFileCacheRequest(FileCacheTypeEnum.LUSTRE, "aut", 97101L,                 new String[]{{
                                                add("temporibus"),
                                                add("laborum"),
                                                add("quasi"),
                                            }}) {{
                                clientRequestToken = "reiciendis";
                                copyTagsToDataRepositoryAssociations = false;
                                dataRepositoryAssociations = new org.openapis.openapi.models.shared.FileCacheDataRepositoryAssociation[]{{
                                    add(new FileCacheDataRepositoryAssociation("doloremque", "reprehenderit") {{
                                        dataRepositoryPath = "vero";
                                        dataRepositorySubdirectories = new String[]{{
                                            add("praesentium"),
                                            add("voluptatibus"),
                                        }};
                                        fileCachePath = "ipsa";
                                        nfs = new FileCacheNFSConfiguration(NfsVersionEnum.NFS3) {{
                                            dnsIps = new String[]{{
                                                add("voluptate"),
                                                add("cum"),
                                                add("perferendis"),
                                            }};
                                            version = NfsVersionEnum.NFS3;
                                        }};
                                    }}),
                                    add(new FileCacheDataRepositoryAssociation("repudiandae", "quae") {{
                                        dataRepositoryPath = "ut";
                                        dataRepositorySubdirectories = new String[]{{
                                            add("dicta"),
                                            add("corporis"),
                                            add("dolore"),
                                            add("iusto"),
                                        }};
                                        fileCachePath = "dicta";
                                        nfs = new FileCacheNFSConfiguration(NfsVersionEnum.NFS3) {{
                                            dnsIps = new String[]{{
                                                add("enim"),
                                                add("accusamus"),
                                                add("commodi"),
                                            }};
                                            version = NfsVersionEnum.NFS3;
                                        }};
                                    }}),
                                    add(new FileCacheDataRepositoryAssociation("repudiandae", "sint") {{
                                        dataRepositoryPath = "ipsum";
                                        dataRepositorySubdirectories = new String[]{{
                                            add("molestias"),
                                            add("excepturi"),
                                            add("pariatur"),
                                        }};
                                        fileCachePath = "modi";
                                        nfs = new FileCacheNFSConfiguration(NfsVersionEnum.NFS3) {{
                                            dnsIps = new String[]{{
                                                add("rem"),
                                                add("voluptates"),
                                                add("quasi"),
                                            }};
                                            version = NfsVersionEnum.NFS3;
                                        }};
                                    }}),
                                    add(new FileCacheDataRepositoryAssociation("distinctio", "quibusdam") {{
                                        dataRepositoryPath = "veritatis";
                                        dataRepositorySubdirectories = new String[]{{
                                            add("incidunt"),
                                            add("enim"),
                                            add("consequatur"),
                                            add("est"),
                                        }};
                                        fileCachePath = "quibusdam";
                                        nfs = new FileCacheNFSConfiguration(NfsVersionEnum.NFS3) {{
                                            dnsIps = new String[]{{
                                                add("deserunt"),
                                            }};
                                            version = NfsVersionEnum.NFS3;
                                        }};
                                    }}),
                                }};
                                kmsKeyId = "labore";
                                lustreConfiguration = new CreateFileCacheLustreConfiguration(FileCacheLustreDeploymentTypeEnum.CACHE1,                 new FileCacheLustreMetadataConfiguration(264730L);, 183191L) {{
                                    weeklyMaintenanceStartTime = "aliquid";
                                }};;
                                securityGroupIds = new String[]{{
                                    add("quos"),
                                    add("perferendis"),
                                    add("magni"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("fugit", "dolorum") {{
                                        key = "ipsam";
                                        value = "alias";
                                    }}),
                                    add(new Tag("facilis", "tempore") {{
                                        key = "excepturi";
                                        value = "tempora";
                                    }}),
                                    add(new Tag("eum", "non") {{
                                        key = "labore";
                                        value = "delectus";
                                    }}),
                                    add(new Tag("aliquid", "provident") {{
                                        key = "eligendi";
                                        value = "sint";
                                    }}),
                                }};
                            }};, CreateFileCacheXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_CREATE_FILE_CACHE) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateFileCacheResponse res = sdk.sdk.createFileCache(req);

            if (res.createFileCacheResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFileSystem

<p>Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the <code>CreateFileSystem</code> API operation:</p> <ul> <li> <p>Amazon FSx for Lustre</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a <code>CreateFileSystem</code> operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <p>If a file system with the specified client request token exists and the parameters match, <code>CreateFileSystem</code> returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, <code>CreateFileSystem</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFileSystemRequest;
import org.openapis.openapi.models.operations.CreateFileSystemResponse;
import org.openapis.openapi.models.operations.CreateFileSystemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoImportPolicyTypeEnum;
import org.openapis.openapi.models.shared.CreateFileSystemLustreConfiguration;
import org.openapis.openapi.models.shared.CreateFileSystemOntapConfiguration;
import org.openapis.openapi.models.shared.CreateFileSystemOpenZFSConfiguration;
import org.openapis.openapi.models.shared.CreateFileSystemRequest;
import org.openapis.openapi.models.shared.CreateFileSystemWindowsConfiguration;
import org.openapis.openapi.models.shared.DataCompressionTypeEnum;
import org.openapis.openapi.models.shared.DiskIopsConfiguration;
import org.openapis.openapi.models.shared.DiskIopsConfigurationModeEnum;
import org.openapis.openapi.models.shared.DriveCacheTypeEnum;
import org.openapis.openapi.models.shared.FileSystemTypeEnum;
import org.openapis.openapi.models.shared.LustreAccessAuditLogLevelEnum;
import org.openapis.openapi.models.shared.LustreDeploymentTypeEnum;
import org.openapis.openapi.models.shared.LustreLogCreateConfiguration;
import org.openapis.openapi.models.shared.LustreRootSquashConfiguration;
import org.openapis.openapi.models.shared.OntapDeploymentTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSClientConfiguration;
import org.openapis.openapi.models.shared.OpenZFSCreateRootVolumeConfiguration;
import org.openapis.openapi.models.shared.OpenZFSDataCompressionTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSDeploymentTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSNfsExport;
import org.openapis.openapi.models.shared.OpenZFSQuotaTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSUserOrGroupQuota;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelfManagedActiveDirectoryConfiguration;
import org.openapis.openapi.models.shared.StorageTypeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.WindowsAccessAuditLogLevelEnum;
import org.openapis.openapi.models.shared.WindowsAuditLogCreateConfiguration;
import org.openapis.openapi.models.shared.WindowsDeploymentTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFileSystemRequest req = new CreateFileSystemRequest(                new CreateFileSystemRequest(FileSystemTypeEnum.LUSTRE, 846409L,                 new String[]{{
                                                add("rerum"),
                                                add("dicta"),
                                                add("magnam"),
                                                add("cumque"),
                                            }}) {{
                                clientRequestToken = "facere";
                                fileSystemTypeVersion = "ea";
                                kmsKeyId = "aliquid";
                                lustreConfiguration = new CreateFileSystemLustreConfiguration() {{
                                    autoImportPolicy = AutoImportPolicyTypeEnum.NEW_CHANGED;
                                    automaticBackupRetentionDays = 881104L;
                                    copyTagsToBackups = false;
                                    dailyAutomaticBackupStartTime = "non";
                                    dataCompressionType = DataCompressionTypeEnum.LZ4;
                                    deploymentType = LustreDeploymentTypeEnum.SCRATCH2;
                                    driveCacheType = DriveCacheTypeEnum.READ;
                                    exportPath = "delectus";
                                    importPath = "quidem";
                                    importedFileChunkSize = 588465L;
                                    logConfiguration = new LustreLogCreateConfiguration(LustreAccessAuditLogLevelEnum.ERROR_ONLY) {{
                                        destination = "id";
                                    }};;
                                    perUnitStorageThroughput = 501324L;
                                    rootSquashConfiguration = new LustreRootSquashConfiguration() {{
                                        noSquashNids = new String[]{{
                                            add("sapiente"),
                                            add("amet"),
                                            add("deserunt"),
                                        }};
                                        rootSquash = "nisi";
                                    }};;
                                    weeklyMaintenanceStartTime = "vel";
                                }};;
                                ontapConfiguration = new CreateFileSystemOntapConfiguration(OntapDeploymentTypeEnum.SINGLE_AZ1, 606393L) {{
                                    automaticBackupRetentionDays = 474867L;
                                    dailyAutomaticBackupStartTime = "perferendis";
                                    diskIopsConfiguration = new DiskIopsConfiguration() {{
                                        iops = 470132L;
                                        mode = DiskIopsConfigurationModeEnum.AUTOMATIC;
                                    }};;
                                    endpointIpAddressRange = "distinctio";
                                    fsxAdminPassword = "id";
                                    preferredSubnetId = "labore";
                                    routeTableIds = new String[]{{
                                        add("suscipit"),
                                        add("natus"),
                                    }};
                                    weeklyMaintenanceStartTime = "nobis";
                                }};;
                                openZFSConfiguration = new CreateFileSystemOpenZFSConfiguration(OpenZFSDeploymentTypeEnum.SINGLE_AZ1, 878453L) {{
                                    automaticBackupRetentionDays = 135474L;
                                    copyTagsToBackups = false;
                                    copyTagsToVolumes = false;
                                    dailyAutomaticBackupStartTime = "architecto";
                                    diskIopsConfiguration = new DiskIopsConfiguration() {{
                                        iops = 298282L;
                                        mode = DiskIopsConfigurationModeEnum.AUTOMATIC;
                                    }};;
                                    rootVolumeConfiguration = new OpenZFSCreateRootVolumeConfiguration() {{
                                        copyTagsToSnapshots = false;
                                        dataCompressionType = OpenZFSDataCompressionTypeEnum.ZSTD;
                                        nfsExports = new org.openapis.openapi.models.shared.OpenZFSNfsExport[]{{
                                            add(new OpenZFSNfsExport(                new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                                add(new OpenZFSClientConfiguration("natus",                 new String[]{{
                                                                                    add("sunt"),
                                                                                }}) {{
                                                                    clients = "sed";
                                                                    options = new String[]{{
                                                                        add("pariatur"),
                                                                        add("accusantium"),
                                                                        add("consequuntur"),
                                                                        add("praesentium"),
                                                                    }};
                                                                }}),
                                                                add(new OpenZFSClientConfiguration("odit",                 new String[]{{
                                                                                    add("accusantium"),
                                                                                    add("ab"),
                                                                                }}) {{
                                                                    clients = "quo";
                                                                    options = new String[]{{
                                                                        add("pariatur"),
                                                                        add("maxime"),
                                                                        add("ea"),
                                                                        add("excepturi"),
                                                                    }};
                                                                }}),
                                                                add(new OpenZFSClientConfiguration("nam",                 new String[]{{
                                                                                    add("pariatur"),
                                                                                }}) {{
                                                                    clients = "maiores";
                                                                    options = new String[]{{
                                                                        add("ipsam"),
                                                                        add("voluptate"),
                                                                        add("autem"),
                                                                    }};
                                                                }}),
                                                                add(new OpenZFSClientConfiguration("cumque",                 new String[]{{
                                                                                    add("hic"),
                                                                                    add("libero"),
                                                                                }}) {{
                                                                    clients = "nemo";
                                                                    options = new String[]{{
                                                                        add("perferendis"),
                                                                        add("fugiat"),
                                                                        add("amet"),
                                                                        add("aut"),
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                clientConfigurations = new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                    add(new OpenZFSClientConfiguration("mollitia",                 new String[]{{
                                                                        add("eum"),
                                                                        add("dolor"),
                                                                    }}) {{
                                                        clients = "quos";
                                                        options = new String[]{{
                                                            add("accusantium"),
                                                            add("mollitia"),
                                                            add("reiciendis"),
                                                        }};
                                                    }}),
                                                    add(new OpenZFSClientConfiguration("quasi",                 new String[]{{
                                                                        add("doloribus"),
                                                                        add("debitis"),
                                                                    }}) {{
                                                        clients = "necessitatibus";
                                                        options = new String[]{{
                                                            add("nemo"),
                                                        }};
                                                    }}),
                                                    add(new OpenZFSClientConfiguration("architecto",                 new String[]{{
                                                                        add("ullam"),
                                                                        add("expedita"),
                                                                        add("nihil"),
                                                                        add("repellat"),
                                                                    }}) {{
                                                        clients = "eius";
                                                        options = new String[]{{
                                                            add("deleniti"),
                                                            add("facilis"),
                                                            add("in"),
                                                            add("architecto"),
                                                        }};
                                                    }}),
                                                }};
                                            }}),
                                            add(new OpenZFSNfsExport(                new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                                add(new OpenZFSClientConfiguration("earum",                 new String[]{{
                                                                                    add("iste"),
                                                                                    add("dolorum"),
                                                                                }}) {{
                                                                    clients = "rerum";
                                                                    options = new String[]{{
                                                                        add("asperiores"),
                                                                    }};
                                                                }}),
                                                                add(new OpenZFSClientConfiguration("quaerat",                 new String[]{{
                                                                                    add("aliquid"),
                                                                                    add("dolorem"),
                                                                                    add("dolorem"),
                                                                                }}) {{
                                                                    clients = "deleniti";
                                                                    options = new String[]{{
                                                                        add("provident"),
                                                                        add("nobis"),
                                                                        add("libero"),
                                                                        add("delectus"),
                                                                    }};
                                                                }}),
                                                                add(new OpenZFSClientConfiguration("hic",                 new String[]{{
                                                                                    add("cum"),
                                                                                    add("voluptate"),
                                                                                    add("dignissimos"),
                                                                                }}) {{
                                                                    clients = "dolor";
                                                                    options = new String[]{{
                                                                        add("ipsum"),
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                clientConfigurations = new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                    add(new OpenZFSClientConfiguration("eaque",                 new String[]{{
                                                                        add("nesciunt"),
                                                                        add("eos"),
                                                                    }}) {{
                                                        clients = "dolores";
                                                        options = new String[]{{
                                                            add("totam"),
                                                            add("dignissimos"),
                                                        }};
                                                    }}),
                                                    add(new OpenZFSClientConfiguration("quam",                 new String[]{{
                                                                        add("vero"),
                                                                    }}) {{
                                                        clients = "perferendis";
                                                        options = new String[]{{
                                                            add("minus"),
                                                        }};
                                                    }}),
                                                    add(new OpenZFSClientConfiguration("voluptatem",                 new String[]{{
                                                                        add("consequuntur"),
                                                                        add("blanditiis"),
                                                                        add("error"),
                                                                        add("eaque"),
                                                                    }}) {{
                                                        clients = "nostrum";
                                                        options = new String[]{{
                                                            add("recusandae"),
                                                            add("omnis"),
                                                            add("facilis"),
                                                            add("perspiciatis"),
                                                        }};
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        readOnly = false;
                                        recordSizeKiB = 970237L;
                                        userAndGroupQuotas = new org.openapis.openapi.models.shared.OpenZFSUserOrGroupQuota[]{{
                                            add(new OpenZFSUserOrGroupQuota(58029L, 56418L, OpenZFSQuotaTypeEnum.USER) {{
                                                id = 680545L;
                                                storageCapacityQuotaGiB = 254356L;
                                                type = OpenZFSQuotaTypeEnum.USER;
                                            }}),
                                        }};
                                    }};;
                                    weeklyMaintenanceStartTime = "odio";
                                }};;
                                securityGroupIds = new String[]{{
                                    add("accusamus"),
                                    add("quidem"),
                                }};
                                storageType = StorageTypeEnum.HDD;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("atque", "sit") {{
                                        key = "natus";
                                        value = "eos";
                                    }}),
                                    add(new Tag("soluta", "dolorum") {{
                                        key = "fugiat";
                                        value = "ab";
                                    }}),
                                }};
                                windowsConfiguration = new CreateFileSystemWindowsConfiguration(478596L) {{
                                    activeDirectoryId = "voluptate";
                                    aliases = new String[]{{
                                        add("deleniti"),
                                        add("omnis"),
                                        add("necessitatibus"),
                                    }};
                                    auditLogConfiguration = new WindowsAuditLogCreateConfiguration(WindowsAccessAuditLogLevelEnum.FAILURE_ONLY, WindowsAccessAuditLogLevelEnum.SUCCESS_AND_FAILURE) {{
                                        auditLogDestination = "nihil";
                                    }};;
                                    automaticBackupRetentionDays = 216897L;
                                    copyTagsToBackups = false;
                                    dailyAutomaticBackupStartTime = "voluptate";
                                    deploymentType = WindowsDeploymentTypeEnum.SINGLE_AZ1;
                                    preferredSubnetId = "saepe";
                                    selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfiguration(                new String[]{{
                                                        add("aspernatur"),
                                                        add("perferendis"),
                                                    }}, "amet", "optio", "accusamus") {{
                                        fileSystemAdministratorsGroup = "ad";
                                        organizationalUnitDistinguishedName = "saepe";
                                    }};;
                                    weeklyMaintenanceStartTime = "suscipit";
                                }};;
                            }};, CreateFileSystemXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_CREATE_FILE_SYSTEM) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "provident";
                xAmzCredential = "minima";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "totam";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "alias";
            }};            

            CreateFileSystemResponse res = sdk.sdk.createFileSystem(req);

            if (res.createFileSystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFileSystemFromBackup

<p>Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup.</p> <p>If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, this operation does the following:</p> <ul> <li> <p>Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings.</p> <p>By using the idempotent operation, you can retry a <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html"> DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFileSystemFromBackupRequest;
import org.openapis.openapi.models.operations.CreateFileSystemFromBackupResponse;
import org.openapis.openapi.models.operations.CreateFileSystemFromBackupXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoImportPolicyTypeEnum;
import org.openapis.openapi.models.shared.CreateFileSystemFromBackupRequest;
import org.openapis.openapi.models.shared.CreateFileSystemLustreConfiguration;
import org.openapis.openapi.models.shared.CreateFileSystemOpenZFSConfiguration;
import org.openapis.openapi.models.shared.CreateFileSystemWindowsConfiguration;
import org.openapis.openapi.models.shared.DataCompressionTypeEnum;
import org.openapis.openapi.models.shared.DiskIopsConfiguration;
import org.openapis.openapi.models.shared.DiskIopsConfigurationModeEnum;
import org.openapis.openapi.models.shared.DriveCacheTypeEnum;
import org.openapis.openapi.models.shared.LustreAccessAuditLogLevelEnum;
import org.openapis.openapi.models.shared.LustreDeploymentTypeEnum;
import org.openapis.openapi.models.shared.LustreLogCreateConfiguration;
import org.openapis.openapi.models.shared.LustreRootSquashConfiguration;
import org.openapis.openapi.models.shared.OpenZFSClientConfiguration;
import org.openapis.openapi.models.shared.OpenZFSCreateRootVolumeConfiguration;
import org.openapis.openapi.models.shared.OpenZFSDataCompressionTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSDeploymentTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSNfsExport;
import org.openapis.openapi.models.shared.OpenZFSQuotaTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSUserOrGroupQuota;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelfManagedActiveDirectoryConfiguration;
import org.openapis.openapi.models.shared.StorageTypeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.WindowsAccessAuditLogLevelEnum;
import org.openapis.openapi.models.shared.WindowsAuditLogCreateConfiguration;
import org.openapis.openapi.models.shared.WindowsDeploymentTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFileSystemFromBackupRequest req = new CreateFileSystemFromBackupRequest(                new CreateFileSystemFromBackupRequest("quaerat",                 new String[]{{
                                                add("vel"),
                                                add("quod"),
                                            }}) {{
                                clientRequestToken = "officiis";
                                fileSystemTypeVersion = "qui";
                                kmsKeyId = "dolorum";
                                lustreConfiguration = new CreateFileSystemLustreConfiguration() {{
                                    autoImportPolicy = AutoImportPolicyTypeEnum.NEW_CHANGED_DELETED;
                                    automaticBackupRetentionDays = 456130L;
                                    copyTagsToBackups = false;
                                    dailyAutomaticBackupStartTime = "harum";
                                    dataCompressionType = DataCompressionTypeEnum.NONE;
                                    deploymentType = LustreDeploymentTypeEnum.SCRATCH1;
                                    driveCacheType = DriveCacheTypeEnum.READ;
                                    exportPath = "tenetur";
                                    importPath = "amet";
                                    importedFileChunkSize = 730856L;
                                    logConfiguration = new LustreLogCreateConfiguration(LustreAccessAuditLogLevelEnum.WARN_ERROR) {{
                                        destination = "numquam";
                                    }};;
                                    perUnitStorageThroughput = 313692L;
                                    rootSquashConfiguration = new LustreRootSquashConfiguration() {{
                                        noSquashNids = new String[]{{
                                            add("sapiente"),
                                        }};
                                        rootSquash = "totam";
                                    }};;
                                    weeklyMaintenanceStartTime = "nihil";
                                }};;
                                openZFSConfiguration = new CreateFileSystemOpenZFSConfiguration(OpenZFSDeploymentTypeEnum.SINGLE_AZ1, 711584L) {{
                                    automaticBackupRetentionDays = 207470L;
                                    copyTagsToBackups = false;
                                    copyTagsToVolumes = false;
                                    dailyAutomaticBackupStartTime = "sed";
                                    diskIopsConfiguration = new DiskIopsConfiguration() {{
                                        iops = 424685L;
                                        mode = DiskIopsConfigurationModeEnum.USER_PROVISIONED;
                                    }};;
                                    rootVolumeConfiguration = new OpenZFSCreateRootVolumeConfiguration() {{
                                        copyTagsToSnapshots = false;
                                        dataCompressionType = OpenZFSDataCompressionTypeEnum.ZSTD;
                                        nfsExports = new org.openapis.openapi.models.shared.OpenZFSNfsExport[]{{
                                            add(new OpenZFSNfsExport(                new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                                add(new OpenZFSClientConfiguration("magni",                 new String[]{{
                                                                                    add("sunt"),
                                                                                    add("ullam"),
                                                                                }}) {{
                                                                    clients = "qui";
                                                                    options = new String[]{{
                                                                        add("fugit"),
                                                                    }};
                                                                }}),
                                                                add(new OpenZFSClientConfiguration("et",                 new String[]{{
                                                                                    add("ipsum"),
                                                                                    add("veritatis"),
                                                                                    add("nobis"),
                                                                                    add("quos"),
                                                                                }}) {{
                                                                    clients = "nam";
                                                                    options = new String[]{{
                                                                        add("voluptatem"),
                                                                        add("cumque"),
                                                                        add("soluta"),
                                                                        add("nobis"),
                                                                    }};
                                                                }}),
                                                                add(new OpenZFSClientConfiguration("dolore",                 new String[]{{
                                                                                    add("adipisci"),
                                                                                    add("dolorum"),
                                                                                }}) {{
                                                                    clients = "tempore";
                                                                    options = new String[]{{
                                                                        add("aperiam"),
                                                                        add("delectus"),
                                                                        add("dolorem"),
                                                                    }};
                                                                }}),
                                                                add(new OpenZFSClientConfiguration("quas",                 new String[]{{
                                                                                    add("consequatur"),
                                                                                    add("est"),
                                                                                    add("repellendus"),
                                                                                    add("porro"),
                                                                                }}) {{
                                                                    clients = "architecto";
                                                                    options = new String[]{{
                                                                        add("aut"),
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                clientConfigurations = new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                    add(new OpenZFSClientConfiguration("maxime",                 new String[]{{
                                                                        add("soluta"),
                                                                        add("dicta"),
                                                                        add("laborum"),
                                                                        add("totam"),
                                                                    }}) {{
                                                        clients = "ipsum";
                                                        options = new String[]{{
                                                            add("qui"),
                                                            add("cupiditate"),
                                                        }};
                                                    }}),
                                                    add(new OpenZFSClientConfiguration("distinctio",                 new String[]{{
                                                                        add("aliquid"),
                                                                        add("quam"),
                                                                        add("molestias"),
                                                                    }}) {{
                                                        clients = "incidunt";
                                                        options = new String[]{{
                                                            add("dolores"),
                                                        }};
                                                    }}),
                                                }};
                                            }}),
                                            add(new OpenZFSNfsExport(                new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                                add(new OpenZFSClientConfiguration("maiores",                 new String[]{{
                                                                                    add("iusto"),
                                                                                    add("eligendi"),
                                                                                    add("ducimus"),
                                                                                    add("alias"),
                                                                                }}) {{
                                                                    clients = "aut";
                                                                    options = new String[]{{
                                                                        add("exercitationem"),
                                                                        add("nulla"),
                                                                        add("fugit"),
                                                                        add("porro"),
                                                                    }};
                                                                }}),
                                                                add(new OpenZFSClientConfiguration("aspernatur",                 new String[]{{
                                                                                    add("possimus"),
                                                                                    add("magnam"),
                                                                                }}) {{
                                                                    clients = "officia";
                                                                    options = new String[]{{
                                                                        add("ipsam"),
                                                                        add("ea"),
                                                                    }};
                                                                }}),
                                                                add(new OpenZFSClientConfiguration("dolor",                 new String[]{{
                                                                                    add("quasi"),
                                                                                    add("ex"),
                                                                                    add("nulla"),
                                                                                    add("excepturi"),
                                                                                }}) {{
                                                                    clients = "ratione";
                                                                    options = new String[]{{
                                                                        add("laudantium"),
                                                                        add("dicta"),
                                                                    }};
                                                                }}),
                                                                add(new OpenZFSClientConfiguration("saepe",                 new String[]{{
                                                                                    add("impedit"),
                                                                                    add("corporis"),
                                                                                }}) {{
                                                                    clients = "voluptatibus";
                                                                    options = new String[]{{
                                                                        add("sapiente"),
                                                                        add("quisquam"),
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                clientConfigurations = new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                    add(new OpenZFSClientConfiguration("laudantium",                 new String[]{{
                                                                        add("occaecati"),
                                                                        add("voluptatibus"),
                                                                    }}) {{
                                                        clients = "ut";
                                                        options = new String[]{{
                                                            add("cupiditate"),
                                                            add("qui"),
                                                            add("quae"),
                                                        }};
                                                    }}),
                                                    add(new OpenZFSClientConfiguration("voluptate",                 new String[]{{
                                                                        add("vero"),
                                                                    }}) {{
                                                        clients = "quisquam";
                                                        options = new String[]{{
                                                            add("omnis"),
                                                            add("quis"),
                                                            add("ipsum"),
                                                            add("delectus"),
                                                        }};
                                                    }}),
                                                    add(new OpenZFSClientConfiguration("quod",                 new String[]{{
                                                                        add("similique"),
                                                                        add("facilis"),
                                                                    }}) {{
                                                        clients = "tenetur";
                                                        options = new String[]{{
                                                            add("hic"),
                                                            add("distinctio"),
                                                        }};
                                                    }}),
                                                    add(new OpenZFSClientConfiguration("illum",                 new String[]{{
                                                                        add("natus"),
                                                                    }}) {{
                                                        clients = "vero";
                                                        options = new String[]{{
                                                            add("dolore"),
                                                            add("quibusdam"),
                                                        }};
                                                    }}),
                                                }};
                                            }}),
                                            add(new OpenZFSNfsExport(                new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                                add(new OpenZFSClientConfiguration("laborum",                 new String[]{{
                                                                                    add("velit"),
                                                                                    add("eum"),
                                                                                    add("autem"),
                                                                                    add("nobis"),
                                                                                }}) {{
                                                                    clients = "non";
                                                                    options = new String[]{{
                                                                        add("dolorum"),
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                clientConfigurations = new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                    add(new OpenZFSClientConfiguration("ea",                 new String[]{{
                                                                        add("consectetur"),
                                                                        add("recusandae"),
                                                                        add("aspernatur"),
                                                                        add("minima"),
                                                                    }}) {{
                                                        clients = "aliquid";
                                                        options = new String[]{{
                                                            add("magnam"),
                                                        }};
                                                    }}),
                                                    add(new OpenZFSClientConfiguration("impedit",                 new String[]{{
                                                                        add("fugit"),
                                                                        add("accusamus"),
                                                                    }}) {{
                                                        clients = "eaque";
                                                        options = new String[]{{
                                                            add("libero"),
                                                            add("aut"),
                                                            add("aut"),
                                                            add("deleniti"),
                                                        }};
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        readOnly = false;
                                        recordSizeKiB = 557369L;
                                        userAndGroupQuotas = new org.openapis.openapi.models.shared.OpenZFSUserOrGroupQuota[]{{
                                            add(new OpenZFSUserOrGroupQuota(96549L, 270328L, OpenZFSQuotaTypeEnum.USER) {{
                                                id = 860552L;
                                                storageCapacityQuotaGiB = 379034L;
                                                type = OpenZFSQuotaTypeEnum.GROUP;
                                            }}),
                                            add(new OpenZFSUserOrGroupQuota(476477L, 301598L, OpenZFSQuotaTypeEnum.USER) {{
                                                id = 131482L;
                                                storageCapacityQuotaGiB = 591935L;
                                                type = OpenZFSQuotaTypeEnum.USER;
                                            }}),
                                            add(new OpenZFSUserOrGroupQuota(524593L, 683282L, OpenZFSQuotaTypeEnum.USER) {{
                                                id = 262118L;
                                                storageCapacityQuotaGiB = 458515L;
                                                type = OpenZFSQuotaTypeEnum.USER;
                                            }}),
                                            add(new OpenZFSUserOrGroupQuota(433439L, 379927L, OpenZFSQuotaTypeEnum.GROUP) {{
                                                id = 695626L;
                                                storageCapacityQuotaGiB = 852635L;
                                                type = OpenZFSQuotaTypeEnum.USER;
                                            }}),
                                        }};
                                    }};;
                                    weeklyMaintenanceStartTime = "eos";
                                }};;
                                securityGroupIds = new String[]{{
                                    add("quisquam"),
                                    add("veritatis"),
                                    add("ipsa"),
                                }};
                                storageCapacity = 660040L;
                                storageType = StorageTypeEnum.HDD;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quo", "fuga") {{
                                        key = "quo";
                                        value = "illum";
                                    }}),
                                }};
                                windowsConfiguration = new CreateFileSystemWindowsConfiguration(259422L) {{
                                    activeDirectoryId = "eos";
                                    aliases = new String[]{{
                                        add("ab"),
                                        add("cupiditate"),
                                    }};
                                    auditLogConfiguration = new WindowsAuditLogCreateConfiguration(WindowsAccessAuditLogLevelEnum.DISABLED, WindowsAccessAuditLogLevelEnum.SUCCESS_ONLY) {{
                                        auditLogDestination = "debitis";
                                    }};;
                                    automaticBackupRetentionDays = 370853L;
                                    copyTagsToBackups = false;
                                    dailyAutomaticBackupStartTime = "aspernatur";
                                    deploymentType = WindowsDeploymentTypeEnum.MULTI_AZ1;
                                    preferredSubnetId = "quo";
                                    selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfiguration(                new String[]{{
                                                        add("recusandae"),
                                                        add("aperiam"),
                                                    }}, "distinctio", "quod", "dignissimos") {{
                                        fileSystemAdministratorsGroup = "inventore";
                                        organizationalUnitDistinguishedName = "nihil";
                                    }};;
                                    weeklyMaintenanceStartTime = "totam";
                                }};;
                            }};, CreateFileSystemFromBackupXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_CREATE_FILE_SYSTEM_FROM_BACKUP) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "odio";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dolores";
            }};            

            CreateFileSystemFromBackupResponse res = sdk.sdk.createFileSystemFromBackup(req);

            if (res.createFileSystemFromBackupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSnapshot

<p>Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version.</p> <p>If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a snapshot with the specified client request token doesn't exist, <code>CreateSnapshot</code> does the following:</p> <ul> <li> <p>Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the snapshot.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateSnapshot</code> operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateSnapshot</code> operation returns while the snapshot's lifecycle state is still <code>CREATING</code>. You can check the snapshot creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> operation, which returns the snapshot state along with other information.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSnapshotRequest;
import org.openapis.openapi.models.operations.CreateSnapshotResponse;
import org.openapis.openapi.models.operations.CreateSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSnapshotRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSnapshotRequest req = new CreateSnapshotRequest(                new CreateSnapshotRequest("molestiae", "accusantium") {{
                                clientRequestToken = "porro";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("consequuntur", "deleniti") {{
                                        key = "quas";
                                        value = "praesentium";
                                    }}),
                                    add(new Tag("mollitia", "incidunt") {{
                                        key = "fugit";
                                        value = "fuga";
                                    }}),
                                }};
                            }};, CreateSnapshotXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_CREATE_SNAPSHOT) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateSnapshotResponse res = sdk.sdk.createSnapshot(req);

            if (res.createSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStorageVirtualMachine

Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStorageVirtualMachineRequest;
import org.openapis.openapi.models.operations.CreateStorageVirtualMachineResponse;
import org.openapis.openapi.models.operations.CreateStorageVirtualMachineXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateStorageVirtualMachineRequest;
import org.openapis.openapi.models.shared.CreateSvmActiveDirectoryConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelfManagedActiveDirectoryConfiguration;
import org.openapis.openapi.models.shared.StorageVirtualMachineRootVolumeSecurityStyleEnum;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStorageVirtualMachineRequest req = new CreateStorageVirtualMachineRequest(                new CreateStorageVirtualMachineRequest("explicabo", "saepe") {{
                                activeDirectoryConfiguration = new CreateSvmActiveDirectoryConfiguration("occaecati") {{
                                    selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfiguration(                new String[]{{
                                                        add("et"),
                                                        add("esse"),
                                                        add("eveniet"),
                                                    }}, "accusamus", "veritatis", "esse") {{
                                        fileSystemAdministratorsGroup = "quod";
                                        organizationalUnitDistinguishedName = "nam";
                                    }};;
                                }};;
                                clientRequestToken = "vero";
                                rootVolumeSecurityStyle = StorageVirtualMachineRootVolumeSecurityStyleEnum.NTFS;
                                svmAdminPassword = "quasi";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("molestiae", "rerum") {{
                                        key = "vel";
                                        value = "harum";
                                    }}),
                                    add(new Tag("distinctio", "eligendi") {{
                                        key = "occaecati";
                                        value = "minima";
                                    }}),
                                    add(new Tag("tempore", "adipisci") {{
                                        key = "sit";
                                        value = "culpa";
                                    }}),
                                    add(new Tag("consequatur", "minus") {{
                                        key = "cumque";
                                        value = "consequuntur";
                                    }}),
                                }};
                            }};, CreateStorageVirtualMachineXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_CREATE_STORAGE_VIRTUAL_MACHINE) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "consectetur";
                xAmzDate = "esse";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "a";
            }};            

            CreateStorageVirtualMachineResponse res = sdk.sdk.createStorageVirtualMachine(req);

            if (res.createStorageVirtualMachineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVolume

Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVolumeRequest;
import org.openapis.openapi.models.operations.CreateVolumeResponse;
import org.openapis.openapi.models.operations.CreateVolumeXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateOntapVolumeConfiguration;
import org.openapis.openapi.models.shared.CreateOpenZFSOriginSnapshotConfiguration;
import org.openapis.openapi.models.shared.CreateOpenZFSVolumeConfiguration;
import org.openapis.openapi.models.shared.CreateVolumeRequest;
import org.openapis.openapi.models.shared.InputOntapVolumeTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSClientConfiguration;
import org.openapis.openapi.models.shared.OpenZFSCopyStrategyEnum;
import org.openapis.openapi.models.shared.OpenZFSDataCompressionTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSNfsExport;
import org.openapis.openapi.models.shared.OpenZFSQuotaTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSUserOrGroupQuota;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityStyleEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TieringPolicy;
import org.openapis.openapi.models.shared.TieringPolicyNameEnum;
import org.openapis.openapi.models.shared.VolumeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVolumeRequest req = new CreateVolumeRequest(                new CreateVolumeRequest("quas", VolumeTypeEnum.ONTAP) {{
                                clientRequestToken = "quasi";
                                ontapConfiguration = new CreateOntapVolumeConfiguration(951875L, "error") {{
                                    copyTagsToBackups = false;
                                    junctionPath = "sint";
                                    ontapVolumeType = InputOntapVolumeTypeEnum.DP;
                                    securityStyle = SecurityStyleEnum.MIXED;
                                    snapshotPolicy = "quia";
                                    storageEfficiencyEnabled = false;
                                    tieringPolicy = new TieringPolicy() {{
                                        coolingPeriod = 908844L;
                                        name = TieringPolicyNameEnum.NONE;
                                    }};;
                                }};;
                                openZFSConfiguration = new CreateOpenZFSVolumeConfiguration("facere") {{
                                    copyTagsToSnapshots = false;
                                    dataCompressionType = OpenZFSDataCompressionTypeEnum.NONE;
                                    nfsExports = new org.openapis.openapi.models.shared.OpenZFSNfsExport[]{{
                                        add(new OpenZFSNfsExport(                new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                            add(new OpenZFSClientConfiguration("dicta",                 new String[]{{
                                                                                add("reprehenderit"),
                                                                                add("ullam"),
                                                                            }}) {{
                                                                clients = "illum";
                                                                options = new String[]{{
                                                                    add("accusantium"),
                                                                    add("aliquam"),
                                                                    add("sapiente"),
                                                                }};
                                                            }}),
                                                            add(new OpenZFSClientConfiguration("qui",                 new String[]{{
                                                                                add("ex"),
                                                                                add("deleniti"),
                                                                                add("itaque"),
                                                                                add("dolorum"),
                                                                            }}) {{
                                                                clients = "nisi";
                                                                options = new String[]{{
                                                                    add("voluptatum"),
                                                                }};
                                                            }}),
                                                            add(new OpenZFSClientConfiguration("et",                 new String[]{{
                                                                                add("ipsa"),
                                                                                add("minima"),
                                                                            }}) {{
                                                                clients = "architecto";
                                                                options = new String[]{{
                                                                    add("tenetur"),
                                                                    add("quasi"),
                                                                    add("at"),
                                                                }};
                                                            }}),
                                                        }}) {{
                                            clientConfigurations = new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                add(new OpenZFSClientConfiguration("earum",                 new String[]{{
                                                                    add("in"),
                                                                    add("eius"),
                                                                }}) {{
                                                    clients = "similique";
                                                    options = new String[]{{
                                                        add("aliquid"),
                                                        add("tenetur"),
                                                        add("quae"),
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    originSnapshot = new CreateOpenZFSOriginSnapshotConfiguration(OpenZFSCopyStrategyEnum.CLONE, "consectetur");;
                                    readOnly = false;
                                    recordSizeKiB = 237173L;
                                    storageCapacityQuotaGiB = 614465L;
                                    storageCapacityReservationGiB = 839513L;
                                    userAndGroupQuotas = new org.openapis.openapi.models.shared.OpenZFSUserOrGroupQuota[]{{
                                        add(new OpenZFSUserOrGroupQuota(428796L, 649832L, OpenZFSQuotaTypeEnum.USER) {{
                                            id = 522371L;
                                            storageCapacityQuotaGiB = 15606L;
                                            type = OpenZFSQuotaTypeEnum.GROUP;
                                        }}),
                                    }};
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dolor", "occaecati") {{
                                        key = "non";
                                        value = "voluptatem";
                                    }}),
                                    add(new Tag("explicabo", "voluptas") {{
                                        key = "numquam";
                                        value = "impedit";
                                    }}),
                                    add(new Tag("dicta", "maiores") {{
                                        key = "aut";
                                        value = "dignissimos";
                                    }}),
                                }};
                            }};, CreateVolumeXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_CREATE_VOLUME) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "velit";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "ea";
            }};            

            CreateVolumeResponse res = sdk.sdk.createVolume(req);

            if (res.createVolumeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVolumeFromBackup

Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVolumeFromBackupRequest;
import org.openapis.openapi.models.operations.CreateVolumeFromBackupResponse;
import org.openapis.openapi.models.operations.CreateVolumeFromBackupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateOntapVolumeConfiguration;
import org.openapis.openapi.models.shared.CreateVolumeFromBackupRequest;
import org.openapis.openapi.models.shared.InputOntapVolumeTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityStyleEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TieringPolicy;
import org.openapis.openapi.models.shared.TieringPolicyNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVolumeFromBackupRequest req = new CreateVolumeFromBackupRequest(                new CreateVolumeFromBackupRequest("consequuntur", "repellendus") {{
                                clientRequestToken = "officia";
                                ontapConfiguration = new CreateOntapVolumeConfiguration(807023L, "dignissimos") {{
                                    copyTagsToBackups = false;
                                    junctionPath = "officia";
                                    ontapVolumeType = InputOntapVolumeTypeEnum.DP;
                                    securityStyle = SecurityStyleEnum.NTFS;
                                    snapshotPolicy = "quae";
                                    storageEfficiencyEnabled = false;
                                    tieringPolicy = new TieringPolicy() {{
                                        coolingPeriod = 312753L;
                                        name = TieringPolicyNameEnum.NONE;
                                    }};;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("adipisci", "fuga") {{
                                        key = "labore";
                                        value = "ab";
                                    }}),
                                    add(new Tag("velit", "culpa") {{
                                        key = "id";
                                        value = "suscipit";
                                    }}),
                                    add(new Tag("totam", "fugiat") {{
                                        key = "est";
                                        value = "recusandae";
                                    }}),
                                    add(new Tag("quos", "vel") {{
                                        key = "vel";
                                        value = "ducimus";
                                    }}),
                                }};
                            }};, CreateVolumeFromBackupXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_CREATE_VOLUME_FROM_BACKUP) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "facilis";
                xAmzDate = "cum";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateVolumeFromBackupResponse res = sdk.sdk.createVolumeFromBackup(req);

            if (res.createVolumeFromBackupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBackup

<p>Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone.</p> <p>The <code>DeleteBackup</code> call returns instantly. The backup won't show up in later <code>DescribeBackups</code> calls.</p> <important> <p>The data in a deleted backup is also deleted and can't be recovered by any means.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBackupRequest;
import org.openapis.openapi.models.operations.DeleteBackupResponse;
import org.openapis.openapi.models.operations.DeleteBackupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBackupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBackupRequest req = new DeleteBackupRequest(                new DeleteBackupRequest("assumenda") {{
                                clientRequestToken = "nemo";
                            }};, DeleteBackupXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DELETE_BACKUP) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "aperiam";
                xAmzDate = "cum";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "in";
                xAmzSignedHeaders = "exercitationem";
            }};            

            DeleteBackupResponse res = sdk.sdk.deleteBackup(req);

            if (res.deleteBackupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataRepositoryAssociation

Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDataRepositoryAssociationRequest;
import org.openapis.openapi.models.operations.DeleteDataRepositoryAssociationResponse;
import org.openapis.openapi.models.operations.DeleteDataRepositoryAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDataRepositoryAssociationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDataRepositoryAssociationRequest req = new DeleteDataRepositoryAssociationRequest(                new DeleteDataRepositoryAssociationRequest("facere") {{
                                clientRequestToken = "numquam";
                                deleteDataInFileSystem = false;
                            }};, DeleteDataRepositoryAssociationXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DELETE_DATA_REPOSITORY_ASSOCIATION) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "reiciendis";
                xAmzDate = "quidem";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "dolore";
            }};            

            DeleteDataRepositoryAssociationResponse res = sdk.sdk.deleteDataRepositoryAssociation(req);

            if (res.deleteDataRepositoryAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFileCache

<p>Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone.</p> <p>The <code>DeleteFileCache</code> operation returns while the cache has the <code>DELETING</code> status. You can check the cache deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the <code>DescribeFileCaches</code> operation returns a <code>FileCacheNotFound</code> error.</p> <important> <p>The data in a deleted cache is also deleted and can't be recovered by any means.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFileCacheRequest;
import org.openapis.openapi.models.operations.DeleteFileCacheResponse;
import org.openapis.openapi.models.operations.DeleteFileCacheXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFileCacheRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFileCacheRequest req = new DeleteFileCacheRequest(                new DeleteFileCacheRequest("asperiores") {{
                                clientRequestToken = "adipisci";
                            }};, DeleteFileCacheXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DELETE_FILE_CACHE) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "amet";
                xAmzCredential = "beatae";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "a";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "consectetur";
            }};            

            DeleteFileCacheResponse res = sdk.sdk.deleteFileCache(req);

            if (res.deleteFileCacheResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFileSystem

<p>Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted.</p> <p>To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a <code>FileSystemId</code> value to the <code>DeleFileSystem</code> operation.</p> <p>By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted.</p> <p>The <code>DeleteFileSystem</code> operation returns while the file system has the <code>DELETING</code> status. You can check the file system deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the <code>DescribeFileSystems</code> operation returns a <code>FileSystemNotFound</code> error.</p> <note> <p>If a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code> state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request).</p> </note> <important> <p>The data in a deleted file system is also deleted and can't be recovered by any means.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFileSystemRequest;
import org.openapis.openapi.models.operations.DeleteFileSystemResponse;
import org.openapis.openapi.models.operations.DeleteFileSystemXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFileSystemLustreConfiguration;
import org.openapis.openapi.models.shared.DeleteFileSystemOpenZFSConfiguration;
import org.openapis.openapi.models.shared.DeleteFileSystemOpenZFSOptionEnum;
import org.openapis.openapi.models.shared.DeleteFileSystemRequest;
import org.openapis.openapi.models.shared.DeleteFileSystemWindowsConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFileSystemRequest req = new DeleteFileSystemRequest(                new DeleteFileSystemRequest("harum") {{
                                clientRequestToken = "laboriosam";
                                lustreConfiguration = new DeleteFileSystemLustreConfiguration() {{
                                    finalBackupTags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag("vitae", "accusamus") {{
                                            key = "voluptates";
                                            value = "libero";
                                        }}),
                                    }};
                                    skipFinalBackup = false;
                                }};;
                                openZFSConfiguration = new DeleteFileSystemOpenZFSConfiguration() {{
                                    finalBackupTags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag("voluptas", "voluptas") {{
                                            key = "tempora";
                                            value = "aspernatur";
                                        }}),
                                        add(new Tag("nobis", "dolorum") {{
                                            key = "voluptas";
                                            value = "minima";
                                        }}),
                                        add(new Tag("dolores", "blanditiis") {{
                                            key = "adipisci";
                                            value = "minus";
                                        }}),
                                    }};
                                    options = new org.openapis.openapi.models.shared.DeleteFileSystemOpenZFSOptionEnum[]{{
                                        add(DeleteFileSystemOpenZFSOptionEnum.DELETE_CHILD_VOLUMES_AND_SNAPSHOTS),
                                        add(DeleteFileSystemOpenZFSOptionEnum.DELETE_CHILD_VOLUMES_AND_SNAPSHOTS),
                                    }};
                                    skipFinalBackup = false;
                                }};;
                                windowsConfiguration = new DeleteFileSystemWindowsConfiguration() {{
                                    finalBackupTags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag("temporibus", "ullam") {{
                                            key = "aliquam";
                                            value = "officiis";
                                        }}),
                                        add(new Tag("blanditiis", "quas") {{
                                            key = "adipisci";
                                            value = "cum";
                                        }}),
                                    }};
                                    skipFinalBackup = false;
                                }};;
                            }};, DeleteFileSystemXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DELETE_FILE_SYSTEM) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "culpa";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteFileSystemResponse res = sdk.sdk.deleteFileSystem(req);

            if (res.deleteFileSystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSnapshot

<p>Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup. </p> <p>The <code>DeleteSnapshot</code> operation returns instantly. The snapshot appears with the lifecycle status of <code>DELETING</code> until the deletion is complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteSnapshotResponse;
import org.openapis.openapi.models.operations.DeleteSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSnapshotRequest req = new DeleteSnapshotRequest(                new DeleteSnapshotRequest("nobis") {{
                                clientRequestToken = "sit";
                            }};, DeleteSnapshotXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DELETE_SNAPSHOT) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "sed";
                xAmzCredential = "reiciendis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "voluptate";
            }};            

            DeleteSnapshotResponse res = sdk.sdk.deleteSnapshot(req);

            if (res.deleteSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStorageVirtualMachine

Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStorageVirtualMachineRequest;
import org.openapis.openapi.models.operations.DeleteStorageVirtualMachineResponse;
import org.openapis.openapi.models.operations.DeleteStorageVirtualMachineXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteStorageVirtualMachineRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStorageVirtualMachineRequest req = new DeleteStorageVirtualMachineRequest(                new DeleteStorageVirtualMachineRequest("ab") {{
                                clientRequestToken = "iste";
                            }};, DeleteStorageVirtualMachineXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DELETE_STORAGE_VIRTUAL_MACHINE) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "sed";
                xAmzDate = "in";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "explicabo";
            }};            

            DeleteStorageVirtualMachineResponse res = sdk.sdk.deleteStorageVirtualMachine(req);

            if (res.deleteStorageVirtualMachineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVolume

Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVolumeRequest;
import org.openapis.openapi.models.operations.DeleteVolumeResponse;
import org.openapis.openapi.models.operations.DeleteVolumeXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteOpenZFSVolumeOptionEnum;
import org.openapis.openapi.models.shared.DeleteVolumeOntapConfiguration;
import org.openapis.openapi.models.shared.DeleteVolumeOpenZFSConfiguration;
import org.openapis.openapi.models.shared.DeleteVolumeRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVolumeRequest req = new DeleteVolumeRequest(                new DeleteVolumeRequest("unde") {{
                                clientRequestToken = "architecto";
                                ontapConfiguration = new DeleteVolumeOntapConfiguration() {{
                                    finalBackupTags = new org.openapis.openapi.models.shared.Tag[]{{
                                        add(new Tag("illo", "reiciendis") {{
                                            key = "sapiente";
                                            value = "debitis";
                                        }}),
                                        add(new Tag("maiores", "incidunt") {{
                                            key = "perferendis";
                                            value = "corrupti";
                                        }}),
                                    }};
                                    skipFinalBackup = false;
                                }};;
                                openZFSConfiguration = new DeleteVolumeOpenZFSConfiguration() {{
                                    options = new org.openapis.openapi.models.shared.DeleteOpenZFSVolumeOptionEnum[]{{
                                        add(DeleteOpenZFSVolumeOptionEnum.DELETE_CHILD_VOLUMES_AND_SNAPSHOTS),
                                    }};
                                }};;
                            }};, DeleteVolumeXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DELETE_VOLUME) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "eius";
                xAmzCredential = "necessitatibus";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "ea";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "quos";
            }};            

            DeleteVolumeResponse res = sdk.sdk.deleteVolume(req);

            if (res.deleteVolumeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBackups

<p>Returns the description of a specific Amazon FSx backup, if a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code> parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of the <code>NextToken</code> value from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your backups. <code>DescribeBackups</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of backup descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of the backups returned in the response of one <code>DescribeBackups</code> call and the order of the backups returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBackupsRequest;
import org.openapis.openapi.models.operations.DescribeBackupsResponse;
import org.openapis.openapi.models.operations.DescribeBackupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBackupsRequest;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBackupsRequest req = new DescribeBackupsRequest(                new DescribeBackupsRequest() {{
                                backupIds = new String[]{{
                                    add("tempora"),
                                    add("voluptate"),
                                }};
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = FilterNameEnum.FILE_SYSTEM_TYPE;
                                        values = new String[]{{
                                            add("non"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.FILE_CACHE_TYPE;
                                        values = new String[]{{
                                            add("facilis"),
                                            add("quaerat"),
                                            add("incidunt"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.FILE_SYSTEM_TYPE;
                                        values = new String[]{{
                                            add("rem"),
                                            add("sit"),
                                            add("nobis"),
                                            add("error"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.FILE_SYSTEM_TYPE;
                                        values = new String[]{{
                                            add("recusandae"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                }};
                                maxResults = 862319L;
                                nextToken = "magni";
                            }};, DescribeBackupsXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_BACKUPS) {{
                maxResults = "aperiam";
                nextToken = "saepe";
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "in";
                xAmzDate = "officiis";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "exercitationem";
            }};            

            DescribeBackupsResponse res = sdk.sdk.describeBackups(req);

            if (res.describeBackupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDataRepositoryAssociations

<p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository associations, if one or more <code>AssociationIds</code> values are provided in the request, or if filters are used in the request. Data repository associations are supported on Amazon File Cache resources and all Amazon FSx for Lustre file systems excluding <code>Scratch_1</code> deployment types.</p> <p>You can use filters to narrow the response to include just data repository associations for specific file systems (use the <code>file-system-id</code> filter with the ID of the file system) or caches (use the <code>file-cache-id</code> filter with the ID of the cache), or data repository associations for a specific repository type (use the <code>data-repository-type</code> filter with a value of <code>S3</code> or <code>NFS</code>). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all data repository associations, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDataRepositoryAssociationsRequest;
import org.openapis.openapi.models.operations.DescribeDataRepositoryAssociationsResponse;
import org.openapis.openapi.models.operations.DescribeDataRepositoryAssociationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDataRepositoryAssociationsRequest;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDataRepositoryAssociationsRequest req = new DescribeDataRepositoryAssociationsRequest(                new DescribeDataRepositoryAssociationsRequest() {{
                                associationIds = new String[]{{
                                    add("laboriosam"),
                                    add("dolorum"),
                                    add("voluptatum"),
                                }};
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = FilterNameEnum.FILE_CACHE_TYPE;
                                        values = new String[]{{
                                            add("debitis"),
                                            add("neque"),
                                            add("dolorum"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.FILE_SYSTEM_TYPE;
                                        values = new String[]{{
                                            add("dolorum"),
                                            add("corrupti"),
                                            add("accusamus"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = FilterNameEnum.BACKUP_TYPE;
                                        values = new String[]{{
                                            add("fugit"),
                                            add("ut"),
                                            add("fugiat"),
                                        }};
                                    }}),
                                }};
                                maxResults = 30235L;
                                nextToken = "culpa";
                            }};, DescribeDataRepositoryAssociationsXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_DATA_REPOSITORY_ASSOCIATIONS) {{
                maxResults = "expedita";
                nextToken = "magnam";
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsam";
                xAmzDate = "sit";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "repudiandae";
            }};            

            DescribeDataRepositoryAssociationsResponse res = sdk.sdk.describeDataRepositoryAssociations(req);

            if (res.describeDataRepositoryAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDataRepositoryTasks

<p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems or caches, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all tasks, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of tasks returned in a response. If more tasks remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDataRepositoryTasksRequest;
import org.openapis.openapi.models.operations.DescribeDataRepositoryTasksResponse;
import org.openapis.openapi.models.operations.DescribeDataRepositoryTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DataRepositoryTaskFilter;
import org.openapis.openapi.models.shared.DataRepositoryTaskFilterNameEnum;
import org.openapis.openapi.models.shared.DescribeDataRepositoryTasksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDataRepositoryTasksRequest req = new DescribeDataRepositoryTasksRequest(                new DescribeDataRepositoryTasksRequest() {{
                                filters = new org.openapis.openapi.models.shared.DataRepositoryTaskFilter[]{{
                                    add(new DataRepositoryTaskFilter() {{
                                        name = DataRepositoryTaskFilterNameEnum.DATA_REPOSITORY_ASSOCIATION_ID;
                                        values = new String[]{{
                                            add("sed"),
                                            add("sit"),
                                        }};
                                    }}),
                                }};
                                maxResults = 425508L;
                                nextToken = "nostrum";
                                taskIds = new String[]{{
                                    add("error"),
                                    add("consequatur"),
                                    add("incidunt"),
                                    add("reiciendis"),
                                }};
                            }};, DescribeDataRepositoryTasksXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_DATA_REPOSITORY_TASKS) {{
                maxResults = "dolorem";
                nextToken = "harum";
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "occaecati";
                xAmzDate = "labore";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "laborum";
            }};            

            DescribeDataRepositoryTasksResponse res = sdk.sdk.describeDataRepositoryTasks(req);

            if (res.describeDataRepositoryTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFileCaches

<p>Returns the description of a specific Amazon File Cache resource, if a <code>FileCacheIds</code> value is provided for that cache. Otherwise, it returns descriptions of all caches owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all cache descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more cache descriptions remain, the operation returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your cache descriptions. <code>DescribeFileCaches</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> cache descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of caches returned in the response of one <code>DescribeFileCaches</code> call and the order of caches returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFileCachesRequest;
import org.openapis.openapi.models.operations.DescribeFileCachesResponse;
import org.openapis.openapi.models.operations.DescribeFileCachesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFileCachesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFileCachesRequest req = new DescribeFileCachesRequest(                new DescribeFileCachesRequest() {{
                                fileCacheIds = new String[]{{
                                    add("laboriosam"),
                                    add("alias"),
                                    add("amet"),
                                    add("deserunt"),
                                }};
                                maxResults = 454860L;
                                nextToken = "unde";
                            }};, DescribeFileCachesXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_FILE_CACHES) {{
                maxResults = "reiciendis";
                nextToken = "provident";
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "voluptates";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "est";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            DescribeFileCachesResponse res = sdk.sdk.describeFileCaches(req);

            if (res.describeFileCachesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFileSystemAliases

Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a> provided in the <a>DescribeFileSystems</a> operation response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFileSystemAliasesRequest;
import org.openapis.openapi.models.operations.DescribeFileSystemAliasesResponse;
import org.openapis.openapi.models.operations.DescribeFileSystemAliasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFileSystemAliasesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFileSystemAliasesRequest req = new DescribeFileSystemAliasesRequest(                new DescribeFileSystemAliasesRequest("fuga") {{
                                clientRequestToken = "praesentium";
                                maxResults = 648598L;
                                nextToken = "veniam";
                            }};, DescribeFileSystemAliasesXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_FILE_SYSTEM_ALIASES) {{
                maxResults = "voluptatem";
                nextToken = "quisquam";
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "atque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "suscipit";
            }};            

            DescribeFileSystemAliasesResponse res = sdk.sdk.describeFileSystemAliases(req);

            if (res.describeFileSystemAliasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFileSystems

<p>Returns the description of specific Amazon FSx file systems, if a <code>FileSystemIds</code> value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your file system descriptions. <code>DescribeFileSystems</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFileSystemsRequest;
import org.openapis.openapi.models.operations.DescribeFileSystemsResponse;
import org.openapis.openapi.models.operations.DescribeFileSystemsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFileSystemsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFileSystemsRequest req = new DescribeFileSystemsRequest(                new DescribeFileSystemsRequest() {{
                                fileSystemIds = new String[]{{
                                    add("et"),
                                    add("esse"),
                                    add("amet"),
                                    add("assumenda"),
                                }};
                                maxResults = 410301L;
                                nextToken = "atque";
                            }};, DescribeFileSystemsXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_FILE_SYSTEMS) {{
                maxResults = "error";
                nextToken = "officiis";
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "natus";
                xAmzDate = "minima";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "maiores";
            }};            

            DescribeFileSystemsResponse res = sdk.sdk.describeFileSystems(req);

            if (res.describeFileSystemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSnapshots

<p>Returns the description of specific Amazon FSx for OpenZFS snapshots, if a <code>SnapshotIds</code> value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all snapshots, you can optionally specify the <code>MaxResults</code> parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response. </p> <p>Use this operation in an iterative process to retrieve a list of your snapshots. <code>DescribeSnapshots</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of snapshot descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of snapshots returned in the response of one <code>DescribeSnapshots</code> call and the order of backups returned across the responses of a multi-call iteration is unspecified. </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSnapshotsRequest;
import org.openapis.openapi.models.operations.DescribeSnapshotsResponse;
import org.openapis.openapi.models.operations.DescribeSnapshotsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSnapshotsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnapshotFilter;
import org.openapis.openapi.models.shared.SnapshotFilterNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSnapshotsRequest req = new DescribeSnapshotsRequest(                new DescribeSnapshotsRequest() {{
                                filters = new org.openapis.openapi.models.shared.SnapshotFilter[]{{
                                    add(new SnapshotFilter() {{
                                        name = SnapshotFilterNameEnum.VOLUME_ID;
                                        values = new String[]{{
                                            add("suscipit"),
                                            add("repudiandae"),
                                            add("atque"),
                                        }};
                                    }}),
                                    add(new SnapshotFilter() {{
                                        name = SnapshotFilterNameEnum.VOLUME_ID;
                                        values = new String[]{{
                                            add("recusandae"),
                                        }};
                                    }}),
                                    add(new SnapshotFilter() {{
                                        name = SnapshotFilterNameEnum.VOLUME_ID;
                                        values = new String[]{{
                                            add("labore"),
                                            add("reiciendis"),
                                            add("doloremque"),
                                            add("repudiandae"),
                                        }};
                                    }}),
                                    add(new SnapshotFilter() {{
                                        name = SnapshotFilterNameEnum.FILE_SYSTEM_ID;
                                        values = new String[]{{
                                            add("beatae"),
                                        }};
                                    }}),
                                }};
                                maxResults = 174772L;
                                nextToken = "enim";
                                snapshotIds = new String[]{{
                                    add("velit"),
                                    add("a"),
                                }};
                            }};, DescribeSnapshotsXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_SNAPSHOTS) {{
                maxResults = "molestias";
                nextToken = "magnam";
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "occaecati";
                xAmzDate = "officiis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "adipisci";
            }};            

            DescribeSnapshotsResponse res = sdk.sdk.describeSnapshots(req);

            if (res.describeSnapshotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStorageVirtualMachines

Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStorageVirtualMachinesRequest;
import org.openapis.openapi.models.operations.DescribeStorageVirtualMachinesResponse;
import org.openapis.openapi.models.operations.DescribeStorageVirtualMachinesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStorageVirtualMachinesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StorageVirtualMachineFilter;
import org.openapis.openapi.models.shared.StorageVirtualMachineFilterNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStorageVirtualMachinesRequest req = new DescribeStorageVirtualMachinesRequest(                new DescribeStorageVirtualMachinesRequest() {{
                                filters = new org.openapis.openapi.models.shared.StorageVirtualMachineFilter[]{{
                                    add(new StorageVirtualMachineFilter() {{
                                        name = StorageVirtualMachineFilterNameEnum.FILE_SYSTEM_ID;
                                        values = new String[]{{
                                            add("fugit"),
                                        }};
                                    }}),
                                    add(new StorageVirtualMachineFilter() {{
                                        name = StorageVirtualMachineFilterNameEnum.FILE_SYSTEM_ID;
                                        values = new String[]{{
                                            add("quis"),
                                            add("reprehenderit"),
                                            add("error"),
                                        }};
                                    }}),
                                    add(new StorageVirtualMachineFilter() {{
                                        name = StorageVirtualMachineFilterNameEnum.FILE_SYSTEM_ID;
                                        values = new String[]{{
                                            add("corporis"),
                                        }};
                                    }}),
                                }};
                                maxResults = 696463L;
                                nextToken = "eveniet";
                                storageVirtualMachineIds = new String[]{{
                                    add("vero"),
                                }};
                            }};, DescribeStorageVirtualMachinesXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_STORAGE_VIRTUAL_MACHINES) {{
                maxResults = "doloremque";
                nextToken = "iure";
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "totam";
                xAmzCredential = "quae";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "cum";
            }};            

            DescribeStorageVirtualMachinesResponse res = sdk.sdk.describeStorageVirtualMachines(req);

            if (res.describeStorageVirtualMachinesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVolumes

Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVolumesRequest;
import org.openapis.openapi.models.operations.DescribeVolumesResponse;
import org.openapis.openapi.models.operations.DescribeVolumesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeVolumesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VolumeFilter;
import org.openapis.openapi.models.shared.VolumeFilterNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVolumesRequest req = new DescribeVolumesRequest(                new DescribeVolumesRequest() {{
                                filters = new org.openapis.openapi.models.shared.VolumeFilter[]{{
                                    add(new VolumeFilter() {{
                                        name = VolumeFilterNameEnum.FILE_SYSTEM_ID;
                                        values = new String[]{{
                                            add("distinctio"),
                                            add("voluptatum"),
                                            add("rem"),
                                        }};
                                    }}),
                                    add(new VolumeFilter() {{
                                        name = VolumeFilterNameEnum.FILE_SYSTEM_ID;
                                        values = new String[]{{
                                            add("repellat"),
                                            add("alias"),
                                        }};
                                    }}),
                                    add(new VolumeFilter() {{
                                        name = VolumeFilterNameEnum.FILE_SYSTEM_ID;
                                        values = new String[]{{
                                            add("nihil"),
                                            add("mollitia"),
                                            add("voluptas"),
                                        }};
                                    }}),
                                    add(new VolumeFilter() {{
                                        name = VolumeFilterNameEnum.FILE_SYSTEM_ID;
                                        values = new String[]{{
                                            add("reiciendis"),
                                            add("dolores"),
                                            add("id"),
                                            add("minima"),
                                        }};
                                    }}),
                                }};
                                maxResults = 293144L;
                                nextToken = "dolorum";
                                volumeIds = new String[]{{
                                    add("quae"),
                                }};
                            }};, DescribeVolumesXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_VOLUMES) {{
                maxResults = "recusandae";
                nextToken = "omnis";
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "ex";
                xAmzDate = "ut";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "debitis";
            }};            

            DescribeVolumesResponse res = sdk.sdk.describeVolumes(req);

            if (res.describeVolumesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateFileSystemAliases

<p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p> <p>The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateFileSystemAliasesRequest;
import org.openapis.openapi.models.operations.DisassociateFileSystemAliasesResponse;
import org.openapis.openapi.models.operations.DisassociateFileSystemAliasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateFileSystemAliasesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateFileSystemAliasesRequest req = new DisassociateFileSystemAliasesRequest(                new DisassociateFileSystemAliasesRequest(                new String[]{{
                                                add("nemo"),
                                                add("recusandae"),
                                            }}, "esse") {{
                                clientRequestToken = "provident";
                            }};, DisassociateFileSystemAliasesXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_DISASSOCIATE_FILE_SYSTEM_ALIASES) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "reiciendis";
                xAmzDate = "provident";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "quasi";
            }};            

            DisassociateFileSystemAliasesResponse res = sdk.sdk.disassociateFileSystemAliases(req);

            if (res.disassociateFileSystemAliasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Lists tags for Amazon FSx resources.</p> <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code> parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your tags. <code>ListTagsForResource</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of tags returned in the response of one <code>ListTagsForResource</code> call and the order of tags returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("nostrum") {{
                                maxResults = 652309L;
                                nextToken = "provident";
                            }};, ListTagsForResourceXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_LIST_TAGS_FOR_RESOURCE) {{
                maxResults = "possimus";
                nextToken = "animi";
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "accusantium";
                xAmzDate = "repellat";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "in";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releaseFileSystemNfsV3Locks

Releases the file system lock from an Amazon FSx for OpenZFS file system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleaseFileSystemNfsV3LocksRequest;
import org.openapis.openapi.models.operations.ReleaseFileSystemNfsV3LocksResponse;
import org.openapis.openapi.models.operations.ReleaseFileSystemNfsV3LocksXAmzTargetEnum;
import org.openapis.openapi.models.shared.ReleaseFileSystemNfsV3LocksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReleaseFileSystemNfsV3LocksRequest req = new ReleaseFileSystemNfsV3LocksRequest(                new ReleaseFileSystemNfsV3LocksRequest("earum") {{
                                clientRequestToken = "officia";
                            }};, ReleaseFileSystemNfsV3LocksXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_RELEASE_FILE_SYSTEM_NFS_V3_LOCKS) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "modi";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "sapiente";
            }};            

            ReleaseFileSystemNfsV3LocksResponse res = sdk.sdk.releaseFileSystemNfsV3Locks(req);

            if (res.releaseFileSystemNfsV3LocksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreVolumeFromSnapshot

Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreVolumeFromSnapshotRequest;
import org.openapis.openapi.models.operations.RestoreVolumeFromSnapshotResponse;
import org.openapis.openapi.models.operations.RestoreVolumeFromSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.RestoreOpenZFSVolumeOptionEnum;
import org.openapis.openapi.models.shared.RestoreVolumeFromSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreVolumeFromSnapshotRequest req = new RestoreVolumeFromSnapshotRequest(                new RestoreVolumeFromSnapshotRequest("vitae", "rerum") {{
                                clientRequestToken = "tempora";
                                options = new org.openapis.openapi.models.shared.RestoreOpenZFSVolumeOptionEnum[]{{
                                    add(RestoreOpenZFSVolumeOptionEnum.DELETE_INTERMEDIATE_SNAPSHOTS),
                                    add(RestoreOpenZFSVolumeOptionEnum.DELETE_INTERMEDIATE_SNAPSHOTS),
                                }};
                            }};, RestoreVolumeFromSnapshotXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_RESTORE_VOLUME_FROM_SNAPSHOT) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "quae";
                xAmzCredential = "perferendis";
                xAmzDate = "velit";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "eius";
            }};            

            RestoreVolumeFromSnapshotResponse res = sdk.sdk.restoreVolumeFromSnapshot(req);

            if (res.restoreVolumeFromSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Tags an Amazon FSx resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("at",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("eum", "dicta") {{
                                                    key = "eos";
                                                    value = "sapiente";
                                                }}),
                                                add(new Tag("cupiditate", "provident") {{
                                                    key = "minima";
                                                    value = "beatae";
                                                }}),
                                                add(new Tag("hic", "illum") {{
                                                    key = "earum";
                                                    value = "soluta";
                                                }}),
                                                add(new Tag("perspiciatis", "maiores") {{
                                                    key = "eaque";
                                                    value = "earum";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_TAG_RESOURCE) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "porro";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "cumque";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

This action removes a tag from an Amazon FSx resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("ratione",                 new String[]{{
                                                add("necessitatibus"),
                                                add("nulla"),
                                                add("consequatur"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "et";
                xAmzCredential = "ducimus";
                xAmzDate = "natus";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "adipisci";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDataRepositoryAssociation

Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDataRepositoryAssociationRequest;
import org.openapis.openapi.models.operations.UpdateDataRepositoryAssociationResponse;
import org.openapis.openapi.models.operations.UpdateDataRepositoryAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoExportPolicy;
import org.openapis.openapi.models.shared.AutoImportPolicy;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.S3DataRepositoryConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDataRepositoryAssociationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDataRepositoryAssociationRequest req = new UpdateDataRepositoryAssociationRequest(                new UpdateDataRepositoryAssociationRequest("magni") {{
                                clientRequestToken = "doloribus";
                                importedFileChunkSize = 859581L;
                                s3 = new S3DataRepositoryConfiguration() {{
                                    autoExportPolicy = new AutoExportPolicy() {{
                                        events = new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                            add(EventTypeEnum.NEW_),
                                            add(EventTypeEnum.NEW_),
                                            add(EventTypeEnum.CHANGED),
                                            add(EventTypeEnum.CHANGED),
                                        }};
                                    }};;
                                    autoImportPolicy = new AutoImportPolicy() {{
                                        events = new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                            add(EventTypeEnum.CHANGED),
                                        }};
                                    }};;
                                }};;
                            }};, UpdateDataRepositoryAssociationXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_UPDATE_DATA_REPOSITORY_ASSOCIATION) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "maiores";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "vel";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "fugiat";
            }};            

            UpdateDataRepositoryAssociationResponse res = sdk.sdk.updateDataRepositoryAssociation(req);

            if (res.updateDataRepositoryAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFileCache

Updates the configuration of an existing Amazon File Cache resource. You can update multiple properties in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFileCacheRequest;
import org.openapis.openapi.models.operations.UpdateFileCacheResponse;
import org.openapis.openapi.models.operations.UpdateFileCacheXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFileCacheLustreConfiguration;
import org.openapis.openapi.models.shared.UpdateFileCacheRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFileCacheRequest req = new UpdateFileCacheRequest(                new UpdateFileCacheRequest("dicta") {{
                                clientRequestToken = "odio";
                                lustreConfiguration = new UpdateFileCacheLustreConfiguration() {{
                                    weeklyMaintenanceStartTime = "tempora";
                                }};;
                            }};, UpdateFileCacheXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_UPDATE_FILE_CACHE) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ex";
                xAmzCredential = "consectetur";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "sunt";
            }};            

            UpdateFileCacheResponse res = sdk.sdk.updateFileCache(req);

            if (res.updateFileCacheResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFileSystem

<p>Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request.</p> <p>For FSx for Windows File Server file systems, you can update the following properties:</p> <ul> <li> <p> <code>AuditLogConfiguration</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>SelfManagedActiveDirectoryConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for Lustre file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DataCompressionType</code> </p> </li> <li> <p> <code>LustreRootSquashConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for ONTAP file systems, you can update the following properties:</p> <ul> <li> <p> <code>AddRouteTableIds</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>FsxAdminPassword</code> </p> </li> <li> <p> <code>RemoveRouteTableIds</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for OpenZFS file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>CopyTagsToBackups</code> </p> </li> <li> <p> <code>CopyTagsToVolumes</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFileSystemRequest;
import org.openapis.openapi.models.operations.UpdateFileSystemResponse;
import org.openapis.openapi.models.operations.UpdateFileSystemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoImportPolicyTypeEnum;
import org.openapis.openapi.models.shared.DataCompressionTypeEnum;
import org.openapis.openapi.models.shared.DiskIopsConfiguration;
import org.openapis.openapi.models.shared.DiskIopsConfigurationModeEnum;
import org.openapis.openapi.models.shared.LustreAccessAuditLogLevelEnum;
import org.openapis.openapi.models.shared.LustreLogCreateConfiguration;
import org.openapis.openapi.models.shared.LustreRootSquashConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelfManagedActiveDirectoryConfigurationUpdates;
import org.openapis.openapi.models.shared.UpdateFileSystemLustreConfiguration;
import org.openapis.openapi.models.shared.UpdateFileSystemOntapConfiguration;
import org.openapis.openapi.models.shared.UpdateFileSystemOpenZFSConfiguration;
import org.openapis.openapi.models.shared.UpdateFileSystemRequest;
import org.openapis.openapi.models.shared.UpdateFileSystemWindowsConfiguration;
import org.openapis.openapi.models.shared.WindowsAccessAuditLogLevelEnum;
import org.openapis.openapi.models.shared.WindowsAuditLogCreateConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFileSystemRequest req = new UpdateFileSystemRequest(                new UpdateFileSystemRequest("fugiat") {{
                                clientRequestToken = "expedita";
                                lustreConfiguration = new UpdateFileSystemLustreConfiguration() {{
                                    autoImportPolicy = AutoImportPolicyTypeEnum.NEW_;
                                    automaticBackupRetentionDays = 639187L;
                                    dailyAutomaticBackupStartTime = "suscipit";
                                    dataCompressionType = DataCompressionTypeEnum.NONE;
                                    logConfiguration = new LustreLogCreateConfiguration(LustreAccessAuditLogLevelEnum.DISABLED) {{
                                        destination = "eum";
                                    }};;
                                    rootSquashConfiguration = new LustreRootSquashConfiguration() {{
                                        noSquashNids = new String[]{{
                                            add("iste"),
                                            add("id"),
                                        }};
                                        rootSquash = "ab";
                                    }};;
                                    weeklyMaintenanceStartTime = "error";
                                }};;
                                ontapConfiguration = new UpdateFileSystemOntapConfiguration() {{
                                    addRouteTableIds = new String[]{{
                                        add("voluptates"),
                                        add("mollitia"),
                                        add("laborum"),
                                        add("libero"),
                                    }};
                                    automaticBackupRetentionDays = 324083L;
                                    dailyAutomaticBackupStartTime = "deleniti";
                                    diskIopsConfiguration = new DiskIopsConfiguration() {{
                                        iops = 316220L;
                                        mode = DiskIopsConfigurationModeEnum.AUTOMATIC;
                                    }};;
                                    fsxAdminPassword = "repellendus";
                                    removeRouteTableIds = new String[]{{
                                        add("quo"),
                                        add("ex"),
                                    }};
                                    throughputCapacity = 281153L;
                                    weeklyMaintenanceStartTime = "ad";
                                }};;
                                openZFSConfiguration = new UpdateFileSystemOpenZFSConfiguration() {{
                                    automaticBackupRetentionDays = 713927L;
                                    copyTagsToBackups = false;
                                    copyTagsToVolumes = false;
                                    dailyAutomaticBackupStartTime = "voluptatem";
                                    diskIopsConfiguration = new DiskIopsConfiguration() {{
                                        iops = 561577L;
                                        mode = DiskIopsConfigurationModeEnum.USER_PROVISIONED;
                                    }};;
                                    throughputCapacity = 399660L;
                                    weeklyMaintenanceStartTime = "beatae";
                                }};;
                                storageCapacity = 530860L;
                                windowsConfiguration = new UpdateFileSystemWindowsConfiguration() {{
                                    auditLogConfiguration = new WindowsAuditLogCreateConfiguration(WindowsAccessAuditLogLevelEnum.FAILURE_ONLY, WindowsAccessAuditLogLevelEnum.DISABLED) {{
                                        auditLogDestination = "rerum";
                                    }};;
                                    automaticBackupRetentionDays = 665678L;
                                    dailyAutomaticBackupStartTime = "culpa";
                                    selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfigurationUpdates() {{
                                        dnsIps = new String[]{{
                                            add("sapiente"),
                                        }};
                                        password = "officiis";
                                        userName = "Beatrice_Parker2";
                                    }};;
                                    throughputCapacity = 1207L;
                                    weeklyMaintenanceStartTime = "deleniti";
                                }};;
                            }};, UpdateFileSystemXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_UPDATE_FILE_SYSTEM) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "ex";
                xAmzCredential = "sapiente";
                xAmzDate = "rem";
                xAmzSecurityToken = "minus";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "asperiores";
            }};            

            UpdateFileSystemResponse res = sdk.sdk.updateFileSystem(req);

            if (res.updateFileSystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSnapshot

Updates the name of an Amazon FSx for OpenZFS snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSnapshotRequest;
import org.openapis.openapi.models.operations.UpdateSnapshotResponse;
import org.openapis.openapi.models.operations.UpdateSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSnapshotRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSnapshotRequest req = new UpdateSnapshotRequest(                new UpdateSnapshotRequest("ullam", "perferendis") {{
                                clientRequestToken = "illum";
                            }};, UpdateSnapshotXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_UPDATE_SNAPSHOT) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "quibusdam";
                xAmzDate = "nam";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "dolor";
            }};            

            UpdateSnapshotResponse res = sdk.sdk.updateSnapshot(req);

            if (res.updateSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStorageVirtualMachine

Updates an Amazon FSx for ONTAP storage virtual machine (SVM).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStorageVirtualMachineRequest;
import org.openapis.openapi.models.operations.UpdateStorageVirtualMachineResponse;
import org.openapis.openapi.models.operations.UpdateStorageVirtualMachineXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelfManagedActiveDirectoryConfigurationUpdates;
import org.openapis.openapi.models.shared.UpdateStorageVirtualMachineRequest;
import org.openapis.openapi.models.shared.UpdateSvmActiveDirectoryConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStorageVirtualMachineRequest req = new UpdateStorageVirtualMachineRequest(                new UpdateStorageVirtualMachineRequest("inventore") {{
                                activeDirectoryConfiguration = new UpdateSvmActiveDirectoryConfiguration() {{
                                    selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfigurationUpdates() {{
                                        dnsIps = new String[]{{
                                            add("veritatis"),
                                            add("tempora"),
                                            add("dolor"),
                                        }};
                                        password = "consequatur";
                                        userName = "Bailey14";
                                    }};;
                                }};;
                                clientRequestToken = "ab";
                                svmAdminPassword = "laudantium";
                            }};, UpdateStorageVirtualMachineXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_UPDATE_STORAGE_VIRTUAL_MACHINE) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "fugiat";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "quas";
            }};            

            UpdateStorageVirtualMachineResponse res = sdk.sdk.updateStorageVirtualMachine(req);

            if (res.updateStorageVirtualMachineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVolume

Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVolumeRequest;
import org.openapis.openapi.models.operations.UpdateVolumeResponse;
import org.openapis.openapi.models.operations.UpdateVolumeXAmzTargetEnum;
import org.openapis.openapi.models.shared.OpenZFSClientConfiguration;
import org.openapis.openapi.models.shared.OpenZFSDataCompressionTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSNfsExport;
import org.openapis.openapi.models.shared.OpenZFSQuotaTypeEnum;
import org.openapis.openapi.models.shared.OpenZFSUserOrGroupQuota;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityStyleEnum;
import org.openapis.openapi.models.shared.TieringPolicy;
import org.openapis.openapi.models.shared.TieringPolicyNameEnum;
import org.openapis.openapi.models.shared.UpdateOntapVolumeConfiguration;
import org.openapis.openapi.models.shared.UpdateOpenZFSVolumeConfiguration;
import org.openapis.openapi.models.shared.UpdateVolumeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVolumeRequest req = new UpdateVolumeRequest(                new UpdateVolumeRequest("impedit") {{
                                clientRequestToken = "officiis";
                                name = "Jana Cremin";
                                ontapConfiguration = new UpdateOntapVolumeConfiguration() {{
                                    copyTagsToBackups = false;
                                    junctionPath = "expedita";
                                    securityStyle = SecurityStyleEnum.NTFS;
                                    sizeInMegabytes = 426943L;
                                    snapshotPolicy = "voluptatum";
                                    storageEfficiencyEnabled = false;
                                    tieringPolicy = new TieringPolicy() {{
                                        coolingPeriod = 301692L;
                                        name = TieringPolicyNameEnum.AUTO;
                                    }};;
                                }};;
                                openZFSConfiguration = new UpdateOpenZFSVolumeConfiguration() {{
                                    dataCompressionType = OpenZFSDataCompressionTypeEnum.NONE;
                                    nfsExports = new org.openapis.openapi.models.shared.OpenZFSNfsExport[]{{
                                        add(new OpenZFSNfsExport(                new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                            add(new OpenZFSClientConfiguration("quos",                 new String[]{{
                                                                                add("aspernatur"),
                                                                                add("ducimus"),
                                                                            }}) {{
                                                                clients = "officia";
                                                                options = new String[]{{
                                                                    add("numquam"),
                                                                    add("nemo"),
                                                                }};
                                                            }}),
                                                            add(new OpenZFSClientConfiguration("rem",                 new String[]{{
                                                                                add("dicta"),
                                                                                add("nisi"),
                                                                                add("consequuntur"),
                                                                                add("consectetur"),
                                                                            }}) {{
                                                                clients = "nesciunt";
                                                                options = new String[]{{
                                                                    add("laudantium"),
                                                                    add("incidunt"),
                                                                    add("quasi"),
                                                                }};
                                                            }}),
                                                            add(new OpenZFSClientConfiguration("omnis",                 new String[]{{
                                                                                add("occaecati"),
                                                                            }}) {{
                                                                clients = "aperiam";
                                                                options = new String[]{{
                                                                    add("reiciendis"),
                                                                    add("soluta"),
                                                                    add("alias"),
                                                                }};
                                                            }}),
                                                        }}) {{
                                            clientConfigurations = new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                add(new OpenZFSClientConfiguration("voluptatem",                 new String[]{{
                                                                    add("necessitatibus"),
                                                                    add("quasi"),
                                                                }}) {{
                                                    clients = "nobis";
                                                    options = new String[]{{
                                                        add("recusandae"),
                                                        add("consequuntur"),
                                                    }};
                                                }}),
                                                add(new OpenZFSClientConfiguration("doloribus",                 new String[]{{
                                                                    add("optio"),
                                                                    add("occaecati"),
                                                                    add("nemo"),
                                                                    add("voluptate"),
                                                                }}) {{
                                                    clients = "nisi";
                                                    options = new String[]{{
                                                        add("vero"),
                                                        add("est"),
                                                        add("harum"),
                                                        add("sequi"),
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new OpenZFSNfsExport(                new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                            add(new OpenZFSClientConfiguration("deserunt",                 new String[]{{
                                                                                add("nemo"),
                                                                                add("reprehenderit"),
                                                                            }}) {{
                                                                clients = "maiores";
                                                                options = new String[]{{
                                                                    add("sint"),
                                                                    add("nulla"),
                                                                }};
                                                            }}),
                                                        }}) {{
                                            clientConfigurations = new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                add(new OpenZFSClientConfiguration("accusamus",                 new String[]{{
                                                                    add("distinctio"),
                                                                    add("omnis"),
                                                                    add("delectus"),
                                                                    add("minima"),
                                                                }}) {{
                                                    clients = "magni";
                                                    options = new String[]{{
                                                        add("fuga"),
                                                    }};
                                                }}),
                                                add(new OpenZFSClientConfiguration("itaque",                 new String[]{{
                                                                    add("totam"),
                                                                    add("earum"),
                                                                }}) {{
                                                    clients = "praesentium";
                                                    options = new String[]{{
                                                        add("magnam"),
                                                        add("temporibus"),
                                                        add("quos"),
                                                        add("commodi"),
                                                    }};
                                                }}),
                                                add(new OpenZFSClientConfiguration("vel",                 new String[]{{
                                                                    add("quasi"),
                                                                }}) {{
                                                    clients = "modi";
                                                    options = new String[]{{
                                                        add("vero"),
                                                        add("voluptatem"),
                                                        add("ipsam"),
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new OpenZFSNfsExport(                new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                            add(new OpenZFSClientConfiguration("voluptatibus",                 new String[]{{
                                                                                add("magnam"),
                                                                                add("quibusdam"),
                                                                            }}) {{
                                                                clients = "quo";
                                                                options = new String[]{{
                                                                    add("quibusdam"),
                                                                    add("iure"),
                                                                    add("odit"),
                                                                }};
                                                            }}),
                                                        }}) {{
                                            clientConfigurations = new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                add(new OpenZFSClientConfiguration("necessitatibus",                 new String[]{{
                                                                    add("ex"),
                                                                    add("voluptas"),
                                                                    add("debitis"),
                                                                    add("delectus"),
                                                                }}) {{
                                                    clients = "quis";
                                                    options = new String[]{{
                                                        add("accusamus"),
                                                        add("impedit"),
                                                        add("hic"),
                                                    }};
                                                }}),
                                                add(new OpenZFSClientConfiguration("atque",                 new String[]{{
                                                                    add("impedit"),
                                                                }}) {{
                                                    clients = "quae";
                                                    options = new String[]{{
                                                        add("fuga"),
                                                        add("laborum"),
                                                        add("consectetur"),
                                                        add("velit"),
                                                    }};
                                                }}),
                                                add(new OpenZFSClientConfiguration("iusto",                 new String[]{{
                                                                    add("sequi"),
                                                                    add("dignissimos"),
                                                                }}) {{
                                                    clients = "magni";
                                                    options = new String[]{{
                                                        add("repudiandae"),
                                                        add("nam"),
                                                        add("dolore"),
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new OpenZFSNfsExport(                new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                            add(new OpenZFSClientConfiguration("excepturi",                 new String[]{{
                                                                                add("velit"),
                                                                                add("ut"),
                                                                            }}) {{
                                                                clients = "vel";
                                                                options = new String[]{{
                                                                    add("beatae"),
                                                                    add("vero"),
                                                                }};
                                                            }}),
                                                        }}) {{
                                            clientConfigurations = new org.openapis.openapi.models.shared.OpenZFSClientConfiguration[]{{
                                                add(new OpenZFSClientConfiguration("porro",                 new String[]{{
                                                                    add("velit"),
                                                                    add("illo"),
                                                                }}) {{
                                                    clients = "facere";
                                                    options = new String[]{{
                                                        add("architecto"),
                                                        add("voluptatibus"),
                                                        add("quia"),
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    readOnly = false;
                                    recordSizeKiB = 596433L;
                                    storageCapacityQuotaGiB = 935302L;
                                    storageCapacityReservationGiB = 117525L;
                                    userAndGroupQuotas = new org.openapis.openapi.models.shared.OpenZFSUserOrGroupQuota[]{{
                                        add(new OpenZFSUserOrGroupQuota(2677L, 391797L, OpenZFSQuotaTypeEnum.GROUP) {{
                                            id = 975884L;
                                            storageCapacityQuotaGiB = 610987L;
                                            type = OpenZFSQuotaTypeEnum.GROUP;
                                        }}),
                                        add(new OpenZFSUserOrGroupQuota(224467L, 483394L, OpenZFSQuotaTypeEnum.USER) {{
                                            id = 242178L;
                                            storageCapacityQuotaGiB = 673838L;
                                            type = OpenZFSQuotaTypeEnum.USER;
                                        }}),
                                        add(new OpenZFSUserOrGroupQuota(927403L, 408303L, OpenZFSQuotaTypeEnum.GROUP) {{
                                            id = 39992L;
                                            storageCapacityQuotaGiB = 7468L;
                                            type = OpenZFSQuotaTypeEnum.GROUP;
                                        }}),
                                        add(new OpenZFSUserOrGroupQuota(596065L, 709036L, OpenZFSQuotaTypeEnum.GROUP) {{
                                            id = 377406L;
                                            storageCapacityQuotaGiB = 705148L;
                                            type = OpenZFSQuotaTypeEnum.GROUP;
                                        }}),
                                    }};
                                }};;
                            }};, UpdateVolumeXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_UPDATE_VOLUME) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "ullam";
                xAmzDate = "unde";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "impedit";
            }};            

            UpdateVolumeResponse res = sdk.sdk.updateVolume(req);

            if (res.updateVolumeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
