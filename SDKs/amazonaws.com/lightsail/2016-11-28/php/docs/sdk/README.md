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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllocateStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllocateStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllocateStaticIpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllocateStaticIpRequest();
    $request->allocateStaticIpRequest = new AllocateStaticIpRequest();
    $request->allocateStaticIpRequest->staticIpName = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = AllocateStaticIpXAmzTargetEnum::LIGHTSAIL20161128_ALLOCATE_STATIC_IP;

    $response = $sdk->sdk->allocateStaticIp($request);

    if ($response->allocateStaticIpResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachCertificateToDistribution

<p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the domains that are associated with the certificate.</p> <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach to your distribution.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachCertificateToDistributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachCertificateToDistributionRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachCertificateToDistributionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachCertificateToDistributionRequest();
    $request->attachCertificateToDistributionRequest = new AttachCertificateToDistributionRequest();
    $request->attachCertificateToDistributionRequest->certificateName = 'delectus';
    $request->attachCertificateToDistributionRequest->distributionName = 'tempora';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = AttachCertificateToDistributionXAmzTargetEnum::LIGHTSAIL20161128_ATTACH_CERTIFICATE_TO_DISTRIBUTION;

    $response = $sdk->sdk->attachCertificateToDistribution($request);

    if ($response->attachCertificateToDistributionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachDisk

<p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachDiskRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachDiskRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachDiskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachDiskRequest();
    $request->attachDiskRequest = new AttachDiskRequest();
    $request->attachDiskRequest->autoMounting = false;
    $request->attachDiskRequest->diskName = 'nisi';
    $request->attachDiskRequest->diskPath = 'recusandae';
    $request->attachDiskRequest->instanceName = 'temporibus';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = AttachDiskXAmzTargetEnum::LIGHTSAIL20161128_ATTACH_DISK;

    $response = $sdk->sdk->attachDisk($request);

    if ($response->attachDiskResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachInstancesToLoadBalancer

<p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachInstancesToLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachInstancesToLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachInstancesToLoadBalancerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachInstancesToLoadBalancerRequest();
    $request->attachInstancesToLoadBalancerRequest = new AttachInstancesToLoadBalancerRequest();
    $request->attachInstancesToLoadBalancerRequest->instanceNames = [
        'quo',
        'odit',
        'at',
        'at',
    ];
    $request->attachInstancesToLoadBalancerRequest->loadBalancerName = 'maiores';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = AttachInstancesToLoadBalancerXAmzTargetEnum::LIGHTSAIL20161128_ATTACH_INSTANCES_TO_LOAD_BALANCER;

    $response = $sdk->sdk->attachInstancesToLoadBalancer($request);

    if ($response->attachInstancesToLoadBalancerResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachLoadBalancerTlsCertificate

<p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachLoadBalancerTlsCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachLoadBalancerTlsCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachLoadBalancerTlsCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachLoadBalancerTlsCertificateRequest();
    $request->attachLoadBalancerTlsCertificateRequest = new AttachLoadBalancerTlsCertificateRequest();
    $request->attachLoadBalancerTlsCertificateRequest->certificateName = 'dicta';
    $request->attachLoadBalancerTlsCertificateRequest->loadBalancerName = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = AttachLoadBalancerTlsCertificateXAmzTargetEnum::LIGHTSAIL20161128_ATTACH_LOAD_BALANCER_TLS_CERTIFICATE;

    $response = $sdk->sdk->attachLoadBalancerTlsCertificate($request);

    if ($response->attachLoadBalancerTlsCertificateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachStaticIp

Attaches a static IP address to a specific Amazon Lightsail instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachStaticIpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachStaticIpRequest();
    $request->attachStaticIpRequest = new AttachStaticIpRequest();
    $request->attachStaticIpRequest->instanceName = 'beatae';
    $request->attachStaticIpRequest->staticIpName = 'commodi';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = AttachStaticIpXAmzTargetEnum::LIGHTSAIL20161128_ATTACH_STATIC_IP;

    $response = $sdk->sdk->attachStaticIp($request);

    if ($response->attachStaticIpResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## closeInstancePublicPorts

<p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CloseInstancePublicPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloseInstancePublicPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PortInfo;
use \OpenAPI\OpenAPI\Models\Shared\NetworkProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloseInstancePublicPortsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloseInstancePublicPortsRequest();
    $request->closeInstancePublicPortsRequest = new CloseInstancePublicPortsRequest();
    $request->closeInstancePublicPortsRequest->instanceName = 'excepturi';
    $request->closeInstancePublicPortsRequest->portInfo = new PortInfo();
    $request->closeInstancePublicPortsRequest->portInfo->cidrListAliases = [
        'perferendis',
    ];
    $request->closeInstancePublicPortsRequest->portInfo->cidrs = [
        'natus',
        'sed',
    ];
    $request->closeInstancePublicPortsRequest->portInfo->fromPort = 612096;
    $request->closeInstancePublicPortsRequest->portInfo->ipv6Cidrs = [
        'natus',
    ];
    $request->closeInstancePublicPortsRequest->portInfo->protocol = NetworkProtocolEnum::ALL;
    $request->closeInstancePublicPortsRequest->portInfo->toPort = 943749;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = CloseInstancePublicPortsXAmzTargetEnum::LIGHTSAIL20161128_CLOSE_INSTANCE_PUBLIC_PORTS;

    $response = $sdk->sdk->closeInstancePublicPorts($request);

    if ($response->closeInstancePublicPortsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copySnapshot

<p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one Amazon Web Services Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopySnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopySnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegionNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\CopySnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopySnapshotRequest();
    $request->copySnapshotRequest = new CopySnapshotRequest();
    $request->copySnapshotRequest->restoreDate = 'quidem';
    $request->copySnapshotRequest->sourceRegion = RegionNameEnum::US_EAST2;
    $request->copySnapshotRequest->sourceResourceName = 'ipsa';
    $request->copySnapshotRequest->sourceSnapshotName = 'reiciendis';
    $request->copySnapshotRequest->targetSnapshotName = 'est';
    $request->copySnapshotRequest->useLatestRestorableAutoSnapshot = false;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = CopySnapshotXAmzTargetEnum::LIGHTSAIL20161128_COPY_SNAPSHOT;

    $response = $sdk->sdk->copySnapshot($request);

    if ($response->copySnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBucket

<p>Creates an Amazon Lightsail bucket.</p> <p>A bucket is a cloud storage resource available in the Lightsail object storage service. Use buckets to store objects such as data and its descriptive metadata. For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBucketRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBucketRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateBucketXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBucketRequest();
    $request->createBucketRequest = new CreateBucketRequest();
    $request->createBucketRequest->bucketName = 'enim';
    $request->createBucketRequest->bundleId = 'omnis';
    $request->createBucketRequest->enableObjectVersioning = false;
    $request->createBucketRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = CreateBucketXAmzTargetEnum::LIGHTSAIL20161128_CREATE_BUCKET;

    $response = $sdk->sdk->createBucket($request);

    if ($response->createBucketResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBucketAccessKey

<p>Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of an access key ID and corresponding secret access key.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html">GetBucketAccessKeys</a> action to get a list of current access keys for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBucketAccessKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBucketAccessKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBucketAccessKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBucketAccessKeyRequest();
    $request->createBucketAccessKeyRequest = new CreateBucketAccessKeyRequest();
    $request->createBucketAccessKeyRequest->bucketName = 'architecto';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = CreateBucketAccessKeyXAmzTargetEnum::LIGHTSAIL20161128_CREATE_BUCKET_ACCESS_KEY;

    $response = $sdk->sdk->createBucketAccessKey($request);

    if ($response->createBucketAccessKeyResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCertificate

<p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN) distribution and a container service.</p> <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code> action to use the certificate and its domains with your distribution. Or use the <code>UpdateContainerService</code> action to use the certificate and its domains with your container service.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCertificateRequest();
    $request->createCertificateRequest = new CreateCertificateRequest();
    $request->createCertificateRequest->certificateName = 'numquam';
    $request->createCertificateRequest->domainName = 'commodi';
    $request->createCertificateRequest->subjectAlternativeNames = [
        'molestiae',
        'velit',
    ];
    $request->createCertificateRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = CreateCertificateXAmzTargetEnum::LIGHTSAIL20161128_CREATE_CERTIFICATE;

    $response = $sdk->sdk->createCertificate($request);

    if ($response->createCertificateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCloudFormationStack

<p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCloudFormationStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCloudFormationStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceEntry;
use \OpenAPI\OpenAPI\Models\Shared\PortInfoSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCloudFormationStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCloudFormationStackRequest();
    $request->createCloudFormationStackRequest = new CreateCloudFormationStackRequest();
    $request->createCloudFormationStackRequest->instances = [
        new InstanceEntry(),
        new InstanceEntry(),
        new InstanceEntry(),
        new InstanceEntry(),
    ];
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = CreateCloudFormationStackXAmzTargetEnum::LIGHTSAIL20161128_CREATE_CLOUD_FORMATION_STACK;

    $response = $sdk->sdk->createCloudFormationStack($request);

    if ($response->createCloudFormationStackResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContactMethod

<p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactMethodRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContactMethodRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactMethodXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContactMethodRequest();
    $request->createContactMethodRequest = new CreateContactMethodRequest();
    $request->createContactMethodRequest->contactEndpoint = 'error';
    $request->createContactMethodRequest->protocol = ContactProtocolEnum::SMS;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = CreateContactMethodXAmzTargetEnum::LIGHTSAIL20161128_CREATE_CONTACT_METHOD;

    $response = $sdk->sdk->createContactMethod($request);

    if ($response->createContactMethodResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContainerService

<p>Creates an Amazon Lightsail container service.</p> <p>A Lightsail container service is a compute resource to which you can deploy containers. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContainerServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainerServiceDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Container;
use \OpenAPI\OpenAPI\Models\Shared\ContainerServiceProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainerServiceHealthCheckConfig;
use \OpenAPI\OpenAPI\Models\Shared\ContainerServicePowerNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrivateRegistryAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainerServiceECRImagePullerRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContainerServiceRequest();
    $request->createContainerServiceRequest = new CreateContainerServiceRequest();
    $request->createContainerServiceRequest->deployment = new ContainerServiceDeploymentRequest();
    $request->createContainerServiceRequest->deployment->containers = [
        'ipsa' => new Container(),
        'omnis' => new Container(),
        'voluptate' => new Container(),
        'cum' => new Container(),
    ];
    $request->createContainerServiceRequest->deployment->publicEndpoint = new EndpointRequest();
    $request->createContainerServiceRequest->deployment->publicEndpoint->containerName = 'perferendis';
    $request->createContainerServiceRequest->deployment->publicEndpoint->containerPort = 39187;
    $request->createContainerServiceRequest->deployment->publicEndpoint->healthCheck = new ContainerServiceHealthCheckConfig();
    $request->createContainerServiceRequest->deployment->publicEndpoint->healthCheck->healthyThreshold = 441711;
    $request->createContainerServiceRequest->deployment->publicEndpoint->healthCheck->intervalSeconds = 282807;
    $request->createContainerServiceRequest->deployment->publicEndpoint->healthCheck->path = 'maiores';
    $request->createContainerServiceRequest->deployment->publicEndpoint->healthCheck->successCodes = 'dicta';
    $request->createContainerServiceRequest->deployment->publicEndpoint->healthCheck->timeoutSeconds = 359444;
    $request->createContainerServiceRequest->deployment->publicEndpoint->healthCheck->unhealthyThreshold = 296140;
    $request->createContainerServiceRequest->power = ContainerServicePowerNameEnum::SMALL;
    $request->createContainerServiceRequest->privateRegistryAccess = new PrivateRegistryAccessRequest();
    $request->createContainerServiceRequest->privateRegistryAccess->ecrImagePullerRole = new ContainerServiceECRImagePullerRoleRequest();
    $request->createContainerServiceRequest->privateRegistryAccess->ecrImagePullerRole->isActive = false;
    $request->createContainerServiceRequest->publicDomainNames = [
        'harum' => [
            'accusamus',
            'commodi',
        ],
    ];
    $request->createContainerServiceRequest->scale = 918236;
    $request->createContainerServiceRequest->serviceName = 'quae';
    $request->createContainerServiceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = CreateContainerServiceXAmzTargetEnum::LIGHTSAIL20161128_CREATE_CONTAINER_SERVICE;

    $response = $sdk->sdk->createContainerService($request);

    if ($response->createContainerServiceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContainerServiceDeployment

<p>Creates a deployment for your Amazon Lightsail container service.</p> <p>A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.</p> <p>You can deploy containers to your container service using container images from a public registry such as Amazon ECR Public, or from your local machine. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerServiceDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContainerServiceDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Container;
use \OpenAPI\OpenAPI\Models\Shared\ContainerServiceProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainerServiceHealthCheckConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerServiceDeploymentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContainerServiceDeploymentRequest();
    $request->createContainerServiceDeploymentRequest = new CreateContainerServiceDeploymentRequest();
    $request->createContainerServiceDeploymentRequest->containers = [
        'quasi' => new Container(),
        'repudiandae' => new Container(),
        'sint' => new Container(),
        'veritatis' => new Container(),
    ];
    $request->createContainerServiceDeploymentRequest->publicEndpoint = new EndpointRequest();
    $request->createContainerServiceDeploymentRequest->publicEndpoint->containerName = 'itaque';
    $request->createContainerServiceDeploymentRequest->publicEndpoint->containerPort = 277718;
    $request->createContainerServiceDeploymentRequest->publicEndpoint->healthCheck = new ContainerServiceHealthCheckConfig();
    $request->createContainerServiceDeploymentRequest->publicEndpoint->healthCheck->healthyThreshold = 318569;
    $request->createContainerServiceDeploymentRequest->publicEndpoint->healthCheck->intervalSeconds = 9356;
    $request->createContainerServiceDeploymentRequest->publicEndpoint->healthCheck->path = 'est';
    $request->createContainerServiceDeploymentRequest->publicEndpoint->healthCheck->successCodes = 'quibusdam';
    $request->createContainerServiceDeploymentRequest->publicEndpoint->healthCheck->timeoutSeconds = 131797;
    $request->createContainerServiceDeploymentRequest->publicEndpoint->healthCheck->unhealthyThreshold = 647174;
    $request->createContainerServiceDeploymentRequest->serviceName = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = CreateContainerServiceDeploymentXAmzTargetEnum::LIGHTSAIL20161128_CREATE_CONTAINER_SERVICE_DEPLOYMENT;

    $response = $sdk->sdk->createContainerServiceDeployment($request);

    if ($response->createContainerServiceDeploymentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContainerServiceRegistryLogin

<p>Creates a temporary set of log in credentials that you can use to log in to the Docker process on your local machine. After you're logged in, you can use the native Docker commands to push your local container images to the container image registry of your Amazon Lightsail account so that you can use them with your Lightsail container service. The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials.</p> <note> <p>You can only push container images to the container service registry of your Lightsail account. You cannot pull container images or perform any other container image management actions on the container service registry.</p> </note> <p>After you push your container images to the container image registry of your Lightsail account, use the <code>RegisterContainerImage</code> action to register the pushed images to a specific Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerServiceRegistryLoginRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerServiceRegistryLoginXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContainerServiceRegistryLoginRequest();
    $request->requestBody = [
        'magni' => 'assumenda',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = CreateContainerServiceRegistryLoginXAmzTargetEnum::LIGHTSAIL20161128_CREATE_CONTAINER_SERVICE_REGISTRY_LOGIN;

    $response = $sdk->sdk->createContainerServiceRegistryLogin($request);

    if ($response->createContainerServiceRegistryLoginResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDisk

<p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDiskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDiskRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOnTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoSnapshotAddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopInstanceOnIdleRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDiskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDiskRequest();
    $request->createDiskRequest = new CreateDiskRequest();
    $request->createDiskRequest->addOns = [
        new AddOnRequest(),
        new AddOnRequest(),
        new AddOnRequest(),
    ];
    $request->createDiskRequest->availabilityZone = 'labore';
    $request->createDiskRequest->diskName = 'delectus';
    $request->createDiskRequest->sizeInGb = 433288;
    $request->createDiskRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = CreateDiskXAmzTargetEnum::LIGHTSAIL20161128_CREATE_DISK;

    $response = $sdk->sdk->createDisk($request);

    if ($response->createDiskResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDiskFromSnapshot

<p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDiskFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDiskFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOnTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoSnapshotAddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopInstanceOnIdleRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDiskFromSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDiskFromSnapshotRequest();
    $request->createDiskFromSnapshotRequest = new CreateDiskFromSnapshotRequest();
    $request->createDiskFromSnapshotRequest->addOns = [
        new AddOnRequest(),
    ];
    $request->createDiskFromSnapshotRequest->availabilityZone = 'debitis';
    $request->createDiskFromSnapshotRequest->diskName = 'a';
    $request->createDiskFromSnapshotRequest->diskSnapshotName = 'dolorum';
    $request->createDiskFromSnapshotRequest->restoreDate = 'in';
    $request->createDiskFromSnapshotRequest->sizeInGb = 449198;
    $request->createDiskFromSnapshotRequest->sourceDiskName = 'illum';
    $request->createDiskFromSnapshotRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createDiskFromSnapshotRequest->useLatestRestorableAutoSnapshot = false;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = CreateDiskFromSnapshotXAmzTargetEnum::LIGHTSAIL20161128_CREATE_DISK_FROM_SNAPSHOT;

    $response = $sdk->sdk->createDiskFromSnapshot($request);

    if ($response->createDiskFromSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDiskSnapshot

<p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDiskSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDiskSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDiskSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDiskSnapshotRequest();
    $request->createDiskSnapshotRequest = new CreateDiskSnapshotRequest();
    $request->createDiskSnapshotRequest->diskName = 'laborum';
    $request->createDiskSnapshotRequest->diskSnapshotName = 'accusamus';
    $request->createDiskSnapshotRequest->instanceName = 'non';
    $request->createDiskSnapshotRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = CreateDiskSnapshotXAmzTargetEnum::LIGHTSAIL20161128_CREATE_DISK_SNAPSHOT;

    $response = $sdk->sdk->createDiskSnapshot($request);

    if ($response->createDiskSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDistribution

<p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDistributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDistributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CacheSettings;
use \OpenAPI\OpenAPI\Models\Shared\CookieObject;
use \OpenAPI\OpenAPI\Models\Shared\ForwardValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\HeaderObject;
use \OpenAPI\OpenAPI\Models\Shared\HeaderEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryStringObject;
use \OpenAPI\OpenAPI\Models\Shared\CacheBehaviorPerPath;
use \OpenAPI\OpenAPI\Models\Shared\BehaviorEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\CacheBehavior;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputOrigin;
use \OpenAPI\OpenAPI\Models\Shared\OriginProtocolPolicyEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDistributionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDistributionRequest();
    $request->createDistributionRequest = new CreateDistributionRequest();
    $request->createDistributionRequest->bundleId = 'blanditiis';
    $request->createDistributionRequest->cacheBehaviorSettings = new CacheSettings();
    $request->createDistributionRequest->cacheBehaviorSettings->allowedHTTPMethods = 'deleniti';
    $request->createDistributionRequest->cacheBehaviorSettings->cachedHTTPMethods = 'sapiente';
    $request->createDistributionRequest->cacheBehaviorSettings->defaultTTL = 230533;
    $request->createDistributionRequest->cacheBehaviorSettings->forwardedCookies = new CookieObject();
    $request->createDistributionRequest->cacheBehaviorSettings->forwardedCookies->cookiesAllowList = [
        'nisi',
        'vel',
        'natus',
    ];
    $request->createDistributionRequest->cacheBehaviorSettings->forwardedCookies->option = ForwardValuesEnum::ALLOW_LIST;
    $request->createDistributionRequest->cacheBehaviorSettings->forwardedHeaders = new HeaderObject();
    $request->createDistributionRequest->cacheBehaviorSettings->forwardedHeaders->headersAllowList = [
        HeaderEnumEnum::ACCEPT,
        HeaderEnumEnum::CLOUD_FRONT_IS_DESKTOP_VIEWER,
    ];
    $request->createDistributionRequest->cacheBehaviorSettings->forwardedHeaders->option = ForwardValuesEnum::NONE;
    $request->createDistributionRequest->cacheBehaviorSettings->forwardedQueryStrings = new QueryStringObject();
    $request->createDistributionRequest->cacheBehaviorSettings->forwardedQueryStrings->option = false;
    $request->createDistributionRequest->cacheBehaviorSettings->forwardedQueryStrings->queryStringsAllowList = [
        'id',
        'labore',
        'labore',
    ];
    $request->createDistributionRequest->cacheBehaviorSettings->maximumTTL = 383462;
    $request->createDistributionRequest->cacheBehaviorSettings->minimumTTL = 618016;
    $request->createDistributionRequest->cacheBehaviors = [
        new CacheBehaviorPerPath(),
        new CacheBehaviorPerPath(),
        new CacheBehaviorPerPath(),
    ];
    $request->createDistributionRequest->defaultCacheBehavior = new CacheBehavior();
    $request->createDistributionRequest->defaultCacheBehavior->behavior = BehaviorEnumEnum::DONT_CACHE;
    $request->createDistributionRequest->distributionName = 'vero';
    $request->createDistributionRequest->ipAddressType = IpAddressTypeEnum::DUALSTACK;
    $request->createDistributionRequest->origin = new InputOrigin();
    $request->createDistributionRequest->origin->name = 'Danielle Bosco';
    $request->createDistributionRequest->origin->protocolPolicy = OriginProtocolPolicyEnumEnum::HTTPS_ONLY;
    $request->createDistributionRequest->origin->regionName = RegionNameEnum::CA_CENTRAL1;
    $request->createDistributionRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = CreateDistributionXAmzTargetEnum::LIGHTSAIL20161128_CREATE_DISTRIBUTION;

    $response = $sdk->sdk->createDistribution($request);

    if ($response->createDistributionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomain

<p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomainRequest();
    $request->createDomainRequest = new CreateDomainRequest();
    $request->createDomainRequest->domainName = 'necessitatibus';
    $request->createDomainRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = CreateDomainXAmzTargetEnum::LIGHTSAIL20161128_CREATE_DOMAIN;

    $response = $sdk->sdk->createDomain($request);

    if ($response->createDomainResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomainEntry

<p>Creates one of the following domain name system (DNS) records in a domain DNS zone: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainEntryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDomainEntryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DomainEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainEntryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomainEntryRequest();
    $request->createDomainEntryRequest = new CreateDomainEntryRequest();
    $request->createDomainEntryRequest->domainEntry = new DomainEntry();
    $request->createDomainEntryRequest->domainEntry->id = '8b711e5b-7fd2-4ed0-a892-1cddc692601f';
    $request->createDomainEntryRequest->domainEntry->isAlias = false;
    $request->createDomainEntryRequest->domainEntry->name = 'Clyde Kling';
    $request->createDomainEntryRequest->domainEntry->options = [
        'pariatur' => 'nemo',
    ];
    $request->createDomainEntryRequest->domainEntry->target = 'voluptatibus';
    $request->createDomainEntryRequest->domainEntry->type = 'perferendis';
    $request->createDomainEntryRequest->domainName = 'fugiat';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = CreateDomainEntryXAmzTargetEnum::LIGHTSAIL20161128_CREATE_DOMAIN_ENTRY;

    $response = $sdk->sdk->createDomainEntry($request);

    if ($response->createDomainEntryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGUISessionAccessDetails

<p>Creates two URLs that are used to access a virtual computer’s graphical user interface (GUI) session. The primary URL initiates a web-based NICE DCV session to the virtual computer's application. The secondary URL initiates a web-based NICE DCV session to the virtual computer's operating session. </p> <p>Use <code>StartGUISession</code> to open the session.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGUISessionAccessDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGUISessionAccessDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGUISessionAccessDetailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGUISessionAccessDetailsRequest();
    $request->createGUISessionAccessDetailsRequest = new CreateGUISessionAccessDetailsRequest();
    $request->createGUISessionAccessDetailsRequest->resourceName = 'dolores';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = CreateGUISessionAccessDetailsXAmzTargetEnum::LIGHTSAIL20161128_CREATE_GUI_SESSION_ACCESS_DETAILS;

    $response = $sdk->sdk->createGUISessionAccessDetails($request);

    if ($response->createGUISessionAccessDetailsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInstanceSnapshot

<p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstanceSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateInstanceSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstanceSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInstanceSnapshotRequest();
    $request->createInstanceSnapshotRequest = new CreateInstanceSnapshotRequest();
    $request->createInstanceSnapshotRequest->instanceName = 'perferendis';
    $request->createInstanceSnapshotRequest->instanceSnapshotName = 'dolores';
    $request->createInstanceSnapshotRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = CreateInstanceSnapshotXAmzTargetEnum::LIGHTSAIL20161128_CREATE_INSTANCE_SNAPSHOT;

    $response = $sdk->sdk->createInstanceSnapshot($request);

    if ($response->createInstanceSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInstances

<p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOnTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoSnapshotAddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopInstanceOnIdleRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInstancesRequest();
    $request->createInstancesRequest = new CreateInstancesRequest();
    $request->createInstancesRequest->addOns = [
        new AddOnRequest(),
        new AddOnRequest(),
        new AddOnRequest(),
    ];
    $request->createInstancesRequest->availabilityZone = 'perspiciatis';
    $request->createInstancesRequest->blueprintId = 'voluptatem';
    $request->createInstancesRequest->bundleId = 'porro';
    $request->createInstancesRequest->customImageName = 'consequuntur';
    $request->createInstancesRequest->instanceNames = [
        'error',
        'eaque',
        'occaecati',
    ];
    $request->createInstancesRequest->ipAddressType = IpAddressTypeEnum::IPV4;
    $request->createInstancesRequest->keyPairName = 'adipisci';
    $request->createInstancesRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createInstancesRequest->userData = 'earum';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = CreateInstancesXAmzTargetEnum::LIGHTSAIL20161128_CREATE_INSTANCES;

    $response = $sdk->sdk->createInstances($request);

    if ($response->createInstancesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInstancesFromSnapshot

<p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstancesFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateInstancesFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOnTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoSnapshotAddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopInstanceOnIdleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiskMap;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstancesFromSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInstancesFromSnapshotRequest();
    $request->createInstancesFromSnapshotRequest = new CreateInstancesFromSnapshotRequest();
    $request->createInstancesFromSnapshotRequest->addOns = [
        new AddOnRequest(),
        new AddOnRequest(),
        new AddOnRequest(),
    ];
    $request->createInstancesFromSnapshotRequest->attachedDiskMapping = [
        'quaerat' => [
            new DiskMap(),
            new DiskMap(),
            new DiskMap(),
        ],
        'aliquid' => [
            new DiskMap(),
        ],
        'dolorem' => [
            new DiskMap(),
        ],
        'qui' => [
            new DiskMap(),
        ],
    ];
    $request->createInstancesFromSnapshotRequest->availabilityZone = 'hic';
    $request->createInstancesFromSnapshotRequest->bundleId = 'excepturi';
    $request->createInstancesFromSnapshotRequest->instanceNames = [
        'voluptate',
        'dignissimos',
        'reiciendis',
    ];
    $request->createInstancesFromSnapshotRequest->instanceSnapshotName = 'amet';
    $request->createInstancesFromSnapshotRequest->ipAddressType = IpAddressTypeEnum::IPV4;
    $request->createInstancesFromSnapshotRequest->keyPairName = 'numquam';
    $request->createInstancesFromSnapshotRequest->restoreDate = 'veritatis';
    $request->createInstancesFromSnapshotRequest->sourceInstanceName = 'ipsa';
    $request->createInstancesFromSnapshotRequest->tags = [
        new Tag(),
    ];
    $request->createInstancesFromSnapshotRequest->useLatestRestorableAutoSnapshot = false;
    $request->createInstancesFromSnapshotRequest->userData = 'iure';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = CreateInstancesFromSnapshotXAmzTargetEnum::LIGHTSAIL20161128_CREATE_INSTANCES_FROM_SNAPSHOT;

    $response = $sdk->sdk->createInstancesFromSnapshot($request);

    if ($response->createInstancesFromSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createKeyPair

<p>Creates a custom SSH key pair that you can use with an Amazon Lightsail instance.</p> <note> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> action to create a Lightsail default key pair in an Amazon Web Services Region where a default key pair does not currently exist.</p> </note> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateKeyPairXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateKeyPairRequest();
    $request->createKeyPairRequest = new CreateKeyPairRequest();
    $request->createKeyPairRequest->keyPairName = 'eos';
    $request->createKeyPairRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = CreateKeyPairXAmzTargetEnum::LIGHTSAIL20161128_CREATE_KEY_PAIR;

    $response = $sdk->sdk->createKeyPair($request);

    if ($response->createKeyPairResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLoadBalancer

<p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoadBalancerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLoadBalancerRequest();
    $request->createLoadBalancerRequest = new CreateLoadBalancerRequest();
    $request->createLoadBalancerRequest->certificateAlternativeNames = [
        'deleniti',
        'omnis',
        'necessitatibus',
    ];
    $request->createLoadBalancerRequest->certificateDomainName = 'distinctio';
    $request->createLoadBalancerRequest->certificateName = 'asperiores';
    $request->createLoadBalancerRequest->healthCheckPath = 'nihil';
    $request->createLoadBalancerRequest->instancePort = 216897;
    $request->createLoadBalancerRequest->ipAddressType = IpAddressTypeEnum::DUALSTACK;
    $request->createLoadBalancerRequest->loadBalancerName = 'id';
    $request->createLoadBalancerRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createLoadBalancerRequest->tlsPolicyName = 'eius';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = CreateLoadBalancerXAmzTargetEnum::LIGHTSAIL20161128_CREATE_LOAD_BALANCER;

    $response = $sdk->sdk->createLoadBalancer($request);

    if ($response->createLoadBalancerResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLoadBalancerTlsCertificate

<p>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoadBalancerTlsCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLoadBalancerTlsCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoadBalancerTlsCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLoadBalancerTlsCertificateRequest();
    $request->createLoadBalancerTlsCertificateRequest = new CreateLoadBalancerTlsCertificateRequest();
    $request->createLoadBalancerTlsCertificateRequest->certificateAlternativeNames = [
        'deserunt',
        'provident',
    ];
    $request->createLoadBalancerTlsCertificateRequest->certificateDomainName = 'minima';
    $request->createLoadBalancerTlsCertificateRequest->certificateName = 'repellendus';
    $request->createLoadBalancerTlsCertificateRequest->loadBalancerName = 'totam';
    $request->createLoadBalancerTlsCertificateRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = CreateLoadBalancerTlsCertificateXAmzTargetEnum::LIGHTSAIL20161128_CREATE_LOAD_BALANCER_TLS_CERTIFICATE;

    $response = $sdk->sdk->createLoadBalancerTlsCertificate($request);

    if ($response->createLoadBalancerTlsCertificateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRelationalDatabase

<p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelationalDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRelationalDatabaseRequest();
    $request->createRelationalDatabaseRequest = new CreateRelationalDatabaseRequest();
    $request->createRelationalDatabaseRequest->availabilityZone = 'qui';
    $request->createRelationalDatabaseRequest->masterDatabaseName = 'dolorum';
    $request->createRelationalDatabaseRequest->masterUserPassword = 'a';
    $request->createRelationalDatabaseRequest->masterUsername = 'esse';
    $request->createRelationalDatabaseRequest->preferredBackupWindow = 'harum';
    $request->createRelationalDatabaseRequest->preferredMaintenanceWindow = 'iusto';
    $request->createRelationalDatabaseRequest->publiclyAccessible = false;
    $request->createRelationalDatabaseRequest->relationalDatabaseBlueprintId = 'ipsum';
    $request->createRelationalDatabaseRequest->relationalDatabaseBundleId = 'quisquam';
    $request->createRelationalDatabaseRequest->relationalDatabaseName = 'tenetur';
    $request->createRelationalDatabaseRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = CreateRelationalDatabaseXAmzTargetEnum::LIGHTSAIL20161128_CREATE_RELATIONAL_DATABASE;

    $response = $sdk->sdk->createRelationalDatabase($request);

    if ($response->createRelationalDatabaseResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRelationalDatabaseFromSnapshot

<p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelationalDatabaseFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRelationalDatabaseFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelationalDatabaseFromSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRelationalDatabaseFromSnapshotRequest();
    $request->createRelationalDatabaseFromSnapshotRequest = new CreateRelationalDatabaseFromSnapshotRequest();
    $request->createRelationalDatabaseFromSnapshotRequest->availabilityZone = 'nihil';
    $request->createRelationalDatabaseFromSnapshotRequest->publiclyAccessible = false;
    $request->createRelationalDatabaseFromSnapshotRequest->relationalDatabaseBundleId = 'sit';
    $request->createRelationalDatabaseFromSnapshotRequest->relationalDatabaseName = 'expedita';
    $request->createRelationalDatabaseFromSnapshotRequest->relationalDatabaseSnapshotName = 'neque';
    $request->createRelationalDatabaseFromSnapshotRequest->restoreTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T23:45:18.595Z');
    $request->createRelationalDatabaseFromSnapshotRequest->sourceRelationalDatabaseName = 'libero';
    $request->createRelationalDatabaseFromSnapshotRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createRelationalDatabaseFromSnapshotRequest->useLatestRestorableTime = false;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = CreateRelationalDatabaseFromSnapshotXAmzTargetEnum::LIGHTSAIL20161128_CREATE_RELATIONAL_DATABASE_FROM_SNAPSHOT;

    $response = $sdk->sdk->createRelationalDatabaseFromSnapshot($request);

    if ($response->createRelationalDatabaseFromSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRelationalDatabaseSnapshot

<p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelationalDatabaseSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRelationalDatabaseSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelationalDatabaseSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRelationalDatabaseSnapshotRequest();
    $request->createRelationalDatabaseSnapshotRequest = new CreateRelationalDatabaseSnapshotRequest();
    $request->createRelationalDatabaseSnapshotRequest->relationalDatabaseName = 'pariatur';
    $request->createRelationalDatabaseSnapshotRequest->relationalDatabaseSnapshotName = 'soluta';
    $request->createRelationalDatabaseSnapshotRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = CreateRelationalDatabaseSnapshotXAmzTargetEnum::LIGHTSAIL20161128_CREATE_RELATIONAL_DATABASE_SNAPSHOT;

    $response = $sdk->sdk->createRelationalDatabaseSnapshot($request);

    if ($response->createRelationalDatabaseSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlarm

<p>Deletes an alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlarmRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAlarmRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlarmXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAlarmRequest();
    $request->deleteAlarmRequest = new DeleteAlarmRequest();
    $request->deleteAlarmRequest->alarmName = 'aliquid';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = DeleteAlarmXAmzTargetEnum::LIGHTSAIL20161128_DELETE_ALARM;

    $response = $sdk->sdk->deleteAlarm($request);

    if ($response->deleteAlarmResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAutoSnapshot

Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutoSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAutoSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutoSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAutoSnapshotRequest();
    $request->deleteAutoSnapshotRequest = new DeleteAutoSnapshotRequest();
    $request->deleteAutoSnapshotRequest->date = 'odio';
    $request->deleteAutoSnapshotRequest->resourceName = 'sunt';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = DeleteAutoSnapshotXAmzTargetEnum::LIGHTSAIL20161128_DELETE_AUTO_SNAPSHOT;

    $response = $sdk->sdk->deleteAutoSnapshot($request);

    if ($response->deleteAutoSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBucket

<p>Deletes a Amazon Lightsail bucket.</p> <note> <p>When you delete your bucket, the bucket name is released and can be reused for a new bucket in your account or another Amazon Web Services account.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBucketRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBucketRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBucketXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBucketRequest();
    $request->deleteBucketRequest = new DeleteBucketRequest();
    $request->deleteBucketRequest->bucketName = 'et';
    $request->deleteBucketRequest->forceDelete = false;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = DeleteBucketXAmzTargetEnum::LIGHTSAIL20161128_DELETE_BUCKET;

    $response = $sdk->sdk->deleteBucket($request);

    if ($response->deleteBucketResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBucketAccessKey

<p>Deletes an access key for the specified Amazon Lightsail bucket.</p> <p>We recommend that you delete an access key if the secret access key is compromised.</p> <p>For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBucketAccessKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBucketAccessKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBucketAccessKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBucketAccessKeyRequest();
    $request->deleteBucketAccessKeyRequest = new DeleteBucketAccessKeyRequest();
    $request->deleteBucketAccessKeyRequest->accessKeyId = 'aperiam';
    $request->deleteBucketAccessKeyRequest->bucketName = 'delectus';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = DeleteBucketAccessKeyXAmzTargetEnum::LIGHTSAIL20161128_DELETE_BUCKET_ACCESS_KEY;

    $response = $sdk->sdk->deleteBucketAccessKey($request);

    if ($response->deleteBucketAccessKeyResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCertificate

<p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Certificates that are currently attached to a distribution cannot be deleted. Use the <code>DetachCertificateFromDistribution</code> action to detach a certificate from a distribution.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCertificateRequest();
    $request->deleteCertificateRequest = new DeleteCertificateRequest();
    $request->deleteCertificateRequest->certificateName = 'aut';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = DeleteCertificateXAmzTargetEnum::LIGHTSAIL20161128_DELETE_CERTIFICATE;

    $response = $sdk->sdk->deleteCertificate($request);

    if ($response->deleteCertificateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContactMethod

<p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactMethodRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteContactMethodRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactMethodXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContactMethodRequest();
    $request->deleteContactMethodRequest = new DeleteContactMethodRequest();
    $request->deleteContactMethodRequest->protocol = ContactProtocolEnum::EMAIL;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DeleteContactMethodXAmzTargetEnum::LIGHTSAIL20161128_DELETE_CONTACT_METHOD;

    $response = $sdk->sdk->deleteContactMethod($request);

    if ($response->deleteContactMethodResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContainerImage

Deletes a container image that is registered to your Amazon Lightsail container service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContainerImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteContainerImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContainerImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContainerImageRequest();
    $request->deleteContainerImageRequest = new DeleteContainerImageRequest();
    $request->deleteContainerImageRequest->image = 'voluptatibus';
    $request->deleteContainerImageRequest->serviceName = 'quisquam';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = DeleteContainerImageXAmzTargetEnum::LIGHTSAIL20161128_DELETE_CONTAINER_IMAGE;

    $response = $sdk->sdk->deleteContainerImage($request);

    if ($response->deleteContainerImageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContainerService

Deletes your Amazon Lightsail container service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContainerServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteContainerServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContainerServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContainerServiceRequest();
    $request->deleteContainerServiceRequest = new DeleteContainerServiceRequest();
    $request->deleteContainerServiceRequest->serviceName = 'vero';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = DeleteContainerServiceXAmzTargetEnum::LIGHTSAIL20161128_DELETE_CONTAINER_SERVICE;

    $response = $sdk->sdk->deleteContainerService($request);

    if ($response->deleteContainerServiceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDisk

<p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDiskRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDiskRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDiskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDiskRequest();
    $request->deleteDiskRequest = new DeleteDiskRequest();
    $request->deleteDiskRequest->diskName = 'facilis';
    $request->deleteDiskRequest->forceDeleteAddOns = false;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DeleteDiskXAmzTargetEnum::LIGHTSAIL20161128_DELETE_DISK;

    $response = $sdk->sdk->deleteDisk($request);

    if ($response->deleteDiskResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDiskSnapshot

<p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDiskSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDiskSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDiskSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDiskSnapshotRequest();
    $request->deleteDiskSnapshotRequest = new DeleteDiskSnapshotRequest();
    $request->deleteDiskSnapshotRequest->diskSnapshotName = 'impedit';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DeleteDiskSnapshotXAmzTargetEnum::LIGHTSAIL20161128_DELETE_DISK_SNAPSHOT;

    $response = $sdk->sdk->deleteDiskSnapshot($request);

    if ($response->deleteDiskSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDistribution

Deletes your Amazon Lightsail content delivery network (CDN) distribution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDistributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDistributionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDistributionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDistributionRequest();
    $request->deleteDistributionRequest = new DeleteDistributionRequest();
    $request->deleteDistributionRequest->distributionName = 'doloribus';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DeleteDistributionXAmzTargetEnum::LIGHTSAIL20161128_DELETE_DISTRIBUTION;

    $response = $sdk->sdk->deleteDistribution($request);

    if ($response->deleteDistributionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomain

<p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDomainRequest();
    $request->deleteDomainRequest = new DeleteDomainRequest();
    $request->deleteDomainRequest->domainName = 'ea';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = DeleteDomainXAmzTargetEnum::LIGHTSAIL20161128_DELETE_DOMAIN;

    $response = $sdk->sdk->deleteDomain($request);

    if ($response->deleteDomainResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomainEntry

<p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainEntryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDomainEntryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DomainEntry;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainEntryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDomainEntryRequest();
    $request->deleteDomainEntryRequest = new DeleteDomainEntryRequest();
    $request->deleteDomainEntryRequest->domainEntry = new DomainEntry();
    $request->deleteDomainEntryRequest->domainEntry->id = '13f16d9f-5fce-46c5-9614-6c3e250fb008';
    $request->deleteDomainEntryRequest->domainEntry->isAlias = false;
    $request->deleteDomainEntryRequest->domainEntry->name = 'Jim Corkery I';
    $request->deleteDomainEntryRequest->domainEntry->options = [
        'dolorum' => 'laborum',
    ];
    $request->deleteDomainEntryRequest->domainEntry->target = 'placeat';
    $request->deleteDomainEntryRequest->domainEntry->type = 'velit';
    $request->deleteDomainEntryRequest->domainName = 'eum';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = DeleteDomainEntryXAmzTargetEnum::LIGHTSAIL20161128_DELETE_DOMAIN_ENTRY;

    $response = $sdk->sdk->deleteDomainEntry($request);

    if ($response->deleteDomainEntryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInstance

<p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInstanceRequest();
    $request->deleteInstanceRequest = new DeleteInstanceRequest();
    $request->deleteInstanceRequest->forceDeleteAddOns = false;
    $request->deleteInstanceRequest->instanceName = 'quasi';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = DeleteInstanceXAmzTargetEnum::LIGHTSAIL20161128_DELETE_INSTANCE;

    $response = $sdk->sdk->deleteInstance($request);

    if ($response->deleteInstanceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInstanceSnapshot

<p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstanceSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteInstanceSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstanceSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInstanceSnapshotRequest();
    $request->deleteInstanceSnapshotRequest = new DeleteInstanceSnapshotRequest();
    $request->deleteInstanceSnapshotRequest->instanceSnapshotName = 'odio';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DeleteInstanceSnapshotXAmzTargetEnum::LIGHTSAIL20161128_DELETE_INSTANCE_SNAPSHOT;

    $response = $sdk->sdk->deleteInstanceSnapshot($request);

    if ($response->deleteInstanceSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteKeyPair

<p>Deletes the specified key pair by removing the public key from Amazon Lightsail.</p> <p>You can delete key pairs that were created using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html">ImportKeyPair</a> and <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html">CreateKeyPair</a> actions, as well as the Lightsail default key pair. A new default key pair will not be created unless you launch an instance without specifying a custom key pair, or you call the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> API. </p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeyPairXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKeyPairRequest();
    $request->deleteKeyPairRequest = new DeleteKeyPairRequest();
    $request->deleteKeyPairRequest->expectedFingerprint = 'fugiat';
    $request->deleteKeyPairRequest->keyPairName = 'ut';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = DeleteKeyPairXAmzTargetEnum::LIGHTSAIL20161128_DELETE_KEY_PAIR;

    $response = $sdk->sdk->deleteKeyPair($request);

    if ($response->deleteKeyPairResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteKnownHostKeys

<p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKnownHostKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteKnownHostKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKnownHostKeysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKnownHostKeysRequest();
    $request->deleteKnownHostKeysRequest = new DeleteKnownHostKeysRequest();
    $request->deleteKnownHostKeysRequest->instanceName = 'ipsa';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = DeleteKnownHostKeysXAmzTargetEnum::LIGHTSAIL20161128_DELETE_KNOWN_HOST_KEYS;

    $response = $sdk->sdk->deleteKnownHostKeys($request);

    if ($response->deleteKnownHostKeysResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLoadBalancer

<p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLoadBalancerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLoadBalancerRequest();
    $request->deleteLoadBalancerRequest = new DeleteLoadBalancerRequest();
    $request->deleteLoadBalancerRequest->loadBalancerName = 'eius';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = DeleteLoadBalancerXAmzTargetEnum::LIGHTSAIL20161128_DELETE_LOAD_BALANCER;

    $response = $sdk->sdk->deleteLoadBalancer($request);

    if ($response->deleteLoadBalancerResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLoadBalancerTlsCertificate

<p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLoadBalancerTlsCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLoadBalancerTlsCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLoadBalancerTlsCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLoadBalancerTlsCertificateRequest();
    $request->deleteLoadBalancerTlsCertificateRequest = new DeleteLoadBalancerTlsCertificateRequest();
    $request->deleteLoadBalancerTlsCertificateRequest->certificateName = 'ipsam';
    $request->deleteLoadBalancerTlsCertificateRequest->force = false;
    $request->deleteLoadBalancerTlsCertificateRequest->loadBalancerName = 'aspernatur';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = DeleteLoadBalancerTlsCertificateXAmzTargetEnum::LIGHTSAIL20161128_DELETE_LOAD_BALANCER_TLS_CERTIFICATE;

    $response = $sdk->sdk->deleteLoadBalancerTlsCertificate($request);

    if ($response->deleteLoadBalancerTlsCertificateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRelationalDatabase

<p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRelationalDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRelationalDatabaseRequest();
    $request->deleteRelationalDatabaseRequest = new DeleteRelationalDatabaseRequest();
    $request->deleteRelationalDatabaseRequest->finalRelationalDatabaseSnapshotName = 'dignissimos';
    $request->deleteRelationalDatabaseRequest->relationalDatabaseName = 'inventore';
    $request->deleteRelationalDatabaseRequest->skipFinalSnapshot = false;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = DeleteRelationalDatabaseXAmzTargetEnum::LIGHTSAIL20161128_DELETE_RELATIONAL_DATABASE;

    $response = $sdk->sdk->deleteRelationalDatabase($request);

    if ($response->deleteRelationalDatabaseResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRelationalDatabaseSnapshot

<p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRelationalDatabaseSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRelationalDatabaseSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRelationalDatabaseSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRelationalDatabaseSnapshotRequest();
    $request->deleteRelationalDatabaseSnapshotRequest = new DeleteRelationalDatabaseSnapshotRequest();
    $request->deleteRelationalDatabaseSnapshotRequest->relationalDatabaseSnapshotName = 'sapiente';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = DeleteRelationalDatabaseSnapshotXAmzTargetEnum::LIGHTSAIL20161128_DELETE_RELATIONAL_DATABASE_SNAPSHOT;

    $response = $sdk->sdk->deleteRelationalDatabaseSnapshot($request);

    if ($response->deleteRelationalDatabaseSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachCertificateFromDistribution

<p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is detached, your distribution stops accepting traffic for all of the domains that are associated with the certificate.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachCertificateFromDistributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetachCertificateFromDistributionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetachCertificateFromDistributionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachCertificateFromDistributionRequest();
    $request->detachCertificateFromDistributionRequest = new DetachCertificateFromDistributionRequest();
    $request->detachCertificateFromDistributionRequest->distributionName = 'praesentium';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = DetachCertificateFromDistributionXAmzTargetEnum::LIGHTSAIL20161128_DETACH_CERTIFICATE_FROM_DISTRIBUTION;

    $response = $sdk->sdk->detachCertificateFromDistribution($request);

    if ($response->detachCertificateFromDistributionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachDisk

<p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachDiskRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetachDiskRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetachDiskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachDiskRequest();
    $request->detachDiskRequest = new DetachDiskRequest();
    $request->detachDiskRequest->diskName = 'explicabo';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = DetachDiskXAmzTargetEnum::LIGHTSAIL20161128_DETACH_DISK;

    $response = $sdk->sdk->detachDisk($request);

    if ($response->detachDiskResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachInstancesFromLoadBalancer

<p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachInstancesFromLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetachInstancesFromLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetachInstancesFromLoadBalancerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachInstancesFromLoadBalancerRequest();
    $request->detachInstancesFromLoadBalancerRequest = new DetachInstancesFromLoadBalancerRequest();
    $request->detachInstancesFromLoadBalancerRequest->instanceNames = [
        'occaecati',
        'atque',
        'et',
        'esse',
    ];
    $request->detachInstancesFromLoadBalancerRequest->loadBalancerName = 'eveniet';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = DetachInstancesFromLoadBalancerXAmzTargetEnum::LIGHTSAIL20161128_DETACH_INSTANCES_FROM_LOAD_BALANCER;

    $response = $sdk->sdk->detachInstancesFromLoadBalancer($request);

    if ($response->detachInstancesFromLoadBalancerResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachStaticIp

Detaches a static IP from the Amazon Lightsail instance to which it is attached.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetachStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetachStaticIpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachStaticIpRequest();
    $request->detachStaticIpRequest = new DetachStaticIpRequest();
    $request->detachStaticIpRequest->staticIpName = 'quasi';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = DetachStaticIpXAmzTargetEnum::LIGHTSAIL20161128_DETACH_STATIC_IP;

    $response = $sdk->sdk->detachStaticIp($request);

    if ($response->detachStaticIpResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableAddOn

Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableAddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableAddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOnTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisableAddOnXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableAddOnRequest();
    $request->disableAddOnRequest = new DisableAddOnRequest();
    $request->disableAddOnRequest->addOnType = AddOnTypeEnum::STOP_INSTANCE_ON_IDLE;
    $request->disableAddOnRequest->resourceName = 'eligendi';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = DisableAddOnXAmzTargetEnum::LIGHTSAIL20161128_DISABLE_ADD_ON;

    $response = $sdk->sdk->disableAddOn($request);

    if ($response->disableAddOnResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadDefaultKeyPair

<p>Downloads the regional Amazon Lightsail default key pair.</p> <p>This action also creates a Lightsail default key pair if a default key pair does not currently exist in the Amazon Web Services Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadDefaultKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Operations\DownloadDefaultKeyPairXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadDefaultKeyPairRequest();
    $request->requestBody = [
        'quaerat' => 'sapiente',
        'consectetur' => 'esse',
        'blanditiis' => 'provident',
        'a' => 'nulla',
    ];
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = DownloadDefaultKeyPairXAmzTargetEnum::LIGHTSAIL20161128_DOWNLOAD_DEFAULT_KEY_PAIR;

    $response = $sdk->sdk->downloadDefaultKeyPair($request);

    if ($response->downloadDefaultKeyPairResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableAddOn

Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableAddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableAddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOnTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoSnapshotAddOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopInstanceOnIdleRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableAddOnXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableAddOnRequest();
    $request->enableAddOnRequest = new EnableAddOnRequest();
    $request->enableAddOnRequest->addOnRequest = new AddOnRequest();
    $request->enableAddOnRequest->addOnRequest->addOnType = AddOnTypeEnum::STOP_INSTANCE_ON_IDLE;
    $request->enableAddOnRequest->addOnRequest->autoSnapshotAddOnRequest = new AutoSnapshotAddOnRequest();
    $request->enableAddOnRequest->addOnRequest->autoSnapshotAddOnRequest->snapshotTimeOfDay = 'quia';
    $request->enableAddOnRequest->addOnRequest->stopInstanceOnIdleRequest = new StopInstanceOnIdleRequest();
    $request->enableAddOnRequest->addOnRequest->stopInstanceOnIdleRequest->duration = 'eveniet';
    $request->enableAddOnRequest->addOnRequest->stopInstanceOnIdleRequest->threshold = 'asperiores';
    $request->enableAddOnRequest->resourceName = 'facere';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = EnableAddOnXAmzTargetEnum::LIGHTSAIL20161128_ENABLE_ADD_ON;

    $response = $sdk->sdk->enableAddOn($request);

    if ($response->enableAddOnResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSnapshot

<p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportSnapshotRequest();
    $request->exportSnapshotRequest = new ExportSnapshotRequest();
    $request->exportSnapshotRequest->sourceSnapshotName = 'quae';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = ExportSnapshotXAmzTargetEnum::LIGHTSAIL20161128_EXPORT_SNAPSHOT;

    $response = $sdk->sdk->exportSnapshot($request);

    if ($response->exportSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActiveNames

Returns the names of all active (not deleted) resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActiveNamesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetActiveNamesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetActiveNamesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActiveNamesRequest();
    $request->getActiveNamesRequest = new GetActiveNamesRequest();
    $request->getActiveNamesRequest->pageToken = 'accusantium';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = GetActiveNamesXAmzTargetEnum::LIGHTSAIL20161128_GET_ACTIVE_NAMES;

    $response = $sdk->sdk->getActiveNames($request);

    if ($response->getActiveNamesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAlarms

<p>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAlarmsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAlarmsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAlarmsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAlarmsRequest();
    $request->getAlarmsRequest = new GetAlarmsRequest();
    $request->getAlarmsRequest->alarmName = 'aut';
    $request->getAlarmsRequest->monitoredResourceName = 'voluptatum';
    $request->getAlarmsRequest->pageToken = 'qui';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = GetAlarmsXAmzTargetEnum::LIGHTSAIL20161128_GET_ALARMS;

    $response = $sdk->sdk->getAlarms($request);

    if ($response->getAlarmsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutoSnapshots

Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAutoSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAutoSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAutoSnapshotsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutoSnapshotsRequest();
    $request->getAutoSnapshotsRequest = new GetAutoSnapshotsRequest();
    $request->getAutoSnapshotsRequest->resourceName = 'tenetur';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = GetAutoSnapshotsXAmzTargetEnum::LIGHTSAIL20161128_GET_AUTO_SNAPSHOTS;

    $response = $sdk->sdk->getAutoSnapshots($request);

    if ($response->getAutoSnapshotsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlueprints

<p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlueprintsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBlueprintsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBlueprintsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlueprintsRequest();
    $request->getBlueprintsRequest = new GetBlueprintsRequest();
    $request->getBlueprintsRequest->appCategory = AppCategoryEnum::LF_R;
    $request->getBlueprintsRequest->includeInactive = false;
    $request->getBlueprintsRequest->pageToken = 'consectetur';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = GetBlueprintsXAmzTargetEnum::LIGHTSAIL20161128_GET_BLUEPRINTS;

    $response = $sdk->sdk->getBlueprints($request);

    if ($response->getBlueprintsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBucketAccessKeys

<p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p> <important> <p>This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If you lose the secret access key, you must create a new access key.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketAccessKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBucketAccessKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketAccessKeysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBucketAccessKeysRequest();
    $request->getBucketAccessKeysRequest = new GetBucketAccessKeysRequest();
    $request->getBucketAccessKeysRequest->bucketName = 'eum';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = GetBucketAccessKeysXAmzTargetEnum::LIGHTSAIL20161128_GET_BUCKET_ACCESS_KEYS;

    $response = $sdk->sdk->getBucketAccessKeys($request);

    if ($response->getBucketAccessKeysResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBucketBundles

<p>Returns the bundles that you can apply to a Amazon Lightsail bucket.</p> <p>The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to update the bundle for a bucket.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketBundlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBucketBundlesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketBundlesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBucketBundlesRequest();
    $request->getBucketBundlesRequest = new GetBucketBundlesRequest();
    $request->getBucketBundlesRequest->includeInactive = false;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = GetBucketBundlesXAmzTargetEnum::LIGHTSAIL20161128_GET_BUCKET_BUNDLES;

    $response = $sdk->sdk->getBucketBundles($request);

    if ($response->getBucketBundlesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBucketMetricData

<p>Returns the data points of a specific metric for an Amazon Lightsail bucket.</p> <p>Metrics report the utilization of a bucket. View and collect metric data regularly to monitor the number of objects stored in a bucket (including object versions) and the storage space used by those objects.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBucketMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\BucketMetricNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricStatisticEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketMetricDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBucketMetricDataRequest();
    $request->getBucketMetricDataRequest = new GetBucketMetricDataRequest();
    $request->getBucketMetricDataRequest->bucketName = 'maiores';
    $request->getBucketMetricDataRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T09:42:25.585Z');
    $request->getBucketMetricDataRequest->metricName = BucketMetricNameEnum::NUMBER_OF_OBJECTS;
    $request->getBucketMetricDataRequest->period = 374323;
    $request->getBucketMetricDataRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-12T00:03:51.639Z');
    $request->getBucketMetricDataRequest->statistics = [
        MetricStatisticEnum::MAXIMUM,
        MetricStatisticEnum::MINIMUM,
    ];
    $request->getBucketMetricDataRequest->unit = MetricUnitEnum::MEGABITS_SECOND;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = GetBucketMetricDataXAmzTargetEnum::LIGHTSAIL20161128_GET_BUCKET_METRIC_DATA;

    $response = $sdk->sdk->getBucketMetricData($request);

    if ($response->getBucketMetricDataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBuckets

<p>Returns information about one or more Amazon Lightsail buckets. The information returned includes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access feature for your Lightsail buckets.</p> <p>For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBucketsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBucketsRequest();
    $request->getBucketsRequest = new GetBucketsRequest();
    $request->getBucketsRequest->bucketName = 'quaerat';
    $request->getBucketsRequest->includeConnectedResources = false;
    $request->getBucketsRequest->pageToken = 'porro';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = GetBucketsXAmzTargetEnum::LIGHTSAIL20161128_GET_BUCKETS;

    $response = $sdk->sdk->getBuckets($request);

    if ($response->getBucketsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBundles

<p>Returns the bundles that you can apply to an Amazon Lightsail instance when you create it.</p> <p>A bundle describes the specifications of an instance, such as the monthly cost, amount of memory, the number of vCPUs, amount of storage space, and monthly network data transfer quota.</p> <note> <p>Bundles are referred to as <i>instance plans</i> in the Lightsail console.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBundlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBundlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBundlesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBundlesRequest();
    $request->getBundlesRequest = new GetBundlesRequest();
    $request->getBundlesRequest->appCategory = AppCategoryEnum::LF_R;
    $request->getBundlesRequest->includeInactive = false;
    $request->getBundlesRequest->pageToken = 'velit';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = GetBundlesXAmzTargetEnum::LIGHTSAIL20161128_GET_BUNDLES;

    $response = $sdk->sdk->getBundles($request);

    if ($response->getBundlesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCertificates

<p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p> <note> <p>To get a summary of a certificate, ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCertificatesRequest();
    $request->getCertificatesRequest = new GetCertificatesRequest();
    $request->getCertificatesRequest->certificateName = 'quos';
    $request->getCertificatesRequest->certificateStatuses = [
        CertificateStatusEnum::INACTIVE,
        CertificateStatusEnum::REVOKED,
    ];
    $request->getCertificatesRequest->includeCertificateDetails = false;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = GetCertificatesXAmzTargetEnum::LIGHTSAIL20161128_GET_CERTIFICATES;

    $response = $sdk->sdk->getCertificates($request);

    if ($response->getCertificatesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCloudFormationStackRecords

<p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCloudFormationStackRecordsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCloudFormationStackRecordsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCloudFormationStackRecordsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCloudFormationStackRecordsRequest();
    $request->getCloudFormationStackRecordsRequest = new GetCloudFormationStackRecordsRequest();
    $request->getCloudFormationStackRecordsRequest->pageToken = 'nemo';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->xAmzTarget = GetCloudFormationStackRecordsXAmzTargetEnum::LIGHTSAIL20161128_GET_CLOUD_FORMATION_STACK_RECORDS;

    $response = $sdk->sdk->getCloudFormationStackRecords($request);

    if ($response->getCloudFormationStackRecordsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContactMethods

<p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactMethodsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetContactMethodsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetContactMethodsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactMethodsRequest();
    $request->getContactMethodsRequest = new GetContactMethodsRequest();
    $request->getContactMethodsRequest->protocols = [
        ContactProtocolEnum::SMS,
        ContactProtocolEnum::EMAIL,
        ContactProtocolEnum::SMS,
        ContactProtocolEnum::EMAIL,
    ];
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = GetContactMethodsXAmzTargetEnum::LIGHTSAIL20161128_GET_CONTACT_METHODS;

    $response = $sdk->sdk->getContactMethods($request);

    if ($response->getContactMethodsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainerAPIMetadata

Returns information about Amazon Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerAPIMetadataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerAPIMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainerAPIMetadataRequest();
    $request->requestBody = [
        'non' => 'amet',
    ];
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'harum';
    $request->xAmzTarget = GetContainerAPIMetadataXAmzTargetEnum::LIGHTSAIL20161128_GET_CONTAINER_API_METADATA;

    $response = $sdk->sdk->getContainerAPIMetadata($request);

    if ($response->getContainerAPIMetadataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainerImages

<p>Returns the container images that are registered to your Amazon Lightsail container service.</p> <note> <p>If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetContainerImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerImagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainerImagesRequest();
    $request->getContainerImagesRequest = new GetContainerImagesRequest();
    $request->getContainerImagesRequest->serviceName = 'laboriosam';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = GetContainerImagesXAmzTargetEnum::LIGHTSAIL20161128_GET_CONTAINER_IMAGES;

    $response = $sdk->sdk->getContainerImages($request);

    if ($response->getContainerImagesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainerLog

<p>Returns the log events of a container of your Amazon Lightsail container service.</p> <p>If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service.</p> <note> <p>Container logs are retained for a certain amount of time. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerLogRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetContainerLogRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerLogXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainerLogRequest();
    $request->getContainerLogRequest = new GetContainerLogRequest();
    $request->getContainerLogRequest->containerName = 'aspernatur';
    $request->getContainerLogRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-17T09:37:02.210Z');
    $request->getContainerLogRequest->filterPattern = 'voluptas';
    $request->getContainerLogRequest->pageToken = 'minima';
    $request->getContainerLogRequest->serviceName = 'nobis';
    $request->getContainerLogRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T09:37:00.887Z');
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = GetContainerLogXAmzTargetEnum::LIGHTSAIL20161128_GET_CONTAINER_LOG;

    $response = $sdk->sdk->getContainerLog($request);

    if ($response->getContainerLogResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainerServiceDeployments

<p>Returns the deployments for your Amazon Lightsail container service</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> <p>The deployments are ordered by version in ascending order. The newest version is listed at the top of the response.</p> <note> <p>A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerServiceDeploymentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetContainerServiceDeploymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerServiceDeploymentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainerServiceDeploymentsRequest();
    $request->getContainerServiceDeploymentsRequest = new GetContainerServiceDeploymentsRequest();
    $request->getContainerServiceDeploymentsRequest->serviceName = 'temporibus';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->xAmzTarget = GetContainerServiceDeploymentsXAmzTargetEnum::LIGHTSAIL20161128_GET_CONTAINER_SERVICE_DEPLOYMENTS;

    $response = $sdk->sdk->getContainerServiceDeployments($request);

    if ($response->getContainerServiceDeploymentsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainerServiceMetricData

<p>Returns the data points of a specific metric of your Amazon Lightsail container service.</p> <p>Metrics report the utilization of your resources. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerServiceMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetContainerServiceMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainerServiceMetricNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricStatisticEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerServiceMetricDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainerServiceMetricDataRequest();
    $request->getContainerServiceMetricDataRequest = new GetContainerServiceMetricDataRequest();
    $request->getContainerServiceMetricDataRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-26T13:56:43.134Z');
    $request->getContainerServiceMetricDataRequest->metricName = ContainerServiceMetricNameEnum::MEMORY_UTILIZATION;
    $request->getContainerServiceMetricDataRequest->period = 519643;
    $request->getContainerServiceMetricDataRequest->serviceName = 'hic';
    $request->getContainerServiceMetricDataRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T23:17:58.998Z');
    $request->getContainerServiceMetricDataRequest->statistics = [
        MetricStatisticEnum::AVERAGE,
    ];
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'expedita';
    $request->xAmzTarget = GetContainerServiceMetricDataXAmzTargetEnum::LIGHTSAIL20161128_GET_CONTAINER_SERVICE_METRIC_DATA;

    $response = $sdk->sdk->getContainerServiceMetricData($request);

    if ($response->getContainerServiceMetricDataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainerServicePowers

<p>Returns the list of powers that can be specified for your Amazon Lightsail container services.</p> <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerServicePowersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerServicePowersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainerServicePowersRequest();
    $request->requestBody = [
        'iste' => 'dolore',
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = GetContainerServicePowersXAmzTargetEnum::LIGHTSAIL20161128_GET_CONTAINER_SERVICE_POWERS;

    $response = $sdk->sdk->getContainerServicePowers($request);

    if ($response->getContainerServicePowersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainerServices

Returns information about one or more of your Amazon Lightsail container services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetContainerServicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerServicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainerServicesRequest();
    $request->getContainerServicesRequest = new GetContainerServicesRequest();
    $request->getContainerServicesRequest->serviceName = 'unde';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'illo';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = GetContainerServicesXAmzTargetEnum::LIGHTSAIL20161128_GET_CONTAINER_SERVICES;

    $response = $sdk->sdk->getContainerServices($request);

    if ($response->containerServicesListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCostEstimate

Retrieves information about the cost estimate for a specified resource. A cost estimate will not generate for a resource that has been deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCostEstimateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCostEstimateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCostEstimateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCostEstimateRequest();
    $request->getCostEstimateRequest = new GetCostEstimateRequest();
    $request->getCostEstimateRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-15T21:52:35.790Z');
    $request->getCostEstimateRequest->resourceName = 'incidunt';
    $request->getCostEstimateRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-29T20:03:41.130Z');
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = GetCostEstimateXAmzTargetEnum::LIGHTSAIL20161128_GET_COST_ESTIMATE;

    $response = $sdk->sdk->getCostEstimate($request);

    if ($response->getCostEstimateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisk

Returns information about a specific block storage disk.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDiskRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDiskRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiskRequest();
    $request->getDiskRequest = new GetDiskRequest();
    $request->getDiskRequest->diskName = 'tempora';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = GetDiskXAmzTargetEnum::LIGHTSAIL20161128_GET_DISK;

    $response = $sdk->sdk->getDisk($request);

    if ($response->getDiskResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiskSnapshot

Returns information about a specific block storage disk snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDiskSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDiskSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiskSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiskSnapshotRequest();
    $request->getDiskSnapshotRequest = new GetDiskSnapshotRequest();
    $request->getDiskSnapshotRequest->diskSnapshotName = 'praesentium';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = GetDiskSnapshotXAmzTargetEnum::LIGHTSAIL20161128_GET_DISK_SNAPSHOT;

    $response = $sdk->sdk->getDiskSnapshot($request);

    if ($response->getDiskSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiskSnapshots

Returns information about all block storage disk snapshots in your AWS account and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDiskSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDiskSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiskSnapshotsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiskSnapshotsRequest();
    $request->getDiskSnapshotsRequest = new GetDiskSnapshotsRequest();
    $request->getDiskSnapshotsRequest->pageToken = 'nobis';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = GetDiskSnapshotsXAmzTargetEnum::LIGHTSAIL20161128_GET_DISK_SNAPSHOTS;

    $response = $sdk->sdk->getDiskSnapshots($request);

    if ($response->getDiskSnapshotsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisks

Returns information about all block storage disks in your AWS account and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDisksRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDisksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDisksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDisksRequest();
    $request->getDisksRequest = new GetDisksRequest();
    $request->getDisksRequest->pageToken = 'aperiam';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = GetDisksXAmzTargetEnum::LIGHTSAIL20161128_GET_DISKS;

    $response = $sdk->sdk->getDisks($request);

    if ($response->getDisksResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistributionBundles

<p>Returns the bundles that can be applied to your Amazon Lightsail content delivery network (CDN) distributions.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributionBundlesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributionBundlesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistributionBundlesRequest();
    $request->requestBody = [
        'praesentium' => 'cum',
        'laboriosam' => 'dolorum',
    ];
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = GetDistributionBundlesXAmzTargetEnum::LIGHTSAIL20161128_GET_DISTRIBUTION_BUNDLES;

    $response = $sdk->sdk->getDistributionBundles($request);

    if ($response->getDistributionBundlesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistributionLatestCacheReset

Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributionLatestCacheResetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDistributionLatestCacheResetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributionLatestCacheResetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistributionLatestCacheResetRequest();
    $request->getDistributionLatestCacheResetRequest = new GetDistributionLatestCacheResetRequest();
    $request->getDistributionLatestCacheResetRequest->distributionName = 'nostrum';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = GetDistributionLatestCacheResetXAmzTargetEnum::LIGHTSAIL20161128_GET_DISTRIBUTION_LATEST_CACHE_RESET;

    $response = $sdk->sdk->getDistributionLatestCacheReset($request);

    if ($response->getDistributionLatestCacheResetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistributionMetricData

<p>Returns the data points of a specific metric for an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributionMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDistributionMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DistributionMetricNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricStatisticEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributionMetricDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistributionMetricDataRequest();
    $request->getDistributionMetricDataRequest = new GetDistributionMetricDataRequest();
    $request->getDistributionMetricDataRequest->distributionName = 'ut';
    $request->getDistributionMetricDataRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-28T21:25:01.550Z');
    $request->getDistributionMetricDataRequest->metricName = DistributionMetricNameEnum::TOTAL_ERROR_RATE;
    $request->getDistributionMetricDataRequest->period = 710337;
    $request->getDistributionMetricDataRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-29T02:56:05.947Z');
    $request->getDistributionMetricDataRequest->statistics = [
        MetricStatisticEnum::MAXIMUM,
        MetricStatisticEnum::MINIMUM,
    ];
    $request->getDistributionMetricDataRequest->unit = MetricUnitEnum::COUNT;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = GetDistributionMetricDataXAmzTargetEnum::LIGHTSAIL20161128_GET_DISTRIBUTION_METRIC_DATA;

    $response = $sdk->sdk->getDistributionMetricData($request);

    if ($response->getDistributionMetricDataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistributions

Returns information about one or more of your Amazon Lightsail content delivery network (CDN) distributions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDistributionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistributionsRequest();
    $request->getDistributionsRequest = new GetDistributionsRequest();
    $request->getDistributionsRequest->distributionName = 'sit';
    $request->getDistributionsRequest->pageToken = 'vel';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = GetDistributionsXAmzTargetEnum::LIGHTSAIL20161128_GET_DISTRIBUTIONS;

    $response = $sdk->sdk->getDistributions($request);

    if ($response->getDistributionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomain

Returns information about a specific domain recordset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainRequest();
    $request->getDomainRequest = new GetDomainRequest();
    $request->getDomainRequest->domainName = 'harum';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = GetDomainXAmzTargetEnum::LIGHTSAIL20161128_GET_DOMAIN;

    $response = $sdk->sdk->getDomain($request);

    if ($response->getDomainResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomains

Returns a list of all domains in the user's account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsRequest();
    $request->getDomainsRequest = new GetDomainsRequest();
    $request->getDomainsRequest->pageToken = 'nam';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'unde';
    $request->xAmzTarget = GetDomainsXAmzTargetEnum::LIGHTSAIL20161128_GET_DOMAINS;

    $response = $sdk->sdk->getDomains($request);

    if ($response->getDomainsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportSnapshotRecords

<p>Returns all export snapshot records created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html">CreateCloudFormationStack</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportSnapshotRecordsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetExportSnapshotRecordsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetExportSnapshotRecordsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportSnapshotRecordsRequest();
    $request->getExportSnapshotRecordsRequest = new GetExportSnapshotRecordsRequest();
    $request->getExportSnapshotRecordsRequest->pageToken = 'reiciendis';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = GetExportSnapshotRecordsXAmzTargetEnum::LIGHTSAIL20161128_GET_EXPORT_SNAPSHOT_RECORDS;

    $response = $sdk->sdk->getExportSnapshotRecords($request);

    if ($response->getExportSnapshotRecordsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstance

Returns information about a specific Amazon Lightsail instance, which is a virtual private server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstanceRequest();
    $request->getInstanceRequest = new GetInstanceRequest();
    $request->getInstanceRequest->instanceName = 'reprehenderit';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = GetInstanceXAmzTargetEnum::LIGHTSAIL20161128_GET_INSTANCE;

    $response = $sdk->sdk->getInstance($request);

    if ($response->getInstanceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstanceAccessDetails

<p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceAccessDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstanceAccessDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceAccessProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceAccessDetailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstanceAccessDetailsRequest();
    $request->getInstanceAccessDetailsRequest = new GetInstanceAccessDetailsRequest();
    $request->getInstanceAccessDetailsRequest->instanceName = 'repudiandae';
    $request->getInstanceAccessDetailsRequest->protocol = InstanceAccessProtocolEnum::SSH;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = GetInstanceAccessDetailsXAmzTargetEnum::LIGHTSAIL20161128_GET_INSTANCE_ACCESS_DETAILS;

    $response = $sdk->sdk->getInstanceAccessDetails($request);

    if ($response->getInstanceAccessDetailsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstanceMetricData

<p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstanceMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceMetricNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricStatisticEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceMetricDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstanceMetricDataRequest();
    $request->getInstanceMetricDataRequest = new GetInstanceMetricDataRequest();
    $request->getInstanceMetricDataRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-16T17:34:48.115Z');
    $request->getInstanceMetricDataRequest->instanceName = 'amet';
    $request->getInstanceMetricDataRequest->metricName = InstanceMetricNameEnum::BURST_CAPACITY_PERCENTAGE;
    $request->getInstanceMetricDataRequest->period = 410301;
    $request->getInstanceMetricDataRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-02T23:52:38.012Z');
    $request->getInstanceMetricDataRequest->statistics = [
        MetricStatisticEnum::SAMPLE_COUNT,
        MetricStatisticEnum::SAMPLE_COUNT,
        MetricStatisticEnum::AVERAGE,
        MetricStatisticEnum::MAXIMUM,
    ];
    $request->getInstanceMetricDataRequest->unit = MetricUnitEnum::BYTES;
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = GetInstanceMetricDataXAmzTargetEnum::LIGHTSAIL20161128_GET_INSTANCE_METRIC_DATA;

    $response = $sdk->sdk->getInstanceMetricData($request);

    if ($response->getInstanceMetricDataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstancePortStates

Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstancePortStatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstancePortStatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInstancePortStatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstancePortStatesRequest();
    $request->getInstancePortStatesRequest = new GetInstancePortStatesRequest();
    $request->getInstancePortStatesRequest->instanceName = 'repudiandae';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = GetInstancePortStatesXAmzTargetEnum::LIGHTSAIL20161128_GET_INSTANCE_PORT_STATES;

    $response = $sdk->sdk->getInstancePortStates($request);

    if ($response->getInstancePortStatesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstanceSnapshot

Returns information about a specific instance snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstanceSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstanceSnapshotRequest();
    $request->getInstanceSnapshotRequest = new GetInstanceSnapshotRequest();
    $request->getInstanceSnapshotRequest->instanceSnapshotName = 'reiciendis';
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = GetInstanceSnapshotXAmzTargetEnum::LIGHTSAIL20161128_GET_INSTANCE_SNAPSHOT;

    $response = $sdk->sdk->getInstanceSnapshot($request);

    if ($response->getInstanceSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstanceSnapshots

Returns all instance snapshots for the user's account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstanceSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceSnapshotsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstanceSnapshotsRequest();
    $request->getInstanceSnapshotsRequest = new GetInstanceSnapshotsRequest();
    $request->getInstanceSnapshotsRequest->pageToken = 'laboriosam';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = GetInstanceSnapshotsXAmzTargetEnum::LIGHTSAIL20161128_GET_INSTANCE_SNAPSHOTS;

    $response = $sdk->sdk->getInstanceSnapshots($request);

    if ($response->getInstanceSnapshotsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstanceState

Returns the state of a specific instance. Works on one instance at a time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstanceStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstanceStateRequest();
    $request->getInstanceStateRequest = new GetInstanceStateRequest();
    $request->getInstanceStateRequest->instanceName = 'officiis';
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = GetInstanceStateXAmzTargetEnum::LIGHTSAIL20161128_GET_INSTANCE_STATE;

    $response = $sdk->sdk->getInstanceState($request);

    if ($response->getInstanceStateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstances

Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstancesRequest();
    $request->getInstancesRequest = new GetInstancesRequest();
    $request->getInstancesRequest->pageToken = 'id';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'illo';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->xAmzTarget = GetInstancesXAmzTargetEnum::LIGHTSAIL20161128_GET_INSTANCES;

    $response = $sdk->sdk->getInstances($request);

    if ($response->getInstancesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKeyPair

Returns information about a specific key pair.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetKeyPairXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeyPairRequest();
    $request->getKeyPairRequest = new GetKeyPairRequest();
    $request->getKeyPairRequest->keyPairName = 'non';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = GetKeyPairXAmzTargetEnum::LIGHTSAIL20161128_GET_KEY_PAIR;

    $response = $sdk->sdk->getKeyPair($request);

    if ($response->getKeyPairResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKeyPairs

Returns information about all key pairs in the user's account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetKeyPairsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetKeyPairsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetKeyPairsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeyPairsRequest();
    $request->getKeyPairsRequest = new GetKeyPairsRequest();
    $request->getKeyPairsRequest->includeDefaultKeyPair = false;
    $request->getKeyPairsRequest->pageToken = 'eveniet';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = GetKeyPairsXAmzTargetEnum::LIGHTSAIL20161128_GET_KEY_PAIRS;

    $response = $sdk->sdk->getKeyPairs($request);

    if ($response->getKeyPairsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoadBalancer

Returns information about the specified Lightsail load balancer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancerRequest();
    $request->getLoadBalancerRequest = new GetLoadBalancerRequest();
    $request->getLoadBalancerRequest->loadBalancerName = 'voluptatum';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = GetLoadBalancerXAmzTargetEnum::LIGHTSAIL20161128_GET_LOAD_BALANCER;

    $response = $sdk->sdk->getLoadBalancer($request);

    if ($response->getLoadBalancerResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoadBalancerMetricData

<p>Returns information about health metrics for your Lightsail load balancer.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancerMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLoadBalancerMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancerMetricNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricStatisticEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancerMetricDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancerMetricDataRequest();
    $request->getLoadBalancerMetricDataRequest = new GetLoadBalancerMetricDataRequest();
    $request->getLoadBalancerMetricDataRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T02:04:25.294Z');
    $request->getLoadBalancerMetricDataRequest->loadBalancerName = 'voluptas';
    $request->getLoadBalancerMetricDataRequest->metricName = LoadBalancerMetricNameEnum::CLIENT_TLS_NEGOTIATION_ERROR_COUNT;
    $request->getLoadBalancerMetricDataRequest->period = 979527;
    $request->getLoadBalancerMetricDataRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-23T17:58:38.501Z');
    $request->getLoadBalancerMetricDataRequest->statistics = [
        MetricStatisticEnum::MAXIMUM,
        MetricStatisticEnum::MAXIMUM,
        MetricStatisticEnum::AVERAGE,
    ];
    $request->getLoadBalancerMetricDataRequest->unit = MetricUnitEnum::MEGABYTES;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = GetLoadBalancerMetricDataXAmzTargetEnum::LIGHTSAIL20161128_GET_LOAD_BALANCER_METRIC_DATA;

    $response = $sdk->sdk->getLoadBalancerMetricData($request);

    if ($response->getLoadBalancerMetricDataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoadBalancerTlsCertificates

<p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancerTlsCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLoadBalancerTlsCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancerTlsCertificatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancerTlsCertificatesRequest();
    $request->getLoadBalancerTlsCertificatesRequest = new GetLoadBalancerTlsCertificatesRequest();
    $request->getLoadBalancerTlsCertificatesRequest->loadBalancerName = 'culpa';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = GetLoadBalancerTlsCertificatesXAmzTargetEnum::LIGHTSAIL20161128_GET_LOAD_BALANCER_TLS_CERTIFICATES;

    $response = $sdk->sdk->getLoadBalancerTlsCertificates($request);

    if ($response->getLoadBalancerTlsCertificatesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoadBalancerTlsPolicies

<p>Returns a list of TLS security policies that you can apply to Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancerTlsPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLoadBalancerTlsPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancerTlsPoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancerTlsPoliciesRequest();
    $request->getLoadBalancerTlsPoliciesRequest = new GetLoadBalancerTlsPoliciesRequest();
    $request->getLoadBalancerTlsPoliciesRequest->pageToken = 'provident';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = GetLoadBalancerTlsPoliciesXAmzTargetEnum::LIGHTSAIL20161128_GET_LOAD_BALANCER_TLS_POLICIES;

    $response = $sdk->sdk->getLoadBalancerTlsPolicies($request);

    if ($response->getLoadBalancerTlsPoliciesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoadBalancers

Returns information about all load balancers in an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancersRequest();
    $request->getLoadBalancersRequest = new GetLoadBalancersRequest();
    $request->getLoadBalancersRequest->pageToken = 'animi';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = GetLoadBalancersXAmzTargetEnum::LIGHTSAIL20161128_GET_LOAD_BALANCERS;

    $response = $sdk->sdk->getLoadBalancers($request);

    if ($response->getLoadBalancersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOperation

Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOperationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOperationRequest();
    $request->getOperationRequest = new GetOperationRequest();
    $request->getOperationRequest->operationId = 'accusantium';
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = GetOperationXAmzTargetEnum::LIGHTSAIL20161128_GET_OPERATION;

    $response = $sdk->sdk->getOperation($request);

    if ($response->getOperationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOperations

<p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOperationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOperationsRequest();
    $request->getOperationsRequest = new GetOperationsRequest();
    $request->getOperationsRequest->pageToken = 'laborum';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = GetOperationsXAmzTargetEnum::LIGHTSAIL20161128_GET_OPERATIONS;

    $response = $sdk->sdk->getOperations($request);

    if ($response->getOperationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOperationsForResource

Gets operations for a specific resource (e.g., an instance or a static IP).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOperationsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOperationsForResourceRequest();
    $request->getOperationsForResourceRequest = new GetOperationsForResourceRequest();
    $request->getOperationsForResourceRequest->pageToken = 'vitae';
    $request->getOperationsForResourceRequest->resourceName = 'rerum';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = GetOperationsForResourceXAmzTargetEnum::LIGHTSAIL20161128_GET_OPERATIONS_FOR_RESOURCE;

    $response = $sdk->sdk->getOperationsForResource($request);

    if ($response->getOperationsForResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegions

Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRegionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRegionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRegionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegionsRequest();
    $request->getRegionsRequest = new GetRegionsRequest();
    $request->getRegionsRequest->includeAvailabilityZones = false;
    $request->getRegionsRequest->includeRelationalDatabaseAvailabilityZones = false;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = GetRegionsXAmzTargetEnum::LIGHTSAIL20161128_GET_REGIONS;

    $response = $sdk->sdk->getRegions($request);

    if ($response->getRegionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabase

Returns information about a specific database in Amazon Lightsail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabaseRequest();
    $request->getRelationalDatabaseRequest = new GetRelationalDatabaseRequest();
    $request->getRelationalDatabaseRequest->relationalDatabaseName = 'eos';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = GetRelationalDatabaseXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASE;

    $response = $sdk->sdk->getRelationalDatabase($request);

    if ($response->getRelationalDatabaseResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabaseBlueprints

<p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseBlueprintsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabaseBlueprintsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseBlueprintsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabaseBlueprintsRequest();
    $request->getRelationalDatabaseBlueprintsRequest = new GetRelationalDatabaseBlueprintsRequest();
    $request->getRelationalDatabaseBlueprintsRequest->pageToken = 'earum';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = GetRelationalDatabaseBlueprintsXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_BLUEPRINTS;

    $response = $sdk->sdk->getRelationalDatabaseBlueprints($request);

    if ($response->getRelationalDatabaseBlueprintsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabaseBundles

<p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseBundlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabaseBundlesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseBundlesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabaseBundlesRequest();
    $request->getRelationalDatabaseBundlesRequest = new GetRelationalDatabaseBundlesRequest();
    $request->getRelationalDatabaseBundlesRequest->includeInactive = false;
    $request->getRelationalDatabaseBundlesRequest->pageToken = 'debitis';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = GetRelationalDatabaseBundlesXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_BUNDLES;

    $response = $sdk->sdk->getRelationalDatabaseBundles($request);

    if ($response->getRelationalDatabaseBundlesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabaseEvents

Returns a list of events for a specific database in Amazon Lightsail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabaseEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabaseEventsRequest();
    $request->getRelationalDatabaseEventsRequest = new GetRelationalDatabaseEventsRequest();
    $request->getRelationalDatabaseEventsRequest->durationInMinutes = 189062;
    $request->getRelationalDatabaseEventsRequest->pageToken = 'animi';
    $request->getRelationalDatabaseEventsRequest->relationalDatabaseName = 'necessitatibus';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = GetRelationalDatabaseEventsXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_EVENTS;

    $response = $sdk->sdk->getRelationalDatabaseEvents($request);

    if ($response->getRelationalDatabaseEventsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabaseLogEvents

Returns a list of log events for a database in Amazon Lightsail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseLogEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabaseLogEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseLogEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabaseLogEventsRequest();
    $request->getRelationalDatabaseLogEventsRequest = new GetRelationalDatabaseLogEventsRequest();
    $request->getRelationalDatabaseLogEventsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-04T19:57:36.428Z');
    $request->getRelationalDatabaseLogEventsRequest->logStreamName = 'quasi';
    $request->getRelationalDatabaseLogEventsRequest->pageToken = 'magni';
    $request->getRelationalDatabaseLogEventsRequest->relationalDatabaseName = 'doloribus';
    $request->getRelationalDatabaseLogEventsRequest->startFromHead = false;
    $request->getRelationalDatabaseLogEventsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-24T05:50:40.136Z');
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = GetRelationalDatabaseLogEventsXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_LOG_EVENTS;

    $response = $sdk->sdk->getRelationalDatabaseLogEvents($request);

    if ($response->getRelationalDatabaseLogEventsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabaseLogStreams

Returns a list of available log streams for a specific database in Amazon Lightsail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseLogStreamsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabaseLogStreamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseLogStreamsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabaseLogStreamsRequest();
    $request->getRelationalDatabaseLogStreamsRequest = new GetRelationalDatabaseLogStreamsRequest();
    $request->getRelationalDatabaseLogStreamsRequest->relationalDatabaseName = 'praesentium';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = GetRelationalDatabaseLogStreamsXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_LOG_STREAMS;

    $response = $sdk->sdk->getRelationalDatabaseLogStreams($request);

    if ($response->getRelationalDatabaseLogStreamsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabaseMasterUserPassword

<p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseMasterUserPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabaseMasterUserPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\RelationalDatabasePasswordVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabaseMasterUserPasswordRequest();
    $request->getRelationalDatabaseMasterUserPasswordRequest = new GetRelationalDatabaseMasterUserPasswordRequest();
    $request->getRelationalDatabaseMasterUserPasswordRequest->passwordVersion = RelationalDatabasePasswordVersionEnum::PREVIOUS;
    $request->getRelationalDatabaseMasterUserPasswordRequest->relationalDatabaseName = 'tempora';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_MASTER_USER_PASSWORD;

    $response = $sdk->sdk->getRelationalDatabaseMasterUserPassword($request);

    if ($response->getRelationalDatabaseMasterUserPasswordResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabaseMetricData

<p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabaseMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\RelationalDatabaseMetricNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricStatisticEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseMetricDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabaseMetricDataRequest();
    $request->getRelationalDatabaseMetricDataRequest = new GetRelationalDatabaseMetricDataRequest();
    $request->getRelationalDatabaseMetricDataRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-22T06:49:26.369Z');
    $request->getRelationalDatabaseMetricDataRequest->metricName = RelationalDatabaseMetricNameEnum::NETWORK_RECEIVE_THROUGHPUT;
    $request->getRelationalDatabaseMetricDataRequest->period = 399667;
    $request->getRelationalDatabaseMetricDataRequest->relationalDatabaseName = 'officia';
    $request->getRelationalDatabaseMetricDataRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-08T07:20:53.498Z');
    $request->getRelationalDatabaseMetricDataRequest->statistics = [
        MetricStatisticEnum::SUM,
    ];
    $request->getRelationalDatabaseMetricDataRequest->unit = MetricUnitEnum::MEGABITS;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = GetRelationalDatabaseMetricDataXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_METRIC_DATA;

    $response = $sdk->sdk->getRelationalDatabaseMetricData($request);

    if ($response->getRelationalDatabaseMetricDataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabaseParameters

<p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabaseParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseParametersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabaseParametersRequest();
    $request->getRelationalDatabaseParametersRequest = new GetRelationalDatabaseParametersRequest();
    $request->getRelationalDatabaseParametersRequest->pageToken = 'laborum';
    $request->getRelationalDatabaseParametersRequest->relationalDatabaseName = 'libero';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = GetRelationalDatabaseParametersXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_PARAMETERS;

    $response = $sdk->sdk->getRelationalDatabaseParameters($request);

    if ($response->getRelationalDatabaseParametersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabaseSnapshot

Returns information about a specific database snapshot in Amazon Lightsail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabaseSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabaseSnapshotRequest();
    $request->getRelationalDatabaseSnapshotRequest = new GetRelationalDatabaseSnapshotRequest();
    $request->getRelationalDatabaseSnapshotRequest->relationalDatabaseSnapshotName = 'ex';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = GetRelationalDatabaseSnapshotXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_SNAPSHOT;

    $response = $sdk->sdk->getRelationalDatabaseSnapshot($request);

    if ($response->getRelationalDatabaseSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabaseSnapshots

Returns information about all of your database snapshots in Amazon Lightsail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabaseSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabaseSnapshotsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabaseSnapshotsRequest();
    $request->getRelationalDatabaseSnapshotsRequest = new GetRelationalDatabaseSnapshotsRequest();
    $request->getRelationalDatabaseSnapshotsRequest->pageToken = 'beatae';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = GetRelationalDatabaseSnapshotsXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASE_SNAPSHOTS;

    $response = $sdk->sdk->getRelationalDatabaseSnapshots($request);

    if ($response->getRelationalDatabaseSnapshotsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationalDatabases

Returns information about all of your databases in Amazon Lightsail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRelationalDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationalDatabasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationalDatabasesRequest();
    $request->getRelationalDatabasesRequest = new GetRelationalDatabasesRequest();
    $request->getRelationalDatabasesRequest->pageToken = 'sapiente';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = GetRelationalDatabasesXAmzTargetEnum::LIGHTSAIL20161128_GET_RELATIONAL_DATABASES;

    $response = $sdk->sdk->getRelationalDatabases($request);

    if ($response->getRelationalDatabasesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStaticIp

Returns information about an Amazon Lightsail static IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStaticIpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStaticIpRequest();
    $request->getStaticIpRequest = new GetStaticIpRequest();
    $request->getStaticIpRequest->staticIpName = 'deleniti';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = GetStaticIpXAmzTargetEnum::LIGHTSAIL20161128_GET_STATIC_IP;

    $response = $sdk->sdk->getStaticIp($request);

    if ($response->getStaticIpResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStaticIps

Returns information about all static IPs in the user's account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStaticIpsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetStaticIpsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStaticIpsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStaticIpsRequest();
    $request->getStaticIpsRequest = new GetStaticIpsRequest();
    $request->getStaticIpsRequest->pageToken = 'ratione';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = GetStaticIpsXAmzTargetEnum::LIGHTSAIL20161128_GET_STATIC_IPS;

    $response = $sdk->sdk->getStaticIps($request);

    if ($response->getStaticIpsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importKeyPair

Imports a public SSH key from a specific key pair.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportKeyPairXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportKeyPairRequest();
    $request->importKeyPairRequest = new ImportKeyPairRequest();
    $request->importKeyPairRequest->keyPairName = 'ipsam';
    $request->importKeyPairRequest->publicKeyBase64 = 'culpa';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = ImportKeyPairXAmzTargetEnum::LIGHTSAIL20161128_IMPORT_KEY_PAIR;

    $response = $sdk->sdk->importKeyPair($request);

    if ($response->importKeyPairResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## isVpcPeered

Returns a Boolean value indicating whether your Lightsail VPC is peered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IsVpcPeeredRequest;
use \OpenAPI\OpenAPI\Models\Operations\IsVpcPeeredXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IsVpcPeeredRequest();
    $request->requestBody = [
        'architecto' => 'sit',
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = IsVpcPeeredXAmzTargetEnum::LIGHTSAIL20161128_IS_VPC_PEERED;

    $response = $sdk->sdk->isVpcPeered($request);

    if ($response->isVpcPeeredResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## openInstancePublicPorts

<p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OpenInstancePublicPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpenInstancePublicPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PortInfo;
use \OpenAPI\OpenAPI\Models\Shared\NetworkProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\OpenInstancePublicPortsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OpenInstancePublicPortsRequest();
    $request->openInstancePublicPortsRequest = new OpenInstancePublicPortsRequest();
    $request->openInstancePublicPortsRequest->instanceName = 'ipsam';
    $request->openInstancePublicPortsRequest->portInfo = new PortInfo();
    $request->openInstancePublicPortsRequest->portInfo->cidrListAliases = [
        'ipsa',
    ];
    $request->openInstancePublicPortsRequest->portInfo->cidrs = [
        'eveniet',
        'impedit',
        'officiis',
    ];
    $request->openInstancePublicPortsRequest->portInfo->fromPort = 456410;
    $request->openInstancePublicPortsRequest->portInfo->ipv6Cidrs = [
        'sed',
        'veniam',
        'nesciunt',
        'expedita',
    ];
    $request->openInstancePublicPortsRequest->portInfo->protocol = NetworkProtocolEnum::ALL;
    $request->openInstancePublicPortsRequest->portInfo->toPort = 426943;
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = OpenInstancePublicPortsXAmzTargetEnum::LIGHTSAIL20161128_OPEN_INSTANCE_PUBLIC_PORTS;

    $response = $sdk->sdk->openInstancePublicPorts($request);

    if ($response->openInstancePublicPortsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peerVpc

Peers the Lightsail VPC with the user's default VPC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PeerVpcRequest;
use \OpenAPI\OpenAPI\Models\Operations\PeerVpcXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeerVpcRequest();
    $request->requestBody = [
        'recusandae' => 'consequuntur',
        'voluptatem' => 'exercitationem',
    ];
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'harum';
    $request->xAmzTarget = PeerVpcXAmzTargetEnum::LIGHTSAIL20161128_PEER_VPC;

    $response = $sdk->sdk->peerVpc($request);

    if ($response->peerVpcResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAlarm

<p>Creates or updates an alarm, and associates it with the specified metric.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> <p>When this action creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAlarmRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAlarmRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlarmStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TreatMissingDataEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutAlarmXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAlarmRequest();
    $request->putAlarmRequest = new PutAlarmRequest();
    $request->putAlarmRequest->alarmName = 'sequi';
    $request->putAlarmRequest->comparisonOperator = ComparisonOperatorEnum::LESS_THAN_OR_EQUAL_TO_THRESHOLD;
    $request->putAlarmRequest->contactProtocols = [
        ContactProtocolEnum::SMS,
        ContactProtocolEnum::SMS,
        ContactProtocolEnum::EMAIL,
        ContactProtocolEnum::EMAIL,
    ];
    $request->putAlarmRequest->datapointsToAlarm = 501063;
    $request->putAlarmRequest->evaluationPeriods = 642352;
    $request->putAlarmRequest->metricName = MetricNameEnum::HTTP_CODE_LB4_XX_COUNT;
    $request->putAlarmRequest->monitoredResourceName = 'numquam';
    $request->putAlarmRequest->notificationEnabled = false;
    $request->putAlarmRequest->notificationTriggers = [
        AlarmStateEnum::ALARM,
        AlarmStateEnum::OK,
    ];
    $request->putAlarmRequest->threshold = 1319.03;
    $request->putAlarmRequest->treatMissingData = TreatMissingDataEnum::NOT_BREACHING;
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = PutAlarmXAmzTargetEnum::LIGHTSAIL20161128_PUT_ALARM;

    $response = $sdk->sdk->putAlarm($request);

    if ($response->putAlarmResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putInstancePublicPorts

<p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutInstancePublicPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutInstancePublicPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PortInfo;
use \OpenAPI\OpenAPI\Models\Shared\NetworkProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutInstancePublicPortsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutInstancePublicPortsRequest();
    $request->putInstancePublicPortsRequest = new PutInstancePublicPortsRequest();
    $request->putInstancePublicPortsRequest->instanceName = 'dicta';
    $request->putInstancePublicPortsRequest->portInfos = [
        new PortInfo(),
        new PortInfo(),
    ];
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = PutInstancePublicPortsXAmzTargetEnum::LIGHTSAIL20161128_PUT_INSTANCE_PUBLIC_PORTS;

    $response = $sdk->sdk->putInstancePublicPorts($request);

    if ($response->putInstancePublicPortsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rebootInstance

<p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RebootInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RebootInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RebootInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RebootInstanceRequest();
    $request->rebootInstanceRequest = new RebootInstanceRequest();
    $request->rebootInstanceRequest->instanceName = 'omnis';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = RebootInstanceXAmzTargetEnum::LIGHTSAIL20161128_REBOOT_INSTANCE;

    $response = $sdk->sdk->rebootInstance($request);

    if ($response->rebootInstanceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rebootRelationalDatabase

<p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RebootRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\RebootRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\RebootRelationalDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RebootRelationalDatabaseRequest();
    $request->rebootRelationalDatabaseRequest = new RebootRelationalDatabaseRequest();
    $request->rebootRelationalDatabaseRequest->relationalDatabaseName = 'voluptatibus';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = RebootRelationalDatabaseXAmzTargetEnum::LIGHTSAIL20161128_REBOOT_RELATIONAL_DATABASE;

    $response = $sdk->sdk->rebootRelationalDatabase($request);

    if ($response->rebootRelationalDatabaseResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerContainerImage

<p>Registers a container image to your Amazon Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterContainerImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterContainerImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterContainerImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterContainerImageRequest();
    $request->registerContainerImageRequest = new RegisterContainerImageRequest();
    $request->registerContainerImageRequest->digest = 'temporibus';
    $request->registerContainerImageRequest->label = 'quos';
    $request->registerContainerImageRequest->serviceName = 'commodi';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = RegisterContainerImageXAmzTargetEnum::LIGHTSAIL20161128_REGISTER_CONTAINER_IMAGE;

    $response = $sdk->sdk->registerContainerImage($request);

    if ($response->registerContainerImageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releaseStaticIp

Deletes a specific static IP from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReleaseStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleaseStaticIpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleaseStaticIpRequest();
    $request->releaseStaticIpRequest = new ReleaseStaticIpRequest();
    $request->releaseStaticIpRequest->staticIpName = 'voluptatem';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = ReleaseStaticIpXAmzTargetEnum::LIGHTSAIL20161128_RELEASE_STATIC_IP;

    $response = $sdk->sdk->releaseStaticIp($request);

    if ($response->releaseStaticIpResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetDistributionCache

<p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After resetting the cache, the next time a content request is made, your distribution pulls, serves, and caches it from the origin.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetDistributionCacheRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResetDistributionCacheRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetDistributionCacheXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetDistributionCacheRequest();
    $request->resetDistributionCacheRequest = new ResetDistributionCacheRequest();
    $request->resetDistributionCacheRequest->distributionName = 'sint';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = ResetDistributionCacheXAmzTargetEnum::LIGHTSAIL20161128_RESET_DISTRIBUTION_CACHE;

    $response = $sdk->sdk->resetDistributionCache($request);

    if ($response->resetDistributionCacheResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendContactMethodVerification

<p>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendContactMethodVerificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendContactMethodVerificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactMethodVerificationProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\SendContactMethodVerificationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendContactMethodVerificationRequest();
    $request->sendContactMethodVerificationRequest = new SendContactMethodVerificationRequest();
    $request->sendContactMethodVerificationRequest->protocol = ContactMethodVerificationProtocolEnum::EMAIL;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = SendContactMethodVerificationXAmzTargetEnum::LIGHTSAIL20161128_SEND_CONTACT_METHOD_VERIFICATION;

    $response = $sdk->sdk->sendContactMethodVerification($request);

    if ($response->sendContactMethodVerificationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setIpAddressType

<p>Sets the IP address type for an Amazon Lightsail resource.</p> <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the specified resource. Alternately, you can use this action to disable dual-stack, and enable IPv4 only.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetIpAddressTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetIpAddressTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SetIpAddressTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetIpAddressTypeRequest();
    $request->setIpAddressTypeRequest = new SetIpAddressTypeRequest();
    $request->setIpAddressTypeRequest->ipAddressType = IpAddressTypeEnum::DUALSTACK;
    $request->setIpAddressTypeRequest->resourceName = 'debitis';
    $request->setIpAddressTypeRequest->resourceType = ResourceTypeEnum::BUCKET;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = SetIpAddressTypeXAmzTargetEnum::LIGHTSAIL20161128_SET_IP_ADDRESS_TYPE;

    $response = $sdk->sdk->setIpAddressType($request);

    if ($response->setIpAddressTypeResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setResourceAccessForBucket

<p>Sets the Amazon Lightsail resources that can access the specified Lightsail bucket.</p> <p>Lightsail buckets currently support setting access for Lightsail instances in the same Amazon Web Services Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetResourceAccessForBucketRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetResourceAccessForBucketRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceBucketAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\SetResourceAccessForBucketXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetResourceAccessForBucketRequest();
    $request->setResourceAccessForBucketRequest = new SetResourceAccessForBucketRequest();
    $request->setResourceAccessForBucketRequest->access = ResourceBucketAccessEnum::ALLOW;
    $request->setResourceAccessForBucketRequest->bucketName = 'impedit';
    $request->setResourceAccessForBucketRequest->resourceName = 'magni';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = SetResourceAccessForBucketXAmzTargetEnum::LIGHTSAIL20161128_SET_RESOURCE_ACCESS_FOR_BUCKET;

    $response = $sdk->sdk->setResourceAccessForBucket($request);

    if ($response->setResourceAccessForBucketResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startGUISession

Initiates a graphical user interface (GUI) session that’s used to access a virtual computer’s operating system and application. The session will be active for 1 hour. Use this action to resume the session after it expires. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartGUISessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartGUISessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartGUISessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartGUISessionRequest();
    $request->startGUISessionRequest = new StartGUISessionRequest();
    $request->startGUISessionRequest->resourceName = 'dignissimos';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = StartGUISessionXAmzTargetEnum::LIGHTSAIL20161128_START_GUI_SESSION;

    $response = $sdk->sdk->startGUISession($request);

    if ($response->startGUISessionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startInstance

<p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartInstanceRequest();
    $request->startInstanceRequest = new StartInstanceRequest();
    $request->startInstanceRequest->instanceName = 'vel';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = StartInstanceXAmzTargetEnum::LIGHTSAIL20161128_START_INSTANCE;

    $response = $sdk->sdk->startInstance($request);

    if ($response->startInstanceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startRelationalDatabase

<p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartRelationalDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartRelationalDatabaseRequest();
    $request->startRelationalDatabaseRequest = new StartRelationalDatabaseRequest();
    $request->startRelationalDatabaseRequest->relationalDatabaseName = 'quia';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'illo';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = StartRelationalDatabaseXAmzTargetEnum::LIGHTSAIL20161128_START_RELATIONAL_DATABASE;

    $response = $sdk->sdk->startRelationalDatabase($request);

    if ($response->startRelationalDatabaseResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopGUISession

Terminates a web-based NICE DCV session that’s used to access a virtual computer’s operating system or application. The session will close and any unsaved data will be lost.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopGUISessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopGUISessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopGUISessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopGUISessionRequest();
    $request->stopGUISessionRequest = new StopGUISessionRequest();
    $request->stopGUISessionRequest->resourceName = 'beatae';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzTarget = StopGUISessionXAmzTargetEnum::LIGHTSAIL20161128_STOP_GUI_SESSION;

    $response = $sdk->sdk->stopGUISession($request);

    if ($response->stopGUISessionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopInstance

<p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopInstanceRequest();
    $request->stopInstanceRequest = new StopInstanceRequest();
    $request->stopInstanceRequest->force = false;
    $request->stopInstanceRequest->instanceName = 'dicta';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = StopInstanceXAmzTargetEnum::LIGHTSAIL20161128_STOP_INSTANCE;

    $response = $sdk->sdk->stopInstance($request);

    if ($response->stopInstanceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopRelationalDatabase

<p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopRelationalDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopRelationalDatabaseRequest();
    $request->stopRelationalDatabaseRequest = new StopRelationalDatabaseRequest();
    $request->stopRelationalDatabaseRequest->relationalDatabaseName = 'velit';
    $request->stopRelationalDatabaseRequest->relationalDatabaseSnapshotName = 'laborum';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = StopRelationalDatabaseXAmzTargetEnum::LIGHTSAIL20161128_STOP_RELATIONAL_DATABASE;

    $response = $sdk->sdk->stopRelationalDatabase($request);

    if ($response->stopRelationalDatabaseResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    $request->tagResourceRequest->resourceArn = 'recusandae';
    $request->tagResourceRequest->resourceName = 'ea';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::LIGHTSAIL20161128_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testAlarm

<p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestAlarmRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestAlarmRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlarmStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\TestAlarmXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestAlarmRequest();
    $request->testAlarmRequest = new TestAlarmRequest();
    $request->testAlarmRequest->alarmName = 'voluptate';
    $request->testAlarmRequest->state = AlarmStateEnum::ALARM;
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = TestAlarmXAmzTargetEnum::LIGHTSAIL20161128_TEST_ALARM;

    $response = $sdk->sdk->testAlarm($request);

    if ($response->testAlarmResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unpeerVpc

Unpeers the Lightsail VPC from the user's default VPC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnpeerVpcRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnpeerVpcXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnpeerVpcRequest();
    $request->requestBody = [
        'esse' => 'labore',
        'veritatis' => 'vero',
        'consectetur' => 'vitae',
    ];
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = UnpeerVpcXAmzTargetEnum::LIGHTSAIL20161128_UNPEER_VPC;

    $response = $sdk->sdk->unpeerVpc($request);

    if ($response->unpeerVpcResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    $request->untagResourceRequest->resourceArn = 'soluta';
    $request->untagResourceRequest->resourceName = 'libero';
    $request->untagResourceRequest->tagKeys = [
        'dolorum',
        'odio',
        'fugit',
    ];
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::LIGHTSAIL20161128_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBucket

<p>Updates an existing Amazon Lightsail bucket.</p> <p>Use this action to update the configuration of an existing bucket, such as versioning, public accessibility, and the Amazon Web Services accounts that can access the bucket.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBucketRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBucketRequest;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AccessRules;
use \OpenAPI\OpenAPI\Models\Shared\AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBucketXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBucketRequest();
    $request->updateBucketRequest = new UpdateBucketRequest();
    $request->updateBucketRequest->accessLogConfig = new BucketAccessLogConfig();
    $request->updateBucketRequest->accessLogConfig->destination = 'exercitationem';
    $request->updateBucketRequest->accessLogConfig->enabled = false;
    $request->updateBucketRequest->accessLogConfig->prefix = 'itaque';
    $request->updateBucketRequest->accessRules = new AccessRules();
    $request->updateBucketRequest->accessRules->allowPublicOverrides = false;
    $request->updateBucketRequest->accessRules->getObject = AccessTypeEnum::PUBLIC;
    $request->updateBucketRequest->bucketName = 'ipsum';
    $request->updateBucketRequest->readonlyAccessAccounts = [
        'nulla',
        'distinctio',
        'maxime',
    ];
    $request->updateBucketRequest->versioning = 'quia';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = UpdateBucketXAmzTargetEnum::LIGHTSAIL20161128_UPDATE_BUCKET;

    $response = $sdk->sdk->updateBucket($request);

    if ($response->updateBucketResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBucketBundle

<p>Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. You can update a bucket's bundle only one time within a monthly Amazon Web Services billing cycle. To determine if you can update a bucket's bundle, use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html">GetBuckets</a> action. The <code>ableToUpdateBundle</code> parameter in the response will indicate whether you can currently update a bucket's bundle.</p> <p>Update a bucket's bundle if it's consistently going over its storage space or data transfer quota, or if a bucket's usage is consistently in the lower range of its storage space or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might experience, we strongly recommend that you update a bucket's bundle only as a long-term strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle that will provide the bucket with ample storage space and data transfer for a long time to come.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBucketBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBucketBundleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBucketBundleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBucketBundleRequest();
    $request->updateBucketBundleRequest = new UpdateBucketBundleRequest();
    $request->updateBucketBundleRequest->bucketName = 'fugiat';
    $request->updateBucketBundleRequest->bundleId = 'officia';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'inventore';
    $request->xAmzTarget = UpdateBucketBundleXAmzTargetEnum::LIGHTSAIL20161128_UPDATE_BUCKET_BUNDLE;

    $response = $sdk->sdk->updateBucketBundle($request);

    if ($response->updateBucketBundleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContainerService

Updates the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContainerServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContainerServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainerServicePowerNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrivateRegistryAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainerServiceECRImagePullerRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContainerServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContainerServiceRequest();
    $request->updateContainerServiceRequest = new UpdateContainerServiceRequest();
    $request->updateContainerServiceRequest->isDisabled = false;
    $request->updateContainerServiceRequest->power = ContainerServicePowerNameEnum::NANO;
    $request->updateContainerServiceRequest->privateRegistryAccess = new PrivateRegistryAccessRequest();
    $request->updateContainerServiceRequest->privateRegistryAccess->ecrImagePullerRole = new ContainerServiceECRImagePullerRoleRequest();
    $request->updateContainerServiceRequest->privateRegistryAccess->ecrImagePullerRole->isActive = false;
    $request->updateContainerServiceRequest->publicDomainNames = [
        'dolore' => [
            'distinctio',
            'voluptatem',
            'autem',
            'esse',
        ],
        'dolores' => [
            'beatae',
            'est',
            'facere',
            'corrupti',
        ],
        'molestiae' => [
            'accusamus',
            'necessitatibus',
            'tempore',
        ],
    ];
    $request->updateContainerServiceRequest->scale = 575078;
    $request->updateContainerServiceRequest->serviceName = 'ea';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = UpdateContainerServiceXAmzTargetEnum::LIGHTSAIL20161128_UPDATE_CONTAINER_SERVICE;

    $response = $sdk->sdk->updateContainerService($request);

    if ($response->updateContainerServiceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDistribution

<p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Use this action to update the configuration of your existing distribution.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDistributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDistributionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CacheSettings;
use \OpenAPI\OpenAPI\Models\Shared\CookieObject;
use \OpenAPI\OpenAPI\Models\Shared\ForwardValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\HeaderObject;
use \OpenAPI\OpenAPI\Models\Shared\HeaderEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryStringObject;
use \OpenAPI\OpenAPI\Models\Shared\CacheBehaviorPerPath;
use \OpenAPI\OpenAPI\Models\Shared\BehaviorEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\CacheBehavior;
use \OpenAPI\OpenAPI\Models\Shared\InputOrigin;
use \OpenAPI\OpenAPI\Models\Shared\OriginProtocolPolicyEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDistributionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDistributionRequest();
    $request->updateDistributionRequest = new UpdateDistributionRequest();
    $request->updateDistributionRequest->cacheBehaviorSettings = new CacheSettings();
    $request->updateDistributionRequest->cacheBehaviorSettings->allowedHTTPMethods = 'cum';
    $request->updateDistributionRequest->cacheBehaviorSettings->cachedHTTPMethods = 'at';
    $request->updateDistributionRequest->cacheBehaviorSettings->defaultTTL = 5152;
    $request->updateDistributionRequest->cacheBehaviorSettings->forwardedCookies = new CookieObject();
    $request->updateDistributionRequest->cacheBehaviorSettings->forwardedCookies->cookiesAllowList = [
        'quidem',
    ];
    $request->updateDistributionRequest->cacheBehaviorSettings->forwardedCookies->option = ForwardValuesEnum::ALL;
    $request->updateDistributionRequest->cacheBehaviorSettings->forwardedHeaders = new HeaderObject();
    $request->updateDistributionRequest->cacheBehaviorSettings->forwardedHeaders->headersAllowList = [
        HeaderEnumEnum::ACCEPT,
        HeaderEnumEnum::CLOUD_FRONT_IS_TABLET_VIEWER,
        HeaderEnumEnum::ORIGIN,
        HeaderEnumEnum::ACCEPT_DATETIME,
    ];
    $request->updateDistributionRequest->cacheBehaviorSettings->forwardedHeaders->option = ForwardValuesEnum::ALL;
    $request->updateDistributionRequest->cacheBehaviorSettings->forwardedQueryStrings = new QueryStringObject();
    $request->updateDistributionRequest->cacheBehaviorSettings->forwardedQueryStrings->option = false;
    $request->updateDistributionRequest->cacheBehaviorSettings->forwardedQueryStrings->queryStringsAllowList = [
        'praesentium',
        'odit',
    ];
    $request->updateDistributionRequest->cacheBehaviorSettings->maximumTTL = 127688;
    $request->updateDistributionRequest->cacheBehaviorSettings->minimumTTL = 358995;
    $request->updateDistributionRequest->cacheBehaviors = [
        new CacheBehaviorPerPath(),
        new CacheBehaviorPerPath(),
        new CacheBehaviorPerPath(),
    ];
    $request->updateDistributionRequest->defaultCacheBehavior = new CacheBehavior();
    $request->updateDistributionRequest->defaultCacheBehavior->behavior = BehaviorEnumEnum::CACHE;
    $request->updateDistributionRequest->distributionName = 'adipisci';
    $request->updateDistributionRequest->isEnabled = false;
    $request->updateDistributionRequest->origin = new InputOrigin();
    $request->updateDistributionRequest->origin->name = 'Otis Grady';
    $request->updateDistributionRequest->origin->protocolPolicy = OriginProtocolPolicyEnumEnum::HTTP_ONLY;
    $request->updateDistributionRequest->origin->regionName = RegionNameEnum::AP_SOUTH1;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->xAmzTarget = UpdateDistributionXAmzTargetEnum::LIGHTSAIL20161128_UPDATE_DISTRIBUTION;

    $response = $sdk->sdk->updateDistribution($request);

    if ($response->updateDistributionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDistributionBundle

<p>Updates the bundle of your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p> <p>Update your distribution's bundle if your distribution is going over its monthly network transfer quota and is incurring an overage fee.</p> <p>You can update your distribution's bundle only one time within your monthly Amazon Web Services billing cycle. To determine if you can update your distribution's bundle, use the <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the result will indicate whether you can currently update your distribution's bundle.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDistributionBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDistributionBundleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDistributionBundleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDistributionBundleRequest();
    $request->updateDistributionBundleRequest = new UpdateDistributionBundleRequest();
    $request->updateDistributionBundleRequest->bundleId = 'at';
    $request->updateDistributionBundleRequest->distributionName = 'officia';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = UpdateDistributionBundleXAmzTargetEnum::LIGHTSAIL20161128_UPDATE_DISTRIBUTION_BUNDLE;

    $response = $sdk->sdk->updateDistributionBundle($request);

    if ($response->updateDistributionBundleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomainEntry

<p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainEntryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDomainEntryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DomainEntry;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainEntryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainEntryRequest();
    $request->updateDomainEntryRequest = new UpdateDomainEntryRequest();
    $request->updateDomainEntryRequest->domainEntry = new DomainEntry();
    $request->updateDomainEntryRequest->domainEntry->id = '95c537c6-454e-4fb0-b348-96c3ca5acfbe';
    $request->updateDomainEntryRequest->domainEntry->isAlias = false;
    $request->updateDomainEntryRequest->domainEntry->name = 'Winifred Streich';
    $request->updateDomainEntryRequest->domainEntry->options = [
        'odio' => 'minima',
    ];
    $request->updateDomainEntryRequest->domainEntry->target = 'in';
    $request->updateDomainEntryRequest->domainEntry->type = 'ducimus';
    $request->updateDomainEntryRequest->domainName = 'excepturi';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = UpdateDomainEntryXAmzTargetEnum::LIGHTSAIL20161128_UPDATE_DOMAIN_ENTRY;

    $response = $sdk->sdk->updateDomainEntry($request);

    if ($response->updateDomainEntryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInstanceMetadataOptions

Modifies the Amazon Lightsail instance metadata parameters on a running or stopped instance. When you modify the parameters on a running instance, the <code>GetInstance</code> or <code>GetInstances</code> API operation initially responds with a state of <code>pending</code>. After the parameter modifications are successfully applied, the state changes to <code>applied</code> in subsequent <code>GetInstance</code> or <code>GetInstances</code> API calls. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-instance-metadata-service">Use IMDSv2 with an Amazon Lightsail instance</a> in the <i>Amazon Lightsail Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstanceMetadataOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInstanceMetadataOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\HttpEndpointEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpProtocolIpv6Enum;
use \OpenAPI\OpenAPI\Models\Shared\HttpTokensEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstanceMetadataOptionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInstanceMetadataOptionsRequest();
    $request->updateInstanceMetadataOptionsRequest = new UpdateInstanceMetadataOptionsRequest();
    $request->updateInstanceMetadataOptionsRequest->httpEndpoint = HttpEndpointEnum::ENABLED;
    $request->updateInstanceMetadataOptionsRequest->httpProtocolIpv6 = HttpProtocolIpv6Enum::ENABLED;
    $request->updateInstanceMetadataOptionsRequest->httpPutResponseHopLimit = 401428;
    $request->updateInstanceMetadataOptionsRequest->httpTokens = HttpTokensEnum::OPTIONAL;
    $request->updateInstanceMetadataOptionsRequest->instanceName = 'commodi';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = UpdateInstanceMetadataOptionsXAmzTargetEnum::LIGHTSAIL20161128_UPDATE_INSTANCE_METADATA_OPTIONS;

    $response = $sdk->sdk->updateInstanceMetadataOptions($request);

    if ($response->updateInstanceMetadataOptionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLoadBalancerAttribute

<p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLoadBalancerAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLoadBalancerAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancerAttributeNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLoadBalancerAttributeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLoadBalancerAttributeRequest();
    $request->updateLoadBalancerAttributeRequest = new UpdateLoadBalancerAttributeRequest();
    $request->updateLoadBalancerAttributeRequest->attributeName = LoadBalancerAttributeNameEnum::HEALTH_CHECK_PATH;
    $request->updateLoadBalancerAttributeRequest->attributeValue = 'sint';
    $request->updateLoadBalancerAttributeRequest->loadBalancerName = 'vero';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = UpdateLoadBalancerAttributeXAmzTargetEnum::LIGHTSAIL20161128_UPDATE_LOAD_BALANCER_ATTRIBUTE;

    $response = $sdk->sdk->updateLoadBalancerAttribute($request);

    if ($response->updateLoadBalancerAttributeResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRelationalDatabase

<p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRelationalDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRelationalDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRelationalDatabaseRequest();
    $request->updateRelationalDatabaseRequest = new UpdateRelationalDatabaseRequest();
    $request->updateRelationalDatabaseRequest->applyImmediately = false;
    $request->updateRelationalDatabaseRequest->caCertificateIdentifier = 'dolores';
    $request->updateRelationalDatabaseRequest->disableBackupRetention = false;
    $request->updateRelationalDatabaseRequest->enableBackupRetention = false;
    $request->updateRelationalDatabaseRequest->masterUserPassword = 'nam';
    $request->updateRelationalDatabaseRequest->preferredBackupWindow = 'dicta';
    $request->updateRelationalDatabaseRequest->preferredMaintenanceWindow = 'consequuntur';
    $request->updateRelationalDatabaseRequest->publiclyAccessible = false;
    $request->updateRelationalDatabaseRequest->relationalDatabaseName = 'necessitatibus';
    $request->updateRelationalDatabaseRequest->rotateMasterUserPassword = false;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = UpdateRelationalDatabaseXAmzTargetEnum::LIGHTSAIL20161128_UPDATE_RELATIONAL_DATABASE;

    $response = $sdk->sdk->updateRelationalDatabase($request);

    if ($response->updateRelationalDatabaseResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRelationalDatabaseParameters

<p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRelationalDatabaseParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRelationalDatabaseParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\RelationalDatabaseParameter;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRelationalDatabaseParametersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRelationalDatabaseParametersRequest();
    $request->updateRelationalDatabaseParametersRequest = new UpdateRelationalDatabaseParametersRequest();
    $request->updateRelationalDatabaseParametersRequest->parameters = [
        new RelationalDatabaseParameter(),
        new RelationalDatabaseParameter(),
        new RelationalDatabaseParameter(),
        new RelationalDatabaseParameter(),
    ];
    $request->updateRelationalDatabaseParametersRequest->relationalDatabaseName = 'libero';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = UpdateRelationalDatabaseParametersXAmzTargetEnum::LIGHTSAIL20161128_UPDATE_RELATIONAL_DATABASE_PARAMETERS;

    $response = $sdk->sdk->updateRelationalDatabaseParameters($request);

    if ($response->updateRelationalDatabaseParametersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
