# SDK

## Overview

<p>Amazon Lightsail is the easiest way to get started with Amazon Web Services (Amazon Web Services) for developers who need to build websites or web applications. It includes everything you need to launch your project quickly - instances (virtual private servers), container services, storage buckets, managed databases, SSD-based block storage, static IP addresses, load balancers, content delivery network (CDN) distributions, DNS management of registered domains, and resource snapshots (backups) - for a low, predictable monthly price.</p> <p>You can manage your Lightsail resources using the Lightsail console, Lightsail API, Command Line Interface (CLI), or SDKs. For more information about Lightsail concepts and tasks, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Amazon Lightsail Developer Guide</a>.</p> <p>This API Reference provides detailed information about the actions, data types, parameters, and errors of the Lightsail service. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas of the Lightsail service, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail Endpoints and Quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/lightsail/>
### Available Operations

* [allocateStaticIp](#allocatestaticip) - Allocates a static IP address.
* [attachCertificateToDistribution](#attachcertificatetodistribution) - <p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the domains that are associated with the certificate.</p> <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach to your distribution.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>
* [attachDisk](#attachdisk) - <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [attachInstancesToLoadBalancer](#attachinstancestoloadbalancer) - <p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>
* [attachLoadBalancerTlsCertificate](#attachloadbalancertlscertificate) - <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [attachStaticIp](#attachstaticip) - Attaches a static IP address to a specific Amazon Lightsail instance.
* [closeInstancePublicPorts](#closeinstancepublicports) - <p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [copySnapshot](#copysnapshot) - <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one Amazon Web Services Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>
* [createBucket](#createbucket) - <p>Creates an Amazon Lightsail bucket.</p> <p>A bucket is a cloud storage resource available in the Lightsail object storage service. Use buckets to store objects such as data and its descriptive metadata. For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
* [createBucketAccessKey](#createbucketaccesskey) - <p>Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of an access key ID and corresponding secret access key.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html">GetBucketAccessKeys</a> action to get a list of current access keys for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>
* [createCertificate](#createcertificate) - <p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN) distribution and a container service.</p> <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code> action to use the certificate and its domains with your distribution. Or use the <code>UpdateContainerService</code> action to use the certificate and its domains with your container service.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>
* [createCloudFormationStack](#createcloudformationstack) - <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>
* [createContactMethod](#createcontactmethod) - <p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
* [createContainerService](#createcontainerservice) - <p>Creates an Amazon Lightsail container service.</p> <p>A Lightsail container service is a compute resource to which you can deploy containers. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev Guide</i>.</p>
* [createContainerServiceDeployment](#createcontainerservicedeployment) - <p>Creates a deployment for your Amazon Lightsail container service.</p> <p>A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.</p> <p>You can deploy containers to your container service using container images from a public registry such as Amazon ECR Public, or from your local machine. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
* [createContainerServiceRegistryLogin](#createcontainerserviceregistrylogin) - <p>Creates a temporary set of log in credentials that you can use to log in to the Docker process on your local machine. After you're logged in, you can use the native Docker commands to push your local container images to the container image registry of your Amazon Lightsail account so that you can use them with your Lightsail container service. The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials.</p> <note> <p>You can only push container images to the container service registry of your Lightsail account. You cannot pull container images or perform any other container image management actions on the container service registry.</p> </note> <p>After you push your container images to the container image registry of your Lightsail account, use the <code>RegisterContainerImage</code> action to register the pushed images to a specific Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>
* [createDisk](#createdisk) - <p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createDiskFromSnapshot](#creatediskfromsnapshot) - <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createDiskSnapshot](#createdisksnapshot) - <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createDistribution](#createdistribution) - <p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>
* [createDomain](#createdomain) - <p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createDomainEntry](#createdomainentry) - <p>Creates one of the following domain name system (DNS) records in a domain DNS zone: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createGUISessionAccessDetails](#createguisessionaccessdetails) - <p>Creates two URLs that are used to access a virtual computer’s graphical user interface (GUI) session. The primary URL initiates a web-based NICE DCV session to the virtual computer's application. The secondary URL initiates a web-based NICE DCV session to the virtual computer's operating session. </p> <p>Use <code>StartGUISession</code> to open the session.</p>
* [createInstanceSnapshot](#createinstancesnapshot) - <p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createInstances](#createinstances) - <p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>
* [createInstancesFromSnapshot](#createinstancesfromsnapshot) - <p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createKeyPair](#createkeypair) - <p>Creates a custom SSH key pair that you can use with an Amazon Lightsail instance.</p> <note> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> action to create a Lightsail default key pair in an Amazon Web Services Region where a default key pair does not currently exist.</p> </note> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createLoadBalancer](#createloadbalancer) - <p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createLoadBalancerTlsCertificate](#createloadbalancertlscertificate) - <p>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createRelationalDatabase](#createrelationaldatabase) - <p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createRelationalDatabaseFromSnapshot](#createrelationaldatabasefromsnapshot) - <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [createRelationalDatabaseSnapshot](#createrelationaldatabasesnapshot) - <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [deleteAlarm](#deletealarm) - <p>Deletes an alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
* [deleteAutoSnapshot](#deleteautosnapshot) - Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
* [deleteBucket](#deletebucket) - <p>Deletes a Amazon Lightsail bucket.</p> <note> <p>When you delete your bucket, the bucket name is released and can be reused for a new bucket in your account or another Amazon Web Services account.</p> </note>
* [deleteBucketAccessKey](#deletebucketaccesskey) - <p>Deletes an access key for the specified Amazon Lightsail bucket.</p> <p>We recommend that you delete an access key if the secret access key is compromised.</p> <p>For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
* [deleteCertificate](#deletecertificate) - <p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Certificates that are currently attached to a distribution cannot be deleted. Use the <code>DetachCertificateFromDistribution</code> action to detach a certificate from a distribution.</p>
* [deleteContactMethod](#deletecontactmethod) - <p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
* [deleteContainerImage](#deletecontainerimage) - Deletes a container image that is registered to your Amazon Lightsail container service.
* [deleteContainerService](#deletecontainerservice) - Deletes your Amazon Lightsail container service.
* [deleteDisk](#deletedisk) - <p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [deleteDiskSnapshot](#deletedisksnapshot) - <p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [deleteDistribution](#deletedistribution) - Deletes your Amazon Lightsail content delivery network (CDN) distribution.
* [deleteDomain](#deletedomain) - <p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [deleteDomainEntry](#deletedomainentry) - <p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [deleteInstance](#deleteinstance) - <p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [deleteInstanceSnapshot](#deleteinstancesnapshot) - <p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [deleteKeyPair](#deletekeypair) - <p>Deletes the specified key pair by removing the public key from Amazon Lightsail.</p> <p>You can delete key pairs that were created using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html">ImportKeyPair</a> and <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html">CreateKeyPair</a> actions, as well as the Lightsail default key pair. A new default key pair will not be created unless you launch an instance without specifying a custom key pair, or you call the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> API. </p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [deleteKnownHostKeys](#deleteknownhostkeys) - <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>
* [deleteLoadBalancer](#deleteloadbalancer) - <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [deleteLoadBalancerTlsCertificate](#deleteloadbalancertlscertificate) - <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [deleteRelationalDatabase](#deleterelationaldatabase) - <p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [deleteRelationalDatabaseSnapshot](#deleterelationaldatabasesnapshot) - <p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [detachCertificateFromDistribution](#detachcertificatefromdistribution) - <p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is detached, your distribution stops accepting traffic for all of the domains that are associated with the certificate.</p>
* [detachDisk](#detachdisk) - <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [detachInstancesFromLoadBalancer](#detachinstancesfromloadbalancer) - <p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [detachStaticIp](#detachstaticip) - Detaches a static IP from the Amazon Lightsail instance to which it is attached.
* [disableAddOn](#disableaddon) - Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
* [downloadDefaultKeyPair](#downloaddefaultkeypair) - <p>Downloads the regional Amazon Lightsail default key pair.</p> <p>This action also creates a Lightsail default key pair if a default key pair does not currently exist in the Amazon Web Services Region.</p>
* [enableAddOn](#enableaddon) - Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
* [exportSnapshot](#exportsnapshot) - <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>
* [getActiveNames](#getactivenames) - Returns the names of all active (not deleted) resources.
* [getAlarms](#getalarms) - <p>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
* [getAutoSnapshots](#getautosnapshots) - Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
* [getBlueprints](#getblueprints) - <p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>
* [getBucketAccessKeys](#getbucketaccesskeys) - <p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p> <important> <p>This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If you lose the secret access key, you must create a new access key.</p> </important>
* [getBucketBundles](#getbucketbundles) - <p>Returns the bundles that you can apply to a Amazon Lightsail bucket.</p> <p>The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to update the bundle for a bucket.</p>
* [getBucketMetricData](#getbucketmetricdata) - <p>Returns the data points of a specific metric for an Amazon Lightsail bucket.</p> <p>Metrics report the utilization of a bucket. View and collect metric data regularly to monitor the number of objects stored in a bucket (including object versions) and the storage space used by those objects.</p>
* [getBuckets](#getbuckets) - <p>Returns information about one or more Amazon Lightsail buckets. The information returned includes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access feature for your Lightsail buckets.</p> <p>For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
* [getBundles](#getbundles) - <p>Returns the bundles that you can apply to an Amazon Lightsail instance when you create it.</p> <p>A bundle describes the specifications of an instance, such as the monthly cost, amount of memory, the number of vCPUs, amount of storage space, and monthly network data transfer quota.</p> <note> <p>Bundles are referred to as <i>instance plans</i> in the Lightsail console.</p> </note>
* [getCertificates](#getcertificates) - <p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p> <note> <p>To get a summary of a certificate, ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>
* [getCloudFormationStackRecords](#getcloudformationstackrecords) - <p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>
* [getContactMethods](#getcontactmethods) - <p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
* [getContainerAPIMetadata](#getcontainerapimetadata) - Returns information about Amazon Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin.
* [getContainerImages](#getcontainerimages) - <p>Returns the container images that are registered to your Amazon Lightsail container service.</p> <note> <p>If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.</p> </note>
* [getContainerLog](#getcontainerlog) - <p>Returns the log events of a container of your Amazon Lightsail container service.</p> <p>If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service.</p> <note> <p>Container logs are retained for a certain amount of time. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>
* [getContainerServiceDeployments](#getcontainerservicedeployments) - <p>Returns the deployments for your Amazon Lightsail container service</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> <p>The deployments are ordered by version in ascending order. The newest version is listed at the top of the response.</p> <note> <p>A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>
* [getContainerServiceMetricData](#getcontainerservicemetricdata) - <p>Returns the data points of a specific metric of your Amazon Lightsail container service.</p> <p>Metrics report the utilization of your resources. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
* [getContainerServicePowers](#getcontainerservicepowers) - <p>Returns the list of powers that can be specified for your Amazon Lightsail container services.</p> <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.</p>
* [getContainerServices](#getcontainerservices) - Returns information about one or more of your Amazon Lightsail container services.
* [getCostEstimate](#getcostestimate) - Retrieves information about the cost estimate for a specified resource. A cost estimate will not generate for a resource that has been deleted.
* [getDisk](#getdisk) - Returns information about a specific block storage disk.
* [getDiskSnapshot](#getdisksnapshot) - Returns information about a specific block storage disk snapshot.
* [getDiskSnapshots](#getdisksnapshots) - Returns information about all block storage disk snapshots in your AWS account and region.
* [getDisks](#getdisks) - Returns information about all block storage disks in your AWS account and region.
* [getDistributionBundles](#getdistributionbundles) - <p>Returns the bundles that can be applied to your Amazon Lightsail content delivery network (CDN) distributions.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p>
* [getDistributionLatestCacheReset](#getdistributionlatestcachereset) - Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.
* [getDistributionMetricData](#getdistributionmetricdata) - <p>Returns the data points of a specific metric for an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
* [getDistributions](#getdistributions) - Returns information about one or more of your Amazon Lightsail content delivery network (CDN) distributions.
* [getDomain](#getdomain) - Returns information about a specific domain recordset.
* [getDomains](#getdomains) - Returns a list of all domains in the user's account.
* [getExportSnapshotRecords](#getexportsnapshotrecords) - <p>Returns all export snapshot records created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html">CreateCloudFormationStack</a> action.</p>
* [getInstance](#getinstance) - Returns information about a specific Amazon Lightsail instance, which is a virtual private server.
* [getInstanceAccessDetails](#getinstanceaccessdetails) - <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [getInstanceMetricData](#getinstancemetricdata) - <p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
* [getInstancePortStates](#getinstanceportstates) - Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
* [getInstanceSnapshot](#getinstancesnapshot) - Returns information about a specific instance snapshot.
* [getInstanceSnapshots](#getinstancesnapshots) - Returns all instance snapshots for the user's account.
* [getInstanceState](#getinstancestate) - Returns the state of a specific instance. Works on one instance at a time.
* [getInstances](#getinstances) - Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.
* [getKeyPair](#getkeypair) - Returns information about a specific key pair.
* [getKeyPairs](#getkeypairs) - Returns information about all key pairs in the user's account.
* [getLoadBalancer](#getloadbalancer) - Returns information about the specified Lightsail load balancer.
* [getLoadBalancerMetricData](#getloadbalancermetricdata) - <p>Returns information about health metrics for your Lightsail load balancer.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
* [getLoadBalancerTlsCertificates](#getloadbalancertlscertificates) - <p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>
* [getLoadBalancerTlsPolicies](#getloadbalancertlspolicies) - <p>Returns a list of TLS security policies that you can apply to Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
* [getLoadBalancers](#getloadbalancers) - Returns information about all load balancers in an account.
* [getOperation](#getoperation) - Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
* [getOperations](#getoperations) - <p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>
* [getOperationsForResource](#getoperationsforresource) - Gets operations for a specific resource (e.g., an instance or a static IP).
* [getRegions](#getregions) - Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.
* [getRelationalDatabase](#getrelationaldatabase) - Returns information about a specific database in Amazon Lightsail.
* [getRelationalDatabaseBlueprints](#getrelationaldatabaseblueprints) - <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>
* [getRelationalDatabaseBundles](#getrelationaldatabasebundles) - <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>
* [getRelationalDatabaseEvents](#getrelationaldatabaseevents) - Returns a list of events for a specific database in Amazon Lightsail.
* [getRelationalDatabaseLogEvents](#getrelationaldatabaselogevents) - Returns a list of log events for a database in Amazon Lightsail.
* [getRelationalDatabaseLogStreams](#getrelationaldatabaselogstreams) - Returns a list of available log streams for a specific database in Amazon Lightsail.
* [getRelationalDatabaseMasterUserPassword](#getrelationaldatabasemasteruserpassword) - <p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>
* [getRelationalDatabaseMetricData](#getrelationaldatabasemetricdata) - <p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
* [getRelationalDatabaseParameters](#getrelationaldatabaseparameters) - <p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>
* [getRelationalDatabaseSnapshot](#getrelationaldatabasesnapshot) - Returns information about a specific database snapshot in Amazon Lightsail.
* [getRelationalDatabaseSnapshots](#getrelationaldatabasesnapshots) - Returns information about all of your database snapshots in Amazon Lightsail.
* [getRelationalDatabases](#getrelationaldatabases) - Returns information about all of your databases in Amazon Lightsail.
* [getStaticIp](#getstaticip) - Returns information about an Amazon Lightsail static IP.
* [getStaticIps](#getstaticips) - Returns information about all static IPs in the user's account.
* [importKeyPair](#importkeypair) - Imports a public SSH key from a specific key pair.
* [isVpcPeered](#isvpcpeered) - Returns a Boolean value indicating whether your Lightsail VPC is peered.
* [openInstancePublicPorts](#openinstancepublicports) - <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [peerVpc](#peervpc) - Peers the Lightsail VPC with the user's default VPC.
* [putAlarm](#putalarm) - <p>Creates or updates an alarm, and associates it with the specified metric.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> <p>When this action creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration.</p>
* [putInstancePublicPorts](#putinstancepublicports) - <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [rebootInstance](#rebootinstance) - <p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [rebootRelationalDatabase](#rebootrelationaldatabase) - <p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [registerContainerImage](#registercontainerimage) - <p>Registers a container image to your Amazon Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>
* [releaseStaticIp](#releasestaticip) - Deletes a specific static IP from your account.
* [resetDistributionCache](#resetdistributioncache) - <p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After resetting the cache, the next time a content request is made, your distribution pulls, serves, and caches it from the origin.</p>
* [sendContactMethodVerification](#sendcontactmethodverification) - <p>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>
* [setIpAddressType](#setipaddresstype) - <p>Sets the IP address type for an Amazon Lightsail resource.</p> <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the specified resource. Alternately, you can use this action to disable dual-stack, and enable IPv4 only.</p>
* [setResourceAccessForBucket](#setresourceaccessforbucket) - <p>Sets the Amazon Lightsail resources that can access the specified Lightsail bucket.</p> <p>Lightsail buckets currently support setting access for Lightsail instances in the same Amazon Web Services Region.</p>
* [startGUISession](#startguisession) - Initiates a graphical user interface (GUI) session that’s used to access a virtual computer’s operating system and application. The session will be active for 1 hour. Use this action to resume the session after it expires. 
* [startInstance](#startinstance) - <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [startRelationalDatabase](#startrelationaldatabase) - <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [stopGUISession](#stopguisession) - Terminates a web-based NICE DCV session that’s used to access a virtual computer’s operating system or application. The session will close and any unsaved data will be lost.
* [stopInstance](#stopinstance) - <p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [stopRelationalDatabase](#stoprelationaldatabase) - <p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [tagResource](#tagresource) - <p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [testAlarm](#testalarm) - <p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
* [unpeerVpc](#unpeervpc) - Unpeers the Lightsail VPC from the user's default VPC.
* [untagResource](#untagresource) - <p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [updateBucket](#updatebucket) - <p>Updates an existing Amazon Lightsail bucket.</p> <p>Use this action to update the configuration of an existing bucket, such as versioning, public accessibility, and the Amazon Web Services accounts that can access the bucket.</p>
* [updateBucketBundle](#updatebucketbundle) - <p>Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. You can update a bucket's bundle only one time within a monthly Amazon Web Services billing cycle. To determine if you can update a bucket's bundle, use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html">GetBuckets</a> action. The <code>ableToUpdateBundle</code> parameter in the response will indicate whether you can currently update a bucket's bundle.</p> <p>Update a bucket's bundle if it's consistently going over its storage space or data transfer quota, or if a bucket's usage is consistently in the lower range of its storage space or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might experience, we strongly recommend that you update a bucket's bundle only as a long-term strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle that will provide the bucket with ample storage space and data transfer for a long time to come.</p>
* [updateContainerService](#updatecontainerservice) - Updates the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names.
* [updateDistribution](#updatedistribution) - <p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Use this action to update the configuration of your existing distribution.</p>
* [updateDistributionBundle](#updatedistributionbundle) - <p>Updates the bundle of your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p> <p>Update your distribution's bundle if your distribution is going over its monthly network transfer quota and is incurring an overage fee.</p> <p>You can update your distribution's bundle only one time within your monthly Amazon Web Services billing cycle. To determine if you can update your distribution's bundle, use the <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the result will indicate whether you can currently update your distribution's bundle.</p>
* [updateDomainEntry](#updatedomainentry) - <p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [updateInstanceMetadataOptions](#updateinstancemetadataoptions) - Modifies the Amazon Lightsail instance metadata parameters on a running or stopped instance. When you modify the parameters on a running instance, the <code>GetInstance</code> or <code>GetInstances</code> API operation initially responds with a state of <code>pending</code>. After the parameter modifications are successfully applied, the state changes to <code>applied</code> in subsequent <code>GetInstance</code> or <code>GetInstances</code> API calls. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-instance-metadata-service">Use IMDSv2 with an Amazon Lightsail instance</a> in the <i>Amazon Lightsail Developer Guide</i>.
* [updateLoadBalancerAttribute](#updateloadbalancerattribute) - <p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [updateRelationalDatabase](#updaterelationaldatabase) - <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [updateRelationalDatabaseParameters](#updaterelationaldatabaseparameters) - <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

## allocateStaticIp

Allocates a static IP address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllocateStaticIpRequest;
import org.openapis.openapi.models.operations.AllocateStaticIpResponse;
import org.openapis.openapi.models.operations.AllocateStaticIpXAmzTargetEnum;
import org.openapis.openapi.models.shared.AllocateStaticIpRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllocateStaticIpRequest req = new AllocateStaticIpRequest(                new AllocateStaticIpRequest("deserunt");, AllocateStaticIpXAmzTargetEnum.LIGHTSAIL20161128_ALLOCATE_STATIC_IP) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AllocateStaticIpResponse res = sdk.sdk.allocateStaticIp(req);

            if (res.allocateStaticIpResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachCertificateToDistribution

<p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the domains that are associated with the certificate.</p> <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach to your distribution.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachCertificateToDistributionRequest;
import org.openapis.openapi.models.operations.AttachCertificateToDistributionResponse;
import org.openapis.openapi.models.operations.AttachCertificateToDistributionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachCertificateToDistributionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachCertificateToDistributionRequest req = new AttachCertificateToDistributionRequest(                new AttachCertificateToDistributionRequest("molestiae", "minus");, AttachCertificateToDistributionXAmzTargetEnum.LIGHTSAIL20161128_ATTACH_CERTIFICATE_TO_DISTRIBUTION) {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }};            

            AttachCertificateToDistributionResponse res = sdk.sdk.attachCertificateToDistribution(req);

            if (res.attachCertificateToDistributionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachDisk

<p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachDiskRequest;
import org.openapis.openapi.models.operations.AttachDiskResponse;
import org.openapis.openapi.models.operations.AttachDiskXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachDiskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachDiskRequest req = new AttachDiskRequest(                new AttachDiskRequest("quis", "veritatis", "deserunt") {{
                                autoMounting = false;
                            }};, AttachDiskXAmzTargetEnum.LIGHTSAIL20161128_ATTACH_DISK) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "repellendus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "quo";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "at";
            }};            

            AttachDiskResponse res = sdk.sdk.attachDisk(req);

            if (res.attachDiskResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachInstancesToLoadBalancer

<p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachInstancesToLoadBalancerRequest;
import org.openapis.openapi.models.operations.AttachInstancesToLoadBalancerResponse;
import org.openapis.openapi.models.operations.AttachInstancesToLoadBalancerXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachInstancesToLoadBalancerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachInstancesToLoadBalancerRequest req = new AttachInstancesToLoadBalancerRequest(                new AttachInstancesToLoadBalancerRequest(                new String[]{{
                                                add("molestiae"),
                                                add("quod"),
                                                add("quod"),
                                                add("esse"),
                                            }}, "totam");, AttachInstancesToLoadBalancerXAmzTargetEnum.LIGHTSAIL20161128_ATTACH_INSTANCES_TO_LOAD_BALANCER) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "dicta";
                xAmzDate = "nam";
                xAmzSecurityToken = "officia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "fugit";
            }};            

            AttachInstancesToLoadBalancerResponse res = sdk.sdk.attachInstancesToLoadBalancer(req);

            if (res.attachInstancesToLoadBalancerResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachLoadBalancerTlsCertificate

<p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachLoadBalancerTlsCertificateRequest;
import org.openapis.openapi.models.operations.AttachLoadBalancerTlsCertificateResponse;
import org.openapis.openapi.models.operations.AttachLoadBalancerTlsCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachLoadBalancerTlsCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachLoadBalancerTlsCertificateRequest req = new AttachLoadBalancerTlsCertificateRequest(                new AttachLoadBalancerTlsCertificateRequest("hic", "optio");, AttachLoadBalancerTlsCertificateXAmzTargetEnum.LIGHTSAIL20161128_ATTACH_LOAD_BALANCER_TLS_CERTIFICATE) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "commodi";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
            }};            

            AttachLoadBalancerTlsCertificateResponse res = sdk.sdk.attachLoadBalancerTlsCertificate(req);

            if (res.attachLoadBalancerTlsCertificateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachStaticIp

Attaches a static IP address to a specific Amazon Lightsail instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachStaticIpRequest;
import org.openapis.openapi.models.operations.AttachStaticIpResponse;
import org.openapis.openapi.models.operations.AttachStaticIpXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachStaticIpRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachStaticIpRequest req = new AttachStaticIpRequest(                new AttachStaticIpRequest("esse", "ipsum");, AttachStaticIpXAmzTargetEnum.LIGHTSAIL20161128_ATTACH_STATIC_IP) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "ad";
                xAmzSecurityToken = "natus";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "iste";
            }};            

            AttachStaticIpResponse res = sdk.sdk.attachStaticIp(req);

            if (res.attachStaticIpResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## closeInstancePublicPorts

<p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloseInstancePublicPortsRequest;
import org.openapis.openapi.models.operations.CloseInstancePublicPortsResponse;
import org.openapis.openapi.models.operations.CloseInstancePublicPortsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloseInstancePublicPortsRequest;
import org.openapis.openapi.models.shared.NetworkProtocolEnum;
import org.openapis.openapi.models.shared.PortInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CloseInstancePublicPortsRequest req = new CloseInstancePublicPortsRequest(                new CloseInstancePublicPortsRequest("natus",                 new PortInfo() {{
                                                cidrListAliases = new String[]{{
                                                    add("hic"),
                                                    add("saepe"),
                                                }};
                                                cidrs = new String[]{{
                                                    add("in"),
                                                    add("corporis"),
                                                    add("iste"),
                                                }};
                                                fromPort = 437032L;
                                                ipv6Cidrs = new String[]{{
                                                    add("quidem"),
                                                    add("architecto"),
                                                    add("ipsa"),
                                                    add("reiciendis"),
                                                }};
                                                protocol = NetworkProtocolEnum.UDP;
                                                toPort = 653140L;
                                            }};);, CloseInstancePublicPortsXAmzTargetEnum.LIGHTSAIL20161128_CLOSE_INSTANCE_PUBLIC_PORTS) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "dolorem";
                xAmzDate = "corporis";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "enim";
            }};            

            CloseInstancePublicPortsResponse res = sdk.sdk.closeInstancePublicPorts(req);

            if (res.closeInstancePublicPortsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copySnapshot

<p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one Amazon Web Services Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopySnapshotRequest;
import org.openapis.openapi.models.operations.CopySnapshotResponse;
import org.openapis.openapi.models.operations.CopySnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.CopySnapshotRequest;
import org.openapis.openapi.models.shared.RegionNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopySnapshotRequest req = new CopySnapshotRequest(                new CopySnapshotRequest(RegionNameEnum.EU_WEST2, "minima") {{
                                restoreDate = "excepturi";
                                sourceResourceName = "accusantium";
                                sourceSnapshotName = "iure";
                                useLatestRestorableAutoSnapshot = false;
                            }};, CopySnapshotXAmzTargetEnum.LIGHTSAIL20161128_COPY_SNAPSHOT) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "sapiente";
                xAmzDate = "architecto";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "culpa";
            }};            

            CopySnapshotResponse res = sdk.sdk.copySnapshot(req);

            if (res.copySnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBucket

<p>Creates an Amazon Lightsail bucket.</p> <p>A bucket is a cloud storage resource available in the Lightsail object storage service. Use buckets to store objects such as data and its descriptive metadata. For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBucketRequest;
import org.openapis.openapi.models.operations.CreateBucketResponse;
import org.openapis.openapi.models.operations.CreateBucketXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateBucketRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBucketRequest req = new CreateBucketRequest(                new CreateBucketRequest("repellat", "mollitia") {{
                                enableObjectVersioning = false;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "numquam";
                                        value = "commodi";
                                    }}),
                                    add(new Tag() {{
                                        key = "quam";
                                        value = "molestiae";
                                    }}),
                                    add(new Tag() {{
                                        key = "velit";
                                        value = "error";
                                    }}),
                                }};
                            }};, CreateBucketXAmzTargetEnum.LIGHTSAIL20161128_CREATE_BUCKET) {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "quis";
                xAmzCredential = "vitae";
                xAmzDate = "laborum";
                xAmzSecurityToken = "animi";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "odit";
            }};            

            CreateBucketResponse res = sdk.sdk.createBucket(req);

            if (res.createBucketResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBucketAccessKey

<p>Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of an access key ID and corresponding secret access key.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html">GetBucketAccessKeys</a> action to get a list of current access keys for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBucketAccessKeyRequest;
import org.openapis.openapi.models.operations.CreateBucketAccessKeyResponse;
import org.openapis.openapi.models.operations.CreateBucketAccessKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateBucketAccessKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBucketAccessKeyRequest req = new CreateBucketAccessKeyRequest(                new CreateBucketAccessKeyRequest("sequi");, CreateBucketAccessKeyXAmzTargetEnum.LIGHTSAIL20161128_CREATE_BUCKET_ACCESS_KEY) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
            }};            

            CreateBucketAccessKeyResponse res = sdk.sdk.createBucketAccessKey(req);

            if (res.createBucketAccessKeyResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCertificate

<p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN) distribution and a container service.</p> <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code> action to use the certificate and its domains with your distribution. Or use the <code>UpdateContainerService</code> action to use the certificate and its domains with your container service.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCertificateRequest;
import org.openapis.openapi.models.operations.CreateCertificateResponse;
import org.openapis.openapi.models.operations.CreateCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateCertificateRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCertificateRequest req = new CreateCertificateRequest(                new CreateCertificateRequest("laborum", "quasi") {{
                                subjectAlternativeNames = new String[]{{
                                    add("voluptatibus"),
                                    add("vero"),
                                    add("nihil"),
                                    add("praesentium"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "ipsa";
                                        value = "omnis";
                                    }}),
                                    add(new Tag() {{
                                        key = "voluptate";
                                        value = "cum";
                                    }}),
                                    add(new Tag() {{
                                        key = "perferendis";
                                        value = "doloremque";
                                    }}),
                                    add(new Tag() {{
                                        key = "reprehenderit";
                                        value = "ut";
                                    }}),
                                }};
                            }};, CreateCertificateXAmzTargetEnum.LIGHTSAIL20161128_CREATE_CERTIFICATE) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "corporis";
                xAmzDate = "dolore";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "harum";
            }};            

            CreateCertificateResponse res = sdk.sdk.createCertificate(req);

            if (res.createCertificateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCloudFormationStack

<p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCloudFormationStackRequest;
import org.openapis.openapi.models.operations.CreateCloudFormationStackResponse;
import org.openapis.openapi.models.operations.CreateCloudFormationStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateCloudFormationStackRequest;
import org.openapis.openapi.models.shared.InstanceEntry;
import org.openapis.openapi.models.shared.PortInfoSourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCloudFormationStackRequest req = new CreateCloudFormationStackRequest(                new CreateCloudFormationStackRequest(                new org.openapis.openapi.models.shared.InstanceEntry[]{{
                                                add(new InstanceEntry("molestias", "excepturi", PortInfoSourceTypeEnum.CLOSED, "modi") {{
                                                    availabilityZone = "commodi";
                                                    instanceType = "repudiandae";
                                                    portInfoSource = PortInfoSourceTypeEnum.DEFAULT_;
                                                    sourceName = "ipsum";
                                                    userData = "quidem";
                                                }}),
                                                add(new InstanceEntry("sint", "veritatis", PortInfoSourceTypeEnum.CLOSED, "incidunt") {{
                                                    availabilityZone = "praesentium";
                                                    instanceType = "rem";
                                                    portInfoSource = PortInfoSourceTypeEnum.CLOSED;
                                                    sourceName = "quasi";
                                                    userData = "repudiandae";
                                                }}),
                                                add(new InstanceEntry("deserunt", "distinctio", PortInfoSourceTypeEnum.CLOSED, "labore") {{
                                                    availabilityZone = "enim";
                                                    instanceType = "consequatur";
                                                    portInfoSource = PortInfoSourceTypeEnum.NONE;
                                                    sourceName = "quibusdam";
                                                    userData = "explicabo";
                                                }}),
                                                add(new InstanceEntry("perferendis", "magni", PortInfoSourceTypeEnum.CLOSED, "ipsam") {{
                                                    availabilityZone = "modi";
                                                    instanceType = "qui";
                                                    portInfoSource = PortInfoSourceTypeEnum.INSTANCE;
                                                    sourceName = "cupiditate";
                                                    userData = "quos";
                                                }}),
                                            }});, CreateCloudFormationStackXAmzTargetEnum.LIGHTSAIL20161128_CREATE_CLOUD_FORMATION_STACK) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
            }};            

            CreateCloudFormationStackResponse res = sdk.sdk.createCloudFormationStack(req);

            if (res.createCloudFormationStackResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContactMethod

<p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContactMethodRequest;
import org.openapis.openapi.models.operations.CreateContactMethodResponse;
import org.openapis.openapi.models.operations.CreateContactMethodXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContactProtocolEnum;
import org.openapis.openapi.models.shared.CreateContactMethodRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContactMethodRequest req = new CreateContactMethodRequest(                new CreateContactMethodRequest("delectus", ContactProtocolEnum.EMAIL);, CreateContactMethodXAmzTargetEnum.LIGHTSAIL20161128_CREATE_CONTACT_METHOD) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "sint";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "provident";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "sint";
            }};            

            CreateContactMethodResponse res = sdk.sdk.createContactMethod(req);

            if (res.createContactMethodResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContainerService

<p>Creates an Amazon Lightsail container service.</p> <p>A Lightsail container service is a compute resource to which you can deploy containers. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContainerServiceRequest;
import org.openapis.openapi.models.operations.CreateContainerServiceResponse;
import org.openapis.openapi.models.operations.CreateContainerServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.ContainerServiceDeploymentRequest;
import org.openapis.openapi.models.shared.ContainerServiceECRImagePullerRoleRequest;
import org.openapis.openapi.models.shared.ContainerServiceHealthCheckConfig;
import org.openapis.openapi.models.shared.ContainerServicePowerNameEnum;
import org.openapis.openapi.models.shared.ContainerServiceProtocolEnum;
import org.openapis.openapi.models.shared.CreateContainerServiceRequest;
import org.openapis.openapi.models.shared.EndpointRequest;
import org.openapis.openapi.models.shared.PrivateRegistryAccessRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContainerServiceRequest req = new CreateContainerServiceRequest(                new CreateContainerServiceRequest(ContainerServicePowerNameEnum.MICRO, 891555L, "a") {{
                                deployment = new ContainerServiceDeploymentRequest() {{
                                    containers = new java.util.HashMap<String, org.openapis.openapi.models.shared.Container>() {{
                                        put("in", new Container() {{
                                            command = new String[]{{
                                                add("illum"),
                                                add("maiores"),
                                            }};
                                            environment = new java.util.HashMap<String, String>() {{
                                                put("dicta", "magnam");
                                                put("cumque", "facere");
                                                put("ea", "aliquid");
                                            }};
                                            image = "laborum";
                                            ports = new java.util.HashMap<String, org.openapis.openapi.models.shared.ContainerServiceProtocolEnum>() {{
                                                put("non", ContainerServiceProtocolEnum.TCP);
                                                put("enim", ContainerServiceProtocolEnum.UDP);
                                                put("delectus", ContainerServiceProtocolEnum.TCP);
                                                put("provident", ContainerServiceProtocolEnum.TCP);
                                            }};
                                        }});
                                        put("id", new Container() {{
                                            command = new String[]{{
                                                add("deleniti"),
                                                add("sapiente"),
                                                add("amet"),
                                            }};
                                            environment = new java.util.HashMap<String, String>() {{
                                                put("nisi", "vel");
                                                put("natus", "omnis");
                                                put("molestiae", "perferendis");
                                            }};
                                            image = "nihil";
                                            ports = new java.util.HashMap<String, org.openapis.openapi.models.shared.ContainerServiceProtocolEnum>() {{
                                                put("distinctio", ContainerServiceProtocolEnum.TCP);
                                                put("labore", ContainerServiceProtocolEnum.HTTPS);
                                            }};
                                        }});
                                        put("suscipit", new Container() {{
                                            command = new String[]{{
                                                add("nobis"),
                                                add("eum"),
                                                add("vero"),
                                            }};
                                            environment = new java.util.HashMap<String, String>() {{
                                                put("architecto", "magnam");
                                            }};
                                            image = "et";
                                            ports = new java.util.HashMap<String, org.openapis.openapi.models.shared.ContainerServiceProtocolEnum>() {{
                                                put("ullam", ContainerServiceProtocolEnum.TCP);
                                                put("quos", ContainerServiceProtocolEnum.TCP);
                                                put("accusantium", ContainerServiceProtocolEnum.TCP);
                                            }};
                                        }});
                                    }};
                                    publicEndpoint = new EndpointRequest("reiciendis", 652103L) {{
                                        healthCheck = new ContainerServiceHealthCheckConfig() {{
                                            healthyThreshold = 320997L;
                                            intervalSeconds = 431418L;
                                            path = "dolor";
                                            successCodes = "necessitatibus";
                                            timeoutSeconds = 141264L;
                                            unhealthyThreshold = 367562L;
                                        }};;
                                    }};;
                                }};;
                                privateRegistryAccess = new PrivateRegistryAccessRequest() {{
                                    ecrImagePullerRole = new ContainerServiceECRImagePullerRoleRequest() {{
                                        isActive = false;
                                    }};;
                                }};;
                                publicDomainNames = new java.util.HashMap<String, String[]>() {{
                                    put("iure", new String[]{{
                                        add("debitis"),
                                        add("eius"),
                                        add("maxime"),
                                        add("deleniti"),
                                    }});
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "in";
                                        value = "architecto";
                                    }}),
                                    add(new Tag() {{
                                        key = "architecto";
                                        value = "repudiandae";
                                    }}),
                                    add(new Tag() {{
                                        key = "ullam";
                                        value = "expedita";
                                    }}),
                                }};
                            }};, CreateContainerServiceXAmzTargetEnum.LIGHTSAIL20161128_CREATE_CONTAINER_SERVICE) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
            }};            

            CreateContainerServiceResponse res = sdk.sdk.createContainerService(req);

            if (res.createContainerServiceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContainerServiceDeployment

<p>Creates a deployment for your Amazon Lightsail container service.</p> <p>A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.</p> <p>You can deploy containers to your container service using container images from a public registry such as Amazon ECR Public, or from your local machine. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContainerServiceDeploymentRequest;
import org.openapis.openapi.models.operations.CreateContainerServiceDeploymentResponse;
import org.openapis.openapi.models.operations.CreateContainerServiceDeploymentXAmzTargetEnum;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.ContainerServiceHealthCheckConfig;
import org.openapis.openapi.models.shared.ContainerServiceProtocolEnum;
import org.openapis.openapi.models.shared.CreateContainerServiceDeploymentRequest;
import org.openapis.openapi.models.shared.EndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContainerServiceDeploymentRequest req = new CreateContainerServiceDeploymentRequest(                new CreateContainerServiceDeploymentRequest("praesentium") {{
                                containers = new java.util.HashMap<String, org.openapis.openapi.models.shared.Container>() {{
                                    put("magni", new Container() {{
                                        command = new String[]{{
                                            add("quo"),
                                        }};
                                        environment = new java.util.HashMap<String, String>() {{
                                            put("pariatur", "maxime");
                                            put("ea", "excepturi");
                                            put("odit", "ea");
                                            put("accusantium", "ab");
                                        }};
                                        image = "maiores";
                                        ports = new java.util.HashMap<String, org.openapis.openapi.models.shared.ContainerServiceProtocolEnum>() {{
                                            put("ipsam", ContainerServiceProtocolEnum.HTTPS);
                                            put("autem", ContainerServiceProtocolEnum.TCP);
                                            put("eaque", ContainerServiceProtocolEnum.UDP);
                                        }};
                                    }});
                                    put("nemo", new Container() {{
                                        command = new String[]{{
                                            add("perferendis"),
                                            add("fugiat"),
                                            add("amet"),
                                            add("aut"),
                                        }};
                                        environment = new java.util.HashMap<String, String>() {{
                                            put("corporis", "hic");
                                            put("libero", "nobis");
                                            put("dolores", "quis");
                                            put("totam", "dignissimos");
                                        }};
                                        image = "eaque";
                                        ports = new java.util.HashMap<String, org.openapis.openapi.models.shared.ContainerServiceProtocolEnum>() {{
                                            put("nesciunt", ContainerServiceProtocolEnum.HTTP);
                                            put("perferendis", ContainerServiceProtocolEnum.HTTP);
                                        }};
                                    }});
                                    put("minus", new Container() {{
                                        command = new String[]{{
                                            add("dolor"),
                                            add("vero"),
                                        }};
                                        environment = new java.util.HashMap<String, String>() {{
                                            put("hic", "recusandae");
                                            put("omnis", "facilis");
                                        }};
                                        image = "perspiciatis";
                                        ports = new java.util.HashMap<String, org.openapis.openapi.models.shared.ContainerServiceProtocolEnum>() {{
                                            put("porro", ContainerServiceProtocolEnum.HTTP);
                                        }};
                                    }});
                                }};
                                publicEndpoint = new EndpointRequest("blanditiis", 621479L) {{
                                    healthCheck = new ContainerServiceHealthCheckConfig() {{
                                        healthyThreshold = 50370L;
                                        intervalSeconds = 577229L;
                                        path = "rerum";
                                        successCodes = "adipisci";
                                        timeoutSeconds = 992397L;
                                        unhealthyThreshold = 934214L;
                                    }};;
                                }};;
                            }};, CreateContainerServiceDeploymentXAmzTargetEnum.LIGHTSAIL20161128_CREATE_CONTAINER_SERVICE_DEPLOYMENT) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
            }};            

            CreateContainerServiceDeploymentResponse res = sdk.sdk.createContainerServiceDeployment(req);

            if (res.createContainerServiceDeploymentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContainerServiceRegistryLogin

<p>Creates a temporary set of log in credentials that you can use to log in to the Docker process on your local machine. After you're logged in, you can use the native Docker commands to push your local container images to the container image registry of your Amazon Lightsail account so that you can use them with your Lightsail container service. The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials.</p> <note> <p>You can only push container images to the container service registry of your Lightsail account. You cannot pull container images or perform any other container image management actions on the container service registry.</p> </note> <p>After you push your container images to the container image registry of your Lightsail account, use the <code>RegisterContainerImage</code> action to register the pushed images to a specific Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContainerServiceRegistryLoginRequest;
import org.openapis.openapi.models.operations.CreateContainerServiceRegistryLoginResponse;
import org.openapis.openapi.models.operations.CreateContainerServiceRegistryLoginXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContainerServiceRegistryLoginRequest req = new CreateContainerServiceRegistryLoginRequest(                new java.util.HashMap<String, Object>() {{
                                put("quaerat", "quos");
                                put("aliquid", "dolorem");
                                put("dolorem", "dolor");
                                put("qui", "ipsum");
                            }}, CreateContainerServiceRegistryLoginXAmzTargetEnum.LIGHTSAIL20161128_CREATE_CONTAINER_SERVICE_REGISTRY_LOGIN) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "cum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "amet";
            }};            

            CreateContainerServiceRegistryLoginResponse res = sdk.sdk.createContainerServiceRegistryLogin(req);

            if (res.createContainerServiceRegistryLoginResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDisk

<p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDiskRequest;
import org.openapis.openapi.models.operations.CreateDiskResponse;
import org.openapis.openapi.models.operations.CreateDiskXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddOnRequest;
import org.openapis.openapi.models.shared.AddOnTypeEnum;
import org.openapis.openapi.models.shared.AutoSnapshotAddOnRequest;
import org.openapis.openapi.models.shared.CreateDiskRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopInstanceOnIdleRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDiskRequest req = new CreateDiskRequest(                new CreateDiskRequest("numquam", "veritatis", 58029L) {{
                                addOns = new org.openapis.openapi.models.shared.AddOnRequest[]{{
                                    add(new AddOnRequest(AddOnTypeEnum.STOP_INSTANCE_ON_IDLE) {{
                                        addOnType = AddOnTypeEnum.AUTO_SNAPSHOT;
                                        autoSnapshotAddOnRequest = new AutoSnapshotAddOnRequest() {{
                                            snapshotTimeOfDay = "odio";
                                        }};
                                        stopInstanceOnIdleRequest = new StopInstanceOnIdleRequest() {{
                                            duration = "quaerat";
                                            threshold = "accusamus";
                                        }};
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "voluptas";
                                        value = "natus";
                                    }}),
                                    add(new Tag() {{
                                        key = "eos";
                                        value = "atque";
                                    }}),
                                    add(new Tag() {{
                                        key = "sit";
                                        value = "fugiat";
                                    }}),
                                    add(new Tag() {{
                                        key = "ab";
                                        value = "soluta";
                                    }}),
                                }};
                            }};, CreateDiskXAmzTargetEnum.LIGHTSAIL20161128_CREATE_DISK) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "voluptate";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            CreateDiskResponse res = sdk.sdk.createDisk(req);

            if (res.createDiskResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDiskFromSnapshot

<p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDiskFromSnapshotRequest;
import org.openapis.openapi.models.operations.CreateDiskFromSnapshotResponse;
import org.openapis.openapi.models.operations.CreateDiskFromSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddOnRequest;
import org.openapis.openapi.models.shared.AddOnTypeEnum;
import org.openapis.openapi.models.shared.AutoSnapshotAddOnRequest;
import org.openapis.openapi.models.shared.CreateDiskFromSnapshotRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopInstanceOnIdleRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDiskFromSnapshotRequest req = new CreateDiskFromSnapshotRequest(                new CreateDiskFromSnapshotRequest("asperiores", "nihil", 216897L) {{
                                addOns = new org.openapis.openapi.models.shared.AddOnRequest[]{{
                                    add(new AddOnRequest(AddOnTypeEnum.AUTO_SNAPSHOT) {{
                                        addOnType = AddOnTypeEnum.STOP_INSTANCE_ON_IDLE;
                                        autoSnapshotAddOnRequest = new AutoSnapshotAddOnRequest() {{
                                            snapshotTimeOfDay = "saepe";
                                        }};
                                        stopInstanceOnIdleRequest = new StopInstanceOnIdleRequest() {{
                                            duration = "eius";
                                            threshold = "aspernatur";
                                        }};
                                    }}),
                                    add(new AddOnRequest(AddOnTypeEnum.STOP_INSTANCE_ON_IDLE) {{
                                        addOnType = AddOnTypeEnum.AUTO_SNAPSHOT;
                                        autoSnapshotAddOnRequest = new AutoSnapshotAddOnRequest() {{
                                            snapshotTimeOfDay = "optio";
                                        }};
                                        stopInstanceOnIdleRequest = new StopInstanceOnIdleRequest() {{
                                            duration = "accusamus";
                                            threshold = "ad";
                                        }};
                                    }}),
                                }};
                                diskSnapshotName = "suscipit";
                                restoreDate = "deserunt";
                                sourceDiskName = "provident";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "repellendus";
                                        value = "totam";
                                    }}),
                                    add(new Tag() {{
                                        key = "similique";
                                        value = "alias";
                                    }}),
                                }};
                                useLatestRestorableAutoSnapshot = false;
                            }};, CreateDiskFromSnapshotXAmzTargetEnum.LIGHTSAIL20161128_CREATE_DISK_FROM_SNAPSHOT) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "tempora";
                xAmzDate = "vel";
                xAmzSecurityToken = "quod";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "qui";
            }};            

            CreateDiskFromSnapshotResponse res = sdk.sdk.createDiskFromSnapshot(req);

            if (res.createDiskFromSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDiskSnapshot

<p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDiskSnapshotRequest;
import org.openapis.openapi.models.operations.CreateDiskSnapshotResponse;
import org.openapis.openapi.models.operations.CreateDiskSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDiskSnapshotRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDiskSnapshotRequest req = new CreateDiskSnapshotRequest(                new CreateDiskSnapshotRequest("a") {{
                                diskName = "esse";
                                instanceName = "harum";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "ipsum";
                                        value = "quisquam";
                                    }}),
                                    add(new Tag() {{
                                        key = "tenetur";
                                        value = "amet";
                                    }}),
                                }};
                            }};, CreateDiskSnapshotXAmzTargetEnum.LIGHTSAIL20161128_CREATE_DISK_SNAPSHOT) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "numquam";
                xAmzDate = "enim";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "totam";
            }};            

            CreateDiskSnapshotResponse res = sdk.sdk.createDiskSnapshot(req);

            if (res.createDiskSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDistribution

<p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDistributionRequest;
import org.openapis.openapi.models.operations.CreateDistributionResponse;
import org.openapis.openapi.models.operations.CreateDistributionXAmzTargetEnum;
import org.openapis.openapi.models.shared.BehaviorEnumEnum;
import org.openapis.openapi.models.shared.CacheBehavior;
import org.openapis.openapi.models.shared.CacheBehaviorPerPath;
import org.openapis.openapi.models.shared.CacheSettings;
import org.openapis.openapi.models.shared.CookieObject;
import org.openapis.openapi.models.shared.CreateDistributionRequest;
import org.openapis.openapi.models.shared.ForwardValuesEnum;
import org.openapis.openapi.models.shared.HeaderEnumEnum;
import org.openapis.openapi.models.shared.HeaderObject;
import org.openapis.openapi.models.shared.InputOrigin;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.OriginProtocolPolicyEnumEnum;
import org.openapis.openapi.models.shared.QueryStringObject;
import org.openapis.openapi.models.shared.RegionNameEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDistributionRequest req = new CreateDistributionRequest(                new CreateDistributionRequest("sit",                 new CacheBehavior() {{
                                                behavior = BehaviorEnumEnum.CACHE;
                                            }};, "neque",                 new InputOrigin() {{
                                                name = "Gina Renner";
                                                protocolPolicy = OriginProtocolPolicyEnumEnum.HTTP_ONLY;
                                                regionName = RegionNameEnum.US_WEST2;
                                            }};) {{
                                cacheBehaviorSettings = new CacheSettings() {{
                                    allowedHTTPMethods = "incidunt";
                                    cachedHTTPMethods = "qui";
                                    defaultTTL = 586784L;
                                    forwardedCookies = new CookieObject() {{
                                        cookiesAllowList = new String[]{{
                                            add("pariatur"),
                                            add("soluta"),
                                            add("dicta"),
                                            add("laborum"),
                                        }};
                                        option = ForwardValuesEnum.ALLOW_LIST;
                                    }};;
                                    forwardedHeaders = new HeaderObject() {{
                                        headersAllowList = new org.openapis.openapi.models.shared.HeaderEnumEnum[]{{
                                            add(HeaderEnumEnum.ACCEPT_CHARSET),
                                            add(HeaderEnumEnum.ACCEPT_DATETIME),
                                        }};
                                        option = ForwardValuesEnum.ALL;
                                    }};;
                                    forwardedQueryStrings = new QueryStringObject() {{
                                        option = false;
                                        queryStringsAllowList = new String[]{{
                                            add("aliquid"),
                                            add("quam"),
                                            add("molestias"),
                                        }};
                                    }};;
                                    maximumTTL = 840429L;
                                    minimumTTL = 183280L;
                                }};;
                                cacheBehaviors = new org.openapis.openapi.models.shared.CacheBehaviorPerPath[]{{
                                    add(new CacheBehaviorPerPath() {{
                                        behavior = BehaviorEnumEnum.DONT_CACHE;
                                        path = "magni";
                                    }}),
                                }};
                                ipAddressType = IpAddressTypeEnum.DUALSTACK;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "ullam";
                                        value = "nam";
                                    }}),
                                }};
                            }};, CreateDistributionXAmzTargetEnum.LIGHTSAIL20161128_CREATE_DISTRIBUTION) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "cumque";
                xAmzDate = "soluta";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateDistributionResponse res = sdk.sdk.createDistribution(req);

            if (res.createDistributionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDomain

<p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomainRequest;
import org.openapis.openapi.models.operations.CreateDomainResponse;
import org.openapis.openapi.models.operations.CreateDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDomainRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDomainRequest req = new CreateDomainRequest(                new CreateDomainRequest("veritatis") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quos";
                                        value = "tempore";
                                    }}),
                                    add(new Tag() {{
                                        key = "cupiditate";
                                        value = "aperiam";
                                    }}),
                                    add(new Tag() {{
                                        key = "delectus";
                                        value = "dolorem";
                                    }}),
                                }};
                            }};, CreateDomainXAmzTargetEnum.LIGHTSAIL20161128_CREATE_DOMAIN) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "adipisci";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "aut";
            }};            

            CreateDomainResponse res = sdk.sdk.createDomain(req);

            if (res.createDomainResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDomainEntry

<p>Creates one of the following domain name system (DNS) records in a domain DNS zone: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomainEntryRequest;
import org.openapis.openapi.models.operations.CreateDomainEntryResponse;
import org.openapis.openapi.models.operations.CreateDomainEntryXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDomainEntryRequest;
import org.openapis.openapi.models.shared.DomainEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDomainEntryRequest req = new CreateDomainEntryRequest(                new CreateDomainEntryRequest(                new DomainEntry() {{
                                                id = "e0adcf4b-9218-479f-8e95-3f73ef7fbc7a";
                                                isAlias = false;
                                                name = "Hugo Kuphal";
                                                options = new java.util.HashMap<String, String>() {{
                                                    put("sequi", "natus");
                                                    put("impedit", "aut");
                                                    put("voluptatibus", "exercitationem");
                                                    put("nulla", "fugit");
                                                }};
                                                target = "porro";
                                                type = "maiores";
                                            }};, "doloribus");, CreateDomainEntryXAmzTargetEnum.LIGHTSAIL20161128_CREATE_DOMAIN_ENTRY) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "ducimus";
                xAmzDate = "alias";
                xAmzSecurityToken = "officia";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "ipsam";
            }};            

            CreateDomainEntryResponse res = sdk.sdk.createDomainEntry(req);

            if (res.createDomainEntryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGUISessionAccessDetails

<p>Creates two URLs that are used to access a virtual computer’s graphical user interface (GUI) session. The primary URL initiates a web-based NICE DCV session to the virtual computer's application. The secondary URL initiates a web-based NICE DCV session to the virtual computer's operating session. </p> <p>Use <code>StartGUISession</code> to open the session.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGUISessionAccessDetailsRequest;
import org.openapis.openapi.models.operations.CreateGUISessionAccessDetailsResponse;
import org.openapis.openapi.models.operations.CreateGUISessionAccessDetailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateGUISessionAccessDetailsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGUISessionAccessDetailsRequest req = new CreateGUISessionAccessDetailsRequest(                new CreateGUISessionAccessDetailsRequest("aspernatur");, CreateGUISessionAccessDetailsXAmzTargetEnum.LIGHTSAIL20161128_CREATE_GUI_SESSION_ACCESS_DETAILS) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "magnam";
                xAmzDate = "ratione";
                xAmzSecurityToken = "ex";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "dicta";
            }};            

            CreateGUISessionAccessDetailsResponse res = sdk.sdk.createGUISessionAccessDetails(req);

            if (res.createGUISessionAccessDetailsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInstanceSnapshot

<p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInstanceSnapshotRequest;
import org.openapis.openapi.models.operations.CreateInstanceSnapshotResponse;
import org.openapis.openapi.models.operations.CreateInstanceSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateInstanceSnapshotRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateInstanceSnapshotRequest req = new CreateInstanceSnapshotRequest(                new CreateInstanceSnapshotRequest("maiores", "quasi") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "nulla";
                                        value = "excepturi";
                                    }}),
                                    add(new Tag() {{
                                        key = "voluptatibus";
                                        value = "nostrum";
                                    }}),
                                }};
                            }};, CreateInstanceSnapshotXAmzTargetEnum.LIGHTSAIL20161128_CREATE_INSTANCE_SNAPSHOT) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "saepe";
                xAmzDate = "ea";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "veniam";
            }};            

            CreateInstanceSnapshotResponse res = sdk.sdk.createInstanceSnapshot(req);

            if (res.createInstanceSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInstances

<p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInstancesRequest;
import org.openapis.openapi.models.operations.CreateInstancesResponse;
import org.openapis.openapi.models.operations.CreateInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddOnRequest;
import org.openapis.openapi.models.shared.AddOnTypeEnum;
import org.openapis.openapi.models.shared.AutoSnapshotAddOnRequest;
import org.openapis.openapi.models.shared.CreateInstancesRequest;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopInstanceOnIdleRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateInstancesRequest req = new CreateInstancesRequest(                new CreateInstancesRequest("inventore", "magnam", "ea",                 new String[]{{
                                                add("consectetur"),
                                                add("recusandae"),
                                                add("aspernatur"),
                                                add("minima"),
                                            }}) {{
                                addOns = new org.openapis.openapi.models.shared.AddOnRequest[]{{
                                    add(new AddOnRequest(AddOnTypeEnum.STOP_INSTANCE_ON_IDLE) {{
                                        addOnType = AddOnTypeEnum.STOP_INSTANCE_ON_IDLE;
                                        autoSnapshotAddOnRequest = new AutoSnapshotAddOnRequest() {{
                                            snapshotTimeOfDay = "libero";
                                        }};
                                        stopInstanceOnIdleRequest = new StopInstanceOnIdleRequest() {{
                                            duration = "aut";
                                            threshold = "aut";
                                        }};
                                    }}),
                                }};
                                customImageName = "impedit";
                                ipAddressType = IpAddressTypeEnum.DUALSTACK;
                                keyPairName = "fugit";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "inventore";
                                        value = "non";
                                    }}),
                                    add(new Tag() {{
                                        key = "et";
                                        value = "dolorum";
                                    }}),
                                    add(new Tag() {{
                                        key = "laborum";
                                        value = "placeat";
                                    }}),
                                    add(new Tag() {{
                                        key = "velit";
                                        value = "eum";
                                    }}),
                                }};
                                userData = "autem";
                            }};, CreateInstancesXAmzTargetEnum.LIGHTSAIL20161128_CREATE_INSTANCES) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quas";
                xAmzCredential = "assumenda";
                xAmzDate = "nulla";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "quasi";
            }};            

            CreateInstancesResponse res = sdk.sdk.createInstances(req);

            if (res.createInstancesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInstancesFromSnapshot

<p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInstancesFromSnapshotRequest;
import org.openapis.openapi.models.operations.CreateInstancesFromSnapshotResponse;
import org.openapis.openapi.models.operations.CreateInstancesFromSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddOnRequest;
import org.openapis.openapi.models.shared.AddOnTypeEnum;
import org.openapis.openapi.models.shared.AutoSnapshotAddOnRequest;
import org.openapis.openapi.models.shared.CreateInstancesFromSnapshotRequest;
import org.openapis.openapi.models.shared.DiskMap;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopInstanceOnIdleRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateInstancesFromSnapshotRequest req = new CreateInstancesFromSnapshotRequest(                new CreateInstancesFromSnapshotRequest("numquam", "explicabo",                 new String[]{{
                                                add("ipsa"),
                                                add("molestiae"),
                                                add("magnam"),
                                            }}) {{
                                addOns = new org.openapis.openapi.models.shared.AddOnRequest[]{{
                                    add(new AddOnRequest(AddOnTypeEnum.STOP_INSTANCE_ON_IDLE) {{
                                        addOnType = AddOnTypeEnum.AUTO_SNAPSHOT;
                                        autoSnapshotAddOnRequest = new AutoSnapshotAddOnRequest() {{
                                            snapshotTimeOfDay = "esse";
                                        }};
                                        stopInstanceOnIdleRequest = new StopInstanceOnIdleRequest() {{
                                            duration = "esse";
                                            threshold = "rem";
                                        }};
                                    }}),
                                    add(new AddOnRequest(AddOnTypeEnum.AUTO_SNAPSHOT) {{
                                        addOnType = AddOnTypeEnum.AUTO_SNAPSHOT;
                                        autoSnapshotAddOnRequest = new AutoSnapshotAddOnRequest() {{
                                            snapshotTimeOfDay = "quidem";
                                        }};
                                        stopInstanceOnIdleRequest = new StopInstanceOnIdleRequest() {{
                                            duration = "fugiat";
                                            threshold = "ut";
                                        }};
                                    }}),
                                }};
                                attachedDiskMapping = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskMap[]>() {{
                                    put("assumenda", new org.openapis.openapi.models.shared.DiskMap[]{{
                                        add(new DiskMap() {{
                                            newDiskName = "praesentium";
                                            originalDiskPath = "quisquam";
                                        }}),
                                    }});
                                    put("veritatis", new org.openapis.openapi.models.shared.DiskMap[]{{
                                        add(new DiskMap() {{
                                            newDiskName = "id";
                                            originalDiskPath = "quidem";
                                        }}),
                                    }});
                                }};
                                instanceSnapshotName = "neque";
                                ipAddressType = IpAddressTypeEnum.IPV4;
                                keyPairName = "illum";
                                restoreDate = "quo";
                                sourceInstanceName = "fuga";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "eos";
                                        value = "voluptas";
                                    }}),
                                    add(new Tag() {{
                                        key = "ab";
                                        value = "cupiditate";
                                    }}),
                                }};
                                useLatestRestorableAutoSnapshot = false;
                                userData = "consequatur";
                            }};, CreateInstancesFromSnapshotXAmzTargetEnum.LIGHTSAIL20161128_CREATE_INSTANCES_FROM_SNAPSHOT) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsam";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "esse";
            }};            

            CreateInstancesFromSnapshotResponse res = sdk.sdk.createInstancesFromSnapshot(req);

            if (res.createInstancesFromSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createKeyPair

<p>Creates a custom SSH key pair that you can use with an Amazon Lightsail instance.</p> <note> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> action to create a Lightsail default key pair in an Amazon Web Services Region where a default key pair does not currently exist.</p> </note> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateKeyPairRequest;
import org.openapis.openapi.models.operations.CreateKeyPairResponse;
import org.openapis.openapi.models.operations.CreateKeyPairXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateKeyPairRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateKeyPairRequest req = new CreateKeyPairRequest(                new CreateKeyPairRequest("aperiam") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quod";
                                        value = "dignissimos";
                                    }}),
                                    add(new Tag() {{
                                        key = "inventore";
                                        value = "nihil";
                                    }}),
                                    add(new Tag() {{
                                        key = "totam";
                                        value = "accusamus";
                                    }}),
                                }};
                            }};, CreateKeyPairXAmzTargetEnum.LIGHTSAIL20161128_CREATE_KEY_PAIR) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "commodi";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "deserunt";
            }};            

            CreateKeyPairResponse res = sdk.sdk.createKeyPair(req);

            if (res.createKeyPairResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLoadBalancer

<p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLoadBalancerRequest;
import org.openapis.openapi.models.operations.CreateLoadBalancerResponse;
import org.openapis.openapi.models.operations.CreateLoadBalancerXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLoadBalancerRequest;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLoadBalancerRequest req = new CreateLoadBalancerRequest(                new CreateLoadBalancerRequest(35362L, "porro") {{
                                certificateAlternativeNames = new String[]{{
                                    add("quas"),
                                    add("praesentium"),
                                }};
                                certificateDomainName = "consequuntur";
                                certificateName = "deleniti";
                                healthCheckPath = "fugit";
                                ipAddressType = IpAddressTypeEnum.IPV4;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "incidunt";
                                        value = "atque";
                                    }}),
                                    add(new Tag() {{
                                        key = "explicabo";
                                        value = "minima";
                                    }}),
                                    add(new Tag() {{
                                        key = "nisi";
                                        value = "fugit";
                                    }}),
                                }};
                                tlsPolicyName = "sapiente";
                            }};, CreateLoadBalancerXAmzTargetEnum.LIGHTSAIL20161128_CREATE_LOAD_BALANCER) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "explicabo";
                xAmzDate = "saepe";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "et";
            }};            

            CreateLoadBalancerResponse res = sdk.sdk.createLoadBalancer(req);

            if (res.createLoadBalancerResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLoadBalancerTlsCertificate

<p>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLoadBalancerTlsCertificateRequest;
import org.openapis.openapi.models.operations.CreateLoadBalancerTlsCertificateResponse;
import org.openapis.openapi.models.operations.CreateLoadBalancerTlsCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLoadBalancerTlsCertificateRequest;
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

            CreateLoadBalancerTlsCertificateRequest req = new CreateLoadBalancerTlsCertificateRequest(                new CreateLoadBalancerTlsCertificateRequest("eveniet", "accusamus", "veritatis") {{
                                certificateAlternativeNames = new String[]{{
                                    add("quod"),
                                    add("nam"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "aliquid";
                                        value = "quasi";
                                    }}),
                                    add(new Tag() {{
                                        key = "saepe";
                                        value = "vel";
                                    }}),
                                    add(new Tag() {{
                                        key = "harum";
                                        value = "molestiae";
                                    }}),
                                    add(new Tag() {{
                                        key = "rerum";
                                        value = "occaecati";
                                    }}),
                                }};
                            }};, CreateLoadBalancerTlsCertificateXAmzTargetEnum.LIGHTSAIL20161128_CREATE_LOAD_BALANCER_TLS_CERTIFICATE) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "eligendi";
                xAmzDate = "sit";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "adipisci";
            }};            

            CreateLoadBalancerTlsCertificateResponse res = sdk.sdk.createLoadBalancerTlsCertificate(req);

            if (res.createLoadBalancerTlsCertificateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRelationalDatabase

<p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRelationalDatabaseRequest;
import org.openapis.openapi.models.operations.CreateRelationalDatabaseResponse;
import org.openapis.openapi.models.operations.CreateRelationalDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRelationalDatabaseRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRelationalDatabaseRequest req = new CreateRelationalDatabaseRequest(                new CreateRelationalDatabaseRequest("consequuntur", "consequatur", "minus", "quaerat", "sapiente") {{
                                availabilityZone = "consectetur";
                                masterUserPassword = "esse";
                                preferredBackupWindow = "blanditiis";
                                preferredMaintenanceWindow = "provident";
                                publiclyAccessible = false;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "nulla";
                                        value = "quas";
                                    }}),
                                    add(new Tag() {{
                                        key = "esse";
                                        value = "quasi";
                                    }}),
                                    add(new Tag() {{
                                        key = "a";
                                        value = "error";
                                    }}),
                                    add(new Tag() {{
                                        key = "sint";
                                        value = "pariatur";
                                    }}),
                                }};
                            }};, CreateRelationalDatabaseXAmzTargetEnum.LIGHTSAIL20161128_CREATE_RELATIONAL_DATABASE) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "quia";
                xAmzCredential = "eveniet";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "facere";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateRelationalDatabaseResponse res = sdk.sdk.createRelationalDatabase(req);

            if (res.createRelationalDatabaseResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRelationalDatabaseFromSnapshot

<p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRelationalDatabaseFromSnapshotRequest;
import org.openapis.openapi.models.operations.CreateRelationalDatabaseFromSnapshotResponse;
import org.openapis.openapi.models.operations.CreateRelationalDatabaseFromSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRelationalDatabaseFromSnapshotRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRelationalDatabaseFromSnapshotRequest req = new CreateRelationalDatabaseFromSnapshotRequest(                new CreateRelationalDatabaseFromSnapshotRequest("similique") {{
                                availabilityZone = "culpa";
                                publiclyAccessible = false;
                                relationalDatabaseBundleId = "aliquid";
                                relationalDatabaseSnapshotName = "tenetur";
                                restoreTime = OffsetDateTime.parse("2022-01-24T02:06:03.033Z");
                                sourceRelationalDatabaseName = "vel";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "eius";
                                        value = "libero";
                                    }}),
                                    add(new Tag() {{
                                        key = "illum";
                                        value = "soluta";
                                    }}),
                                }};
                                useLatestRestorableTime = false;
                            }};, CreateRelationalDatabaseFromSnapshotXAmzTargetEnum.LIGHTSAIL20161128_CREATE_RELATIONAL_DATABASE_FROM_SNAPSHOT) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "sapiente";
                xAmzDate = "dicta";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "ullam";
            }};            

            CreateRelationalDatabaseFromSnapshotResponse res = sdk.sdk.createRelationalDatabaseFromSnapshot(req);

            if (res.createRelationalDatabaseFromSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRelationalDatabaseSnapshot

<p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRelationalDatabaseSnapshotRequest;
import org.openapis.openapi.models.operations.CreateRelationalDatabaseSnapshotResponse;
import org.openapis.openapi.models.operations.CreateRelationalDatabaseSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRelationalDatabaseSnapshotRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRelationalDatabaseSnapshotRequest req = new CreateRelationalDatabaseSnapshotRequest(                new CreateRelationalDatabaseSnapshotRequest("aut", "voluptatum") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quibusdam";
                                        value = "ex";
                                    }}),
                                }};
                            }};, CreateRelationalDatabaseSnapshotXAmzTargetEnum.LIGHTSAIL20161128_CREATE_RELATIONAL_DATABASE_SNAPSHOT) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quasi";
            }};            

            CreateRelationalDatabaseSnapshotResponse res = sdk.sdk.createRelationalDatabaseSnapshot(req);

            if (res.createRelationalDatabaseSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAlarm

<p>Deletes an alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAlarmRequest;
import org.openapis.openapi.models.operations.DeleteAlarmResponse;
import org.openapis.openapi.models.operations.DeleteAlarmXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAlarmRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAlarmRequest req = new DeleteAlarmRequest(                new DeleteAlarmRequest("et");, DeleteAlarmXAmzTargetEnum.LIGHTSAIL20161128_DELETE_ALARM) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "minima";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "iste";
            }};            

            DeleteAlarmResponse res = sdk.sdk.deleteAlarm(req);

            if (res.deleteAlarmResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAutoSnapshot

Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAutoSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteAutoSnapshotResponse;
import org.openapis.openapi.models.operations.DeleteAutoSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAutoSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAutoSnapshotRequest req = new DeleteAutoSnapshotRequest(                new DeleteAutoSnapshotRequest("accusantium", "rem");, DeleteAutoSnapshotXAmzTargetEnum.LIGHTSAIL20161128_DELETE_AUTO_SNAPSHOT) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "eum";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ab";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "non";
            }};            

            DeleteAutoSnapshotResponse res = sdk.sdk.deleteAutoSnapshot(req);

            if (res.deleteAutoSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBucket

<p>Deletes a Amazon Lightsail bucket.</p> <note> <p>When you delete your bucket, the bucket name is released and can be reused for a new bucket in your account or another Amazon Web Services account.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBucketRequest;
import org.openapis.openapi.models.operations.DeleteBucketResponse;
import org.openapis.openapi.models.operations.DeleteBucketXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBucketRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBucketRequest req = new DeleteBucketRequest(                new DeleteBucketRequest("dolor") {{
                                forceDelete = false;
                            }};, DeleteBucketXAmzTargetEnum.LIGHTSAIL20161128_DELETE_BUCKET) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "impedit";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "dignissimos";
            }};            

            DeleteBucketResponse res = sdk.sdk.deleteBucket(req);

            if (res.deleteBucketResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBucketAccessKey

<p>Deletes an access key for the specified Amazon Lightsail bucket.</p> <p>We recommend that you delete an access key if the secret access key is compromised.</p> <p>For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBucketAccessKeyRequest;
import org.openapis.openapi.models.operations.DeleteBucketAccessKeyResponse;
import org.openapis.openapi.models.operations.DeleteBucketAccessKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBucketAccessKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBucketAccessKeyRequest req = new DeleteBucketAccessKeyRequest(                new DeleteBucketAccessKeyRequest("maiores", "natus");, DeleteBucketAccessKeyXAmzTargetEnum.LIGHTSAIL20161128_DELETE_BUCKET_ACCESS_KEY) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quaerat";
            }};            

            DeleteBucketAccessKeyResponse res = sdk.sdk.deleteBucketAccessKey(req);

            if (res.deleteBucketAccessKeyResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCertificate

<p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Certificates that are currently attached to a distribution cannot be deleted. Use the <code>DetachCertificateFromDistribution</code> action to detach a certificate from a distribution.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCertificateRequest;
import org.openapis.openapi.models.operations.DeleteCertificateResponse;
import org.openapis.openapi.models.operations.DeleteCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCertificateRequest req = new DeleteCertificateRequest(                new DeleteCertificateRequest("repellendus");, DeleteCertificateXAmzTargetEnum.LIGHTSAIL20161128_DELETE_CERTIFICATE) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "dignissimos";
                xAmzDate = "officia";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quae";
            }};            

            DeleteCertificateResponse res = sdk.sdk.deleteCertificate(req);

            if (res.deleteCertificateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContactMethod

<p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContactMethodRequest;
import org.openapis.openapi.models.operations.DeleteContactMethodResponse;
import org.openapis.openapi.models.operations.DeleteContactMethodXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContactProtocolEnum;
import org.openapis.openapi.models.shared.DeleteContactMethodRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteContactMethodRequest req = new DeleteContactMethodRequest(                new DeleteContactMethodRequest(ContactProtocolEnum.SMS);, DeleteContactMethodXAmzTargetEnum.LIGHTSAIL20161128_DELETE_CONTACT_METHOD) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "labore";
                xAmzCredential = "ab";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "id";
                xAmzSignedHeaders = "suscipit";
            }};            

            DeleteContactMethodResponse res = sdk.sdk.deleteContactMethod(req);

            if (res.deleteContactMethodResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContainerImage

Deletes a container image that is registered to your Amazon Lightsail container service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContainerImageRequest;
import org.openapis.openapi.models.operations.DeleteContainerImageResponse;
import org.openapis.openapi.models.operations.DeleteContainerImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteContainerImageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteContainerImageRequest req = new DeleteContainerImageRequest(                new DeleteContainerImageRequest("culpa", "est");, DeleteContainerImageXAmzTargetEnum.LIGHTSAIL20161128_DELETE_CONTAINER_IMAGE) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "totam";
                xAmzCredential = "fugiat";
                xAmzDate = "vel";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "vel";
            }};            

            DeleteContainerImageResponse res = sdk.sdk.deleteContainerImage(req);

            if (res.deleteContainerImageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContainerService

Deletes your Amazon Lightsail container service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContainerServiceRequest;
import org.openapis.openapi.models.operations.DeleteContainerServiceResponse;
import org.openapis.openapi.models.operations.DeleteContainerServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteContainerServiceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteContainerServiceRequest req = new DeleteContainerServiceRequest(                new DeleteContainerServiceRequest("possimus");, DeleteContainerServiceXAmzTargetEnum.LIGHTSAIL20161128_DELETE_CONTAINER_SERVICE) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cum";
                xAmzCredential = "commodi";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "assumenda";
            }};            

            DeleteContainerServiceResponse res = sdk.sdk.deleteContainerService(req);

            if (res.deleteContainerServiceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDisk

<p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDiskRequest;
import org.openapis.openapi.models.operations.DeleteDiskResponse;
import org.openapis.openapi.models.operations.DeleteDiskXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDiskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDiskRequest req = new DeleteDiskRequest(                new DeleteDiskRequest("recusandae") {{
                                forceDeleteAddOns = false;
                            }};, DeleteDiskXAmzTargetEnum.LIGHTSAIL20161128_DELETE_DISK) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "cum";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "in";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "earum";
            }};            

            DeleteDiskResponse res = sdk.sdk.deleteDisk(req);

            if (res.deleteDiskResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDiskSnapshot

<p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDiskSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteDiskSnapshotResponse;
import org.openapis.openapi.models.operations.DeleteDiskSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDiskSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDiskSnapshotRequest req = new DeleteDiskSnapshotRequest(                new DeleteDiskSnapshotRequest("numquam");, DeleteDiskSnapshotXAmzTargetEnum.LIGHTSAIL20161128_DELETE_DISK_SNAPSHOT) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "reiciendis";
                xAmzDate = "quidem";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "dolore";
            }};            

            DeleteDiskSnapshotResponse res = sdk.sdk.deleteDiskSnapshot(req);

            if (res.deleteDiskSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDistribution

Deletes your Amazon Lightsail content delivery network (CDN) distribution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDistributionRequest;
import org.openapis.openapi.models.operations.DeleteDistributionResponse;
import org.openapis.openapi.models.operations.DeleteDistributionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDistributionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDistributionRequest req = new DeleteDistributionRequest(                new DeleteDistributionRequest() {{
                                distributionName = "asperiores";
                            }};, DeleteDistributionXAmzTargetEnum.LIGHTSAIL20161128_DELETE_DISTRIBUTION) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "non";
                xAmzCredential = "amet";
                xAmzDate = "beatae";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "a";
                xAmzSignedHeaders = "debitis";
            }};            

            DeleteDistributionResponse res = sdk.sdk.deleteDistribution(req);

            if (res.deleteDistributionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDomain

<p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDomainRequest;
import org.openapis.openapi.models.operations.DeleteDomainResponse;
import org.openapis.openapi.models.operations.DeleteDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDomainRequest req = new DeleteDomainRequest(                new DeleteDomainRequest("corporis");, DeleteDomainXAmzTargetEnum.LIGHTSAIL20161128_DELETE_DOMAIN) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "ipsa";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "libero";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "accusamus";
            }};            

            DeleteDomainResponse res = sdk.sdk.deleteDomain(req);

            if (res.deleteDomainResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDomainEntry

<p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDomainEntryRequest;
import org.openapis.openapi.models.operations.DeleteDomainEntryResponse;
import org.openapis.openapi.models.operations.DeleteDomainEntryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDomainEntryRequest;
import org.openapis.openapi.models.shared.DomainEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDomainEntryRequest req = new DeleteDomainEntryRequest(                new DeleteDomainEntryRequest(                new DomainEntry() {{
                                                id = "426555ba-3c28-4744-ad53-b88f3a8d8f5c";
                                                isAlias = false;
                                                name = "Luz Cormier";
                                                options = new java.util.HashMap<String, String>() {{
                                                    put("facilis", "voluptate");
                                                    put("expedita", "ab");
                                                    put("iste", "dolore");
                                                    put("laborum", "sed");
                                                }};
                                                target = "in";
                                                type = "commodi";
                                            }};, "quidem");, DeleteDomainEntryXAmzTargetEnum.LIGHTSAIL20161128_DELETE_DOMAIN_ENTRY) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "unde";
                xAmzDate = "architecto";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "debitis";
            }};            

            DeleteDomainEntryResponse res = sdk.sdk.deleteDomainEntry(req);

            if (res.deleteDomainEntryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInstance

<p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInstanceRequest;
import org.openapis.openapi.models.operations.DeleteInstanceResponse;
import org.openapis.openapi.models.operations.DeleteInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInstanceRequest req = new DeleteInstanceRequest(                new DeleteInstanceRequest("reiciendis") {{
                                forceDeleteAddOns = false;
                            }};, DeleteInstanceXAmzTargetEnum.LIGHTSAIL20161128_DELETE_INSTANCE) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "maiores";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "sed";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "eius";
            }};            

            DeleteInstanceResponse res = sdk.sdk.deleteInstance(req);

            if (res.deleteInstanceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInstanceSnapshot

<p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInstanceSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteInstanceSnapshotResponse;
import org.openapis.openapi.models.operations.DeleteInstanceSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteInstanceSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInstanceSnapshotRequest req = new DeleteInstanceSnapshotRequest(                new DeleteInstanceSnapshotRequest("ipsum");, DeleteInstanceSnapshotXAmzTargetEnum.LIGHTSAIL20161128_DELETE_INSTANCE_SNAPSHOT) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "quos";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "voluptate";
            }};            

            DeleteInstanceSnapshotResponse res = sdk.sdk.deleteInstanceSnapshot(req);

            if (res.deleteInstanceSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteKeyPair

<p>Deletes the specified key pair by removing the public key from Amazon Lightsail.</p> <p>You can delete key pairs that were created using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html">ImportKeyPair</a> and <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html">CreateKeyPair</a> actions, as well as the Lightsail default key pair. A new default key pair will not be created unless you launch an instance without specifying a custom key pair, or you call the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> API. </p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKeyPairRequest;
import org.openapis.openapi.models.operations.DeleteKeyPairResponse;
import org.openapis.openapi.models.operations.DeleteKeyPairXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteKeyPairRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteKeyPairRequest req = new DeleteKeyPairRequest(                new DeleteKeyPairRequest("ex") {{
                                expectedFingerprint = "sit";
                            }};, DeleteKeyPairXAmzTargetEnum.LIGHTSAIL20161128_DELETE_KEY_PAIR) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "praesentium";
                xAmzDate = "facilis";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeleteKeyPairResponse res = sdk.sdk.deleteKeyPair(req);

            if (res.deleteKeyPairResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteKnownHostKeys

<p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKnownHostKeysRequest;
import org.openapis.openapi.models.operations.DeleteKnownHostKeysResponse;
import org.openapis.openapi.models.operations.DeleteKnownHostKeysXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteKnownHostKeysRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteKnownHostKeysRequest req = new DeleteKnownHostKeysRequest(                new DeleteKnownHostKeysRequest("rem");, DeleteKnownHostKeysXAmzTargetEnum.LIGHTSAIL20161128_DELETE_KNOWN_HOST_KEYS) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "error";
                xAmzDate = "veniam";
                xAmzSecurityToken = "minima";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DeleteKnownHostKeysResponse res = sdk.sdk.deleteKnownHostKeys(req);

            if (res.deleteKnownHostKeysResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLoadBalancer

<p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLoadBalancerRequest;
import org.openapis.openapi.models.operations.DeleteLoadBalancerResponse;
import org.openapis.openapi.models.operations.DeleteLoadBalancerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLoadBalancerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLoadBalancerRequest req = new DeleteLoadBalancerRequest(                new DeleteLoadBalancerRequest("magni");, DeleteLoadBalancerXAmzTargetEnum.LIGHTSAIL20161128_DELETE_LOAD_BALANCER) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "numquam";
                xAmzDate = "veniam";
                xAmzSecurityToken = "in";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "beatae";
            }};            

            DeleteLoadBalancerResponse res = sdk.sdk.deleteLoadBalancer(req);

            if (res.deleteLoadBalancerResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLoadBalancerTlsCertificate

<p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLoadBalancerTlsCertificateRequest;
import org.openapis.openapi.models.operations.DeleteLoadBalancerTlsCertificateResponse;
import org.openapis.openapi.models.operations.DeleteLoadBalancerTlsCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLoadBalancerTlsCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLoadBalancerTlsCertificateRequest req = new DeleteLoadBalancerTlsCertificateRequest(                new DeleteLoadBalancerTlsCertificateRequest("exercitationem", "praesentium") {{
                                force = false;
                            }};, DeleteLoadBalancerTlsCertificateXAmzTargetEnum.LIGHTSAIL20161128_DELETE_LOAD_BALANCER_TLS_CERTIFICATE) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "dolorum";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "error";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "expedita";
            }};            

            DeleteLoadBalancerTlsCertificateResponse res = sdk.sdk.deleteLoadBalancerTlsCertificate(req);

            if (res.deleteLoadBalancerTlsCertificateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRelationalDatabase

<p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRelationalDatabaseRequest;
import org.openapis.openapi.models.operations.DeleteRelationalDatabaseResponse;
import org.openapis.openapi.models.operations.DeleteRelationalDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRelationalDatabaseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRelationalDatabaseRequest req = new DeleteRelationalDatabaseRequest(                new DeleteRelationalDatabaseRequest("neque") {{
                                finalRelationalDatabaseSnapshotName = "dolorum";
                                skipFinalSnapshot = false;
                            }};, DeleteRelationalDatabaseXAmzTargetEnum.LIGHTSAIL20161128_DELETE_RELATIONAL_DATABASE) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolorum";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "atque";
            }};            

            DeleteRelationalDatabaseResponse res = sdk.sdk.deleteRelationalDatabase(req);

            if (res.deleteRelationalDatabaseResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRelationalDatabaseSnapshot

<p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRelationalDatabaseSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteRelationalDatabaseSnapshotResponse;
import org.openapis.openapi.models.operations.DeleteRelationalDatabaseSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRelationalDatabaseSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRelationalDatabaseSnapshotRequest req = new DeleteRelationalDatabaseSnapshotRequest(                new DeleteRelationalDatabaseSnapshotRequest("ut");, DeleteRelationalDatabaseSnapshotXAmzTargetEnum.LIGHTSAIL20161128_DELETE_RELATIONAL_DATABASE_SNAPSHOT) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "culpa";
                xAmzDate = "expedita";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "esse";
            }};            

            DeleteRelationalDatabaseSnapshotResponse res = sdk.sdk.deleteRelationalDatabaseSnapshot(req);

            if (res.deleteRelationalDatabaseSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detachCertificateFromDistribution

<p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is detached, your distribution stops accepting traffic for all of the domains that are associated with the certificate.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetachCertificateFromDistributionRequest;
import org.openapis.openapi.models.operations.DetachCertificateFromDistributionResponse;
import org.openapis.openapi.models.operations.DetachCertificateFromDistributionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetachCertificateFromDistributionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachCertificateFromDistributionRequest req = new DetachCertificateFromDistributionRequest(                new DetachCertificateFromDistributionRequest("sit");, DetachCertificateFromDistributionXAmzTargetEnum.LIGHTSAIL20161128_DETACH_CERTIFICATE_FROM_DISTRIBUTION) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "quas";
                xAmzCredential = "repudiandae";
                xAmzDate = "corporis";
                xAmzSecurityToken = "et";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "ex";
            }};            

            DetachCertificateFromDistributionResponse res = sdk.sdk.detachCertificateFromDistribution(req);

            if (res.detachCertificateFromDistributionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detachDisk

<p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetachDiskRequest;
import org.openapis.openapi.models.operations.DetachDiskResponse;
import org.openapis.openapi.models.operations.DetachDiskXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetachDiskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachDiskRequest req = new DetachDiskRequest(                new DetachDiskRequest("sit");, DetachDiskXAmzTargetEnum.LIGHTSAIL20161128_DETACH_DISK) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "saepe";
                xAmzDate = "error";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DetachDiskResponse res = sdk.sdk.detachDisk(req);

            if (res.detachDiskResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detachInstancesFromLoadBalancer

<p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetachInstancesFromLoadBalancerRequest;
import org.openapis.openapi.models.operations.DetachInstancesFromLoadBalancerResponse;
import org.openapis.openapi.models.operations.DetachInstancesFromLoadBalancerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetachInstancesFromLoadBalancerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachInstancesFromLoadBalancerRequest req = new DetachInstancesFromLoadBalancerRequest(                new DetachInstancesFromLoadBalancerRequest(                new String[]{{
                                                add("dicta"),
                                                add("architecto"),
                                                add("occaecati"),
                                            }}, "labore");, DetachInstancesFromLoadBalancerXAmzTargetEnum.LIGHTSAIL20161128_DETACH_INSTANCES_FROM_LOAD_BALANCER) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "atque";
                xAmzCredential = "laborum";
                xAmzDate = "nam";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "alias";
            }};            

            DetachInstancesFromLoadBalancerResponse res = sdk.sdk.detachInstancesFromLoadBalancer(req);

            if (res.detachInstancesFromLoadBalancerResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detachStaticIp

Detaches a static IP from the Amazon Lightsail instance to which it is attached.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetachStaticIpRequest;
import org.openapis.openapi.models.operations.DetachStaticIpResponse;
import org.openapis.openapi.models.operations.DetachStaticIpXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetachStaticIpRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachStaticIpRequest req = new DetachStaticIpRequest(                new DetachStaticIpRequest("deserunt");, DetachStaticIpXAmzTargetEnum.LIGHTSAIL20161128_DETACH_STATIC_IP) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "unde";
                xAmzCredential = "reiciendis";
                xAmzDate = "provident";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "voluptates";
            }};            

            DetachStaticIpResponse res = sdk.sdk.detachStaticIp(req);

            if (res.detachStaticIpResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableAddOn

Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableAddOnRequest;
import org.openapis.openapi.models.operations.DisableAddOnResponse;
import org.openapis.openapi.models.operations.DisableAddOnXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddOnTypeEnum;
import org.openapis.openapi.models.shared.DisableAddOnRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableAddOnRequest req = new DisableAddOnRequest(                new DisableAddOnRequest(AddOnTypeEnum.STOP_INSTANCE_ON_IDLE, "quidem");, DisableAddOnXAmzTargetEnum.LIGHTSAIL20161128_DISABLE_ADD_ON) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "facere";
                xAmzCredential = "fuga";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "voluptatem";
            }};            

            DisableAddOnResponse res = sdk.sdk.disableAddOn(req);

            if (res.disableAddOnResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadDefaultKeyPair

<p>Downloads the regional Amazon Lightsail default key pair.</p> <p>This action also creates a Lightsail default key pair if a default key pair does not currently exist in the Amazon Web Services Region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadDefaultKeyPairRequest;
import org.openapis.openapi.models.operations.DownloadDefaultKeyPairResponse;
import org.openapis.openapi.models.operations.DownloadDefaultKeyPairXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DownloadDefaultKeyPairRequest req = new DownloadDefaultKeyPairRequest(                new java.util.HashMap<String, Object>() {{
                                put("quasi", "atque");
                                put("reprehenderit", "asperiores");
                                put("totam", "suscipit");
                                put("quidem", "maxime");
                            }}, DownloadDefaultKeyPairXAmzTargetEnum.LIGHTSAIL20161128_DOWNLOAD_DEFAULT_KEY_PAIR) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "esse";
                xAmzCredential = "amet";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ea";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "error";
            }};            

            DownloadDefaultKeyPairResponse res = sdk.sdk.downloadDefaultKeyPair(req);

            if (res.downloadDefaultKeyPairResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableAddOn

Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableAddOnRequest;
import org.openapis.openapi.models.operations.EnableAddOnResponse;
import org.openapis.openapi.models.operations.EnableAddOnXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddOnRequest;
import org.openapis.openapi.models.shared.AddOnTypeEnum;
import org.openapis.openapi.models.shared.AutoSnapshotAddOnRequest;
import org.openapis.openapi.models.shared.EnableAddOnRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopInstanceOnIdleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableAddOnRequest req = new EnableAddOnRequest(                new EnableAddOnRequest(                new AddOnRequest(AddOnTypeEnum.STOP_INSTANCE_ON_IDLE) {{
                                                autoSnapshotAddOnRequest = new AutoSnapshotAddOnRequest() {{
                                                    snapshotTimeOfDay = "accusamus";
                                                }};;
                                                stopInstanceOnIdleRequest = new StopInstanceOnIdleRequest() {{
                                                    duration = "natus";
                                                    threshold = "minima";
                                                }};;
                                            }};, "aspernatur");, EnableAddOnXAmzTargetEnum.LIGHTSAIL20161128_ENABLE_ADD_ON) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "corrupti";
                xAmzDate = "at";
                xAmzSecurityToken = "error";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "suscipit";
            }};            

            EnableAddOnResponse res = sdk.sdk.enableAddOn(req);

            if (res.enableAddOnResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportSnapshot

<p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSnapshotRequest;
import org.openapis.openapi.models.operations.ExportSnapshotResponse;
import org.openapis.openapi.models.operations.ExportSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExportSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportSnapshotRequest req = new ExportSnapshotRequest(                new ExportSnapshotRequest("atque");, ExportSnapshotXAmzTargetEnum.LIGHTSAIL20161128_EXPORT_SNAPSHOT) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "recusandae";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "reiciendis";
            }};            

            ExportSnapshotResponse res = sdk.sdk.exportSnapshot(req);

            if (res.exportSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActiveNames

Returns the names of all active (not deleted) resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActiveNamesRequest;
import org.openapis.openapi.models.operations.GetActiveNamesResponse;
import org.openapis.openapi.models.operations.GetActiveNamesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetActiveNamesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetActiveNamesRequest req = new GetActiveNamesRequest(                new GetActiveNamesRequest() {{
                                pageToken = "repudiandae";
                            }};, GetActiveNamesXAmzTargetEnum.LIGHTSAIL20161128_GET_ACTIVE_NAMES) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "beatae";
                xAmzDate = "dolores";
                xAmzSecurityToken = "enim";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "velit";
            }};            

            GetActiveNamesResponse res = sdk.sdk.getActiveNames(req);

            if (res.getActiveNamesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAlarms

<p>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAlarmsRequest;
import org.openapis.openapi.models.operations.GetAlarmsResponse;
import org.openapis.openapi.models.operations.GetAlarmsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAlarmsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAlarmsRequest req = new GetAlarmsRequest(                new GetAlarmsRequest() {{
                                alarmName = "molestias";
                                monitoredResourceName = "magnam";
                                pageToken = "saepe";
                            }};, GetAlarmsXAmzTargetEnum.LIGHTSAIL20161128_GET_ALARMS) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "officiis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "in";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "eveniet";
            }};            

            GetAlarmsResponse res = sdk.sdk.getAlarms(req);

            if (res.getAlarmsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutoSnapshots

Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutoSnapshotsRequest;
import org.openapis.openapi.models.operations.GetAutoSnapshotsResponse;
import org.openapis.openapi.models.operations.GetAutoSnapshotsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAutoSnapshotsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAutoSnapshotsRequest req = new GetAutoSnapshotsRequest(                new GetAutoSnapshotsRequest("consequuntur");, GetAutoSnapshotsXAmzTargetEnum.LIGHTSAIL20161128_GET_AUTO_SNAPSHOTS) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "id";
                xAmzCredential = "quis";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "error";
                xAmzSignature = "illo";
                xAmzSignedHeaders = "corporis";
            }};            

            GetAutoSnapshotsResponse res = sdk.sdk.getAutoSnapshots(req);

            if (res.getAutoSnapshotsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlueprints

<p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlueprintsRequest;
import org.openapis.openapi.models.operations.GetBlueprintsResponse;
import org.openapis.openapi.models.operations.GetBlueprintsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AppCategoryEnum;
import org.openapis.openapi.models.shared.GetBlueprintsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBlueprintsRequest req = new GetBlueprintsRequest(                new GetBlueprintsRequest() {{
                                appCategory = AppCategoryEnum.LF_R;
                                includeInactive = false;
                                pageToken = "eveniet";
                            }};, GetBlueprintsXAmzTargetEnum.LIGHTSAIL20161128_GET_BLUEPRINTS) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "vero";
                xAmzCredential = "doloremque";
                xAmzDate = "iure";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "quae";
            }};            

            GetBlueprintsResponse res = sdk.sdk.getBlueprints(req);

            if (res.getBlueprintsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBucketAccessKeys

<p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p> <important> <p>This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If you lose the secret access key, you must create a new access key.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBucketAccessKeysRequest;
import org.openapis.openapi.models.operations.GetBucketAccessKeysResponse;
import org.openapis.openapi.models.operations.GetBucketAccessKeysXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetBucketAccessKeysRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBucketAccessKeysRequest req = new GetBucketAccessKeysRequest(                new GetBucketAccessKeysRequest("eveniet");, GetBucketAccessKeysXAmzTargetEnum.LIGHTSAIL20161128_GET_BUCKET_ACCESS_KEYS) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "cum";
                xAmzCredential = "iure";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "distinctio";
            }};            

            GetBucketAccessKeysResponse res = sdk.sdk.getBucketAccessKeys(req);

            if (res.getBucketAccessKeysResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBucketBundles

<p>Returns the bundles that you can apply to a Amazon Lightsail bucket.</p> <p>The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to update the bundle for a bucket.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBucketBundlesRequest;
import org.openapis.openapi.models.operations.GetBucketBundlesResponse;
import org.openapis.openapi.models.operations.GetBucketBundlesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetBucketBundlesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBucketBundlesRequest req = new GetBucketBundlesRequest(                new GetBucketBundlesRequest() {{
                                includeInactive = false;
                            }};, GetBucketBundlesXAmzTargetEnum.LIGHTSAIL20161128_GET_BUCKET_BUNDLES) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "ad";
                xAmzDate = "repellat";
                xAmzSecurityToken = "alias";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            GetBucketBundlesResponse res = sdk.sdk.getBucketBundles(req);

            if (res.getBucketBundlesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBucketMetricData

<p>Returns the data points of a specific metric for an Amazon Lightsail bucket.</p> <p>Metrics report the utilization of a bucket. View and collect metric data regularly to monitor the number of objects stored in a bucket (including object versions) and the storage space used by those objects.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBucketMetricDataRequest;
import org.openapis.openapi.models.operations.GetBucketMetricDataResponse;
import org.openapis.openapi.models.operations.GetBucketMetricDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.BucketMetricNameEnum;
import org.openapis.openapi.models.shared.GetBucketMetricDataRequest;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.MetricUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBucketMetricDataRequest req = new GetBucketMetricDataRequest(                new GetBucketMetricDataRequest("mollitia", OffsetDateTime.parse("2022-12-30T02:32:19.151Z"), BucketMetricNameEnum.NUMBER_OF_OBJECTS, 970222L, OffsetDateTime.parse("2022-05-03T16:31:59.395Z"),                 new org.openapis.openapi.models.shared.MetricStatisticEnum[]{{
                                                add(MetricStatisticEnum.MAXIMUM),
                                                add(MetricStatisticEnum.AVERAGE),
                                            }}, MetricUnitEnum.MEGABYTES);, GetBucketMetricDataXAmzTargetEnum.LIGHTSAIL20161128_GET_BUCKET_METRIC_DATA) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "ut";
            }};            

            GetBucketMetricDataResponse res = sdk.sdk.getBucketMetricData(req);

            if (res.getBucketMetricDataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBuckets

<p>Returns information about one or more Amazon Lightsail buckets. The information returned includes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access feature for your Lightsail buckets.</p> <p>For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBucketsRequest;
import org.openapis.openapi.models.operations.GetBucketsResponse;
import org.openapis.openapi.models.operations.GetBucketsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetBucketsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBucketsRequest req = new GetBucketsRequest(                new GetBucketsRequest() {{
                                bucketName = "adipisci";
                                includeConnectedResources = false;
                                pageToken = "debitis";
                            }};, GetBucketsXAmzTargetEnum.LIGHTSAIL20161128_GET_BUCKETS) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "eum";
                xAmzCredential = "nemo";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "esse";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quis";
            }};            

            GetBucketsResponse res = sdk.sdk.getBuckets(req);

            if (res.getBucketsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBundles

<p>Returns the bundles that you can apply to an Amazon Lightsail instance when you create it.</p> <p>A bundle describes the specifications of an instance, such as the monthly cost, amount of memory, the number of vCPUs, amount of storage space, and monthly network data transfer quota.</p> <note> <p>Bundles are referred to as <i>instance plans</i> in the Lightsail console.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBundlesRequest;
import org.openapis.openapi.models.operations.GetBundlesResponse;
import org.openapis.openapi.models.operations.GetBundlesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AppCategoryEnum;
import org.openapis.openapi.models.shared.GetBundlesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBundlesRequest req = new GetBundlesRequest(                new GetBundlesRequest() {{
                                appCategory = AppCategoryEnum.LF_R;
                                includeInactive = false;
                                pageToken = "reiciendis";
                            }};, GetBundlesXAmzTargetEnum.LIGHTSAIL20161128_GET_BUNDLES) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "ullam";
                xAmzDate = "quasi";
                xAmzSecurityToken = "animi";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "mollitia";
            }};            

            GetBundlesResponse res = sdk.sdk.getBundles(req);

            if (res.getBundlesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCertificates

<p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p> <note> <p>To get a summary of a certificate, ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificatesRequest;
import org.openapis.openapi.models.operations.GetCertificatesResponse;
import org.openapis.openapi.models.operations.GetCertificatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.CertificateStatusEnum;
import org.openapis.openapi.models.shared.GetCertificatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCertificatesRequest req = new GetCertificatesRequest(                new GetCertificatesRequest() {{
                                certificateName = "possimus";
                                certificateStatuses = new org.openapis.openapi.models.shared.CertificateStatusEnum[]{{
                                    add(CertificateStatusEnum.INACTIVE),
                                    add(CertificateStatusEnum.INACTIVE),
                                    add(CertificateStatusEnum.PENDING_VALIDATION),
                                }};
                                includeCertificateDetails = false;
                            }};, GetCertificatesXAmzTargetEnum.LIGHTSAIL20161128_GET_CERTIFICATES) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "ullam";
                xAmzDate = "in";
                xAmzSecurityToken = "nam";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "officia";
            }};            

            GetCertificatesResponse res = sdk.sdk.getCertificates(req);

            if (res.getCertificatesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCloudFormationStackRecords

<p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCloudFormationStackRecordsRequest;
import org.openapis.openapi.models.operations.GetCloudFormationStackRecordsResponse;
import org.openapis.openapi.models.operations.GetCloudFormationStackRecordsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCloudFormationStackRecordsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCloudFormationStackRecordsRequest req = new GetCloudFormationStackRecordsRequest(                new GetCloudFormationStackRecordsRequest() {{
                                pageToken = "placeat";
                            }};, GetCloudFormationStackRecordsXAmzTargetEnum.LIGHTSAIL20161128_GET_CLOUD_FORMATION_STACK_RECORDS) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "molestias";
                xAmzDate = "officiis";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "vitae";
            }};            

            GetCloudFormationStackRecordsResponse res = sdk.sdk.getCloudFormationStackRecords(req);

            if (res.getCloudFormationStackRecordsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContactMethods

<p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactMethodsRequest;
import org.openapis.openapi.models.operations.GetContactMethodsResponse;
import org.openapis.openapi.models.operations.GetContactMethodsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContactProtocolEnum;
import org.openapis.openapi.models.shared.GetContactMethodsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContactMethodsRequest req = new GetContactMethodsRequest(                new GetContactMethodsRequest() {{
                                protocols = new org.openapis.openapi.models.shared.ContactProtocolEnum[]{{
                                    add(ContactProtocolEnum.EMAIL),
                                    add(ContactProtocolEnum.EMAIL),
                                }};
                            }};, GetContactMethodsXAmzTargetEnum.LIGHTSAIL20161128_GET_CONTACT_METHODS) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "quae";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "velit";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "eum";
            }};            

            GetContactMethodsResponse res = sdk.sdk.getContactMethods(req);

            if (res.getContactMethodsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainerAPIMetadata

Returns information about Amazon Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainerAPIMetadataRequest;
import org.openapis.openapi.models.operations.GetContainerAPIMetadataResponse;
import org.openapis.openapi.models.operations.GetContainerAPIMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContainerAPIMetadataRequest req = new GetContainerAPIMetadataRequest(                new java.util.HashMap<String, Object>() {{
                                put("at", "impedit");
                                put("eos", "sapiente");
                                put("eum", "dicta");
                            }}, GetContainerAPIMetadataXAmzTargetEnum.LIGHTSAIL20161128_GET_CONTAINER_API_METADATA) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "cupiditate";
                xAmzDate = "provident";
                xAmzSecurityToken = "earum";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "hic";
            }};            

            GetContainerAPIMetadataResponse res = sdk.sdk.getContainerAPIMetadata(req);

            if (res.getContainerAPIMetadataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainerImages

<p>Returns the container images that are registered to your Amazon Lightsail container service.</p> <note> <p>If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainerImagesRequest;
import org.openapis.openapi.models.operations.GetContainerImagesResponse;
import org.openapis.openapi.models.operations.GetContainerImagesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetContainerImagesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContainerImagesRequest req = new GetContainerImagesRequest(                new GetContainerImagesRequest("eaque");, GetContainerImagesXAmzTargetEnum.LIGHTSAIL20161128_GET_CONTAINER_IMAGES) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "maiores";
                xAmzDate = "debitis";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "suscipit";
            }};            

            GetContainerImagesResponse res = sdk.sdk.getContainerImages(req);

            if (res.getContainerImagesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainerLog

<p>Returns the log events of a container of your Amazon Lightsail container service.</p> <p>If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service.</p> <note> <p>Container logs are retained for a certain amount of time. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainerLogRequest;
import org.openapis.openapi.models.operations.GetContainerLogResponse;
import org.openapis.openapi.models.operations.GetContainerLogXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetContainerLogRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContainerLogRequest req = new GetContainerLogRequest(                new GetContainerLogRequest("fugit", "cumque") {{
                                endTime = OffsetDateTime.parse("2022-08-15T23:37:19.342Z");
                                filterPattern = "animi";
                                pageToken = "necessitatibus";
                                startTime = OffsetDateTime.parse("2022-12-22T05:17:09.936Z");
                            }};, GetContainerLogXAmzTargetEnum.LIGHTSAIL20161128_GET_CONTAINER_LOG) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "et";
                xAmzCredential = "ducimus";
                xAmzDate = "natus";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "adipisci";
            }};            

            GetContainerLogResponse res = sdk.sdk.getContainerLog(req);

            if (res.getContainerLogResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainerServiceDeployments

<p>Returns the deployments for your Amazon Lightsail container service</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> <p>The deployments are ordered by version in ascending order. The newest version is listed at the top of the response.</p> <note> <p>A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainerServiceDeploymentsRequest;
import org.openapis.openapi.models.operations.GetContainerServiceDeploymentsResponse;
import org.openapis.openapi.models.operations.GetContainerServiceDeploymentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetContainerServiceDeploymentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContainerServiceDeploymentsRequest req = new GetContainerServiceDeploymentsRequest(                new GetContainerServiceDeploymentsRequest("magni");, GetContainerServiceDeploymentsXAmzTargetEnum.LIGHTSAIL20161128_GET_CONTAINER_SERVICE_DEPLOYMENTS) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "necessitatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "molestiae";
            }};            

            GetContainerServiceDeploymentsResponse res = sdk.sdk.getContainerServiceDeployments(req);

            if (res.getContainerServiceDeploymentsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainerServiceMetricData

<p>Returns the data points of a specific metric of your Amazon Lightsail container service.</p> <p>Metrics report the utilization of your resources. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainerServiceMetricDataRequest;
import org.openapis.openapi.models.operations.GetContainerServiceMetricDataResponse;
import org.openapis.openapi.models.operations.GetContainerServiceMetricDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContainerServiceMetricNameEnum;
import org.openapis.openapi.models.shared.GetContainerServiceMetricDataRequest;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContainerServiceMetricDataRequest req = new GetContainerServiceMetricDataRequest(                new GetContainerServiceMetricDataRequest(OffsetDateTime.parse("2022-07-18T04:09:54.465Z"), ContainerServiceMetricNameEnum.MEMORY_UTILIZATION, 979963L, "reiciendis", OffsetDateTime.parse("2022-11-25T12:21:47.459Z"),                 new org.openapis.openapi.models.shared.MetricStatisticEnum[]{{
                                                add(MetricStatisticEnum.MINIMUM),
                                                add(MetricStatisticEnum.MINIMUM),
                                                add(MetricStatisticEnum.SUM),
                                                add(MetricStatisticEnum.MAXIMUM),
                                            }});, GetContainerServiceMetricDataXAmzTargetEnum.LIGHTSAIL20161128_GET_CONTAINER_SERVICE_METRIC_DATA) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ex";
                xAmzCredential = "consectetur";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "sunt";
            }};            

            GetContainerServiceMetricDataResponse res = sdk.sdk.getContainerServiceMetricData(req);

            if (res.getContainerServiceMetricDataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainerServicePowers

<p>Returns the list of powers that can be specified for your Amazon Lightsail container services.</p> <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainerServicePowersRequest;
import org.openapis.openapi.models.operations.GetContainerServicePowersResponse;
import org.openapis.openapi.models.operations.GetContainerServicePowersXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContainerServicePowersRequest req = new GetContainerServicePowersRequest(                new java.util.HashMap<String, Object>() {{
                                put("expedita", "aliquid");
                                put("officia", "suscipit");
                                put("aliquid", "perferendis");
                                put("eum", "voluptas");
                            }}, GetContainerServicePowersXAmzTargetEnum.LIGHTSAIL20161128_GET_CONTAINER_SERVICE_POWERS) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "id";
                xAmzCredential = "ab";
                xAmzDate = "error";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "mollitia";
            }};            

            GetContainerServicePowersResponse res = sdk.sdk.getContainerServicePowers(req);

            if (res.getContainerServicePowersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainerServices

Returns information about one or more of your Amazon Lightsail container services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainerServicesRequest;
import org.openapis.openapi.models.operations.GetContainerServicesResponse;
import org.openapis.openapi.models.operations.GetContainerServicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetContainerServicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContainerServicesRequest req = new GetContainerServicesRequest(                new GetContainerServicesRequest() {{
                                serviceName = "libero";
                            }};, GetContainerServicesXAmzTargetEnum.LIGHTSAIL20161128_GET_CONTAINER_SERVICES) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "enim";
                xAmzDate = "vitae";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "quo";
            }};            

            GetContainerServicesResponse res = sdk.sdk.getContainerServices(req);

            if (res.containerServicesListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCostEstimate

Retrieves information about the cost estimate for a specified resource. A cost estimate will not generate for a resource that has been deleted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCostEstimateRequest;
import org.openapis.openapi.models.operations.GetCostEstimateResponse;
import org.openapis.openapi.models.operations.GetCostEstimateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCostEstimateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCostEstimateRequest req = new GetCostEstimateRequest(                new GetCostEstimateRequest(OffsetDateTime.parse("2022-09-05T19:39:47.586Z"), "expedita", OffsetDateTime.parse("2022-06-10T00:34:58.414Z"));, GetCostEstimateXAmzTargetEnum.LIGHTSAIL20161128_GET_COST_ESTIMATE) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "beatae";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "rerum";
            }};            

            GetCostEstimateResponse res = sdk.sdk.getCostEstimate(req);

            if (res.getCostEstimateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDisk

Returns information about a specific block storage disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiskRequest;
import org.openapis.openapi.models.operations.GetDiskResponse;
import org.openapis.openapi.models.operations.GetDiskXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDiskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDiskRequest req = new GetDiskRequest(                new GetDiskRequest("culpa");, GetDiskXAmzTargetEnum.LIGHTSAIL20161128_GET_DISK) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "officiis";
                xAmzDate = "architecto";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "debitis";
            }};            

            GetDiskResponse res = sdk.sdk.getDisk(req);

            if (res.getDiskResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiskSnapshot

Returns information about a specific block storage disk snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiskSnapshotRequest;
import org.openapis.openapi.models.operations.GetDiskSnapshotResponse;
import org.openapis.openapi.models.operations.GetDiskSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDiskSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDiskSnapshotRequest req = new GetDiskSnapshotRequest(                new GetDiskSnapshotRequest("alias");, GetDiskSnapshotXAmzTargetEnum.LIGHTSAIL20161128_GET_DISK_SNAPSHOT) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "earum";
                xAmzCredential = "ex";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "rem";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "nemo";
            }};            

            GetDiskSnapshotResponse res = sdk.sdk.getDiskSnapshot(req);

            if (res.getDiskSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiskSnapshots

Returns information about all block storage disk snapshots in your AWS account and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiskSnapshotsRequest;
import org.openapis.openapi.models.operations.GetDiskSnapshotsResponse;
import org.openapis.openapi.models.operations.GetDiskSnapshotsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDiskSnapshotsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDiskSnapshotsRequest req = new GetDiskSnapshotsRequest(                new GetDiskSnapshotsRequest() {{
                                pageToken = "ratione";
                            }};, GetDiskSnapshotsXAmzTargetEnum.LIGHTSAIL20161128_GET_DISK_SNAPSHOTS) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "illum";
                xAmzDate = "totam";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "nam";
            }};            

            GetDiskSnapshotsResponse res = sdk.sdk.getDiskSnapshots(req);

            if (res.getDiskSnapshotsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDisks

Returns information about all block storage disks in your AWS account and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDisksRequest;
import org.openapis.openapi.models.operations.GetDisksResponse;
import org.openapis.openapi.models.operations.GetDisksXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDisksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDisksRequest req = new GetDisksRequest(                new GetDisksRequest() {{
                                pageToken = "culpa";
                            }};, GetDisksXAmzTargetEnum.LIGHTSAIL20161128_GET_DISKS) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "inventore";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "dolor";
            }};            

            GetDisksResponse res = sdk.sdk.getDisks(req);

            if (res.getDisksResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistributionBundles

<p>Returns the bundles that can be applied to your Amazon Lightsail content delivery network (CDN) distributions.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistributionBundlesRequest;
import org.openapis.openapi.models.operations.GetDistributionBundlesResponse;
import org.openapis.openapi.models.operations.GetDistributionBundlesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDistributionBundlesRequest req = new GetDistributionBundlesRequest(                new java.util.HashMap<String, Object>() {{
                                put("sit", "modi");
                            }}, GetDistributionBundlesXAmzTargetEnum.LIGHTSAIL20161128_GET_DISTRIBUTION_BUNDLES) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "ab";
                xAmzCredential = "laudantium";
                xAmzDate = "quae";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ipsam";
            }};            

            GetDistributionBundlesResponse res = sdk.sdk.getDistributionBundles(req);

            if (res.getDistributionBundlesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistributionLatestCacheReset

Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistributionLatestCacheResetRequest;
import org.openapis.openapi.models.operations.GetDistributionLatestCacheResetResponse;
import org.openapis.openapi.models.operations.GetDistributionLatestCacheResetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDistributionLatestCacheResetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDistributionLatestCacheResetRequest req = new GetDistributionLatestCacheResetRequest(                new GetDistributionLatestCacheResetRequest() {{
                                distributionName = "ipsa";
                            }};, GetDistributionLatestCacheResetXAmzTargetEnum.LIGHTSAIL20161128_GET_DISTRIBUTION_LATEST_CACHE_RESET) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "impedit";
                xAmzDate = "officiis";
                xAmzSecurityToken = "esse";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "sed";
            }};            

            GetDistributionLatestCacheResetResponse res = sdk.sdk.getDistributionLatestCacheReset(req);

            if (res.getDistributionLatestCacheResetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistributionMetricData

<p>Returns the data points of a specific metric for an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistributionMetricDataRequest;
import org.openapis.openapi.models.operations.GetDistributionMetricDataResponse;
import org.openapis.openapi.models.operations.GetDistributionMetricDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.DistributionMetricNameEnum;
import org.openapis.openapi.models.shared.GetDistributionMetricDataRequest;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.MetricUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDistributionMetricDataRequest req = new GetDistributionMetricDataRequest(                new GetDistributionMetricDataRequest("nesciunt", OffsetDateTime.parse("2022-02-18T22:06:59.614Z"), DistributionMetricNameEnum.BYTES_UPLOADED, 528234L, OffsetDateTime.parse("2022-08-26T10:54:10.191Z"),                 new org.openapis.openapi.models.shared.MetricStatisticEnum[]{{
                                                add(MetricStatisticEnum.AVERAGE),
                                            }}, MetricUnitEnum.GIGABITS);, GetDistributionMetricDataXAmzTargetEnum.LIGHTSAIL20161128_GET_DISTRIBUTION_METRIC_DATA) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "recusandae";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GetDistributionMetricDataResponse res = sdk.sdk.getDistributionMetricData(req);

            if (res.getDistributionMetricDataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistributions

Returns information about one or more of your Amazon Lightsail content delivery network (CDN) distributions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistributionsRequest;
import org.openapis.openapi.models.operations.GetDistributionsResponse;
import org.openapis.openapi.models.operations.GetDistributionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDistributionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDistributionsRequest req = new GetDistributionsRequest(                new GetDistributionsRequest() {{
                                distributionName = "nisi";
                                pageToken = "at";
                            }};, GetDistributionsXAmzTargetEnum.LIGHTSAIL20161128_GET_DISTRIBUTIONS) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "est";
                xAmzCredential = "harum";
                xAmzDate = "sequi";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "optio";
            }};            

            GetDistributionsResponse res = sdk.sdk.getDistributions(req);

            if (res.getDistributionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomain

Returns information about a specific domain recordset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainRequest;
import org.openapis.openapi.models.operations.GetDomainResponse;
import org.openapis.openapi.models.operations.GetDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainRequest req = new GetDomainRequest(                new GetDomainRequest("nemo");, GetDomainXAmzTargetEnum.LIGHTSAIL20161128_GET_DOMAIN) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "officia";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quos";
            }};            

            GetDomainResponse res = sdk.sdk.getDomain(req);

            if (res.getDomainResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomains

Returns a list of all domains in the user's account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainsRequest;
import org.openapis.openapi.models.operations.GetDomainsResponse;
import org.openapis.openapi.models.operations.GetDomainsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDomainsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainsRequest req = new GetDomainsRequest(                new GetDomainsRequest() {{
                                pageToken = "aspernatur";
                            }};, GetDomainsXAmzTargetEnum.LIGHTSAIL20161128_GET_DOMAINS) {{
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "fuga";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "rem";
            }};            

            GetDomainsResponse res = sdk.sdk.getDomains(req);

            if (res.getDomainsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExportSnapshotRecords

<p>Returns all export snapshot records created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html">CreateCloudFormationStack</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportSnapshotRecordsRequest;
import org.openapis.openapi.models.operations.GetExportSnapshotRecordsResponse;
import org.openapis.openapi.models.operations.GetExportSnapshotRecordsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetExportSnapshotRecordsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExportSnapshotRecordsRequest req = new GetExportSnapshotRecordsRequest(                new GetExportSnapshotRecordsRequest() {{
                                pageToken = "dicta";
                            }};, GetExportSnapshotRecordsXAmzTargetEnum.LIGHTSAIL20161128_GET_EXPORT_SNAPSHOT_RECORDS) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "consectetur";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "soluta";
            }};            

            GetExportSnapshotRecordsResponse res = sdk.sdk.getExportSnapshotRecords(req);

            if (res.getExportSnapshotRecordsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstance

Returns information about a specific Amazon Lightsail instance, which is a virtual private server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstanceRequest;
import org.openapis.openapi.models.operations.GetInstanceResponse;
import org.openapis.openapi.models.operations.GetInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstanceRequest req = new GetInstanceRequest(                new GetInstanceRequest("omnis");, GetInstanceXAmzTargetEnum.LIGHTSAIL20161128_GET_INSTANCE) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "iste";
                xAmzDate = "magni";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "accusamus";
            }};            

            GetInstanceResponse res = sdk.sdk.getInstance(req);

            if (res.getInstanceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstanceAccessDetails

<p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstanceAccessDetailsRequest;
import org.openapis.openapi.models.operations.GetInstanceAccessDetailsResponse;
import org.openapis.openapi.models.operations.GetInstanceAccessDetailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstanceAccessDetailsRequest;
import org.openapis.openapi.models.shared.InstanceAccessProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstanceAccessDetailsRequest req = new GetInstanceAccessDetailsRequest(                new GetInstanceAccessDetailsRequest("distinctio") {{
                                protocol = InstanceAccessProtocolEnum.RDP;
                            }};, GetInstanceAccessDetailsXAmzTargetEnum.LIGHTSAIL20161128_GET_INSTANCE_ACCESS_DETAILS) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "minima";
                xAmzCredential = "praesentium";
                xAmzDate = "maxime";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "quos";
            }};            

            GetInstanceAccessDetailsResponse res = sdk.sdk.getInstanceAccessDetails(req);

            if (res.getInstanceAccessDetailsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstanceMetricData

<p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstanceMetricDataRequest;
import org.openapis.openapi.models.operations.GetInstanceMetricDataResponse;
import org.openapis.openapi.models.operations.GetInstanceMetricDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstanceMetricDataRequest;
import org.openapis.openapi.models.shared.InstanceMetricNameEnum;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.MetricUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstanceMetricDataRequest req = new GetInstanceMetricDataRequest(                new GetInstanceMetricDataRequest(OffsetDateTime.parse("2021-10-02T21:48:52.948Z"), "totam", InstanceMetricNameEnum.METADATA_NO_TOKEN, 267207L, OffsetDateTime.parse("2021-03-31T11:58:23.065Z"),                 new org.openapis.openapi.models.shared.MetricStatisticEnum[]{{
                                                add(MetricStatisticEnum.MAXIMUM),
                                            }}, MetricUnitEnum.GIGABITS);, GetInstanceMetricDataXAmzTargetEnum.LIGHTSAIL20161128_GET_INSTANCE_METRIC_DATA) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "non";
                xAmzDate = "maiores";
                xAmzSecurityToken = "enim";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "nulla";
            }};            

            GetInstanceMetricDataResponse res = sdk.sdk.getInstanceMetricData(req);

            if (res.getInstanceMetricDataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstancePortStates

Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstancePortStatesRequest;
import org.openapis.openapi.models.operations.GetInstancePortStatesResponse;
import org.openapis.openapi.models.operations.GetInstancePortStatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstancePortStatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstancePortStatesRequest req = new GetInstancePortStatesRequest(                new GetInstancePortStatesRequest("esse");, GetInstancePortStatesXAmzTargetEnum.LIGHTSAIL20161128_GET_INSTANCE_PORT_STATES) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "est";
                xAmzDate = "quis";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "impedit";
            }};            

            GetInstancePortStatesResponse res = sdk.sdk.getInstancePortStates(req);

            if (res.getInstancePortStatesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstanceSnapshot

Returns information about a specific instance snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstanceSnapshotRequest;
import org.openapis.openapi.models.operations.GetInstanceSnapshotResponse;
import org.openapis.openapi.models.operations.GetInstanceSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstanceSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstanceSnapshotRequest req = new GetInstanceSnapshotRequest(                new GetInstanceSnapshotRequest("necessitatibus");, GetInstanceSnapshotXAmzTargetEnum.LIGHTSAIL20161128_GET_INSTANCE_SNAPSHOT) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "ex";
                xAmzCredential = "voluptas";
                xAmzDate = "debitis";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "minus";
            }};            

            GetInstanceSnapshotResponse res = sdk.sdk.getInstanceSnapshot(req);

            if (res.getInstanceSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstanceSnapshots

Returns all instance snapshots for the user's account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstanceSnapshotsRequest;
import org.openapis.openapi.models.operations.GetInstanceSnapshotsResponse;
import org.openapis.openapi.models.operations.GetInstanceSnapshotsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstanceSnapshotsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstanceSnapshotsRequest req = new GetInstanceSnapshotsRequest(                new GetInstanceSnapshotsRequest() {{
                                pageToken = "laborum";
                            }};, GetInstanceSnapshotsXAmzTargetEnum.LIGHTSAIL20161128_GET_INSTANCE_SNAPSHOTS) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "velit";
                xAmzCredential = "atque";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "soluta";
            }};            

            GetInstanceSnapshotsResponse res = sdk.sdk.getInstanceSnapshots(req);

            if (res.getInstanceSnapshotsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstanceState

Returns the state of a specific instance. Works on one instance at a time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstanceStateRequest;
import org.openapis.openapi.models.operations.GetInstanceStateResponse;
import org.openapis.openapi.models.operations.GetInstanceStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstanceStateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstanceStateRequest req = new GetInstanceStateRequest(                new GetInstanceStateRequest("nam");, GetInstanceStateXAmzTargetEnum.LIGHTSAIL20161128_GET_INSTANCE_STATE) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "voluptate";
                xAmzDate = "sequi";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "quo";
            }};            

            GetInstanceStateResponse res = sdk.sdk.getInstanceState(req);

            if (res.getInstanceStateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstances

Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstancesRequest;
import org.openapis.openapi.models.operations.GetInstancesResponse;
import org.openapis.openapi.models.operations.GetInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInstancesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstancesRequest req = new GetInstancesRequest(                new GetInstancesRequest() {{
                                pageToken = "quibusdam";
                            }};, GetInstancesXAmzTargetEnum.LIGHTSAIL20161128_GET_INSTANCES) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "odit";
                xAmzCredential = "voluptatibus";
                xAmzDate = "vel";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "inventore";
            }};            

            GetInstancesResponse res = sdk.sdk.getInstances(req);

            if (res.getInstancesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeyPair

Returns information about a specific key pair.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeyPairRequest;
import org.openapis.openapi.models.operations.GetKeyPairResponse;
import org.openapis.openapi.models.operations.GetKeyPairXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetKeyPairRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetKeyPairRequest req = new GetKeyPairRequest(                new GetKeyPairRequest("libero");, GetKeyPairXAmzTargetEnum.LIGHTSAIL20161128_GET_KEY_PAIR) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "quia";
                xAmzDate = "porro";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "illo";
            }};            

            GetKeyPairResponse res = sdk.sdk.getKeyPair(req);

            if (res.getKeyPairResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeyPairs

Returns information about all key pairs in the user's account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeyPairsRequest;
import org.openapis.openapi.models.operations.GetKeyPairsResponse;
import org.openapis.openapi.models.operations.GetKeyPairsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetKeyPairsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetKeyPairsRequest req = new GetKeyPairsRequest(                new GetKeyPairsRequest() {{
                                includeDefaultKeyPair = false;
                                pageToken = "vel";
                            }};, GetKeyPairsXAmzTargetEnum.LIGHTSAIL20161128_GET_KEY_PAIRS) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "vero";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "eum";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "ut";
            }};            

            GetKeyPairsResponse res = sdk.sdk.getKeyPairs(req);

            if (res.getKeyPairsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoadBalancer

Returns information about the specified Lightsail load balancer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancerRequest;
import org.openapis.openapi.models.operations.GetLoadBalancerResponse;
import org.openapis.openapi.models.operations.GetLoadBalancerXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLoadBalancerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLoadBalancerRequest req = new GetLoadBalancerRequest(                new GetLoadBalancerRequest("earum");, GetLoadBalancerXAmzTargetEnum.LIGHTSAIL20161128_GET_LOAD_BALANCER) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "voluptatibus";
                xAmzDate = "iste";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "nisi";
            }};            

            GetLoadBalancerResponse res = sdk.sdk.getLoadBalancer(req);

            if (res.getLoadBalancerResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoadBalancerMetricData

<p>Returns information about health metrics for your Lightsail load balancer.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancerMetricDataRequest;
import org.openapis.openapi.models.operations.GetLoadBalancerMetricDataResponse;
import org.openapis.openapi.models.operations.GetLoadBalancerMetricDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLoadBalancerMetricDataRequest;
import org.openapis.openapi.models.shared.LoadBalancerMetricNameEnum;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.MetricUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLoadBalancerMetricDataRequest req = new GetLoadBalancerMetricDataRequest(                new GetLoadBalancerMetricDataRequest(OffsetDateTime.parse("2022-04-30T01:11:05.137Z"), "non", LoadBalancerMetricNameEnum.UNHEALTHY_HOST_COUNT, 483394L, OffsetDateTime.parse("2022-12-17T09:39:45.924Z"),                 new org.openapis.openapi.models.shared.MetricStatisticEnum[]{{
                                                add(MetricStatisticEnum.AVERAGE),
                                            }}, MetricUnitEnum.COUNT_SECOND);, GetLoadBalancerMetricDataXAmzTargetEnum.LIGHTSAIL20161128_GET_LOAD_BALANCER_METRIC_DATA) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "voluptas";
                xAmzDate = "facilis";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "expedita";
            }};            

            GetLoadBalancerMetricDataResponse res = sdk.sdk.getLoadBalancerMetricData(req);

            if (res.getLoadBalancerMetricDataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoadBalancerTlsCertificates

<p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancerTlsCertificatesRequest;
import org.openapis.openapi.models.operations.GetLoadBalancerTlsCertificatesResponse;
import org.openapis.openapi.models.operations.GetLoadBalancerTlsCertificatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLoadBalancerTlsCertificatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLoadBalancerTlsCertificatesRequest req = new GetLoadBalancerTlsCertificatesRequest(                new GetLoadBalancerTlsCertificatesRequest("a");, GetLoadBalancerTlsCertificatesXAmzTargetEnum.LIGHTSAIL20161128_GET_LOAD_BALANCER_TLS_CERTIFICATES) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "unde";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "animi";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "ipsam";
            }};            

            GetLoadBalancerTlsCertificatesResponse res = sdk.sdk.getLoadBalancerTlsCertificates(req);

            if (res.getLoadBalancerTlsCertificatesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoadBalancerTlsPolicies

<p>Returns a list of TLS security policies that you can apply to Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancerTlsPoliciesRequest;
import org.openapis.openapi.models.operations.GetLoadBalancerTlsPoliciesResponse;
import org.openapis.openapi.models.operations.GetLoadBalancerTlsPoliciesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLoadBalancerTlsPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLoadBalancerTlsPoliciesRequest req = new GetLoadBalancerTlsPoliciesRequest(                new GetLoadBalancerTlsPoliciesRequest() {{
                                pageToken = "est";
                            }};, GetLoadBalancerTlsPoliciesXAmzTargetEnum.LIGHTSAIL20161128_GET_LOAD_BALANCER_TLS_POLICIES) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "esse";
                xAmzCredential = "labore";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "vitae";
            }};            

            GetLoadBalancerTlsPoliciesResponse res = sdk.sdk.getLoadBalancerTlsPolicies(req);

            if (res.getLoadBalancerTlsPoliciesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoadBalancers

Returns information about all load balancers in an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancersRequest;
import org.openapis.openapi.models.operations.GetLoadBalancersResponse;
import org.openapis.openapi.models.operations.GetLoadBalancersXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLoadBalancersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLoadBalancersRequest req = new GetLoadBalancersRequest(                new GetLoadBalancersRequest() {{
                                pageToken = "dolorem";
                            }};, GetLoadBalancersXAmzTargetEnum.LIGHTSAIL20161128_GET_LOAD_BALANCERS) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "qui";
                xAmzCredential = "iste";
                xAmzDate = "ex";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "libero";
            }};            

            GetLoadBalancersResponse res = sdk.sdk.getLoadBalancers(req);

            if (res.getLoadBalancersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOperation

Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOperationRequest;
import org.openapis.openapi.models.operations.GetOperationResponse;
import org.openapis.openapi.models.operations.GetOperationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOperationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOperationRequest req = new GetOperationRequest(                new GetOperationRequest("dolorum");, GetOperationXAmzTargetEnum.LIGHTSAIL20161128_GET_OPERATION) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "alias";
                xAmzDate = "magni";
                xAmzSecurityToken = "vel";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "quae";
            }};            

            GetOperationResponse res = sdk.sdk.getOperation(req);

            if (res.getOperationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOperations

<p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOperationsRequest;
import org.openapis.openapi.models.operations.GetOperationsResponse;
import org.openapis.openapi.models.operations.GetOperationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOperationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOperationsRequest req = new GetOperationsRequest(                new GetOperationsRequest() {{
                                pageToken = "neque";
                            }};, GetOperationsXAmzTargetEnum.LIGHTSAIL20161128_GET_OPERATIONS) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "et";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "unde";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "distinctio";
            }};            

            GetOperationsResponse res = sdk.sdk.getOperations(req);

            if (res.getOperationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOperationsForResource

Gets operations for a specific resource (e.g., an instance or a static IP).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOperationsForResourceRequest;
import org.openapis.openapi.models.operations.GetOperationsForResourceResponse;
import org.openapis.openapi.models.operations.GetOperationsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOperationsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOperationsForResourceRequest req = new GetOperationsForResourceRequest(                new GetOperationsForResourceRequest("quia") {{
                                pageToken = "quia";
                            }};, GetOperationsForResourceXAmzTargetEnum.LIGHTSAIL20161128_GET_OPERATIONS_FOR_RESOURCE) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "libero";
                xAmzDate = "dicta";
                xAmzSecurityToken = "id";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "fugiat";
            }};            

            GetOperationsForResourceResponse res = sdk.sdk.getOperationsForResource(req);

            if (res.getOperationsForResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegions

Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegionsRequest;
import org.openapis.openapi.models.operations.GetRegionsResponse;
import org.openapis.openapi.models.operations.GetRegionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRegionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRegionsRequest req = new GetRegionsRequest(                new GetRegionsRequest() {{
                                includeAvailabilityZones = false;
                                includeRelationalDatabaseAvailabilityZones = false;
                            }};, GetRegionsXAmzTargetEnum.LIGHTSAIL20161128_GET_REGIONS) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "sit";
                xAmzDate = "iusto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "inventore";
            }};            

            GetRegionsResponse res = sdk.sdk.getRegions(req);

            if (res.getRegionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabase

Returns information about a specific database in Amazon Lightsail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabaseRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabaseResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabaseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabaseRequest req = new GetRelationalDatabaseRequest(                new GetRelationalDatabaseRequest("totam");, GetRelationalDatabaseXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASE) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "distinctio";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "autem";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "dolores";
            }};            

            GetRelationalDatabaseResponse res = sdk.sdk.getRelationalDatabase(req);

            if (res.getRelationalDatabaseResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabaseBlueprints

<p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabaseBlueprintsRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabaseBlueprintsResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabaseBlueprintsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabaseBlueprintsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabaseBlueprintsRequest req = new GetRelationalDatabaseBlueprintsRequest(                new GetRelationalDatabaseBlueprintsRequest() {{
                                pageToken = "beatae";
                            }};, GetRelationalDatabaseBlueprintsXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_BLUEPRINTS) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "facere";
                xAmzCredential = "corrupti";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "provident";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GetRelationalDatabaseBlueprintsResponse res = sdk.sdk.getRelationalDatabaseBlueprints(req);

            if (res.getRelationalDatabaseBlueprintsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabaseBundles

<p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabaseBundlesRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabaseBundlesResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabaseBundlesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabaseBundlesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabaseBundlesRequest req = new GetRelationalDatabaseBundlesRequest(                new GetRelationalDatabaseBundlesRequest() {{
                                includeInactive = false;
                                pageToken = "sint";
                            }};, GetRelationalDatabaseBundlesXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_BUNDLES) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "autem";
                xAmzCredential = "ipsam";
                xAmzDate = "rerum";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "officiis";
            }};            

            GetRelationalDatabaseBundlesResponse res = sdk.sdk.getRelationalDatabaseBundles(req);

            if (res.getRelationalDatabaseBundlesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabaseEvents

Returns a list of events for a specific database in Amazon Lightsail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabaseEventsRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabaseEventsResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabaseEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabaseEventsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabaseEventsRequest req = new GetRelationalDatabaseEventsRequest(                new GetRelationalDatabaseEventsRequest("cum") {{
                                durationInMinutes = 872303L;
                                pageToken = "alias";
                            }};, GetRelationalDatabaseEventsXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_EVENTS) {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "fuga";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "officiis";
            }};            

            GetRelationalDatabaseEventsResponse res = sdk.sdk.getRelationalDatabaseEvents(req);

            if (res.getRelationalDatabaseEventsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabaseLogEvents

Returns a list of log events for a database in Amazon Lightsail.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabaseLogEventsRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabaseLogEventsResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabaseLogEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabaseLogEventsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabaseLogEventsRequest req = new GetRelationalDatabaseLogEventsRequest(                new GetRelationalDatabaseLogEventsRequest("quibusdam", "odio") {{
                                endTime = OffsetDateTime.parse("2022-09-20T13:39:46.907Z");
                                pageToken = "explicabo";
                                startFromHead = false;
                                startTime = OffsetDateTime.parse("2022-05-19T03:53:46.149Z");
                            }};, GetRelationalDatabaseLogEventsXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_LOG_EVENTS) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "recusandae";
                xAmzDate = "similique";
                xAmzSecurityToken = "ut";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "quis";
            }};            

            GetRelationalDatabaseLogEventsResponse res = sdk.sdk.getRelationalDatabaseLogEvents(req);

            if (res.getRelationalDatabaseLogEventsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabaseLogStreams

Returns a list of available log streams for a specific database in Amazon Lightsail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabaseLogStreamsRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabaseLogStreamsResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabaseLogStreamsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabaseLogStreamsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabaseLogStreamsRequest req = new GetRelationalDatabaseLogStreamsRequest(                new GetRelationalDatabaseLogStreamsRequest("unde");, GetRelationalDatabaseLogStreamsXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_LOG_STREAMS) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "cupiditate";
                xAmzDate = "fugit";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "nesciunt";
            }};            

            GetRelationalDatabaseLogStreamsResponse res = sdk.sdk.getRelationalDatabaseLogStreams(req);

            if (res.getRelationalDatabaseLogStreamsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabaseMasterUserPassword

<p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabaseMasterUserPasswordRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabaseMasterUserPasswordResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabaseMasterUserPasswordRequest;
import org.openapis.openapi.models.shared.RelationalDatabasePasswordVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabaseMasterUserPasswordRequest req = new GetRelationalDatabaseMasterUserPasswordRequest(                new GetRelationalDatabaseMasterUserPasswordRequest("officia") {{
                                passwordVersion = RelationalDatabasePasswordVersionEnum.PREVIOUS;
                            }};, GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_MASTER_USER_PASSWORD) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "corporis";
                xAmzDate = "qui";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "cupiditate";
            }};            

            GetRelationalDatabaseMasterUserPasswordResponse res = sdk.sdk.getRelationalDatabaseMasterUserPassword(req);

            if (res.getRelationalDatabaseMasterUserPasswordResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabaseMetricData

<p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabaseMetricDataRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabaseMetricDataResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabaseMetricDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabaseMetricDataRequest;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.MetricUnitEnum;
import org.openapis.openapi.models.shared.RelationalDatabaseMetricNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabaseMetricDataRequest req = new GetRelationalDatabaseMetricDataRequest(                new GetRelationalDatabaseMetricDataRequest(OffsetDateTime.parse("2022-01-19T09:15:40.360Z"), RelationalDatabaseMetricNameEnum.DATABASE_CONNECTIONS, 446877L, "minus", OffsetDateTime.parse("2022-09-25T18:15:59.555Z"),                 new org.openapis.openapi.models.shared.MetricStatisticEnum[]{{
                                                add(MetricStatisticEnum.MAXIMUM),
                                                add(MetricStatisticEnum.SAMPLE_COUNT),
                                            }}, MetricUnitEnum.NONE);, GetRelationalDatabaseMetricDataXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_METRIC_DATA) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "libero";
                xAmzDate = "ratione";
                xAmzSecurityToken = "labore";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetRelationalDatabaseMetricDataResponse res = sdk.sdk.getRelationalDatabaseMetricData(req);

            if (res.getRelationalDatabaseMetricDataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabaseParameters

<p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabaseParametersRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabaseParametersResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabaseParametersXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabaseParametersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabaseParametersRequest req = new GetRelationalDatabaseParametersRequest(                new GetRelationalDatabaseParametersRequest("quo") {{
                                pageToken = "velit";
                            }};, GetRelationalDatabaseParametersXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_PARAMETERS) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "nostrum";
                xAmzDate = "est";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempore";
            }};            

            GetRelationalDatabaseParametersResponse res = sdk.sdk.getRelationalDatabaseParameters(req);

            if (res.getRelationalDatabaseParametersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabaseSnapshot

Returns information about a specific database snapshot in Amazon Lightsail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabaseSnapshotRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabaseSnapshotResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabaseSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabaseSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabaseSnapshotRequest req = new GetRelationalDatabaseSnapshotRequest(                new GetRelationalDatabaseSnapshotRequest("odit");, GetRelationalDatabaseSnapshotXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_SNAPSHOT) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "nemo";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "minima";
            }};            

            GetRelationalDatabaseSnapshotResponse res = sdk.sdk.getRelationalDatabaseSnapshot(req);

            if (res.getRelationalDatabaseSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabaseSnapshots

Returns information about all of your database snapshots in Amazon Lightsail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabaseSnapshotsRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabaseSnapshotsResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabaseSnapshotsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabaseSnapshotsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabaseSnapshotsRequest req = new GetRelationalDatabaseSnapshotsRequest(                new GetRelationalDatabaseSnapshotsRequest() {{
                                pageToken = "ducimus";
                            }};, GetRelationalDatabaseSnapshotsXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_SNAPSHOTS) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "error";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "pariatur";
            }};            

            GetRelationalDatabaseSnapshotsResponse res = sdk.sdk.getRelationalDatabaseSnapshots(req);

            if (res.getRelationalDatabaseSnapshotsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationalDatabases

Returns information about all of your databases in Amazon Lightsail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationalDatabasesRequest;
import org.openapis.openapi.models.operations.GetRelationalDatabasesResponse;
import org.openapis.openapi.models.operations.GetRelationalDatabasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRelationalDatabasesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRelationalDatabasesRequest req = new GetRelationalDatabasesRequest(                new GetRelationalDatabasesRequest() {{
                                pageToken = "similique";
                            }};, GetRelationalDatabasesXAmzTargetEnum.LIGHTSAIL20161128_GET_RELATIONAL_DATABASES) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "ex";
                xAmzCredential = "quaerat";
                xAmzDate = "commodi";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "quidem";
            }};            

            GetRelationalDatabasesResponse res = sdk.sdk.getRelationalDatabases(req);

            if (res.getRelationalDatabasesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStaticIp

Returns information about an Amazon Lightsail static IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStaticIpRequest;
import org.openapis.openapi.models.operations.GetStaticIpResponse;
import org.openapis.openapi.models.operations.GetStaticIpXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetStaticIpRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStaticIpRequest req = new GetStaticIpRequest(                new GetStaticIpRequest("quam");, GetStaticIpXAmzTargetEnum.LIGHTSAIL20161128_GET_STATIC_IP) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "modi";
                xAmzCredential = "ipsa";
                xAmzDate = "sint";
                xAmzSecurityToken = "vero";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            GetStaticIpResponse res = sdk.sdk.getStaticIp(req);

            if (res.getStaticIpResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStaticIps

Returns information about all static IPs in the user's account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStaticIpsRequest;
import org.openapis.openapi.models.operations.GetStaticIpsResponse;
import org.openapis.openapi.models.operations.GetStaticIpsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetStaticIpsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStaticIpsRequest req = new GetStaticIpsRequest(                new GetStaticIpsRequest() {{
                                pageToken = "dicta";
                            }};, GetStaticIpsXAmzTargetEnum.LIGHTSAIL20161128_GET_STATIC_IPS) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "animi";
                xAmzDate = "dolores";
                xAmzSecurityToken = "nam";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GetStaticIpsResponse res = sdk.sdk.getStaticIps(req);

            if (res.getStaticIpsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importKeyPair

Imports a public SSH key from a specific key pair.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportKeyPairRequest;
import org.openapis.openapi.models.operations.ImportKeyPairResponse;
import org.openapis.openapi.models.operations.ImportKeyPairXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportKeyPairRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportKeyPairRequest req = new ImportKeyPairRequest(                new ImportKeyPairRequest("nobis", "ipsa");, ImportKeyPairXAmzTargetEnum.LIGHTSAIL20161128_IMPORT_KEY_PAIR) {{
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "veritatis";
                xAmzDate = "quasi";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "libero";
            }};            

            ImportKeyPairResponse res = sdk.sdk.importKeyPair(req);

            if (res.importKeyPairResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## isVpcPeered

Returns a Boolean value indicating whether your Lightsail VPC is peered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IsVpcPeeredRequest;
import org.openapis.openapi.models.operations.IsVpcPeeredResponse;
import org.openapis.openapi.models.operations.IsVpcPeeredXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            IsVpcPeeredRequest req = new IsVpcPeeredRequest(                new java.util.HashMap<String, Object>() {{
                                put("nemo", "aliquam");
                                put("nostrum", "doloribus");
                                put("eligendi", "sint");
                            }}, IsVpcPeeredXAmzTargetEnum.LIGHTSAIL20161128_IS_VPC_PEERED) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "hic";
                xAmzCredential = "animi";
                xAmzDate = "quas";
                xAmzSecurityToken = "totam";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "odio";
            }};            

            IsVpcPeeredResponse res = sdk.sdk.isVpcPeered(req);

            if (res.isVpcPeeredResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## openInstancePublicPorts

<p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OpenInstancePublicPortsRequest;
import org.openapis.openapi.models.operations.OpenInstancePublicPortsResponse;
import org.openapis.openapi.models.operations.OpenInstancePublicPortsXAmzTargetEnum;
import org.openapis.openapi.models.shared.NetworkProtocolEnum;
import org.openapis.openapi.models.shared.OpenInstancePublicPortsRequest;
import org.openapis.openapi.models.shared.PortInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            OpenInstancePublicPortsRequest req = new OpenInstancePublicPortsRequest(                new OpenInstancePublicPortsRequest("saepe",                 new PortInfo() {{
                                                cidrListAliases = new String[]{{
                                                    add("quos"),
                                                }};
                                                cidrs = new String[]{{
                                                    add("assumenda"),
                                                    add("tempore"),
                                                    add("libero"),
                                                }};
                                                fromPort = 244032L;
                                                ipv6Cidrs = new String[]{{
                                                    add("delectus"),
                                                }};
                                                protocol = NetworkProtocolEnum.ICMP;
                                                toPort = 741238L;
                                            }};);, OpenInstancePublicPortsXAmzTargetEnum.LIGHTSAIL20161128_OPEN_INSTANCE_PUBLIC_PORTS) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "saepe";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veniam";
            }};            

            OpenInstancePublicPortsResponse res = sdk.sdk.openInstancePublicPorts(req);

            if (res.openInstancePublicPortsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peerVpc

Peers the Lightsail VPC with the user's default VPC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeerVpcRequest;
import org.openapis.openapi.models.operations.PeerVpcResponse;
import org.openapis.openapi.models.operations.PeerVpcXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PeerVpcRequest req = new PeerVpcRequest(                new java.util.HashMap<String, Object>() {{
                                put("cupiditate", "molestiae");
                            }}, PeerVpcXAmzTargetEnum.LIGHTSAIL20161128_PEER_VPC) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "non";
                xAmzDate = "magnam";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "asperiores";
            }};            

            PeerVpcResponse res = sdk.sdk.peerVpc(req);

            if (res.peerVpcResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAlarm

<p>Creates or updates an alarm, and associates it with the specified metric.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> <p>When this action creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAlarmRequest;
import org.openapis.openapi.models.operations.PutAlarmResponse;
import org.openapis.openapi.models.operations.PutAlarmXAmzTargetEnum;
import org.openapis.openapi.models.shared.AlarmStateEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.ContactProtocolEnum;
import org.openapis.openapi.models.shared.MetricNameEnum;
import org.openapis.openapi.models.shared.PutAlarmRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TreatMissingDataEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAlarmRequest req = new PutAlarmRequest(                new PutAlarmRequest("consequuntur", ComparisonOperatorEnum.LESS_THAN_OR_EQUAL_TO_THRESHOLD, 512905L, MetricNameEnum.STATUS_CHECK_FAILED, "pariatur", 2273.62) {{
                                contactProtocols = new org.openapis.openapi.models.shared.ContactProtocolEnum[]{{
                                    add(ContactProtocolEnum.EMAIL),
                                    add(ContactProtocolEnum.EMAIL),
                                }};
                                datapointsToAlarm = 705710L;
                                notificationEnabled = false;
                                notificationTriggers = new org.openapis.openapi.models.shared.AlarmStateEnum[]{{
                                    add(AlarmStateEnum.ALARM),
                                    add(AlarmStateEnum.INSUFFICIENT_DATA),
                                    add(AlarmStateEnum.OK),
                                }};
                                treatMissingData = TreatMissingDataEnum.IGNORE;
                            }};, PutAlarmXAmzTargetEnum.LIGHTSAIL20161128_PUT_ALARM) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "quis";
                xAmzDate = "nisi";
                xAmzSecurityToken = "libero";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "facere";
            }};            

            PutAlarmResponse res = sdk.sdk.putAlarm(req);

            if (res.putAlarmResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putInstancePublicPorts

<p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutInstancePublicPortsRequest;
import org.openapis.openapi.models.operations.PutInstancePublicPortsResponse;
import org.openapis.openapi.models.operations.PutInstancePublicPortsXAmzTargetEnum;
import org.openapis.openapi.models.shared.NetworkProtocolEnum;
import org.openapis.openapi.models.shared.PortInfo;
import org.openapis.openapi.models.shared.PutInstancePublicPortsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutInstancePublicPortsRequest req = new PutInstancePublicPortsRequest(                new PutInstancePublicPortsRequest("ipsum",                 new org.openapis.openapi.models.shared.PortInfo[]{{
                                                add(new PortInfo() {{
                                                    cidrListAliases = new String[]{{
                                                        add("voluptatibus"),
                                                        add("consequuntur"),
                                                        add("debitis"),
                                                        add("labore"),
                                                    }};
                                                    cidrs = new String[]{{
                                                        add("eos"),
                                                        add("reprehenderit"),
                                                        add("nostrum"),
                                                    }};
                                                    fromPort = 207296L;
                                                    ipv6Cidrs = new String[]{{
                                                        add("est"),
                                                        add("rem"),
                                                    }};
                                                    protocol = NetworkProtocolEnum.ICMP;
                                                    toPort = 853606L;
                                                }}),
                                                add(new PortInfo() {{
                                                    cidrListAliases = new String[]{{
                                                        add("officiis"),
                                                        add("ducimus"),
                                                        add("dolor"),
                                                    }};
                                                    cidrs = new String[]{{
                                                        add("error"),
                                                    }};
                                                    fromPort = 784731L;
                                                    ipv6Cidrs = new String[]{{
                                                        add("dignissimos"),
                                                    }};
                                                    protocol = NetworkProtocolEnum.ALL;
                                                    toPort = 854115L;
                                                }}),
                                            }});, PutInstancePublicPortsXAmzTargetEnum.LIGHTSAIL20161128_PUT_INSTANCE_PUBLIC_PORTS) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "enim";
                xAmzDate = "delectus";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "libero";
            }};            

            PutInstancePublicPortsResponse res = sdk.sdk.putInstancePublicPorts(req);

            if (res.putInstancePublicPortsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rebootInstance

<p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RebootInstanceRequest;
import org.openapis.openapi.models.operations.RebootInstanceResponse;
import org.openapis.openapi.models.operations.RebootInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.RebootInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RebootInstanceRequest req = new RebootInstanceRequest(                new RebootInstanceRequest("ab");, RebootInstanceXAmzTargetEnum.LIGHTSAIL20161128_REBOOT_INSTANCE) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "saepe";
                xAmzDate = "tempore";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "reiciendis";
            }};            

            RebootInstanceResponse res = sdk.sdk.rebootInstance(req);

            if (res.rebootInstanceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rebootRelationalDatabase

<p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RebootRelationalDatabaseRequest;
import org.openapis.openapi.models.operations.RebootRelationalDatabaseResponse;
import org.openapis.openapi.models.operations.RebootRelationalDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.RebootRelationalDatabaseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RebootRelationalDatabaseRequest req = new RebootRelationalDatabaseRequest(                new RebootRelationalDatabaseRequest("reprehenderit");, RebootRelationalDatabaseXAmzTargetEnum.LIGHTSAIL20161128_REBOOT_RELATIONAL_DATABASE) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "repellat";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "deleniti";
            }};            

            RebootRelationalDatabaseResponse res = sdk.sdk.rebootRelationalDatabase(req);

            if (res.rebootRelationalDatabaseResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerContainerImage

<p>Registers a container image to your Amazon Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterContainerImageRequest;
import org.openapis.openapi.models.operations.RegisterContainerImageResponse;
import org.openapis.openapi.models.operations.RegisterContainerImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterContainerImageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterContainerImageRequest req = new RegisterContainerImageRequest(                new RegisterContainerImageRequest("labore", "assumenda", "aliquam");, RegisterContainerImageXAmzTargetEnum.LIGHTSAIL20161128_REGISTER_CONTAINER_IMAGE) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "provident";
                xAmzCredential = "laudantium";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "aspernatur";
            }};            

            RegisterContainerImageResponse res = sdk.sdk.registerContainerImage(req);

            if (res.registerContainerImageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releaseStaticIp

Deletes a specific static IP from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleaseStaticIpRequest;
import org.openapis.openapi.models.operations.ReleaseStaticIpResponse;
import org.openapis.openapi.models.operations.ReleaseStaticIpXAmzTargetEnum;
import org.openapis.openapi.models.shared.ReleaseStaticIpRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReleaseStaticIpRequest req = new ReleaseStaticIpRequest(                new ReleaseStaticIpRequest("expedita");, ReleaseStaticIpXAmzTargetEnum.LIGHTSAIL20161128_RELEASE_STATIC_IP) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "provident";
                xAmzCredential = "repudiandae";
                xAmzDate = "rerum";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "vero";
            }};            

            ReleaseStaticIpResponse res = sdk.sdk.releaseStaticIp(req);

            if (res.releaseStaticIpResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetDistributionCache

<p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After resetting the cache, the next time a content request is made, your distribution pulls, serves, and caches it from the origin.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetDistributionCacheRequest;
import org.openapis.openapi.models.operations.ResetDistributionCacheResponse;
import org.openapis.openapi.models.operations.ResetDistributionCacheXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResetDistributionCacheRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResetDistributionCacheRequest req = new ResetDistributionCacheRequest(                new ResetDistributionCacheRequest() {{
                                distributionName = "repellendus";
                            }};, ResetDistributionCacheXAmzTargetEnum.LIGHTSAIL20161128_RESET_DISTRIBUTION_CACHE) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "commodi";
                xAmzDate = "impedit";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatem";
            }};            

            ResetDistributionCacheResponse res = sdk.sdk.resetDistributionCache(req);

            if (res.resetDistributionCacheResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendContactMethodVerification

<p>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendContactMethodVerificationRequest;
import org.openapis.openapi.models.operations.SendContactMethodVerificationResponse;
import org.openapis.openapi.models.operations.SendContactMethodVerificationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContactMethodVerificationProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendContactMethodVerificationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendContactMethodVerificationRequest req = new SendContactMethodVerificationRequest(                new SendContactMethodVerificationRequest(ContactMethodVerificationProtocolEnum.EMAIL);, SendContactMethodVerificationXAmzTargetEnum.LIGHTSAIL20161128_SEND_CONTACT_METHOD_VERIFICATION) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "amet";
                xAmzCredential = "illum";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "amet";
            }};            

            SendContactMethodVerificationResponse res = sdk.sdk.sendContactMethodVerification(req);

            if (res.sendContactMethodVerificationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setIpAddressType

<p>Sets the IP address type for an Amazon Lightsail resource.</p> <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the specified resource. Alternately, you can use this action to disable dual-stack, and enable IPv4 only.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetIpAddressTypeRequest;
import org.openapis.openapi.models.operations.SetIpAddressTypeResponse;
import org.openapis.openapi.models.operations.SetIpAddressTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetIpAddressTypeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetIpAddressTypeRequest req = new SetIpAddressTypeRequest(                new SetIpAddressTypeRequest(IpAddressTypeEnum.DUALSTACK, "laudantium", ResourceTypeEnum.CONTAINER_SERVICE);, SetIpAddressTypeXAmzTargetEnum.LIGHTSAIL20161128_SET_IP_ADDRESS_TYPE) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "amet";
                xAmzDate = "provident";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "provident";
            }};            

            SetIpAddressTypeResponse res = sdk.sdk.setIpAddressType(req);

            if (res.setIpAddressTypeResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setResourceAccessForBucket

<p>Sets the Amazon Lightsail resources that can access the specified Lightsail bucket.</p> <p>Lightsail buckets currently support setting access for Lightsail instances in the same Amazon Web Services Region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetResourceAccessForBucketRequest;
import org.openapis.openapi.models.operations.SetResourceAccessForBucketResponse;
import org.openapis.openapi.models.operations.SetResourceAccessForBucketXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResourceBucketAccessEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetResourceAccessForBucketRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetResourceAccessForBucketRequest req = new SetResourceAccessForBucketRequest(                new SetResourceAccessForBucketRequest(ResourceBucketAccessEnum.ALLOW, "nemo", "molestiae");, SetResourceAccessForBucketXAmzTargetEnum.LIGHTSAIL20161128_SET_RESOURCE_ACCESS_FOR_BUCKET) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "corrupti";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "eos";
            }};            

            SetResourceAccessForBucketResponse res = sdk.sdk.setResourceAccessForBucket(req);

            if (res.setResourceAccessForBucketResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startGUISession

Initiates a graphical user interface (GUI) session that’s used to access a virtual computer’s operating system and application. The session will be active for 1 hour. Use this action to resume the session after it expires. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartGUISessionRequest;
import org.openapis.openapi.models.operations.StartGUISessionResponse;
import org.openapis.openapi.models.operations.StartGUISessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartGUISessionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartGUISessionRequest req = new StartGUISessionRequest(                new StartGUISessionRequest("dicta");, StartGUISessionXAmzTargetEnum.LIGHTSAIL20161128_START_GUI_SESSION) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "velit";
                xAmzCredential = "dolor";
                xAmzDate = "sunt";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "occaecati";
            }};            

            StartGUISessionResponse res = sdk.sdk.startGUISession(req);

            if (res.startGUISessionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startInstance

<p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartInstanceRequest;
import org.openapis.openapi.models.operations.StartInstanceResponse;
import org.openapis.openapi.models.operations.StartInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartInstanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartInstanceRequest req = new StartInstanceRequest(                new StartInstanceRequest("beatae");, StartInstanceXAmzTargetEnum.LIGHTSAIL20161128_START_INSTANCE) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "labore";
                xAmzCredential = "minus";
                xAmzDate = "esse";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "rerum";
            }};            

            StartInstanceResponse res = sdk.sdk.startInstance(req);

            if (res.startInstanceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startRelationalDatabase

<p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartRelationalDatabaseRequest;
import org.openapis.openapi.models.operations.StartRelationalDatabaseResponse;
import org.openapis.openapi.models.operations.StartRelationalDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartRelationalDatabaseRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartRelationalDatabaseRequest req = new StartRelationalDatabaseRequest(                new StartRelationalDatabaseRequest("aperiam");, StartRelationalDatabaseXAmzTargetEnum.LIGHTSAIL20161128_START_RELATIONAL_DATABASE) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "velit";
                xAmzDate = "porro";
                xAmzSecurityToken = "provident";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "eligendi";
            }};            

            StartRelationalDatabaseResponse res = sdk.sdk.startRelationalDatabase(req);

            if (res.startRelationalDatabaseResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopGUISession

Terminates a web-based NICE DCV session that’s used to access a virtual computer’s operating system or application. The session will close and any unsaved data will be lost.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopGUISessionRequest;
import org.openapis.openapi.models.operations.StopGUISessionResponse;
import org.openapis.openapi.models.operations.StopGUISessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopGUISessionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopGUISessionRequest req = new StopGUISessionRequest(                new StopGUISessionRequest("consectetur");, StopGUISessionXAmzTargetEnum.LIGHTSAIL20161128_STOP_GUI_SESSION) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "natus";
                xAmzCredential = "temporibus";
                xAmzDate = "officia";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "aspernatur";
            }};            

            StopGUISessionResponse res = sdk.sdk.stopGUISession(req);

            if (res.stopGUISessionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopInstance

<p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopInstanceRequest;
import org.openapis.openapi.models.operations.StopInstanceResponse;
import org.openapis.openapi.models.operations.StopInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopInstanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopInstanceRequest req = new StopInstanceRequest(                new StopInstanceRequest("itaque") {{
                                force = false;
                            }};, StopInstanceXAmzTargetEnum.LIGHTSAIL20161128_STOP_INSTANCE) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "dignissimos";
                xAmzDate = "vero";
                xAmzSecurityToken = "qui";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "repellat";
            }};            

            StopInstanceResponse res = sdk.sdk.stopInstance(req);

            if (res.stopInstanceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopRelationalDatabase

<p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopRelationalDatabaseRequest;
import org.openapis.openapi.models.operations.StopRelationalDatabaseResponse;
import org.openapis.openapi.models.operations.StopRelationalDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopRelationalDatabaseRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopRelationalDatabaseRequest req = new StopRelationalDatabaseRequest(                new StopRelationalDatabaseRequest("explicabo") {{
                                relationalDatabaseSnapshotName = "exercitationem";
                            }};, StopRelationalDatabaseXAmzTargetEnum.LIGHTSAIL20161128_STOP_RELATIONAL_DATABASE) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "non";
                xAmzCredential = "ab";
                xAmzDate = "illo";
                xAmzSecurityToken = "hic";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "delectus";
            }};            

            StopRelationalDatabaseResponse res = sdk.sdk.stopRelationalDatabase(req);

            if (res.stopRelationalDatabaseResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("distinctio",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "exercitationem";
                                                    value = "labore";
                                                }}),
                                                add(new Tag() {{
                                                    key = "numquam";
                                                    value = "repudiandae";
                                                }}),
                                            }}) {{
                                resourceArn = "modi";
                            }};, TagResourceXAmzTargetEnum.LIGHTSAIL20161128_TAG_RESOURCE) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "accusamus";
                xAmzDate = "rem";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "deleniti";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testAlarm

