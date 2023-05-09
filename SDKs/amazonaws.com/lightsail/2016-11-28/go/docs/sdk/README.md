# SDK

## Overview

<p>Amazon Lightsail is the easiest way to get started with Amazon Web Services (Amazon Web Services) for developers who need to build websites or web applications. It includes everything you need to launch your project quickly - instances (virtual private servers), container services, storage buckets, managed databases, SSD-based block storage, static IP addresses, load balancers, content delivery network (CDN) distributions, DNS management of registered domains, and resource snapshots (backups) - for a low, predictable monthly price.</p> <p>You can manage your Lightsail resources using the Lightsail console, Lightsail API, Command Line Interface (CLI), or SDKs. For more information about Lightsail concepts and tasks, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Amazon Lightsail Developer Guide</a>.</p> <p>This API Reference provides detailed information about the actions, data types, parameters, and errors of the Lightsail service. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas of the Lightsail service, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail Endpoints and Quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/lightsail/>
### Available Operations

* [AllocateStaticIP](#allocatestaticip) - Allocates a static IP address.
* [AttachCertificateToDistribution](#attachcertificatetodistribution) - <p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the domains that are associated with the certificate.</p> <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach to your distribution.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>
* [AttachDisk](#attachdisk) - <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [AttachInstancesToLoadBalancer](#attachinstancestoloadbalancer) - <p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>
* [AttachLoadBalancerTLSCertificate](#attachloadbalancertlscertificate) - <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [AttachStaticIP](#attachstaticip) - Attaches a static IP address to a specific Amazon Lightsail instance.
* [CloseInstancePublicPorts](#closeinstancepublicports) - <p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CopySnapshot](#copysnapshot) - <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one Amazon Web Services Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>
* [CreateBucket](#createbucket) - <p>Creates an Amazon Lightsail bucket.</p> <p>A bucket is a cloud storage resource available in the Lightsail object storage service. Use buckets to store objects such as data and its descriptive metadata. For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
* [CreateBucketAccessKey](#createbucketaccesskey) - <p>Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of an access key ID and corresponding secret access key.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html">GetBucketAccessKeys</a> action to get a list of current access keys for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>
* [CreateCertificate](#createcertificate) - <p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN) distribution and a container service.</p> <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code> action to use the certificate and its domains with your distribution. Or use the <code>UpdateContainerService</code> action to use the certificate and its domains with your container service.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>
* [CreateCloudFormationStack](#createcloudformationstack) - <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>
* [CreateContactMethod](#createcontactmethod) - <p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
* [CreateContainerService](#createcontainerservice) - <p>Creates an Amazon Lightsail container service.</p> <p>A Lightsail container service is a compute resource to which you can deploy containers. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev Guide</i>.</p>
* [CreateContainerServiceDeployment](#createcontainerservicedeployment) - <p>Creates a deployment for your Amazon Lightsail container service.</p> <p>A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.</p> <p>You can deploy containers to your container service using container images from a public registry such as Amazon ECR Public, or from your local machine. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
* [CreateContainerServiceRegistryLogin](#createcontainerserviceregistrylogin) - <p>Creates a temporary set of log in credentials that you can use to log in to the Docker process on your local machine. After you're logged in, you can use the native Docker commands to push your local container images to the container image registry of your Amazon Lightsail account so that you can use them with your Lightsail container service. The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials.</p> <note> <p>You can only push container images to the container service registry of your Lightsail account. You cannot pull container images or perform any other container image management actions on the container service registry.</p> </note> <p>After you push your container images to the container image registry of your Lightsail account, use the <code>RegisterContainerImage</code> action to register the pushed images to a specific Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>
* [CreateDisk](#createdisk) - <p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateDiskFromSnapshot](#creatediskfromsnapshot) - <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateDiskSnapshot](#createdisksnapshot) - <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateDistribution](#createdistribution) - <p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>
* [CreateDomain](#createdomain) - <p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateDomainEntry](#createdomainentry) - <p>Creates one of the following domain name system (DNS) records in a domain DNS zone: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateGUISessionAccessDetails](#createguisessionaccessdetails) - <p>Creates two URLs that are used to access a virtual computer’s graphical user interface (GUI) session. The primary URL initiates a web-based NICE DCV session to the virtual computer's application. The secondary URL initiates a web-based NICE DCV session to the virtual computer's operating session. </p> <p>Use <code>StartGUISession</code> to open the session.</p>
* [CreateInstanceSnapshot](#createinstancesnapshot) - <p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateInstances](#createinstances) - <p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>
* [CreateInstancesFromSnapshot](#createinstancesfromsnapshot) - <p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateKeyPair](#createkeypair) - <p>Creates a custom SSH key pair that you can use with an Amazon Lightsail instance.</p> <note> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> action to create a Lightsail default key pair in an Amazon Web Services Region where a default key pair does not currently exist.</p> </note> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateLoadBalancer](#createloadbalancer) - <p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateLoadBalancerTLSCertificate](#createloadbalancertlscertificate) - <p>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateRelationalDatabase](#createrelationaldatabase) - <p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateRelationalDatabaseFromSnapshot](#createrelationaldatabasefromsnapshot) - <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [CreateRelationalDatabaseSnapshot](#createrelationaldatabasesnapshot) - <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DeleteAlarm](#deletealarm) - <p>Deletes an alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
* [DeleteAutoSnapshot](#deleteautosnapshot) - Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
* [DeleteBucket](#deletebucket) - <p>Deletes a Amazon Lightsail bucket.</p> <note> <p>When you delete your bucket, the bucket name is released and can be reused for a new bucket in your account or another Amazon Web Services account.</p> </note>
* [DeleteBucketAccessKey](#deletebucketaccesskey) - <p>Deletes an access key for the specified Amazon Lightsail bucket.</p> <p>We recommend that you delete an access key if the secret access key is compromised.</p> <p>For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
* [DeleteCertificate](#deletecertificate) - <p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Certificates that are currently attached to a distribution cannot be deleted. Use the <code>DetachCertificateFromDistribution</code> action to detach a certificate from a distribution.</p>
* [DeleteContactMethod](#deletecontactmethod) - <p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
* [DeleteContainerImage](#deletecontainerimage) - Deletes a container image that is registered to your Amazon Lightsail container service.
* [DeleteContainerService](#deletecontainerservice) - Deletes your Amazon Lightsail container service.
* [DeleteDisk](#deletedisk) - <p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DeleteDiskSnapshot](#deletedisksnapshot) - <p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DeleteDistribution](#deletedistribution) - Deletes your Amazon Lightsail content delivery network (CDN) distribution.
* [DeleteDomain](#deletedomain) - <p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DeleteDomainEntry](#deletedomainentry) - <p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DeleteInstance](#deleteinstance) - <p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DeleteInstanceSnapshot](#deleteinstancesnapshot) - <p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DeleteKeyPair](#deletekeypair) - <p>Deletes the specified key pair by removing the public key from Amazon Lightsail.</p> <p>You can delete key pairs that were created using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html">ImportKeyPair</a> and <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html">CreateKeyPair</a> actions, as well as the Lightsail default key pair. A new default key pair will not be created unless you launch an instance without specifying a custom key pair, or you call the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> API. </p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DeleteKnownHostKeys](#deleteknownhostkeys) - <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>
* [DeleteLoadBalancer](#deleteloadbalancer) - <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DeleteLoadBalancerTLSCertificate](#deleteloadbalancertlscertificate) - <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DeleteRelationalDatabase](#deleterelationaldatabase) - <p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DeleteRelationalDatabaseSnapshot](#deleterelationaldatabasesnapshot) - <p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DetachCertificateFromDistribution](#detachcertificatefromdistribution) - <p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is detached, your distribution stops accepting traffic for all of the domains that are associated with the certificate.</p>
* [DetachDisk](#detachdisk) - <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DetachInstancesFromLoadBalancer](#detachinstancesfromloadbalancer) - <p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [DetachStaticIP](#detachstaticip) - Detaches a static IP from the Amazon Lightsail instance to which it is attached.
* [DisableAddOn](#disableaddon) - Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
* [DownloadDefaultKeyPair](#downloaddefaultkeypair) - <p>Downloads the regional Amazon Lightsail default key pair.</p> <p>This action also creates a Lightsail default key pair if a default key pair does not currently exist in the Amazon Web Services Region.</p>
* [EnableAddOn](#enableaddon) - Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
* [ExportSnapshot](#exportsnapshot) - <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>
* [GetActiveNames](#getactivenames) - Returns the names of all active (not deleted) resources.
* [GetAlarms](#getalarms) - <p>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
* [GetAutoSnapshots](#getautosnapshots) - Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
* [GetBlueprints](#getblueprints) - <p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>
* [GetBucketAccessKeys](#getbucketaccesskeys) - <p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p> <important> <p>This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If you lose the secret access key, you must create a new access key.</p> </important>
* [GetBucketBundles](#getbucketbundles) - <p>Returns the bundles that you can apply to a Amazon Lightsail bucket.</p> <p>The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to update the bundle for a bucket.</p>
* [GetBucketMetricData](#getbucketmetricdata) - <p>Returns the data points of a specific metric for an Amazon Lightsail bucket.</p> <p>Metrics report the utilization of a bucket. View and collect metric data regularly to monitor the number of objects stored in a bucket (including object versions) and the storage space used by those objects.</p>
* [GetBuckets](#getbuckets) - <p>Returns information about one or more Amazon Lightsail buckets. The information returned includes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access feature for your Lightsail buckets.</p> <p>For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
* [GetBundles](#getbundles) - <p>Returns the bundles that you can apply to an Amazon Lightsail instance when you create it.</p> <p>A bundle describes the specifications of an instance, such as the monthly cost, amount of memory, the number of vCPUs, amount of storage space, and monthly network data transfer quota.</p> <note> <p>Bundles are referred to as <i>instance plans</i> in the Lightsail console.</p> </note>
* [GetCertificates](#getcertificates) - <p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p> <note> <p>To get a summary of a certificate, ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>
* [GetCloudFormationStackRecords](#getcloudformationstackrecords) - <p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>
* [GetContactMethods](#getcontactmethods) - <p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
* [GetContainerAPIMetadata](#getcontainerapimetadata) - Returns information about Amazon Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin.
* [GetContainerImages](#getcontainerimages) - <p>Returns the container images that are registered to your Amazon Lightsail container service.</p> <note> <p>If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.</p> </note>
* [GetContainerLog](#getcontainerlog) - <p>Returns the log events of a container of your Amazon Lightsail container service.</p> <p>If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service.</p> <note> <p>Container logs are retained for a certain amount of time. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>
* [GetContainerServiceDeployments](#getcontainerservicedeployments) - <p>Returns the deployments for your Amazon Lightsail container service</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> <p>The deployments are ordered by version in ascending order. The newest version is listed at the top of the response.</p> <note> <p>A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>
* [GetContainerServiceMetricData](#getcontainerservicemetricdata) - <p>Returns the data points of a specific metric of your Amazon Lightsail container service.</p> <p>Metrics report the utilization of your resources. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
* [GetContainerServicePowers](#getcontainerservicepowers) - <p>Returns the list of powers that can be specified for your Amazon Lightsail container services.</p> <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.</p>
* [GetContainerServices](#getcontainerservices) - Returns information about one or more of your Amazon Lightsail container services.
* [GetCostEstimate](#getcostestimate) - Retrieves information about the cost estimate for a specified resource. A cost estimate will not generate for a resource that has been deleted.
* [GetDisk](#getdisk) - Returns information about a specific block storage disk.
* [GetDiskSnapshot](#getdisksnapshot) - Returns information about a specific block storage disk snapshot.
* [GetDiskSnapshots](#getdisksnapshots) - Returns information about all block storage disk snapshots in your AWS account and region.
* [GetDisks](#getdisks) - Returns information about all block storage disks in your AWS account and region.
* [GetDistributionBundles](#getdistributionbundles) - <p>Returns the bundles that can be applied to your Amazon Lightsail content delivery network (CDN) distributions.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p>
* [GetDistributionLatestCacheReset](#getdistributionlatestcachereset) - Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.
* [GetDistributionMetricData](#getdistributionmetricdata) - <p>Returns the data points of a specific metric for an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
* [GetDistributions](#getdistributions) - Returns information about one or more of your Amazon Lightsail content delivery network (CDN) distributions.
* [GetDomain](#getdomain) - Returns information about a specific domain recordset.
* [GetDomains](#getdomains) - Returns a list of all domains in the user's account.
* [GetExportSnapshotRecords](#getexportsnapshotrecords) - <p>Returns all export snapshot records created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html">CreateCloudFormationStack</a> action.</p>
* [GetInstance](#getinstance) - Returns information about a specific Amazon Lightsail instance, which is a virtual private server.
* [GetInstanceAccessDetails](#getinstanceaccessdetails) - <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [GetInstanceMetricData](#getinstancemetricdata) - <p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
* [GetInstancePortStates](#getinstanceportstates) - Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
* [GetInstanceSnapshot](#getinstancesnapshot) - Returns information about a specific instance snapshot.
* [GetInstanceSnapshots](#getinstancesnapshots) - Returns all instance snapshots for the user's account.
* [GetInstanceState](#getinstancestate) - Returns the state of a specific instance. Works on one instance at a time.
* [GetInstances](#getinstances) - Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.
* [GetKeyPair](#getkeypair) - Returns information about a specific key pair.
* [GetKeyPairs](#getkeypairs) - Returns information about all key pairs in the user's account.
* [GetLoadBalancer](#getloadbalancer) - Returns information about the specified Lightsail load balancer.
* [GetLoadBalancerMetricData](#getloadbalancermetricdata) - <p>Returns information about health metrics for your Lightsail load balancer.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
* [GetLoadBalancerTLSCertificates](#getloadbalancertlscertificates) - <p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>
* [GetLoadBalancerTLSPolicies](#getloadbalancertlspolicies) - <p>Returns a list of TLS security policies that you can apply to Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
* [GetLoadBalancers](#getloadbalancers) - Returns information about all load balancers in an account.
* [GetOperation](#getoperation) - Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
* [GetOperations](#getoperations) - <p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>
* [GetOperationsForResource](#getoperationsforresource) - Gets operations for a specific resource (e.g., an instance or a static IP).
* [GetRegions](#getregions) - Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.
* [GetRelationalDatabase](#getrelationaldatabase) - Returns information about a specific database in Amazon Lightsail.
* [GetRelationalDatabaseBlueprints](#getrelationaldatabaseblueprints) - <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>
* [GetRelationalDatabaseBundles](#getrelationaldatabasebundles) - <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>
* [GetRelationalDatabaseEvents](#getrelationaldatabaseevents) - Returns a list of events for a specific database in Amazon Lightsail.
* [GetRelationalDatabaseLogEvents](#getrelationaldatabaselogevents) - Returns a list of log events for a database in Amazon Lightsail.
* [GetRelationalDatabaseLogStreams](#getrelationaldatabaselogstreams) - Returns a list of available log streams for a specific database in Amazon Lightsail.
* [GetRelationalDatabaseMasterUserPassword](#getrelationaldatabasemasteruserpassword) - <p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>
* [GetRelationalDatabaseMetricData](#getrelationaldatabasemetricdata) - <p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
* [GetRelationalDatabaseParameters](#getrelationaldatabaseparameters) - <p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>
* [GetRelationalDatabaseSnapshot](#getrelationaldatabasesnapshot) - Returns information about a specific database snapshot in Amazon Lightsail.
* [GetRelationalDatabaseSnapshots](#getrelationaldatabasesnapshots) - Returns information about all of your database snapshots in Amazon Lightsail.
* [GetRelationalDatabases](#getrelationaldatabases) - Returns information about all of your databases in Amazon Lightsail.
* [GetStaticIP](#getstaticip) - Returns information about an Amazon Lightsail static IP.
* [GetStaticIps](#getstaticips) - Returns information about all static IPs in the user's account.
* [ImportKeyPair](#importkeypair) - Imports a public SSH key from a specific key pair.
* [IsVpcPeered](#isvpcpeered) - Returns a Boolean value indicating whether your Lightsail VPC is peered.
* [OpenInstancePublicPorts](#openinstancepublicports) - <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [PeerVpc](#peervpc) - Peers the Lightsail VPC with the user's default VPC.
* [PutAlarm](#putalarm) - <p>Creates or updates an alarm, and associates it with the specified metric.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> <p>When this action creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration.</p>
* [PutInstancePublicPorts](#putinstancepublicports) - <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [RebootInstance](#rebootinstance) - <p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [RebootRelationalDatabase](#rebootrelationaldatabase) - <p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [RegisterContainerImage](#registercontainerimage) - <p>Registers a container image to your Amazon Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>
* [ReleaseStaticIP](#releasestaticip) - Deletes a specific static IP from your account.
* [ResetDistributionCache](#resetdistributioncache) - <p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After resetting the cache, the next time a content request is made, your distribution pulls, serves, and caches it from the origin.</p>
* [SendContactMethodVerification](#sendcontactmethodverification) - <p>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>
* [SetIPAddressType](#setipaddresstype) - <p>Sets the IP address type for an Amazon Lightsail resource.</p> <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the specified resource. Alternately, you can use this action to disable dual-stack, and enable IPv4 only.</p>
* [SetResourceAccessForBucket](#setresourceaccessforbucket) - <p>Sets the Amazon Lightsail resources that can access the specified Lightsail bucket.</p> <p>Lightsail buckets currently support setting access for Lightsail instances in the same Amazon Web Services Region.</p>
* [StartGUISession](#startguisession) - Initiates a graphical user interface (GUI) session that’s used to access a virtual computer’s operating system and application. The session will be active for 1 hour. Use this action to resume the session after it expires. 
* [StartInstance](#startinstance) - <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [StartRelationalDatabase](#startrelationaldatabase) - <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [StopGUISession](#stopguisession) - Terminates a web-based NICE DCV session that’s used to access a virtual computer’s operating system or application. The session will close and any unsaved data will be lost.
* [StopInstance](#stopinstance) - <p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [StopRelationalDatabase](#stoprelationaldatabase) - <p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [TagResource](#tagresource) - <p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [TestAlarm](#testalarm) - <p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
* [UnpeerVpc](#unpeervpc) - Unpeers the Lightsail VPC from the user's default VPC.
* [UntagResource](#untagresource) - <p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [UpdateBucket](#updatebucket) - <p>Updates an existing Amazon Lightsail bucket.</p> <p>Use this action to update the configuration of an existing bucket, such as versioning, public accessibility, and the Amazon Web Services accounts that can access the bucket.</p>
* [UpdateBucketBundle](#updatebucketbundle) - <p>Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. You can update a bucket's bundle only one time within a monthly Amazon Web Services billing cycle. To determine if you can update a bucket's bundle, use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html">GetBuckets</a> action. The <code>ableToUpdateBundle</code> parameter in the response will indicate whether you can currently update a bucket's bundle.</p> <p>Update a bucket's bundle if it's consistently going over its storage space or data transfer quota, or if a bucket's usage is consistently in the lower range of its storage space or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might experience, we strongly recommend that you update a bucket's bundle only as a long-term strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle that will provide the bucket with ample storage space and data transfer for a long time to come.</p>
* [UpdateContainerService](#updatecontainerservice) - Updates the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names.
* [UpdateDistribution](#updatedistribution) - <p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Use this action to update the configuration of your existing distribution.</p>
* [UpdateDistributionBundle](#updatedistributionbundle) - <p>Updates the bundle of your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p> <p>Update your distribution's bundle if your distribution is going over its monthly network transfer quota and is incurring an overage fee.</p> <p>You can update your distribution's bundle only one time within your monthly Amazon Web Services billing cycle. To determine if you can update your distribution's bundle, use the <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the result will indicate whether you can currently update your distribution's bundle.</p>
* [UpdateDomainEntry](#updatedomainentry) - <p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [UpdateInstanceMetadataOptions](#updateinstancemetadataoptions) - Modifies the Amazon Lightsail instance metadata parameters on a running or stopped instance. When you modify the parameters on a running instance, the <code>GetInstance</code> or <code>GetInstances</code> API operation initially responds with a state of <code>pending</code>. After the parameter modifications are successfully applied, the state changes to <code>applied</code> in subsequent <code>GetInstance</code> or <code>GetInstances</code> API calls. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-instance-metadata-service">Use IMDSv2 with an Amazon Lightsail instance</a> in the <i>Amazon Lightsail Developer Guide</i>.
* [UpdateLoadBalancerAttribute](#updateloadbalancerattribute) - <p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [UpdateRelationalDatabase](#updaterelationaldatabase) - <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
* [UpdateRelationalDatabaseParameters](#updaterelationaldatabaseparameters) - <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

## AllocateStaticIP

Allocates a static IP address.

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
    res, err := s.SDK.AllocateStaticIP(ctx, operations.AllocateStaticIPRequest{
        AllocateStaticIPRequest: shared.AllocateStaticIPRequest{
            StaticIPName: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.AllocateStaticIPXAmzTargetEnumLightsail20161128AllocateStaticIP,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateStaticIPResult != nil {
        // handle response
    }
}
```

## AttachCertificateToDistribution

<p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the domains that are associated with the certificate.</p> <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach to your distribution.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>

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
    res, err := s.SDK.AttachCertificateToDistribution(ctx, operations.AttachCertificateToDistributionRequest{
        AttachCertificateToDistributionRequest: shared.AttachCertificateToDistributionRequest{
            CertificateName: "delectus",
            DistributionName: "tempora",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.AttachCertificateToDistributionXAmzTargetEnumLightsail20161128AttachCertificateToDistribution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachCertificateToDistributionResult != nil {
        // handle response
    }
}
```

## AttachDisk

<p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.AttachDisk(ctx, operations.AttachDiskRequest{
        AttachDiskRequest: shared.AttachDiskRequest{
            AutoMounting: sdk.Bool(false),
            DiskName: "nisi",
            DiskPath: "recusandae",
            InstanceName: "temporibus",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.AttachDiskXAmzTargetEnumLightsail20161128AttachDisk,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachDiskResult != nil {
        // handle response
    }
}
```

## AttachInstancesToLoadBalancer

<p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.AttachInstancesToLoadBalancer(ctx, operations.AttachInstancesToLoadBalancerRequest{
        AttachInstancesToLoadBalancerRequest: shared.AttachInstancesToLoadBalancerRequest{
            InstanceNames: []string{
                "quo",
                "odit",
                "at",
                "at",
            },
            LoadBalancerName: "maiores",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.AttachInstancesToLoadBalancerXAmzTargetEnumLightsail20161128AttachInstancesToLoadBalancer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachInstancesToLoadBalancerResult != nil {
        // handle response
    }
}
```

## AttachLoadBalancerTLSCertificate

<p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.AttachLoadBalancerTLSCertificate(ctx, operations.AttachLoadBalancerTLSCertificateRequest{
        AttachLoadBalancerTLSCertificateRequest: shared.AttachLoadBalancerTLSCertificateRequest{
            CertificateName: "dicta",
            LoadBalancerName: "nam",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.AttachLoadBalancerTLSCertificateXAmzTargetEnumLightsail20161128AttachLoadBalancerTLSCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachLoadBalancerTLSCertificateResult != nil {
        // handle response
    }
}
```

## AttachStaticIP

Attaches a static IP address to a specific Amazon Lightsail instance.

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
    res, err := s.SDK.AttachStaticIP(ctx, operations.AttachStaticIPRequest{
        AttachStaticIPRequest: shared.AttachStaticIPRequest{
            InstanceName: "beatae",
            StaticIPName: "commodi",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.AttachStaticIPXAmzTargetEnumLightsail20161128AttachStaticIP,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachStaticIPResult != nil {
        // handle response
    }
}
```

## CloseInstancePublicPorts

<p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CloseInstancePublicPorts(ctx, operations.CloseInstancePublicPortsRequest{
        CloseInstancePublicPortsRequest: shared.CloseInstancePublicPortsRequest{
            InstanceName: "excepturi",
            PortInfo: shared.PortInfo{
                CidrListAliases: []string{
                    "perferendis",
                },
                Cidrs: []string{
                    "natus",
                    "sed",
                },
                FromPort: sdk.Int64(612096),
                Ipv6Cidrs: []string{
                    "natus",
                },
                Protocol: shared.NetworkProtocolEnumAll.ToPointer(),
                ToPort: sdk.Int64(943749),
            },
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.CloseInstancePublicPortsXAmzTargetEnumLightsail20161128CloseInstancePublicPorts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloseInstancePublicPortsResult != nil {
        // handle response
    }
}
```

## CopySnapshot

<p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one Amazon Web Services Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>

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
    res, err := s.SDK.CopySnapshot(ctx, operations.CopySnapshotRequest{
        CopySnapshotRequest: shared.CopySnapshotRequest{
            RestoreDate: sdk.String("quidem"),
            SourceRegion: shared.RegionNameEnumUsEast2,
            SourceResourceName: sdk.String("ipsa"),
            SourceSnapshotName: sdk.String("reiciendis"),
            TargetSnapshotName: "est",
            UseLatestRestorableAutoSnapshot: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.CopySnapshotXAmzTargetEnumLightsail20161128CopySnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopySnapshotResult != nil {
        // handle response
    }
}
```

## CreateBucket

<p>Creates an Amazon Lightsail bucket.</p> <p>A bucket is a cloud storage resource available in the Lightsail object storage service. Use buckets to store objects such as data and its descriptive metadata. For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

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
    res, err := s.SDK.CreateBucket(ctx, operations.CreateBucketRequest{
        CreateBucketRequest: shared.CreateBucketRequest{
            BucketName: "enim",
            BundleID: "omnis",
            EnableObjectVersioning: sdk.Bool(false),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("minima"),
                    Value: sdk.String("excepturi"),
                },
                shared.Tag{
                    Key: sdk.String("accusantium"),
                    Value: sdk.String("iure"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.CreateBucketXAmzTargetEnumLightsail20161128CreateBucket,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBucketResult != nil {
        // handle response
    }
}
```

## CreateBucketAccessKey

<p>Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of an access key ID and corresponding secret access key.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html">GetBucketAccessKeys</a> action to get a list of current access keys for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>

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
    res, err := s.SDK.CreateBucketAccessKey(ctx, operations.CreateBucketAccessKeyRequest{
        CreateBucketAccessKeyRequest: shared.CreateBucketAccessKeyRequest{
            BucketName: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.CreateBucketAccessKeyXAmzTargetEnumLightsail20161128CreateBucketAccessKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBucketAccessKeyResult != nil {
        // handle response
    }
}
```

## CreateCertificate

<p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN) distribution and a container service.</p> <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code> action to use the certificate and its domains with your distribution. Or use the <code>UpdateContainerService</code> action to use the certificate and its domains with your container service.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>

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
    res, err := s.SDK.CreateCertificate(ctx, operations.CreateCertificateRequest{
        CreateCertificateRequest: shared.CreateCertificateRequest{
            CertificateName: "velit",
            DomainName: "error",
            SubjectAlternativeNames: []string{
                "quis",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("laborum"),
                    Value: sdk.String("animi"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.CreateCertificateXAmzTargetEnumLightsail20161128CreateCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCertificateResult != nil {
        // handle response
    }
}
```

## CreateCloudFormationStack

<p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>

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
    res, err := s.SDK.CreateCloudFormationStack(ctx, operations.CreateCloudFormationStackRequest{
        CreateCloudFormationStackRequest: shared.CreateCloudFormationStackRequest{
            Instances: []shared.InstanceEntry{
                shared.InstanceEntry{
                    AvailabilityZone: "aut",
                    InstanceType: "quasi",
                    PortInfoSource: shared.PortInfoSourceTypeEnumNone,
                    SourceName: "temporibus",
                    UserData: sdk.String("laborum"),
                },
                shared.InstanceEntry{
                    AvailabilityZone: "quasi",
                    InstanceType: "reiciendis",
                    PortInfoSource: shared.PortInfoSourceTypeEnumClosed,
                    SourceName: "vero",
                    UserData: sdk.String("nihil"),
                },
                shared.InstanceEntry{
                    AvailabilityZone: "praesentium",
                    InstanceType: "voluptatibus",
                    PortInfoSource: shared.PortInfoSourceTypeEnumDefault,
                    SourceName: "omnis",
                    UserData: sdk.String("voluptate"),
                },
                shared.InstanceEntry{
                    AvailabilityZone: "cum",
                    InstanceType: "perferendis",
                    PortInfoSource: shared.PortInfoSourceTypeEnumDefault,
                    SourceName: "reprehenderit",
                    UserData: sdk.String("ut"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.CreateCloudFormationStackXAmzTargetEnumLightsail20161128CreateCloudFormationStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCloudFormationStackResult != nil {
        // handle response
    }
}
```

## CreateContactMethod

<p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

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
    res, err := s.SDK.CreateContactMethod(ctx, operations.CreateContactMethodRequest{
        CreateContactMethodRequest: shared.CreateContactMethodRequest{
            ContactEndpoint: "enim",
            Protocol: shared.ContactProtocolEnumSms,
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CreateContactMethodXAmzTargetEnumLightsail20161128CreateContactMethod,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContactMethodResult != nil {
        // handle response
    }
}
```

## CreateContainerService

<p>Creates an Amazon Lightsail container service.</p> <p>A Lightsail container service is a compute resource to which you can deploy containers. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev Guide</i>.</p>

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
    res, err := s.SDK.CreateContainerService(ctx, operations.CreateContainerServiceRequest{
        CreateContainerServiceRequest: shared.CreateContainerServiceRequest{
            Deployment: &shared.ContainerServiceDeploymentRequest{
                Containers: map[string]shared.Container{
                    "modi": shared.Container{
                        Command: []string{
                            "rem",
                            "voluptates",
                            "quasi",
                        },
                        Environment: map[string]string{
                            "sint": "veritatis",
                            "itaque": "incidunt",
                            "enim": "consequatur",
                            "est": "quibusdam",
                        },
                        Image: sdk.String("explicabo"),
                        Ports: map[string]shared.ContainerServiceProtocolEnum{
                            "distinctio": shared.ContainerServiceProtocolEnumUDP,
                            "labore": shared.ContainerServiceProtocolEnumHTTPS,
                            "qui": shared.ContainerServiceProtocolEnumHTTPS,
                        },
                    },
                    "cupiditate": shared.Container{
                        Command: []string{
                            "perferendis",
                            "magni",
                            "assumenda",
                        },
                        Environment: map[string]string{
                            "alias": "fugit",
                            "dolorum": "excepturi",
                        },
                        Image: sdk.String("tempora"),
                        Ports: map[string]shared.ContainerServiceProtocolEnum{
                            "tempore": shared.ContainerServiceProtocolEnumHTTPS,
                            "delectus": shared.ContainerServiceProtocolEnumHTTPS,
                            "non": shared.ContainerServiceProtocolEnumUDP,
                        },
                    },
                    "sint": shared.Container{
                        Command: []string{
                            "provident",
                            "necessitatibus",
                        },
                        Environment: map[string]string{
                            "officia": "dolor",
                            "debitis": "a",
                            "dolorum": "in",
                        },
                        Image: sdk.String("in"),
                        Ports: map[string]shared.ContainerServiceProtocolEnum{
                            "maiores": shared.ContainerServiceProtocolEnumTCP,
                            "dicta": shared.ContainerServiceProtocolEnumHTTPS,
                            "cumque": shared.ContainerServiceProtocolEnumUDP,
                            "ea": shared.ContainerServiceProtocolEnumHTTPS,
                        },
                    },
                    "laborum": shared.Container{
                        Command: []string{
                            "non",
                            "occaecati",
                            "enim",
                            "accusamus",
                        },
                        Environment: map[string]string{
                            "quidem": "provident",
                            "nam": "id",
                            "blanditiis": "deleniti",
                            "sapiente": "amet",
                        },
                        Image: sdk.String("deserunt"),
                        Ports: map[string]shared.ContainerServiceProtocolEnum{
                            "vel": shared.ContainerServiceProtocolEnumTCP,
                            "omnis": shared.ContainerServiceProtocolEnumHTTPS,
                        },
                    },
                },
                PublicEndpoint: &shared.EndpointRequest{
                    ContainerName: "perferendis",
                    ContainerPort: 470132,
                    HealthCheck: &shared.ContainerServiceHealthCheckConfig{
                        HealthyThreshold: sdk.Int64(301575),
                        IntervalSeconds: sdk.Int64(716075),
                        Path: sdk.String("id"),
                        SuccessCodes: sdk.String("labore"),
                        TimeoutSeconds: sdk.Int64(290077),
                        UnhealthyThreshold: sdk.Int64(383462),
                    },
                },
            },
            Power: shared.ContainerServicePowerNameEnumMedium,
            PrivateRegistryAccess: &shared.PrivateRegistryAccessRequest{
                EcrImagePullerRole: &shared.ContainerServiceECRImagePullerRoleRequest{
                    IsActive: sdk.Bool(false),
                },
            },
            PublicDomainNames: map[string][]string{
                "eum": []string{
                    "aspernatur",
                    "architecto",
                    "magnam",
                    "et",
                },
                "excepturi": []string{
                    "provident",
                    "quos",
                },
                "sint": []string{
                    "mollitia",
                },
            },
            Scale: 968962,
            ServiceName: "mollitia",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("eum"),
                    Value: sdk.String("dolor"),
                },
                shared.Tag{
                    Key: sdk.String("necessitatibus"),
                    Value: sdk.String("odit"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.CreateContainerServiceXAmzTargetEnumLightsail20161128CreateContainerService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContainerServiceResult != nil {
        // handle response
    }
}
```

## CreateContainerServiceDeployment

<p>Creates a deployment for your Amazon Lightsail container service.</p> <p>A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.</p> <p>You can deploy containers to your container service using container images from a public registry such as Amazon ECR Public, or from your local machine. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

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
    res, err := s.SDK.CreateContainerServiceDeployment(ctx, operations.CreateContainerServiceDeploymentRequest{
        CreateContainerServiceDeploymentRequest: shared.CreateContainerServiceDeploymentRequest{
            Containers: map[string]shared.Container{
                "facilis": shared.Container{
                    Command: []string{
                        "architecto",
                        "architecto",
                    },
                    Environment: map[string]string{
                        "ullam": "expedita",
                        "nihil": "repellat",
                        "quibusdam": "sed",
                        "saepe": "pariatur",
                    },
                    Image: sdk.String("accusantium"),
                    Ports: map[string]shared.ContainerServiceProtocolEnum{
                        "praesentium": shared.ContainerServiceProtocolEnumTCP,
                    },
                },
                "magni": shared.Container{
                    Command: []string{
                        "quo",
                    },
                    Environment: map[string]string{
                        "pariatur": "maxime",
                        "ea": "excepturi",
                        "odit": "ea",
                        "accusantium": "ab",
                    },
                    Image: sdk.String("maiores"),
                    Ports: map[string]shared.ContainerServiceProtocolEnum{
                        "ipsam": shared.ContainerServiceProtocolEnumHTTPS,
                        "autem": shared.ContainerServiceProtocolEnumTCP,
                        "eaque": shared.ContainerServiceProtocolEnumUDP,
                    },
                },
                "nemo": shared.Container{
                    Command: []string{
                        "perferendis",
                        "fugiat",
                        "amet",
                        "aut",
                    },
                    Environment: map[string]string{
                        "corporis": "hic",
                        "libero": "nobis",
                        "dolores": "quis",
                        "totam": "dignissimos",
                    },
                    Image: sdk.String("eaque"),
                    Ports: map[string]shared.ContainerServiceProtocolEnum{
                        "nesciunt": shared.ContainerServiceProtocolEnumHTTP,
                        "perferendis": shared.ContainerServiceProtocolEnumHTTP,
                    },
                },
            },
            PublicEndpoint: &shared.EndpointRequest{
                ContainerName: "minus",
                ContainerPort: 463451,
                HealthCheck: &shared.ContainerServiceHealthCheckConfig{
                    HealthyThreshold: sdk.Int64(223924),
                    IntervalSeconds: sdk.Int64(874573),
                    Path: sdk.String("nostrum"),
                    SuccessCodes: sdk.String("hic"),
                    TimeoutSeconds: sdk.Int64(928082),
                    UnhealthyThreshold: sdk.Int64(608253),
                },
            },
            ServiceName: "facilis",
        },
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.CreateContainerServiceDeploymentXAmzTargetEnumLightsail20161128CreateContainerServiceDeployment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContainerServiceDeploymentResult != nil {
        // handle response
    }
}
```

## CreateContainerServiceRegistryLogin

<p>Creates a temporary set of log in credentials that you can use to log in to the Docker process on your local machine. After you're logged in, you can use the native Docker commands to push your local container images to the container image registry of your Amazon Lightsail account so that you can use them with your Lightsail container service. The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials.</p> <note> <p>You can only push container images to the container service registry of your Lightsail account. You cannot pull container images or perform any other container image management actions on the container service registry.</p> </note> <p>After you push your container images to the container image registry of your Lightsail account, use the <code>RegisterContainerImage</code> action to register the pushed images to a specific Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateContainerServiceRegistryLogin(ctx, operations.CreateContainerServiceRegistryLoginRequest{
        RequestBody: map[string]interface{}{
            "rerum": "adipisci",
            "asperiores": "earum",
            "modi": "iste",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.CreateContainerServiceRegistryLoginXAmzTargetEnumLightsail20161128CreateContainerServiceRegistryLogin,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContainerServiceRegistryLoginResult != nil {
        // handle response
    }
}
```

## CreateDisk

<p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateDisk(ctx, operations.CreateDiskRequest{
        CreateDiskRequest: shared.CreateDiskRequest{
            AddOns: []shared.AddOnRequest{
                shared.AddOnRequest{
                    AddOnType: shared.AddOnTypeEnumStopInstanceOnIdle,
                    AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                        SnapshotTimeOfDay: sdk.String("aliquid"),
                    },
                    StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                        Duration: sdk.String("dolorem"),
                        Threshold: sdk.String("dolorem"),
                    },
                },
                shared.AddOnRequest{
                    AddOnType: shared.AddOnTypeEnumAutoSnapshot,
                    AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                        SnapshotTimeOfDay: sdk.String("qui"),
                    },
                    StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                        Duration: sdk.String("ipsum"),
                        Threshold: sdk.String("hic"),
                    },
                },
            },
            AvailabilityZone: "excepturi",
            DiskName: "cum",
            SizeInGb: 452109,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("reiciendis"),
                    Value: sdk.String("amet"),
                },
                shared.Tag{
                    Key: sdk.String("dolorum"),
                    Value: sdk.String("numquam"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.CreateDiskXAmzTargetEnumLightsail20161128CreateDisk,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDiskResult != nil {
        // handle response
    }
}
```

## CreateDiskFromSnapshot

<p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateDiskFromSnapshot(ctx, operations.CreateDiskFromSnapshotRequest{
        CreateDiskFromSnapshotRequest: shared.CreateDiskFromSnapshotRequest{
            AddOns: []shared.AddOnRequest{
                shared.AddOnRequest{
                    AddOnType: shared.AddOnTypeEnumStopInstanceOnIdle,
                    AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                        SnapshotTimeOfDay: sdk.String("voluptas"),
                    },
                    StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                        Duration: sdk.String("natus"),
                        Threshold: sdk.String("eos"),
                    },
                },
                shared.AddOnRequest{
                    AddOnType: shared.AddOnTypeEnumStopInstanceOnIdle,
                    AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                        SnapshotTimeOfDay: sdk.String("sit"),
                    },
                    StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                        Duration: sdk.String("fugiat"),
                        Threshold: sdk.String("ab"),
                    },
                },
                shared.AddOnRequest{
                    AddOnType: shared.AddOnTypeEnumStopInstanceOnIdle,
                    AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                        SnapshotTimeOfDay: sdk.String("dolorum"),
                    },
                    StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                        Duration: sdk.String("iusto"),
                        Threshold: sdk.String("voluptate"),
                    },
                },
            },
            AvailabilityZone: "dolorum",
            DiskName: "deleniti",
            DiskSnapshotName: sdk.String("omnis"),
            RestoreDate: sdk.String("necessitatibus"),
            SizeInGb: 714697,
            SourceDiskName: sdk.String("asperiores"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("ipsum"),
                    Value: sdk.String("voluptate"),
                },
                shared.Tag{
                    Key: sdk.String("id"),
                    Value: sdk.String("saepe"),
                },
            },
            UseLatestRestorableAutoSnapshot: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.CreateDiskFromSnapshotXAmzTargetEnumLightsail20161128CreateDiskFromSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDiskFromSnapshotResult != nil {
        // handle response
    }
}
```

## CreateDiskSnapshot

<p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateDiskSnapshot(ctx, operations.CreateDiskSnapshotRequest{
        CreateDiskSnapshotRequest: shared.CreateDiskSnapshotRequest{
            DiskName: sdk.String("saepe"),
            DiskSnapshotName: "suscipit",
            InstanceName: sdk.String("deserunt"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("minima"),
                    Value: sdk.String("repellendus"),
                },
                shared.Tag{
                    Key: sdk.String("totam"),
                    Value: sdk.String("similique"),
                },
                shared.Tag{
                    Key: sdk.String("alias"),
                    Value: sdk.String("at"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.CreateDiskSnapshotXAmzTargetEnumLightsail20161128CreateDiskSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDiskSnapshotResult != nil {
        // handle response
    }
}
```

## CreateDistribution

<p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>

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
    res, err := s.SDK.CreateDistribution(ctx, operations.CreateDistributionRequest{
        CreateDistributionRequest: shared.CreateDistributionRequest{
            BundleID: "a",
            CacheBehaviorSettings: &shared.CacheSettings{
                AllowedHTTPMethods: sdk.String("esse"),
                CachedHTTPMethods: sdk.String("harum"),
                DefaultTTL: sdk.Int64(483409),
                ForwardedCookies: &shared.CookieObject{
                    CookiesAllowList: []string{
                        "quisquam",
                    },
                    Option: shared.ForwardValuesEnumAll.ToPointer(),
                },
                ForwardedHeaders: &shared.HeaderObject{
                    HeadersAllowList: []shared.HeaderEnumEnum{
                        shared.HeaderEnumEnumCloudFrontIsTabletViewer,
                    },
                    Option: shared.ForwardValuesEnumAll.ToPointer(),
                },
                ForwardedQueryStrings: &shared.QueryStringObject{
                    Option: sdk.Bool(false),
                    QueryStringsAllowList: []string{
                        "enim",
                        "dolorem",
                    },
                },
                MaximumTTL: sdk.Int64(957451),
                MinimumTTL: sdk.Int64(518201),
            },
            CacheBehaviors: []shared.CacheBehaviorPerPath{
                shared.CacheBehaviorPerPath{
                    Behavior: shared.BehaviorEnumEnumDontCache.ToPointer(),
                    Path: sdk.String("expedita"),
                },
                shared.CacheBehaviorPerPath{
                    Behavior: shared.BehaviorEnumEnumDontCache.ToPointer(),
                    Path: sdk.String("sed"),
                },
            },
            DefaultCacheBehavior: shared.CacheBehavior{
                Behavior: shared.BehaviorEnumEnumDontCache.ToPointer(),
            },
            DistributionName: "libero",
            IPAddressType: shared.IPAddressTypeEnumDualstack.ToPointer(),
            Origin: shared.InputOrigin{
                Name: sdk.String("Darryl Emard"),
                ProtocolPolicy: shared.OriginProtocolPolicyEnumEnumHTTPSOnly.ToPointer(),
                RegionName: shared.RegionNameEnumApNortheast1.ToPointer(),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("soluta"),
                    Value: sdk.String("dicta"),
                },
                shared.Tag{
                    Key: sdk.String("laborum"),
                    Value: sdk.String("totam"),
                },
                shared.Tag{
                    Key: sdk.String("incidunt"),
                    Value: sdk.String("aspernatur"),
                },
                shared.Tag{
                    Key: sdk.String("dolores"),
                    Value: sdk.String("distinctio"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.CreateDistributionXAmzTargetEnumLightsail20161128CreateDistribution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDistributionResult != nil {
        // handle response
    }
}
```

## CreateDomain

<p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateDomain(ctx, operations.CreateDomainRequest{
        CreateDomainRequest: shared.CreateDomainRequest{
            DomainName: "fugit",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("odio"),
                    Value: sdk.String("sunt"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.CreateDomainXAmzTargetEnumLightsail20161128CreateDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDomainResult != nil {
        // handle response
    }
}
```

## CreateDomainEntry

<p>Creates one of the following domain name system (DNS) records in a domain DNS zone: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateDomainEntry(ctx, operations.CreateDomainEntryRequest{
        CreateDomainEntryRequest: shared.CreateDomainEntryRequest{
            DomainEntry: shared.DomainEntry{
                ID: sdk.String("1e31b8b9-0f34-443a-9108-e0adcf4b9218"),
                IsAlias: sdk.Bool(false),
                Name: sdk.String("Toni Wolff"),
                Options: map[string]string{
                    "quis": "ipsum",
                    "delectus": "voluptate",
                    "consectetur": "vero",
                },
                Target: sdk.String("tenetur"),
                Type: sdk.String("dignissimos"),
            },
            DomainName: "hic",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.CreateDomainEntryXAmzTargetEnumLightsail20161128CreateDomainEntry,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDomainEntryResult != nil {
        // handle response
    }
}
```

## CreateGUISessionAccessDetails

<p>Creates two URLs that are used to access a virtual computer’s graphical user interface (GUI) session. The primary URL initiates a web-based NICE DCV session to the virtual computer's application. The secondary URL initiates a web-based NICE DCV session to the virtual computer's operating session. </p> <p>Use <code>StartGUISession</code> to open the session.</p>

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
    res, err := s.SDK.CreateGUISessionAccessDetails(ctx, operations.CreateGUISessionAccessDetailsRequest{
        CreateGUISessionAccessDetailsRequest: shared.CreateGUISessionAccessDetailsRequest{
            ResourceName: "dolore",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.CreateGUISessionAccessDetailsXAmzTargetEnumLightsail20161128CreateGuiSessionAccessDetails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGUISessionAccessDetailsResult != nil {
        // handle response
    }
}
```

## CreateInstanceSnapshot

<p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateInstanceSnapshot(ctx, operations.CreateInstanceSnapshotRequest{
        CreateInstanceSnapshotRequest: shared.CreateInstanceSnapshotRequest{
            InstanceName: "exercitationem",
            InstanceSnapshotName: "nulla",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("porro"),
                    Value: sdk.String("maiores"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.CreateInstanceSnapshotXAmzTargetEnumLightsail20161128CreateInstanceSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInstanceSnapshotResult != nil {
        // handle response
    }
}
```

## CreateInstances

<p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateInstances(ctx, operations.CreateInstancesRequest{
        CreateInstancesRequest: shared.CreateInstancesRequest{
            AddOns: []shared.AddOnRequest{
                shared.AddOnRequest{
                    AddOnType: shared.AddOnTypeEnumAutoSnapshot,
                    AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                        SnapshotTimeOfDay: sdk.String("aspernatur"),
                    },
                    StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                        Duration: sdk.String("vel"),
                        Threshold: sdk.String("possimus"),
                    },
                },
                shared.AddOnRequest{
                    AddOnType: shared.AddOnTypeEnumAutoSnapshot,
                    AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                        SnapshotTimeOfDay: sdk.String("ratione"),
                    },
                    StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                        Duration: sdk.String("ex"),
                        Threshold: sdk.String("laudantium"),
                    },
                },
            },
            AvailabilityZone: "dicta",
            BlueprintID: "dolor",
            BundleID: "maiores",
            CustomImageName: sdk.String("quasi"),
            InstanceNames: []string{
                "nulla",
                "excepturi",
            },
            IPAddressType: shared.IPAddressTypeEnumIpv4.ToPointer(),
            KeyPairName: sdk.String("nostrum"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("quisquam"),
                    Value: sdk.String("saepe"),
                },
                shared.Tag{
                    Key: sdk.String("ea"),
                    Value: sdk.String("impedit"),
                },
                shared.Tag{
                    Key: sdk.String("corporis"),
                    Value: sdk.String("veniam"),
                },
                shared.Tag{
                    Key: sdk.String("aliquid"),
                    Value: sdk.String("inventore"),
                },
            },
            UserData: sdk.String("magnam"),
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.CreateInstancesXAmzTargetEnumLightsail20161128CreateInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInstancesResult != nil {
        // handle response
    }
}
```

## CreateInstancesFromSnapshot

<p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateInstancesFromSnapshot(ctx, operations.CreateInstancesFromSnapshotRequest{
        CreateInstancesFromSnapshotRequest: shared.CreateInstancesFromSnapshotRequest{
            AddOns: []shared.AddOnRequest{
                shared.AddOnRequest{
                    AddOnType: shared.AddOnTypeEnumStopInstanceOnIdle,
                    AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                        SnapshotTimeOfDay: sdk.String("aut"),
                    },
                    StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                        Duration: sdk.String("aut"),
                        Threshold: sdk.String("deleniti"),
                    },
                },
                shared.AddOnRequest{
                    AddOnType: shared.AddOnTypeEnumStopInstanceOnIdle,
                    AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                        SnapshotTimeOfDay: sdk.String("aliquam"),
                    },
                    StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                        Duration: sdk.String("fugit"),
                        Threshold: sdk.String("accusamus"),
                    },
                },
                shared.AddOnRequest{
                    AddOnType: shared.AddOnTypeEnumAutoSnapshot,
                    AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                        SnapshotTimeOfDay: sdk.String("non"),
                    },
                    StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                        Duration: sdk.String("et"),
                        Threshold: sdk.String("dolorum"),
                    },
                },
                shared.AddOnRequest{
                    AddOnType: shared.AddOnTypeEnumStopInstanceOnIdle,
                    AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                        SnapshotTimeOfDay: sdk.String("placeat"),
                    },
                    StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                        Duration: sdk.String("velit"),
                        Threshold: sdk.String("eum"),
                    },
                },
            },
            AttachedDiskMapping: map[string][]shared.DiskMap{
                "nobis": []shared.DiskMap{
                    shared.DiskMap{
                        NewDiskName: sdk.String("assumenda"),
                        OriginalDiskPath: sdk.String("nulla"),
                    },
                    shared.DiskMap{
                        NewDiskName: sdk.String("voluptas"),
                        OriginalDiskPath: sdk.String("libero"),
                    },
                    shared.DiskMap{
                        NewDiskName: sdk.String("quasi"),
                        OriginalDiskPath: sdk.String("tempora"),
                    },
                },
                "numquam": []shared.DiskMap{
                    shared.DiskMap{
                        NewDiskName: sdk.String("provident"),
                        OriginalDiskPath: sdk.String("ipsa"),
                    },
                },
            },
            AvailabilityZone: "molestiae",
            BundleID: "magnam",
            InstanceNames: []string{
                "eius",
                "esse",
            },
            InstanceSnapshotName: sdk.String("esse"),
            IPAddressType: shared.IPAddressTypeEnumIpv4.ToPointer(),
            KeyPairName: sdk.String("fuga"),
            RestoreDate: sdk.String("reprehenderit"),
            SourceInstanceName: sdk.String("quidem"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("ut"),
                    Value: sdk.String("eum"),
                },
                shared.Tag{
                    Key: sdk.String("suscipit"),
                    Value: sdk.String("assumenda"),
                },
                shared.Tag{
                    Key: sdk.String("eos"),
                    Value: sdk.String("praesentium"),
                },
                shared.Tag{
                    Key: sdk.String("quisquam"),
                    Value: sdk.String("veritatis"),
                },
            },
            UseLatestRestorableAutoSnapshot: sdk.Bool(false),
            UserData: sdk.String("ipsa"),
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.CreateInstancesFromSnapshotXAmzTargetEnumLightsail20161128CreateInstancesFromSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInstancesFromSnapshotResult != nil {
        // handle response
    }
}
```

## CreateKeyPair

<p>Creates a custom SSH key pair that you can use with an Amazon Lightsail instance.</p> <note> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> action to create a Lightsail default key pair in an Amazon Web Services Region where a default key pair does not currently exist.</p> </note> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateKeyPair(ctx, operations.CreateKeyPairRequest{
        CreateKeyPairRequest: shared.CreateKeyPairRequest{
            KeyPairName: "eius",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("voluptas"),
                    Value: sdk.String("ab"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.CreateKeyPairXAmzTargetEnumLightsail20161128CreateKeyPair,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateKeyPairResult != nil {
        // handle response
    }
}
```

## CreateLoadBalancer

<p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateLoadBalancer(ctx, operations.CreateLoadBalancerRequest{
        CreateLoadBalancerRequest: shared.CreateLoadBalancerRequest{
            CertificateAlternativeNames: []string{
                "esse",
                "recusandae",
                "aperiam",
                "distinctio",
            },
            CertificateDomainName: sdk.String("quod"),
            CertificateName: sdk.String("dignissimos"),
            HealthCheckPath: sdk.String("inventore"),
            InstancePort: 469498,
            IPAddressType: shared.IPAddressTypeEnumIpv4.ToPointer(),
            LoadBalancerName: "accusamus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("odio"),
                    Value: sdk.String("occaecati"),
                },
                shared.Tag{
                    Key: sdk.String("commodi"),
                    Value: sdk.String("sapiente"),
                },
            },
            TLSPolicyName: sdk.String("dolores"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.CreateLoadBalancerXAmzTargetEnumLightsail20161128CreateLoadBalancer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLoadBalancerResult != nil {
        // handle response
    }
}
```

## CreateLoadBalancerTLSCertificate

<p>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateLoadBalancerTLSCertificate(ctx, operations.CreateLoadBalancerTLSCertificateRequest{
        CreateLoadBalancerTLSCertificateRequest: shared.CreateLoadBalancerTLSCertificateRequest{
            CertificateAlternativeNames: []string{
                "deleniti",
            },
            CertificateDomainName: "fugit",
            CertificateName: "fuga",
            LoadBalancerName: "mollitia",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("atque"),
                    Value: sdk.String("explicabo"),
                },
                shared.Tag{
                    Key: sdk.String("minima"),
                    Value: sdk.String("nisi"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.CreateLoadBalancerTLSCertificateXAmzTargetEnumLightsail20161128CreateLoadBalancerTLSCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLoadBalancerTLSCertificateResult != nil {
        // handle response
    }
}
```

## CreateRelationalDatabase

<p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateRelationalDatabase(ctx, operations.CreateRelationalDatabaseRequest{
        CreateRelationalDatabaseRequest: shared.CreateRelationalDatabaseRequest{
            AvailabilityZone: sdk.String("atque"),
            MasterDatabaseName: "et",
            MasterUserPassword: sdk.String("esse"),
            MasterUsername: "eveniet",
            PreferredBackupWindow: sdk.String("accusamus"),
            PreferredMaintenanceWindow: sdk.String("veritatis"),
            PubliclyAccessible: sdk.Bool(false),
            RelationalDatabaseBlueprintID: "esse",
            RelationalDatabaseBundleID: "quod",
            RelationalDatabaseName: "nam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("aliquid"),
                    Value: sdk.String("quasi"),
                },
                shared.Tag{
                    Key: sdk.String("saepe"),
                    Value: sdk.String("vel"),
                },
                shared.Tag{
                    Key: sdk.String("harum"),
                    Value: sdk.String("molestiae"),
                },
                shared.Tag{
                    Key: sdk.String("rerum"),
                    Value: sdk.String("occaecati"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.CreateRelationalDatabaseXAmzTargetEnumLightsail20161128CreateRelationalDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRelationalDatabaseResult != nil {
        // handle response
    }
}
```

## CreateRelationalDatabaseFromSnapshot

<p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRelationalDatabaseFromSnapshot(ctx, operations.CreateRelationalDatabaseFromSnapshotRequest{
        CreateRelationalDatabaseFromSnapshotRequest: shared.CreateRelationalDatabaseFromSnapshotRequest{
            AvailabilityZone: sdk.String("cumque"),
            PubliclyAccessible: sdk.Bool(false),
            RelationalDatabaseBundleID: sdk.String("consequuntur"),
            RelationalDatabaseName: "consequatur",
            RelationalDatabaseSnapshotName: sdk.String("minus"),
            RestoreTime: types.MustTimeFromString("2022-01-15T21:42:01.969Z"),
            SourceRelationalDatabaseName: sdk.String("consectetur"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("blanditiis"),
                    Value: sdk.String("provident"),
                },
                shared.Tag{
                    Key: sdk.String("a"),
                    Value: sdk.String("nulla"),
                },
            },
            UseLatestRestorableTime: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.CreateRelationalDatabaseFromSnapshotXAmzTargetEnumLightsail20161128CreateRelationalDatabaseFromSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRelationalDatabaseFromSnapshotResult != nil {
        // handle response
    }
}
```

## CreateRelationalDatabaseSnapshot

<p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.CreateRelationalDatabaseSnapshot(ctx, operations.CreateRelationalDatabaseSnapshotRequest{
        CreateRelationalDatabaseSnapshotRequest: shared.CreateRelationalDatabaseSnapshotRequest{
            RelationalDatabaseName: "possimus",
            RelationalDatabaseSnapshotName: "quia",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("asperiores"),
                    Value: sdk.String("facere"),
                },
                shared.Tag{
                    Key: sdk.String("veritatis"),
                    Value: sdk.String("consequuntur"),
                },
                shared.Tag{
                    Key: sdk.String("quasi"),
                    Value: sdk.String("similique"),
                },
                shared.Tag{
                    Key: sdk.String("culpa"),
                    Value: sdk.String("aliquid"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.CreateRelationalDatabaseSnapshotXAmzTargetEnumLightsail20161128CreateRelationalDatabaseSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRelationalDatabaseSnapshotResult != nil {
        // handle response
    }
}
```

## DeleteAlarm

<p>Deletes an alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

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
    res, err := s.SDK.DeleteAlarm(ctx, operations.DeleteAlarmRequest{
        DeleteAlarmRequest: shared.DeleteAlarmRequest{
            AlarmName: "illum",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.DeleteAlarmXAmzTargetEnumLightsail20161128DeleteAlarm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAlarmResult != nil {
        // handle response
    }
}
```

## DeleteAutoSnapshot

Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

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
    res, err := s.SDK.DeleteAutoSnapshot(ctx, operations.DeleteAutoSnapshotRequest{
        DeleteAutoSnapshotRequest: shared.DeleteAutoSnapshotRequest{
            Date: "ullam",
            ResourceName: "nisi",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.DeleteAutoSnapshotXAmzTargetEnumLightsail20161128DeleteAutoSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAutoSnapshotResult != nil {
        // handle response
    }
}
```

## DeleteBucket

<p>Deletes a Amazon Lightsail bucket.</p> <note> <p>When you delete your bucket, the bucket name is released and can be reused for a new bucket in your account or another Amazon Web Services account.</p> </note>

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
    res, err := s.SDK.DeleteBucket(ctx, operations.DeleteBucketRequest{
        DeleteBucketRequest: shared.DeleteBucketRequest{
            BucketName: "dolorum",
            ForceDelete: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DeleteBucketXAmzTargetEnumLightsail20161128DeleteBucket,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBucketResult != nil {
        // handle response
    }
}
```

## DeleteBucketAccessKey

<p>Deletes an access key for the specified Amazon Lightsail bucket.</p> <p>We recommend that you delete an access key if the secret access key is compromised.</p> <p>For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

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
    res, err := s.SDK.DeleteBucketAccessKey(ctx, operations.DeleteBucketAccessKeyRequest{
        DeleteBucketAccessKeyRequest: shared.DeleteBucketAccessKeyRequest{
            AccessKeyID: "ipsa",
            BucketName: "minima",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.DeleteBucketAccessKeyXAmzTargetEnumLightsail20161128DeleteBucketAccessKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBucketAccessKeyResult != nil {
        // handle response
    }
}
```

## DeleteCertificate

<p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Certificates that are currently attached to a distribution cannot be deleted. Use the <code>DetachCertificateFromDistribution</code> action to detach a certificate from a distribution.</p>

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
    res, err := s.SDK.DeleteCertificate(ctx, operations.DeleteCertificateRequest{
        DeleteCertificateRequest: shared.DeleteCertificateRequest{
            CertificateName: "aut",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.DeleteCertificateXAmzTargetEnumLightsail20161128DeleteCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCertificateResult != nil {
        // handle response
    }
}
```

## DeleteContactMethod

<p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

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
    res, err := s.SDK.DeleteContactMethod(ctx, operations.DeleteContactMethodRequest{
        DeleteContactMethodRequest: shared.DeleteContactMethodRequest{
            Protocol: shared.ContactProtocolEnumEmail,
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.DeleteContactMethodXAmzTargetEnumLightsail20161128DeleteContactMethod,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContactMethodResult != nil {
        // handle response
    }
}
```

## DeleteContainerImage

Deletes a container image that is registered to your Amazon Lightsail container service.

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
    res, err := s.SDK.DeleteContainerImage(ctx, operations.DeleteContainerImageRequest{
        DeleteContainerImageRequest: shared.DeleteContainerImageRequest{
            Image: "dicta",
            ServiceName: "maiores",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.DeleteContainerImageXAmzTargetEnumLightsail20161128DeleteContainerImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContainerImageResult != nil {
        // handle response
    }
}
```

## DeleteContainerService

Deletes your Amazon Lightsail container service.

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
    res, err := s.SDK.DeleteContainerService(ctx, operations.DeleteContainerServiceRequest{
        DeleteContainerServiceRequest: shared.DeleteContainerServiceRequest{
            ServiceName: "quaerat",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DeleteContainerServiceXAmzTargetEnumLightsail20161128DeleteContainerService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContainerServiceResult != nil {
        // handle response
    }
}
```

## DeleteDisk

<p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DeleteDisk(ctx, operations.DeleteDiskRequest{
        DeleteDiskRequest: shared.DeleteDiskRequest{
            DiskName: "nemo",
            ForceDeleteAddOns: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DeleteDiskXAmzTargetEnumLightsail20161128DeleteDisk,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDiskResult != nil {
        // handle response
    }
}
```

## DeleteDiskSnapshot

<p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DeleteDiskSnapshot(ctx, operations.DeleteDiskSnapshotRequest{
        DeleteDiskSnapshotRequest: shared.DeleteDiskSnapshotRequest{
            DiskSnapshotName: "fuga",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DeleteDiskSnapshotXAmzTargetEnumLightsail20161128DeleteDiskSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDiskSnapshotResult != nil {
        // handle response
    }
}
```

## DeleteDistribution

Deletes your Amazon Lightsail content delivery network (CDN) distribution.

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
    res, err := s.SDK.DeleteDistribution(ctx, operations.DeleteDistributionRequest{
        DeleteDistributionRequest: shared.DeleteDistributionRequest{
            DistributionName: sdk.String("fugiat"),
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DeleteDistributionXAmzTargetEnumLightsail20161128DeleteDistribution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDistributionResult != nil {
        // handle response
    }
}
```

## DeleteDomain

<p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DeleteDomain(ctx, operations.DeleteDomainRequest{
        DeleteDomainRequest: shared.DeleteDomainRequest{
            DomainName: "cum",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.DeleteDomainXAmzTargetEnumLightsail20161128DeleteDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDomainResult != nil {
        // handle response
    }
}
```

## DeleteDomainEntry

<p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DeleteDomainEntry(ctx, operations.DeleteDomainEntryRequest{
        DeleteDomainEntryRequest: shared.DeleteDomainEntryRequest{
            DomainEntry: shared.DomainEntry{
                ID: sdk.String("60b375ed-4f6f-4bee-81f3-3317fe35b60e"),
                IsAlias: sdk.Bool(false),
                Name: sdk.String("Terry Tillman"),
                Options: map[string]string{
                    "voluptas": "voluptas",
                },
                Target: sdk.String("voluptas"),
                Type: sdk.String("minima"),
            },
            DomainName: "nobis",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.DeleteDomainEntryXAmzTargetEnumLightsail20161128DeleteDomainEntry,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDomainEntryResult != nil {
        // handle response
    }
}
```

## DeleteInstance

<p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DeleteInstance(ctx, operations.DeleteInstanceRequest{
        DeleteInstanceRequest: shared.DeleteInstanceRequest{
            ForceDeleteAddOns: sdk.Bool(false),
            InstanceName: "aliquam",
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.DeleteInstanceXAmzTargetEnumLightsail20161128DeleteInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInstanceResult != nil {
        // handle response
    }
}
```

## DeleteInstanceSnapshot

<p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DeleteInstanceSnapshot(ctx, operations.DeleteInstanceSnapshotRequest{
        DeleteInstanceSnapshotRequest: shared.DeleteInstanceSnapshotRequest{
            InstanceSnapshotName: "hic",
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.DeleteInstanceSnapshotXAmzTargetEnumLightsail20161128DeleteInstanceSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInstanceSnapshotResult != nil {
        // handle response
    }
}
```

## DeleteKeyPair

<p>Deletes the specified key pair by removing the public key from Amazon Lightsail.</p> <p>You can delete key pairs that were created using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html">ImportKeyPair</a> and <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html">CreateKeyPair</a> actions, as well as the Lightsail default key pair. A new default key pair will not be created unless you launch an instance without specifying a custom key pair, or you call the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> API. </p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DeleteKeyPair(ctx, operations.DeleteKeyPairRequest{
        DeleteKeyPairRequest: shared.DeleteKeyPairRequest{
            ExpectedFingerprint: sdk.String("nobis"),
            KeyPairName: "sit",
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DeleteKeyPairXAmzTargetEnumLightsail20161128DeleteKeyPair,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteKeyPairResult != nil {
        // handle response
    }
}
```

## DeleteKnownHostKeys

<p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>

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
    res, err := s.SDK.DeleteKnownHostKeys(ctx, operations.DeleteKnownHostKeysRequest{
        DeleteKnownHostKeysRequest: shared.DeleteKnownHostKeysRequest{
            InstanceName: "expedita",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.DeleteKnownHostKeysXAmzTargetEnumLightsail20161128DeleteKnownHostKeys,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteKnownHostKeysResult != nil {
        // handle response
    }
}
```

## DeleteLoadBalancer

<p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DeleteLoadBalancer(ctx, operations.DeleteLoadBalancerRequest{
        DeleteLoadBalancerRequest: shared.DeleteLoadBalancerRequest{
            LoadBalancerName: "quidem",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.DeleteLoadBalancerXAmzTargetEnumLightsail20161128DeleteLoadBalancer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLoadBalancerResult != nil {
        // handle response
    }
}
```

## DeleteLoadBalancerTLSCertificate

<p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DeleteLoadBalancerTLSCertificate(ctx, operations.DeleteLoadBalancerTLSCertificateRequest{
        DeleteLoadBalancerTLSCertificateRequest: shared.DeleteLoadBalancerTLSCertificateRequest{
            CertificateName: "illo",
            Force: sdk.Bool(false),
            LoadBalancerName: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.DeleteLoadBalancerTLSCertificateXAmzTargetEnumLightsail20161128DeleteLoadBalancerTLSCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLoadBalancerTLSCertificateResult != nil {
        // handle response
    }
}
```

## DeleteRelationalDatabase

<p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DeleteRelationalDatabase(ctx, operations.DeleteRelationalDatabaseRequest{
        DeleteRelationalDatabaseRequest: shared.DeleteRelationalDatabaseRequest{
            FinalRelationalDatabaseSnapshotName: sdk.String("necessitatibus"),
            RelationalDatabaseName: "ipsum",
            SkipFinalSnapshot: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DeleteRelationalDatabaseXAmzTargetEnumLightsail20161128DeleteRelationalDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRelationalDatabaseResult != nil {
        // handle response
    }
}
```

## DeleteRelationalDatabaseSnapshot

<p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DeleteRelationalDatabaseSnapshot(ctx, operations.DeleteRelationalDatabaseSnapshotRequest{
        DeleteRelationalDatabaseSnapshotRequest: shared.DeleteRelationalDatabaseSnapshotRequest{
            RelationalDatabaseSnapshotName: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.DeleteRelationalDatabaseSnapshotXAmzTargetEnumLightsail20161128DeleteRelationalDatabaseSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRelationalDatabaseSnapshotResult != nil {
        // handle response
    }
}
```

## DetachCertificateFromDistribution

<p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is detached, your distribution stops accepting traffic for all of the domains that are associated with the certificate.</p>

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
    res, err := s.SDK.DetachCertificateFromDistribution(ctx, operations.DetachCertificateFromDistributionRequest{
        DetachCertificateFromDistributionRequest: shared.DetachCertificateFromDistributionRequest{
            DistributionName: "incidunt",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzTarget: operations.DetachCertificateFromDistributionXAmzTargetEnumLightsail20161128DetachCertificateFromDistribution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetachCertificateFromDistributionResult != nil {
        // handle response
    }
}
```

## DetachDisk

<p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DetachDisk(ctx, operations.DetachDiskRequest{
        DetachDiskRequest: shared.DetachDiskRequest{
            DiskName: "minima",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DetachDiskXAmzTargetEnumLightsail20161128DetachDisk,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetachDiskResult != nil {
        // handle response
    }
}
```

## DetachInstancesFromLoadBalancer

<p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.DetachInstancesFromLoadBalancer(ctx, operations.DetachInstancesFromLoadBalancerRequest{
        DetachInstancesFromLoadBalancerRequest: shared.DetachInstancesFromLoadBalancerRequest{
            InstanceNames: []string{
                "in",
                "officiis",
            },
            LoadBalancerName: "beatae",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.DetachInstancesFromLoadBalancerXAmzTargetEnumLightsail20161128DetachInstancesFromLoadBalancer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetachInstancesFromLoadBalancerResult != nil {
        // handle response
    }
}
```

## DetachStaticIP

Detaches a static IP from the Amazon Lightsail instance to which it is attached.

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
    res, err := s.SDK.DetachStaticIP(ctx, operations.DetachStaticIPRequest{
        DetachStaticIPRequest: shared.DetachStaticIPRequest{
            StaticIPName: "error",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.DetachStaticIPXAmzTargetEnumLightsail20161128DetachStaticIP,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetachStaticIPResult != nil {
        // handle response
    }
}
```

## DisableAddOn

Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

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
    res, err := s.SDK.DisableAddOn(ctx, operations.DisableAddOnRequest{
        DisableAddOnRequest: shared.DisableAddOnRequest{
            AddOnType: shared.AddOnTypeEnumStopInstanceOnIdle,
            ResourceName: "corrupti",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.DisableAddOnXAmzTargetEnumLightsail20161128DisableAddOn,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableAddOnResult != nil {
        // handle response
    }
}
```

## DownloadDefaultKeyPair

<p>Downloads the regional Amazon Lightsail default key pair.</p> <p>This action also creates a Lightsail default key pair if a default key pair does not currently exist in the Amazon Web Services Region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DownloadDefaultKeyPair(ctx, operations.DownloadDefaultKeyPairRequest{
        RequestBody: map[string]interface{}{
            "expedita": "magnam",
            "consequatur": "esse",
            "ipsam": "sit",
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.DownloadDefaultKeyPairXAmzTargetEnumLightsail20161128DownloadDefaultKeyPair,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadDefaultKeyPairResult != nil {
        // handle response
    }
}
```

## EnableAddOn

Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

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
    res, err := s.SDK.EnableAddOn(ctx, operations.EnableAddOnRequest{
        EnableAddOnRequest: shared.EnableAddOnRequest{
            AddOnRequest: shared.AddOnRequest{
                AddOnType: shared.AddOnTypeEnumAutoSnapshot,
                AutoSnapshotAddOnRequest: &shared.AutoSnapshotAddOnRequest{
                    SnapshotTimeOfDay: sdk.String("sit"),
                },
                StopInstanceOnIdleRequest: &shared.StopInstanceOnIdleRequest{
                    Duration: sdk.String("vel"),
                    Threshold: sdk.String("nostrum"),
                },
            },
            ResourceName: "saepe",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.EnableAddOnXAmzTargetEnumLightsail20161128EnableAddOn,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableAddOnResult != nil {
        // handle response
    }
}
```

## ExportSnapshot

<p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>

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
    res, err := s.SDK.ExportSnapshot(ctx, operations.ExportSnapshotRequest{
        ExportSnapshotRequest: shared.ExportSnapshotRequest{
            SourceSnapshotName: "architecto",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.ExportSnapshotXAmzTargetEnumLightsail20161128ExportSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportSnapshotResult != nil {
        // handle response
    }
}
```

## GetActiveNames

Returns the names of all active (not deleted) resources.

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
    res, err := s.SDK.GetActiveNames(ctx, operations.GetActiveNamesRequest{
        GetActiveNamesRequest: shared.GetActiveNamesRequest{
            PageToken: sdk.String("laboriosam"),
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.GetActiveNamesXAmzTargetEnumLightsail20161128GetActiveNames,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetActiveNamesResult != nil {
        // handle response
    }
}
```

## GetAlarms

<p>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

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
    res, err := s.SDK.GetAlarms(ctx, operations.GetAlarmsRequest{
        GetAlarmsRequest: shared.GetAlarmsRequest{
            AlarmName: sdk.String("repellendus"),
            MonitoredResourceName: sdk.String("delectus"),
            PageToken: sdk.String("voluptates"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.GetAlarmsXAmzTargetEnumLightsail20161128GetAlarms,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAlarmsResult != nil {
        // handle response
    }
}
```

## GetAutoSnapshots

Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.

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
    res, err := s.SDK.GetAutoSnapshots(ctx, operations.GetAutoSnapshotsRequest{
        GetAutoSnapshotsRequest: shared.GetAutoSnapshotsRequest{
            ResourceName: "mollitia",
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.GetAutoSnapshotsXAmzTargetEnumLightsail20161128GetAutoSnapshots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAutoSnapshotsResult != nil {
        // handle response
    }
}
```

## GetBlueprints

<p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>

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
    res, err := s.SDK.GetBlueprints(ctx, operations.GetBlueprintsRequest{
        GetBlueprintsRequest: shared.GetBlueprintsRequest{
            AppCategory: shared.AppCategoryEnumLfR.ToPointer(),
            IncludeInactive: sdk.Bool(false),
            PageToken: sdk.String("asperiores"),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.GetBlueprintsXAmzTargetEnumLightsail20161128GetBlueprints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlueprintsResult != nil {
        // handle response
    }
}
```

## GetBucketAccessKeys

<p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p> <important> <p>This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If you lose the secret access key, you must create a new access key.</p> </important>

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
    res, err := s.SDK.GetBucketAccessKeys(ctx, operations.GetBucketAccessKeysRequest{
        GetBucketAccessKeysRequest: shared.GetBucketAccessKeysRequest{
            BucketName: "assumenda",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.GetBucketAccessKeysXAmzTargetEnumLightsail20161128GetBucketAccessKeys,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBucketAccessKeysResult != nil {
        // handle response
    }
}
```

## GetBucketBundles

<p>Returns the bundles that you can apply to a Amazon Lightsail bucket.</p> <p>The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to update the bundle for a bucket.</p>

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
    res, err := s.SDK.GetBucketBundles(ctx, operations.GetBucketBundlesRequest{
        GetBucketBundlesRequest: shared.GetBucketBundlesRequest{
            IncludeInactive: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.GetBucketBundlesXAmzTargetEnumLightsail20161128GetBucketBundles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBucketBundlesResult != nil {
        // handle response
    }
}
```

## GetBucketMetricData

<p>Returns the data points of a specific metric for an Amazon Lightsail bucket.</p> <p>Metrics report the utilization of a bucket. View and collect metric data regularly to monitor the number of objects stored in a bucket (including object versions) and the storage space used by those objects.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBucketMetricData(ctx, operations.GetBucketMetricDataRequest{
        GetBucketMetricDataRequest: shared.GetBucketMetricDataRequest{
            BucketName: "blanditiis",
            EndTime: types.MustTimeFromString("2022-01-29T08:13:54.022Z"),
            MetricName: shared.BucketMetricNameEnumNumberOfObjects,
            Period: 541381,
            StartTime: types.MustTimeFromString("2022-01-28T23:50:19.904Z"),
            Statistics: []shared.MetricStatisticEnum{
                shared.MetricStatisticEnumSampleCount,
                shared.MetricStatisticEnumMaximum,
                shared.MetricStatisticEnumSampleCount,
            },
            Unit: shared.MetricUnitEnumMicroseconds,
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.GetBucketMetricDataXAmzTargetEnumLightsail20161128GetBucketMetricData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBucketMetricDataResult != nil {
        // handle response
    }
}
```

## GetBuckets

<p>Returns information about one or more Amazon Lightsail buckets. The information returned includes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access feature for your Lightsail buckets.</p> <p>For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

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
    res, err := s.SDK.GetBuckets(ctx, operations.GetBucketsRequest{
        GetBucketsRequest: shared.GetBucketsRequest{
            BucketName: sdk.String("velit"),
            IncludeConnectedResources: sdk.Bool(false),
            PageToken: sdk.String("a"),
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.GetBucketsXAmzTargetEnumLightsail20161128GetBuckets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBucketsResult != nil {
        // handle response
    }
}
```

## GetBundles

<p>Returns the bundles that you can apply to an Amazon Lightsail instance when you create it.</p> <p>A bundle describes the specifications of an instance, such as the monthly cost, amount of memory, the number of vCPUs, amount of storage space, and monthly network data transfer quota.</p> <note> <p>Bundles are referred to as <i>instance plans</i> in the Lightsail console.</p> </note>

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
    res, err := s.SDK.GetBundles(ctx, operations.GetBundlesRequest{
        GetBundlesRequest: shared.GetBundlesRequest{
            AppCategory: shared.AppCategoryEnumLfR.ToPointer(),
            IncludeInactive: sdk.Bool(false),
            PageToken: sdk.String("in"),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.GetBundlesXAmzTargetEnumLightsail20161128GetBundles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBundlesResult != nil {
        // handle response
    }
}
```

## GetCertificates

<p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p> <note> <p>To get a summary of a certificate, ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>

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
    res, err := s.SDK.GetCertificates(ctx, operations.GetCertificatesRequest{
        GetCertificatesRequest: shared.GetCertificatesRequest{
            CertificateName: sdk.String("reprehenderit"),
            CertificateStatuses: []shared.CertificateStatusEnum{
                shared.CertificateStatusEnumPendingValidation,
                shared.CertificateStatusEnumInactive,
                shared.CertificateStatusEnumValidationTimedOut,
            },
            IncludeCertificateDetails: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.GetCertificatesXAmzTargetEnumLightsail20161128GetCertificates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCertificatesResult != nil {
        // handle response
    }
}
```

## GetCloudFormationStackRecords

<p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>

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
    res, err := s.SDK.GetCloudFormationStackRecords(ctx, operations.GetCloudFormationStackRecordsRequest{
        GetCloudFormationStackRecordsRequest: shared.GetCloudFormationStackRecordsRequest{
            PageToken: sdk.String("quae"),
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("ratione"),
        XAmzTarget: operations.GetCloudFormationStackRecordsXAmzTargetEnumLightsail20161128GetCloudFormationStackRecords,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCloudFormationStackRecordsResult != nil {
        // handle response
    }
}
```

## GetContactMethods

<p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>

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
    res, err := s.SDK.GetContactMethods(ctx, operations.GetContactMethodsRequest{
        GetContactMethodsRequest: shared.GetContactMethodsRequest{
            Protocols: []shared.ContactProtocolEnum{
                shared.ContactProtocolEnumSms,
                shared.ContactProtocolEnumSms,
                shared.ContactProtocolEnumSms,
            },
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.GetContactMethodsXAmzTargetEnumLightsail20161128GetContactMethods,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContactMethodsResult != nil {
        // handle response
    }
}
```

## GetContainerAPIMetadata

Returns information about Amazon Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetContainerAPIMetadata(ctx, operations.GetContainerAPIMetadataRequest{
        RequestBody: map[string]interface{}{
            "voluptas": "alias",
            "maiores": "reiciendis",
            "dolores": "id",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.GetContainerAPIMetadataXAmzTargetEnumLightsail20161128GetContainerAPIMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainerAPIMetadataResult != nil {
        // handle response
    }
}
```

## GetContainerImages

<p>Returns the container images that are registered to your Amazon Lightsail container service.</p> <note> <p>If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.</p> </note>

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
    res, err := s.SDK.GetContainerImages(ctx, operations.GetContainerImagesRequest{
        GetContainerImagesRequest: shared.GetContainerImagesRequest{
            ServiceName: "quaerat",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        XAmzTarget: operations.GetContainerImagesXAmzTargetEnumLightsail20161128GetContainerImages,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainerImagesResult != nil {
        // handle response
    }
}
```

## GetContainerLog

<p>Returns the log events of a container of your Amazon Lightsail container service.</p> <p>If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service.</p> <note> <p>Container logs are retained for a certain amount of time. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetContainerLog(ctx, operations.GetContainerLogRequest{
        GetContainerLogRequest: shared.GetContainerLogRequest{
            ContainerName: "eum",
            EndTime: types.MustTimeFromString("2022-01-27T04:48:14.748Z"),
            FilterPattern: sdk.String("esse"),
            PageToken: sdk.String("provident"),
            ServiceName: "quis",
            StartTime: types.MustTimeFromString("2022-01-11T18:28:30.775Z"),
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.GetContainerLogXAmzTargetEnumLightsail20161128GetContainerLog,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainerLogResult != nil {
        // handle response
    }
}
```

## GetContainerServiceDeployments

<p>Returns the deployments for your Amazon Lightsail container service</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> <p>The deployments are ordered by version in ascending order. The newest version is listed at the top of the response.</p> <note> <p>A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

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
    res, err := s.SDK.GetContainerServiceDeployments(ctx, operations.GetContainerServiceDeploymentsRequest{
        GetContainerServiceDeploymentsRequest: shared.GetContainerServiceDeploymentsRequest{
            ServiceName: "provident",
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.GetContainerServiceDeploymentsXAmzTargetEnumLightsail20161128GetContainerServiceDeployments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainerServiceDeploymentsResult != nil {
        // handle response
    }
}
```

## GetContainerServiceMetricData

<p>Returns the data points of a specific metric of your Amazon Lightsail container service.</p> <p>Metrics report the utilization of your resources. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetContainerServiceMetricData(ctx, operations.GetContainerServiceMetricDataRequest{
        GetContainerServiceMetricDataRequest: shared.GetContainerServiceMetricDataRequest{
            EndTime: types.MustTimeFromString("2022-07-21T10:16:07.152Z"),
            MetricName: shared.ContainerServiceMetricNameEnumMemoryUtilization,
            Period: 937636,
            ServiceName: "officia",
            StartTime: types.MustTimeFromString("2021-05-17T11:17:46.661Z"),
            Statistics: []shared.MetricStatisticEnum{
                shared.MetricStatisticEnumSampleCount,
                shared.MetricStatisticEnumSum,
            },
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.GetContainerServiceMetricDataXAmzTargetEnumLightsail20161128GetContainerServiceMetricData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainerServiceMetricDataResult != nil {
        // handle response
    }
}
```

## GetContainerServicePowers

<p>Returns the list of powers that can be specified for your Amazon Lightsail container services.</p> <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetContainerServicePowers(ctx, operations.GetContainerServicePowersRequest{
        RequestBody: map[string]interface{}{
            "fugit": "cumque",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.GetContainerServicePowersXAmzTargetEnumLightsail20161128GetContainerServicePowers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainerServicePowersResult != nil {
        // handle response
    }
}
```

## GetContainerServices

Returns information about one or more of your Amazon Lightsail container services.

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
    res, err := s.SDK.GetContainerServices(ctx, operations.GetContainerServicesRequest{
        GetContainerServicesRequest: shared.GetContainerServicesRequest{
            ServiceName: sdk.String("at"),
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.GetContainerServicesXAmzTargetEnumLightsail20161128GetContainerServices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainerServicesListResult != nil {
        // handle response
    }
}
```

## GetCostEstimate

Retrieves information about the cost estimate for a specified resource. A cost estimate will not generate for a resource that has been deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCostEstimate(ctx, operations.GetCostEstimateRequest{
        GetCostEstimateRequest: shared.GetCostEstimateRequest{
            EndTime: types.MustTimeFromString("2021-10-27T12:32:54.445Z"),
            ResourceName: "earum",
            StartTime: types.MustTimeFromString("2021-02-13T05:30:19.145Z"),
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.GetCostEstimateXAmzTargetEnumLightsail20161128GetCostEstimate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCostEstimateResult != nil {
        // handle response
    }
}
```

## GetDisk

Returns information about a specific block storage disk.

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
    res, err := s.SDK.GetDisk(ctx, operations.GetDiskRequest{
        GetDiskRequest: shared.GetDiskRequest{
            DiskName: "porro",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("animi"),
        XAmzTarget: operations.GetDiskXAmzTargetEnumLightsail20161128GetDisk,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDiskResult != nil {
        // handle response
    }
}
```

## GetDiskSnapshot

Returns information about a specific block storage disk snapshot.

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
    res, err := s.SDK.GetDiskSnapshot(ctx, operations.GetDiskSnapshotRequest{
        GetDiskSnapshotRequest: shared.GetDiskSnapshotRequest{
            DiskSnapshotName: "necessitatibus",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.GetDiskSnapshotXAmzTargetEnumLightsail20161128GetDiskSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDiskSnapshotResult != nil {
        // handle response
    }
}
```

## GetDiskSnapshots

Returns information about all block storage disk snapshots in your AWS account and region.

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
    res, err := s.SDK.GetDiskSnapshots(ctx, operations.GetDiskSnapshotsRequest{
        GetDiskSnapshotsRequest: shared.GetDiskSnapshotsRequest{
            PageToken: sdk.String("suscipit"),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.GetDiskSnapshotsXAmzTargetEnumLightsail20161128GetDiskSnapshots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDiskSnapshotsResult != nil {
        // handle response
    }
}
```

## GetDisks

Returns information about all block storage disks in your AWS account and region.

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
    res, err := s.SDK.GetDisks(ctx, operations.GetDisksRequest{
        GetDisksRequest: shared.GetDisksRequest{
            PageToken: sdk.String("tempora"),
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.GetDisksXAmzTargetEnumLightsail20161128GetDisks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDisksResult != nil {
        // handle response
    }
}
```

## GetDistributionBundles

<p>Returns the bundles that can be applied to your Amazon Lightsail content delivery network (CDN) distributions.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDistributionBundles(ctx, operations.GetDistributionBundlesRequest{
        RequestBody: map[string]interface{}{
            "vel": "architecto",
            "fugiat": "doloremque",
            "dicta": "odio",
            "tempora": "esse",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("nostrum"),
        XAmzTarget: operations.GetDistributionBundlesXAmzTargetEnumLightsail20161128GetDistributionBundles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDistributionBundlesResult != nil {
        // handle response
    }
}
```

## GetDistributionLatestCacheReset

Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.

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
    res, err := s.SDK.GetDistributionLatestCacheReset(ctx, operations.GetDistributionLatestCacheResetRequest{
        GetDistributionLatestCacheResetRequest: shared.GetDistributionLatestCacheResetRequest{
            DistributionName: sdk.String("fugiat"),
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.GetDistributionLatestCacheResetXAmzTargetEnumLightsail20161128GetDistributionLatestCacheReset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDistributionLatestCacheResetResult != nil {
        // handle response
    }
}
```

## GetDistributionMetricData

<p>Returns the data points of a specific metric for an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDistributionMetricData(ctx, operations.GetDistributionMetricDataRequest{
        GetDistributionMetricDataRequest: shared.GetDistributionMetricDataRequest{
            DistributionName: "voluptas",
            EndTime: types.MustTimeFromString("2021-09-05T00:38:24.789Z"),
            MetricName: shared.DistributionMetricNameEnumRequests,
            Period: 625358,
            StartTime: types.MustTimeFromString("2020-04-05T04:18:39.006Z"),
            Statistics: []shared.MetricStatisticEnum{
                shared.MetricStatisticEnumAverage,
                shared.MetricStatisticEnumAverage,
                shared.MetricStatisticEnumMaximum,
            },
            Unit: shared.MetricUnitEnumCount,
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("ut"),
        XAmzTarget: operations.GetDistributionMetricDataXAmzTargetEnumLightsail20161128GetDistributionMetricData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDistributionMetricDataResult != nil {
        // handle response
    }
}
```

## GetDistributions

Returns information about one or more of your Amazon Lightsail content delivery network (CDN) distributions.

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
    res, err := s.SDK.GetDistributions(ctx, operations.GetDistributionsRequest{
        GetDistributionsRequest: shared.GetDistributionsRequest{
            DistributionName: sdk.String("ad"),
            PageToken: sdk.String("expedita"),
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.GetDistributionsXAmzTargetEnumLightsail20161128GetDistributions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDistributionsResult != nil {
        // handle response
    }
}
```

## GetDomain

Returns information about a specific domain recordset.

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
    res, err := s.SDK.GetDomain(ctx, operations.GetDomainRequest{
        GetDomainRequest: shared.GetDomainRequest{
            DomainName: "veritatis",
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.GetDomainXAmzTargetEnumLightsail20161128GetDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainResult != nil {
        // handle response
    }
}
```

## GetDomains

Returns a list of all domains in the user's account.

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
    res, err := s.SDK.GetDomains(ctx, operations.GetDomainsRequest{
        GetDomainsRequest: shared.GetDomainsRequest{
            PageToken: sdk.String("fuga"),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.GetDomainsXAmzTargetEnumLightsail20161128GetDomains,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainsResult != nil {
        // handle response
    }
}
```

## GetExportSnapshotRecords

<p>Returns all export snapshot records created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html">CreateCloudFormationStack</a> action.</p>

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
    res, err := s.SDK.GetExportSnapshotRecords(ctx, operations.GetExportSnapshotRecordsRequest{
        GetExportSnapshotRecordsRequest: shared.GetExportSnapshotRecordsRequest{
            PageToken: sdk.String("sapiente"),
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.GetExportSnapshotRecordsXAmzTargetEnumLightsail20161128GetExportSnapshotRecords,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetExportSnapshotRecordsResult != nil {
        // handle response
    }
}
```

## GetInstance

Returns information about a specific Amazon Lightsail instance, which is a virtual private server.

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
    res, err := s.SDK.GetInstance(ctx, operations.GetInstanceRequest{
        GetInstanceRequest: shared.GetInstanceRequest{
            InstanceName: "illum",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.GetInstanceXAmzTargetEnumLightsail20161128GetInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstanceResult != nil {
        // handle response
    }
}
```

## GetInstanceAccessDetails

<p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.GetInstanceAccessDetails(ctx, operations.GetInstanceAccessDetailsRequest{
        GetInstanceAccessDetailsRequest: shared.GetInstanceAccessDetailsRequest{
            InstanceName: "aliquam",
            Protocol: shared.InstanceAccessProtocolEnumSSH.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.GetInstanceAccessDetailsXAmzTargetEnumLightsail20161128GetInstanceAccessDetails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstanceAccessDetailsResult != nil {
        // handle response
    }
}
```

## GetInstanceMetricData

<p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetInstanceMetricData(ctx, operations.GetInstanceMetricDataRequest{
        GetInstanceMetricDataRequest: shared.GetInstanceMetricDataRequest{
            EndTime: types.MustTimeFromString("2022-11-09T08:03:12.737Z"),
            InstanceName: "ab",
            MetricName: shared.InstanceMetricNameEnumStatusCheckFailedInstance,
            Period: 65604,
            StartTime: types.MustTimeFromString("2022-02-22T11:01:14.144Z"),
            Statistics: []shared.MetricStatisticEnum{
                shared.MetricStatisticEnumMinimum,
                shared.MetricStatisticEnumMinimum,
            },
            Unit: shared.MetricUnitEnumBytesSecond,
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzTarget: operations.GetInstanceMetricDataXAmzTargetEnumLightsail20161128GetInstanceMetricData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstanceMetricDataResult != nil {
        // handle response
    }
}
```

## GetInstancePortStates

Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.

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
    res, err := s.SDK.GetInstancePortStates(ctx, operations.GetInstancePortStatesRequest{
        GetInstancePortStatesRequest: shared.GetInstancePortStatesRequest{
            InstanceName: "nesciunt",
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.GetInstancePortStatesXAmzTargetEnumLightsail20161128GetInstancePortStates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstancePortStatesResult != nil {
        // handle response
    }
}
```

## GetInstanceSnapshot

Returns information about a specific instance snapshot.

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
    res, err := s.SDK.GetInstanceSnapshot(ctx, operations.GetInstanceSnapshotRequest{
        GetInstanceSnapshotRequest: shared.GetInstanceSnapshotRequest{
            InstanceSnapshotName: "porro",
        },
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.GetInstanceSnapshotXAmzTargetEnumLightsail20161128GetInstanceSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstanceSnapshotResult != nil {
        // handle response
    }
}
```

## GetInstanceSnapshots

Returns all instance snapshots for the user's account.

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
    res, err := s.SDK.GetInstanceSnapshots(ctx, operations.GetInstanceSnapshotsRequest{
        GetInstanceSnapshotsRequest: shared.GetInstanceSnapshotsRequest{
            PageToken: sdk.String("necessitatibus"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.GetInstanceSnapshotsXAmzTargetEnumLightsail20161128GetInstanceSnapshots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstanceSnapshotsResult != nil {
        // handle response
    }
}
```

## GetInstanceState

Returns the state of a specific instance. Works on one instance at a time.

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
    res, err := s.SDK.GetInstanceState(ctx, operations.GetInstanceStateRequest{
        GetInstanceStateRequest: shared.GetInstanceStateRequest{
            InstanceName: "doloribus",
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.GetInstanceStateXAmzTargetEnumLightsail20161128GetInstanceState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstanceStateResult != nil {
        // handle response
    }
}
```

## GetInstances

Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.

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
    res, err := s.SDK.GetInstances(ctx, operations.GetInstancesRequest{
        GetInstancesRequest: shared.GetInstancesRequest{
            PageToken: sdk.String("voluptas"),
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        XAmzTarget: operations.GetInstancesXAmzTargetEnumLightsail20161128GetInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstancesResult != nil {
        // handle response
    }
}
```

## GetKeyPair

Returns information about a specific key pair.

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
    res, err := s.SDK.GetKeyPair(ctx, operations.GetKeyPairRequest{
        GetKeyPairRequest: shared.GetKeyPairRequest{
            KeyPairName: "fuga",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.GetKeyPairXAmzTargetEnumLightsail20161128GetKeyPair,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetKeyPairResult != nil {
        // handle response
    }
}
```

## GetKeyPairs

Returns information about all key pairs in the user's account.

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
    res, err := s.SDK.GetKeyPairs(ctx, operations.GetKeyPairsRequest{
        GetKeyPairsRequest: shared.GetKeyPairsRequest{
            IncludeDefaultKeyPair: sdk.Bool(false),
            PageToken: sdk.String("consequuntur"),
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.GetKeyPairsXAmzTargetEnumLightsail20161128GetKeyPairs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetKeyPairsResult != nil {
        // handle response
    }
}
```

## GetLoadBalancer

Returns information about the specified Lightsail load balancer.

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
    res, err := s.SDK.GetLoadBalancer(ctx, operations.GetLoadBalancerRequest{
        GetLoadBalancerRequest: shared.GetLoadBalancerRequest{
            LoadBalancerName: "eos",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.GetLoadBalancerXAmzTargetEnumLightsail20161128GetLoadBalancer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoadBalancerResult != nil {
        // handle response
    }
}
```

## GetLoadBalancerMetricData

<p>Returns information about health metrics for your Lightsail load balancer.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetLoadBalancerMetricData(ctx, operations.GetLoadBalancerMetricDataRequest{
        GetLoadBalancerMetricDataRequest: shared.GetLoadBalancerMetricDataRequest{
            EndTime: types.MustTimeFromString("2021-10-13T17:26:42.757Z"),
            LoadBalancerName: "delectus",
            MetricName: shared.LoadBalancerMetricNameEnumHTTPCodeLb4XxCount,
            Period: 507636,
            StartTime: types.MustTimeFromString("2022-02-06T01:23:27.992Z"),
            Statistics: []shared.MetricStatisticEnum{
                shared.MetricStatisticEnumSum,
                shared.MetricStatisticEnumSum,
                shared.MetricStatisticEnumSampleCount,
                shared.MetricStatisticEnumSum,
            },
            Unit: shared.MetricUnitEnumCount,
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.GetLoadBalancerMetricDataXAmzTargetEnumLightsail20161128GetLoadBalancerMetricData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoadBalancerMetricDataResult != nil {
        // handle response
    }
}
```

## GetLoadBalancerTLSCertificates

<p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>

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
    res, err := s.SDK.GetLoadBalancerTLSCertificates(ctx, operations.GetLoadBalancerTLSCertificatesRequest{
        GetLoadBalancerTLSCertificatesRequest: shared.GetLoadBalancerTLSCertificatesRequest{
            LoadBalancerName: "alias",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.GetLoadBalancerTLSCertificatesXAmzTargetEnumLightsail20161128GetLoadBalancerTLSCertificates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoadBalancerTLSCertificatesResult != nil {
        // handle response
    }
}
```

## GetLoadBalancerTLSPolicies

<p>Returns a list of TLS security policies that you can apply to Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>

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
    res, err := s.SDK.GetLoadBalancerTLSPolicies(ctx, operations.GetLoadBalancerTLSPoliciesRequest{
        GetLoadBalancerTLSPoliciesRequest: shared.GetLoadBalancerTLSPoliciesRequest{
            PageToken: sdk.String("esse"),
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.GetLoadBalancerTLSPoliciesXAmzTargetEnumLightsail20161128GetLoadBalancerTLSPolicies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoadBalancerTLSPoliciesResult != nil {
        // handle response
    }
}
```

## GetLoadBalancers

Returns information about all load balancers in an account.

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
    res, err := s.SDK.GetLoadBalancers(ctx, operations.GetLoadBalancersRequest{
        GetLoadBalancersRequest: shared.GetLoadBalancersRequest{
            PageToken: sdk.String("hic"),
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.GetLoadBalancersXAmzTargetEnumLightsail20161128GetLoadBalancers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoadBalancersResult != nil {
        // handle response
    }
}
```

## GetOperation

Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.

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
    res, err := s.SDK.GetOperation(ctx, operations.GetOperationRequest{
        GetOperationRequest: shared.GetOperationRequest{
            OperationID: "minus",
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.GetOperationXAmzTargetEnumLightsail20161128GetOperation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOperationResult != nil {
        // handle response
    }
}
```

## GetOperations

<p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>

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
    res, err := s.SDK.GetOperations(ctx, operations.GetOperationsRequest{
        GetOperationsRequest: shared.GetOperationsRequest{
            PageToken: sdk.String("magni"),
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.GetOperationsXAmzTargetEnumLightsail20161128GetOperations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOperationsResult != nil {
        // handle response
    }
}
```

## GetOperationsForResource

Gets operations for a specific resource (e.g., an instance or a static IP).

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
    res, err := s.SDK.GetOperationsForResource(ctx, operations.GetOperationsForResourceRequest{
        GetOperationsForResourceRequest: shared.GetOperationsForResourceRequest{
            PageToken: sdk.String("dignissimos"),
            ResourceName: "neque",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.GetOperationsForResourceXAmzTargetEnumLightsail20161128GetOperationsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOperationsForResourceResult != nil {
        // handle response
    }
}
```

## GetRegions

Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.

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
    res, err := s.SDK.GetRegions(ctx, operations.GetRegionsRequest{
        GetRegionsRequest: shared.GetRegionsRequest{
            IncludeAvailabilityZones: sdk.Bool(false),
            IncludeRelationalDatabaseAvailabilityZones: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.GetRegionsXAmzTargetEnumLightsail20161128GetRegions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRegionsResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabase

Returns information about a specific database in Amazon Lightsail.

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
    res, err := s.SDK.GetRelationalDatabase(ctx, operations.GetRelationalDatabaseRequest{
        GetRelationalDatabaseRequest: shared.GetRelationalDatabaseRequest{
            RelationalDatabaseName: "quia",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.GetRelationalDatabaseXAmzTargetEnumLightsail20161128GetRelationalDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabaseResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabaseBlueprints

<p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>

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
    res, err := s.SDK.GetRelationalDatabaseBlueprints(ctx, operations.GetRelationalDatabaseBlueprintsRequest{
        GetRelationalDatabaseBlueprintsRequest: shared.GetRelationalDatabaseBlueprintsRequest{
            PageToken: sdk.String("beatae"),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.GetRelationalDatabaseBlueprintsXAmzTargetEnumLightsail20161128GetRelationalDatabaseBlueprints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabaseBlueprintsResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabaseBundles

<p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>

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
    res, err := s.SDK.GetRelationalDatabaseBundles(ctx, operations.GetRelationalDatabaseBundlesRequest{
        GetRelationalDatabaseBundlesRequest: shared.GetRelationalDatabaseBundlesRequest{
            IncludeInactive: sdk.Bool(false),
            PageToken: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.GetRelationalDatabaseBundlesXAmzTargetEnumLightsail20161128GetRelationalDatabaseBundles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabaseBundlesResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabaseEvents

Returns a list of events for a specific database in Amazon Lightsail.

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
    res, err := s.SDK.GetRelationalDatabaseEvents(ctx, operations.GetRelationalDatabaseEventsRequest{
        GetRelationalDatabaseEventsRequest: shared.GetRelationalDatabaseEventsRequest{
            DurationInMinutes: sdk.Int64(242178),
            PageToken: sdk.String("laborum"),
            RelationalDatabaseName: "non",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.GetRelationalDatabaseEventsXAmzTargetEnumLightsail20161128GetRelationalDatabaseEvents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabaseEventsResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabaseLogEvents

Returns a list of log events for a database in Amazon Lightsail.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRelationalDatabaseLogEvents(ctx, operations.GetRelationalDatabaseLogEventsRequest{
        GetRelationalDatabaseLogEventsRequest: shared.GetRelationalDatabaseLogEventsRequest{
            EndTime: types.MustTimeFromString("2022-04-22T23:58:52.766Z"),
            LogStreamName: "voluptas",
            PageToken: sdk.String("facilis"),
            RelationalDatabaseName: "placeat",
            StartFromHead: sdk.Bool(false),
            StartTime: types.MustTimeFromString("2021-08-01T09:41:55.270Z"),
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("animi"),
        XAmzTarget: operations.GetRelationalDatabaseLogEventsXAmzTargetEnumLightsail20161128GetRelationalDatabaseLogEvents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabaseLogEventsResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabaseLogStreams

Returns a list of available log streams for a specific database in Amazon Lightsail.

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
    res, err := s.SDK.GetRelationalDatabaseLogStreams(ctx, operations.GetRelationalDatabaseLogStreamsRequest{
        GetRelationalDatabaseLogStreamsRequest: shared.GetRelationalDatabaseLogStreamsRequest{
            RelationalDatabaseName: "impedit",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.GetRelationalDatabaseLogStreamsXAmzTargetEnumLightsail20161128GetRelationalDatabaseLogStreams,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabaseLogStreamsResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabaseMasterUserPassword

<p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>

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
    res, err := s.SDK.GetRelationalDatabaseMasterUserPassword(ctx, operations.GetRelationalDatabaseMasterUserPasswordRequest{
        GetRelationalDatabaseMasterUserPasswordRequest: shared.GetRelationalDatabaseMasterUserPasswordRequest{
            PasswordVersion: shared.RelationalDatabasePasswordVersionEnumPending.ToPointer(),
            RelationalDatabaseName: "consectetur",
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.GetRelationalDatabaseMasterUserPasswordXAmzTargetEnumLightsail20161128GetRelationalDatabaseMasterUserPassword,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabaseMasterUserPasswordResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabaseMetricData

<p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRelationalDatabaseMetricData(ctx, operations.GetRelationalDatabaseMetricDataRequest{
        GetRelationalDatabaseMetricDataRequest: shared.GetRelationalDatabaseMetricDataRequest{
            EndTime: types.MustTimeFromString("2022-04-03T23:45:33.127Z"),
            MetricName: shared.RelationalDatabaseMetricNameEnumNetworkReceiveThroughput,
            Period: 526907,
            RelationalDatabaseName: "dolorum",
            StartTime: types.MustTimeFromString("2022-11-09T04:30:19.165Z"),
            Statistics: []shared.MetricStatisticEnum{
                shared.MetricStatisticEnumMinimum,
            },
            Unit: shared.MetricUnitEnumGigabits,
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.GetRelationalDatabaseMetricDataXAmzTargetEnumLightsail20161128GetRelationalDatabaseMetricData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabaseMetricDataResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabaseParameters

<p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>

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
    res, err := s.SDK.GetRelationalDatabaseParameters(ctx, operations.GetRelationalDatabaseParametersRequest{
        GetRelationalDatabaseParametersRequest: shared.GetRelationalDatabaseParametersRequest{
            PageToken: sdk.String("ipsum"),
            RelationalDatabaseName: "unde",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.GetRelationalDatabaseParametersXAmzTargetEnumLightsail20161128GetRelationalDatabaseParameters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabaseParametersResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabaseSnapshot

Returns information about a specific database snapshot in Amazon Lightsail.

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
    res, err := s.SDK.GetRelationalDatabaseSnapshot(ctx, operations.GetRelationalDatabaseSnapshotRequest{
        GetRelationalDatabaseSnapshotRequest: shared.GetRelationalDatabaseSnapshotRequest{
            RelationalDatabaseSnapshotName: "libero",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.GetRelationalDatabaseSnapshotXAmzTargetEnumLightsail20161128GetRelationalDatabaseSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabaseSnapshotResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabaseSnapshots

Returns information about all of your database snapshots in Amazon Lightsail.

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
    res, err := s.SDK.GetRelationalDatabaseSnapshots(ctx, operations.GetRelationalDatabaseSnapshotsRequest{
        GetRelationalDatabaseSnapshotsRequest: shared.GetRelationalDatabaseSnapshotsRequest{
            PageToken: sdk.String("sit"),
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.GetRelationalDatabaseSnapshotsXAmzTargetEnumLightsail20161128GetRelationalDatabaseSnapshots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabaseSnapshotsResult != nil {
        // handle response
    }
}
```

## GetRelationalDatabases

Returns information about all of your databases in Amazon Lightsail.

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
    res, err := s.SDK.GetRelationalDatabases(ctx, operations.GetRelationalDatabasesRequest{
        GetRelationalDatabasesRequest: shared.GetRelationalDatabasesRequest{
            PageToken: sdk.String("eligendi"),
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.GetRelationalDatabasesXAmzTargetEnumLightsail20161128GetRelationalDatabases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRelationalDatabasesResult != nil {
        // handle response
    }
}
```

## GetStaticIP

Returns information about an Amazon Lightsail static IP.

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
    res, err := s.SDK.GetStaticIP(ctx, operations.GetStaticIPRequest{
        GetStaticIPRequest: shared.GetStaticIPRequest{
            StaticIPName: "est",
        },
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.GetStaticIPXAmzTargetEnumLightsail20161128GetStaticIP,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStaticIPResult != nil {
        // handle response
    }
}
```

## GetStaticIps

Returns information about all static IPs in the user's account.

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
    res, err := s.SDK.GetStaticIps(ctx, operations.GetStaticIpsRequest{
        GetStaticIpsRequest: shared.GetStaticIpsRequest{
            PageToken: sdk.String("sint"),
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.GetStaticIpsXAmzTargetEnumLightsail20161128GetStaticIps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStaticIpsResult != nil {
        // handle response
    }
}
```

## ImportKeyPair

Imports a public SSH key from a specific key pair.

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
    res, err := s.SDK.ImportKeyPair(ctx, operations.ImportKeyPairRequest{
        ImportKeyPairRequest: shared.ImportKeyPairRequest{
            KeyPairName: "voluptatibus",
            PublicKeyBase64: "cum",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.ImportKeyPairXAmzTargetEnumLightsail20161128ImportKeyPair,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportKeyPairResult != nil {
        // handle response
    }
}
```

## IsVpcPeered

Returns a Boolean value indicating whether your Lightsail VPC is peered.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.IsVpcPeered(ctx, operations.IsVpcPeeredRequest{
        RequestBody: map[string]interface{}{
            "officiis": "eos",
            "quibusdam": "odio",
            "praesentium": "odit",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("similique"),
        XAmzTarget: operations.IsVpcPeeredXAmzTargetEnumLightsail20161128IsVpcPeered,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IsVpcPeeredResult != nil {
        // handle response
    }
}
```

## OpenInstancePublicPorts

<p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.OpenInstancePublicPorts(ctx, operations.OpenInstancePublicPortsRequest{
        OpenInstancePublicPortsRequest: shared.OpenInstancePublicPortsRequest{
            InstanceName: "ut",
            PortInfo: shared.PortInfo{
                CidrListAliases: []string{
                    "quis",
                    "beatae",
                    "unde",
                },
                Cidrs: []string{
                    "delectus",
                    "cupiditate",
                },
                FromPort: sdk.Int64(147801),
                Ipv6Cidrs: []string{
                    "numquam",
                    "nesciunt",
                },
                Protocol: shared.NetworkProtocolEnumIcmp.ToPointer(),
                ToPort: sdk.Int64(637856),
            },
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.OpenInstancePublicPortsXAmzTargetEnumLightsail20161128OpenInstancePublicPorts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenInstancePublicPortsResult != nil {
        // handle response
    }
}
```

## PeerVpc

Peers the Lightsail VPC with the user's default VPC.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PeerVpc(ctx, operations.PeerVpcRequest{
        RequestBody: map[string]interface{}{
            "minima": "placeat",
            "enim": "neque",
            "in": "minus",
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.PeerVpcXAmzTargetEnumLightsail20161128PeerVpc,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PeerVpcResult != nil {
        // handle response
    }
}
```

## PutAlarm

<p>Creates or updates an alarm, and associates it with the specified metric.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> <p>When this action creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration.</p>

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
    res, err := s.SDK.PutAlarm(ctx, operations.PutAlarmRequest{
        PutAlarmRequest: shared.PutAlarmRequest{
            AlarmName: "aperiam",
            ComparisonOperator: shared.ComparisonOperatorEnumLessThanThreshold,
            ContactProtocols: []shared.ContactProtocolEnum{
                shared.ContactProtocolEnumEmail,
            },
            DatapointsToAlarm: sdk.Int64(520875),
            EvaluationPeriods: 577709,
            MetricName: shared.MetricNameEnumHTTPCodeLb4XxCount,
            MonitoredResourceName: "quo",
            NotificationEnabled: sdk.Bool(false),
            NotificationTriggers: []shared.AlarmStateEnum{
                shared.AlarmStateEnumInsufficientData,
            },
            Threshold: 6845.53,
            TreatMissingData: shared.TreatMissingDataEnumNotBreaching.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.PutAlarmXAmzTargetEnumLightsail20161128PutAlarm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAlarmResult != nil {
        // handle response
    }
}
```

## PutInstancePublicPorts

<p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.PutInstancePublicPorts(ctx, operations.PutInstancePublicPortsRequest{
        PutInstancePublicPortsRequest: shared.PutInstancePublicPortsRequest{
            InstanceName: "pariatur",
            PortInfos: []shared.PortInfo{
                shared.PortInfo{
                    CidrListAliases: []string{
                        "aperiam",
                        "odio",
                    },
                    Cidrs: []string{
                        "in",
                        "ducimus",
                    },
                    FromPort: sdk.Int64(567846),
                    Ipv6Cidrs: []string{
                        "error",
                    },
                    Protocol: shared.NetworkProtocolEnumTCP.ToPointer(),
                    ToPort: sdk.Int64(498180),
                },
                shared.PortInfo{
                    CidrListAliases: []string{
                        "pariatur",
                        "itaque",
                    },
                    Cidrs: []string{
                        "optio",
                        "ex",
                        "quaerat",
                    },
                    FromPort: sdk.Int64(416692),
                    Ipv6Cidrs: []string{
                        "placeat",
                        "quidem",
                        "exercitationem",
                        "quam",
                    },
                    Protocol: shared.NetworkProtocolEnumTCP.ToPointer(),
                    ToPort: sdk.Int64(264619),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.PutInstancePublicPortsXAmzTargetEnumLightsail20161128PutInstancePublicPorts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutInstancePublicPortsResult != nil {
        // handle response
    }
}
```

## RebootInstance

<p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.RebootInstance(ctx, operations.RebootInstanceRequest{
        RebootInstanceRequest: shared.RebootInstanceRequest{
            InstanceName: "earum",
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.RebootInstanceXAmzTargetEnumLightsail20161128RebootInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RebootInstanceResult != nil {
        // handle response
    }
}
```

## RebootRelationalDatabase

<p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.RebootRelationalDatabase(ctx, operations.RebootRelationalDatabaseRequest{
        RebootRelationalDatabaseRequest: shared.RebootRelationalDatabaseRequest{
            RelationalDatabaseName: "nobis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.RebootRelationalDatabaseXAmzTargetEnumLightsail20161128RebootRelationalDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RebootRelationalDatabaseResult != nil {
        // handle response
    }
}
```

## RegisterContainerImage

<p>Registers a container image to your Amazon Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>

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
    res, err := s.SDK.RegisterContainerImage(ctx, operations.RegisterContainerImageRequest{
        RegisterContainerImageRequest: shared.RegisterContainerImageRequest{
            Digest: "libero",
            Label: "excepturi",
            ServiceName: "occaecati",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.RegisterContainerImageXAmzTargetEnumLightsail20161128RegisterContainerImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterContainerImageResult != nil {
        // handle response
    }
}
```

## ReleaseStaticIP

Deletes a specific static IP from your account.

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
    res, err := s.SDK.ReleaseStaticIP(ctx, operations.ReleaseStaticIPRequest{
        ReleaseStaticIPRequest: shared.ReleaseStaticIPRequest{
            StaticIPName: "hic",
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.ReleaseStaticIPXAmzTargetEnumLightsail20161128ReleaseStaticIP,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseStaticIPResult != nil {
        // handle response
    }
}
```

## ResetDistributionCache

<p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After resetting the cache, the next time a content request is made, your distribution pulls, serves, and caches it from the origin.</p>

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
    res, err := s.SDK.ResetDistributionCache(ctx, operations.ResetDistributionCacheRequest{
        ResetDistributionCacheRequest: shared.ResetDistributionCacheRequest{
            DistributionName: sdk.String("architecto"),
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("doloremque"),
        XAmzTarget: operations.ResetDistributionCacheXAmzTargetEnumLightsail20161128ResetDistributionCache,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResetDistributionCacheResult != nil {
        // handle response
    }
}
```

## SendContactMethodVerification

<p>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>

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
    res, err := s.SDK.SendContactMethodVerification(ctx, operations.SendContactMethodVerificationRequest{
        SendContactMethodVerificationRequest: shared.SendContactMethodVerificationRequest{
            Protocol: shared.ContactMethodVerificationProtocolEnumEmail,
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.SendContactMethodVerificationXAmzTargetEnumLightsail20161128SendContactMethodVerification,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendContactMethodVerificationResult != nil {
        // handle response
    }
}
```

## SetIPAddressType

<p>Sets the IP address type for an Amazon Lightsail resource.</p> <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the specified resource. Alternately, you can use this action to disable dual-stack, and enable IPv4 only.</p>

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
    res, err := s.SDK.SetIPAddressType(ctx, operations.SetIPAddressTypeRequest{
        SetIPAddressTypeRequest: shared.SetIPAddressTypeRequest{
            IPAddressType: shared.IPAddressTypeEnumDualstack,
            ResourceName: "quis",
            ResourceType: shared.ResourceTypeEnumPeeredVpc,
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.SetIPAddressTypeXAmzTargetEnumLightsail20161128SetIPAddressType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetIPAddressTypeResult != nil {
        // handle response
    }
}
```

## SetResourceAccessForBucket

<p>Sets the Amazon Lightsail resources that can access the specified Lightsail bucket.</p> <p>Lightsail buckets currently support setting access for Lightsail instances in the same Amazon Web Services Region.</p>

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
    res, err := s.SDK.SetResourceAccessForBucket(ctx, operations.SetResourceAccessForBucketRequest{
        SetResourceAccessForBucketRequest: shared.SetResourceAccessForBucketRequest{
            Access: shared.ResourceBucketAccessEnumAllow,
            BucketName: "itaque",
            ResourceName: "sed",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.SetResourceAccessForBucketXAmzTargetEnumLightsail20161128SetResourceAccessForBucket,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetResourceAccessForBucketResult != nil {
        // handle response
    }
}
```

## StartGUISession

Initiates a graphical user interface (GUI) session that’s used to access a virtual computer’s operating system and application. The session will be active for 1 hour. Use this action to resume the session after it expires. 

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
    res, err := s.SDK.StartGUISession(ctx, operations.StartGUISessionRequest{
        StartGUISessionRequest: shared.StartGUISessionRequest{
            ResourceName: "amet",
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.StartGUISessionXAmzTargetEnumLightsail20161128StartGuiSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartGUISessionResult != nil {
        // handle response
    }
}
```

## StartInstance

<p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.StartInstance(ctx, operations.StartInstanceRequest{
        StartInstanceRequest: shared.StartInstanceRequest{
            InstanceName: "quaerat",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.StartInstanceXAmzTargetEnumLightsail20161128StartInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartInstanceResult != nil {
        // handle response
    }
}
```

## StartRelationalDatabase

<p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.StartRelationalDatabase(ctx, operations.StartRelationalDatabaseRequest{
        StartRelationalDatabaseRequest: shared.StartRelationalDatabaseRequest{
            RelationalDatabaseName: "facere",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.StartRelationalDatabaseXAmzTargetEnumLightsail20161128StartRelationalDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartRelationalDatabaseResult != nil {
        // handle response
    }
}
```

## StopGUISession

Terminates a web-based NICE DCV session that’s used to access a virtual computer’s operating system or application. The session will close and any unsaved data will be lost.

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
    res, err := s.SDK.StopGUISession(ctx, operations.StopGUISessionRequest{
        StopGUISessionRequest: shared.StopGUISessionRequest{
            ResourceName: "labore",
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.StopGUISessionXAmzTargetEnumLightsail20161128StopGuiSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopGUISessionResult != nil {
        // handle response
    }
}
```

## StopInstance

<p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.StopInstance(ctx, operations.StopInstanceRequest{
        StopInstanceRequest: shared.StopInstanceRequest{
            Force: sdk.Bool(false),
            InstanceName: "rem",
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.StopInstanceXAmzTargetEnumLightsail20161128StopInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopInstanceResult != nil {
        // handle response
    }
}
```

## StopRelationalDatabase

<p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.StopRelationalDatabase(ctx, operations.StopRelationalDatabaseRequest{
        StopRelationalDatabaseRequest: shared.StopRelationalDatabaseRequest{
            RelationalDatabaseName: "error",
            RelationalDatabaseSnapshotName: sdk.String("porro"),
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.StopRelationalDatabaseXAmzTargetEnumLightsail20161128StopRelationalDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopRelationalDatabaseResult != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
            ResourceArn: sdk.String("delectus"),
            ResourceName: "iusto",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("libero"),
                    Value: sdk.String("illo"),
                },
                shared.Tag{
                    Key: sdk.String("ab"),
                    Value: sdk.String("incidunt"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumLightsail20161128TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResult != nil {
        // handle response
    }
}
```

## TestAlarm

<p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>

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
    res, err := s.SDK.TestAlarm(ctx, operations.TestAlarmRequest{
        TestAlarmRequest: shared.TestAlarmRequest{
            AlarmName: "reprehenderit",
            State: shared.AlarmStateEnumAlarm,
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("illo"),
        XAmzTarget: operations.TestAlarmXAmzTargetEnumLightsail20161128TestAlarm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestAlarmResult != nil {
        // handle response
    }
}
```

## UnpeerVpc

Unpeers the Lightsail VPC from the user's default VPC.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UnpeerVpc(ctx, operations.UnpeerVpcRequest{
        RequestBody: map[string]interface{}{
            "assumenda": "aliquam",
            "quisquam": "provident",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.UnpeerVpcXAmzTargetEnumLightsail20161128UnpeerVpc,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnpeerVpcResult != nil {
        // handle response
    }
}
```

## UntagResource

<p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
            ResourceArn: sdk.String("quas"),
            ResourceName: "provident",
            TagKeys: []string{
                "rerum",
                "dignissimos",
                "corporis",
                "vero",
            },
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumLightsail20161128UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResult != nil {
        // handle response
    }
}
```

## UpdateBucket

<p>Updates an existing Amazon Lightsail bucket.</p> <p>Use this action to update the configuration of an existing bucket, such as versioning, public accessibility, and the Amazon Web Services accounts that can access the bucket.</p>

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
    res, err := s.SDK.UpdateBucket(ctx, operations.UpdateBucketRequest{
        UpdateBucketRequest: shared.UpdateBucketRequest{
            AccessLogConfig: &shared.BucketAccessLogConfig{
                Destination: sdk.String("aut"),
                Enabled: false,
                Prefix: sdk.String("voluptatem"),
            },
            AccessRules: &shared.AccessRules{
                AllowPublicOverrides: sdk.Bool(false),
                GetObject: shared.AccessTypeEnumPublic.ToPointer(),
            },
            BucketName: "quae",
            ReadonlyAccessAccounts: []string{
                "illum",
            },
            Versioning: sdk.String("praesentium"),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("doloremque"),
        XAmzTarget: operations.UpdateBucketXAmzTargetEnumLightsail20161128UpdateBucket,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBucketResult != nil {
        // handle response
    }
}
```

## UpdateBucketBundle

<p>Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. You can update a bucket's bundle only one time within a monthly Amazon Web Services billing cycle. To determine if you can update a bucket's bundle, use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html">GetBuckets</a> action. The <code>ableToUpdateBundle</code> parameter in the response will indicate whether you can currently update a bucket's bundle.</p> <p>Update a bucket's bundle if it's consistently going over its storage space or data transfer quota, or if a bucket's usage is consistently in the lower range of its storage space or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might experience, we strongly recommend that you update a bucket's bundle only as a long-term strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle that will provide the bucket with ample storage space and data transfer for a long time to come.</p>

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
    res, err := s.SDK.UpdateBucketBundle(ctx, operations.UpdateBucketBundleRequest{
        UpdateBucketBundleRequest: shared.UpdateBucketBundleRequest{
            BucketName: "earum",
            BundleID: "iusto",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.UpdateBucketBundleXAmzTargetEnumLightsail20161128UpdateBucketBundle,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBucketBundleResult != nil {
        // handle response
    }
}
```

## UpdateContainerService

Updates the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names.

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
    res, err := s.SDK.UpdateContainerService(ctx, operations.UpdateContainerServiceRequest{
        UpdateContainerServiceRequest: shared.UpdateContainerServiceRequest{
            IsDisabled: sdk.Bool(false),
            Power: shared.ContainerServicePowerNameEnumSmall.ToPointer(),
            PrivateRegistryAccess: &shared.PrivateRegistryAccessRequest{
                EcrImagePullerRole: &shared.ContainerServiceECRImagePullerRoleRequest{
                    IsActive: sdk.Bool(false),
                },
            },
            PublicDomainNames: map[string][]string{
                "itaque": []string{
                    "corrupti",
                    "aperiam",
                    "sint",
                },
                "accusamus": []string{
                    "totam",
                },
            },
            Scale: sdk.Int64(115861),
            ServiceName: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.UpdateContainerServiceXAmzTargetEnumLightsail20161128UpdateContainerService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContainerServiceResult != nil {
        // handle response
    }
}
```

## UpdateDistribution

<p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Use this action to update the configuration of your existing distribution.</p>

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
    res, err := s.SDK.UpdateDistribution(ctx, operations.UpdateDistributionRequest{
        UpdateDistributionRequest: shared.UpdateDistributionRequest{
            CacheBehaviorSettings: &shared.CacheSettings{
                AllowedHTTPMethods: sdk.String("beatae"),
                CachedHTTPMethods: sdk.String("at"),
                DefaultTTL: sdk.Int64(287544),
                ForwardedCookies: &shared.CookieObject{
                    CookiesAllowList: []string{
                        "esse",
                        "voluptatem",
                        "perferendis",
                        "rerum",
                    },
                    Option: shared.ForwardValuesEnumAllowList.ToPointer(),
                },
                ForwardedHeaders: &shared.HeaderObject{
                    HeadersAllowList: []shared.HeaderEnumEnum{
                        shared.HeaderEnumEnumCloudFrontIsDesktopViewer,
                    },
                    Option: shared.ForwardValuesEnumAll.ToPointer(),
                },
                ForwardedQueryStrings: &shared.QueryStringObject{
                    Option: sdk.Bool(false),
                    QueryStringsAllowList: []string{
                        "porro",
                    },
                },
                MaximumTTL: sdk.Int64(588639),
                MinimumTTL: sdk.Int64(231382),
            },
            CacheBehaviors: []shared.CacheBehaviorPerPath{
                shared.CacheBehaviorPerPath{
                    Behavior: shared.BehaviorEnumEnumDontCache.ToPointer(),
                    Path: sdk.String("consectetur"),
                },
                shared.CacheBehaviorPerPath{
                    Behavior: shared.BehaviorEnumEnumCache.ToPointer(),
                    Path: sdk.String("natus"),
                },
                shared.CacheBehaviorPerPath{
                    Behavior: shared.BehaviorEnumEnumCache.ToPointer(),
                    Path: sdk.String("officia"),
                },
                shared.CacheBehaviorPerPath{
                    Behavior: shared.BehaviorEnumEnumDontCache.ToPointer(),
                    Path: sdk.String("tenetur"),
                },
            },
            DefaultCacheBehavior: &shared.CacheBehavior{
                Behavior: shared.BehaviorEnumEnumDontCache.ToPointer(),
            },
            DistributionName: "quo",
            IsEnabled: sdk.Bool(false),
            Origin: &shared.InputOrigin{
                Name: sdk.String("Gilberto Osinski"),
                ProtocolPolicy: shared.OriginProtocolPolicyEnumEnumHTTPOnly.ToPointer(),
                RegionName: shared.RegionNameEnumUsWest2.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.UpdateDistributionXAmzTargetEnumLightsail20161128UpdateDistribution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDistributionResult != nil {
        // handle response
    }
}
```

## UpdateDistributionBundle

<p>Updates the bundle of your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p> <p>Update your distribution's bundle if your distribution is going over its monthly network transfer quota and is incurring an overage fee.</p> <p>You can update your distribution's bundle only one time within your monthly Amazon Web Services billing cycle. To determine if you can update your distribution's bundle, use the <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the result will indicate whether you can currently update your distribution's bundle.</p>

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
    res, err := s.SDK.UpdateDistributionBundle(ctx, operations.UpdateDistributionBundleRequest{
        UpdateDistributionBundleRequest: shared.UpdateDistributionBundleRequest{
            BundleID: sdk.String("illo"),
            DistributionName: sdk.String("hic"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.UpdateDistributionBundleXAmzTargetEnumLightsail20161128UpdateDistributionBundle,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDistributionBundleResult != nil {
        // handle response
    }
}
```

## UpdateDomainEntry

<p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.UpdateDomainEntry(ctx, operations.UpdateDomainEntryRequest{
        UpdateDomainEntryRequest: shared.UpdateDomainEntryRequest{
            DomainEntry: shared.DomainEntry{
                ID: sdk.String("4e472e80-2857-4a5b-8046-3a7d575f1400"),
                IsAlias: sdk.Bool(false),
                Name: sdk.String("Tyrone Jerde"),
                Options: map[string]string{
                    "voluptate": "consectetur",
                    "nesciunt": "quaerat",
                    "itaque": "minus",
                    "sunt": "distinctio",
                },
                Target: sdk.String("iusto"),
                Type: sdk.String("quas"),
            },
            DomainName: "et",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.UpdateDomainEntryXAmzTargetEnumLightsail20161128UpdateDomainEntry,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainEntryResult != nil {
        // handle response
    }
}
```

## UpdateInstanceMetadataOptions

Modifies the Amazon Lightsail instance metadata parameters on a running or stopped instance. When you modify the parameters on a running instance, the <code>GetInstance</code> or <code>GetInstances</code> API operation initially responds with a state of <code>pending</code>. After the parameter modifications are successfully applied, the state changes to <code>applied</code> in subsequent <code>GetInstance</code> or <code>GetInstances</code> API calls. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-instance-metadata-service">Use IMDSv2 with an Amazon Lightsail instance</a> in the <i>Amazon Lightsail Developer Guide</i>.

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
    res, err := s.SDK.UpdateInstanceMetadataOptions(ctx, operations.UpdateInstanceMetadataOptionsRequest{
        UpdateInstanceMetadataOptionsRequest: shared.UpdateInstanceMetadataOptionsRequest{
            HTTPEndpoint: shared.HTTPEndpointEnumEnabled.ToPointer(),
            HTTPProtocolIpv6: shared.HTTPProtocolIpv6EnumEnabled.ToPointer(),
            HTTPPutResponseHopLimit: sdk.Int64(832239),
            HTTPTokens: shared.HTTPTokensEnumOptional.ToPointer(),
            InstanceName: "quae",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.UpdateInstanceMetadataOptionsXAmzTargetEnumLightsail20161128UpdateInstanceMetadataOptions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInstanceMetadataOptionsResult != nil {
        // handle response
    }
}
```

## UpdateLoadBalancerAttribute

<p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.UpdateLoadBalancerAttribute(ctx, operations.UpdateLoadBalancerAttributeRequest{
        UpdateLoadBalancerAttributeRequest: shared.UpdateLoadBalancerAttributeRequest{
            AttributeName: shared.LoadBalancerAttributeNameEnumHealthCheckPath,
            AttributeValue: "alias",
            LoadBalancerName: "eveniet",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.UpdateLoadBalancerAttributeXAmzTargetEnumLightsail20161128UpdateLoadBalancerAttribute,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLoadBalancerAttributeResult != nil {
        // handle response
    }
}
```

## UpdateRelationalDatabase

<p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.UpdateRelationalDatabase(ctx, operations.UpdateRelationalDatabaseRequest{
        UpdateRelationalDatabaseRequest: shared.UpdateRelationalDatabaseRequest{
            ApplyImmediately: sdk.Bool(false),
            CaCertificateIdentifier: sdk.String("explicabo"),
            DisableBackupRetention: sdk.Bool(false),
            EnableBackupRetention: sdk.Bool(false),
            MasterUserPassword: sdk.String("beatae"),
            PreferredBackupWindow: sdk.String("aliquid"),
            PreferredMaintenanceWindow: sdk.String("modi"),
            PubliclyAccessible: sdk.Bool(false),
            RelationalDatabaseName: "optio",
            RotateMasterUserPassword: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.UpdateRelationalDatabaseXAmzTargetEnumLightsail20161128UpdateRelationalDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRelationalDatabaseResult != nil {
        // handle response
    }
}
```

## UpdateRelationalDatabaseParameters

<p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>

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
    res, err := s.SDK.UpdateRelationalDatabaseParameters(ctx, operations.UpdateRelationalDatabaseParametersRequest{
        UpdateRelationalDatabaseParametersRequest: shared.UpdateRelationalDatabaseParametersRequest{
            Parameters: []shared.RelationalDatabaseParameter{
                shared.RelationalDatabaseParameter{
                    AllowedValues: sdk.String("impedit"),
                    ApplyMethod: sdk.String("ducimus"),
                    ApplyType: sdk.String("odit"),
                    DataType: sdk.String("velit"),
                    Description: sdk.String("reiciendis"),
                    IsModifiable: sdk.Bool(false),
                    ParameterName: sdk.String("repellat"),
                    ParameterValue: sdk.String("nulla"),
                },
                shared.RelationalDatabaseParameter{
                    AllowedValues: sdk.String("laborum"),
                    ApplyMethod: sdk.String("natus"),
                    ApplyType: sdk.String("accusamus"),
                    DataType: sdk.String("doloremque"),
                    Description: sdk.String("nisi"),
                    IsModifiable: sdk.Bool(false),
                    ParameterName: sdk.String("rerum"),
                    ParameterValue: sdk.String("recusandae"),
                },
            },
            RelationalDatabaseName: "voluptates",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.UpdateRelationalDatabaseParametersXAmzTargetEnumLightsail20161128UpdateRelationalDatabaseParameters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRelationalDatabaseParametersResult != nil {
        // handle response
    }
}
```
