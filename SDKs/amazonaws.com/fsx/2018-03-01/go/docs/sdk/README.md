# SDK

## Overview

Amazon FSx is a fully managed service that makes it easy for storage and application administrators to launch and use shared file storage.

Amazon Web Services documentation
<https://docs.aws.amazon.com/fsx/>
### Available Operations

* [AssociateFileSystemAliases](#associatefilesystemaliases) - <p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including additional steps you must take to be able to access your file system using a DNS alias.</p> <p>The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.</p>
* [CancelDataRepositoryTask](#canceldatarepositorytask) - <p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p> <ul> <li> <p>Any files that FSx has already exported are not reverted.</p> </li> <li> <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p> </li> <li> <p>FSx does not export any files that have not yet been exported.</p> </li> </ul>
* [CopyBackup](#copybackup) - <p>Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account.</p> <p>You can use cross-Region backup copies for cross-Region disaster recovery. You can periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently has three partitions: <code>aws</code> (Standard Regions), <code>aws-cn</code> (China Regions), and <code>aws-us-gov</code> (Amazon Web Services GovCloud [US] Regions).</p> <p>You can also use backup copies to clone your file dataset to another Region or within the same Region.</p> <p>You can use the <code>SourceRegion</code> parameter to specify the Amazon Web Services Region from which the backup will be copied. For example, if you make the call from the <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code> Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter to make a cross-Region copy. If you don't specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy).</p> <p>For more information about creating backup copies, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups"> Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>
* [CreateBackup](#createbackup) - <p>Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume.</p> <p>For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration:</p> <ul> <li> <p>A Persistent deployment type</p> </li> <li> <p>Are <i>not</i> linked to a data repository</p> </li> </ul> <p>For more information about backups, see the following:</p> <ul> <li> <p>For Amazon FSx for Lustre, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for Lustre backups</a>.</p> </li> <li> <p>For Amazon FSx for Windows, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for Windows backups</a>.</p> </li> <li> <p>For Amazon FSx for NetApp ONTAP, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp ONTAP backups</a>.</p> </li> <li> <p>For Amazon FSx for OpenZFS, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html">Working with FSx for OpenZFS backups</a>.</p> </li> </ul> <p>If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a backup with the specified client request token doesn't exist, <code>CreateBackup</code> does the following: </p> <ul> <li> <p>Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the backup.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateBackup</code> operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateBackup</code> operation returns while the backup's lifecycle state is still <code>CREATING</code>. You can check the backup creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html">DescribeBackups</a> operation, which returns the backup state along with other information.</p>
* [CreateDataRepositoryAssociation](#createdatarepositoryassociation) - <p>Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.</p> <p>Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p> <note> <p> <code>CreateDataRepositoryAssociation</code> isn't supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the <code>CreateFileCache</code> operation.</p> </note>
* [CreateDataRepositoryTask](#createdatarepositorytask) - Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. A <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.
* [CreateFileCache](#createfilecache) - <p>Creates a new Amazon File Cache resource.</p> <p>You can use this operation with a client request token in the request that Amazon File Cache uses to ensure idempotent creation. If a cache with the specified client request token exists and the parameters match, <code>CreateFileCache</code> returns the description of the existing cache. If a cache with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file cache with the specified client request token doesn't exist, <code>CreateFileCache</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon File Cache resourcewith an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the cache in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileCache</code> call returns while the cache's lifecycle state is still <code>CREATING</code>. You can check the cache creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns the cache state along with other information.</p> </note>
* [CreateFileSystem](#createfilesystem) - <p>Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the <code>CreateFileSystem</code> API operation:</p> <ul> <li> <p>Amazon FSx for Lustre</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a <code>CreateFileSystem</code> operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <p>If a file system with the specified client request token exists and the parameters match, <code>CreateFileSystem</code> returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, <code>CreateFileSystem</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>
* [CreateFileSystemFromBackup](#createfilesystemfrombackup) - <p>Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup.</p> <p>If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, this operation does the following:</p> <ul> <li> <p>Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings.</p> <p>By using the idempotent operation, you can retry a <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html"> DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>
* [CreateSnapshot](#createsnapshot) - <p>Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version.</p> <p>If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a snapshot with the specified client request token doesn't exist, <code>CreateSnapshot</code> does the following:</p> <ul> <li> <p>Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the snapshot.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateSnapshot</code> operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateSnapshot</code> operation returns while the snapshot's lifecycle state is still <code>CREATING</code>. You can check the snapshot creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> operation, which returns the snapshot state along with other information.</p>
* [CreateStorageVirtualMachine](#createstoragevirtualmachine) - Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.
* [CreateVolume](#createvolume) - Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.
* [CreateVolumeFromBackup](#createvolumefrombackup) - Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.
* [DeleteBackup](#deletebackup) - <p>Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone.</p> <p>The <code>DeleteBackup</code> call returns instantly. The backup won't show up in later <code>DescribeBackups</code> calls.</p> <important> <p>The data in a deleted backup is also deleted and can't be recovered by any means.</p> </important>
* [DeleteDataRepositoryAssociation](#deletedatarepositoryassociation) - Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.
* [DeleteFileCache](#deletefilecache) - <p>Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone.</p> <p>The <code>DeleteFileCache</code> operation returns while the cache has the <code>DELETING</code> status. You can check the cache deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the <code>DescribeFileCaches</code> operation returns a <code>FileCacheNotFound</code> error.</p> <important> <p>The data in a deleted cache is also deleted and can't be recovered by any means.</p> </important>
* [DeleteFileSystem](#deletefilesystem) - <p>Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted.</p> <p>To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a <code>FileSystemId</code> value to the <code>DeleFileSystem</code> operation.</p> <p>By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted.</p> <p>The <code>DeleteFileSystem</code> operation returns while the file system has the <code>DELETING</code> status. You can check the file system deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the <code>DescribeFileSystems</code> operation returns a <code>FileSystemNotFound</code> error.</p> <note> <p>If a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code> state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request).</p> </note> <important> <p>The data in a deleted file system is also deleted and can't be recovered by any means.</p> </important>
* [DeleteSnapshot](#deletesnapshot) - <p>Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup. </p> <p>The <code>DeleteSnapshot</code> operation returns instantly. The snapshot appears with the lifecycle status of <code>DELETING</code> until the deletion is complete.</p>
* [DeleteStorageVirtualMachine](#deletestoragevirtualmachine) - Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.
* [DeleteVolume](#deletevolume) - Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.
* [DescribeBackups](#describebackups) - <p>Returns the description of a specific Amazon FSx backup, if a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code> parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of the <code>NextToken</code> value from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your backups. <code>DescribeBackups</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of backup descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of the backups returned in the response of one <code>DescribeBackups</code> call and the order of the backups returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>
* [DescribeDataRepositoryAssociations](#describedatarepositoryassociations) - <p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository associations, if one or more <code>AssociationIds</code> values are provided in the request, or if filters are used in the request. Data repository associations are supported on Amazon File Cache resources and all Amazon FSx for Lustre file systems excluding <code>Scratch_1</code> deployment types.</p> <p>You can use filters to narrow the response to include just data repository associations for specific file systems (use the <code>file-system-id</code> filter with the ID of the file system) or caches (use the <code>file-cache-id</code> filter with the ID of the cache), or data repository associations for a specific repository type (use the <code>data-repository-type</code> filter with a value of <code>S3</code> or <code>NFS</code>). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all data repository associations, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>
* [DescribeDataRepositoryTasks](#describedatarepositorytasks) - <p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems or caches, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all tasks, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of tasks returned in a response. If more tasks remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>
* [DescribeFileCaches](#describefilecaches) - <p>Returns the description of a specific Amazon File Cache resource, if a <code>FileCacheIds</code> value is provided for that cache. Otherwise, it returns descriptions of all caches owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all cache descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more cache descriptions remain, the operation returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your cache descriptions. <code>DescribeFileCaches</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> cache descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of caches returned in the response of one <code>DescribeFileCaches</code> call and the order of caches returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>
* [DescribeFileSystemAliases](#describefilesystemaliases) - Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a> provided in the <a>DescribeFileSystems</a> operation response.
* [DescribeFileSystems](#describefilesystems) - <p>Returns the description of specific Amazon FSx file systems, if a <code>FileSystemIds</code> value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your file system descriptions. <code>DescribeFileSystems</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>
* [DescribeSnapshots](#describesnapshots) - <p>Returns the description of specific Amazon FSx for OpenZFS snapshots, if a <code>SnapshotIds</code> value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all snapshots, you can optionally specify the <code>MaxResults</code> parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response. </p> <p>Use this operation in an iterative process to retrieve a list of your snapshots. <code>DescribeSnapshots</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of snapshot descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of snapshots returned in the response of one <code>DescribeSnapshots</code> call and the order of backups returned across the responses of a multi-call iteration is unspecified. </p> </li> </ul>
* [DescribeStorageVirtualMachines](#describestoragevirtualmachines) - Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).
* [DescribeVolumes](#describevolumes) - Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.
* [DisassociateFileSystemAliases](#disassociatefilesystemaliases) - <p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p> <p>The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.</p>
* [ListTagsForResource](#listtagsforresource) - <p>Lists tags for Amazon FSx resources.</p> <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code> parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your tags. <code>ListTagsForResource</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of tags returned in the response of one <code>ListTagsForResource</code> call and the order of tags returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>
* [ReleaseFileSystemNfsV3Locks](#releasefilesystemnfsv3locks) - Releases the file system lock from an Amazon FSx for OpenZFS file system.
* [RestoreVolumeFromSnapshot](#restorevolumefromsnapshot) - Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot.
* [TagResource](#tagresource) - Tags an Amazon FSx resource.
* [UntagResource](#untagresource) - This action removes a tag from an Amazon FSx resource.
* [UpdateDataRepositoryAssociation](#updatedatarepositoryassociation) - Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.
* [UpdateFileCache](#updatefilecache) - Updates the configuration of an existing Amazon File Cache resource. You can update multiple properties in a single request.
* [UpdateFileSystem](#updatefilesystem) - <p>Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request.</p> <p>For FSx for Windows File Server file systems, you can update the following properties:</p> <ul> <li> <p> <code>AuditLogConfiguration</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>SelfManagedActiveDirectoryConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for Lustre file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DataCompressionType</code> </p> </li> <li> <p> <code>LustreRootSquashConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for ONTAP file systems, you can update the following properties:</p> <ul> <li> <p> <code>AddRouteTableIds</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>FsxAdminPassword</code> </p> </li> <li> <p> <code>RemoveRouteTableIds</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for OpenZFS file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>CopyTagsToBackups</code> </p> </li> <li> <p> <code>CopyTagsToVolumes</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul>
* [UpdateSnapshot](#updatesnapshot) - Updates the name of an Amazon FSx for OpenZFS snapshot.
* [UpdateStorageVirtualMachine](#updatestoragevirtualmachine) - Updates an Amazon FSx for ONTAP storage virtual machine (SVM).
* [UpdateVolume](#updatevolume) - Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

## AssociateFileSystemAliases

<p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including additional steps you must take to be able to access your file system using a DNS alias.</p> <p>The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateFileSystemAliases(ctx, operations.AssociateFileSystemAliasesRequest{
        AssociateFileSystemAliasesRequest: shared.AssociateFileSystemAliasesRequest{
            Aliases: []string{
                "debitis",
                "ipsa",
            },
            ClientRequestToken: sdk.String("delectus"),
            FileSystemID: "tempora",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.AssociateFileSystemAliasesXAmzTargetEnumAwsSimbaAPIServiceV20180301AssociateFileSystemAliases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFileSystemAliasesResponse != nil {
        // handle response
    }
}
```

## CancelDataRepositoryTask

<p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p> <ul> <li> <p>Any files that FSx has already exported are not reverted.</p> </li> <li> <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p> </li> <li> <p>FSx does not export any files that have not yet been exported.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelDataRepositoryTask(ctx, operations.CancelDataRepositoryTaskRequest{
        CancelDataRepositoryTaskRequest: shared.CancelDataRepositoryTaskRequest{
            TaskID: "nisi",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.CancelDataRepositoryTaskXAmzTargetEnumAwsSimbaAPIServiceV20180301CancelDataRepositoryTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelDataRepositoryTaskResponse != nil {
        // handle response
    }
}
```

## CopyBackup

<p>Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account.</p> <p>You can use cross-Region backup copies for cross-Region disaster recovery. You can periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently has three partitions: <code>aws</code> (Standard Regions), <code>aws-cn</code> (China Regions), and <code>aws-us-gov</code> (Amazon Web Services GovCloud [US] Regions).</p> <p>You can also use backup copies to clone your file dataset to another Region or within the same Region.</p> <p>You can use the <code>SourceRegion</code> parameter to specify the Amazon Web Services Region from which the backup will be copied. For example, if you make the call from the <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code> Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter to make a cross-Region copy. If you don't specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy).</p> <p>For more information about creating backup copies, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups"> Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CopyBackup(ctx, operations.CopyBackupRequest{
        CopyBackupRequest: shared.CopyBackupRequest{
            ClientRequestToken: sdk.String("ipsam"),
            CopyTags: sdk.Bool(false),
            KmsKeyID: sdk.String("repellendus"),
            SourceBackupID: "sapiente",
            SourceRegion: sdk.String("quo"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "at",
                    Value: "at",
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.CopyBackupXAmzTargetEnumAwsSimbaAPIServiceV20180301CopyBackup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyBackupResponse != nil {
        // handle response
    }
}
```

## CreateBackup

<p>Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume.</p> <p>For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration:</p> <ul> <li> <p>A Persistent deployment type</p> </li> <li> <p>Are <i>not</i> linked to a data repository</p> </li> </ul> <p>For more information about backups, see the following:</p> <ul> <li> <p>For Amazon FSx for Lustre, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for Lustre backups</a>.</p> </li> <li> <p>For Amazon FSx for Windows, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for Windows backups</a>.</p> </li> <li> <p>For Amazon FSx for NetApp ONTAP, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp ONTAP backups</a>.</p> </li> <li> <p>For Amazon FSx for OpenZFS, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html">Working with FSx for OpenZFS backups</a>.</p> </li> </ul> <p>If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a backup with the specified client request token doesn't exist, <code>CreateBackup</code> does the following: </p> <ul> <li> <p>Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the backup.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateBackup</code> operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateBackup</code> operation returns while the backup's lifecycle state is still <code>CREATING</code>. You can check the backup creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html">DescribeBackups</a> operation, which returns the backup state along with other information.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBackup(ctx, operations.CreateBackupRequest{
        CreateBackupRequest: shared.CreateBackupRequest{
            ClientRequestToken: sdk.String("dolorum"),
            FileSystemID: sdk.String("dicta"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "officia",
                    Value: "occaecati",
                },
                shared.Tag{
                    Key: "fugit",
                    Value: "deleniti",
                },
                shared.Tag{
                    Key: "hic",
                    Value: "optio",
                },
            },
            VolumeID: sdk.String("totam"),
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.CreateBackupXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateBackup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBackupResponse != nil {
        // handle response
    }
}
```

## CreateDataRepositoryAssociation

<p>Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.</p> <p>Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p> <note> <p> <code>CreateDataRepositoryAssociation</code> isn't supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the <code>CreateFileCache</code> operation.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDataRepositoryAssociation(ctx, operations.CreateDataRepositoryAssociationRequest{
        CreateDataRepositoryAssociationRequest: shared.CreateDataRepositoryAssociationRequest{
            BatchImportMetaDataOnCreate: sdk.Bool(false),
            ClientRequestToken: sdk.String("esse"),
            DataRepositoryPath: "ipsum",
            FileSystemID: "excepturi",
            FileSystemPath: sdk.String("aspernatur"),
            ImportedFileChunkSize: sdk.Int64(18789),
            S3: &shared.S3DataRepositoryConfiguration{
                AutoExportPolicy: &shared.AutoExportPolicy{
                    Events: []shared.EventTypeEnum{
                        shared.EventTypeEnumChanged,
                        shared.EventTypeEnumNew,
                    },
                },
                AutoImportPolicy: &shared.AutoImportPolicy{
                    Events: []shared.EventTypeEnum{
                        shared.EventTypeEnumNew,
                        shared.EventTypeEnumChanged,
                        shared.EventTypeEnumChanged,
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "saepe",
                    Value: "fuga",
                },
                shared.Tag{
                    Key: "in",
                    Value: "corporis",
                },
                shared.Tag{
                    Key: "iste",
                    Value: "iure",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "quidem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.CreateDataRepositoryAssociationXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateDataRepositoryAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataRepositoryAssociationResponse != nil {
        // handle response
    }
}
```

## CreateDataRepositoryTask

Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. A <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDataRepositoryTask(ctx, operations.CreateDataRepositoryTaskRequest{
        CreateDataRepositoryTaskRequest: shared.CreateDataRepositoryTaskRequest{
            CapacityToRelease: sdk.Int64(210382),
            ClientRequestToken: sdk.String("corporis"),
            FileSystemID: "explicabo",
            Paths: []string{
                "enim",
                "omnis",
                "nemo",
                "minima",
            },
            Report: shared.CompletionReport{
                Enabled: false,
                Format: shared.ReportFormatEnumReportCsv20191124.ToPointer(),
                Path: sdk.String("excepturi"),
                Scope: shared.ReportScopeEnumFailedFilesOnly.ToPointer(),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iure",
                    Value: "culpa",
                },
            },
            Type: shared.DataRepositoryTaskTypeEnumAutoReleaseData,
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.CreateDataRepositoryTaskXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateDataRepositoryTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataRepositoryTaskResponse != nil {
        // handle response
    }
}
```

## CreateFileCache

<p>Creates a new Amazon File Cache resource.</p> <p>You can use this operation with a client request token in the request that Amazon File Cache uses to ensure idempotent creation. If a cache with the specified client request token exists and the parameters match, <code>CreateFileCache</code> returns the description of the existing cache. If a cache with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file cache with the specified client request token doesn't exist, <code>CreateFileCache</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon File Cache resourcewith an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the cache in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileCache</code> call returns while the cache's lifecycle state is still <code>CREATING</code>. You can check the cache creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns the cache state along with other information.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFileCache(ctx, operations.CreateFileCacheRequest{
        CreateFileCacheRequest: shared.CreateFileCacheRequest{
            ClientRequestToken: sdk.String("mollitia"),
            CopyTagsToDataRepositoryAssociations: sdk.Bool(false),
            DataRepositoryAssociations: []shared.FileCacheDataRepositoryAssociation{
                shared.FileCacheDataRepositoryAssociation{
                    DataRepositoryPath: "numquam",
                    DataRepositorySubdirectories: []string{
                        "quam",
                        "molestiae",
                    },
                    FileCachePath: "velit",
                    Nfs: &shared.FileCacheNFSConfiguration{
                        DNSIps: []string{
                            "quia",
                            "quis",
                            "vitae",
                        },
                        Version: shared.NfsVersionEnumNfs3,
                    },
                },
                shared.FileCacheDataRepositoryAssociation{
                    DataRepositoryPath: "laborum",
                    DataRepositorySubdirectories: []string{
                        "enim",
                        "odit",
                        "quo",
                    },
                    FileCachePath: "sequi",
                    Nfs: &shared.FileCacheNFSConfiguration{
                        DNSIps: []string{
                            "ipsam",
                            "id",
                            "possimus",
                            "aut",
                        },
                        Version: shared.NfsVersionEnumNfs3,
                    },
                },
                shared.FileCacheDataRepositoryAssociation{
                    DataRepositoryPath: "quasi",
                    DataRepositorySubdirectories: []string{
                        "temporibus",
                        "laborum",
                        "quasi",
                    },
                    FileCachePath: "reiciendis",
                    Nfs: &shared.FileCacheNFSConfiguration{
                        DNSIps: []string{
                            "vero",
                            "nihil",
                            "praesentium",
                            "voluptatibus",
                        },
                        Version: shared.NfsVersionEnumNfs3,
                    },
                },
            },
            FileCacheType: shared.FileCacheTypeEnumLustre,
            FileCacheTypeVersion: "ipsa",
            KmsKeyID: sdk.String("omnis"),
            LustreConfiguration: &shared.CreateFileCacheLustreConfiguration{
                DeploymentType: shared.FileCacheLustreDeploymentTypeEnumCache1,
                MetadataConfiguration: shared.FileCacheLustreMetadataConfiguration{
                    StorageCapacity: 451159,
                },
                PerUnitStorageThroughput: 739264,
                WeeklyMaintenanceStartTime: sdk.String("perferendis"),
            },
            SecurityGroupIds: []string{
                "reprehenderit",
            },
            StorageCapacity: 282807,
            SubnetIds: []string{
                "dicta",
                "corporis",
                "dolore",
                "iusto",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "harum",
                    Value: "enim",
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.CreateFileCacheXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateFileCache,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFileCacheResponse != nil {
        // handle response
    }
}
```

## CreateFileSystem

<p>Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the <code>CreateFileSystem</code> API operation:</p> <ul> <li> <p>Amazon FSx for Lustre</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a <code>CreateFileSystem</code> operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <p>If a file system with the specified client request token exists and the parameters match, <code>CreateFileSystem</code> returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, <code>CreateFileSystem</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFileSystem(ctx, operations.CreateFileSystemRequest{
        CreateFileSystemRequest: shared.CreateFileSystemRequest{
            ClientRequestToken: sdk.String("excepturi"),
            FileSystemType: shared.FileSystemTypeEnumOpenzfs,
            FileSystemTypeVersion: sdk.String("modi"),
            KmsKeyID: sdk.String("praesentium"),
            LustreConfiguration: &shared.CreateFileSystemLustreConfiguration{
                AutoImportPolicy: shared.AutoImportPolicyTypeEnumNewChanged.ToPointer(),
                AutomaticBackupRetentionDays: sdk.Int64(916723),
                CopyTagsToBackups: sdk.Bool(false),
                DailyAutomaticBackupStartTime: sdk.String("quasi"),
                DataCompressionType: shared.DataCompressionTypeEnumLz4.ToPointer(),
                DeploymentType: shared.LustreDeploymentTypeEnumPersistent1.ToPointer(),
                DriveCacheType: shared.DriveCacheTypeEnumNone.ToPointer(),
                ExportPath: sdk.String("itaque"),
                ImportPath: sdk.String("incidunt"),
                ImportedFileChunkSize: sdk.Int64(318569),
                LogConfiguration: &shared.LustreLogCreateConfiguration{
                    Destination: sdk.String("consequatur"),
                    Level: shared.LustreAccessAuditLogLevelEnumErrorOnly,
                },
                PerUnitStorageThroughput: sdk.Int64(842342),
                RootSquashConfiguration: &shared.LustreRootSquashConfiguration{
                    NoSquashNids: []string{
                        "deserunt",
                    },
                    RootSquash: sdk.String("distinctio"),
                },
                WeeklyMaintenanceStartTime: sdk.String("quibusdam"),
            },
            OntapConfiguration: &shared.CreateFileSystemOntapConfiguration{
                AutomaticBackupRetentionDays: sdk.Int64(289406),
                DailyAutomaticBackupStartTime: sdk.String("modi"),
                DeploymentType: shared.OntapDeploymentTypeEnumMultiAz1,
                DiskIopsConfiguration: &shared.DiskIopsConfiguration{
                    Iops: sdk.Int64(397821),
                    Mode: shared.DiskIopsConfigurationModeEnumUserProvisioned.ToPointer(),
                },
                EndpointIPAddressRange: sdk.String("quos"),
                FsxAdminPassword: sdk.String("perferendis"),
                PreferredSubnetID: sdk.String("magni"),
                RouteTableIds: []string{
                    "ipsam",
                    "alias",
                    "fugit",
                    "dolorum",
                },
                ThroughputCapacity: 569618,
                WeeklyMaintenanceStartTime: sdk.String("tempora"),
            },
            OpenZFSConfiguration: &shared.CreateFileSystemOpenZFSConfiguration{
                AutomaticBackupRetentionDays: sdk.Int64(703737),
                CopyTagsToBackups: sdk.Bool(false),
                CopyTagsToVolumes: sdk.Bool(false),
                DailyAutomaticBackupStartTime: sdk.String("tempore"),
                DeploymentType: shared.OpenZFSDeploymentTypeEnumSingleAz1,
                DiskIopsConfiguration: &shared.DiskIopsConfiguration{
                    Iops: sdk.Int64(962189),
                    Mode: shared.DiskIopsConfigurationModeEnumAutomatic.ToPointer(),
                },
                RootVolumeConfiguration: &shared.OpenZFSCreateRootVolumeConfiguration{
                    CopyTagsToSnapshots: sdk.Bool(false),
                    DataCompressionType: shared.OpenZFSDataCompressionTypeEnumNone.ToPointer(),
                    NfsExports: []shared.OpenZFSNfsExport{
                        shared.OpenZFSNfsExport{
                            ClientConfigurations: []shared.OpenZFSClientConfiguration{
                                shared.OpenZFSClientConfiguration{
                                    Clients: "aliquid",
                                    Options: []string{
                                        "necessitatibus",
                                        "sint",
                                        "officia",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "dolor",
                                    Options: []string{
                                        "a",
                                        "dolorum",
                                        "in",
                                        "in",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "illum",
                                    Options: []string{
                                        "rerum",
                                        "dicta",
                                        "magnam",
                                        "cumque",
                                    },
                                },
                            },
                        },
                        shared.OpenZFSNfsExport{
                            ClientConfigurations: []shared.OpenZFSClientConfiguration{
                                shared.OpenZFSClientConfiguration{
                                    Clients: "ea",
                                    Options: []string{
                                        "laborum",
                                        "accusamus",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "non",
                                    Options: []string{
                                        "enim",
                                        "accusamus",
                                        "delectus",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "quidem",
                                    Options: []string{
                                        "nam",
                                        "id",
                                        "blanditiis",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "deleniti",
                                    Options: []string{
                                        "amet",
                                        "deserunt",
                                        "nisi",
                                        "vel",
                                    },
                                },
                            },
                        },
                        shared.OpenZFSNfsExport{
                            ClientConfigurations: []shared.OpenZFSClientConfiguration{
                                shared.OpenZFSClientConfiguration{
                                    Clients: "omnis",
                                    Options: []string{
                                        "perferendis",
                                        "nihil",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "magnam",
                                    Options: []string{
                                        "id",
                                        "labore",
                                        "labore",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "suscipit",
                                    Options: []string{
                                        "nobis",
                                        "eum",
                                        "vero",
                                    },
                                },
                            },
                        },
                        shared.OpenZFSNfsExport{
                            ClientConfigurations: []shared.OpenZFSClientConfiguration{
                                shared.OpenZFSClientConfiguration{
                                    Clients: "architecto",
                                    Options: []string{
                                        "et",
                                        "excepturi",
                                    },
                                },
                            },
                        },
                    },
                    ReadOnly: sdk.Bool(false),
                    RecordSizeKiB: sdk.Int64(354047),
                    UserAndGroupQuotas: []shared.OpenZFSUserOrGroupQuota{
                        shared.OpenZFSUserOrGroupQuota{
                            ID: 551816,
                            StorageCapacityQuotaGiB: 574325,
                            Type: shared.OpenZFSQuotaTypeEnumUser,
                        },
                        shared.OpenZFSUserOrGroupQuota{
                            ID: 653201,
                            StorageCapacityQuotaGiB: 968962,
                            Type: shared.OpenZFSQuotaTypeEnumGroup,
                        },
                        shared.OpenZFSUserOrGroupQuota{
                            ID: 320997,
                            StorageCapacityQuotaGiB: 431418,
                            Type: shared.OpenZFSQuotaTypeEnumUser,
                        },
                    },
                },
                ThroughputCapacity: 896547,
                WeeklyMaintenanceStartTime: sdk.String("odit"),
            },
            SecurityGroupIds: []string{
                "quasi",
                "iure",
            },
            StorageCapacity: 984043,
            StorageType: shared.StorageTypeEnumHdd.ToPointer(),
            SubnetIds: []string{
                "maxime",
                "deleniti",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "in",
                    Value: "architecto",
                },
                shared.Tag{
                    Key: "architecto",
                    Value: "repudiandae",
                },
                shared.Tag{
                    Key: "ullam",
                    Value: "expedita",
                },
            },
            WindowsConfiguration: &shared.CreateFileSystemWindowsConfiguration{
                ActiveDirectoryID: sdk.String("nihil"),
                Aliases: []string{
                    "quibusdam",
                    "sed",
                    "saepe",
                    "pariatur",
                },
                AuditLogConfiguration: &shared.WindowsAuditLogCreateConfiguration{
                    AuditLogDestination: sdk.String("accusantium"),
                    FileAccessAuditLogLevel: shared.WindowsAccessAuditLogLevelEnumDisabled,
                    FileShareAccessAuditLogLevel: shared.WindowsAccessAuditLogLevelEnumFailureOnly,
                },
                AutomaticBackupRetentionDays: sdk.Int64(615560),
                CopyTagsToBackups: sdk.Bool(false),
                DailyAutomaticBackupStartTime: sdk.String("magni"),
                DeploymentType: shared.WindowsDeploymentTypeEnumMultiAz1.ToPointer(),
                PreferredSubnetID: sdk.String("quo"),
                SelfManagedActiveDirectoryConfiguration: &shared.SelfManagedActiveDirectoryConfiguration{
                    DNSIps: []string{
                        "pariatur",
                        "maxime",
                        "ea",
                        "excepturi",
                    },
                    DomainName: "odit",
                    FileSystemAdministratorsGroup: sdk.String("ea"),
                    OrganizationalUnitDistinguishedName: sdk.String("accusantium"),
                    Password: "ab",
                    UserName: "Willow.Predovic",
                },
                ThroughputCapacity: 420075,
                WeeklyMaintenanceStartTime: sdk.String("nam"),
            },
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.CreateFileSystemXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateFileSystem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFileSystemResponse != nil {
        // handle response
    }
}
```

## CreateFileSystemFromBackup

<p>Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup.</p> <p>If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, this operation does the following:</p> <ul> <li> <p>Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings.</p> <p>By using the idempotent operation, you can retry a <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html"> DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFileSystemFromBackup(ctx, operations.CreateFileSystemFromBackupRequest{
        CreateFileSystemFromBackupRequest: shared.CreateFileSystemFromBackupRequest{
            BackupID: "aut",
            ClientRequestToken: sdk.String("cumque"),
            FileSystemTypeVersion: sdk.String("corporis"),
            KmsKeyID: sdk.String("hic"),
            LustreConfiguration: &shared.CreateFileSystemLustreConfiguration{
                AutoImportPolicy: shared.AutoImportPolicyTypeEnumNewChanged.ToPointer(),
                AutomaticBackupRetentionDays: sdk.Int64(749999),
                CopyTagsToBackups: sdk.Bool(false),
                DailyAutomaticBackupStartTime: sdk.String("dolores"),
                DataCompressionType: shared.DataCompressionTypeEnumNone.ToPointer(),
                DeploymentType: shared.LustreDeploymentTypeEnumPersistent1.ToPointer(),
                DriveCacheType: shared.DriveCacheTypeEnumNone.ToPointer(),
                ExportPath: sdk.String("eaque"),
                ImportPath: sdk.String("quis"),
                ImportedFileChunkSize: sdk.Int64(199996),
                LogConfiguration: &shared.LustreLogCreateConfiguration{
                    Destination: sdk.String("eos"),
                    Level: shared.LustreAccessAuditLogLevelEnumDisabled,
                },
                PerUnitStorageThroughput: sdk.Int64(170986),
                RootSquashConfiguration: &shared.LustreRootSquashConfiguration{
                    NoSquashNids: []string{
                        "quam",
                        "dolor",
                        "vero",
                        "nostrum",
                    },
                    RootSquash: sdk.String("hic"),
                },
                WeeklyMaintenanceStartTime: sdk.String("recusandae"),
            },
            OpenZFSConfiguration: &shared.CreateFileSystemOpenZFSConfiguration{
                AutomaticBackupRetentionDays: sdk.Int64(608253),
                CopyTagsToBackups: sdk.Bool(false),
                CopyTagsToVolumes: sdk.Bool(false),
                DailyAutomaticBackupStartTime: sdk.String("facilis"),
                DeploymentType: shared.OpenZFSDeploymentTypeEnumSingleAz2,
                DiskIopsConfiguration: &shared.DiskIopsConfiguration{
                    Iops: sdk.Int64(31838),
                    Mode: shared.DiskIopsConfigurationModeEnumUserProvisioned.ToPointer(),
                },
                RootVolumeConfiguration: &shared.OpenZFSCreateRootVolumeConfiguration{
                    CopyTagsToSnapshots: sdk.Bool(false),
                    DataCompressionType: shared.OpenZFSDataCompressionTypeEnumNone.ToPointer(),
                    NfsExports: []shared.OpenZFSNfsExport{
                        shared.OpenZFSNfsExport{
                            ClientConfigurations: []shared.OpenZFSClientConfiguration{
                                shared.OpenZFSClientConfiguration{
                                    Clients: "eaque",
                                    Options: []string{
                                        "rerum",
                                        "adipisci",
                                        "asperiores",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "earum",
                                    Options: []string{
                                        "iste",
                                        "dolorum",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "deleniti",
                                    Options: []string{
                                        "provident",
                                        "nobis",
                                        "libero",
                                        "delectus",
                                    },
                                },
                            },
                        },
                        shared.OpenZFSNfsExport{
                            ClientConfigurations: []shared.OpenZFSClientConfiguration{
                                shared.OpenZFSClientConfiguration{
                                    Clients: "quos",
                                    Options: []string{
                                        "dolorem",
                                        "dolorem",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "dolor",
                                    Options: []string{
                                        "ipsum",
                                    },
                                },
                            },
                        },
                        shared.OpenZFSNfsExport{
                            ClientConfigurations: []shared.OpenZFSClientConfiguration{
                                shared.OpenZFSClientConfiguration{
                                    Clients: "excepturi",
                                    Options: []string{
                                        "voluptate",
                                        "dignissimos",
                                        "reiciendis",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "amet",
                                    Options: []string{
                                        "numquam",
                                        "veritatis",
                                        "ipsa",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "ipsa",
                                    Options: []string{
                                        "odio",
                                        "quaerat",
                                    },
                                },
                                shared.OpenZFSClientConfiguration{
                                    Clients: "accusamus",
                                    Options: []string{
                                        "voluptatibus",
                                        "voluptas",
                                        "natus",
                                    },
                                },
                            },
                        },
                    },
                    ReadOnly: sdk.Bool(false),
                    RecordSizeKiB: sdk.Int64(179603),
                    UserAndGroupQuotas: []shared.OpenZFSUserOrGroupQuota{
                        shared.OpenZFSUserOrGroupQuota{
                            ID: 24678,
                            StorageCapacityQuotaGiB: 854614,
                            Type: shared.OpenZFSQuotaTypeEnumUser,
                        },
                        shared.OpenZFSUserOrGroupQuota{
                            ID: 743835,
                            StorageCapacityQuotaGiB: 679393,
                            Type: shared.OpenZFSQuotaTypeEnumUser,
                        },
                        shared.OpenZFSUserOrGroupQuota{
                            ID: 453697,
                            StorageCapacityQuotaGiB: 677082,
                            Type: shared.OpenZFSQuotaTypeEnumGroup,
                        },
                    },
                },
                ThroughputCapacity: 607045,
                WeeklyMaintenanceStartTime: sdk.String("necessitatibus"),
            },
            SecurityGroupIds: []string{
                "asperiores",
                "nihil",
                "ipsum",
            },
            StorageCapacity: sdk.Int64(456015),
            StorageType: shared.StorageTypeEnumHdd.ToPointer(),
            SubnetIds: []string{
                "eius",
                "aspernatur",
                "perferendis",
                "amet",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "accusamus",
                    Value: "ad",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "provident",
                },
                shared.Tag{
                    Key: "minima",
                    Value: "repellendus",
                },
            },
            WindowsConfiguration: &shared.CreateFileSystemWindowsConfiguration{
                ActiveDirectoryID: sdk.String("totam"),
                Aliases: []string{
                    "alias",
                    "at",
                    "quaerat",
                },
                AuditLogConfiguration: &shared.WindowsAuditLogCreateConfiguration{
                    AuditLogDestination: sdk.String("tempora"),
                    FileAccessAuditLogLevel: shared.WindowsAccessAuditLogLevelEnumSuccessOnly,
                    FileShareAccessAuditLogLevel: shared.WindowsAccessAuditLogLevelEnumSuccessAndFailure,
                },
                AutomaticBackupRetentionDays: sdk.Int64(885338),
                CopyTagsToBackups: sdk.Bool(false),
                DailyAutomaticBackupStartTime: sdk.String("qui"),
                DeploymentType: shared.WindowsDeploymentTypeEnumSingleAz2.ToPointer(),
                PreferredSubnetID: sdk.String("a"),
                SelfManagedActiveDirectoryConfiguration: &shared.SelfManagedActiveDirectoryConfiguration{
                    DNSIps: []string{
                        "harum",
                        "iusto",
                    },
                    DomainName: "ipsum",
                    FileSystemAdministratorsGroup: sdk.String("quisquam"),
                    OrganizationalUnitDistinguishedName: sdk.String("tenetur"),
                    Password: "amet",
                    UserName: "Mortimer31",
                },
                ThroughputCapacity: 213312,
                WeeklyMaintenanceStartTime: sdk.String("sapiente"),
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.CreateFileSystemFromBackupXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateFileSystemFromBackup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFileSystemFromBackupResponse != nil {
        // handle response
    }
}
```

## CreateSnapshot

<p>Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version.</p> <p>If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a snapshot with the specified client request token doesn't exist, <code>CreateSnapshot</code> does the following:</p> <ul> <li> <p>Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the snapshot.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateSnapshot</code> operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateSnapshot</code> operation returns while the snapshot's lifecycle state is still <code>CREATING</code>. You can check the snapshot creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> operation, which returns the snapshot state along with other information.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSnapshot(ctx, operations.CreateSnapshotRequest{
        CreateSnapshotRequest: shared.CreateSnapshotRequest{
            ClientRequestToken: sdk.String("libero"),
            Name: "Joanna Kohler",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "cupiditate",
                    Value: "maxime",
                },
            },
            VolumeID: "pariatur",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.CreateSnapshotXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSnapshotResponse != nil {
        // handle response
    }
}
```

## CreateStorageVirtualMachine

Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateStorageVirtualMachine(ctx, operations.CreateStorageVirtualMachineRequest{
        CreateStorageVirtualMachineRequest: shared.CreateStorageVirtualMachineRequest{
            ActiveDirectoryConfiguration: &shared.CreateSvmActiveDirectoryConfiguration{
                NetBiosName: "distinctio",
                SelfManagedActiveDirectoryConfiguration: &shared.SelfManagedActiveDirectoryConfiguration{
                    DNSIps: []string{
                        "aliquid",
                        "quam",
                        "molestias",
                    },
                    DomainName: "temporibus",
                    FileSystemAdministratorsGroup: sdk.String("qui"),
                    OrganizationalUnitDistinguishedName: sdk.String("neque"),
                    Password: "fugit",
                    UserName: "Casimir35",
                },
            },
            ClientRequestToken: sdk.String("nam"),
            FileSystemID: "hic",
            Name: "Erma Rogahn PhD",
            RootVolumeSecurityStyle: shared.StorageVirtualMachineRootVolumeSecurityStyleEnumUnix.ToPointer(),
            SvmAdminPassword: sdk.String("veritatis"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quos",
                    Value: "tempore",
                },
                shared.Tag{
                    Key: "cupiditate",
                    Value: "aperiam",
                },
                shared.Tag{
                    Key: "delectus",
                    Value: "dolorem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.CreateStorageVirtualMachineXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateStorageVirtualMachine,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStorageVirtualMachineResponse != nil {
        // handle response
    }
}
```

## CreateVolume

Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateVolume(ctx, operations.CreateVolumeRequest{
        CreateVolumeRequest: shared.CreateVolumeRequest{
            ClientRequestToken: sdk.String("quas"),
            Name: "William Ortiz",
            OntapConfiguration: &shared.CreateOntapVolumeConfiguration{
                CopyTagsToBackups: sdk.Bool(false),
                JunctionPath: sdk.String("doloribus"),
                OntapVolumeType: shared.InputOntapVolumeTypeEnumRw.ToPointer(),
                SecurityStyle: shared.SecurityStyleEnumMixed.ToPointer(),
                SizeInMegabytes: 586410,
                SnapshotPolicy: sdk.String("qui"),
                StorageEfficiencyEnabled: sdk.Bool(false),
                StorageVirtualMachineID: "quae",
                TieringPolicy: &shared.TieringPolicy{
                    CoolingPeriod: sdk.Int64(512393),
                    Name: shared.TieringPolicyNameEnumAuto.ToPointer(),
                },
            },
            OpenZFSConfiguration: &shared.CreateOpenZFSVolumeConfiguration{
                CopyTagsToSnapshots: sdk.Bool(false),
                DataCompressionType: shared.OpenZFSDataCompressionTypeEnumZstd.ToPointer(),
                NfsExports: []shared.OpenZFSNfsExport{
                    shared.OpenZFSNfsExport{
                        ClientConfigurations: []shared.OpenZFSClientConfiguration{
                            shared.OpenZFSClientConfiguration{
                                Clients: "vero",
                                Options: []string{
                                    "quis",
                                    "ipsum",
                                    "delectus",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "voluptate",
                                Options: []string{
                                    "vero",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "tenetur",
                                Options: []string{
                                    "hic",
                                    "distinctio",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "quod",
                                Options: []string{
                                    "similique",
                                    "facilis",
                                },
                            },
                        },
                    },
                    shared.OpenZFSNfsExport{
                        ClientConfigurations: []shared.OpenZFSClientConfiguration{
                            shared.OpenZFSClientConfiguration{
                                Clients: "ducimus",
                                Options: []string{
                                    "quibusdam",
                                    "illum",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "sequi",
                                Options: []string{
                                    "impedit",
                                    "aut",
                                    "voluptatibus",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "exercitationem",
                                Options: []string{
                                    "fugit",
                                    "porro",
                                    "maiores",
                                    "doloribus",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "iusto",
                                Options: []string{
                                    "ducimus",
                                    "alias",
                                    "officia",
                                    "tempora",
                                },
                            },
                        },
                    },
                    shared.OpenZFSNfsExport{
                        ClientConfigurations: []shared.OpenZFSClientConfiguration{
                            shared.OpenZFSClientConfiguration{
                                Clients: "ea",
                                Options: []string{
                                    "vel",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "possimus",
                                Options: []string{
                                    "ratione",
                                    "ex",
                                },
                            },
                        },
                    },
                    shared.OpenZFSNfsExport{
                        ClientConfigurations: []shared.OpenZFSClientConfiguration{
                            shared.OpenZFSClientConfiguration{
                                Clients: "dicta",
                                Options: []string{
                                    "maiores",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "quasi",
                                Options: []string{
                                    "nulla",
                                    "excepturi",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "voluptatibus",
                                Options: []string{
                                    "sapiente",
                                    "quisquam",
                                },
                            },
                        },
                    },
                },
                OriginSnapshot: &shared.CreateOpenZFSOriginSnapshotConfiguration{
                    CopyStrategy: shared.OpenZFSCopyStrategyEnumFullCopy,
                    SnapshotARN: "ea",
                },
                ParentVolumeID: "impedit",
                ReadOnly: sdk.Bool(false),
                RecordSizeKiB: sdk.Int64(359271),
                StorageCapacityQuotaGiB: sdk.Int64(333145),
                StorageCapacityReservationGiB: sdk.Int64(399499),
                UserAndGroupQuotas: []shared.OpenZFSUserOrGroupQuota{
                    shared.OpenZFSUserOrGroupQuota{
                        ID: 301831,
                        StorageCapacityQuotaGiB: 407241,
                        Type: shared.OpenZFSQuotaTypeEnumGroup,
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "recusandae",
                    Value: "aspernatur",
                },
            },
            VolumeType: shared.VolumeTypeEnumOntap,
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.CreateVolumeXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateVolume,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVolumeResponse != nil {
        // handle response
    }
}
```

## CreateVolumeFromBackup

Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateVolumeFromBackup(ctx, operations.CreateVolumeFromBackupRequest{
        CreateVolumeFromBackupRequest: shared.CreateVolumeFromBackupRequest{
            BackupID: "aliquam",
            ClientRequestToken: sdk.String("fugit"),
            Name: "Miss Dennis Friesen",
            OntapConfiguration: &shared.CreateOntapVolumeConfiguration{
                CopyTagsToBackups: sdk.Bool(false),
                JunctionPath: sdk.String("placeat"),
                OntapVolumeType: shared.InputOntapVolumeTypeEnumRw.ToPointer(),
                SecurityStyle: shared.SecurityStyleEnumNtfs.ToPointer(),
                SizeInMegabytes: 420539,
                SnapshotPolicy: sdk.String("nobis"),
                StorageEfficiencyEnabled: sdk.Bool(false),
                StorageVirtualMachineID: "quas",
                TieringPolicy: &shared.TieringPolicy{
                    CoolingPeriod: sdk.Int64(829603),
                    Name: shared.TieringPolicyNameEnumNone.ToPointer(),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "libero",
                    Value: "quasi",
                },
                shared.Tag{
                    Key: "tempora",
                    Value: "numquam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.CreateVolumeFromBackupXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateVolumeFromBackup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVolumeFromBackupResponse != nil {
        // handle response
    }
}
```

## DeleteBackup

<p>Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone.</p> <p>The <code>DeleteBackup</code> call returns instantly. The backup won't show up in later <code>DescribeBackups</code> calls.</p> <important> <p>The data in a deleted backup is also deleted and can't be recovered by any means.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBackup(ctx, operations.DeleteBackupRequest{
        DeleteBackupRequest: shared.DeleteBackupRequest{
            BackupID: "esse",
            ClientRequestToken: sdk.String("esse"),
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DeleteBackupXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteBackup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBackupResponse != nil {
        // handle response
    }
}
```

## DeleteDataRepositoryAssociation

Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDataRepositoryAssociation(ctx, operations.DeleteDataRepositoryAssociationRequest{
        DeleteDataRepositoryAssociationRequest: shared.DeleteDataRepositoryAssociationRequest{
            AssociationID: "suscipit",
            ClientRequestToken: sdk.String("assumenda"),
            DeleteDataInFileSystem: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.DeleteDataRepositoryAssociationXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteDataRepositoryAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDataRepositoryAssociationResponse != nil {
        // handle response
    }
}
```

## DeleteFileCache

<p>Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone.</p> <p>The <code>DeleteFileCache</code> operation returns while the cache has the <code>DELETING</code> status. You can check the cache deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the <code>DescribeFileCaches</code> operation returns a <code>FileCacheNotFound</code> error.</p> <important> <p>The data in a deleted cache is also deleted and can't be recovered by any means.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFileCache(ctx, operations.DeleteFileCacheRequest{
        DeleteFileCacheRequest: shared.DeleteFileCacheRequest{
            ClientRequestToken: sdk.String("neque"),
            FileCacheID: "quo",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.DeleteFileCacheXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteFileCache,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFileCacheResponse != nil {
        // handle response
    }
}
```

## DeleteFileSystem

<p>Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted.</p> <p>To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a <code>FileSystemId</code> value to the <code>DeleFileSystem</code> operation.</p> <p>By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted.</p> <p>The <code>DeleteFileSystem</code> operation returns while the file system has the <code>DELETING</code> status. You can check the file system deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the <code>DescribeFileSystems</code> operation returns a <code>FileSystemNotFound</code> error.</p> <note> <p>If a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code> state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request).</p> </note> <important> <p>The data in a deleted file system is also deleted and can't be recovered by any means.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFileSystem(ctx, operations.DeleteFileSystemRequest{
        DeleteFileSystemRequest: shared.DeleteFileSystemRequest{
            ClientRequestToken: sdk.String("cupiditate"),
            FileSystemID: "consequatur",
            LustreConfiguration: &shared.DeleteFileSystemLustreConfiguration{
                FinalBackupTags: []shared.Tag{
                    shared.Tag{
                        Key: "debitis",
                        Value: "ipsam",
                    },
                    shared.Tag{
                        Key: "aspernatur",
                        Value: "sequi",
                    },
                },
                SkipFinalBackup: sdk.Bool(false),
            },
            OpenZFSConfiguration: &shared.DeleteFileSystemOpenZFSConfiguration{
                FinalBackupTags: []shared.Tag{
                    shared.Tag{
                        Key: "esse",
                        Value: "recusandae",
                    },
                    shared.Tag{
                        Key: "aperiam",
                        Value: "distinctio",
                    },
                    shared.Tag{
                        Key: "quod",
                        Value: "dignissimos",
                    },
                    shared.Tag{
                        Key: "inventore",
                        Value: "nihil",
                    },
                },
                Options: []shared.DeleteFileSystemOpenZFSOptionEnum{
                    shared.DeleteFileSystemOpenZFSOptionEnumDeleteChildVolumesAndSnapshots,
                    shared.DeleteFileSystemOpenZFSOptionEnumDeleteChildVolumesAndSnapshots,
                    shared.DeleteFileSystemOpenZFSOptionEnumDeleteChildVolumesAndSnapshots,
                },
                SkipFinalBackup: sdk.Bool(false),
            },
            WindowsConfiguration: &shared.DeleteFileSystemWindowsConfiguration{
                FinalBackupTags: []shared.Tag{
                    shared.Tag{
                        Key: "aliquam",
                        Value: "odio",
                    },
                    shared.Tag{
                        Key: "occaecati",
                        Value: "commodi",
                    },
                    shared.Tag{
                        Key: "sapiente",
                        Value: "dolores",
                    },
                    shared.Tag{
                        Key: "deserunt",
                        Value: "molestiae",
                    },
                },
                SkipFinalBackup: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DeleteFileSystemXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteFileSystem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFileSystemResponse != nil {
        // handle response
    }
}
```

## DeleteSnapshot

<p>Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup. </p> <p>The <code>DeleteSnapshot</code> operation returns instantly. The snapshot appears with the lifecycle status of <code>DELETING</code> until the deletion is complete.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSnapshot(ctx, operations.DeleteSnapshotRequest{
        DeleteSnapshotRequest: shared.DeleteSnapshotRequest{
            ClientRequestToken: sdk.String("fugit"),
            SnapshotID: "fuga",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.DeleteSnapshotXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnapshotResponse != nil {
        // handle response
    }
}
```

## DeleteStorageVirtualMachine

Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteStorageVirtualMachine(ctx, operations.DeleteStorageVirtualMachineRequest{
        DeleteStorageVirtualMachineRequest: shared.DeleteStorageVirtualMachineRequest{
            ClientRequestToken: sdk.String("sapiente"),
            StorageVirtualMachineID: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.DeleteStorageVirtualMachineXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteStorageVirtualMachine,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStorageVirtualMachineResponse != nil {
        // handle response
    }
}
```

## DeleteVolume

Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVolume(ctx, operations.DeleteVolumeRequest{
        DeleteVolumeRequest: shared.DeleteVolumeRequest{
            ClientRequestToken: sdk.String("eveniet"),
            OntapConfiguration: &shared.DeleteVolumeOntapConfiguration{
                FinalBackupTags: []shared.Tag{
                    shared.Tag{
                        Key: "veritatis",
                        Value: "esse",
                    },
                    shared.Tag{
                        Key: "quod",
                        Value: "nam",
                    },
                    shared.Tag{
                        Key: "vero",
                        Value: "aliquid",
                    },
                    shared.Tag{
                        Key: "quasi",
                        Value: "saepe",
                    },
                },
                SkipFinalBackup: sdk.Bool(false),
            },
            OpenZFSConfiguration: &shared.DeleteVolumeOpenZFSConfiguration{
                Options: []shared.DeleteOpenZFSVolumeOptionEnum{
                    shared.DeleteOpenZFSVolumeOptionEnumDeleteChildVolumesAndSnapshots,
                    shared.DeleteOpenZFSVolumeOptionEnumDeleteChildVolumesAndSnapshots,
                },
            },
            VolumeID: "harum",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.DeleteVolumeXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteVolume,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVolumeResponse != nil {
        // handle response
    }
}
```

## DescribeBackups

<p>Returns the description of a specific Amazon FSx backup, if a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code> parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of the <code>NextToken</code> value from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your backups. <code>DescribeBackups</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of backup descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of the backups returned in the response of one <code>DescribeBackups</code> call and the order of the backups returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeBackups(ctx, operations.DescribeBackupsRequest{
        DescribeBackupsRequest: shared.DescribeBackupsRequest{
            BackupIds: []string{
                "tempore",
                "adipisci",
                "cumque",
            },
            Filters: []shared.Filter{
                shared.Filter{
                    Name: shared.FilterNameEnumFileSystemID.ToPointer(),
                    Values: []string{
                        "quaerat",
                        "sapiente",
                        "consectetur",
                        "esse",
                    },
                },
            },
            MaxResults: sdk.Int64(503427),
            NextToken: sdk.String("provident"),
        },
        MaxResults: sdk.String("a"),
        NextToken: sdk.String("nulla"),
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.DescribeBackupsXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeBackups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBackupsResponse != nil {
        // handle response
    }
}
```

## DescribeDataRepositoryAssociations

<p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository associations, if one or more <code>AssociationIds</code> values are provided in the request, or if filters are used in the request. Data repository associations are supported on Amazon File Cache resources and all Amazon FSx for Lustre file systems excluding <code>Scratch_1</code> deployment types.</p> <p>You can use filters to narrow the response to include just data repository associations for specific file systems (use the <code>file-system-id</code> filter with the ID of the file system) or caches (use the <code>file-cache-id</code> filter with the ID of the cache), or data repository associations for a specific repository type (use the <code>data-repository-type</code> filter with a value of <code>S3</code> or <code>NFS</code>). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all data repository associations, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDataRepositoryAssociations(ctx, operations.DescribeDataRepositoryAssociationsRequest{
        DescribeDataRepositoryAssociationsRequest: shared.DescribeDataRepositoryAssociationsRequest{
            AssociationIds: []string{
                "quia",
                "eveniet",
                "asperiores",
                "facere",
            },
            Filters: []shared.Filter{
                shared.Filter{
                    Name: shared.FilterNameEnumBackupType.ToPointer(),
                    Values: []string{
                        "similique",
                    },
                },
            },
            MaxResults: sdk.Int64(633608),
            NextToken: sdk.String("aliquid"),
        },
        MaxResults: sdk.String("tenetur"),
        NextToken: sdk.String("quae"),
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.DescribeDataRepositoryAssociationsXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeDataRepositoryAssociations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDataRepositoryAssociationsResponse != nil {
        // handle response
    }
}
```

## DescribeDataRepositoryTasks

<p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems or caches, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all tasks, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of tasks returned in a response. If more tasks remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDataRepositoryTasks(ctx, operations.DescribeDataRepositoryTasksRequest{
        DescribeDataRepositoryTasksRequest: shared.DescribeDataRepositoryTasksRequest{
            Filters: []shared.DataRepositoryTaskFilter{
                shared.DataRepositoryTaskFilter{
                    Name: shared.DataRepositoryTaskFilterNameEnumTaskLifecycle.ToPointer(),
                    Values: []string{
                        "dicta",
                        "ullam",
                        "reprehenderit",
                        "ullam",
                    },
                },
            },
            MaxResults: sdk.Int64(391774),
            NextToken: sdk.String("aut"),
            TaskIds: []string{
                "qui",
                "quibusdam",
                "ex",
            },
        },
        MaxResults: sdk.String("deleniti"),
        NextToken: sdk.String("itaque"),
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.DescribeDataRepositoryTasksXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeDataRepositoryTasks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDataRepositoryTasksResponse != nil {
        // handle response
    }
}
```

## DescribeFileCaches

<p>Returns the description of a specific Amazon File Cache resource, if a <code>FileCacheIds</code> value is provided for that cache. Otherwise, it returns descriptions of all caches owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all cache descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more cache descriptions remain, the operation returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your cache descriptions. <code>DescribeFileCaches</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> cache descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of caches returned in the response of one <code>DescribeFileCaches</code> call and the order of caches returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFileCaches(ctx, operations.DescribeFileCachesRequest{
        DescribeFileCachesRequest: shared.DescribeFileCachesRequest{
            FileCacheIds: []string{
                "ipsa",
                "minima",
            },
            MaxResults: sdk.Int64(86532),
            NextToken: sdk.String("consectetur"),
        },
        MaxResults: sdk.String("adipisci"),
        NextToken: sdk.String("iste"),
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DescribeFileCachesXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeFileCaches,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFileCachesResponse != nil {
        // handle response
    }
}
```

## DescribeFileSystemAliases

Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a> provided in the <a>DescribeFileSystems</a> operation response.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFileSystemAliases(ctx, operations.DescribeFileSystemAliasesRequest{
        DescribeFileSystemAliasesRequest: shared.DescribeFileSystemAliasesRequest{
            ClientRequestToken: sdk.String("ab"),
            FileSystemID: "corrupti",
            MaxResults: sdk.Int64(251941),
            NextToken: sdk.String("voluptatem"),
        },
        MaxResults: sdk.String("dolor"),
        NextToken: sdk.String("occaecati"),
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeFileSystemAliasesXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeFileSystemAliases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFileSystemAliasesResponse != nil {
        // handle response
    }
}
```

## DescribeFileSystems

<p>Returns the description of specific Amazon FSx file systems, if a <code>FileSystemIds</code> value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your file system descriptions. <code>DescribeFileSystems</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFileSystems(ctx, operations.DescribeFileSystemsRequest{
        DescribeFileSystemsRequest: shared.DescribeFileSystemsRequest{
            FileSystemIds: []string{
                "natus",
                "velit",
                "voluptatibus",
                "voluptas",
            },
            MaxResults: sdk.Int64(990345),
            NextToken: sdk.String("aperiam"),
        },
        MaxResults: sdk.String("ea"),
        NextToken: sdk.String("quaerat"),
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DescribeFileSystemsXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeFileSystems,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFileSystemsResponse != nil {
        // handle response
    }
}
```

## DescribeSnapshots

<p>Returns the description of specific Amazon FSx for OpenZFS snapshots, if a <code>SnapshotIds</code> value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all snapshots, you can optionally specify the <code>MaxResults</code> parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response. </p> <p>Use this operation in an iterative process to retrieve a list of your snapshots. <code>DescribeSnapshots</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of snapshot descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of snapshots returned in the response of one <code>DescribeSnapshots</code> call and the order of backups returned across the responses of a multi-call iteration is unspecified. </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSnapshots(ctx, operations.DescribeSnapshotsRequest{
        DescribeSnapshotsRequest: shared.DescribeSnapshotsRequest{
            Filters: []shared.SnapshotFilter{
                shared.SnapshotFilter{
                    Name: shared.SnapshotFilterNameEnumFileSystemID.ToPointer(),
                    Values: []string{
                        "porro",
                        "quod",
                    },
                },
                shared.SnapshotFilter{
                    Name: shared.SnapshotFilterNameEnumFileSystemID.ToPointer(),
                    Values: []string{
                        "adipisci",
                    },
                },
            },
            MaxResults: sdk.Int64(683573),
            NextToken: sdk.String("id"),
            SnapshotIds: []string{
                "velit",
                "culpa",
            },
        },
        MaxResults: sdk.String("est"),
        NextToken: sdk.String("recusandae"),
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.DescribeSnapshotsXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeSnapshots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSnapshotsResponse != nil {
        // handle response
    }
}
```

## DescribeStorageVirtualMachines

Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeStorageVirtualMachines(ctx, operations.DescribeStorageVirtualMachinesRequest{
        DescribeStorageVirtualMachinesRequest: shared.DescribeStorageVirtualMachinesRequest{
            Filters: []shared.StorageVirtualMachineFilter{
                shared.StorageVirtualMachineFilter{
                    Name: shared.StorageVirtualMachineFilterNameEnumFileSystemID.ToPointer(),
                    Values: []string{
                        "cum",
                        "commodi",
                        "in",
                    },
                },
                shared.StorageVirtualMachineFilter{
                    Name: shared.StorageVirtualMachineFilterNameEnumFileSystemID.ToPointer(),
                    Values: []string{
                        "reiciendis",
                        "assumenda",
                    },
                },
                shared.StorageVirtualMachineFilter{
                    Name: shared.StorageVirtualMachineFilterNameEnumFileSystemID.ToPointer(),
                    Values: []string{
                        "recusandae",
                        "aliquid",
                    },
                },
                shared.StorageVirtualMachineFilter{
                    Name: shared.StorageVirtualMachineFilterNameEnumFileSystemID.ToPointer(),
                    Values: []string{
                        "cum",
                    },
                },
            },
            MaxResults: sdk.Int64(232627),
            NextToken: sdk.String("in"),
            StorageVirtualMachineIds: []string{
                "earum",
                "facere",
            },
        },
        MaxResults: sdk.String("numquam"),
        NextToken: sdk.String("doloribus"),
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzTarget: operations.DescribeStorageVirtualMachinesXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeStorageVirtualMachines,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStorageVirtualMachinesResponse != nil {
        // handle response
    }
}
```

## DescribeVolumes

Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeVolumes(ctx, operations.DescribeVolumesRequest{
        DescribeVolumesRequest: shared.DescribeVolumesRequest{
            Filters: []shared.VolumeFilter{
                shared.VolumeFilter{
                    Name: shared.VolumeFilterNameEnumFileSystemID.ToPointer(),
                    Values: []string{
                        "amet",
                    },
                },
                shared.VolumeFilter{
                    Name: shared.VolumeFilterNameEnumFileSystemID.ToPointer(),
                    Values: []string{
                        "a",
                        "debitis",
                    },
                },
                shared.VolumeFilter{
                    Name: shared.VolumeFilterNameEnumFileSystemID.ToPointer(),
                    Values: []string{
                        "harum",
                        "laboriosam",
                    },
                },
                shared.VolumeFilter{
                    Name: shared.VolumeFilterNameEnumFileSystemID.ToPointer(),
                    Values: []string{
                        "libero",
                        "vitae",
                        "accusamus",
                        "similique",
                    },
                },
            },
            MaxResults: sdk.Int64(272437),
            NextToken: sdk.String("aspernatur"),
            VolumeIds: []string{
                "voluptas",
                "voluptas",
            },
        },
        MaxResults: sdk.String("minima"),
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.DescribeVolumesXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeVolumes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVolumesResponse != nil {
        // handle response
    }
}
```

## DisassociateFileSystemAliases

<p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p> <p>The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateFileSystemAliases(ctx, operations.DisassociateFileSystemAliasesRequest{
        DisassociateFileSystemAliasesRequest: shared.DisassociateFileSystemAliasesRequest{
            Aliases: []string{
                "officiis",
                "temporibus",
            },
            ClientRequestToken: sdk.String("ullam"),
            FileSystemID: "adipisci",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmzTarget: operations.DisassociateFileSystemAliasesXAmzTargetEnumAwsSimbaAPIServiceV20180301DisassociateFileSystemAliases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateFileSystemAliasesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Lists tags for Amazon FSx resources.</p> <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code> parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your tags. <code>ListTagsForResource</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of tags returned in the response of one <code>ListTagsForResource</code> call and the order of tags returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            MaxResults: sdk.Int64(867290),
            NextToken: sdk.String("totam"),
            ResourceARN: "hic",
        },
        MaxResults: sdk.String("exercitationem"),
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsSimbaAPIServiceV20180301ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ReleaseFileSystemNfsV3Locks

Releases the file system lock from an Amazon FSx for OpenZFS file system.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ReleaseFileSystemNfsV3Locks(ctx, operations.ReleaseFileSystemNfsV3LocksRequest{
        ReleaseFileSystemNfsV3LocksRequest: shared.ReleaseFileSystemNfsV3LocksRequest{
            ClientRequestToken: sdk.String("voluptate"),
            FileSystemID: "expedita",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.ReleaseFileSystemNfsV3LocksXAmzTargetEnumAwsSimbaAPIServiceV20180301ReleaseFileSystemNfsV3Locks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseFileSystemNfsV3LocksResponse != nil {
        // handle response
    }
}
```

## RestoreVolumeFromSnapshot

Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RestoreVolumeFromSnapshot(ctx, operations.RestoreVolumeFromSnapshotRequest{
        RestoreVolumeFromSnapshotRequest: shared.RestoreVolumeFromSnapshotRequest{
            ClientRequestToken: sdk.String("quidem"),
            Options: []shared.RestoreOpenZFSVolumeOptionEnum{
                shared.RestoreOpenZFSVolumeOptionEnumDeleteIntermediateSnapshots,
            },
            SnapshotID: "unde",
            VolumeID: "architecto",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmzTarget: operations.RestoreVolumeFromSnapshotXAmzTargetEnumAwsSimbaAPIServiceV20180301RestoreVolumeFromSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreVolumeFromSnapshotResponse != nil {
        // handle response
    }
}
```

## TagResource

Tags an Amazon FSx resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "maiores",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sed",
                    Value: "provident",
                },
                shared.Tag{
                    Key: "eius",
                    Value: "necessitatibus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsSimbaAPIServiceV20180301TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

This action removes a tag from an Amazon FSx resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "voluptate",
            TagKeys: []string{
                "ex",
                "sit",
                "non",
                "officiis",
            },
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsSimbaAPIServiceV20180301UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateDataRepositoryAssociation

Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDataRepositoryAssociation(ctx, operations.UpdateDataRepositoryAssociationRequest{
        UpdateDataRepositoryAssociationRequest: shared.UpdateDataRepositoryAssociationRequest{
            AssociationID: "sit",
            ClientRequestToken: sdk.String("nobis"),
            ImportedFileChunkSize: sdk.Int64(625637),
            S3: &shared.S3DataRepositoryConfiguration{
                AutoExportPolicy: &shared.AutoExportPolicy{
                    Events: []shared.EventTypeEnum{
                        shared.EventTypeEnumNew,
                        shared.EventTypeEnumDeleted,
                    },
                },
                AutoImportPolicy: &shared.AutoImportPolicy{
                    Events: []shared.EventTypeEnum{
                        shared.EventTypeEnumDeleted,
                        shared.EventTypeEnumNew,
                        shared.EventTypeEnumNew,
                        shared.EventTypeEnumDeleted,
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.UpdateDataRepositoryAssociationXAmzTargetEnumAwsSimbaAPIServiceV20180301UpdateDataRepositoryAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDataRepositoryAssociationResponse != nil {
        // handle response
    }
}
```

## UpdateFileCache

Updates the configuration of an existing Amazon File Cache resource. You can update multiple properties in a single request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFileCache(ctx, operations.UpdateFileCacheRequest{
        UpdateFileCacheRequest: shared.UpdateFileCacheRequest{
            ClientRequestToken: sdk.String("praesentium"),
            FileCacheID: "cum",
            LustreConfiguration: &shared.UpdateFileCacheLustreConfiguration{
                WeeklyMaintenanceStartTime: sdk.String("laboriosam"),
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.UpdateFileCacheXAmzTargetEnumAwsSimbaAPIServiceV20180301UpdateFileCache,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFileCacheResponse != nil {
        // handle response
    }
}
```

## UpdateFileSystem

<p>Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request.</p> <p>For FSx for Windows File Server file systems, you can update the following properties:</p> <ul> <li> <p> <code>AuditLogConfiguration</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>SelfManagedActiveDirectoryConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for Lustre file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DataCompressionType</code> </p> </li> <li> <p> <code>LustreRootSquashConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for ONTAP file systems, you can update the following properties:</p> <ul> <li> <p> <code>AddRouteTableIds</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>FsxAdminPassword</code> </p> </li> <li> <p> <code>RemoveRouteTableIds</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for OpenZFS file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>CopyTagsToBackups</code> </p> </li> <li> <p> <code>CopyTagsToVolumes</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFileSystem(ctx, operations.UpdateFileSystemRequest{
        UpdateFileSystemRequest: shared.UpdateFileSystemRequest{
            ClientRequestToken: sdk.String("dolorum"),
            FileSystemID: "nostrum",
            LustreConfiguration: &shared.UpdateFileSystemLustreConfiguration{
                AutoImportPolicy: shared.AutoImportPolicyTypeEnumNewChanged.ToPointer(),
                AutomaticBackupRetentionDays: sdk.Int64(676243),
                DailyAutomaticBackupStartTime: sdk.String("corrupti"),
                DataCompressionType: shared.DataCompressionTypeEnumLz4.ToPointer(),
                LogConfiguration: &shared.LustreLogCreateConfiguration{
                    Destination: sdk.String("tempora"),
                    Level: shared.LustreAccessAuditLogLevelEnumErrorOnly,
                },
                RootSquashConfiguration: &shared.LustreRootSquashConfiguration{
                    NoSquashNids: []string{
                        "ut",
                    },
                    RootSquash: sdk.String("fugiat"),
                },
                WeeklyMaintenanceStartTime: sdk.String("voluptatem"),
            },
            OntapConfiguration: &shared.UpdateFileSystemOntapConfiguration{
                AddRouteTableIds: []string{
                    "expedita",
                    "magnam",
                    "consequatur",
                },
                AutomaticBackupRetentionDays: sdk.Int64(460220),
                DailyAutomaticBackupStartTime: sdk.String("ipsam"),
                DiskIopsConfiguration: &shared.DiskIopsConfiguration{
                    Iops: sdk.Int64(24527),
                    Mode: shared.DiskIopsConfigurationModeEnumUserProvisioned.ToPointer(),
                },
                FsxAdminPassword: sdk.String("quas"),
                RemoveRouteTableIds: []string{
                    "corporis",
                    "et",
                    "blanditiis",
                    "ex",
                },
                ThroughputCapacity: sdk.Int64(153627),
                WeeklyMaintenanceStartTime: sdk.String("sit"),
            },
            OpenZFSConfiguration: &shared.UpdateFileSystemOpenZFSConfiguration{
                AutomaticBackupRetentionDays: sdk.Int64(425508),
                CopyTagsToBackups: sdk.Bool(false),
                CopyTagsToVolumes: sdk.Bool(false),
                DailyAutomaticBackupStartTime: sdk.String("nostrum"),
                DiskIopsConfiguration: &shared.DiskIopsConfiguration{
                    Iops: sdk.Int64(906172),
                    Mode: shared.DiskIopsConfigurationModeEnumUserProvisioned.ToPointer(),
                },
                ThroughputCapacity: sdk.Int64(8511),
                WeeklyMaintenanceStartTime: sdk.String("incidunt"),
            },
            StorageCapacity: sdk.Int64(968865),
            WindowsConfiguration: &shared.UpdateFileSystemWindowsConfiguration{
                AuditLogConfiguration: &shared.WindowsAuditLogCreateConfiguration{
                    AuditLogDestination: sdk.String("dolorem"),
                    FileAccessAuditLogLevel: shared.WindowsAccessAuditLogLevelEnumFailureOnly,
                    FileShareAccessAuditLogLevel: shared.WindowsAccessAuditLogLevelEnumDisabled,
                },
                AutomaticBackupRetentionDays: sdk.Int64(99416),
                DailyAutomaticBackupStartTime: sdk.String("occaecati"),
                SelfManagedActiveDirectoryConfiguration: &shared.SelfManagedActiveDirectoryConfigurationUpdates{
                    DNSIps: []string{
                        "quidem",
                        "atque",
                    },
                    Password: sdk.String("laborum"),
                    UserName: sdk.String("Modesta.White"),
                },
                ThroughputCapacity: sdk.Int64(227084),
                WeeklyMaintenanceStartTime: sdk.String("deserunt"),
            },
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        XAmzTarget: operations.UpdateFileSystemXAmzTargetEnumAwsSimbaAPIServiceV20180301UpdateFileSystem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFileSystemResponse != nil {
        // handle response
    }
}
```

## UpdateSnapshot

Updates the name of an Amazon FSx for OpenZFS snapshot.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSnapshot(ctx, operations.UpdateSnapshotRequest{
        UpdateSnapshotRequest: shared.UpdateSnapshotRequest{
            ClientRequestToken: sdk.String("perferendis"),
            Name: "Rickey Kiehn",
            SnapshotID: "praesentium",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.UpdateSnapshotXAmzTargetEnumAwsSimbaAPIServiceV20180301UpdateSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSnapshotResponse != nil {
        // handle response
    }
}
```

## UpdateStorageVirtualMachine

Updates an Amazon FSx for ONTAP storage virtual machine (SVM).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateStorageVirtualMachine(ctx, operations.UpdateStorageVirtualMachineRequest{
        UpdateStorageVirtualMachineRequest: shared.UpdateStorageVirtualMachineRequest{
            ActiveDirectoryConfiguration: &shared.UpdateSvmActiveDirectoryConfiguration{
                SelfManagedActiveDirectoryConfiguration: &shared.SelfManagedActiveDirectoryConfigurationUpdates{
                    DNSIps: []string{
                        "asperiores",
                        "totam",
                    },
                    Password: sdk.String("suscipit"),
                    UserName: sdk.String("Mattie46"),
                },
            },
            ClientRequestToken: sdk.String("amet"),
            StorageVirtualMachineID: "assumenda",
            SvmAdminPassword: sdk.String("ea"),
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.UpdateStorageVirtualMachineXAmzTargetEnumAwsSimbaAPIServiceV20180301UpdateStorageVirtualMachine,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStorageVirtualMachineResponse != nil {
        // handle response
    }
}
```

## UpdateVolume

Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateVolume(ctx, operations.UpdateVolumeRequest{
        UpdateVolumeRequest: shared.UpdateVolumeRequest{
            ClientRequestToken: sdk.String("aspernatur"),
            Name: sdk.String("Elisa Little"),
            OntapConfiguration: &shared.UpdateOntapVolumeConfiguration{
                CopyTagsToBackups: sdk.Bool(false),
                JunctionPath: sdk.String("blanditiis"),
                SecurityStyle: shared.SecurityStyleEnumNtfs.ToPointer(),
                SizeInMegabytes: sdk.Int64(922348),
                SnapshotPolicy: sdk.String("atque"),
                StorageEfficiencyEnabled: sdk.Bool(false),
                TieringPolicy: &shared.TieringPolicy{
                    CoolingPeriod: sdk.Int64(541381),
                    Name: shared.TieringPolicyNameEnumSnapshotOnly.ToPointer(),
                },
            },
            OpenZFSConfiguration: &shared.UpdateOpenZFSVolumeConfiguration{
                DataCompressionType: shared.OpenZFSDataCompressionTypeEnumLz4.ToPointer(),
                NfsExports: []shared.OpenZFSNfsExport{
                    shared.OpenZFSNfsExport{
                        ClientConfigurations: []shared.OpenZFSClientConfiguration{
                            shared.OpenZFSClientConfiguration{
                                Clients: "labore",
                                Options: []string{
                                    "doloremque",
                                    "repudiandae",
                                    "dicta",
                                    "accusantium",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "beatae",
                                Options: []string{
                                    "enim",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "laboriosam",
                                Options: []string{
                                    "a",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "molestias",
                                Options: []string{
                                    "saepe",
                                    "consequuntur",
                                },
                            },
                        },
                    },
                    shared.OpenZFSNfsExport{
                        ClientConfigurations: []shared.OpenZFSClientConfiguration{
                            shared.OpenZFSClientConfiguration{
                                Clients: "officiis",
                                Options: []string{
                                    "in",
                                    "adipisci",
                                    "eveniet",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "occaecati",
                                Options: []string{
                                    "fugit",
                                },
                            },
                            shared.OpenZFSClientConfiguration{
                                Clients: "id",
                                Options: []string{
                                    "reprehenderit",
                                    "error",
                                },
                            },
                        },
                    },
                    shared.OpenZFSNfsExport{
                        ClientConfigurations: []shared.OpenZFSClientConfiguration{
                            shared.OpenZFSClientConfiguration{
                                Clients: "corporis",
                                Options: []string{
                                    "eveniet",
                                    "non",
                                    "vero",
                                },
                            },
                        },
                    },
                },
                ReadOnly: sdk.Bool(false),
                RecordSizeKiB: sdk.Int64(39615),
                StorageCapacityQuotaGiB: sdk.Int64(434156),
                StorageCapacityReservationGiB: sdk.Int64(59944),
                UserAndGroupQuotas: []shared.OpenZFSUserOrGroupQuota{
                    shared.OpenZFSUserOrGroupQuota{
                        ID: 61078,
                        StorageCapacityQuotaGiB: 474668,
                        Type: shared.OpenZFSQuotaTypeEnumGroup,
                    },
                    shared.OpenZFSUserOrGroupQuota{
                        ID: 184362,
                        StorageCapacityQuotaGiB: 739884,
                        Type: shared.OpenZFSQuotaTypeEnumUser,
                    },
                    shared.OpenZFSUserOrGroupQuota{
                        ID: 898063,
                        StorageCapacityQuotaGiB: 187552,
                        Type: shared.OpenZFSQuotaTypeEnumGroup,
                    },
                },
            },
            VolumeID: "distinctio",
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.UpdateVolumeXAmzTargetEnumAwsSimbaAPIServiceV20180301UpdateVolume,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVolumeResponse != nil {
        // handle response
    }
}
```