<p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestAlarmRequest;
import org.openapis.openapi.models.operations.TestAlarmResponse;
import org.openapis.openapi.models.operations.TestAlarmXAmzTargetEnum;
import org.openapis.openapi.models.shared.AlarmStateEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestAlarmRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestAlarmRequest req = new TestAlarmRequest(                new TestAlarmRequest("voluptate", AlarmStateEnum.ALARM);, TestAlarmXAmzTargetEnum.LIGHTSAIL20161128_TEST_ALARM) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "libero";
                xAmzCredential = "magnam";
                xAmzDate = "sit";
                xAmzSecurityToken = "modi";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "nesciunt";
            }};            

            TestAlarmResponse res = sdk.sdk.testAlarm(req);

            if (res.testAlarmResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unpeerVpc

Unpeers the Lightsail VPC from the user's default VPC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnpeerVpcRequest;
import org.openapis.openapi.models.operations.UnpeerVpcResponse;
import org.openapis.openapi.models.operations.UnpeerVpcXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnpeerVpcRequest req = new UnpeerVpcRequest(                new java.util.HashMap<String, Object>() {{
                                put("fugiat", "nostrum");
                                put("molestiae", "veniam");
                            }}, UnpeerVpcXAmzTargetEnum.LIGHTSAIL20161128_UNPEER_VPC) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "ab";
                xAmzCredential = "modi";
                xAmzDate = "aut";
                xAmzSecurityToken = "aut";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "odio";
            }};            

            UnpeerVpcResponse res = sdk.sdk.unpeerVpc(req);

            if (res.unpeerVpcResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

<p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("numquam",                 new String[]{{
                                                add("possimus"),
                                                add("voluptate"),
                                                add("consectetur"),
                                            }}) {{
                                resourceArn = "nesciunt";
                            }};, UntagResourceXAmzTargetEnum.LIGHTSAIL20161128_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "minus";
                xAmzDate = "sunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "quas";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBucket

<p>Updates an existing Amazon Lightsail bucket.</p> <p>Use this action to update the configuration of an existing bucket, such as versioning, public accessibility, and the Amazon Web Services accounts that can access the bucket.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBucketRequest;
import org.openapis.openapi.models.operations.UpdateBucketResponse;
import org.openapis.openapi.models.operations.UpdateBucketXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessRules;
import org.openapis.openapi.models.shared.AccessTypeEnum;
import org.openapis.openapi.models.shared.BucketAccessLogConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateBucketRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBucketRequest req = new UpdateBucketRequest(                new UpdateBucketRequest("facilis") {{
                                accessLogConfig = new BucketAccessLogConfig(false) {{
                                    destination = "amet";
                                    prefix = "autem";
                                }};;
                                accessRules = new AccessRules() {{
                                    allowPublicOverrides = false;
                                    getObject = AccessTypeEnum.PRIVATE_;
                                }};;
                                readonlyAccessAccounts = new String[]{{
                                    add("rem"),
                                }};
                                versioning = "aut";
                            }};, UpdateBucketXAmzTargetEnum.LIGHTSAIL20161128_UPDATE_BUCKET) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "repellendus";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "quae";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateBucketResponse res = sdk.sdk.updateBucket(req);

            if (res.updateBucketResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBucketBundle

<p>Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. You can update a bucket's bundle only one time within a monthly Amazon Web Services billing cycle. To determine if you can update a bucket's bundle, use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html">GetBuckets</a> action. The <code>ableToUpdateBundle</code> parameter in the response will indicate whether you can currently update a bucket's bundle.</p> <p>Update a bucket's bundle if it's consistently going over its storage space or data transfer quota, or if a bucket's usage is consistently in the lower range of its storage space or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might experience, we strongly recommend that you update a bucket's bundle only as a long-term strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle that will provide the bucket with ample storage space and data transfer for a long time to come.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBucketBundleRequest;
import org.openapis.openapi.models.operations.UpdateBucketBundleResponse;
import org.openapis.openapi.models.operations.UpdateBucketBundleXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateBucketBundleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBucketBundleRequest req = new UpdateBucketBundleRequest(                new UpdateBucketBundleRequest("mollitia", "nulla");, UpdateBucketBundleXAmzTargetEnum.LIGHTSAIL20161128_UPDATE_BUCKET_BUNDLE) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "sed";
                xAmzCredential = "voluptatem";
                xAmzDate = "alias";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "voluptatem";
            }};            

            UpdateBucketBundleResponse res = sdk.sdk.updateBucketBundle(req);

            if (res.updateBucketBundleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContainerService

Updates the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContainerServiceRequest;
import org.openapis.openapi.models.operations.UpdateContainerServiceResponse;
import org.openapis.openapi.models.operations.UpdateContainerServiceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContainerServiceECRImagePullerRoleRequest;
import org.openapis.openapi.models.shared.ContainerServicePowerNameEnum;
import org.openapis.openapi.models.shared.PrivateRegistryAccessRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateContainerServiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContainerServiceRequest req = new UpdateContainerServiceRequest(                new UpdateContainerServiceRequest("qui") {{
                                isDisabled = false;
                                power = ContainerServicePowerNameEnum.MICRO;
                                privateRegistryAccess = new PrivateRegistryAccessRequest() {{
                                    ecrImagePullerRole = new ContainerServiceECRImagePullerRoleRequest() {{
                                        isActive = false;
                                    }};;
                                }};;
                                publicDomainNames = new java.util.HashMap<String, String[]>() {{
                                    put("harum", new String[]{{
                                        add("beatae"),
                                    }});
                                    put("aliquid", new String[]{{
                                        add("optio"),
                                        add("voluptatibus"),
                                    }});
                                    put("molestias", new String[]{{
                                        add("libero"),
                                        add("totam"),
                                        add("sequi"),
                                    }});
                                    put("aliquid", new String[]{{
                                        add("impedit"),
                                        add("ducimus"),
                                    }});
                                }};
                                scale = 140957L;
                            }};, UpdateContainerServiceXAmzTargetEnum.LIGHTSAIL20161128_UPDATE_CONTAINER_SERVICE) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "repellat";
                xAmzDate = "nulla";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "accusamus";
            }};            

            UpdateContainerServiceResponse res = sdk.sdk.updateContainerService(req);

            if (res.updateContainerServiceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDistribution

<p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Use this action to update the configuration of your existing distribution.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDistributionRequest;
import org.openapis.openapi.models.operations.UpdateDistributionResponse;
import org.openapis.openapi.models.operations.UpdateDistributionXAmzTargetEnum;
import org.openapis.openapi.models.shared.BehaviorEnumEnum;
import org.openapis.openapi.models.shared.CacheBehavior;
import org.openapis.openapi.models.shared.CacheBehaviorPerPath;
import org.openapis.openapi.models.shared.CacheSettings;
import org.openapis.openapi.models.shared.CookieObject;
import org.openapis.openapi.models.shared.ForwardValuesEnum;
import org.openapis.openapi.models.shared.HeaderEnumEnum;
import org.openapis.openapi.models.shared.HeaderObject;
import org.openapis.openapi.models.shared.InputOrigin;
import org.openapis.openapi.models.shared.OriginProtocolPolicyEnumEnum;
import org.openapis.openapi.models.shared.QueryStringObject;
import org.openapis.openapi.models.shared.RegionNameEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDistributionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDistributionRequest req = new UpdateDistributionRequest(                new UpdateDistributionRequest("nisi") {{
                                cacheBehaviorSettings = new CacheSettings() {{
                                    allowedHTTPMethods = "rerum";
                                    cachedHTTPMethods = "recusandae";
                                    defaultTTL = 913285L;
                                    forwardedCookies = new CookieObject() {{
                                        cookiesAllowList = new String[]{{
                                            add("rem"),
                                            add("quia"),
                                        }};
                                        option = ForwardValuesEnum.ALLOW_LIST;
                                    }};;
                                    forwardedHeaders = new HeaderObject() {{
                                        headersAllowList = new org.openapis.openapi.models.shared.HeaderEnumEnum[]{{
                                            add(HeaderEnumEnum.ACCEPT_CHARSET),
                                            add(HeaderEnumEnum.REFERER),
                                            add(HeaderEnumEnum.CLOUD_FRONT_VIEWER_COUNTRY),
                                            add(HeaderEnumEnum.ACCEPT),
                                        }};
                                        option = ForwardValuesEnum.ALL;
                                    }};;
                                    forwardedQueryStrings = new QueryStringObject() {{
                                        option = false;
                                        queryStringsAllowList = new String[]{{
                                            add("architecto"),
                                        }};
                                    }};;
                                    maximumTTL = 317898L;
                                    minimumTTL = 758985L;
                                }};;
                                cacheBehaviors = new org.openapis.openapi.models.shared.CacheBehaviorPerPath[]{{
                                    add(new CacheBehaviorPerPath() {{
                                        behavior = BehaviorEnumEnum.DONT_CACHE;
                                        path = "facilis";
                                    }}),
                                    add(new CacheBehaviorPerPath() {{
                                        behavior = BehaviorEnumEnum.CACHE;
                                        path = "a";
                                    }}),
                                    add(new CacheBehaviorPerPath() {{
                                        behavior = BehaviorEnumEnum.CACHE;
                                        path = "dicta";
                                    }}),
                                }};
                                defaultCacheBehavior = new CacheBehavior() {{
                                    behavior = BehaviorEnumEnum.CACHE;
                                }};;
                                isEnabled = false;
                                origin = new InputOrigin() {{
                                    name = "Eleanor Gleason";
                                    protocolPolicy = OriginProtocolPolicyEnumEnum.HTTP_ONLY;
                                    regionName = RegionNameEnum.US_WEST1;
                                }};;
                            }};, UpdateDistributionXAmzTargetEnum.LIGHTSAIL20161128_UPDATE_DISTRIBUTION) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "vero";
                xAmzCredential = "doloribus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "porro";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "totam";
            }};            

            UpdateDistributionResponse res = sdk.sdk.updateDistribution(req);

            if (res.updateDistributionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDistributionBundle

<p>Updates the bundle of your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p> <p>Update your distribution's bundle if your distribution is going over its monthly network transfer quota and is incurring an overage fee.</p> <p>You can update your distribution's bundle only one time within your monthly Amazon Web Services billing cycle. To determine if you can update your distribution's bundle, use the <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the result will indicate whether you can currently update your distribution's bundle.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDistributionBundleRequest;
import org.openapis.openapi.models.operations.UpdateDistributionBundleResponse;
import org.openapis.openapi.models.operations.UpdateDistributionBundleXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDistributionBundleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDistributionBundleRequest req = new UpdateDistributionBundleRequest(                new UpdateDistributionBundleRequest() {{
                                bundleId = "ab";
                                distributionName = "sint";
                            }};, UpdateDistributionBundleXAmzTargetEnum.LIGHTSAIL20161128_UPDATE_DISTRIBUTION_BUNDLE) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "esse";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "vel";
            }};            

            UpdateDistributionBundleResponse res = sdk.sdk.updateDistributionBundle(req);

            if (res.updateDistributionBundleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDomainEntry

<p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainEntryRequest;
import org.openapis.openapi.models.operations.UpdateDomainEntryResponse;
import org.openapis.openapi.models.operations.UpdateDomainEntryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DomainEntry;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDomainEntryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDomainEntryRequest req = new UpdateDomainEntryRequest(                new UpdateDomainEntryRequest(                new DomainEntry() {{
                                                id = "562a7b40-8f05-4e3d-88fd-af313a1f5fd9";
                                                isAlias = false;
                                                name = "Rose Hills";
                                                options = new java.util.HashMap<String, String>() {{
                                                    put("quidem", "nesciunt");
                                                }};
                                                target = "commodi";
                                                type = "sapiente";
                                            }};, "consequuntur");, UpdateDomainEntryXAmzTargetEnum.LIGHTSAIL20161128_UPDATE_DOMAIN_ENTRY) {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "officia";
                xAmzDate = "sint";
                xAmzSecurityToken = "ut";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "tenetur";
            }};            

            UpdateDomainEntryResponse res = sdk.sdk.updateDomainEntry(req);

            if (res.updateDomainEntryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInstanceMetadataOptions

Modifies the Amazon Lightsail instance metadata parameters on a running or stopped instance. When you modify the parameters on a running instance, the <code>GetInstance</code> or <code>GetInstances</code> API operation initially responds with a state of <code>pending</code>. After the parameter modifications are successfully applied, the state changes to <code>applied</code> in subsequent <code>GetInstance</code> or <code>GetInstances</code> API calls. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-instance-metadata-service">Use IMDSv2 with an Amazon Lightsail instance</a> in the <i>Amazon Lightsail Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInstanceMetadataOptionsRequest;
import org.openapis.openapi.models.operations.UpdateInstanceMetadataOptionsResponse;
import org.openapis.openapi.models.operations.UpdateInstanceMetadataOptionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.HttpEndpointEnum;
import org.openapis.openapi.models.shared.HttpProtocolIpv6Enum;
import org.openapis.openapi.models.shared.HttpTokensEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateInstanceMetadataOptionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateInstanceMetadataOptionsRequest req = new UpdateInstanceMetadataOptionsRequest(                new UpdateInstanceMetadataOptionsRequest("libero") {{
                                httpEndpoint = HttpEndpointEnum.DISABLED;
                                httpProtocolIpv6 = HttpProtocolIpv6Enum.DISABLED;
                                httpPutResponseHopLimit = 403147L;
                                httpTokens = HttpTokensEnum.REQUIRED;
                            }};, UpdateInstanceMetadataOptionsXAmzTargetEnum.LIGHTSAIL20161128_UPDATE_INSTANCE_METADATA_OPTIONS) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "hic";
                xAmzDate = "nisi";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "ducimus";
            }};            

            UpdateInstanceMetadataOptionsResponse res = sdk.sdk.updateInstanceMetadataOptions(req);

            if (res.updateInstanceMetadataOptionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLoadBalancerAttribute

<p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLoadBalancerAttributeRequest;
import org.openapis.openapi.models.operations.UpdateLoadBalancerAttributeResponse;
import org.openapis.openapi.models.operations.UpdateLoadBalancerAttributeXAmzTargetEnum;
import org.openapis.openapi.models.shared.LoadBalancerAttributeNameEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLoadBalancerAttributeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLoadBalancerAttributeRequest req = new UpdateLoadBalancerAttributeRequest(                new UpdateLoadBalancerAttributeRequest(LoadBalancerAttributeNameEnum.SESSION_STICKINESS_ENABLED, "architecto", "qui");, UpdateLoadBalancerAttributeXAmzTargetEnum.LIGHTSAIL20161128_UPDATE_LOAD_BALANCER_ATTRIBUTE) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "magni";
                xAmzCredential = "incidunt";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "exercitationem";
            }};            

            UpdateLoadBalancerAttributeResponse res = sdk.sdk.updateLoadBalancerAttribute(req);

            if (res.updateLoadBalancerAttributeResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRelationalDatabase

<p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRelationalDatabaseRequest;
import org.openapis.openapi.models.operations.UpdateRelationalDatabaseResponse;
import org.openapis.openapi.models.operations.UpdateRelationalDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRelationalDatabaseRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRelationalDatabaseRequest req = new UpdateRelationalDatabaseRequest(                new UpdateRelationalDatabaseRequest("facilis") {{
                                applyImmediately = false;
                                caCertificateIdentifier = "impedit";
                                disableBackupRetention = false;
                                enableBackupRetention = false;
                                masterUserPassword = "sit";
                                preferredBackupWindow = "nemo";
                                preferredMaintenanceWindow = "culpa";
                                publiclyAccessible = false;
                                rotateMasterUserPassword = false;
                            }};, UpdateRelationalDatabaseXAmzTargetEnum.LIGHTSAIL20161128_UPDATE_RELATIONAL_DATABASE) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "modi";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "itaque";
            }};            

            UpdateRelationalDatabaseResponse res = sdk.sdk.updateRelationalDatabase(req);

            if (res.updateRelationalDatabaseResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRelationalDatabaseParameters

<p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRelationalDatabaseParametersRequest;
import org.openapis.openapi.models.operations.UpdateRelationalDatabaseParametersResponse;
import org.openapis.openapi.models.operations.UpdateRelationalDatabaseParametersXAmzTargetEnum;
import org.openapis.openapi.models.shared.RelationalDatabaseParameter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRelationalDatabaseParametersRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRelationalDatabaseParametersRequest req = new UpdateRelationalDatabaseParametersRequest(                new UpdateRelationalDatabaseParametersRequest(                new org.openapis.openapi.models.shared.RelationalDatabaseParameter[]{{
                                                add(new RelationalDatabaseParameter() {{
                                                    allowedValues = "enim";
                                                    applyMethod = "doloribus";
                                                    applyType = "assumenda";
                                                    dataType = "officiis";
                                                    description = "architecto";
                                                    isModifiable = false;
                                                    parameterName = "alias";
                                                    parameterValue = "culpa";
                                                }}),
                                                add(new RelationalDatabaseParameter() {{
                                                    allowedValues = "ipsa";
                                                    applyMethod = "nobis";
                                                    applyType = "necessitatibus";
                                                    dataType = "quia";
                                                    description = "dicta";
                                                    isModifiable = false;
                                                    parameterName = "vel";
                                                    parameterValue = "perspiciatis";
                                                }}),
                                                add(new RelationalDatabaseParameter() {{
                                                    allowedValues = "debitis";
                                                    applyMethod = "ullam";
                                                    applyType = "architecto";
                                                    dataType = "accusantium";
                                                    description = "perferendis";
                                                    isModifiable = false;
                                                    parameterName = "veritatis";
                                                    parameterValue = "provident";
                                                }}),
                                                add(new RelationalDatabaseParameter() {{
                                                    allowedValues = "cumque";
                                                    applyMethod = "iure";
                                                    applyType = "quibusdam";
                                                    dataType = "quod";
                                                    description = "nemo";
                                                    isModifiable = false;
                                                    parameterName = "recusandae";
                                                    parameterValue = "velit";
                                                }}),
                                            }}, "magnam");, UpdateRelationalDatabaseParametersXAmzTargetEnum.LIGHTSAIL20161128_UPDATE_RELATIONAL_DATABASE_PARAMETERS) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "sed";
                xAmzDate = "odio";
                xAmzSecurityToken = "natus";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "cum";
            }};            

            UpdateRelationalDatabaseParametersResponse res = sdk.sdk.updateRelationalDatabaseParameters(req);

            if (res.updateRelationalDatabaseParametersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
