# SDK

## Overview

<fullname>Amazon Redshift</fullname> <p> <b>Overview</b> </p> <p>This is an interface reference for Amazon Redshift. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift clusters. Note that Amazon Redshift is asynchronous, which means that some interfaces may require techniques, such as polling or asynchronous callback handlers, to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a change is applied immediately, on the next instance reboot, or during the next maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the Amazon Redshift Management Interfaces</a>.</p> <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data warehouse: provisioning capacity, monitoring and backing up the cluster, and applying patches and upgrades to the Amazon Redshift engine. You can focus on using your data to acquire new insights for your business and customers.</p> <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p> <p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design, build, query, and maintain the databases that make up your data warehouse. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/redshift/>
### Available Operations

* [GETAcceptReservedNodeExchange](#getacceptreservednodeexchange) - Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs. 
* [GETAddPartner](#getaddpartner) - Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.
* [GETAssociateDataShareConsumer](#getassociatedatashareconsumer) - From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.
* [GETAuthorizeClusterSecurityGroupIngress](#getauthorizeclustersecuritygroupingress) - <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETAuthorizeDataShare](#getauthorizedatashare) - From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.
* [GETAuthorizeEndpointAccess](#getauthorizeendpointaccess) - Grants access to a cluster.
* [GETAuthorizeSnapshotAccess](#getauthorizesnapshotaccess) - <p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETBatchModifyClusterSnapshots](#getbatchmodifyclustersnapshots) - Modifies the settings for a set of cluster snapshots.
* [GETCancelResize](#getcancelresize) - Cancels a resize operation for a cluster.
* [GETCopyClusterSnapshot](#getcopyclustersnapshot) - <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETCreateAuthenticationProfile](#getcreateauthenticationprofile) - Creates an authentication profile with the specified parameters.
* [GETCreateEndpointAccess](#getcreateendpointaccess) - Creates a Redshift-managed VPC endpoint.
* [GETDeauthorizeDataShare](#getdeauthorizedatashare) - From a datashare producer account, removes authorization from the specified datashare. 
* [GETDeleteAuthenticationProfile](#getdeleteauthenticationprofile) - Deletes an authentication profile.
* [GETDeleteCluster](#getdeletecluster) - <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETDeleteClusterParameterGroup](#getdeleteclusterparametergroup) - <p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>
* [GETDeleteClusterSecurityGroup](#getdeleteclustersecuritygroup) - <p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETDeleteClusterSnapshot](#getdeleteclustersnapshot) - <p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>
* [GETDeleteClusterSubnetGroup](#getdeleteclustersubnetgroup) - Deletes the specified cluster subnet group.
* [GETDeleteEndpointAccess](#getdeleteendpointaccess) - Deletes a Redshift-managed VPC endpoint.
* [GETDeleteEventSubscription](#getdeleteeventsubscription) - Deletes an Amazon Redshift event notification subscription.
* [GETDeleteHsmClientCertificate](#getdeletehsmclientcertificate) - Deletes the specified HSM client certificate.
* [GETDeleteHsmConfiguration](#getdeletehsmconfiguration) - Deletes the specified Amazon Redshift HSM configuration.
* [GETDeletePartner](#getdeletepartner) - Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.
* [GETDeleteScheduledAction](#getdeletescheduledaction) - Deletes a scheduled action. 
* [GETDeleteSnapshotCopyGrant](#getdeletesnapshotcopygrant) - Deletes the specified snapshot copy grant.
* [GETDeleteSnapshotSchedule](#getdeletesnapshotschedule) - Deletes a snapshot schedule.
* [GETDeleteTags](#getdeletetags) - Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.
* [GETDeleteUsageLimit](#getdeleteusagelimit) - Deletes a usage limit from a cluster.
* [GETDescribeAccountAttributes](#getdescribeaccountattributes) - Returns a list of attributes attached to an account
* [GETDescribeAuthenticationProfiles](#getdescribeauthenticationprofiles) - Describes an authentication profile.
* [GETDescribeClusterDbRevisions](#getdescribeclusterdbrevisions) - Returns an array of <code>ClusterDbRevision</code> objects.
* [GETDescribeClusterParameterGroups](#getdescribeclusterparametergroups) - <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [GETDescribeClusterParameters](#getdescribeclusterparameters) - <p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETDescribeClusterSecurityGroups](#getdescribeclustersecuritygroups) - <p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [GETDescribeClusterSubnetGroups](#getdescribeclustersubnetgroups) - <p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [GETDescribeClusterTracks](#getdescribeclustertracks) - Returns a list of all the available maintenance tracks.
* [GETDescribeClusterVersions](#getdescribeclusterversions) - Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
* [GETDescribeClusters](#getdescribeclusters) - <p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>
* [GETDescribeDataShares](#getdescribedatashares) - Shows the status of any inbound or outbound datashares available in the specified account.
* [GETDescribeDataSharesForConsumer](#getdescribedatasharesforconsumer) - Returns a list of datashares where the account identifier being called is a consumer account identifier.
* [GETDescribeDataSharesForProducer](#getdescribedatasharesforproducer) - Returns a list of datashares when the account identifier being called is a producer account identifier.
* [GETDescribeDefaultClusterParameters](#getdescribedefaultclusterparameters) - <p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETDescribeEndpointAccess](#getdescribeendpointaccess) - Describes a Redshift-managed VPC endpoint.
* [GETDescribeEndpointAuthorization](#getdescribeendpointauthorization) - Describes an endpoint authorization.
* [GETDescribeEventCategories](#getdescribeeventcategories) - Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.
* [GETDescribeEventSubscriptions](#getdescribeeventsubscriptions) - <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>
* [GETDescribeEvents](#getdescribeevents) - Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
* [GETDescribeHsmClientCertificates](#getdescribehsmclientcertificates) - <p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>
* [GETDescribeHsmConfigurations](#getdescribehsmconfigurations) - <p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>
* [GETDescribeLoggingStatus](#getdescribeloggingstatus) - Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.
* [GETDescribeOrderableClusterOptions](#getdescribeorderableclusteroptions) - Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
* [GETDescribePartners](#getdescribepartners) - Returns information about the partner integrations defined for a cluster.
* [GETDescribeReservedNodeExchangeStatus](#getdescribereservednodeexchangestatus) - Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.
* [GETDescribeReservedNodeOfferings](#getdescribereservednodeofferings) - <p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETDescribeReservedNodes](#getdescribereservednodes) - Returns the descriptions of the reserved nodes.
* [GETDescribeResize](#getdescriberesize) - <p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>
* [GETDescribeSnapshotCopyGrants](#getdescribesnapshotcopygrants) - <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
* [GETDescribeSnapshotSchedules](#getdescribesnapshotschedules) - Returns a list of snapshot schedules. 
* [GETDescribeStorage](#getdescribestorage) - Returns account level backups storage size and provisional storage.
* [GETDescribeTableRestoreStatus](#getdescribetablerestorestatus) - Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.
* [GETDescribeTags](#getdescribetags) - <p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>
* [GETDescribeUsageLimits](#getdescribeusagelimits) - <p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>
* [GETDisableLogging](#getdisablelogging) - Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
* [GETDisableSnapshotCopy](#getdisablesnapshotcopy) - <p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>
* [GETDisassociateDataShareConsumer](#getdisassociatedatashareconsumer) - From a datashare consumer account, remove association for the specified datashare. 
* [GETEnableLogging](#getenablelogging) - Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
* [GETEnableSnapshotCopy](#getenablesnapshotcopy) - Enables the automatic copy of snapshots from one region to another region for a specified cluster.
* [GETGETClusterCredentials](#getgetclustercredentials) - <p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>
* [GETGETClusterCredentialsWithIAM](#getgetclustercredentialswithiam) - <p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>
* [GETGETReservedNodeExchangeConfigurationOptions](#getgetreservednodeexchangeconfigurationoptions) - Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.
* [GETGETReservedNodeExchangeOfferings](#getgetreservednodeexchangeofferings) - Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.
* [GETModifyAquaConfiguration](#getmodifyaquaconfiguration) - This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). 
* [GETModifyAuthenticationProfile](#getmodifyauthenticationprofile) - Modifies an authentication profile.
* [GETModifyCluster](#getmodifycluster) - <p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETModifyClusterDbRevision](#getmodifyclusterdbrevision) - Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.
* [GETModifyClusterIamRoles](#getmodifyclusteriamroles) - <p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETModifyClusterMaintenance](#getmodifyclustermaintenance) - Modifies the maintenance settings of a cluster.
* [GETModifyClusterSnapshot](#getmodifyclustersnapshot) - <p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
* [GETModifyClusterSnapshotSchedule](#getmodifyclustersnapshotschedule) - Modifies a snapshot schedule for a cluster.
* [GETModifyClusterSubnetGroup](#getmodifyclustersubnetgroup) - Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.
* [GETModifyEndpointAccess](#getmodifyendpointaccess) - Modifies a Redshift-managed VPC endpoint.
* [GETModifyEventSubscription](#getmodifyeventsubscription) - Modifies an existing Amazon Redshift event notification subscription.
* [GETModifySnapshotCopyRetentionPeriod](#getmodifysnapshotcopyretentionperiod) - Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period. 
* [GETModifySnapshotSchedule](#getmodifysnapshotschedule) - Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.
* [GETModifyUsageLimit](#getmodifyusagelimit) - Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.
* [GETPauseCluster](#getpausecluster) - Pauses a cluster.
* [GETPurchaseReservedNodeOffering](#getpurchasereservednodeoffering) - <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETRebootCluster](#getrebootcluster) - Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 
* [GETRejectDataShare](#getrejectdatashare) - From a datashare consumer account, rejects the specified datashare.
* [GETResizeCluster](#getresizecluster) - <p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>
* [GETRestoreFromClusterSnapshot](#getrestorefromclustersnapshot) - <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETRestoreTableFromClusterSnapshot](#getrestoretablefromclustersnapshot) - <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>
* [GETResumeCluster](#getresumecluster) - Resumes a paused cluster.
* [GETRevokeClusterSecurityGroupIngress](#getrevokeclustersecuritygroupingress) - Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 
* [GETRevokeEndpointAccess](#getrevokeendpointaccess) - Revokes access to a cluster.
* [GETRevokeSnapshotAccess](#getrevokesnapshotaccess) - <p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [GETRotateEncryptionKey](#getrotateencryptionkey) - Rotates the encryption keys for a cluster.
* [GETUpdatePartnerStatus](#getupdatepartnerstatus) - Updates the status of a partner integration.
* [POSTAcceptReservedNodeExchange](#postacceptreservednodeexchange) - Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs. 
* [POSTAddPartner](#postaddpartner) - Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.
* [POSTAssociateDataShareConsumer](#postassociatedatashareconsumer) - From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.
* [POSTAuthorizeClusterSecurityGroupIngress](#postauthorizeclustersecuritygroupingress) - <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTAuthorizeDataShare](#postauthorizedatashare) - From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.
* [POSTAuthorizeEndpointAccess](#postauthorizeendpointaccess) - Grants access to a cluster.
* [POSTAuthorizeSnapshotAccess](#postauthorizesnapshotaccess) - <p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTBatchDeleteClusterSnapshots](#postbatchdeleteclustersnapshots) - Deletes a set of cluster snapshots.
* [POSTBatchModifyClusterSnapshots](#postbatchmodifyclustersnapshots) - Modifies the settings for a set of cluster snapshots.
* [POSTCancelResize](#postcancelresize) - Cancels a resize operation for a cluster.
* [POSTCopyClusterSnapshot](#postcopyclustersnapshot) - <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTCreateAuthenticationProfile](#postcreateauthenticationprofile) - Creates an authentication profile with the specified parameters.
* [POSTCreateCluster](#postcreatecluster) - <p>Creates a new cluster with the specified parameters.</p> <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTCreateClusterParameterGroup](#postcreateclusterparametergroup) - <p>Creates an Amazon Redshift parameter group.</p> <p>Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p> <p>Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTCreateClusterSecurityGroup](#postcreateclustersecuritygroup) - <p>Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTCreateClusterSnapshot](#postcreateclustersnapshot) - <p>Creates a manual snapshot of the specified cluster. The cluster must be in the <code>available</code> state. </p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTCreateClusterSubnetGroup](#postcreateclustersubnetgroup) - <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.</p> <p> For information about subnet groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTCreateEndpointAccess](#postcreateendpointaccess) - Creates a Redshift-managed VPC endpoint.
* [POSTCreateEventSubscription](#postcreateeventsubscription) - <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters.</p> <p>If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.</p>
* [POSTCreateHsmClientCertificate](#postcreatehsmclientcertificate) - <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.</p> <p>The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTCreateHsmConfiguration](#postcreatehsmconfiguration) - <p>Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM.</p> <p>In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>
* [POSTCreateScheduledAction](#postcreatescheduledaction) - Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation. 
* [POSTCreateSnapshotCopyGrant](#postcreatesnapshotcopygrant) - <p>Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key from Key Management Service (KMS) to encrypt copied snapshots in a destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
* [POSTCreateSnapshotSchedule](#postcreatesnapshotschedule) - Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule. 
* [POSTCreateTags](#postcreatetags) - <p>Adds tags to a cluster.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail.</p> <p>If you specify a key that already exists for the resource, the value for that key will be updated with the new value.</p>
* [POSTCreateUsageLimit](#postcreateusagelimit) - Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.
* [POSTDeauthorizeDataShare](#postdeauthorizedatashare) - From a datashare producer account, removes authorization from the specified datashare. 
* [POSTDeleteAuthenticationProfile](#postdeleteauthenticationprofile) - Deletes an authentication profile.
* [POSTDeleteCluster](#postdeletecluster) - <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTDeleteClusterParameterGroup](#postdeleteclusterparametergroup) - <p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>
* [POSTDeleteClusterSecurityGroup](#postdeleteclustersecuritygroup) - <p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTDeleteClusterSnapshot](#postdeleteclustersnapshot) - <p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>
* [POSTDeleteClusterSubnetGroup](#postdeleteclustersubnetgroup) - Deletes the specified cluster subnet group.
* [POSTDeleteEndpointAccess](#postdeleteendpointaccess) - Deletes a Redshift-managed VPC endpoint.
* [POSTDeleteEventSubscription](#postdeleteeventsubscription) - Deletes an Amazon Redshift event notification subscription.
* [POSTDeleteHsmClientCertificate](#postdeletehsmclientcertificate) - Deletes the specified HSM client certificate.
* [POSTDeleteHsmConfiguration](#postdeletehsmconfiguration) - Deletes the specified Amazon Redshift HSM configuration.
* [POSTDeletePartner](#postdeletepartner) - Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.
* [POSTDeleteScheduledAction](#postdeletescheduledaction) - Deletes a scheduled action. 
* [POSTDeleteSnapshotCopyGrant](#postdeletesnapshotcopygrant) - Deletes the specified snapshot copy grant.
* [POSTDeleteSnapshotSchedule](#postdeletesnapshotschedule) - Deletes a snapshot schedule.
* [POSTDeleteTags](#postdeletetags) - Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.
* [POSTDeleteUsageLimit](#postdeleteusagelimit) - Deletes a usage limit from a cluster.
* [POSTDescribeAccountAttributes](#postdescribeaccountattributes) - Returns a list of attributes attached to an account
* [POSTDescribeAuthenticationProfiles](#postdescribeauthenticationprofiles) - Describes an authentication profile.
* [POSTDescribeClusterDbRevisions](#postdescribeclusterdbrevisions) - Returns an array of <code>ClusterDbRevision</code> objects.
* [POSTDescribeClusterParameterGroups](#postdescribeclusterparametergroups) - <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [POSTDescribeClusterParameters](#postdescribeclusterparameters) - <p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTDescribeClusterSecurityGroups](#postdescribeclustersecuritygroups) - <p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [POSTDescribeClusterSnapshots](#postdescribeclustersnapshots) - <p>Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by your Amazon Web Services account. No information is returned for snapshots owned by inactive Amazon Web Services accounts.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters.</p> <p>If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.</p>
* [POSTDescribeClusterSubnetGroups](#postdescribeclustersubnetgroups) - <p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [POSTDescribeClusterTracks](#postdescribeclustertracks) - Returns a list of all the available maintenance tracks.
* [POSTDescribeClusterVersions](#postdescribeclusterversions) - Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
* [POSTDescribeClusters](#postdescribeclusters) - <p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>
* [POSTDescribeDataShares](#postdescribedatashares) - Shows the status of any inbound or outbound datashares available in the specified account.
* [POSTDescribeDataSharesForConsumer](#postdescribedatasharesforconsumer) - Returns a list of datashares where the account identifier being called is a consumer account identifier.
* [POSTDescribeDataSharesForProducer](#postdescribedatasharesforproducer) - Returns a list of datashares when the account identifier being called is a producer account identifier.
* [POSTDescribeDefaultClusterParameters](#postdescribedefaultclusterparameters) - <p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTDescribeEndpointAccess](#postdescribeendpointaccess) - Describes a Redshift-managed VPC endpoint.
* [POSTDescribeEndpointAuthorization](#postdescribeendpointauthorization) - Describes an endpoint authorization.
* [POSTDescribeEventCategories](#postdescribeeventcategories) - Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.
* [POSTDescribeEventSubscriptions](#postdescribeeventsubscriptions) - <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>
* [POSTDescribeEvents](#postdescribeevents) - Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
* [POSTDescribeHsmClientCertificates](#postdescribehsmclientcertificates) - <p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>
* [POSTDescribeHsmConfigurations](#postdescribehsmconfigurations) - <p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>
* [POSTDescribeLoggingStatus](#postdescribeloggingstatus) - Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.
* [POSTDescribeNodeConfigurationOptions](#postdescribenodeconfigurationoptions) - Returns properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type.
* [POSTDescribeOrderableClusterOptions](#postdescribeorderableclusteroptions) - Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
* [POSTDescribePartners](#postdescribepartners) - Returns information about the partner integrations defined for a cluster.
* [POSTDescribeReservedNodeExchangeStatus](#postdescribereservednodeexchangestatus) - Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.
* [POSTDescribeReservedNodeOfferings](#postdescribereservednodeofferings) - <p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTDescribeReservedNodes](#postdescribereservednodes) - Returns the descriptions of the reserved nodes.
* [POSTDescribeResize](#postdescriberesize) - <p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>
* [POSTDescribeScheduledActions](#postdescribescheduledactions) - Describes properties of scheduled actions. 
* [POSTDescribeSnapshotCopyGrants](#postdescribesnapshotcopygrants) - <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
* [POSTDescribeSnapshotSchedules](#postdescribesnapshotschedules) - Returns a list of snapshot schedules. 
* [POSTDescribeStorage](#postdescribestorage) - Returns account level backups storage size and provisional storage.
* [POSTDescribeTableRestoreStatus](#postdescribetablerestorestatus) - Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.
* [POSTDescribeTags](#postdescribetags) - <p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>
* [POSTDescribeUsageLimits](#postdescribeusagelimits) - <p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>
* [POSTDisableLogging](#postdisablelogging) - Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
* [POSTDisableSnapshotCopy](#postdisablesnapshotcopy) - <p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>
* [POSTDisassociateDataShareConsumer](#postdisassociatedatashareconsumer) - From a datashare consumer account, remove association for the specified datashare. 
* [POSTEnableLogging](#postenablelogging) - Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
* [POSTEnableSnapshotCopy](#postenablesnapshotcopy) - Enables the automatic copy of snapshots from one region to another region for a specified cluster.
* [POSTGetClusterCredentials](#postgetclustercredentials) - <p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>
* [POSTGetClusterCredentialsWithIAM](#postgetclustercredentialswithiam) - <p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>
* [POSTGetReservedNodeExchangeConfigurationOptions](#postgetreservednodeexchangeconfigurationoptions) - Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.
* [POSTGetReservedNodeExchangeOfferings](#postgetreservednodeexchangeofferings) - Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.
* [POSTModifyAquaConfiguration](#postmodifyaquaconfiguration) - This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). 
* [POSTModifyAuthenticationProfile](#postmodifyauthenticationprofile) - Modifies an authentication profile.
* [POSTModifyCluster](#postmodifycluster) - <p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTModifyClusterDbRevision](#postmodifyclusterdbrevision) - Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.
* [POSTModifyClusterIamRoles](#postmodifyclusteriamroles) - <p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTModifyClusterMaintenance](#postmodifyclustermaintenance) - Modifies the maintenance settings of a cluster.
* [POSTModifyClusterParameterGroup](#postmodifyclusterparametergroup) - <p>Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTModifyClusterSnapshot](#postmodifyclustersnapshot) - <p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
* [POSTModifyClusterSnapshotSchedule](#postmodifyclustersnapshotschedule) - Modifies a snapshot schedule for a cluster.
* [POSTModifyClusterSubnetGroup](#postmodifyclustersubnetgroup) - Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.
* [POSTModifyEndpointAccess](#postmodifyendpointaccess) - Modifies a Redshift-managed VPC endpoint.
* [POSTModifyEventSubscription](#postmodifyeventsubscription) - Modifies an existing Amazon Redshift event notification subscription.
* [POSTModifyScheduledAction](#postmodifyscheduledaction) - Modifies a scheduled action. 
* [POSTModifySnapshotCopyRetentionPeriod](#postmodifysnapshotcopyretentionperiod) - Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period. 
* [POSTModifySnapshotSchedule](#postmodifysnapshotschedule) - Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.
* [POSTModifyUsageLimit](#postmodifyusagelimit) - Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.
* [POSTPauseCluster](#postpausecluster) - Pauses a cluster.
* [POSTPurchaseReservedNodeOffering](#postpurchasereservednodeoffering) - <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTRebootCluster](#postrebootcluster) - Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 
* [POSTRejectDataShare](#postrejectdatashare) - From a datashare consumer account, rejects the specified datashare.
* [POSTResetClusterParameterGroup](#postresetclusterparametergroup) - Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the <i>ResetAllParameters</i> parameter. For parameter changes to take effect you must reboot any associated clusters. 
* [POSTResizeCluster](#postresizecluster) - <p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>
* [POSTRestoreFromClusterSnapshot](#postrestorefromclustersnapshot) - <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTRestoreTableFromClusterSnapshot](#postrestoretablefromclustersnapshot) - <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>
* [POSTResumeCluster](#postresumecluster) - Resumes a paused cluster.
* [POSTRevokeClusterSecurityGroupIngress](#postrevokeclustersecuritygroupingress) - Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 
* [POSTRevokeEndpointAccess](#postrevokeendpointaccess) - Revokes access to a cluster.
* [POSTRevokeSnapshotAccess](#postrevokesnapshotaccess) - <p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [POSTRotateEncryptionKey](#postrotateencryptionkey) - Rotates the encryption keys for a cluster.
* [POSTUpdatePartnerStatus](#postupdatepartnerstatus) - Updates the status of a partner integration.

## GETAcceptReservedNodeExchange

Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs. 

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
    res, err := s.SDK.GETAcceptReservedNodeExchange(ctx, operations.GETAcceptReservedNodeExchangeRequest{
        Action: operations.GETAcceptReservedNodeExchangeActionEnumAcceptReservedNodeExchange,
        ReservedNodeID: "error",
        TargetReservedNodeOfferingID: "deserunt",
        Version: operations.GETAcceptReservedNodeExchangeVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAddPartner

Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.

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
    res, err := s.SDK.GETAddPartner(ctx, operations.GETAddPartnerRequest{
        AccountID: "suscipit",
        Action: operations.GETAddPartnerActionEnumAddPartner,
        ClusterIdentifier: "molestiae",
        DatabaseName: "minus",
        PartnerName: "placeat",
        Version: operations.GETAddPartnerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAssociateDataShareConsumer

From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.

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
    res, err := s.SDK.GETAssociateDataShareConsumer(ctx, operations.GETAssociateDataShareConsumerRequest{
        Action: operations.GETAssociateDataShareConsumerActionEnumAssociateDataShareConsumer,
        AssociateEntireAccount: sdk.Bool(false),
        ConsumerArn: sdk.String("quis"),
        ConsumerRegion: sdk.String("veritatis"),
        DataShareArn: "deserunt",
        Version: operations.GETAssociateDataShareConsumerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAuthorizeClusterSecurityGroupIngress

<p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETAuthorizeClusterSecurityGroupIngress(ctx, operations.GETAuthorizeClusterSecurityGroupIngressRequest{
        Action: operations.GETAuthorizeClusterSecurityGroupIngressActionEnumAuthorizeClusterSecurityGroupIngress,
        Cidrip: sdk.String("at"),
        ClusterSecurityGroupName: "maiores",
        Ec2SecurityGroupName: sdk.String("molestiae"),
        Ec2SecurityGroupOwnerID: sdk.String("quod"),
        Version: operations.GETAuthorizeClusterSecurityGroupIngressVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAuthorizeDataShare

From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.

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
    res, err := s.SDK.GETAuthorizeDataShare(ctx, operations.GETAuthorizeDataShareRequest{
        Action: operations.GETAuthorizeDataShareActionEnumAuthorizeDataShare,
        ConsumerIdentifier: "officia",
        DataShareArn: "occaecati",
        Version: operations.GETAuthorizeDataShareVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAuthorizeEndpointAccess

Grants access to a cluster.

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
    res, err := s.SDK.GETAuthorizeEndpointAccess(ctx, operations.GETAuthorizeEndpointAccessRequest{
        Account: "molestiae",
        Action: operations.GETAuthorizeEndpointAccessActionEnumAuthorizeEndpointAccess,
        ClusterIdentifier: sdk.String("modi"),
        Version: operations.GETAuthorizeEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        VpcIds: []string{
            "impedit",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAuthorizeSnapshotAccess

<p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETAuthorizeSnapshotAccess(ctx, operations.GETAuthorizeSnapshotAccessRequest{
        AccountWithRestoreAccess: "natus",
        Action: operations.GETAuthorizeSnapshotAccessActionEnumAuthorizeSnapshotAccess,
        SnapshotArn: sdk.String("sed"),
        SnapshotClusterIdentifier: sdk.String("iste"),
        SnapshotIdentifier: sdk.String("dolor"),
        Version: operations.GETAuthorizeSnapshotAccessVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETBatchModifyClusterSnapshots

Modifies the settings for a set of cluster snapshots.

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
    res, err := s.SDK.GETBatchModifyClusterSnapshots(ctx, operations.GETBatchModifyClusterSnapshotsRequest{
        Action: operations.GETBatchModifyClusterSnapshotsActionEnumBatchModifyClusterSnapshots,
        Force: sdk.Bool(false),
        ManualSnapshotRetentionPeriod: sdk.Int64(613064),
        SnapshotIdentifierList: []string{
            "saepe",
            "quidem",
        },
        Version: operations.GETBatchModifyClusterSnapshotsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCancelResize

Cancels a resize operation for a cluster.

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
    res, err := s.SDK.GETCancelResize(ctx, operations.GETCancelResizeRequest{
        Action: operations.GETCancelResizeActionEnumCancelResize,
        ClusterIdentifier: "dolorem",
        Version: operations.GETCancelResizeVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCopyClusterSnapshot

<p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETCopyClusterSnapshot(ctx, operations.GETCopyClusterSnapshotRequest{
        Action: operations.GETCopyClusterSnapshotActionEnumCopyClusterSnapshot,
        ManualSnapshotRetentionPeriod: sdk.Int64(570197),
        SourceSnapshotClusterIdentifier: sdk.String("accusantium"),
        SourceSnapshotIdentifier: "iure",
        TargetSnapshotIdentifier: "culpa",
        Version: operations.GETCopyClusterSnapshotVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateAuthenticationProfile

Creates an authentication profile with the specified parameters.

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
    res, err := s.SDK.GETCreateAuthenticationProfile(ctx, operations.GETCreateAuthenticationProfileRequest{
        Action: operations.GETCreateAuthenticationProfileActionEnumCreateAuthenticationProfile,
        AuthenticationProfileContent: "repellat",
        AuthenticationProfileName: "mollitia",
        Version: operations.GETCreateAuthenticationProfileVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateEndpointAccess

Creates a Redshift-managed VPC endpoint.

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
    res, err := s.SDK.GETCreateEndpointAccess(ctx, operations.GETCreateEndpointAccessRequest{
        Action: operations.GETCreateEndpointAccessActionEnumCreateEndpointAccess,
        ClusterIdentifier: sdk.String("quia"),
        EndpointName: "quis",
        ResourceOwner: sdk.String("vitae"),
        SubnetGroupName: "laborum",
        Version: operations.GETCreateEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        VpcSecurityGroupIds: []string{
            "enim",
            "odit",
            "quo",
        },
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeauthorizeDataShare

From a datashare producer account, removes authorization from the specified datashare. 

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
    res, err := s.SDK.GETDeauthorizeDataShare(ctx, operations.GETDeauthorizeDataShareRequest{
        Action: operations.GETDeauthorizeDataShareActionEnumDeauthorizeDataShare,
        ConsumerIdentifier: "error",
        DataShareArn: "temporibus",
        Version: operations.GETDeauthorizeDataShareVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteAuthenticationProfile

Deletes an authentication profile.

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
    res, err := s.SDK.GETDeleteAuthenticationProfile(ctx, operations.GETDeleteAuthenticationProfileRequest{
        Action: operations.GETDeleteAuthenticationProfileActionEnumDeleteAuthenticationProfile,
        AuthenticationProfileName: "voluptatibus",
        Version: operations.GETDeleteAuthenticationProfileVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteCluster

<p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETDeleteCluster(ctx, operations.GETDeleteClusterRequest{
        Action: operations.GETDeleteClusterActionEnumDeleteCluster,
        ClusterIdentifier: "ut",
        FinalClusterSnapshotIdentifier: sdk.String("maiores"),
        FinalClusterSnapshotRetentionPeriod: sdk.Int64(120196),
        SkipFinalClusterSnapshot: sdk.Bool(false),
        Version: operations.GETDeleteClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteClusterParameterGroup

<p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>

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
    res, err := s.SDK.GETDeleteClusterParameterGroup(ctx, operations.GETDeleteClusterParameterGroupRequest{
        Action: operations.GETDeleteClusterParameterGroupActionEnumDeleteClusterParameterGroup,
        ParameterGroupName: "commodi",
        Version: operations.GETDeleteClusterParameterGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteClusterSecurityGroup

<p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETDeleteClusterSecurityGroup(ctx, operations.GETDeleteClusterSecurityGroupRequest{
        Action: operations.GETDeleteClusterSecurityGroupActionEnumDeleteClusterSecurityGroup,
        ClusterSecurityGroupName: "modi",
        Version: operations.GETDeleteClusterSecurityGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteClusterSnapshot

<p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>

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
    res, err := s.SDK.GETDeleteClusterSnapshot(ctx, operations.GETDeleteClusterSnapshotRequest{
        Action: operations.GETDeleteClusterSnapshotActionEnumDeleteClusterSnapshot,
        SnapshotClusterIdentifier: sdk.String("itaque"),
        SnapshotIdentifier: "incidunt",
        Version: operations.GETDeleteClusterSnapshotVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteClusterSubnetGroup

Deletes the specified cluster subnet group.

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
    res, err := s.SDK.GETDeleteClusterSubnetGroup(ctx, operations.GETDeleteClusterSubnetGroupRequest{
        Action: operations.GETDeleteClusterSubnetGroupActionEnumDeleteClusterSubnetGroup,
        ClusterSubnetGroupName: "quibusdam",
        Version: operations.GETDeleteClusterSubnetGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteEndpointAccess

Deletes a Redshift-managed VPC endpoint.

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
    res, err := s.SDK.GETDeleteEndpointAccess(ctx, operations.GETDeleteEndpointAccessRequest{
        Action: operations.GETDeleteEndpointAccessActionEnumDeleteEndpointAccess,
        EndpointName: "magni",
        Version: operations.GETDeleteEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteEventSubscription

Deletes an Amazon Redshift event notification subscription.

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
    res, err := s.SDK.GETDeleteEventSubscription(ctx, operations.GETDeleteEventSubscriptionRequest{
        Action: operations.GETDeleteEventSubscriptionActionEnumDeleteEventSubscription,
        SubscriptionName: "facilis",
        Version: operations.GETDeleteEventSubscriptionVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteHsmClientCertificate

Deletes the specified HSM client certificate.

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
    res, err := s.SDK.GETDeleteHsmClientCertificate(ctx, operations.GETDeleteHsmClientCertificateRequest{
        Action: operations.GETDeleteHsmClientCertificateActionEnumDeleteHsmClientCertificate,
        HsmClientCertificateIdentifier: "aliquid",
        Version: operations.GETDeleteHsmClientCertificateVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteHsmConfiguration

Deletes the specified Amazon Redshift HSM configuration.

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
    res, err := s.SDK.GETDeleteHsmConfiguration(ctx, operations.GETDeleteHsmConfigurationRequest{
        Action: operations.GETDeleteHsmConfigurationActionEnumDeleteHsmConfiguration,
        HsmConfigurationIdentifier: "dolorum",
        Version: operations.GETDeleteHsmConfigurationVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeletePartner

Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.

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
    res, err := s.SDK.GETDeletePartner(ctx, operations.GETDeletePartnerRequest{
        AccountID: "cumque",
        Action: operations.GETDeletePartnerActionEnumDeletePartner,
        ClusterIdentifier: "facere",
        DatabaseName: "ea",
        PartnerName: "aliquid",
        Version: operations.GETDeletePartnerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteScheduledAction

Deletes a scheduled action. 

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
    res, err := s.SDK.GETDeleteScheduledAction(ctx, operations.GETDeleteScheduledActionRequest{
        Action: operations.GETDeleteScheduledActionActionEnumDeleteScheduledAction,
        ScheduledActionName: "quidem",
        Version: operations.GETDeleteScheduledActionVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteSnapshotCopyGrant

Deletes the specified snapshot copy grant.

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
    res, err := s.SDK.GETDeleteSnapshotCopyGrant(ctx, operations.GETDeleteSnapshotCopyGrantRequest{
        Action: operations.GETDeleteSnapshotCopyGrantActionEnumDeleteSnapshotCopyGrant,
        SnapshotCopyGrantName: "deserunt",
        Version: operations.GETDeleteSnapshotCopyGrantVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteSnapshotSchedule

Deletes a snapshot schedule.

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
    res, err := s.SDK.GETDeleteSnapshotSchedule(ctx, operations.GETDeleteSnapshotScheduleRequest{
        Action: operations.GETDeleteSnapshotScheduleActionEnumDeleteSnapshotSchedule,
        ScheduleIdentifier: "magnam",
        Version: operations.GETDeleteSnapshotScheduleVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteTags

Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.

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
    res, err := s.SDK.GETDeleteTags(ctx, operations.GETDeleteTagsRequest{
        Action: operations.GETDeleteTagsActionEnumDeleteTags,
        ResourceName: "eum",
        TagKeys: []string{
            "aspernatur",
            "architecto",
            "magnam",
            "et",
        },
        Version: operations.GETDeleteTagsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteUsageLimit

Deletes a usage limit from a cluster.

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
    res, err := s.SDK.GETDeleteUsageLimit(ctx, operations.GETDeleteUsageLimitRequest{
        Action: operations.GETDeleteUsageLimitActionEnumDeleteUsageLimit,
        UsageLimitID: "reiciendis",
        Version: operations.GETDeleteUsageLimitVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDescribeAccountAttributes

Returns a list of attributes attached to an account

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
    res, err := s.SDK.GETDescribeAccountAttributes(ctx, operations.GETDescribeAccountAttributesRequest{
        Action: operations.GETDescribeAccountAttributesActionEnumDescribeAccountAttributes,
        AttributeNames: []string{
            "iure",
        },
        Version: operations.GETDescribeAccountAttributesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeAuthenticationProfiles

Describes an authentication profile.

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
    res, err := s.SDK.GETDescribeAuthenticationProfiles(ctx, operations.GETDescribeAuthenticationProfilesRequest{
        Action: operations.GETDescribeAuthenticationProfilesActionEnumDescribeAuthenticationProfiles,
        AuthenticationProfileName: sdk.String("architecto"),
        Version: operations.GETDescribeAuthenticationProfilesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeClusterDbRevisions

Returns an array of <code>ClusterDbRevision</code> objects.

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
    res, err := s.SDK.GETDescribeClusterDbRevisions(ctx, operations.GETDescribeClusterDbRevisionsRequest{
        Action: operations.GETDescribeClusterDbRevisionsActionEnumDescribeClusterDbRevisions,
        ClusterIdentifier: sdk.String("sed"),
        Marker: sdk.String("saepe"),
        MaxRecords: sdk.Int64(868126),
        Version: operations.GETDescribeClusterDbRevisionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeClusterParameterGroups

<p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.GETDescribeClusterParameterGroups(ctx, operations.GETDescribeClusterParameterGroupsRequest{
        Action: operations.GETDescribeClusterParameterGroupsActionEnumDescribeClusterParameterGroups,
        Marker: sdk.String("illum"),
        MaxRecords: sdk.Int64(864934),
        ParameterGroupName: sdk.String("maxime"),
        TagKeys: []string{
            "excepturi",
            "odit",
        },
        TagValues: []string{
            "accusantium",
            "ab",
        },
        Version: operations.GETDescribeClusterParameterGroupsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeClusterParameters

<p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETDescribeClusterParameters(ctx, operations.GETDescribeClusterParametersRequest{
        Action: operations.GETDescribeClusterParametersActionEnumDescribeClusterParameters,
        Marker: sdk.String("pariatur"),
        MaxRecords: sdk.Int64(365496),
        ParameterGroupName: "voluptatibus",
        Source: sdk.String("perferendis"),
        Version: operations.GETDescribeClusterParametersVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeClusterSecurityGroups

<p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.GETDescribeClusterSecurityGroups(ctx, operations.GETDescribeClusterSecurityGroupsRequest{
        Action: operations.GETDescribeClusterSecurityGroupsActionEnumDescribeClusterSecurityGroups,
        ClusterSecurityGroupName: sdk.String("nobis"),
        Marker: sdk.String("dolores"),
        MaxRecords: sdk.Int64(339404),
        TagKeys: []string{
            "dignissimos",
            "eaque",
            "quis",
        },
        TagValues: []string{
            "eos",
        },
        Version: operations.GETDescribeClusterSecurityGroupsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("nostrum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeClusterSubnetGroups

<p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.GETDescribeClusterSubnetGroups(ctx, operations.GETDescribeClusterSubnetGroupsRequest{
        Action: operations.GETDescribeClusterSubnetGroupsActionEnumDescribeClusterSubnetGroups,
        ClusterSubnetGroupName: sdk.String("hic"),
        Marker: sdk.String("recusandae"),
        MaxRecords: sdk.Int64(608253),
        TagKeys: []string{
            "perspiciatis",
            "voluptatem",
            "porro",
        },
        TagValues: []string{
            "blanditiis",
        },
        Version: operations.GETDescribeClusterSubnetGroupsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeClusterTracks

Returns a list of all the available maintenance tracks.

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
    res, err := s.SDK.GETDescribeClusterTracks(ctx, operations.GETDescribeClusterTracksRequest{
        Action: operations.GETDescribeClusterTracksActionEnumDescribeClusterTracks,
        MaintenanceTrackName: sdk.String("modi"),
        Marker: sdk.String("iste"),
        MaxRecords: sdk.Int64(679091),
        Version: operations.GETDescribeClusterTracksVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeClusterVersions

Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

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
    res, err := s.SDK.GETDescribeClusterVersions(ctx, operations.GETDescribeClusterVersionsRequest{
        Action: operations.GETDescribeClusterVersionsActionEnumDescribeClusterVersions,
        ClusterParameterGroupFamily: sdk.String("quos"),
        ClusterVersion: sdk.String("aliquid"),
        Marker: sdk.String("dolorem"),
        MaxRecords: sdk.Int64(209843),
        Version: operations.GETDescribeClusterVersionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeClusters

<p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.GETDescribeClusters(ctx, operations.GETDescribeClustersRequest{
        Action: operations.GETDescribeClustersActionEnumDescribeClusters,
        ClusterIdentifier: sdk.String("dignissimos"),
        Marker: sdk.String("reiciendis"),
        MaxRecords: sdk.Int64(227414),
        TagKeys: []string{
            "numquam",
            "veritatis",
            "ipsa",
        },
        TagValues: []string{
            "iure",
        },
        Version: operations.GETDescribeClustersVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDataShares

Shows the status of any inbound or outbound datashares available in the specified account.

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
    res, err := s.SDK.GETDescribeDataShares(ctx, operations.GETDescribeDataSharesRequest{
        Action: operations.GETDescribeDataSharesActionEnumDescribeDataShares,
        DataShareArn: sdk.String("eos"),
        Marker: sdk.String("atque"),
        MaxRecords: sdk.Int64(24678),
        Version: operations.GETDescribeDataSharesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDataSharesForConsumer

Returns a list of datashares where the account identifier being called is a consumer account identifier.

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
    res, err := s.SDK.GETDescribeDataSharesForConsumer(ctx, operations.GETDescribeDataSharesForConsumerRequest{
        Action: operations.GETDescribeDataSharesForConsumerActionEnumDescribeDataSharesForConsumer,
        ConsumerArn: sdk.String("deleniti"),
        Marker: sdk.String("omnis"),
        MaxRecords: sdk.Int64(896672),
        Status: operations.GETDescribeDataSharesForConsumerStatusEnumAvailable.ToPointer(),
        Version: operations.GETDescribeDataSharesForConsumerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDataSharesForProducer

Returns a list of datashares when the account identifier being called is a producer account identifier.

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
    res, err := s.SDK.GETDescribeDataSharesForProducer(ctx, operations.GETDescribeDataSharesForProducerRequest{
        Action: operations.GETDescribeDataSharesForProducerActionEnumDescribeDataSharesForProducer,
        Marker: sdk.String("aspernatur"),
        MaxRecords: sdk.Int64(20651),
        ProducerArn: sdk.String("amet"),
        Status: operations.GETDescribeDataSharesForProducerStatusEnumDeauthorized.ToPointer(),
        Version: operations.GETDescribeDataSharesForProducerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDefaultClusterParameters

<p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETDescribeDefaultClusterParameters(ctx, operations.GETDescribeDefaultClusterParametersRequest{
        Action: operations.GETDescribeDefaultClusterParametersActionEnumDescribeDefaultClusterParameters,
        Marker: sdk.String("repellendus"),
        MaxRecords: sdk.Int64(519711),
        ParameterGroupFamily: "similique",
        Version: operations.GETDescribeDefaultClusterParametersVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("officiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeEndpointAccess

Describes a Redshift-managed VPC endpoint.

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
    res, err := s.SDK.GETDescribeEndpointAccess(ctx, operations.GETDescribeEndpointAccessRequest{
        Action: operations.GETDescribeEndpointAccessActionEnumDescribeEndpointAccess,
        ClusterIdentifier: sdk.String("qui"),
        EndpointName: sdk.String("dolorum"),
        Marker: sdk.String("a"),
        MaxRecords: sdk.Int64(456130),
        ResourceOwner: sdk.String("harum"),
        Version: operations.GETDescribeEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        VpcID: sdk.String("iusto"),
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeEndpointAuthorization

Describes an endpoint authorization.

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
    res, err := s.SDK.GETDescribeEndpointAuthorization(ctx, operations.GETDescribeEndpointAuthorizationRequest{
        Account: sdk.String("enim"),
        Action: operations.GETDescribeEndpointAuthorizationActionEnumDescribeEndpointAuthorization,
        ClusterIdentifier: sdk.String("dolorem"),
        Grantee: sdk.Bool(false),
        Marker: sdk.String("sapiente"),
        MaxRecords: sdk.Int64(518201),
        Version: operations.GETDescribeEndpointAuthorizationVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeEventCategories

Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.

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
    res, err := s.SDK.GETDescribeEventCategories(ctx, operations.GETDescribeEventCategoriesRequest{
        Action: operations.GETDescribeEventCategoriesActionEnumDescribeEventCategories,
        SourceType: sdk.String("voluptas"),
        Version: operations.GETDescribeEventCategoriesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeEventSubscriptions

<p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.GETDescribeEventSubscriptions(ctx, operations.GETDescribeEventSubscriptionsRequest{
        Action: operations.GETDescribeEventSubscriptionsActionEnumDescribeEventSubscriptions,
        Marker: sdk.String("pariatur"),
        MaxRecords: sdk.Int64(747080),
        SubscriptionName: sdk.String("dicta"),
        TagKeys: []string{
            "totam",
            "incidunt",
            "aspernatur",
        },
        TagValues: []string{
            "distinctio",
        },
        Version: operations.GETDescribeEventSubscriptionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeEvents

Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeEvents(ctx, operations.GETDescribeEventsRequest{
        Action: operations.GETDescribeEventsActionEnumDescribeEvents,
        Duration: sdk.Int64(144847),
        EndTime: types.MustTimeFromString("2022-07-06T20:37:36.497Z"),
        Marker: sdk.String("sunt"),
        MaxRecords: sdk.Int64(355613),
        SourceIdentifier: sdk.String("nam"),
        SourceType: operations.GETDescribeEventsSourceTypeEnumScheduledAction.ToPointer(),
        StartTime: types.MustTimeFromString("2022-03-27T15:45:02.604Z"),
        Version: operations.GETDescribeEventsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeHsmClientCertificates

<p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.GETDescribeHsmClientCertificates(ctx, operations.GETDescribeHsmClientCertificatesRequest{
        Action: operations.GETDescribeHsmClientCertificatesActionEnumDescribeHsmClientCertificates,
        HsmClientCertificateIdentifier: sdk.String("quos"),
        Marker: sdk.String("tempore"),
        MaxRecords: sdk.Int64(584476),
        TagKeys: []string{
            "delectus",
        },
        TagValues: []string{
            "dolore",
        },
        Version: operations.GETDescribeHsmClientCertificatesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeHsmConfigurations

<p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.GETDescribeHsmConfigurations(ctx, operations.GETDescribeHsmConfigurationsRequest{
        Action: operations.GETDescribeHsmConfigurationsActionEnumDescribeHsmConfigurations,
        HsmConfigurationIdentifier: sdk.String("itaque"),
        Marker: sdk.String("consequatur"),
        MaxRecords: sdk.Int64(669917),
        TagKeys: []string{
            "porro",
            "doloribus",
            "ut",
            "facilis",
        },
        TagValues: []string{
            "qui",
            "quae",
            "laudantium",
        },
        Version: operations.GETDescribeHsmConfigurationsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeLoggingStatus

Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.

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
    res, err := s.SDK.GETDescribeLoggingStatus(ctx, operations.GETDescribeLoggingStatusRequest{
        Action: operations.GETDescribeLoggingStatusActionEnumDescribeLoggingStatus,
        ClusterIdentifier: "ipsum",
        Version: operations.GETDescribeLoggingStatusVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeOrderableClusterOptions

Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

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
    res, err := s.SDK.GETDescribeOrderableClusterOptions(ctx, operations.GETDescribeOrderableClusterOptionsRequest{
        Action: operations.GETDescribeOrderableClusterOptionsActionEnumDescribeOrderableClusterOptions,
        ClusterVersion: sdk.String("distinctio"),
        Marker: sdk.String("quod"),
        MaxRecords: sdk.Int64(486160),
        NodeType: sdk.String("similique"),
        Version: operations.GETDescribeOrderableClusterOptionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribePartners

Returns information about the partner integrations defined for a cluster.

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
    res, err := s.SDK.GETDescribePartners(ctx, operations.GETDescribePartnersRequest{
        AccountID: "natus",
        Action: operations.GETDescribePartnersActionEnumDescribePartners,
        ClusterIdentifier: "impedit",
        DatabaseName: sdk.String("aut"),
        PartnerName: sdk.String("voluptatibus"),
        Version: operations.GETDescribePartnersVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeReservedNodeExchangeStatus

Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.

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
    res, err := s.SDK.GETDescribeReservedNodeExchangeStatus(ctx, operations.GETDescribeReservedNodeExchangeStatusRequest{
        Action: operations.GETDescribeReservedNodeExchangeStatusActionEnumDescribeReservedNodeExchangeStatus,
        Marker: sdk.String("eligendi"),
        MaxRecords: sdk.Int64(497391),
        ReservedNodeExchangeRequestID: sdk.String("alias"),
        ReservedNodeID: sdk.String("officia"),
        Version: operations.GETDescribeReservedNodeExchangeStatusVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeReservedNodeOfferings

<p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETDescribeReservedNodeOfferings(ctx, operations.GETDescribeReservedNodeOfferingsRequest{
        Action: operations.GETDescribeReservedNodeOfferingsActionEnumDescribeReservedNodeOfferings,
        Marker: sdk.String("ratione"),
        MaxRecords: sdk.Int64(401132),
        ReservedNodeOfferingID: sdk.String("laudantium"),
        Version: operations.GETDescribeReservedNodeOfferingsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeReservedNodes

Returns the descriptions of the reserved nodes.

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
    res, err := s.SDK.GETDescribeReservedNodes(ctx, operations.GETDescribeReservedNodesRequest{
        Action: operations.GETDescribeReservedNodesActionEnumDescribeReservedNodes,
        Marker: sdk.String("voluptatibus"),
        MaxRecords: sdk.Int64(343605),
        ReservedNodeID: sdk.String("sapiente"),
        Version: operations.GETDescribeReservedNodesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeResize

<p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>

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
    res, err := s.SDK.GETDescribeResize(ctx, operations.GETDescribeResizeRequest{
        Action: operations.GETDescribeResizeActionEnumDescribeResize,
        ClusterIdentifier: "inventore",
        Version: operations.GETDescribeResizeVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeSnapshotCopyGrants

<p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>

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
    res, err := s.SDK.GETDescribeSnapshotCopyGrants(ctx, operations.GETDescribeSnapshotCopyGrantsRequest{
        Action: operations.GETDescribeSnapshotCopyGrantsActionEnumDescribeSnapshotCopyGrants,
        Marker: sdk.String("eaque"),
        MaxRecords: sdk.Int64(952871),
        SnapshotCopyGrantName: sdk.String("libero"),
        TagKeys: []string{
            "aut",
        },
        TagValues: []string{
            "impedit",
            "aliquam",
            "fugit",
        },
        Version: operations.GETDescribeSnapshotCopyGrantsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeSnapshotSchedules

Returns a list of snapshot schedules. 

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
    res, err := s.SDK.GETDescribeSnapshotSchedules(ctx, operations.GETDescribeSnapshotSchedulesRequest{
        Action: operations.GETDescribeSnapshotSchedulesActionEnumDescribeSnapshotSchedules,
        ClusterIdentifier: sdk.String("velit"),
        Marker: sdk.String("eum"),
        MaxRecords: sdk.Int64(420539),
        ScheduleIdentifier: sdk.String("nobis"),
        TagKeys: []string{
            "assumenda",
            "nulla",
            "voluptas",
        },
        TagValues: []string{
            "quasi",
            "tempora",
            "numquam",
        },
        Version: operations.GETDescribeSnapshotSchedulesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeStorage

Returns account level backups storage size and provisional storage.

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
    res, err := s.SDK.GETDescribeStorage(ctx, operations.GETDescribeStorageRequest{
        Action: operations.GETDescribeStorageActionEnumDescribeStorage,
        Version: operations.GETDescribeStorageVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeTableRestoreStatus

Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.

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
    res, err := s.SDK.GETDescribeTableRestoreStatus(ctx, operations.GETDescribeTableRestoreStatusRequest{
        Action: operations.GETDescribeTableRestoreStatusActionEnumDescribeTableRestoreStatus,
        ClusterIdentifier: sdk.String("ut"),
        Marker: sdk.String("eum"),
        MaxRecords: sdk.Int64(379927),
        TableRestoreRequestID: sdk.String("assumenda"),
        Version: operations.GETDescribeTableRestoreStatusVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeTags

<p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.GETDescribeTags(ctx, operations.GETDescribeTagsRequest{
        Action: operations.GETDescribeTagsActionEnumDescribeTags,
        Marker: sdk.String("neque"),
        MaxRecords: sdk.Int64(778696),
        ResourceName: sdk.String("illum"),
        ResourceType: sdk.String("quo"),
        TagKeys: []string{
            "eius",
            "eos",
            "voluptas",
        },
        TagValues: []string{
            "cupiditate",
        },
        Version: operations.GETDescribeTagsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeUsageLimits

<p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>

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
    res, err := s.SDK.GETDescribeUsageLimits(ctx, operations.GETDescribeUsageLimitsRequest{
        Action: operations.GETDescribeUsageLimitsActionEnumDescribeUsageLimits,
        ClusterIdentifier: sdk.String("esse"),
        FeatureType: operations.GETDescribeUsageLimitsFeatureTypeEnumCrossRegionDatasharing.ToPointer(),
        Marker: sdk.String("aperiam"),
        MaxRecords: sdk.Int64(715179),
        TagKeys: []string{
            "dignissimos",
            "inventore",
            "nihil",
            "totam",
        },
        TagValues: []string{
            "aliquam",
            "odio",
            "occaecati",
            "commodi",
        },
        UsageLimitID: sdk.String("sapiente"),
        Version: operations.GETDescribeUsageLimitsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDisableLogging

Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

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
    res, err := s.SDK.GETDisableLogging(ctx, operations.GETDisableLoggingRequest{
        Action: operations.GETDisableLoggingActionEnumDisableLogging,
        ClusterIdentifier: "praesentium",
        Version: operations.GETDisableLoggingVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDisableSnapshotCopy

<p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>

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
    res, err := s.SDK.GETDisableSnapshotCopy(ctx, operations.GETDisableSnapshotCopyRequest{
        Action: operations.GETDisableSnapshotCopyActionEnumDisableSnapshotCopy,
        ClusterIdentifier: "explicabo",
        Version: operations.GETDisableSnapshotCopyVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDisassociateDataShareConsumer

From a datashare consumer account, remove association for the specified datashare. 

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
    res, err := s.SDK.GETDisassociateDataShareConsumer(ctx, operations.GETDisassociateDataShareConsumerRequest{
        Action: operations.GETDisassociateDataShareConsumerActionEnumDisassociateDataShareConsumer,
        ConsumerArn: sdk.String("saepe"),
        ConsumerRegion: sdk.String("occaecati"),
        DataShareArn: "atque",
        DisassociateEntireAccount: sdk.Bool(false),
        Version: operations.GETDisassociateDataShareConsumerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETEnableLogging

Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

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
    res, err := s.SDK.GETEnableLogging(ctx, operations.GETEnableLoggingRequest{
        Action: operations.GETEnableLoggingActionEnumEnableLogging,
        BucketName: sdk.String("nam"),
        ClusterIdentifier: "vero",
        LogDestinationType: operations.GETEnableLoggingLogDestinationTypeEnumS3.ToPointer(),
        LogExports: []string{
            "saepe",
        },
        S3KeyPrefix: sdk.String("vel"),
        Version: operations.GETEnableLoggingVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETEnableSnapshotCopy

Enables the automatic copy of snapshots from one region to another region for a specified cluster.

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
    res, err := s.SDK.GETEnableSnapshotCopy(ctx, operations.GETEnableSnapshotCopyRequest{
        Action: operations.GETEnableSnapshotCopyActionEnumEnableSnapshotCopy,
        ClusterIdentifier: "sit",
        DestinationRegion: "culpa",
        ManualSnapshotRetentionPeriod: sdk.Int64(731398),
        RetentionPeriod: sdk.Int64(240020),
        SnapshotCopyGrantName: sdk.String("cumque"),
        Version: operations.GETEnableSnapshotCopyVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETClusterCredentials

<p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>

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
    res, err := s.SDK.GETGETClusterCredentials(ctx, operations.GETGETClusterCredentialsRequest{
        Action: operations.GETGETClusterCredentialsActionEnumGetClusterCredentials,
        AutoCreate: sdk.Bool(false),
        ClusterIdentifier: "blanditiis",
        DbGroups: []string{
            "a",
            "nulla",
            "quas",
        },
        DbName: sdk.String("esse"),
        DbUser: "quasi",
        DurationSeconds: sdk.Int64(951875),
        Version: operations.GETGETClusterCredentialsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETClusterCredentialsWithIAM

<p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>

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
    res, err := s.SDK.GETGETClusterCredentialsWithIAM(ctx, operations.GETGETClusterCredentialsWithIAMRequest{
        Action: operations.GETGETClusterCredentialsWithIAMActionEnumGetClusterCredentialsWithIam,
        ClusterIdentifier: "facere",
        DbName: sdk.String("veritatis"),
        DurationSeconds: sdk.Int64(159414),
        Version: operations.GETGETClusterCredentialsWithIAMVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETReservedNodeExchangeConfigurationOptions

Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.

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
    res, err := s.SDK.GETGETReservedNodeExchangeConfigurationOptions(ctx, operations.GETGETReservedNodeExchangeConfigurationOptionsRequest{
        Action: operations.GETGETReservedNodeExchangeConfigurationOptionsActionEnumGetReservedNodeExchangeConfigurationOptions,
        ActionType: operations.GETGETReservedNodeExchangeConfigurationOptionsActionTypeEnumRestoreCluster,
        ClusterIdentifier: sdk.String("in"),
        Marker: sdk.String("eius"),
        MaxRecords: sdk.Int64(727697),
        SnapshotIdentifier: sdk.String("illum"),
        Version: operations.GETGETReservedNodeExchangeConfigurationOptionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETReservedNodeExchangeOfferings

Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.

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
    res, err := s.SDK.GETGETReservedNodeExchangeOfferings(ctx, operations.GETGETReservedNodeExchangeOfferingsRequest{
        Action: operations.GETGETReservedNodeExchangeOfferingsActionEnumGetReservedNodeExchangeOfferings,
        Marker: sdk.String("ullam"),
        MaxRecords: sdk.Int64(391774),
        ReservedNodeID: "aut",
        Version: operations.GETGETReservedNodeExchangeOfferingsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyAquaConfiguration

This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). 

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
    res, err := s.SDK.GETModifyAquaConfiguration(ctx, operations.GETModifyAquaConfigurationRequest{
        Action: operations.GETModifyAquaConfigurationActionEnumModifyAquaConfiguration,
        AquaConfigurationStatus: operations.GETModifyAquaConfigurationAquaConfigurationStatusEnumEnabled.ToPointer(),
        ClusterIdentifier: "omnis",
        Version: operations.GETModifyAquaConfigurationVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyAuthenticationProfile

Modifies an authentication profile.

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
    res, err := s.SDK.GETModifyAuthenticationProfile(ctx, operations.GETModifyAuthenticationProfileRequest{
        Action: operations.GETModifyAuthenticationProfileActionEnumModifyAuthenticationProfile,
        AuthenticationProfileContent: "veritatis",
        AuthenticationProfileName: "consectetur",
        Version: operations.GETModifyAuthenticationProfileVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyCluster

<p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETModifyCluster(ctx, operations.GETModifyClusterRequest{
        Action: operations.GETModifyClusterActionEnumModifyCluster,
        AllowVersionUpgrade: sdk.Bool(false),
        AutomatedSnapshotRetentionPeriod: sdk.Int64(428796),
        AvailabilityZone: sdk.String("mollitia"),
        AvailabilityZoneRelocation: sdk.Bool(false),
        ClusterIdentifier: "ab",
        ClusterParameterGroupName: sdk.String("corrupti"),
        ClusterSecurityGroups: []string{
            "voluptatem",
            "dolor",
        },
        ClusterType: sdk.String("occaecati"),
        ClusterVersion: sdk.String("numquam"),
        ElasticIP: sdk.String("impedit"),
        Encrypted: sdk.Bool(false),
        EnhancedVpcRouting: sdk.Bool(false),
        HsmClientCertificateIdentifier: sdk.String("explicabo"),
        HsmConfigurationIdentifier: sdk.String("voluptas"),
        KmsKeyID: sdk.String("aut"),
        MaintenanceTrackName: sdk.String("dignissimos"),
        ManualSnapshotRetentionPeriod: sdk.Int64(115484),
        MasterUserPassword: sdk.String("maiores"),
        NewClusterIdentifier: sdk.String("natus"),
        NodeType: sdk.String("velit"),
        NumberOfNodes: sdk.Int64(974257),
        Port: sdk.Int64(374323),
        PreferredMaintenanceWindow: sdk.String("asperiores"),
        PubliclyAccessible: sdk.Bool(false),
        Version: operations.GETModifyClusterVersionEnumTwoThousandAndTwelve1201,
        VpcSecurityGroupIds: []string{
            "ea",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyClusterDbRevision

Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.

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
    res, err := s.SDK.GETModifyClusterDbRevision(ctx, operations.GETModifyClusterDbRevisionRequest{
        Action: operations.GETModifyClusterDbRevisionActionEnumModifyClusterDbRevision,
        ClusterIdentifier: "asperiores",
        RevisionTarget: "nemo",
        Version: operations.GETModifyClusterDbRevisionVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyClusterIamRoles

<p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETModifyClusterIamRoles(ctx, operations.GETModifyClusterIamRolesRequest{
        Action: operations.GETModifyClusterIamRolesActionEnumModifyClusterIamRoles,
        AddIamRoles: []string{
            "id",
            "suscipit",
            "velit",
        },
        ClusterIdentifier: "culpa",
        DefaultIamRoleArn: sdk.String("est"),
        RemoveIamRoles: []string{
            "totam",
            "fugiat",
            "vel",
            "ducimus",
        },
        Version: operations.GETModifyClusterIamRolesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyClusterMaintenance

Modifies the maintenance settings of a cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyClusterMaintenance(ctx, operations.GETModifyClusterMaintenanceRequest{
        Action: operations.GETModifyClusterMaintenanceActionEnumModifyClusterMaintenance,
        ClusterIdentifier: "in",
        DeferMaintenance: sdk.Bool(false),
        DeferMaintenanceDuration: sdk.Int64(360545),
        DeferMaintenanceEndTime: types.MustTimeFromString("2020-07-07T14:53:46.338Z"),
        DeferMaintenanceIdentifier: sdk.String("nemo"),
        DeferMaintenanceStartTime: types.MustTimeFromString("2021-10-22T16:49:10.196Z"),
        Version: operations.GETModifyClusterMaintenanceVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyClusterSnapshot

<p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>

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
    res, err := s.SDK.GETModifyClusterSnapshot(ctx, operations.GETModifyClusterSnapshotRequest{
        Action: operations.GETModifyClusterSnapshotActionEnumModifyClusterSnapshot,
        Force: sdk.Bool(false),
        ManualSnapshotRetentionPeriod: sdk.Int64(257233),
        SnapshotIdentifier: "doloribus",
        Version: operations.GETModifyClusterSnapshotVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("sunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyClusterSnapshotSchedule

Modifies a snapshot schedule for a cluster.

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
    res, err := s.SDK.GETModifyClusterSnapshotSchedule(ctx, operations.GETModifyClusterSnapshotScheduleRequest{
        Action: operations.GETModifyClusterSnapshotScheduleActionEnumModifyClusterSnapshotSchedule,
        ClusterIdentifier: "asperiores",
        DisassociateSchedule: sdk.Bool(false),
        ScheduleIdentifier: sdk.String("adipisci"),
        Version: operations.GETModifyClusterSnapshotScheduleVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETModifyClusterSubnetGroup

Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.

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
    res, err := s.SDK.GETModifyClusterSubnetGroup(ctx, operations.GETModifyClusterSubnetGroupRequest{
        Action: operations.GETModifyClusterSubnetGroupActionEnumModifyClusterSubnetGroup,
        ClusterSubnetGroupName: "corporis",
        Description: sdk.String("harum"),
        SubnetIds: []string{
            "ipsa",
            "voluptates",
        },
        Version: operations.GETModifyClusterSubnetGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyEndpointAccess

Modifies a Redshift-managed VPC endpoint.

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
    res, err := s.SDK.GETModifyEndpointAccess(ctx, operations.GETModifyEndpointAccessRequest{
        Action: operations.GETModifyEndpointAccessActionEnumModifyEndpointAccess,
        EndpointName: "voluptas",
        Version: operations.GETModifyEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        VpcSecurityGroupIds: []string{
            "minima",
            "nobis",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyEventSubscription

Modifies an existing Amazon Redshift event notification subscription.

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
    res, err := s.SDK.GETModifyEventSubscription(ctx, operations.GETModifyEventSubscriptionRequest{
        Action: operations.GETModifyEventSubscriptionActionEnumModifyEventSubscription,
        Enabled: sdk.Bool(false),
        EventCategories: []string{
            "officiis",
            "temporibus",
        },
        Severity: sdk.String("ullam"),
        SnsTopicArn: sdk.String("adipisci"),
        SourceIds: []string{
            "blanditiis",
            "quas",
            "hic",
        },
        SourceType: sdk.String("nesciunt"),
        SubscriptionName: "culpa",
        Version: operations.GETModifyEventSubscriptionVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifySnapshotCopyRetentionPeriod

Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period. 

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
    res, err := s.SDK.GETModifySnapshotCopyRetentionPeriod(ctx, operations.GETModifySnapshotCopyRetentionPeriodRequest{
        Action: operations.GETModifySnapshotCopyRetentionPeriodActionEnumModifySnapshotCopyRetentionPeriod,
        ClusterIdentifier: "rerum",
        Manual: sdk.Bool(false),
        RetentionPeriod: 148829,
        Version: operations.GETModifySnapshotCopyRetentionPeriodVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifySnapshotSchedule

Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.

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
    res, err := s.SDK.GETModifySnapshotSchedule(ctx, operations.GETModifySnapshotScheduleRequest{
        Action: operations.GETModifySnapshotScheduleActionEnumModifySnapshotSchedule,
        ScheduleDefinitions: []string{
            "dolore",
            "laborum",
            "sed",
        },
        ScheduleIdentifier: "in",
        Version: operations.GETModifySnapshotScheduleVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyUsageLimit

Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.

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
    res, err := s.SDK.GETModifyUsageLimit(ctx, operations.GETModifyUsageLimitRequest{
        Action: operations.GETModifyUsageLimitActionEnumModifyUsageLimit,
        Amount: sdk.Int64(960257),
        BreachAction: operations.GETModifyUsageLimitBreachActionEnumDisable.ToPointer(),
        UsageLimitID: "illo",
        Version: operations.GETModifyUsageLimitVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETPauseCluster

Pauses a cluster.

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
    res, err := s.SDK.GETPauseCluster(ctx, operations.GETPauseClusterRequest{
        Action: operations.GETPauseClusterActionEnumPauseCluster,
        ClusterIdentifier: "eius",
        Version: operations.GETPauseClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETPurchaseReservedNodeOffering

<p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETPurchaseReservedNodeOffering(ctx, operations.GETPurchaseReservedNodeOfferingRequest{
        Action: operations.GETPurchaseReservedNodeOfferingActionEnumPurchaseReservedNodeOffering,
        NodeCount: sdk.Int64(273009),
        ReservedNodeOfferingID: "voluptate",
        Version: operations.GETPurchaseReservedNodeOfferingVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRebootCluster

Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

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
    res, err := s.SDK.GETRebootCluster(ctx, operations.GETRebootClusterRequest{
        Action: operations.GETRebootClusterActionEnumRebootCluster,
        ClusterIdentifier: "quaerat",
        Version: operations.GETRebootClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRejectDataShare

From a datashare consumer account, rejects the specified datashare.

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
    res, err := s.SDK.GETRejectDataShare(ctx, operations.GETRejectDataShareRequest{
        Action: operations.GETRejectDataShareActionEnumRejectDataShare,
        DataShareArn: "veniam",
        Version: operations.GETRejectDataShareVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETResizeCluster

<p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>

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
    res, err := s.SDK.GETResizeCluster(ctx, operations.GETResizeClusterRequest{
        Action: operations.GETResizeClusterActionEnumResizeCluster,
        Classic: sdk.Bool(false),
        ClusterIdentifier: "numquam",
        ClusterType: sdk.String("veniam"),
        NodeType: sdk.String("in"),
        NumberOfNodes: sdk.Int64(889234),
        ReservedNodeID: sdk.String("beatae"),
        TargetReservedNodeOfferingID: sdk.String("laudantium"),
        Version: operations.GETResizeClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRestoreFromClusterSnapshot

<p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETRestoreFromClusterSnapshot(ctx, operations.GETRestoreFromClusterSnapshotRequest{
        Action: operations.GETRestoreFromClusterSnapshotActionEnumRestoreFromClusterSnapshot,
        AdditionalInfo: sdk.String("hic"),
        AllowVersionUpgrade: sdk.Bool(false),
        AquaConfigurationStatus: operations.GETRestoreFromClusterSnapshotAquaConfigurationStatusEnumAuto.ToPointer(),
        AutomatedSnapshotRetentionPeriod: sdk.Int64(892863),
        AvailabilityZone: sdk.String("neque"),
        AvailabilityZoneRelocation: sdk.Bool(false),
        ClusterIdentifier: "dolorum",
        ClusterParameterGroupName: sdk.String("nostrum"),
        ClusterSecurityGroups: []string{
            "dolorum",
            "corrupti",
            "accusamus",
        },
        ClusterSubnetGroupName: sdk.String("tempora"),
        DefaultIamRoleArn: sdk.String("atque"),
        ElasticIP: sdk.String("fugit"),
        Encrypted: sdk.Bool(false),
        EnhancedVpcRouting: sdk.Bool(false),
        HsmClientCertificateIdentifier: sdk.String("ut"),
        HsmConfigurationIdentifier: sdk.String("fugiat"),
        IamRoles: []string{
            "culpa",
        },
        KmsKeyID: sdk.String("expedita"),
        MaintenanceTrackName: sdk.String("magnam"),
        ManualSnapshotRetentionPeriod: sdk.Int64(7884),
        NodeType: sdk.String("esse"),
        NumberOfNodes: sdk.Int64(372679),
        OwnerAccount: sdk.String("sit"),
        Port: sdk.Int64(530537),
        PreferredMaintenanceWindow: sdk.String("quas"),
        PubliclyAccessible: sdk.Bool(false),
        ReservedNodeID: sdk.String("repudiandae"),
        SnapshotArn: sdk.String("corporis"),
        SnapshotClusterIdentifier: sdk.String("et"),
        SnapshotIdentifier: sdk.String("blanditiis"),
        SnapshotScheduleIdentifier: sdk.String("ex"),
        TargetReservedNodeOfferingID: sdk.String("sed"),
        Version: operations.GETRestoreFromClusterSnapshotVersionEnumTwoThousandAndTwelve1201,
        VpcSecurityGroupIds: []string{
            "vel",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRestoreTableFromClusterSnapshot

<p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>

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
    res, err := s.SDK.GETRestoreTableFromClusterSnapshot(ctx, operations.GETRestoreTableFromClusterSnapshotRequest{
        Action: operations.GETRestoreTableFromClusterSnapshotActionEnumRestoreTableFromClusterSnapshot,
        ClusterIdentifier: "harum",
        EnableCaseSensitiveIdentifier: sdk.Bool(false),
        NewTableName: "dicta",
        SnapshotIdentifier: "architecto",
        SourceDatabaseName: "occaecati",
        SourceSchemaName: sdk.String("labore"),
        SourceTableName: "quidem",
        TargetDatabaseName: sdk.String("atque"),
        TargetSchemaName: sdk.String("laborum"),
        Version: operations.GETRestoreTableFromClusterSnapshotVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETResumeCluster

Resumes a paused cluster.

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
    res, err := s.SDK.GETResumeCluster(ctx, operations.GETResumeClusterRequest{
        Action: operations.GETResumeClusterActionEnumResumeCluster,
        ClusterIdentifier: "unde",
        Version: operations.GETResumeClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRevokeClusterSecurityGroupIngress

Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

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
    res, err := s.SDK.GETRevokeClusterSecurityGroupIngress(ctx, operations.GETRevokeClusterSecurityGroupIngressRequest{
        Action: operations.GETRevokeClusterSecurityGroupIngressActionEnumRevokeClusterSecurityGroupIngress,
        Cidrip: sdk.String("quidem"),
        ClusterSecurityGroupName: "reprehenderit",
        Ec2SecurityGroupName: sdk.String("facere"),
        Ec2SecurityGroupOwnerID: sdk.String("fuga"),
        Version: operations.GETRevokeClusterSecurityGroupIngressVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRevokeEndpointAccess

Revokes access to a cluster.

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
    res, err := s.SDK.GETRevokeEndpointAccess(ctx, operations.GETRevokeEndpointAccessRequest{
        Account: sdk.String("atque"),
        Action: operations.GETRevokeEndpointAccessActionEnumRevokeEndpointAccess,
        ClusterIdentifier: sdk.String("reprehenderit"),
        Force: sdk.Bool(false),
        Version: operations.GETRevokeEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        VpcIds: []string{
            "totam",
            "suscipit",
            "quidem",
            "maxime",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRevokeSnapshotAccess

<p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.GETRevokeSnapshotAccess(ctx, operations.GETRevokeSnapshotAccessRequest{
        AccountWithRestoreAccess: "officiis",
        Action: operations.GETRevokeSnapshotAccessActionEnumRevokeSnapshotAccess,
        SnapshotArn: sdk.String("officiis"),
        SnapshotClusterIdentifier: sdk.String("accusamus"),
        SnapshotIdentifier: sdk.String("natus"),
        Version: operations.GETRevokeSnapshotAccessVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRotateEncryptionKey

Rotates the encryption keys for a cluster.

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
    res, err := s.SDK.GETRotateEncryptionKey(ctx, operations.GETRotateEncryptionKeyRequest{
        Action: operations.GETRotateEncryptionKeyActionEnumRotateEncryptionKey,
        ClusterIdentifier: "blanditiis",
        Version: operations.GETRotateEncryptionKeyVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUpdatePartnerStatus

Updates the status of a partner integration.

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
    res, err := s.SDK.GETUpdatePartnerStatus(ctx, operations.GETUpdatePartnerStatusRequest{
        AccountID: "repellendus",
        Action: operations.GETUpdatePartnerStatusActionEnumUpdatePartnerStatus,
        ClusterIdentifier: "labore",
        DatabaseName: "reiciendis",
        PartnerName: "doloremque",
        Status: operations.GETUpdatePartnerStatusStatusEnumConnectionFailure,
        StatusMessage: sdk.String("dicta"),
        Version: operations.GETUpdatePartnerStatusVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAcceptReservedNodeExchange

Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs. 

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
    res, err := s.SDK.POSTAcceptReservedNodeExchange(ctx, operations.POSTAcceptReservedNodeExchangeRequest{
        Action: operations.POSTAcceptReservedNodeExchangeActionEnumAcceptReservedNodeExchange,
        RequestBody: []byte("molestias"),
        Version: operations.POSTAcceptReservedNodeExchangeVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAddPartner

Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.

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
    res, err := s.SDK.POSTAddPartner(ctx, operations.POSTAddPartnerRequest{
        Action: operations.POSTAddPartnerActionEnumAddPartner,
        RequestBody: []byte("adipisci"),
        Version: operations.POSTAddPartnerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAssociateDataShareConsumer

From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.

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
    res, err := s.SDK.POSTAssociateDataShareConsumer(ctx, operations.POSTAssociateDataShareConsumerRequest{
        Action: operations.POSTAssociateDataShareConsumerActionEnumAssociateDataShareConsumer,
        RequestBody: []byte("error"),
        Version: operations.POSTAssociateDataShareConsumerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("illo"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("doloremque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAuthorizeClusterSecurityGroupIngress

<p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTAuthorizeClusterSecurityGroupIngress(ctx, operations.POSTAuthorizeClusterSecurityGroupIngressRequest{
        Action: operations.POSTAuthorizeClusterSecurityGroupIngressActionEnumAuthorizeClusterSecurityGroupIngress,
        RequestBody: []byte("iure"),
        Version: operations.POSTAuthorizeClusterSecurityGroupIngressVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAuthorizeDataShare

From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.

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
    res, err := s.SDK.POSTAuthorizeDataShare(ctx, operations.POSTAuthorizeDataShareRequest{
        Action: operations.POSTAuthorizeDataShareActionEnumAuthorizeDataShare,
        RequestBody: []byte("iure"),
        Version: operations.POSTAuthorizeDataShareVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAuthorizeEndpointAccess

Grants access to a cluster.

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
    res, err := s.SDK.POSTAuthorizeEndpointAccess(ctx, operations.POSTAuthorizeEndpointAccessRequest{
        Action: operations.POSTAuthorizeEndpointAccessActionEnumAuthorizeEndpointAccess,
        RequestBody: []byte("ad"),
        Version: operations.POSTAuthorizeEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAuthorizeSnapshotAccess

<p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTAuthorizeSnapshotAccess(ctx, operations.POSTAuthorizeSnapshotAccessRequest{
        Action: operations.POSTAuthorizeSnapshotAccessActionEnumAuthorizeSnapshotAccess,
        RequestBody: []byte("alias"),
        Version: operations.POSTAuthorizeSnapshotAccessVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTBatchDeleteClusterSnapshots

Deletes a set of cluster snapshots.

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
    res, err := s.SDK.POSTBatchDeleteClusterSnapshots(ctx, operations.POSTBatchDeleteClusterSnapshotsRequest{
        Action: operations.POSTBatchDeleteClusterSnapshotsActionEnumBatchDeleteClusterSnapshots,
        RequestBody: []byte("nesciunt"),
        Version: operations.POSTBatchDeleteClusterSnapshotsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTBatchModifyClusterSnapshots

Modifies the settings for a set of cluster snapshots.

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
    res, err := s.SDK.POSTBatchModifyClusterSnapshots(ctx, operations.POSTBatchModifyClusterSnapshotsRequest{
        Action: operations.POSTBatchModifyClusterSnapshotsActionEnumBatchModifyClusterSnapshots,
        RequestBody: []byte("culpa"),
        Version: operations.POSTBatchModifyClusterSnapshotsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCancelResize

Cancels a resize operation for a cluster.

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
    res, err := s.SDK.POSTCancelResize(ctx, operations.POSTCancelResizeRequest{
        Action: operations.POSTCancelResizeActionEnumCancelResize,
        RequestBody: []byte("provident"),
        Version: operations.POSTCancelResizeVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCopyClusterSnapshot

<p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTCopyClusterSnapshot(ctx, operations.POSTCopyClusterSnapshotRequest{
        Action: operations.POSTCopyClusterSnapshotActionEnumCopyClusterSnapshot,
        RequestBody: []byte("animi"),
        Version: operations.POSTCopyClusterSnapshotVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateAuthenticationProfile

Creates an authentication profile with the specified parameters.

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
    res, err := s.SDK.POSTCreateAuthenticationProfile(ctx, operations.POSTCreateAuthenticationProfileRequest{
        Action: operations.POSTCreateAuthenticationProfileActionEnumCreateAuthenticationProfile,
        RequestBody: []byte("accusantium"),
        Version: operations.POSTCreateAuthenticationProfileVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateCluster

<p>Creates a new cluster with the specified parameters.</p> <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateCluster(ctx, operations.POSTCreateClusterRequest{
        Action: operations.POSTCreateClusterActionEnumCreateCluster,
        RequestBody: []byte("laborum"),
        Version: operations.POSTCreateClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateClusterParameterGroup

<p>Creates an Amazon Redshift parameter group.</p> <p>Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p> <p>Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateClusterParameterGroup(ctx, operations.POSTCreateClusterParameterGroupRequest{
        Action: operations.POSTCreateClusterParameterGroupActionEnumCreateClusterParameterGroup,
        RequestBody: []byte("vitae"),
        Version: operations.POSTCreateClusterParameterGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateClusterSecurityGroup

<p>Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateClusterSecurityGroup(ctx, operations.POSTCreateClusterSecurityGroupRequest{
        Action: operations.POSTCreateClusterSecurityGroupActionEnumCreateClusterSecurityGroup,
        RequestBody: []byte("perferendis"),
        Version: operations.POSTCreateClusterSecurityGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateClusterSnapshot

<p>Creates a manual snapshot of the specified cluster. The cluster must be in the <code>available</code> state. </p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateClusterSnapshot(ctx, operations.POSTCreateClusterSnapshotRequest{
        Action: operations.POSTCreateClusterSnapshotActionEnumCreateClusterSnapshot,
        RequestBody: []byte("eos"),
        Version: operations.POSTCreateClusterSnapshotVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateClusterSubnetGroup

<p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.</p> <p> For information about subnet groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateClusterSubnetGroup(ctx, operations.POSTCreateClusterSubnetGroupRequest{
        Action: operations.POSTCreateClusterSubnetGroupActionEnumCreateClusterSubnetGroup,
        RequestBody: []byte("earum"),
        Version: operations.POSTCreateClusterSubnetGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateEndpointAccess

Creates a Redshift-managed VPC endpoint.

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
    res, err := s.SDK.POSTCreateEndpointAccess(ctx, operations.POSTCreateEndpointAccessRequest{
        Action: operations.POSTCreateEndpointAccessActionEnumCreateEndpointAccess,
        RequestBody: []byte("debitis"),
        Version: operations.POSTCreateEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateEventSubscription

<p>Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters.</p> <p>If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.</p>

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
    res, err := s.SDK.POSTCreateEventSubscription(ctx, operations.POSTCreateEventSubscriptionRequest{
        Action: operations.POSTCreateEventSubscriptionActionEnumCreateEventSubscription,
        RequestBody: []byte("ratione"),
        Version: operations.POSTCreateEventSubscriptionVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateHsmClientCertificate

<p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.</p> <p>The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateHsmClientCertificate(ctx, operations.POSTCreateHsmClientCertificateRequest{
        Action: operations.POSTCreateHsmClientCertificateActionEnumCreateHsmClientCertificate,
        RequestBody: []byte("natus"),
        Version: operations.POSTCreateHsmClientCertificateVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateHsmConfiguration

<p>Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM.</p> <p>In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>

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
    res, err := s.SDK.POSTCreateHsmConfiguration(ctx, operations.POSTCreateHsmConfigurationRequest{
        Action: operations.POSTCreateHsmConfigurationActionEnumCreateHsmConfiguration,
        RequestBody: []byte("necessitatibus"),
        Version: operations.POSTCreateHsmConfigurationVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateScheduledAction

Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation. 

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
    res, err := s.SDK.POSTCreateScheduledAction(ctx, operations.POSTCreateScheduledActionRequest{
        Action: operations.POSTCreateScheduledActionActionEnumCreateScheduledAction,
        RequestBody: []byte("praesentium"),
        Version: operations.POSTCreateScheduledActionVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateSnapshotCopyGrant

<p>Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key from Key Management Service (KMS) to encrypt copied snapshots in a destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>

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
    res, err := s.SDK.POSTCreateSnapshotCopyGrant(ctx, operations.POSTCreateSnapshotCopyGrantRequest{
        Action: operations.POSTCreateSnapshotCopyGrantActionEnumCreateSnapshotCopyGrant,
        RequestBody: []byte("odio"),
        Version: operations.POSTCreateSnapshotCopyGrantVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateSnapshotSchedule

Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule. 

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
    res, err := s.SDK.POSTCreateSnapshotSchedule(ctx, operations.POSTCreateSnapshotScheduleRequest{
        Action: operations.POSTCreateSnapshotScheduleActionEnumCreateSnapshotSchedule,
        RequestBody: []byte("sunt"),
        Version: operations.POSTCreateSnapshotScheduleVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateTags

<p>Adds tags to a cluster.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail.</p> <p>If you specify a key that already exists for the resource, the value for that key will be updated with the new value.</p>

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
    res, err := s.SDK.POSTCreateTags(ctx, operations.POSTCreateTagsRequest{
        Action: operations.POSTCreateTagsActionEnumCreateTags,
        RequestBody: []byte("perferendis"),
        Version: operations.POSTCreateTagsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTCreateUsageLimit

Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.

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
    res, err := s.SDK.POSTCreateUsageLimit(ctx, operations.POSTCreateUsageLimitRequest{
        Action: operations.POSTCreateUsageLimitActionEnumCreateUsageLimit,
        RequestBody: []byte("voluptates"),
        Version: operations.POSTCreateUsageLimitVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("vitae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeauthorizeDataShare

From a datashare producer account, removes authorization from the specified datashare. 

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
    res, err := s.SDK.POSTDeauthorizeDataShare(ctx, operations.POSTDeauthorizeDataShareRequest{
        Action: operations.POSTDeauthorizeDataShareActionEnumDeauthorizeDataShare,
        RequestBody: []byte("repellendus"),
        Version: operations.POSTDeauthorizeDataShareVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteAuthenticationProfile

Deletes an authentication profile.

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
    res, err := s.SDK.POSTDeleteAuthenticationProfile(ctx, operations.POSTDeleteAuthenticationProfileRequest{
        Action: operations.POSTDeleteAuthenticationProfileActionEnumDeleteAuthenticationProfile,
        RequestBody: []byte("molestias"),
        Version: operations.POSTDeleteAuthenticationProfileVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("rerum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteCluster

<p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTDeleteCluster(ctx, operations.POSTDeleteClusterRequest{
        Action: operations.POSTDeleteClusterActionEnumDeleteCluster,
        RequestBody: []byte("est"),
        Version: operations.POSTDeleteClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteClusterParameterGroup

<p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>

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
    res, err := s.SDK.POSTDeleteClusterParameterGroup(ctx, operations.POSTDeleteClusterParameterGroupRequest{
        Action: operations.POSTDeleteClusterParameterGroupActionEnumDeleteClusterParameterGroup,
        RequestBody: []byte("debitis"),
        Version: operations.POSTDeleteClusterParameterGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteClusterSecurityGroup

<p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTDeleteClusterSecurityGroup(ctx, operations.POSTDeleteClusterSecurityGroupRequest{
        Action: operations.POSTDeleteClusterSecurityGroupActionEnumDeleteClusterSecurityGroup,
        RequestBody: []byte("minus"),
        Version: operations.POSTDeleteClusterSecurityGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteClusterSnapshot

<p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>

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
    res, err := s.SDK.POSTDeleteClusterSnapshot(ctx, operations.POSTDeleteClusterSnapshotRequest{
        Action: operations.POSTDeleteClusterSnapshotActionEnumDeleteClusterSnapshot,
        RequestBody: []byte("impedit"),
        Version: operations.POSTDeleteClusterSnapshotVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("inventore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteClusterSubnetGroup

Deletes the specified cluster subnet group.

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
    res, err := s.SDK.POSTDeleteClusterSubnetGroup(ctx, operations.POSTDeleteClusterSubnetGroupRequest{
        Action: operations.POSTDeleteClusterSubnetGroupActionEnumDeleteClusterSubnetGroup,
        RequestBody: []byte("deleniti"),
        Version: operations.POSTDeleteClusterSubnetGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteEndpointAccess

Deletes a Redshift-managed VPC endpoint.

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
    res, err := s.SDK.POSTDeleteEndpointAccess(ctx, operations.POSTDeleteEndpointAccessRequest{
        Action: operations.POSTDeleteEndpointAccessActionEnumDeleteEndpointAccess,
        RequestBody: []byte("fugit"),
        Version: operations.POSTDeleteEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteEventSubscription

Deletes an Amazon Redshift event notification subscription.

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
    res, err := s.SDK.POSTDeleteEventSubscription(ctx, operations.POSTDeleteEventSubscriptionRequest{
        Action: operations.POSTDeleteEventSubscriptionActionEnumDeleteEventSubscription,
        RequestBody: []byte("ipsa"),
        Version: operations.POSTDeleteEventSubscriptionVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteHsmClientCertificate

Deletes the specified HSM client certificate.

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
    res, err := s.SDK.POSTDeleteHsmClientCertificate(ctx, operations.POSTDeleteHsmClientCertificateRequest{
        Action: operations.POSTDeleteHsmClientCertificateActionEnumDeleteHsmClientCertificate,
        RequestBody: []byte("veniam"),
        Version: operations.POSTDeleteHsmClientCertificateVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteHsmConfiguration

Deletes the specified Amazon Redshift HSM configuration.

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
    res, err := s.SDK.POSTDeleteHsmConfiguration(ctx, operations.POSTDeleteHsmConfigurationRequest{
        Action: operations.POSTDeleteHsmConfigurationActionEnumDeleteHsmConfiguration,
        RequestBody: []byte("ab"),
        Version: operations.POSTDeleteHsmConfigurationVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeletePartner

Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.

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
    res, err := s.SDK.POSTDeletePartner(ctx, operations.POSTDeletePartnerRequest{
        Action: operations.POSTDeletePartnerActionEnumDeletePartner,
        RequestBody: []byte("exercitationem"),
        Version: operations.POSTDeletePartnerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteScheduledAction

Deletes a scheduled action. 

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
    res, err := s.SDK.POSTDeleteScheduledAction(ctx, operations.POSTDeleteScheduledActionRequest{
        Action: operations.POSTDeleteScheduledActionActionEnumDeleteScheduledAction,
        RequestBody: []byte("sequi"),
        Version: operations.POSTDeleteScheduledActionVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteSnapshotCopyGrant

Deletes the specified snapshot copy grant.

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
    res, err := s.SDK.POSTDeleteSnapshotCopyGrant(ctx, operations.POSTDeleteSnapshotCopyGrantRequest{
        Action: operations.POSTDeleteSnapshotCopyGrantActionEnumDeleteSnapshotCopyGrant,
        RequestBody: []byte("officia"),
        Version: operations.POSTDeleteSnapshotCopyGrantVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteSnapshotSchedule

Deletes a snapshot schedule.

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
    res, err := s.SDK.POSTDeleteSnapshotSchedule(ctx, operations.POSTDeleteSnapshotScheduleRequest{
        Action: operations.POSTDeleteSnapshotScheduleActionEnumDeleteSnapshotSchedule,
        RequestBody: []byte("nesciunt"),
        Version: operations.POSTDeleteSnapshotScheduleVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteTags

Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.

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
    res, err := s.SDK.POSTDeleteTags(ctx, operations.POSTDeleteTagsRequest{
        Action: operations.POSTDeleteTagsActionEnumDeleteTags,
        RequestBody: []byte("nisi"),
        Version: operations.POSTDeleteTagsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteUsageLimit

Deletes a usage limit from a cluster.

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
    res, err := s.SDK.POSTDeleteUsageLimit(ctx, operations.POSTDeleteUsageLimitRequest{
        Action: operations.POSTDeleteUsageLimitActionEnumDeleteUsageLimit,
        RequestBody: []byte("omnis"),
        Version: operations.POSTDeleteUsageLimitVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDescribeAccountAttributes

Returns a list of attributes attached to an account

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
    res, err := s.SDK.POSTDescribeAccountAttributes(ctx, operations.POSTDescribeAccountAttributesRequest{
        Action: operations.POSTDescribeAccountAttributesActionEnumDescribeAccountAttributes,
        RequestBody: []byte("voluptatibus"),
        Version: operations.POSTDescribeAccountAttributesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeAuthenticationProfiles

Describes an authentication profile.

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
    res, err := s.SDK.POSTDescribeAuthenticationProfiles(ctx, operations.POSTDescribeAuthenticationProfilesRequest{
        Action: operations.POSTDescribeAuthenticationProfilesActionEnumDescribeAuthenticationProfiles,
        RequestBody: []byte("temporibus"),
        Version: operations.POSTDescribeAuthenticationProfilesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeClusterDbRevisions

Returns an array of <code>ClusterDbRevision</code> objects.

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
    res, err := s.SDK.POSTDescribeClusterDbRevisions(ctx, operations.POSTDescribeClusterDbRevisionsRequest{
        Action: operations.POSTDescribeClusterDbRevisionsActionEnumDescribeClusterDbRevisions,
        Marker: sdk.String("nam"),
        MaxRecords: sdk.String("vero"),
        RequestBody: []byte("voluptatem"),
        Version: operations.POSTDescribeClusterDbRevisionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeClusterParameterGroups

<p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.POSTDescribeClusterParameterGroups(ctx, operations.POSTDescribeClusterParameterGroupsRequest{
        Action: operations.POSTDescribeClusterParameterGroupsActionEnumDescribeClusterParameterGroups,
        Marker: sdk.String("sint"),
        MaxRecords: sdk.String("nulla"),
        RequestBody: []byte("deserunt"),
        Version: operations.POSTDescribeClusterParameterGroupsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeClusterParameters

<p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTDescribeClusterParameters(ctx, operations.POSTDescribeClusterParametersRequest{
        Action: operations.POSTDescribeClusterParametersActionEnumDescribeClusterParameters,
        Marker: sdk.String("impedit"),
        MaxRecords: sdk.String("hic"),
        RequestBody: []byte("necessitatibus"),
        Version: operations.POSTDescribeClusterParametersVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeClusterSecurityGroups

<p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.POSTDescribeClusterSecurityGroups(ctx, operations.POSTDescribeClusterSecurityGroupsRequest{
        Action: operations.POSTDescribeClusterSecurityGroupsActionEnumDescribeClusterSecurityGroups,
        Marker: sdk.String("fuga"),
        MaxRecords: sdk.String("laborum"),
        RequestBody: []byte("consectetur"),
        Version: operations.POSTDescribeClusterSecurityGroupsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeClusterSnapshots

<p>Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by your Amazon Web Services account. No information is returned for snapshots owned by inactive Amazon Web Services accounts.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters.</p> <p>If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.POSTDescribeClusterSnapshots(ctx, operations.POSTDescribeClusterSnapshotsRequest{
        Action: operations.POSTDescribeClusterSnapshotsActionEnumDescribeClusterSnapshots,
        Marker: sdk.String("nam"),
        MaxRecords: sdk.String("dolore"),
        RequestBody: []byte("iusto"),
        Version: operations.POSTDescribeClusterSnapshotsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeClusterSubnetGroups

<p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.POSTDescribeClusterSubnetGroups(ctx, operations.POSTDescribeClusterSubnetGroupsRequest{
        Action: operations.POSTDescribeClusterSubnetGroupsActionEnumDescribeClusterSubnetGroups,
        Marker: sdk.String("iure"),
        MaxRecords: sdk.String("odit"),
        RequestBody: []byte("voluptatibus"),
        Version: operations.POSTDescribeClusterSubnetGroupsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeClusterTracks

Returns a list of all the available maintenance tracks.

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
    res, err := s.SDK.POSTDescribeClusterTracks(ctx, operations.POSTDescribeClusterTracksRequest{
        Action: operations.POSTDescribeClusterTracksActionEnumDescribeClusterTracks,
        Marker: sdk.String("voluptatibus"),
        MaxRecords: sdk.String("quia"),
        RequestBody: []byte("porro"),
        Version: operations.POSTDescribeClusterTracksVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("illo"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeClusterVersions

Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

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
    res, err := s.SDK.POSTDescribeClusterVersions(ctx, operations.POSTDescribeClusterVersionsRequest{
        Action: operations.POSTDescribeClusterVersionsActionEnumDescribeClusterVersions,
        Marker: sdk.String("vero"),
        MaxRecords: sdk.String("excepturi"),
        RequestBody: []byte("eum"),
        Version: operations.POSTDescribeClusterVersionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeClusters

<p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.POSTDescribeClusters(ctx, operations.POSTDescribeClustersRequest{
        Action: operations.POSTDescribeClustersActionEnumDescribeClusters,
        Marker: sdk.String("iste"),
        MaxRecords: sdk.String("itaque"),
        RequestBody: []byte("alias"),
        Version: operations.POSTDescribeClustersVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDataShares

Shows the status of any inbound or outbound datashares available in the specified account.

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
    res, err := s.SDK.POSTDescribeDataShares(ctx, operations.POSTDescribeDataSharesRequest{
        Action: operations.POSTDescribeDataSharesActionEnumDescribeDataShares,
        Marker: sdk.String("sit"),
        MaxRecords: sdk.String("doloremque"),
        RequestBody: []byte("consequatur"),
        Version: operations.POSTDescribeDataSharesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDataSharesForConsumer

Returns a list of datashares where the account identifier being called is a consumer account identifier.

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
    res, err := s.SDK.POSTDescribeDataSharesForConsumer(ctx, operations.POSTDescribeDataSharesForConsumerRequest{
        Action: operations.POSTDescribeDataSharesForConsumerActionEnumDescribeDataSharesForConsumer,
        Marker: sdk.String("perspiciatis"),
        MaxRecords: sdk.String("expedita"),
        RequestBody: []byte("deleniti"),
        Version: operations.POSTDescribeDataSharesForConsumerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDataSharesForProducer

Returns a list of datashares when the account identifier being called is a producer account identifier.

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
    res, err := s.SDK.POSTDescribeDataSharesForProducer(ctx, operations.POSTDescribeDataSharesForProducerRequest{
        Action: operations.POSTDescribeDataSharesForProducerActionEnumDescribeDataSharesForProducer,
        Marker: sdk.String("ipsam"),
        MaxRecords: sdk.String("corporis"),
        RequestBody: []byte("est"),
        Version: operations.POSTDescribeDataSharesForProducerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("vitae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDefaultClusterParameters

<p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTDescribeDefaultClusterParameters(ctx, operations.POSTDescribeDefaultClusterParametersRequest{
        Action: operations.POSTDescribeDefaultClusterParametersActionEnumDescribeDefaultClusterParameters,
        Marker: sdk.String("inventore"),
        MaxRecords: sdk.String("dolorem"),
        RequestBody: []byte("ad"),
        Version: operations.POSTDescribeDefaultClusterParametersVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEndpointAccess

Describes a Redshift-managed VPC endpoint.

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
    res, err := s.SDK.POSTDescribeEndpointAccess(ctx, operations.POSTDescribeEndpointAccessRequest{
        Action: operations.POSTDescribeEndpointAccessActionEnumDescribeEndpointAccess,
        Marker: sdk.String("dolorum"),
        MaxRecords: sdk.String("odio"),
        RequestBody: []byte("fugit"),
        Version: operations.POSTDescribeEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEndpointAuthorization

Describes an endpoint authorization.

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
    res, err := s.SDK.POSTDescribeEndpointAuthorization(ctx, operations.POSTDescribeEndpointAuthorizationRequest{
        Action: operations.POSTDescribeEndpointAuthorizationActionEnumDescribeEndpointAuthorization,
        Marker: sdk.String("exercitationem"),
        MaxRecords: sdk.String("itaque"),
        RequestBody: []byte("et"),
        Version: operations.POSTDescribeEndpointAuthorizationVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEventCategories

Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.

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
    res, err := s.SDK.POSTDescribeEventCategories(ctx, operations.POSTDescribeEventCategoriesRequest{
        Action: operations.POSTDescribeEventCategoriesActionEnumDescribeEventCategories,
        RequestBody: []byte("nostrum"),
        Version: operations.POSTDescribeEventCategoriesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEventSubscriptions

<p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.POSTDescribeEventSubscriptions(ctx, operations.POSTDescribeEventSubscriptionsRequest{
        Action: operations.POSTDescribeEventSubscriptionsActionEnumDescribeEventSubscriptions,
        Marker: sdk.String("quos"),
        MaxRecords: sdk.String("placeat"),
        RequestBody: []byte("sit"),
        Version: operations.POSTDescribeEventSubscriptionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEvents

Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.

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
    res, err := s.SDK.POSTDescribeEvents(ctx, operations.POSTDescribeEventsRequest{
        Action: operations.POSTDescribeEventsActionEnumDescribeEvents,
        Marker: sdk.String("eligendi"),
        MaxRecords: sdk.String("distinctio"),
        RequestBody: []byte("voluptatem"),
        Version: operations.POSTDescribeEventsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeHsmClientCertificates

<p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.POSTDescribeHsmClientCertificates(ctx, operations.POSTDescribeHsmClientCertificatesRequest{
        Action: operations.POSTDescribeHsmClientCertificatesActionEnumDescribeHsmClientCertificates,
        Marker: sdk.String("corrupti"),
        MaxRecords: sdk.String("molestiae"),
        RequestBody: []byte("provident"),
        Version: operations.POSTDescribeHsmClientCertificatesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeHsmConfigurations

<p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.POSTDescribeHsmConfigurations(ctx, operations.POSTDescribeHsmConfigurationsRequest{
        Action: operations.POSTDescribeHsmConfigurationsActionEnumDescribeHsmConfigurations,
        Marker: sdk.String("rerum"),
        MaxRecords: sdk.String("laudantium"),
        RequestBody: []byte("corporis"),
        Version: operations.POSTDescribeHsmConfigurationsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeLoggingStatus

Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.

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
    res, err := s.SDK.POSTDescribeLoggingStatus(ctx, operations.POSTDescribeLoggingStatusRequest{
        Action: operations.POSTDescribeLoggingStatusActionEnumDescribeLoggingStatus,
        RequestBody: []byte("fuga"),
        Version: operations.POSTDescribeLoggingStatusVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeNodeConfigurationOptions

Returns properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type.

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
    res, err := s.SDK.POSTDescribeNodeConfigurationOptions(ctx, operations.POSTDescribeNodeConfigurationOptionsRequest{
        Action: operations.POSTDescribeNodeConfigurationOptionsActionEnumDescribeNodeConfigurationOptions,
        Marker: sdk.String("praesentium"),
        MaxRecords: sdk.String("odit"),
        RequestBody: []byte("explicabo"),
        Version: operations.POSTDescribeNodeConfigurationOptionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeOrderableClusterOptions

Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

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
    res, err := s.SDK.POSTDescribeOrderableClusterOptions(ctx, operations.POSTDescribeOrderableClusterOptionsRequest{
        Action: operations.POSTDescribeOrderableClusterOptionsActionEnumDescribeOrderableClusterOptions,
        Marker: sdk.String("quidem"),
        MaxRecords: sdk.String("quis"),
        RequestBody: []byte("beatae"),
        Version: operations.POSTDescribeOrderableClusterOptionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribePartners

Returns information about the partner integrations defined for a cluster.

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
    res, err := s.SDK.POSTDescribePartners(ctx, operations.POSTDescribePartnersRequest{
        Action: operations.POSTDescribePartnersActionEnumDescribePartners,
        RequestBody: []byte("nesciunt"),
        Version: operations.POSTDescribePartnersVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeReservedNodeExchangeStatus

Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.

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
    res, err := s.SDK.POSTDescribeReservedNodeExchangeStatus(ctx, operations.POSTDescribeReservedNodeExchangeStatusRequest{
        Action: operations.POSTDescribeReservedNodeExchangeStatusActionEnumDescribeReservedNodeExchangeStatus,
        Marker: sdk.String("expedita"),
        MaxRecords: sdk.String("voluptatum"),
        RequestBody: []byte("cupiditate"),
        Version: operations.POSTDescribeReservedNodeExchangeStatusVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeReservedNodeOfferings

<p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTDescribeReservedNodeOfferings(ctx, operations.POSTDescribeReservedNodeOfferingsRequest{
        Action: operations.POSTDescribeReservedNodeOfferingsActionEnumDescribeReservedNodeOfferings,
        Marker: sdk.String("modi"),
        MaxRecords: sdk.String("corporis"),
        RequestBody: []byte("magnam"),
        Version: operations.POSTDescribeReservedNodeOfferingsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeReservedNodes

Returns the descriptions of the reserved nodes.

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
    res, err := s.SDK.POSTDescribeReservedNodes(ctx, operations.POSTDescribeReservedNodesRequest{
        Action: operations.POSTDescribeReservedNodesActionEnumDescribeReservedNodes,
        Marker: sdk.String("totam"),
        MaxRecords: sdk.String("occaecati"),
        RequestBody: []byte("voluptas"),
        Version: operations.POSTDescribeReservedNodesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeResize

<p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>

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
    res, err := s.SDK.POSTDescribeResize(ctx, operations.POSTDescribeResizeRequest{
        Action: operations.POSTDescribeResizeActionEnumDescribeResize,
        RequestBody: []byte("delectus"),
        Version: operations.POSTDescribeResizeVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeScheduledActions

Describes properties of scheduled actions. 

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
    res, err := s.SDK.POSTDescribeScheduledActions(ctx, operations.POSTDescribeScheduledActionsRequest{
        Action: operations.POSTDescribeScheduledActionsActionEnumDescribeScheduledActions,
        Marker: sdk.String("aperiam"),
        MaxRecords: sdk.String("odio"),
        RequestBody: []byte("minima"),
        Version: operations.POSTDescribeScheduledActionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeSnapshotCopyGrants

<p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>

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
    res, err := s.SDK.POSTDescribeSnapshotCopyGrants(ctx, operations.POSTDescribeSnapshotCopyGrantsRequest{
        Action: operations.POSTDescribeSnapshotCopyGrantsActionEnumDescribeSnapshotCopyGrants,
        Marker: sdk.String("voluptate"),
        MaxRecords: sdk.String("pariatur"),
        RequestBody: []byte("itaque"),
        Version: operations.POSTDescribeSnapshotCopyGrantsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeSnapshotSchedules

Returns a list of snapshot schedules. 

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
    res, err := s.SDK.POSTDescribeSnapshotSchedules(ctx, operations.POSTDescribeSnapshotSchedulesRequest{
        Action: operations.POSTDescribeSnapshotSchedulesActionEnumDescribeSnapshotSchedules,
        Marker: sdk.String("quidem"),
        MaxRecords: sdk.String("exercitationem"),
        RequestBody: []byte("quam"),
        Version: operations.POSTDescribeSnapshotSchedulesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeStorage

Returns account level backups storage size and provisional storage.

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
    res, err := s.SDK.POSTDescribeStorage(ctx, operations.POSTDescribeStorageRequest{
        Action: operations.POSTDescribeStorageActionEnumDescribeStorage,
        Version: operations.POSTDescribeStorageVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeTableRestoreStatus

Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.

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
    res, err := s.SDK.POSTDescribeTableRestoreStatus(ctx, operations.POSTDescribeTableRestoreStatusRequest{
        Action: operations.POSTDescribeTableRestoreStatusActionEnumDescribeTableRestoreStatus,
        Marker: sdk.String("dicta"),
        MaxRecords: sdk.String("consequuntur"),
        RequestBody: []byte("necessitatibus"),
        Version: operations.POSTDescribeTableRestoreStatusVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeTags

<p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>

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
    res, err := s.SDK.POSTDescribeTags(ctx, operations.POSTDescribeTagsRequest{
        Action: operations.POSTDescribeTagsActionEnumDescribeTags,
        Marker: sdk.String("pariatur"),
        MaxRecords: sdk.String("libero"),
        RequestBody: []byte("excepturi"),
        Version: operations.POSTDescribeTagsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeUsageLimits

<p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>

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
    res, err := s.SDK.POSTDescribeUsageLimits(ctx, operations.POSTDescribeUsageLimitsRequest{
        Action: operations.POSTDescribeUsageLimitsActionEnumDescribeUsageLimits,
        Marker: sdk.String("enim"),
        MaxRecords: sdk.String("hic"),
        RequestBody: []byte("animi"),
        Version: operations.POSTDescribeUsageLimitsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDisableLogging

Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

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
    res, err := s.SDK.POSTDisableLogging(ctx, operations.POSTDisableLoggingRequest{
        Action: operations.POSTDisableLoggingActionEnumDisableLogging,
        RequestBody: []byte("quos"),
        Version: operations.POSTDisableLoggingVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDisableSnapshotCopy

<p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>

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
    res, err := s.SDK.POSTDisableSnapshotCopy(ctx, operations.POSTDisableSnapshotCopyRequest{
        Action: operations.POSTDisableSnapshotCopyActionEnumDisableSnapshotCopy,
        RequestBody: []byte("impedit"),
        Version: operations.POSTDisableSnapshotCopyVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDisassociateDataShareConsumer

From a datashare consumer account, remove association for the specified datashare. 

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
    res, err := s.SDK.POSTDisassociateDataShareConsumer(ctx, operations.POSTDisassociateDataShareConsumerRequest{
        Action: operations.POSTDisassociateDataShareConsumerActionEnumDisassociateDataShareConsumer,
        RequestBody: []byte("veniam"),
        Version: operations.POSTDisassociateDataShareConsumerVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTEnableLogging

Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

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
    res, err := s.SDK.POSTEnableLogging(ctx, operations.POSTEnableLoggingRequest{
        Action: operations.POSTEnableLoggingActionEnumEnableLogging,
        RequestBody: []byte("magnam"),
        Version: operations.POSTEnableLoggingVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTEnableSnapshotCopy

Enables the automatic copy of snapshots from one region to another region for a specified cluster.

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
    res, err := s.SDK.POSTEnableSnapshotCopy(ctx, operations.POSTEnableSnapshotCopyRequest{
        Action: operations.POSTEnableSnapshotCopyActionEnumEnableSnapshotCopy,
        RequestBody: []byte("odit"),
        Version: operations.POSTEnableSnapshotCopyVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetClusterCredentials

<p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>

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
    res, err := s.SDK.POSTGetClusterCredentials(ctx, operations.POSTGetClusterCredentialsRequest{
        Action: operations.POSTGetClusterCredentialsActionEnumGetClusterCredentials,
        RequestBody: []byte("nisi"),
        Version: operations.POSTGetClusterCredentialsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetClusterCredentialsWithIAM

<p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>

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
    res, err := s.SDK.POSTGetClusterCredentialsWithIAM(ctx, operations.POSTGetClusterCredentialsWithIAMRequest{
        Action: operations.POSTGetClusterCredentialsWithIAMActionEnumGetClusterCredentialsWithIam,
        RequestBody: []byte("libero"),
        Version: operations.POSTGetClusterCredentialsWithIAMVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetReservedNodeExchangeConfigurationOptions

Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.

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
    res, err := s.SDK.POSTGetReservedNodeExchangeConfigurationOptions(ctx, operations.POSTGetReservedNodeExchangeConfigurationOptionsRequest{
        Action: operations.POSTGetReservedNodeExchangeConfigurationOptionsActionEnumGetReservedNodeExchangeConfigurationOptions,
        Marker: sdk.String("consequuntur"),
        MaxRecords: sdk.String("debitis"),
        RequestBody: []byte("labore"),
        Version: operations.POSTGetReservedNodeExchangeConfigurationOptionsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetReservedNodeExchangeOfferings

Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.

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
    res, err := s.SDK.POSTGetReservedNodeExchangeOfferings(ctx, operations.POSTGetReservedNodeExchangeOfferingsRequest{
        Action: operations.POSTGetReservedNodeExchangeOfferingsActionEnumGetReservedNodeExchangeOfferings,
        Marker: sdk.String("rem"),
        MaxRecords: sdk.String("eligendi"),
        RequestBody: []byte("fugiat"),
        Version: operations.POSTGetReservedNodeExchangeOfferingsVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyAquaConfiguration

This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). 

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
    res, err := s.SDK.POSTModifyAquaConfiguration(ctx, operations.POSTModifyAquaConfigurationRequest{
        Action: operations.POSTModifyAquaConfigurationActionEnumModifyAquaConfiguration,
        RequestBody: []byte("vitae"),
        Version: operations.POSTModifyAquaConfigurationVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyAuthenticationProfile

Modifies an authentication profile.

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
    res, err := s.SDK.POSTModifyAuthenticationProfile(ctx, operations.POSTModifyAuthenticationProfileRequest{
        Action: operations.POSTModifyAuthenticationProfileActionEnumModifyAuthenticationProfile,
        RequestBody: []byte("iusto"),
        Version: operations.POSTModifyAuthenticationProfileVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("illo"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyCluster

<p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTModifyCluster(ctx, operations.POSTModifyClusterRequest{
        Action: operations.POSTModifyClusterActionEnumModifyCluster,
        RequestBody: []byte("tempore"),
        Version: operations.POSTModifyClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyClusterDbRevision

Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.

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
    res, err := s.SDK.POSTModifyClusterDbRevision(ctx, operations.POSTModifyClusterDbRevisionRequest{
        Action: operations.POSTModifyClusterDbRevisionActionEnumModifyClusterDbRevision,
        RequestBody: []byte("repellat"),
        Version: operations.POSTModifyClusterDbRevisionVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyClusterIamRoles

<p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTModifyClusterIamRoles(ctx, operations.POSTModifyClusterIamRolesRequest{
        Action: operations.POSTModifyClusterIamRolesActionEnumModifyClusterIamRoles,
        RequestBody: []byte("aliquam"),
        Version: operations.POSTModifyClusterIamRolesVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyClusterMaintenance

Modifies the maintenance settings of a cluster.

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
    res, err := s.SDK.POSTModifyClusterMaintenance(ctx, operations.POSTModifyClusterMaintenanceRequest{
        Action: operations.POSTModifyClusterMaintenanceActionEnumModifyClusterMaintenance,
        RequestBody: []byte("nam"),
        Version: operations.POSTModifyClusterMaintenanceVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyClusterParameterGroup

<p>Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTModifyClusterParameterGroup(ctx, operations.POSTModifyClusterParameterGroupRequest{
        Action: operations.POSTModifyClusterParameterGroupActionEnumModifyClusterParameterGroup,
        RequestBody: []byte("vero"),
        Version: operations.POSTModifyClusterParameterGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyClusterSnapshot

<p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>

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
    res, err := s.SDK.POSTModifyClusterSnapshot(ctx, operations.POSTModifyClusterSnapshotRequest{
        Action: operations.POSTModifyClusterSnapshotActionEnumModifyClusterSnapshot,
        RequestBody: []byte("aut"),
        Version: operations.POSTModifyClusterSnapshotVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyClusterSnapshotSchedule

Modifies a snapshot schedule for a cluster.

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
    res, err := s.SDK.POSTModifyClusterSnapshotSchedule(ctx, operations.POSTModifyClusterSnapshotScheduleRequest{
        Action: operations.POSTModifyClusterSnapshotScheduleActionEnumModifyClusterSnapshotSchedule,
        RequestBody: []byte("cum"),
        Version: operations.POSTModifyClusterSnapshotScheduleVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTModifyClusterSubnetGroup

Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.

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
    res, err := s.SDK.POSTModifyClusterSubnetGroup(ctx, operations.POSTModifyClusterSubnetGroupRequest{
        Action: operations.POSTModifyClusterSubnetGroupActionEnumModifyClusterSubnetGroup,
        RequestBody: []byte("amet"),
        Version: operations.POSTModifyClusterSubnetGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyEndpointAccess

Modifies a Redshift-managed VPC endpoint.

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
    res, err := s.SDK.POSTModifyEndpointAccess(ctx, operations.POSTModifyEndpointAccessRequest{
        Action: operations.POSTModifyEndpointAccessActionEnumModifyEndpointAccess,
        RequestBody: []byte("molestiae"),
        Version: operations.POSTModifyEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyEventSubscription

Modifies an existing Amazon Redshift event notification subscription.

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
    res, err := s.SDK.POSTModifyEventSubscription(ctx, operations.POSTModifyEventSubscriptionRequest{
        Action: operations.POSTModifyEventSubscriptionActionEnumModifyEventSubscription,
        RequestBody: []byte("totam"),
        Version: operations.POSTModifyEventSubscriptionVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyScheduledAction

Modifies a scheduled action. 

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
    res, err := s.SDK.POSTModifyScheduledAction(ctx, operations.POSTModifyScheduledActionRequest{
        Action: operations.POSTModifyScheduledActionActionEnumModifyScheduledAction,
        RequestBody: []byte("occaecati"),
        Version: operations.POSTModifyScheduledActionVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifySnapshotCopyRetentionPeriod

Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period. 

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
    res, err := s.SDK.POSTModifySnapshotCopyRetentionPeriod(ctx, operations.POSTModifySnapshotCopyRetentionPeriodRequest{
        Action: operations.POSTModifySnapshotCopyRetentionPeriodActionEnumModifySnapshotCopyRetentionPeriod,
        RequestBody: []byte("perferendis"),
        Version: operations.POSTModifySnapshotCopyRetentionPeriodVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifySnapshotSchedule

Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.

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
    res, err := s.SDK.POSTModifySnapshotSchedule(ctx, operations.POSTModifySnapshotScheduleRequest{
        Action: operations.POSTModifySnapshotScheduleActionEnumModifySnapshotSchedule,
        RequestBody: []byte("provident"),
        Version: operations.POSTModifySnapshotScheduleVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyUsageLimit

Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.

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
    res, err := s.SDK.POSTModifyUsageLimit(ctx, operations.POSTModifyUsageLimitRequest{
        Action: operations.POSTModifyUsageLimitActionEnumModifyUsageLimit,
        RequestBody: []byte("officia"),
        Version: operations.POSTModifyUsageLimitVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTPauseCluster

Pauses a cluster.

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
    res, err := s.SDK.POSTPauseCluster(ctx, operations.POSTPauseClusterRequest{
        Action: operations.POSTPauseClusterActionEnumPauseCluster,
        RequestBody: []byte("dignissimos"),
        Version: operations.POSTPauseClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTPurchaseReservedNodeOffering

<p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTPurchaseReservedNodeOffering(ctx, operations.POSTPurchaseReservedNodeOfferingRequest{
        Action: operations.POSTPurchaseReservedNodeOfferingActionEnumPurchaseReservedNodeOffering,
        RequestBody: []byte("nihil"),
        Version: operations.POSTPurchaseReservedNodeOfferingVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("illo"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRebootCluster

Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

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
    res, err := s.SDK.POSTRebootCluster(ctx, operations.POSTRebootClusterRequest{
        Action: operations.POSTRebootClusterActionEnumRebootCluster,
        RequestBody: []byte("distinctio"),
        Version: operations.POSTRebootClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRejectDataShare

From a datashare consumer account, rejects the specified datashare.

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
    res, err := s.SDK.POSTRejectDataShare(ctx, operations.POSTRejectDataShareRequest{
        Action: operations.POSTRejectDataShareActionEnumRejectDataShare,
        RequestBody: []byte("explicabo"),
        Version: operations.POSTRejectDataShareVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTResetClusterParameterGroup

Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the <i>ResetAllParameters</i> parameter. For parameter changes to take effect you must reboot any associated clusters. 

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
    res, err := s.SDK.POSTResetClusterParameterGroup(ctx, operations.POSTResetClusterParameterGroupRequest{
        Action: operations.POSTResetClusterParameterGroupActionEnumResetClusterParameterGroup,
        RequestBody: []byte("similique"),
        Version: operations.POSTResetClusterParameterGroupVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTResizeCluster

<p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>

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
    res, err := s.SDK.POSTResizeCluster(ctx, operations.POSTResizeClusterRequest{
        Action: operations.POSTResizeClusterActionEnumResizeCluster,
        RequestBody: []byte("mollitia"),
        Version: operations.POSTResizeClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRestoreFromClusterSnapshot

<p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTRestoreFromClusterSnapshot(ctx, operations.POSTRestoreFromClusterSnapshotRequest{
        Action: operations.POSTRestoreFromClusterSnapshotActionEnumRestoreFromClusterSnapshot,
        RequestBody: []byte("modi"),
        Version: operations.POSTRestoreFromClusterSnapshotVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRestoreTableFromClusterSnapshot

<p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>

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
    res, err := s.SDK.POSTRestoreTableFromClusterSnapshot(ctx, operations.POSTRestoreTableFromClusterSnapshotRequest{
        Action: operations.POSTRestoreTableFromClusterSnapshotActionEnumRestoreTableFromClusterSnapshot,
        RequestBody: []byte("possimus"),
        Version: operations.POSTRestoreTableFromClusterSnapshotVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("sunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTResumeCluster

Resumes a paused cluster.

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
    res, err := s.SDK.POSTResumeCluster(ctx, operations.POSTResumeClusterRequest{
        Action: operations.POSTResumeClusterActionEnumResumeCluster,
        RequestBody: []byte("distinctio"),
        Version: operations.POSTResumeClusterVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRevokeClusterSecurityGroupIngress

Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

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
    res, err := s.SDK.POSTRevokeClusterSecurityGroupIngress(ctx, operations.POSTRevokeClusterSecurityGroupIngressRequest{
        Action: operations.POSTRevokeClusterSecurityGroupIngressActionEnumRevokeClusterSecurityGroupIngress,
        RequestBody: []byte("alias"),
        Version: operations.POSTRevokeClusterSecurityGroupIngressVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRevokeEndpointAccess

Revokes access to a cluster.

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
    res, err := s.SDK.POSTRevokeEndpointAccess(ctx, operations.POSTRevokeEndpointAccessRequest{
        Action: operations.POSTRevokeEndpointAccessActionEnumRevokeEndpointAccess,
        RequestBody: []byte("eaque"),
        Version: operations.POSTRevokeEndpointAccessVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRevokeSnapshotAccess

<p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

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
    res, err := s.SDK.POSTRevokeSnapshotAccess(ctx, operations.POSTRevokeSnapshotAccessRequest{
        Action: operations.POSTRevokeSnapshotAccessActionEnumRevokeSnapshotAccess,
        RequestBody: []byte("alias"),
        Version: operations.POSTRevokeSnapshotAccessVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRotateEncryptionKey

Rotates the encryption keys for a cluster.

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
    res, err := s.SDK.POSTRotateEncryptionKey(ctx, operations.POSTRotateEncryptionKeyRequest{
        Action: operations.POSTRotateEncryptionKeyActionEnumRotateEncryptionKey,
        RequestBody: []byte("harum"),
        Version: operations.POSTRotateEncryptionKeyVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUpdatePartnerStatus

Updates the status of a partner integration.

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
    res, err := s.SDK.POSTUpdatePartnerStatus(ctx, operations.POSTUpdatePartnerStatusRequest{
        Action: operations.POSTUpdatePartnerStatusActionEnumUpdatePartnerStatus,
        RequestBody: []byte("officia"),
        Version: operations.POSTUpdatePartnerStatusVersionEnumTwoThousandAndTwelve1201,
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
