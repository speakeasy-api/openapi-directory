# SDK

## Overview

<fullname>Amazon Elastic File System</fullname> <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use with Amazon EC2 Linux and Mac instances in the Amazon Web Services Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files, so that your applications have the storage they need, when they need it. For more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">Amazon Elastic File System API Reference</a> and the <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">Amazon Elastic File System User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/elasticfilesystem/>
### Available Operations

* [createAccessPoint](#createaccesspoint) - <p>Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in the application's own directory and any subdirectories. To learn more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a file system using EFS access points</a>.</p> <note> <p>If multiple requests to create access points on the same file system are sent in quick succession, and the file system is near the limit of 1000 access points, you may experience a throttling response for these requests. This is to ensure that the file system does not exceed the stated access point limit.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p>
* [createFileSystem](#createfilesystem) - <p>Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's Amazon Web Services account with the specified creation token, this operation does the following:</p> <ul> <li> <p>Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state <code>creating</code>.</p> </li> <li> <p>Returns with the description of the created file system.</p> </li> </ul> <p>Otherwise, this operation returns a <code>FileSystemAlreadyExists</code> error with the ID of the existing file system.</p> <note> <p>For basic use cases, you can use a randomly generated UUID for the creation token.</p> </note> <p> The idempotent operation allows you to retry a <code>CreateFileSystem</code> call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the <code>FileSystemAlreadyExists</code> error.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/creating-using-create-fs.html#creating-using-create-fs-part1">Creating a file system</a> in the <i>Amazon EFS User Guide</i>.</p> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>creating</code>. You can check the file system creation status by calling the <a>DescribeFileSystems</a> operation, which among other things returns the file system state.</p> </note> <p>This operation accepts an optional <code>PerformanceMode</code> parameter that you choose for your file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html">Amazon EFS performance modes</a>.</p> <p>You can set the throughput mode for the file system using the <code>ThroughputMode</code> parameter.</p> <p>After the file system is fully created, Amazon EFS sets its lifecycle state to <code>available</code>, at which point you can create one or more mount targets for the file system in your VPC. For more information, see <a>CreateMountTarget</a>. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p> This operation requires permissions for the <code>elasticfilesystem:CreateFileSystem</code> action. </p>
* [createMountTarget](#createmounttarget) - <p>Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target.</p> <p>You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system.</p> <p>You can create only one mount target for an EFS file system using One Zone storage classes. You must create that mount target in the same Availability Zone in which the file system is located. Use the <code>AvailabilityZoneName</code> and <code>AvailabiltyZoneId</code> properties in the <a>DescribeFileSystems</a> response object to get this information. Use the <code>subnetId</code> associated with the file system's Availability Zone when creating the mount target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p>To create a mount target for a file system, the file system's lifecycle state must be <code>available</code>. For more information, see <a>DescribeFileSystems</a>.</p> <p>In the request, provide the following:</p> <ul> <li> <p>The file system ID for which you are creating the mount target.</p> </li> <li> <p>A subnet ID, which determines the following:</p> <ul> <li> <p>The VPC in which Amazon EFS creates the mount target</p> </li> <li> <p>The Availability Zone in which Amazon EFS creates the mount target</p> </li> <li> <p>The IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)</p> </li> </ul> </li> </ul> <p>After creating the mount target, Amazon EFS returns a response that includes, a <code>MountTargetId</code> and an <code>IpAddress</code>. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation">How it Works: Implementation Overview</a>. </p> <p>Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:</p> <ul> <li> <p>Must belong to the same VPC as the subnets of the existing mount targets</p> </li> <li> <p>Must not be in the same Availability Zone as any of the subnets of the existing mount targets</p> </li> </ul> <p>If the request satisfies the requirements, Amazon EFS does the following:</p> <ul> <li> <p>Creates a new mount target in the specified subnet.</p> </li> <li> <p>Also creates a new network interface in the subnet as follows:</p> <ul> <li> <p>If the request provides an <code>IpAddress</code>, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 <code>CreateNetworkInterface</code> call does when a request does not specify a primary private IP address).</p> </li> <li> <p>If the request provides <code>SecurityGroups</code>, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.</p> </li> <li> <p>Assigns the description <code>Mount target <i>fsmt-id</i> for file system <i>fs-id</i> </code> where <code> <i>fsmt-id</i> </code> is the mount target ID, and <code> <i>fs-id</i> </code> is the <code>FileSystemId</code>.</p> </li> <li> <p>Sets the <code>requesterManaged</code> property of the network interface to <code>true</code>, and the <code>requesterId</code> value to <code>EFS</code>.</p> </li> </ul> <p>Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the <code>NetworkInterfaceId</code> field in the mount target's description to the network interface ID, and the <code>IpAddress</code> field to its address. If network interface creation fails, the entire <code>CreateMountTarget</code> operation fails.</p> </li> </ul> <note> <p>The <code>CreateMountTarget</code> call returns only after creating the network interface, but while the mount target state is still <code>creating</code>, you can check the mount target creation status by calling the <a>DescribeMountTargets</a> operation, which among other things returns the mount target state.</p> </note> <p>We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see <a href="http://aws.amazon.com/efs/">Amazon EFS</a>. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target. </p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:CreateMountTarget</code> </p> </li> </ul> <p>This operation also requires permissions for the following Amazon EC2 actions:</p> <ul> <li> <p> <code>ec2:DescribeSubnets</code> </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaces</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterface</code> </p> </li> </ul>
* [createReplicationConfiguration](#createreplicationconfiguration) - <p>Creates a replication configuration that replicates an existing EFS file system to a new, read-only file system. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the <i>Amazon EFS User Guide</i>. The replication configuration specifies the following:</p> <ul> <li> <p> <b>Source file system</b> - An existing EFS file system that you want replicated. The source file system cannot be a destination file system in an existing replication configuration.</p> </li> <li> <p> <b>Destination file system configuration</b> - The configuration of the destination file system to which the source file system will be replicated. There can only be one destination file system in a replication configuration. The destination file system configuration consists of the following properties:</p> <ul> <li> <p> <b>Amazon Web Services Region</b> - The Amazon Web Services Region in which the destination file system is created. Amazon EFS replication is available in all Amazon Web Services Regions that Amazon EFS is available in, except Africa (Cape Town), Asia Pacific (Hong Kong), Asia Pacific (Jakarta), Europe (Milan), and Middle East (Bahrain).</p> </li> <li> <p> <b>Availability Zone</b> - If you want the destination file system to use EFS One Zone availability and durability, you must specify the Availability Zone to create the file system in. For more information about EFS storage classes, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html"> Amazon EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.</p> </li> <li> <p> <b>Encryption</b> - All destination file systems are created with encryption at rest enabled. You can specify the Key Management Service (KMS) key that is used to encrypt the destination file system. If you don't specify a KMS key, your service-managed KMS key for Amazon EFS is used. </p> <note> <p>After the file system is created, you cannot change the KMS key.</p> </note> </li> </ul> </li> </ul> <p>The following properties are set by default:</p> <ul> <li> <p> <b>Performance mode</b> - The destination file system's performance mode matches that of the source file system, unless the destination file system uses EFS One Zone storage. In that case, the General Purpose performance mode is used. The performance mode cannot be changed.</p> </li> <li> <p> <b>Throughput mode</b> - The destination file system's throughput mode matches that of the source file system. After the file system is created, you can modify the throughput mode.</p> </li> </ul> <p>The following properties are turned off by default:</p> <ul> <li> <p> <b>Lifecycle management</b> - EFS lifecycle management and EFS Intelligent-Tiering are not enabled on the destination file system. After the destination file system is created, you can enable EFS lifecycle management and EFS Intelligent-Tiering.</p> </li> <li> <p> <b>Automatic backups</b> - Automatic daily backups not enabled on the destination file system. After the file system is created, you can change this setting.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the <i>Amazon EFS User Guide</i>.</p>
* [~~createTags~~](#createtags) - <note> <p>DEPRECATED - <code>CreateTags</code> is deprecated and not maintained. To create tags for EFS resources, use the API action.</p> </note> <p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the <code>Name</code> tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p> <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code> action.</p> :warning: **Deprecated**
* [deleteAccessPoint](#deleteaccesspoint) - <p>Deletes the specified access point. After deletion is complete, new clients can no longer connect to the access points. Clients connected to the access point at the time of deletion will continue to function until they terminate their connection.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteAccessPoint</code> action.</p>
* [deleteFileSystem](#deletefilesystem) - <p>Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.</p> <p>You need to manually delete mount targets attached to a file system before you can delete an EFS file system. This step is performed for you when you use the Amazon Web Services console to delete a file system.</p> <note> <p>You cannot delete a file system that is part of an EFS Replication configuration. You need to delete the replication configuration first.</p> </note> <p> You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see <a>DescribeMountTargets</a> and <a>DeleteMountTarget</a>. </p> <note> <p>The <code>DeleteFileSystem</code> call returns while the file system state is still <code>deleting</code>. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the <a>DescribeFileSystems</a> returns a <code>404 FileSystemNotFound</code> error.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystem</code> action.</p>
* [deleteFileSystemPolicy](#deletefilesystempolicy) - <p>Deletes the <code>FileSystemPolicy</code> for the specified file system. The default <code>FileSystemPolicy</code> goes into effect once the existing policy is deleted. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/res-based-policies-efs.html">Using Resource-based Policies with EFS</a>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystemPolicy</code> action.</p>
* [deleteMountTarget](#deletemounttarget) - <p>Deletes the specified mount target.</p> <p>This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target.</p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:DeleteMountTarget</code> </p> </li> </ul> <note> <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target descriptions for the given file system. </p> </note> <p>The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:</p> <ul> <li> <p> <code>ec2:DeleteNetworkInterface</code> </p> </li> </ul>
* [deleteReplicationConfiguration](#deletereplicationconfiguration) - Deletes an existing replication configuration. To delete a replication configuration, you must make the request from the Amazon Web Services Region in which the destination file system is located. Deleting a replication configuration ends the replication process. After a replication configuration is deleted, the destination file system is no longer read-only. You can write to the destination file system after its status becomes <code>Writeable</code>.
* [~~deleteTags~~](#deletetags) - <note> <p>DEPRECATED - <code>DeleteTags</code> is deprecated and not maintained. To remove tags from EFS resources, use the API action.</p> </note> <p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Tag restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code> action.</p> :warning: **Deprecated**
* [describeAccessPoints](#describeaccesspoints) - <p>Returns the description of a specific Amazon EFS access point if the <code>AccessPointId</code> is provided. If you provide an EFS <code>FileSystemId</code>, it returns descriptions of all access points for that file system. You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in the request, but not both. </p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
* [describeAccountPreferences](#describeaccountpreferences) - Returns the account preferences settings for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region. For more information, see <a href="efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.
* [describeBackupPolicy](#describebackuppolicy) - Returns the backup policy for the specified EFS file system.
* [describeFileSystemPolicy](#describefilesystempolicy) - <p>Returns the <code>FileSystemPolicy</code> for the specified EFS file system.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystemPolicy</code> action.</p>
* [describeFileSystems](#describefilesystems) - <p>Returns the description of a specific Amazon EFS file system if either the file system <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it returns descriptions of all file systems owned by the caller's Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxItems</code> parameter to limit the number of descriptions in a response. This number is automatically set to 100. If more file system descriptions remain, Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case, you should send a subsequent request with the <code>Marker</code> request parameter set to the value of <code>NextMarker</code>. </p> <p>To retrieve a list of your file system descriptions, this operation is used in an iterative process, where <code>DescribeFileSystems</code> is called first without the <code>Marker</code> and then the operation continues to call it with the <code>Marker</code> parameter set to the value of the <code>NextMarker</code> from the previous response until the response has no <code>NextMarker</code>. </p> <p> The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multi-call iteration is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystems</code> action. </p>
* [describeLifecycleConfiguration](#describelifecycleconfiguration) - <p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the response.</p> <p>When EFS Intelligent-Tiering is enabled, <code>TransitionToPrimaryStorageClass</code> has a value of <code>AFTER_1_ACCESS</code>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>
* [describeMountTargetSecurityGroups](#describemounttargetsecuritygroups) - <p>Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>.</p> <p>This operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>
* [describeMountTargets](#describemounttargets) - <p>Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID that you specify in <code>FileSystemId</code>, or on the file system of the mount target that you specify in <code>MountTargetId</code>.</p>
* [describeReplicationConfigurations](#describereplicationconfigurations) - Retrieves the replication configuration for a specific file system. If a file system is not specified, all of the replication configurations for the Amazon Web Services account in an Amazon Web Services Region are retrieved.
* [~~describeTags~~](#describetags) - <note> <p>DEPRECATED - The <code>DescribeTags</code> action is deprecated and not maintained. To view tags associated with EFS resources, use the <code>ListTagsForResource</code> API action.</p> </note> <p>Returns the tags associated with a file system. The order of tags returned in the response of one <code>DescribeTags</code> call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeTags</code> action. </p> :warning: **Deprecated**
* [listTagsForResource](#listtagsforresource) - <p>Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
* [modifyMountTargetSecurityGroups](#modifymounttargetsecuritygroups) - <p>Modifies the set of security groups in effect for a mount target.</p> <p>When you create a mount target, Amazon EFS also creates a new network interface. For more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the network interface associated with a mount target, with the <code>SecurityGroups</code> provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>. </p> <p>The operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>
* [putAccountPreferences](#putaccountpreferences) - <p>Use this operation to set the account preference in the current Amazon Web Services Region to use long 17 character (63 bit) or short 8 character (32 bit) resource IDs for new EFS file system and mount target resources. All existing resource IDs are not affected by any changes you make. You can set the ID preference during the opt-in period as EFS transitions to long resource IDs. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.</p> <note> <p>Starting in October, 2021, you will receive an error if you try to set the account preference to use the short 8 character format resource ID. Contact Amazon Web Services support if you receive an error and must use short IDs for file system and mount target resources.</p> </note>
* [putBackupPolicy](#putbackuppolicy) - Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system. 
* [putFileSystemPolicy](#putfilesystempolicy) - <p>Applies an Amazon EFS <code>FileSystemPolicy</code> to an Amazon EFS file system. A file system policy is an IAM resource-based policy and can contain multiple policy statements. A file system always has exactly one file system policy, which can be the default policy or an explicit policy set or updated using this API operation. EFS file system policies have a 20,000 character limit. When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">Default EFS File System Policy</a>. </p> <note> <p>EFS file system policies have a 20,000 character limit.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>
* [putLifecycleConfiguration](#putlifecycleconfiguration) - <p>Use this action to manage EFS lifecycle management and EFS Intelligent-Tiering. A <code>LifecycleConfiguration</code> consists of one or more <code>LifecyclePolicy</code> objects that define the following:</p> <ul> <li> <p> <b>EFS Lifecycle management</b> - When Amazon EFS automatically transitions files in a file system into the lower-cost EFS Infrequent Access (IA) storage class.</p> <p>To enable EFS Lifecycle management, set the value of <code>TransitionToIA</code> to one of the available options.</p> </li> <li> <p> <b>EFS Intelligent-Tiering</b> - When Amazon EFS automatically transitions files from IA back into the file system's primary storage class (EFS Standard or EFS One Zone Standard).</p> <p>To enable EFS Intelligent-Tiering, set the value of <code>TransitionToPrimaryStorageClass</code> to <code>AFTER_1_ACCESS</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Lifecycle Management</a>.</p> <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a <code>LifecycleConfiguration</code> object already exists for the specified file system, a <code>PutLifecycleConfiguration</code> call modifies the existing configuration. A <code>PutLifecycleConfiguration</code> call with an empty <code>LifecyclePolicies</code> array in the request body deletes any existing <code>LifecycleConfiguration</code> and turns off lifecycle management and EFS Intelligent-Tiering for the file system.</p> <p>In the request, specify the following: </p> <ul> <li> <p>The ID for the file system for which you are enabling, disabling, or modifying lifecycle management and EFS Intelligent-Tiering.</p> </li> <li> <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that define when files are moved into IA storage, and when they are moved back to Standard storage.</p> <note> <p>Amazon EFS requires that each <code>LifecyclePolicy</code> object have only have a single transition, so the <code>LifecyclePolicies</code> array needs to be structured with separate <code>LifecyclePolicy</code> objects. See the example requests in the following section for more information.</p> </note> </li> </ul> <p>This operation requires permissions for the <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p> <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you need the same Key Management Service permissions as when you created the encrypted file system.</p>
* [tagResource](#tagresource) - <p>Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:TagResource</code> action.</p>
* [untagResource](#untagresource) - <p>Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:UntagResource</code> action.</p>
* [updateFileSystem](#updatefilesystem) - Updates the throughput mode or the amount of provisioned throughput of an existing file system.

## createAccessPoint

<p>Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in the application's own directory and any subdirectories. To learn more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a file system using EFS access points</a>.</p> <note> <p>If multiple requests to create access points on the same file system are sent in quick succession, and the file system is near the limit of 1000 access points, you may experience a throttling response for these requests. This is to ensure that the file system does not exceed the stated access point limit.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessPointRequest;
import org.openapis.openapi.models.operations.CreateAccessPointRequestBody;
import org.openapis.openapi.models.operations.CreateAccessPointRequestBodyPosixUser;
import org.openapis.openapi.models.operations.CreateAccessPointRequestBodyRootDirectory;
import org.openapis.openapi.models.operations.CreateAccessPointResponse;
import org.openapis.openapi.models.shared.CreationInfo;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessPointRequest req = new CreateAccessPointRequest(                new CreateAccessPointRequestBody("veritatis", "deserunt") {{
                                posixUser = new CreateAccessPointRequestBodyPosixUser() {{
                                    gid = 20218L;
                                    secondaryGids = new Long[]{{
                                        add(832620L),
                                        add(957156L),
                                    }};
                                    uid = 778157L;
                                }};;
                                rootDirectory = new CreateAccessPointRequestBodyRootDirectory() {{
                                    creationInfo = new CreationInfo(140350L, 870013L, "at");;
                                    path = "maiores";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("esse", "totam") {{
                                        key = "quod";
                                        value = "quod";
                                    }}),
                                    add(new Tag("dicta", "nam") {{
                                        key = "porro";
                                        value = "dolorum";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "fugit";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "hic";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "totam";
            }};            

            CreateAccessPointResponse res = sdk.sdk.createAccessPoint(req);

            if (res.accessPointDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFileSystem

<p>Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's Amazon Web Services account with the specified creation token, this operation does the following:</p> <ul> <li> <p>Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state <code>creating</code>.</p> </li> <li> <p>Returns with the description of the created file system.</p> </li> </ul> <p>Otherwise, this operation returns a <code>FileSystemAlreadyExists</code> error with the ID of the existing file system.</p> <note> <p>For basic use cases, you can use a randomly generated UUID for the creation token.</p> </note> <p> The idempotent operation allows you to retry a <code>CreateFileSystem</code> call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the <code>FileSystemAlreadyExists</code> error.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/creating-using-create-fs.html#creating-using-create-fs-part1">Creating a file system</a> in the <i>Amazon EFS User Guide</i>.</p> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>creating</code>. You can check the file system creation status by calling the <a>DescribeFileSystems</a> operation, which among other things returns the file system state.</p> </note> <p>This operation accepts an optional <code>PerformanceMode</code> parameter that you choose for your file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html">Amazon EFS performance modes</a>.</p> <p>You can set the throughput mode for the file system using the <code>ThroughputMode</code> parameter.</p> <p>After the file system is fully created, Amazon EFS sets its lifecycle state to <code>available</code>, at which point you can create one or more mount targets for the file system in your VPC. For more information, see <a>CreateMountTarget</a>. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p> This operation requires permissions for the <code>elasticfilesystem:CreateFileSystem</code> action. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFileSystemRequest;
import org.openapis.openapi.models.operations.CreateFileSystemRequestBody;
import org.openapis.openapi.models.operations.CreateFileSystemRequestBodyPerformanceModeEnum;
import org.openapis.openapi.models.operations.CreateFileSystemRequestBodyThroughputModeEnum;
import org.openapis.openapi.models.operations.CreateFileSystemResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFileSystemRequest req = new CreateFileSystemRequest(                new CreateFileSystemRequestBody("commodi") {{
                                availabilityZoneName = "molestiae";
                                backup = false;
                                encrypted = false;
                                kmsKeyId = "modi";
                                performanceMode = CreateFileSystemRequestBodyPerformanceModeEnum.GENERAL_PURPOSE;
                                provisionedThroughputInMibps = 7742.34;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("excepturi", "aspernatur") {{
                                        key = "esse";
                                        value = "ipsum";
                                    }}),
                                    add(new Tag("natus", "sed") {{
                                        key = "perferendis";
                                        value = "ad";
                                    }}),
                                    add(new Tag("natus", "laboriosam") {{
                                        key = "iste";
                                        value = "dolor";
                                    }}),
                                }};
                                throughputMode = CreateFileSystemRequestBodyThroughputModeEnum.ELASTIC;
                            }};) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateFileSystemResponse res = sdk.sdk.createFileSystem(req);

            if (res.fileSystemDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMountTarget

<p>Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target.</p> <p>You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system.</p> <p>You can create only one mount target for an EFS file system using One Zone storage classes. You must create that mount target in the same Availability Zone in which the file system is located. Use the <code>AvailabilityZoneName</code> and <code>AvailabiltyZoneId</code> properties in the <a>DescribeFileSystems</a> response object to get this information. Use the <code>subnetId</code> associated with the file system's Availability Zone when creating the mount target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p>To create a mount target for a file system, the file system's lifecycle state must be <code>available</code>. For more information, see <a>DescribeFileSystems</a>.</p> <p>In the request, provide the following:</p> <ul> <li> <p>The file system ID for which you are creating the mount target.</p> </li> <li> <p>A subnet ID, which determines the following:</p> <ul> <li> <p>The VPC in which Amazon EFS creates the mount target</p> </li> <li> <p>The Availability Zone in which Amazon EFS creates the mount target</p> </li> <li> <p>The IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)</p> </li> </ul> </li> </ul> <p>After creating the mount target, Amazon EFS returns a response that includes, a <code>MountTargetId</code> and an <code>IpAddress</code>. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation">How it Works: Implementation Overview</a>. </p> <p>Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:</p> <ul> <li> <p>Must belong to the same VPC as the subnets of the existing mount targets</p> </li> <li> <p>Must not be in the same Availability Zone as any of the subnets of the existing mount targets</p> </li> </ul> <p>If the request satisfies the requirements, Amazon EFS does the following:</p> <ul> <li> <p>Creates a new mount target in the specified subnet.</p> </li> <li> <p>Also creates a new network interface in the subnet as follows:</p> <ul> <li> <p>If the request provides an <code>IpAddress</code>, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 <code>CreateNetworkInterface</code> call does when a request does not specify a primary private IP address).</p> </li> <li> <p>If the request provides <code>SecurityGroups</code>, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.</p> </li> <li> <p>Assigns the description <code>Mount target <i>fsmt-id</i> for file system <i>fs-id</i> </code> where <code> <i>fsmt-id</i> </code> is the mount target ID, and <code> <i>fs-id</i> </code> is the <code>FileSystemId</code>.</p> </li> <li> <p>Sets the <code>requesterManaged</code> property of the network interface to <code>true</code>, and the <code>requesterId</code> value to <code>EFS</code>.</p> </li> </ul> <p>Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the <code>NetworkInterfaceId</code> field in the mount target's description to the network interface ID, and the <code>IpAddress</code> field to its address. If network interface creation fails, the entire <code>CreateMountTarget</code> operation fails.</p> </li> </ul> <note> <p>The <code>CreateMountTarget</code> call returns only after creating the network interface, but while the mount target state is still <code>creating</code>, you can check the mount target creation status by calling the <a>DescribeMountTargets</a> operation, which among other things returns the mount target state.</p> </note> <p>We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see <a href="http://aws.amazon.com/efs/">Amazon EFS</a>. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target. </p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:CreateMountTarget</code> </p> </li> </ul> <p>This operation also requires permissions for the following Amazon EC2 actions:</p> <ul> <li> <p> <code>ec2:DescribeSubnets</code> </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaces</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterface</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMountTargetRequest;
import org.openapis.openapi.models.operations.CreateMountTargetRequestBody;
import org.openapis.openapi.models.operations.CreateMountTargetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMountTargetRequest req = new CreateMountTargetRequest(                new CreateMountTargetRequestBody("architecto", "ipsa") {{
                                ipAddress = "reiciendis";
                                securityGroups = new String[]{{
                                    add("mollitia"),
                                    add("laborum"),
                                    add("dolores"),
                                }};
                            }};) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
            }};            

            CreateMountTargetResponse res = sdk.sdk.createMountTarget(req);

            if (res.mountTargetDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReplicationConfiguration

<p>Creates a replication configuration that replicates an existing EFS file system to a new, read-only file system. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the <i>Amazon EFS User Guide</i>. The replication configuration specifies the following:</p> <ul> <li> <p> <b>Source file system</b> - An existing EFS file system that you want replicated. The source file system cannot be a destination file system in an existing replication configuration.</p> </li> <li> <p> <b>Destination file system configuration</b> - The configuration of the destination file system to which the source file system will be replicated. There can only be one destination file system in a replication configuration. The destination file system configuration consists of the following properties:</p> <ul> <li> <p> <b>Amazon Web Services Region</b> - The Amazon Web Services Region in which the destination file system is created. Amazon EFS replication is available in all Amazon Web Services Regions that Amazon EFS is available in, except Africa (Cape Town), Asia Pacific (Hong Kong), Asia Pacific (Jakarta), Europe (Milan), and Middle East (Bahrain).</p> </li> <li> <p> <b>Availability Zone</b> - If you want the destination file system to use EFS One Zone availability and durability, you must specify the Availability Zone to create the file system in. For more information about EFS storage classes, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html"> Amazon EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.</p> </li> <li> <p> <b>Encryption</b> - All destination file systems are created with encryption at rest enabled. You can specify the Key Management Service (KMS) key that is used to encrypt the destination file system. If you don't specify a KMS key, your service-managed KMS key for Amazon EFS is used. </p> <note> <p>After the file system is created, you cannot change the KMS key.</p> </note> </li> </ul> </li> </ul> <p>The following properties are set by default:</p> <ul> <li> <p> <b>Performance mode</b> - The destination file system's performance mode matches that of the source file system, unless the destination file system uses EFS One Zone storage. In that case, the General Purpose performance mode is used. The performance mode cannot be changed.</p> </li> <li> <p> <b>Throughput mode</b> - The destination file system's throughput mode matches that of the source file system. After the file system is created, you can modify the throughput mode.</p> </li> </ul> <p>The following properties are turned off by default:</p> <ul> <li> <p> <b>Lifecycle management</b> - EFS lifecycle management and EFS Intelligent-Tiering are not enabled on the destination file system. After the destination file system is created, you can enable EFS lifecycle management and EFS Intelligent-Tiering.</p> </li> <li> <p> <b>Automatic backups</b> - Automatic daily backups not enabled on the destination file system. After the file system is created, you can change this setting.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the <i>Amazon EFS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReplicationConfigurationRequest;
import org.openapis.openapi.models.operations.CreateReplicationConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateReplicationConfigurationResponse;
import org.openapis.openapi.models.shared.DestinationToCreate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReplicationConfigurationRequest req = new CreateReplicationConfigurationRequest(                new CreateReplicationConfigurationRequestBody(                new org.openapis.openapi.models.shared.DestinationToCreate[]{{
                                                add(new DestinationToCreate() {{
                                                    availabilityZoneName = "accusantium";
                                                    kmsKeyId = "iure";
                                                    region = "culpa";
                                                }}),
                                                add(new DestinationToCreate() {{
                                                    availabilityZoneName = "doloribus";
                                                    kmsKeyId = "sapiente";
                                                    region = "architecto";
                                                }}),
                                                add(new DestinationToCreate() {{
                                                    availabilityZoneName = "mollitia";
                                                    kmsKeyId = "dolorem";
                                                    region = "culpa";
                                                }}),
                                            }});, "consequuntur") {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateReplicationConfigurationResponse res = sdk.sdk.createReplicationConfiguration(req);

            if (res.replicationConfigurationDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createTags~~

<note> <p>DEPRECATED - <code>CreateTags</code> is deprecated and not maintained. To create tags for EFS resources, use the API action.</p> </note> <p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the <code>Name</code> tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p> <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code> action.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTagsRequest;
import org.openapis.openapi.models.operations.CreateTagsRequestBody;
import org.openapis.openapi.models.operations.CreateTagsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTagsRequest req = new CreateTagsRequest("error",                 new CreateTagsRequestBody(                new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("laborum", "animi") {{
                                                    key = "quis";
                                                    value = "vitae";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
            }};            

            CreateTagsResponse res = sdk.sdk.createTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccessPoint

<p>Deletes the specified access point. After deletion is complete, new clients can no longer connect to the access points. Clients connected to the access point at the time of deletion will continue to function until they terminate their connection.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteAccessPoint</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccessPointRequest;
import org.openapis.openapi.models.operations.DeleteAccessPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccessPointRequest req = new DeleteAccessPointRequest("aut") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeleteAccessPointResponse res = sdk.sdk.deleteAccessPoint(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFileSystem

<p>Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.</p> <p>You need to manually delete mount targets attached to a file system before you can delete an EFS file system. This step is performed for you when you use the Amazon Web Services console to delete a file system.</p> <note> <p>You cannot delete a file system that is part of an EFS Replication configuration. You need to delete the replication configuration first.</p> </note> <p> You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see <a>DescribeMountTargets</a> and <a>DeleteMountTarget</a>. </p> <note> <p>The <code>DeleteFileSystem</code> call returns while the file system state is still <code>deleting</code>. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the <a>DescribeFileSystems</a> returns a <code>404 FileSystemNotFound</code> error.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystem</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFileSystemRequest;
import org.openapis.openapi.models.operations.DeleteFileSystemResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFileSystemRequest req = new DeleteFileSystemRequest("nihil") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "omnis";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteFileSystemResponse res = sdk.sdk.deleteFileSystem(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFileSystemPolicy

<p>Deletes the <code>FileSystemPolicy</code> for the specified file system. The default <code>FileSystemPolicy</code> goes into effect once the existing policy is deleted. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/res-based-policies-efs.html">Using Resource-based Policies with EFS</a>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystemPolicy</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFileSystemPolicyRequest;
import org.openapis.openapi.models.operations.DeleteFileSystemPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFileSystemPolicyRequest req = new DeleteFileSystemPolicyRequest("reprehenderit") {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "dicta";
                xAmzDate = "corporis";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "dicta";
            }};            

            DeleteFileSystemPolicyResponse res = sdk.sdk.deleteFileSystemPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMountTarget

<p>Deletes the specified mount target.</p> <p>This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target.</p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:DeleteMountTarget</code> </p> </li> </ul> <note> <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target descriptions for the given file system. </p> </note> <p>The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:</p> <ul> <li> <p> <code>ec2:DeleteNetworkInterface</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMountTargetRequest;
import org.openapis.openapi.models.operations.DeleteMountTargetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMountTargetRequest req = new DeleteMountTargetRequest("enim") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            DeleteMountTargetResponse res = sdk.sdk.deleteMountTarget(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReplicationConfiguration

Deletes an existing replication configuration. To delete a replication configuration, you must make the request from the Amazon Web Services Region in which the destination file system is located. Deleting a replication configuration ends the replication process. After a replication configuration is deleted, the destination file system is no longer read-only. You can write to the destination file system after its status becomes <code>Writeable</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReplicationConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteReplicationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReplicationConfigurationRequest req = new DeleteReplicationConfigurationRequest("pariatur") {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
            }};            

            DeleteReplicationConfigurationResponse res = sdk.sdk.deleteReplicationConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deleteTags~~

<note> <p>DEPRECATED - <code>DeleteTags</code> is deprecated and not maintained. To remove tags from EFS resources, use the API action.</p> </note> <p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Tag restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code> action.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTagsRequest;
import org.openapis.openapi.models.operations.DeleteTagsRequestBody;
import org.openapis.openapi.models.operations.DeleteTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTagsRequest req = new DeleteTagsRequest("itaque",                 new DeleteTagsRequestBody(                new String[]{{
                                                add("enim"),
                                                add("consequatur"),
                                            }});) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "explicabo";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "labore";
            }};            

            DeleteTagsResponse res = sdk.sdk.deleteTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccessPoints

<p>Returns the description of a specific Amazon EFS access point if the <code>AccessPointId</code> is provided. If you provide an EFS <code>FileSystemId</code>, it returns descriptions of all access points for that file system. You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in the request, but not both. </p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccessPointsRequest;
import org.openapis.openapi.models.operations.DescribeAccessPointsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccessPointsRequest req = new DescribeAccessPointsRequest() {{
                accessPointId = "qui";
                fileSystemId = "aliquid";
                maxResults = 586513L;
                nextToken = "quos";
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "magni";
                xAmzCredential = "assumenda";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "alias";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "dolorum";
            }};            

            DescribeAccessPointsResponse res = sdk.sdk.describeAccessPoints(req);

            if (res.describeAccessPointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccountPreferences

Returns the account preferences settings for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region. For more information, see <a href="efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccountPreferencesRequest;
import org.openapis.openapi.models.operations.DescribeAccountPreferencesRequestBody;
import org.openapis.openapi.models.operations.DescribeAccountPreferencesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccountPreferencesRequest req = new DescribeAccountPreferencesRequest(                new DescribeAccountPreferencesRequestBody() {{
                                maxResults = 270008L;
                                nextToken = "facilis";
                            }};) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "delectus";
                xAmzDate = "eum";
                xAmzSecurityToken = "non";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sint";
            }};            

            DescribeAccountPreferencesResponse res = sdk.sdk.describeAccountPreferences(req);

            if (res.describeAccountPreferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBackupPolicy

Returns the backup policy for the specified EFS file system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBackupPolicyRequest;
import org.openapis.openapi.models.operations.DescribeBackupPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBackupPolicyRequest req = new DescribeBackupPolicyRequest("provident") {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            DescribeBackupPolicyResponse res = sdk.sdk.describeBackupPolicy(req);

            if (res.backupPolicyDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFileSystemPolicy

<p>Returns the <code>FileSystemPolicy</code> for the specified EFS file system.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystemPolicy</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFileSystemPolicyRequest;
import org.openapis.openapi.models.operations.DescribeFileSystemPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFileSystemPolicyRequest req = new DescribeFileSystemPolicyRequest("in") {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
            }};            

            DescribeFileSystemPolicyResponse res = sdk.sdk.describeFileSystemPolicy(req);

            if (res.fileSystemPolicyDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFileSystems

<p>Returns the description of a specific Amazon EFS file system if either the file system <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it returns descriptions of all file systems owned by the caller's Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxItems</code> parameter to limit the number of descriptions in a response. This number is automatically set to 100. If more file system descriptions remain, Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case, you should send a subsequent request with the <code>Marker</code> request parameter set to the value of <code>NextMarker</code>. </p> <p>To retrieve a list of your file system descriptions, this operation is used in an iterative process, where <code>DescribeFileSystems</code> is called first without the <code>Marker</code> and then the operation continues to call it with the <code>Marker</code> parameter set to the value of the <code>NextMarker</code> from the previous response until the response has no <code>NextMarker</code>. </p> <p> The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multi-call iteration is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystems</code> action. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFileSystemsRequest;
import org.openapis.openapi.models.operations.DescribeFileSystemsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFileSystemsRequest req = new DescribeFileSystemsRequest() {{
                creationToken = "aliquid";
                fileSystemId = "laborum";
                marker = "accusamus";
                maxItems = 249796L;
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "delectus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nam";
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

## describeLifecycleConfiguration

<p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the response.</p> <p>When EFS Intelligent-Tiering is enabled, <code>TransitionToPrimaryStorageClass</code> has a value of <code>AFTER_1_ACCESS</code>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLifecycleConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeLifecycleConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLifecycleConfigurationRequest req = new DescribeLifecycleConfigurationRequest("blanditiis") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "natus";
            }};            

            DescribeLifecycleConfigurationResponse res = sdk.sdk.describeLifecycleConfiguration(req);

            if (res.lifecycleConfigurationDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMountTargetSecurityGroups

<p>Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>.</p> <p>This operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMountTargetSecurityGroupsRequest;
import org.openapis.openapi.models.operations.DescribeMountTargetSecurityGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMountTargetSecurityGroupsRequest req = new DescribeMountTargetSecurityGroupsRequest("molestiae") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "magnam";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "id";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "labore";
            }};            

            DescribeMountTargetSecurityGroupsResponse res = sdk.sdk.describeMountTargetSecurityGroups(req);

            if (res.describeMountTargetSecurityGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMountTargets

<p>Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID that you specify in <code>FileSystemId</code>, or on the file system of the mount target that you specify in <code>MountTargetId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMountTargetsRequest;
import org.openapis.openapi.models.operations.DescribeMountTargetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMountTargetsRequest req = new DescribeMountTargetsRequest() {{
                accessPointId = "natus";
                fileSystemId = "nobis";
                marker = "eum";
                maxItems = 878453L;
                mountTargetId = "aspernatur";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "et";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quos";
            }};            

            DescribeMountTargetsResponse res = sdk.sdk.describeMountTargets(req);

            if (res.describeMountTargetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReplicationConfigurations

Retrieves the replication configuration for a specific file system. If a file system is not specified, all of the replication configurations for the Amazon Web Services account in an Amazon Web Services Region are retrieved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReplicationConfigurationsRequest;
import org.openapis.openapi.models.operations.DescribeReplicationConfigurationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReplicationConfigurationsRequest req = new DescribeReplicationConfigurationsRequest() {{
                fileSystemId = "accusantium";
                maxResults = 653201L;
                nextToken = "reiciendis";
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ad";
                xAmzCredential = "eum";
                xAmzDate = "dolor";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "nemo";
            }};            

            DescribeReplicationConfigurationsResponse res = sdk.sdk.describeReplicationConfigurations(req);

            if (res.describeReplicationConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeTags~~

<note> <p>DEPRECATED - The <code>DescribeTags</code> action is deprecated and not maintained. To view tags associated with EFS resources, use the <code>ListTagsForResource</code> API action.</p> </note> <p>Returns the tags associated with a file system. The order of tags returned in the response of one <code>DescribeTags</code> call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeTags</code> action. </p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTagsRequest;
import org.openapis.openapi.models.operations.DescribeTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTagsRequest req = new DescribeTagsRequest("iure") {{
                marker = "doloribus";
                maxItems = 891924L;
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "deleniti";
                xAmzDate = "facilis";
                xAmzSecurityToken = "in";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeTagsResponse res = sdk.sdk.describeTags(req);

            if (res.describeTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("ullam") {{
                maxResults = 714242L;
                nextToken = "nihil";
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
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

## modifyMountTargetSecurityGroups

<p>Modifies the set of security groups in effect for a mount target.</p> <p>When you create a mount target, Amazon EFS also creates a new network interface. For more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the network interface associated with a mount target, with the <code>SecurityGroups</code> provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>. </p> <p>The operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyMountTargetSecurityGroupsRequest;
import org.openapis.openapi.models.operations.ModifyMountTargetSecurityGroupsRequestBody;
import org.openapis.openapi.models.operations.ModifyMountTargetSecurityGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyMountTargetSecurityGroupsRequest req = new ModifyMountTargetSecurityGroupsRequest("natus",                 new ModifyMountTargetSecurityGroupsRequestBody() {{
                                securityGroups = new String[]{{
                                    add("sunt"),
                                }};
                            }};) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "pariatur";
                xAmzDate = "maxime";
                xAmzSecurityToken = "ea";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "odit";
            }};            

            ModifyMountTargetSecurityGroupsResponse res = sdk.sdk.modifyMountTargetSecurityGroups(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAccountPreferences

<p>Use this operation to set the account preference in the current Amazon Web Services Region to use long 17 character (63 bit) or short 8 character (32 bit) resource IDs for new EFS file system and mount target resources. All existing resource IDs are not affected by any changes you make. You can set the ID preference during the opt-in period as EFS transitions to long resource IDs. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.</p> <note> <p>Starting in October, 2021, you will receive an error if you try to set the account preference to use the short 8 character format resource ID. Contact Amazon Web Services support if you receive an error and must use short IDs for file system and mount target resources.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccountPreferencesRequest;
import org.openapis.openapi.models.operations.PutAccountPreferencesRequestBody;
import org.openapis.openapi.models.operations.PutAccountPreferencesRequestBodyResourceIdTypeEnum;
import org.openapis.openapi.models.operations.PutAccountPreferencesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountPreferencesRequest req = new PutAccountPreferencesRequest(                new PutAccountPreferencesRequestBody(PutAccountPreferencesRequestBodyResourceIdTypeEnum.LONG_ID);) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            PutAccountPreferencesResponse res = sdk.sdk.putAccountPreferences(req);

            if (res.putAccountPreferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putBackupPolicy

Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutBackupPolicyRequest;
import org.openapis.openapi.models.operations.PutBackupPolicyRequestBody;
import org.openapis.openapi.models.operations.PutBackupPolicyRequestBodyBackupPolicy;
import org.openapis.openapi.models.operations.PutBackupPolicyResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutBackupPolicyRequest req = new PutBackupPolicyRequest("pariatur",                 new PutBackupPolicyRequestBody(                new PutBackupPolicyRequestBodyBackupPolicy() {{
                                                status = StatusEnum.ENABLING;
                                            }};);) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "fugiat";
                xAmzDate = "amet";
                xAmzSecurityToken = "aut";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "corporis";
            }};            

            PutBackupPolicyResponse res = sdk.sdk.putBackupPolicy(req);

            if (res.backupPolicyDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putFileSystemPolicy

<p>Applies an Amazon EFS <code>FileSystemPolicy</code> to an Amazon EFS file system. A file system policy is an IAM resource-based policy and can contain multiple policy statements. A file system always has exactly one file system policy, which can be the default policy or an explicit policy set or updated using this API operation. EFS file system policies have a 20,000 character limit. When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">Default EFS File System Policy</a>. </p> <note> <p>EFS file system policies have a 20,000 character limit.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFileSystemPolicyRequest;
import org.openapis.openapi.models.operations.PutFileSystemPolicyRequestBody;
import org.openapis.openapi.models.operations.PutFileSystemPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutFileSystemPolicyRequest req = new PutFileSystemPolicyRequest("libero",                 new PutFileSystemPolicyRequestBody("nobis") {{
                                bypassPolicyLockoutSafetyCheck = false;
                            }};) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "quis";
                xAmzCredential = "totam";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "nesciunt";
            }};            

            PutFileSystemPolicyResponse res = sdk.sdk.putFileSystemPolicy(req);

            if (res.fileSystemPolicyDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putLifecycleConfiguration

<p>Use this action to manage EFS lifecycle management and EFS Intelligent-Tiering. A <code>LifecycleConfiguration</code> consists of one or more <code>LifecyclePolicy</code> objects that define the following:</p> <ul> <li> <p> <b>EFS Lifecycle management</b> - When Amazon EFS automatically transitions files in a file system into the lower-cost EFS Infrequent Access (IA) storage class.</p> <p>To enable EFS Lifecycle management, set the value of <code>TransitionToIA</code> to one of the available options.</p> </li> <li> <p> <b>EFS Intelligent-Tiering</b> - When Amazon EFS automatically transitions files from IA back into the file system's primary storage class (EFS Standard or EFS One Zone Standard).</p> <p>To enable EFS Intelligent-Tiering, set the value of <code>TransitionToPrimaryStorageClass</code> to <code>AFTER_1_ACCESS</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Lifecycle Management</a>.</p> <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a <code>LifecycleConfiguration</code> object already exists for the specified file system, a <code>PutLifecycleConfiguration</code> call modifies the existing configuration. A <code>PutLifecycleConfiguration</code> call with an empty <code>LifecyclePolicies</code> array in the request body deletes any existing <code>LifecycleConfiguration</code> and turns off lifecycle management and EFS Intelligent-Tiering for the file system.</p> <p>In the request, specify the following: </p> <ul> <li> <p>The ID for the file system for which you are enabling, disabling, or modifying lifecycle management and EFS Intelligent-Tiering.</p> </li> <li> <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that define when files are moved into IA storage, and when they are moved back to Standard storage.</p> <note> <p>Amazon EFS requires that each <code>LifecyclePolicy</code> object have only have a single transition, so the <code>LifecyclePolicies</code> array needs to be structured with separate <code>LifecyclePolicy</code> objects. See the example requests in the following section for more information.</p> </note> </li> </ul> <p>This operation requires permissions for the <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p> <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you need the same Key Management Service permissions as when you created the encrypted file system.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLifecycleConfigurationRequest;
import org.openapis.openapi.models.operations.PutLifecycleConfigurationRequestBody;
import org.openapis.openapi.models.operations.PutLifecycleConfigurationResponse;
import org.openapis.openapi.models.shared.LifecyclePolicy;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransitionToIARulesEnum;
import org.openapis.openapi.models.shared.TransitionToPrimaryStorageClassRulesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutLifecycleConfigurationRequest req = new PutLifecycleConfigurationRequest("perferendis",                 new PutLifecycleConfigurationRequestBody(                new org.openapis.openapi.models.shared.LifecyclePolicy[]{{
                                                add(new LifecyclePolicy() {{
                                                    transitionToIA = TransitionToIARulesEnum.AFTER90_DAYS;
                                                    transitionToPrimaryStorageClass = TransitionToPrimaryStorageClassRulesEnum.AFTER1_ACCESS;
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "vero";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "omnis";
            }};            

            PutLifecycleConfigurationResponse res = sdk.sdk.putLifecycleConfiguration(req);

            if (res.lifecycleConfigurationDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:TagResource</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("consequuntur", "blanditiis") {{
                                                    key = "voluptatem";
                                                    value = "porro";
                                                }}),
                                                add(new Tag("occaecati", "rerum") {{
                                                    key = "error";
                                                    value = "eaque";
                                                }}),
                                                add(new Tag("earum", "modi") {{
                                                    key = "adipisci";
                                                    value = "asperiores";
                                                }}),
                                            }});, "iste") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

<p>Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:UntagResource</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("quos",                 new String[]{{
                                add("dolorem"),
                                add("dolorem"),
                            }}) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "qui";
                xAmzCredential = "ipsum";
                xAmzDate = "hic";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "voluptate";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFileSystem

Updates the throughput mode or the amount of provisioned throughput of an existing file system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFileSystemRequest;
import org.openapis.openapi.models.operations.UpdateFileSystemRequestBody;
import org.openapis.openapi.models.operations.UpdateFileSystemRequestBodyThroughputModeEnum;
import org.openapis.openapi.models.operations.UpdateFileSystemResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFileSystemRequest req = new UpdateFileSystemRequest("reiciendis",                 new UpdateFileSystemRequestBody() {{
                                provisionedThroughputInMibps = 2274.14;
                                throughputMode = UpdateFileSystemRequestBodyThroughputModeEnum.ELASTIC;
                            }};) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "iure";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "quaerat";
            }};            

            UpdateFileSystemResponse res = sdk.sdk.updateFileSystem(req);

            if (res.fileSystemDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
