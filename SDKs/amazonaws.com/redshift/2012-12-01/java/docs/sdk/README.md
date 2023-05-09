# SDK

## Overview

<fullname>Amazon Redshift</fullname> <p> <b>Overview</b> </p> <p>This is an interface reference for Amazon Redshift. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift clusters. Note that Amazon Redshift is asynchronous, which means that some interfaces may require techniques, such as polling or asynchronous callback handlers, to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a change is applied immediately, on the next instance reboot, or during the next maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the Amazon Redshift Management Interfaces</a>.</p> <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data warehouse: provisioning capacity, monitoring and backing up the cluster, and applying patches and upgrades to the Amazon Redshift engine. You can focus on using your data to acquire new insights for your business and customers.</p> <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p> <p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design, build, query, and maintain the databases that make up your data warehouse. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/redshift/>
### Available Operations

* [getAcceptReservedNodeExchange](#getacceptreservednodeexchange) - Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs. 
* [getAddPartner](#getaddpartner) - Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.
* [getAssociateDataShareConsumer](#getassociatedatashareconsumer) - From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.
* [getAuthorizeClusterSecurityGroupIngress](#getauthorizeclustersecuritygroupingress) - <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getAuthorizeDataShare](#getauthorizedatashare) - From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.
* [getAuthorizeEndpointAccess](#getauthorizeendpointaccess) - Grants access to a cluster.
* [getAuthorizeSnapshotAccess](#getauthorizesnapshotaccess) - <p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getBatchModifyClusterSnapshots](#getbatchmodifyclustersnapshots) - Modifies the settings for a set of cluster snapshots.
* [getCancelResize](#getcancelresize) - Cancels a resize operation for a cluster.
* [getCopyClusterSnapshot](#getcopyclustersnapshot) - <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getCreateAuthenticationProfile](#getcreateauthenticationprofile) - Creates an authentication profile with the specified parameters.
* [getCreateEndpointAccess](#getcreateendpointaccess) - Creates a Redshift-managed VPC endpoint.
* [getDeauthorizeDataShare](#getdeauthorizedatashare) - From a datashare producer account, removes authorization from the specified datashare. 
* [getDeleteAuthenticationProfile](#getdeleteauthenticationprofile) - Deletes an authentication profile.
* [getDeleteCluster](#getdeletecluster) - <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getDeleteClusterParameterGroup](#getdeleteclusterparametergroup) - <p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>
* [getDeleteClusterSecurityGroup](#getdeleteclustersecuritygroup) - <p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getDeleteClusterSnapshot](#getdeleteclustersnapshot) - <p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>
* [getDeleteClusterSubnetGroup](#getdeleteclustersubnetgroup) - Deletes the specified cluster subnet group.
* [getDeleteEndpointAccess](#getdeleteendpointaccess) - Deletes a Redshift-managed VPC endpoint.
* [getDeleteEventSubscription](#getdeleteeventsubscription) - Deletes an Amazon Redshift event notification subscription.
* [getDeleteHsmClientCertificate](#getdeletehsmclientcertificate) - Deletes the specified HSM client certificate.
* [getDeleteHsmConfiguration](#getdeletehsmconfiguration) - Deletes the specified Amazon Redshift HSM configuration.
* [getDeletePartner](#getdeletepartner) - Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.
* [getDeleteScheduledAction](#getdeletescheduledaction) - Deletes a scheduled action. 
* [getDeleteSnapshotCopyGrant](#getdeletesnapshotcopygrant) - Deletes the specified snapshot copy grant.
* [getDeleteSnapshotSchedule](#getdeletesnapshotschedule) - Deletes a snapshot schedule.
* [getDeleteTags](#getdeletetags) - Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.
* [getDeleteUsageLimit](#getdeleteusagelimit) - Deletes a usage limit from a cluster.
* [getDescribeAccountAttributes](#getdescribeaccountattributes) - Returns a list of attributes attached to an account
* [getDescribeAuthenticationProfiles](#getdescribeauthenticationprofiles) - Describes an authentication profile.
* [getDescribeClusterDbRevisions](#getdescribeclusterdbrevisions) - Returns an array of <code>ClusterDbRevision</code> objects.
* [getDescribeClusterParameterGroups](#getdescribeclusterparametergroups) - <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [getDescribeClusterParameters](#getdescribeclusterparameters) - <p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getDescribeClusterSecurityGroups](#getdescribeclustersecuritygroups) - <p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [getDescribeClusterSubnetGroups](#getdescribeclustersubnetgroups) - <p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [getDescribeClusterTracks](#getdescribeclustertracks) - Returns a list of all the available maintenance tracks.
* [getDescribeClusterVersions](#getdescribeclusterversions) - Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
* [getDescribeClusters](#getdescribeclusters) - <p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>
* [getDescribeDataShares](#getdescribedatashares) - Shows the status of any inbound or outbound datashares available in the specified account.
* [getDescribeDataSharesForConsumer](#getdescribedatasharesforconsumer) - Returns a list of datashares where the account identifier being called is a consumer account identifier.
* [getDescribeDataSharesForProducer](#getdescribedatasharesforproducer) - Returns a list of datashares when the account identifier being called is a producer account identifier.
* [getDescribeDefaultClusterParameters](#getdescribedefaultclusterparameters) - <p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getDescribeEndpointAccess](#getdescribeendpointaccess) - Describes a Redshift-managed VPC endpoint.
* [getDescribeEndpointAuthorization](#getdescribeendpointauthorization) - Describes an endpoint authorization.
* [getDescribeEventCategories](#getdescribeeventcategories) - Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.
* [getDescribeEventSubscriptions](#getdescribeeventsubscriptions) - <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>
* [getDescribeEvents](#getdescribeevents) - Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
* [getDescribeHsmClientCertificates](#getdescribehsmclientcertificates) - <p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>
* [getDescribeHsmConfigurations](#getdescribehsmconfigurations) - <p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>
* [getDescribeLoggingStatus](#getdescribeloggingstatus) - Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.
* [getDescribeOrderableClusterOptions](#getdescribeorderableclusteroptions) - Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
* [getDescribePartners](#getdescribepartners) - Returns information about the partner integrations defined for a cluster.
* [getDescribeReservedNodeExchangeStatus](#getdescribereservednodeexchangestatus) - Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.
* [getDescribeReservedNodeOfferings](#getdescribereservednodeofferings) - <p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getDescribeReservedNodes](#getdescribereservednodes) - Returns the descriptions of the reserved nodes.
* [getDescribeResize](#getdescriberesize) - <p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>
* [getDescribeSnapshotCopyGrants](#getdescribesnapshotcopygrants) - <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
* [getDescribeSnapshotSchedules](#getdescribesnapshotschedules) - Returns a list of snapshot schedules. 
* [getDescribeStorage](#getdescribestorage) - Returns account level backups storage size and provisional storage.
* [getDescribeTableRestoreStatus](#getdescribetablerestorestatus) - Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.
* [getDescribeTags](#getdescribetags) - <p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>
* [getDescribeUsageLimits](#getdescribeusagelimits) - <p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>
* [getDisableLogging](#getdisablelogging) - Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
* [getDisableSnapshotCopy](#getdisablesnapshotcopy) - <p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>
* [getDisassociateDataShareConsumer](#getdisassociatedatashareconsumer) - From a datashare consumer account, remove association for the specified datashare. 
* [getEnableLogging](#getenablelogging) - Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
* [getEnableSnapshotCopy](#getenablesnapshotcopy) - Enables the automatic copy of snapshots from one region to another region for a specified cluster.
* [getGETClusterCredentials](#getgetclustercredentials) - <p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>
* [getGETClusterCredentialsWithIAM](#getgetclustercredentialswithiam) - <p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>
* [getGETReservedNodeExchangeConfigurationOptions](#getgetreservednodeexchangeconfigurationoptions) - Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.
* [getGETReservedNodeExchangeOfferings](#getgetreservednodeexchangeofferings) - Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.
* [getModifyAquaConfiguration](#getmodifyaquaconfiguration) - This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). 
* [getModifyAuthenticationProfile](#getmodifyauthenticationprofile) - Modifies an authentication profile.
* [getModifyCluster](#getmodifycluster) - <p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getModifyClusterDbRevision](#getmodifyclusterdbrevision) - Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.
* [getModifyClusterIamRoles](#getmodifyclusteriamroles) - <p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getModifyClusterMaintenance](#getmodifyclustermaintenance) - Modifies the maintenance settings of a cluster.
* [getModifyClusterSnapshot](#getmodifyclustersnapshot) - <p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
* [getModifyClusterSnapshotSchedule](#getmodifyclustersnapshotschedule) - Modifies a snapshot schedule for a cluster.
* [getModifyClusterSubnetGroup](#getmodifyclustersubnetgroup) - Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.
* [getModifyEndpointAccess](#getmodifyendpointaccess) - Modifies a Redshift-managed VPC endpoint.
* [getModifyEventSubscription](#getmodifyeventsubscription) - Modifies an existing Amazon Redshift event notification subscription.
* [getModifySnapshotCopyRetentionPeriod](#getmodifysnapshotcopyretentionperiod) - Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period. 
* [getModifySnapshotSchedule](#getmodifysnapshotschedule) - Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.
* [getModifyUsageLimit](#getmodifyusagelimit) - Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.
* [getPauseCluster](#getpausecluster) - Pauses a cluster.
* [getPurchaseReservedNodeOffering](#getpurchasereservednodeoffering) - <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getRebootCluster](#getrebootcluster) - Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 
* [getRejectDataShare](#getrejectdatashare) - From a datashare consumer account, rejects the specified datashare.
* [getResizeCluster](#getresizecluster) - <p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>
* [getRestoreFromClusterSnapshot](#getrestorefromclustersnapshot) - <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getRestoreTableFromClusterSnapshot](#getrestoretablefromclustersnapshot) - <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>
* [getResumeCluster](#getresumecluster) - Resumes a paused cluster.
* [getRevokeClusterSecurityGroupIngress](#getrevokeclustersecuritygroupingress) - Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 
* [getRevokeEndpointAccess](#getrevokeendpointaccess) - Revokes access to a cluster.
* [getRevokeSnapshotAccess](#getrevokesnapshotaccess) - <p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [getRotateEncryptionKey](#getrotateencryptionkey) - Rotates the encryption keys for a cluster.
* [getUpdatePartnerStatus](#getupdatepartnerstatus) - Updates the status of a partner integration.
* [postAcceptReservedNodeExchange](#postacceptreservednodeexchange) - Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs. 
* [postAddPartner](#postaddpartner) - Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.
* [postAssociateDataShareConsumer](#postassociatedatashareconsumer) - From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.
* [postAuthorizeClusterSecurityGroupIngress](#postauthorizeclustersecuritygroupingress) - <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postAuthorizeDataShare](#postauthorizedatashare) - From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.
* [postAuthorizeEndpointAccess](#postauthorizeendpointaccess) - Grants access to a cluster.
* [postAuthorizeSnapshotAccess](#postauthorizesnapshotaccess) - <p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postBatchDeleteClusterSnapshots](#postbatchdeleteclustersnapshots) - Deletes a set of cluster snapshots.
* [postBatchModifyClusterSnapshots](#postbatchmodifyclustersnapshots) - Modifies the settings for a set of cluster snapshots.
* [postCancelResize](#postcancelresize) - Cancels a resize operation for a cluster.
* [postCopyClusterSnapshot](#postcopyclustersnapshot) - <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postCreateAuthenticationProfile](#postcreateauthenticationprofile) - Creates an authentication profile with the specified parameters.
* [postCreateCluster](#postcreatecluster) - <p>Creates a new cluster with the specified parameters.</p> <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postCreateClusterParameterGroup](#postcreateclusterparametergroup) - <p>Creates an Amazon Redshift parameter group.</p> <p>Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p> <p>Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postCreateClusterSecurityGroup](#postcreateclustersecuritygroup) - <p>Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postCreateClusterSnapshot](#postcreateclustersnapshot) - <p>Creates a manual snapshot of the specified cluster. The cluster must be in the <code>available</code> state. </p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postCreateClusterSubnetGroup](#postcreateclustersubnetgroup) - <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.</p> <p> For information about subnet groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postCreateEndpointAccess](#postcreateendpointaccess) - Creates a Redshift-managed VPC endpoint.
* [postCreateEventSubscription](#postcreateeventsubscription) - <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters.</p> <p>If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.</p>
* [postCreateHsmClientCertificate](#postcreatehsmclientcertificate) - <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.</p> <p>The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postCreateHsmConfiguration](#postcreatehsmconfiguration) - <p>Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM.</p> <p>In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>
* [postCreateScheduledAction](#postcreatescheduledaction) - Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation. 
* [postCreateSnapshotCopyGrant](#postcreatesnapshotcopygrant) - <p>Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key from Key Management Service (KMS) to encrypt copied snapshots in a destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
* [postCreateSnapshotSchedule](#postcreatesnapshotschedule) - Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule. 
* [postCreateTags](#postcreatetags) - <p>Adds tags to a cluster.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail.</p> <p>If you specify a key that already exists for the resource, the value for that key will be updated with the new value.</p>
* [postCreateUsageLimit](#postcreateusagelimit) - Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.
* [postDeauthorizeDataShare](#postdeauthorizedatashare) - From a datashare producer account, removes authorization from the specified datashare. 
* [postDeleteAuthenticationProfile](#postdeleteauthenticationprofile) - Deletes an authentication profile.
* [postDeleteCluster](#postdeletecluster) - <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postDeleteClusterParameterGroup](#postdeleteclusterparametergroup) - <p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>
* [postDeleteClusterSecurityGroup](#postdeleteclustersecuritygroup) - <p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postDeleteClusterSnapshot](#postdeleteclustersnapshot) - <p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>
* [postDeleteClusterSubnetGroup](#postdeleteclustersubnetgroup) - Deletes the specified cluster subnet group.
* [postDeleteEndpointAccess](#postdeleteendpointaccess) - Deletes a Redshift-managed VPC endpoint.
* [postDeleteEventSubscription](#postdeleteeventsubscription) - Deletes an Amazon Redshift event notification subscription.
* [postDeleteHsmClientCertificate](#postdeletehsmclientcertificate) - Deletes the specified HSM client certificate.
* [postDeleteHsmConfiguration](#postdeletehsmconfiguration) - Deletes the specified Amazon Redshift HSM configuration.
* [postDeletePartner](#postdeletepartner) - Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.
* [postDeleteScheduledAction](#postdeletescheduledaction) - Deletes a scheduled action. 
* [postDeleteSnapshotCopyGrant](#postdeletesnapshotcopygrant) - Deletes the specified snapshot copy grant.
* [postDeleteSnapshotSchedule](#postdeletesnapshotschedule) - Deletes a snapshot schedule.
* [postDeleteTags](#postdeletetags) - Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.
* [postDeleteUsageLimit](#postdeleteusagelimit) - Deletes a usage limit from a cluster.
* [postDescribeAccountAttributes](#postdescribeaccountattributes) - Returns a list of attributes attached to an account
* [postDescribeAuthenticationProfiles](#postdescribeauthenticationprofiles) - Describes an authentication profile.
* [postDescribeClusterDbRevisions](#postdescribeclusterdbrevisions) - Returns an array of <code>ClusterDbRevision</code> objects.
* [postDescribeClusterParameterGroups](#postdescribeclusterparametergroups) - <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [postDescribeClusterParameters](#postdescribeclusterparameters) - <p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postDescribeClusterSecurityGroups](#postdescribeclustersecuritygroups) - <p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [postDescribeClusterSnapshots](#postdescribeclustersnapshots) - <p>Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by your Amazon Web Services account. No information is returned for snapshots owned by inactive Amazon Web Services accounts.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters.</p> <p>If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.</p>
* [postDescribeClusterSubnetGroups](#postdescribeclustersubnetgroups) - <p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>
* [postDescribeClusterTracks](#postdescribeclustertracks) - Returns a list of all the available maintenance tracks.
* [postDescribeClusterVersions](#postdescribeclusterversions) - Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
* [postDescribeClusters](#postdescribeclusters) - <p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>
* [postDescribeDataShares](#postdescribedatashares) - Shows the status of any inbound or outbound datashares available in the specified account.
* [postDescribeDataSharesForConsumer](#postdescribedatasharesforconsumer) - Returns a list of datashares where the account identifier being called is a consumer account identifier.
* [postDescribeDataSharesForProducer](#postdescribedatasharesforproducer) - Returns a list of datashares when the account identifier being called is a producer account identifier.
* [postDescribeDefaultClusterParameters](#postdescribedefaultclusterparameters) - <p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postDescribeEndpointAccess](#postdescribeendpointaccess) - Describes a Redshift-managed VPC endpoint.
* [postDescribeEndpointAuthorization](#postdescribeendpointauthorization) - Describes an endpoint authorization.
* [postDescribeEventCategories](#postdescribeeventcategories) - Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.
* [postDescribeEventSubscriptions](#postdescribeeventsubscriptions) - <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>
* [postDescribeEvents](#postdescribeevents) - Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
* [postDescribeHsmClientCertificates](#postdescribehsmclientcertificates) - <p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>
* [postDescribeHsmConfigurations](#postdescribehsmconfigurations) - <p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>
* [postDescribeLoggingStatus](#postdescribeloggingstatus) - Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.
* [postDescribeNodeConfigurationOptions](#postdescribenodeconfigurationoptions) - Returns properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type.
* [postDescribeOrderableClusterOptions](#postdescribeorderableclusteroptions) - Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
* [postDescribePartners](#postdescribepartners) - Returns information about the partner integrations defined for a cluster.
* [postDescribeReservedNodeExchangeStatus](#postdescribereservednodeexchangestatus) - Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.
* [postDescribeReservedNodeOfferings](#postdescribereservednodeofferings) - <p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postDescribeReservedNodes](#postdescribereservednodes) - Returns the descriptions of the reserved nodes.
* [postDescribeResize](#postdescriberesize) - <p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>
* [postDescribeScheduledActions](#postdescribescheduledactions) - Describes properties of scheduled actions. 
* [postDescribeSnapshotCopyGrants](#postdescribesnapshotcopygrants) - <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
* [postDescribeSnapshotSchedules](#postdescribesnapshotschedules) - Returns a list of snapshot schedules. 
* [postDescribeStorage](#postdescribestorage) - Returns account level backups storage size and provisional storage.
* [postDescribeTableRestoreStatus](#postdescribetablerestorestatus) - Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.
* [postDescribeTags](#postdescribetags) - <p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>
* [postDescribeUsageLimits](#postdescribeusagelimits) - <p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>
* [postDisableLogging](#postdisablelogging) - Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
* [postDisableSnapshotCopy](#postdisablesnapshotcopy) - <p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>
* [postDisassociateDataShareConsumer](#postdisassociatedatashareconsumer) - From a datashare consumer account, remove association for the specified datashare. 
* [postEnableLogging](#postenablelogging) - Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
* [postEnableSnapshotCopy](#postenablesnapshotcopy) - Enables the automatic copy of snapshots from one region to another region for a specified cluster.
* [postGetClusterCredentials](#postgetclustercredentials) - <p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>
* [postGetClusterCredentialsWithIAM](#postgetclustercredentialswithiam) - <p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>
* [postGetReservedNodeExchangeConfigurationOptions](#postgetreservednodeexchangeconfigurationoptions) - Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.
* [postGetReservedNodeExchangeOfferings](#postgetreservednodeexchangeofferings) - Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.
* [postModifyAquaConfiguration](#postmodifyaquaconfiguration) - This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). 
* [postModifyAuthenticationProfile](#postmodifyauthenticationprofile) - Modifies an authentication profile.
* [postModifyCluster](#postmodifycluster) - <p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postModifyClusterDbRevision](#postmodifyclusterdbrevision) - Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.
* [postModifyClusterIamRoles](#postmodifyclusteriamroles) - <p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postModifyClusterMaintenance](#postmodifyclustermaintenance) - Modifies the maintenance settings of a cluster.
* [postModifyClusterParameterGroup](#postmodifyclusterparametergroup) - <p>Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postModifyClusterSnapshot](#postmodifyclustersnapshot) - <p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
* [postModifyClusterSnapshotSchedule](#postmodifyclustersnapshotschedule) - Modifies a snapshot schedule for a cluster.
* [postModifyClusterSubnetGroup](#postmodifyclustersubnetgroup) - Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.
* [postModifyEndpointAccess](#postmodifyendpointaccess) - Modifies a Redshift-managed VPC endpoint.
* [postModifyEventSubscription](#postmodifyeventsubscription) - Modifies an existing Amazon Redshift event notification subscription.
* [postModifyScheduledAction](#postmodifyscheduledaction) - Modifies a scheduled action. 
* [postModifySnapshotCopyRetentionPeriod](#postmodifysnapshotcopyretentionperiod) - Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period. 
* [postModifySnapshotSchedule](#postmodifysnapshotschedule) - Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.
* [postModifyUsageLimit](#postmodifyusagelimit) - Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.
* [postPauseCluster](#postpausecluster) - Pauses a cluster.
* [postPurchaseReservedNodeOffering](#postpurchasereservednodeoffering) - <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postRebootCluster](#postrebootcluster) - Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 
* [postRejectDataShare](#postrejectdatashare) - From a datashare consumer account, rejects the specified datashare.
* [postResetClusterParameterGroup](#postresetclusterparametergroup) - Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the <i>ResetAllParameters</i> parameter. For parameter changes to take effect you must reboot any associated clusters. 
* [postResizeCluster](#postresizecluster) - <p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>
* [postRestoreFromClusterSnapshot](#postrestorefromclustersnapshot) - <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postRestoreTableFromClusterSnapshot](#postrestoretablefromclustersnapshot) - <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>
* [postResumeCluster](#postresumecluster) - Resumes a paused cluster.
* [postRevokeClusterSecurityGroupIngress](#postrevokeclustersecuritygroupingress) - Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 
* [postRevokeEndpointAccess](#postrevokeendpointaccess) - Revokes access to a cluster.
* [postRevokeSnapshotAccess](#postrevokesnapshotaccess) - <p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
* [postRotateEncryptionKey](#postrotateencryptionkey) - Rotates the encryption keys for a cluster.
* [postUpdatePartnerStatus](#postupdatepartnerstatus) - Updates the status of a partner integration.

## getAcceptReservedNodeExchange

Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeActionEnum;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeRequest;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeResponse;
import org.openapis.openapi.models.operations.GETAcceptReservedNodeExchangeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAcceptReservedNodeExchangeRequest req = new GETAcceptReservedNodeExchangeRequest(GETAcceptReservedNodeExchangeActionEnum.ACCEPT_RESERVED_NODE_EXCHANGE, "suscipit", "iure", GETAcceptReservedNodeExchangeVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            GETAcceptReservedNodeExchangeResponse res = sdk.sdk.getAcceptReservedNodeExchange(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddPartner

Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAddPartnerActionEnum;
import org.openapis.openapi.models.operations.GETAddPartnerRequest;
import org.openapis.openapi.models.operations.GETAddPartnerResponse;
import org.openapis.openapi.models.operations.GETAddPartnerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddPartnerRequest req = new GETAddPartnerRequest("placeat", GETAddPartnerActionEnum.ADD_PARTNER, "voluptatum", "iusto", "excepturi", GETAddPartnerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
            }};            

            GETAddPartnerResponse res = sdk.sdk.getAddPartner(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociateDataShareConsumer

From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAssociateDataShareConsumerActionEnum;
import org.openapis.openapi.models.operations.GETAssociateDataShareConsumerRequest;
import org.openapis.openapi.models.operations.GETAssociateDataShareConsumerResponse;
import org.openapis.openapi.models.operations.GETAssociateDataShareConsumerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAssociateDataShareConsumerRequest req = new GETAssociateDataShareConsumerRequest(GETAssociateDataShareConsumerActionEnum.ASSOCIATE_DATA_SHARE_CONSUMER, "ipsam", GETAssociateDataShareConsumerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                associateEntireAccount = false;
                consumerArn = "repellendus";
                consumerRegion = "sapiente";
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            GETAssociateDataShareConsumerResponse res = sdk.sdk.getAssociateDataShareConsumer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthorizeClusterSecurityGroupIngress

<p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAuthorizeClusterSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.GETAuthorizeClusterSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.GETAuthorizeClusterSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.GETAuthorizeClusterSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAuthorizeClusterSecurityGroupIngressRequest req = new GETAuthorizeClusterSecurityGroupIngressRequest(GETAuthorizeClusterSecurityGroupIngressActionEnum.AUTHORIZE_CLUSTER_SECURITY_GROUP_INGRESS, "esse", GETAuthorizeClusterSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                cidrip = "totam";
                ec2SecurityGroupName = "porro";
                ec2SecurityGroupOwnerId = "dolorum";
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "nam";
                xAmzCredential = "officia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "hic";
            }};            

            GETAuthorizeClusterSecurityGroupIngressResponse res = sdk.sdk.getAuthorizeClusterSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthorizeDataShare

From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAuthorizeDataShareActionEnum;
import org.openapis.openapi.models.operations.GETAuthorizeDataShareRequest;
import org.openapis.openapi.models.operations.GETAuthorizeDataShareResponse;
import org.openapis.openapi.models.operations.GETAuthorizeDataShareVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAuthorizeDataShareRequest req = new GETAuthorizeDataShareRequest(GETAuthorizeDataShareActionEnum.AUTHORIZE_DATA_SHARE, "totam", "beatae", GETAuthorizeDataShareVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "esse";
            }};            

            GETAuthorizeDataShareResponse res = sdk.sdk.getAuthorizeDataShare(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthorizeEndpointAccess

Grants access to a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAuthorizeEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.GETAuthorizeEndpointAccessRequest;
import org.openapis.openapi.models.operations.GETAuthorizeEndpointAccessResponse;
import org.openapis.openapi.models.operations.GETAuthorizeEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAuthorizeEndpointAccessRequest req = new GETAuthorizeEndpointAccessRequest("excepturi", GETAuthorizeEndpointAccessActionEnum.AUTHORIZE_ENDPOINT_ACCESS, GETAuthorizeEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterIdentifier = "aspernatur";
                vpcIds = new String[]{{
                    add("ad"),
                }};
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            GETAuthorizeEndpointAccessResponse res = sdk.sdk.getAuthorizeEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthorizeSnapshotAccess

<p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAuthorizeSnapshotAccessActionEnum;
import org.openapis.openapi.models.operations.GETAuthorizeSnapshotAccessRequest;
import org.openapis.openapi.models.operations.GETAuthorizeSnapshotAccessResponse;
import org.openapis.openapi.models.operations.GETAuthorizeSnapshotAccessVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAuthorizeSnapshotAccessRequest req = new GETAuthorizeSnapshotAccessRequest("fuga", GETAuthorizeSnapshotAccessActionEnum.AUTHORIZE_SNAPSHOT_ACCESS, GETAuthorizeSnapshotAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                snapshotArn = "in";
                snapshotClusterIdentifier = "corporis";
                snapshotIdentifier = "iste";
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            GETAuthorizeSnapshotAccessResponse res = sdk.sdk.getAuthorizeSnapshotAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchModifyClusterSnapshots

Modifies the settings for a set of cluster snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETBatchModifyClusterSnapshotsActionEnum;
import org.openapis.openapi.models.operations.GETBatchModifyClusterSnapshotsRequest;
import org.openapis.openapi.models.operations.GETBatchModifyClusterSnapshotsResponse;
import org.openapis.openapi.models.operations.GETBatchModifyClusterSnapshotsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETBatchModifyClusterSnapshotsRequest req = new GETBatchModifyClusterSnapshotsRequest(GETBatchModifyClusterSnapshotsActionEnum.BATCH_MODIFY_CLUSTER_SNAPSHOTS,                 new String[]{{
                                add("dolores"),
                                add("dolorem"),
                                add("corporis"),
                            }}, GETBatchModifyClusterSnapshotsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                force = false;
                manualSnapshotRetentionPeriod = 128926L;
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            GETBatchModifyClusterSnapshotsResponse res = sdk.sdk.getBatchModifyClusterSnapshots(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCancelResize

Cancels a resize operation for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCancelResizeActionEnum;
import org.openapis.openapi.models.operations.GETCancelResizeRequest;
import org.openapis.openapi.models.operations.GETCancelResizeResponse;
import org.openapis.openapi.models.operations.GETCancelResizeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCancelResizeRequest req = new GETCancelResizeRequest(GETCancelResizeActionEnum.CANCEL_RESIZE, "culpa", GETCancelResizeVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GETCancelResizeResponse res = sdk.sdk.getCancelResize(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCopyClusterSnapshot

<p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCopyClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETCopyClusterSnapshotRequest;
import org.openapis.openapi.models.operations.GETCopyClusterSnapshotResponse;
import org.openapis.openapi.models.operations.GETCopyClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCopyClusterSnapshotRequest req = new GETCopyClusterSnapshotRequest(GETCopyClusterSnapshotActionEnum.COPY_CLUSTER_SNAPSHOT, "mollitia", "occaecati", GETCopyClusterSnapshotVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                manualSnapshotRetentionPeriod = 253291L;
                sourceSnapshotClusterIdentifier = "commodi";
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            GETCopyClusterSnapshotResponse res = sdk.sdk.getCopyClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateAuthenticationProfile

Creates an authentication profile with the specified parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateAuthenticationProfileActionEnum;
import org.openapis.openapi.models.operations.GETCreateAuthenticationProfileRequest;
import org.openapis.openapi.models.operations.GETCreateAuthenticationProfileResponse;
import org.openapis.openapi.models.operations.GETCreateAuthenticationProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateAuthenticationProfileRequest req = new GETCreateAuthenticationProfileRequest(GETCreateAuthenticationProfileActionEnum.CREATE_AUTHENTICATION_PROFILE, "animi", "enim", GETCreateAuthenticationProfileVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "quo";
                xAmzCredential = "sequi";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "possimus";
            }};            

            GETCreateAuthenticationProfileResponse res = sdk.sdk.getCreateAuthenticationProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateEndpointAccess

Creates a Redshift-managed VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.GETCreateEndpointAccessRequest;
import org.openapis.openapi.models.operations.GETCreateEndpointAccessResponse;
import org.openapis.openapi.models.operations.GETCreateEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateEndpointAccessRequest req = new GETCreateEndpointAccessRequest(GETCreateEndpointAccessActionEnum.CREATE_ENDPOINT_ACCESS, "quasi", "error", GETCreateEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterIdentifier = "temporibus";
                resourceOwner = "laborum";
                vpcSecurityGroupIds = new String[]{{
                    add("reiciendis"),
                }};
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            GETCreateEndpointAccessResponse res = sdk.sdk.getCreateEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeauthorizeDataShare

From a datashare producer account, removes authorization from the specified datashare. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeauthorizeDataShareActionEnum;
import org.openapis.openapi.models.operations.GETDeauthorizeDataShareRequest;
import org.openapis.openapi.models.operations.GETDeauthorizeDataShareResponse;
import org.openapis.openapi.models.operations.GETDeauthorizeDataShareVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeauthorizeDataShareRequest req = new GETDeauthorizeDataShareRequest(GETDeauthorizeDataShareActionEnum.DEAUTHORIZE_DATA_SHARE, "cum", "perferendis", GETDeauthorizeDataShareVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
            }};            

            GETDeauthorizeDataShareResponse res = sdk.sdk.getDeauthorizeDataShare(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteAuthenticationProfile

Deletes an authentication profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteAuthenticationProfileActionEnum;
import org.openapis.openapi.models.operations.GETDeleteAuthenticationProfileRequest;
import org.openapis.openapi.models.operations.GETDeleteAuthenticationProfileResponse;
import org.openapis.openapi.models.operations.GETDeleteAuthenticationProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteAuthenticationProfileRequest req = new GETDeleteAuthenticationProfileRequest(GETDeleteAuthenticationProfileActionEnum.DELETE_AUTHENTICATION_PROFILE, "dicta", GETDeleteAuthenticationProfileVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }};            

            GETDeleteAuthenticationProfileResponse res = sdk.sdk.getDeleteAuthenticationProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteCluster

<p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteClusterActionEnum;
import org.openapis.openapi.models.operations.GETDeleteClusterRequest;
import org.openapis.openapi.models.operations.GETDeleteClusterResponse;
import org.openapis.openapi.models.operations.GETDeleteClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteClusterRequest req = new GETDeleteClusterRequest(GETDeleteClusterActionEnum.DELETE_CLUSTER, "molestias", GETDeleteClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                finalClusterSnapshotIdentifier = "excepturi";
                finalClusterSnapshotRetentionPeriod = 865103L;
                skipFinalClusterSnapshot = false;
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
            }};            

            GETDeleteClusterResponse res = sdk.sdk.getDeleteCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteClusterParameterGroup

<p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteClusterParameterGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteClusterParameterGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteClusterParameterGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteClusterParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteClusterParameterGroupRequest req = new GETDeleteClusterParameterGroupRequest(GETDeleteClusterParameterGroupActionEnum.DELETE_CLUSTER_PARAMETER_GROUP, "itaque", GETDeleteClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            GETDeleteClusterParameterGroupResponse res = sdk.sdk.getDeleteClusterParameterGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteClusterSecurityGroup

<p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteClusterSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteClusterSecurityGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteClusterSecurityGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteClusterSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteClusterSecurityGroupRequest req = new GETDeleteClusterSecurityGroupRequest(GETDeleteClusterSecurityGroupActionEnum.DELETE_CLUSTER_SECURITY_GROUP, "quibusdam", GETDeleteClusterSecurityGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            GETDeleteClusterSecurityGroupResponse res = sdk.sdk.getDeleteClusterSecurityGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteClusterSnapshot

<p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETDeleteClusterSnapshotRequest;
import org.openapis.openapi.models.operations.GETDeleteClusterSnapshotResponse;
import org.openapis.openapi.models.operations.GETDeleteClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteClusterSnapshotRequest req = new GETDeleteClusterSnapshotRequest(GETDeleteClusterSnapshotActionEnum.DELETE_CLUSTER_SNAPSHOT, "assumenda", GETDeleteClusterSnapshotVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                snapshotClusterIdentifier = "ipsam";
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
            }};            

            GETDeleteClusterSnapshotResponse res = sdk.sdk.getDeleteClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteClusterSubnetGroup

Deletes the specified cluster subnet group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteClusterSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteClusterSubnetGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteClusterSubnetGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteClusterSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteClusterSubnetGroupRequest req = new GETDeleteClusterSubnetGroupRequest(GETDeleteClusterSubnetGroupActionEnum.DELETE_CLUSTER_SUBNET_GROUP, "delectus", GETDeleteClusterSubnetGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GETDeleteClusterSubnetGroupResponse res = sdk.sdk.getDeleteClusterSubnetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteEndpointAccess

Deletes a Redshift-managed VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.GETDeleteEndpointAccessRequest;
import org.openapis.openapi.models.operations.GETDeleteEndpointAccessResponse;
import org.openapis.openapi.models.operations.GETDeleteEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteEndpointAccessRequest req = new GETDeleteEndpointAccessRequest(GETDeleteEndpointAccessActionEnum.DELETE_ENDPOINT_ACCESS, "officia", GETDeleteEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
            }};            

            GETDeleteEndpointAccessResponse res = sdk.sdk.getDeleteEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteEventSubscription

Deletes an Amazon Redshift event notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionRequest;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionResponse;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteEventSubscriptionRequest req = new GETDeleteEventSubscriptionRequest(GETDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, "rerum", GETDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "cumque";
                xAmzDate = "facere";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "laborum";
            }};            

            GETDeleteEventSubscriptionResponse res = sdk.sdk.getDeleteEventSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteHsmClientCertificate

Deletes the specified HSM client certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteHsmClientCertificateActionEnum;
import org.openapis.openapi.models.operations.GETDeleteHsmClientCertificateRequest;
import org.openapis.openapi.models.operations.GETDeleteHsmClientCertificateResponse;
import org.openapis.openapi.models.operations.GETDeleteHsmClientCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteHsmClientCertificateRequest req = new GETDeleteHsmClientCertificateRequest(GETDeleteHsmClientCertificateActionEnum.DELETE_HSM_CLIENT_CERTIFICATE, "non", GETDeleteHsmClientCertificateVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "delectus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nam";
            }};            

            GETDeleteHsmClientCertificateResponse res = sdk.sdk.getDeleteHsmClientCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteHsmConfiguration

Deletes the specified Amazon Redshift HSM configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteHsmConfigurationActionEnum;
import org.openapis.openapi.models.operations.GETDeleteHsmConfigurationRequest;
import org.openapis.openapi.models.operations.GETDeleteHsmConfigurationResponse;
import org.openapis.openapi.models.operations.GETDeleteHsmConfigurationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteHsmConfigurationRequest req = new GETDeleteHsmConfigurationRequest(GETDeleteHsmConfigurationActionEnum.DELETE_HSM_CONFIGURATION, "blanditiis", GETDeleteHsmConfigurationVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "natus";
            }};            

            GETDeleteHsmConfigurationResponse res = sdk.sdk.getDeleteHsmConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeletePartner

Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeletePartnerActionEnum;
import org.openapis.openapi.models.operations.GETDeletePartnerRequest;
import org.openapis.openapi.models.operations.GETDeletePartnerResponse;
import org.openapis.openapi.models.operations.GETDeletePartnerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeletePartnerRequest req = new GETDeletePartnerRequest("molestiae", GETDeletePartnerActionEnum.DELETE_PARTNER, "perferendis", "nihil", "magnam", GETDeletePartnerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            GETDeletePartnerResponse res = sdk.sdk.getDeletePartner(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteScheduledAction

Deletes a scheduled action. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteScheduledActionActionEnum;
import org.openapis.openapi.models.operations.GETDeleteScheduledActionRequest;
import org.openapis.openapi.models.operations.GETDeleteScheduledActionResponse;
import org.openapis.openapi.models.operations.GETDeleteScheduledActionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteScheduledActionRequest req = new GETDeleteScheduledActionRequest(GETDeleteScheduledActionActionEnum.DELETE_SCHEDULED_ACTION, "vero", GETDeleteScheduledActionVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            GETDeleteScheduledActionResponse res = sdk.sdk.getDeleteScheduledAction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteSnapshotCopyGrant

Deletes the specified snapshot copy grant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteSnapshotCopyGrantActionEnum;
import org.openapis.openapi.models.operations.GETDeleteSnapshotCopyGrantRequest;
import org.openapis.openapi.models.operations.GETDeleteSnapshotCopyGrantResponse;
import org.openapis.openapi.models.operations.GETDeleteSnapshotCopyGrantVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteSnapshotCopyGrantRequest req = new GETDeleteSnapshotCopyGrantRequest(GETDeleteSnapshotCopyGrantActionEnum.DELETE_SNAPSHOT_COPY_GRANT, "sint", GETDeleteSnapshotCopyGrantVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
            }};            

            GETDeleteSnapshotCopyGrantResponse res = sdk.sdk.getDeleteSnapshotCopyGrant(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteSnapshotSchedule

Deletes a snapshot schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteSnapshotScheduleActionEnum;
import org.openapis.openapi.models.operations.GETDeleteSnapshotScheduleRequest;
import org.openapis.openapi.models.operations.GETDeleteSnapshotScheduleResponse;
import org.openapis.openapi.models.operations.GETDeleteSnapshotScheduleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteSnapshotScheduleRequest req = new GETDeleteSnapshotScheduleRequest(GETDeleteSnapshotScheduleActionEnum.DELETE_SNAPSHOT_SCHEDULE, "odit", GETDeleteSnapshotScheduleVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "iure";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "maxime";
            }};            

            GETDeleteSnapshotScheduleResponse res = sdk.sdk.getDeleteSnapshotSchedule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteTags

Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteTagsActionEnum;
import org.openapis.openapi.models.operations.GETDeleteTagsRequest;
import org.openapis.openapi.models.operations.GETDeleteTagsResponse;
import org.openapis.openapi.models.operations.GETDeleteTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteTagsRequest req = new GETDeleteTagsRequest(GETDeleteTagsActionEnum.DELETE_TAGS, "facilis",                 new String[]{{
                                add("architecto"),
                                add("architecto"),
                            }}, GETDeleteTagsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            GETDeleteTagsResponse res = sdk.sdk.getDeleteTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteUsageLimit

Deletes a usage limit from a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteUsageLimitActionEnum;
import org.openapis.openapi.models.operations.GETDeleteUsageLimitRequest;
import org.openapis.openapi.models.operations.GETDeleteUsageLimitResponse;
import org.openapis.openapi.models.operations.GETDeleteUsageLimitVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteUsageLimitRequest req = new GETDeleteUsageLimitRequest(GETDeleteUsageLimitActionEnum.DELETE_USAGE_LIMIT, "pariatur", GETDeleteUsageLimitVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "praesentium";
                xAmzDate = "natus";
                xAmzSecurityToken = "magni";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "quo";
            }};            

            GETDeleteUsageLimitResponse res = sdk.sdk.getDeleteUsageLimit(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAccountAttributes

Returns a list of attributes attached to an account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesRequest;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesResponse;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAccountAttributesRequest req = new GETDescribeAccountAttributesRequest(GETDescribeAccountAttributesActionEnum.DESCRIBE_ACCOUNT_ATTRIBUTES, GETDescribeAccountAttributesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                attributeNames = new String[]{{
                    add("maxime"),
                    add("ea"),
                    add("excepturi"),
                    add("odit"),
                }};
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "ab";
                xAmzDate = "maiores";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "voluptate";
            }};            

            GETDescribeAccountAttributesResponse res = sdk.sdk.getDescribeAccountAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAuthenticationProfiles

Describes an authentication profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAuthenticationProfilesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAuthenticationProfilesRequest;
import org.openapis.openapi.models.operations.GETDescribeAuthenticationProfilesResponse;
import org.openapis.openapi.models.operations.GETDescribeAuthenticationProfilesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAuthenticationProfilesRequest req = new GETDescribeAuthenticationProfilesRequest(GETDescribeAuthenticationProfilesActionEnum.DESCRIBE_AUTHENTICATION_PROFILES, GETDescribeAuthenticationProfilesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                authenticationProfileName = "nam";
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "nemo";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "amet";
            }};            

            GETDescribeAuthenticationProfilesResponse res = sdk.sdk.getDescribeAuthenticationProfiles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeClusterDbRevisions

Returns an array of <code>ClusterDbRevision</code> objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeClusterDbRevisionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeClusterDbRevisionsRequest;
import org.openapis.openapi.models.operations.GETDescribeClusterDbRevisionsResponse;
import org.openapis.openapi.models.operations.GETDescribeClusterDbRevisionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeClusterDbRevisionsRequest req = new GETDescribeClusterDbRevisionsRequest(GETDescribeClusterDbRevisionsActionEnum.DESCRIBE_CLUSTER_DB_REVISIONS, GETDescribeClusterDbRevisionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterIdentifier = "cumque";
                marker = "corporis";
                maxRecords = 944124L;
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "dolores";
                xAmzDate = "quis";
                xAmzSecurityToken = "totam";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "eaque";
            }};            

            GETDescribeClusterDbRevisionsResponse res = sdk.sdk.getDescribeClusterDbRevisions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeClusterParameterGroups

<p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeClusterParameterGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeClusterParameterGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeClusterParameterGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeClusterParameterGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeClusterParameterGroupsRequest req = new GETDescribeClusterParameterGroupsRequest(GETDescribeClusterParameterGroupsActionEnum.DESCRIBE_CLUSTER_PARAMETER_GROUPS, GETDescribeClusterParameterGroupsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "nesciunt";
                maxRecords = 179490L;
                parameterGroupName = "perferendis";
                tagKeys = new String[]{{
                    add("minus"),
                }};
                tagValues = new String[]{{
                    add("dolor"),
                    add("vero"),
                }};
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "recusandae";
                xAmzDate = "omnis";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "voluptatem";
            }};            

            GETDescribeClusterParameterGroupsResponse res = sdk.sdk.getDescribeClusterParameterGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeClusterParameters

<p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeClusterParametersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeClusterParametersRequest;
import org.openapis.openapi.models.operations.GETDescribeClusterParametersResponse;
import org.openapis.openapi.models.operations.GETDescribeClusterParametersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeClusterParametersRequest req = new GETDescribeClusterParametersRequest(GETDescribeClusterParametersActionEnum.DESCRIBE_CLUSTER_PARAMETERS, "consequuntur", GETDescribeClusterParametersVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "blanditiis";
                maxRecords = 621479L;
                source = "eaque";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "adipisci";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "iste";
            }};            

            GETDescribeClusterParametersResponse res = sdk.sdk.getDescribeClusterParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeClusterSecurityGroups

<p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeClusterSecurityGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeClusterSecurityGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeClusterSecurityGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeClusterSecurityGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeClusterSecurityGroupsRequest req = new GETDescribeClusterSecurityGroupsRequest(GETDescribeClusterSecurityGroupsActionEnum.DESCRIBE_CLUSTER_SECURITY_GROUPS, GETDescribeClusterSecurityGroupsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterSecurityGroupName = "deleniti";
                marker = "pariatur";
                maxRecords = 589910L;
                tagKeys = new String[]{{
                    add("libero"),
                    add("delectus"),
                    add("quaerat"),
                    add("quos"),
                }};
                tagValues = new String[]{{
                    add("dolorem"),
                    add("dolorem"),
                }};
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "qui";
                xAmzCredential = "ipsum";
                xAmzDate = "hic";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "voluptate";
            }};            

            GETDescribeClusterSecurityGroupsResponse res = sdk.sdk.getDescribeClusterSecurityGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeClusterSubnetGroups

<p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeClusterSubnetGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeClusterSubnetGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeClusterSubnetGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeClusterSubnetGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeClusterSubnetGroupsRequest req = new GETDescribeClusterSubnetGroupsRequest(GETDescribeClusterSubnetGroupsActionEnum.DESCRIBE_CLUSTER_SUBNET_GROUPS, GETDescribeClusterSubnetGroupsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterSubnetGroupName = "reiciendis";
                marker = "amet";
                maxRecords = 680545L;
                tagKeys = new String[]{{
                    add("veritatis"),
                    add("ipsa"),
                }};
                tagValues = new String[]{{
                    add("iure"),
                }};
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "accusamus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "natus";
            }};            

            GETDescribeClusterSubnetGroupsResponse res = sdk.sdk.getDescribeClusterSubnetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeClusterTracks

Returns a list of all the available maintenance tracks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeClusterTracksActionEnum;
import org.openapis.openapi.models.operations.GETDescribeClusterTracksRequest;
import org.openapis.openapi.models.operations.GETDescribeClusterTracksResponse;
import org.openapis.openapi.models.operations.GETDescribeClusterTracksVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeClusterTracksRequest req = new GETDescribeClusterTracksRequest(GETDescribeClusterTracksActionEnum.DESCRIBE_CLUSTER_TRACKS, GETDescribeClusterTracksVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                maintenanceTrackName = "atque";
                marker = "sit";
                maxRecords = 854614L;
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dolorum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            GETDescribeClusterTracksResponse res = sdk.sdk.getDescribeClusterTracks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeClusterVersions

Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeClusterVersionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeClusterVersionsRequest;
import org.openapis.openapi.models.operations.GETDescribeClusterVersionsResponse;
import org.openapis.openapi.models.operations.GETDescribeClusterVersionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeClusterVersionsRequest req = new GETDescribeClusterVersionsRequest(GETDescribeClusterVersionsActionEnum.DESCRIBE_CLUSTER_VERSIONS, GETDescribeClusterVersionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterParameterGroupFamily = "necessitatibus";
                clusterVersion = "distinctio";
                marker = "asperiores";
                maxRecords = 469497L;
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "id";
                xAmzDate = "saepe";
                xAmzSecurityToken = "eius";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            GETDescribeClusterVersionsResponse res = sdk.sdk.getDescribeClusterVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeClusters

<p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeClustersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeClustersRequest;
import org.openapis.openapi.models.operations.GETDescribeClustersResponse;
import org.openapis.openapi.models.operations.GETDescribeClustersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeClustersRequest req = new GETDescribeClustersRequest(GETDescribeClustersActionEnum.DESCRIBE_CLUSTERS, GETDescribeClustersVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterIdentifier = "optio";
                marker = "accusamus";
                maxRecords = 320017L;
                tagKeys = new String[]{{
                    add("suscipit"),
                    add("deserunt"),
                    add("provident"),
                    add("minima"),
                }};
                tagValues = new String[]{{
                    add("totam"),
                    add("similique"),
                    add("alias"),
                    add("at"),
                }};
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETDescribeClustersResponse res = sdk.sdk.getDescribeClusters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDataShares

Shows the status of any inbound or outbound datashares available in the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDataSharesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDataSharesRequest;
import org.openapis.openapi.models.operations.GETDescribeDataSharesResponse;
import org.openapis.openapi.models.operations.GETDescribeDataSharesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDataSharesRequest req = new GETDescribeDataSharesRequest(GETDescribeDataSharesActionEnum.DESCRIBE_DATA_SHARES, GETDescribeDataSharesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                dataShareArn = "esse";
                marker = "harum";
                maxRecords = 483409L;
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "tenetur";
                xAmzDate = "amet";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "numquam";
            }};            

            GETDescribeDataSharesResponse res = sdk.sdk.getDescribeDataShares(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDataSharesForConsumer

Returns a list of datashares where the account identifier being called is a consumer account identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDataSharesForConsumerActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDataSharesForConsumerRequest;
import org.openapis.openapi.models.operations.GETDescribeDataSharesForConsumerResponse;
import org.openapis.openapi.models.operations.GETDescribeDataSharesForConsumerStatusEnum;
import org.openapis.openapi.models.operations.GETDescribeDataSharesForConsumerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDataSharesForConsumerRequest req = new GETDescribeDataSharesForConsumerRequest(GETDescribeDataSharesForConsumerActionEnum.DESCRIBE_DATA_SHARES_FOR_CONSUMER, GETDescribeDataSharesForConsumerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                consumerArn = "dolorem";
                marker = "sapiente";
                maxRecords = 518201L;
                status = GETDescribeDataSharesForConsumerStatusEnum.ACTIVE;
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "neque";
                xAmzDate = "sed";
                xAmzSecurityToken = "vel";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "voluptas";
            }};            

            GETDescribeDataSharesForConsumerResponse res = sdk.sdk.getDescribeDataSharesForConsumer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDataSharesForProducer

Returns a list of datashares when the account identifier being called is a producer account identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDataSharesForProducerActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDataSharesForProducerRequest;
import org.openapis.openapi.models.operations.GETDescribeDataSharesForProducerResponse;
import org.openapis.openapi.models.operations.GETDescribeDataSharesForProducerStatusEnum;
import org.openapis.openapi.models.operations.GETDescribeDataSharesForProducerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDataSharesForProducerRequest req = new GETDescribeDataSharesForProducerRequest(GETDescribeDataSharesForProducerActionEnum.DESCRIBE_DATA_SHARES_FOR_PRODUCER, GETDescribeDataSharesForProducerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "quam";
                maxRecords = 214880L;
                producerArn = "incidunt";
                status = GETDescribeDataSharesForProducerStatusEnum.ACTIVE;
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "pariatur";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "totam";
            }};            

            GETDescribeDataSharesForProducerResponse res = sdk.sdk.getDescribeDataSharesForProducer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDefaultClusterParameters

<p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDefaultClusterParametersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDefaultClusterParametersRequest;
import org.openapis.openapi.models.operations.GETDescribeDefaultClusterParametersResponse;
import org.openapis.openapi.models.operations.GETDescribeDefaultClusterParametersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDefaultClusterParametersRequest req = new GETDescribeDefaultClusterParametersRequest(GETDescribeDefaultClusterParametersActionEnum.DESCRIBE_DEFAULT_CLUSTER_PARAMETERS, "aspernatur", GETDescribeDefaultClusterParametersVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "dolores";
                maxRecords = 716860L;
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quam";
                xAmzDate = "molestias";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "neque";
            }};            

            GETDescribeDefaultClusterParametersResponse res = sdk.sdk.getDescribeDefaultClusterParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEndpointAccess

Describes a Redshift-managed VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEndpointAccessRequest;
import org.openapis.openapi.models.operations.GETDescribeEndpointAccessResponse;
import org.openapis.openapi.models.operations.GETDescribeEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEndpointAccessRequest req = new GETDescribeEndpointAccessRequest(GETDescribeEndpointAccessActionEnum.DESCRIBE_ENDPOINT_ACCESS, GETDescribeEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterIdentifier = "magni";
                endpointName = "odio";
                marker = "sunt";
                maxRecords = 355613L;
                resourceOwner = "nam";
                vpcId = "hic";
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "soluta";
                xAmzDate = "nobis";
                xAmzSecurityToken = "et";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "ipsum";
            }};            

            GETDescribeEndpointAccessResponse res = sdk.sdk.getDescribeEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEndpointAuthorization

Describes an endpoint authorization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEndpointAuthorizationActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEndpointAuthorizationRequest;
import org.openapis.openapi.models.operations.GETDescribeEndpointAuthorizationResponse;
import org.openapis.openapi.models.operations.GETDescribeEndpointAuthorizationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEndpointAuthorizationRequest req = new GETDescribeEndpointAuthorizationRequest(GETDescribeEndpointAuthorizationActionEnum.DESCRIBE_ENDPOINT_AUTHORIZATION, GETDescribeEndpointAuthorizationVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                account = "nobis";
                clusterIdentifier = "quos";
                grantee = false;
                marker = "tempore";
                maxRecords = 584476L;
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "dolorem";
                xAmzDate = "dolore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETDescribeEndpointAuthorizationResponse res = sdk.sdk.getDescribeEndpointAuthorization(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEventCategories

Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEventCategoriesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEventCategoriesRequest;
import org.openapis.openapi.models.operations.GETDescribeEventCategoriesResponse;
import org.openapis.openapi.models.operations.GETDescribeEventCategoriesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEventCategoriesRequest req = new GETDescribeEventCategoriesRequest(GETDescribeEventCategoriesActionEnum.DESCRIBE_EVENT_CATEGORIES, GETDescribeEventCategoriesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                sourceType = "quae";
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quas";
                xAmzCredential = "itaque";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "porro";
            }};            

            GETDescribeEventCategoriesResponse res = sdk.sdk.getDescribeEventCategories(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEventSubscriptions

<p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEventSubscriptionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEventSubscriptionsRequest;
import org.openapis.openapi.models.operations.GETDescribeEventSubscriptionsResponse;
import org.openapis.openapi.models.operations.GETDescribeEventSubscriptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEventSubscriptionsRequest req = new GETDescribeEventSubscriptionsRequest(GETDescribeEventSubscriptionsActionEnum.DESCRIBE_EVENT_SUBSCRIPTIONS, GETDescribeEventSubscriptionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "ut";
                maxRecords = 703495L;
                subscriptionName = "cupiditate";
                tagKeys = new String[]{{
                    add("quae"),
                }};
                tagValues = new String[]{{
                    add("odio"),
                    add("occaecati"),
                    add("voluptatibus"),
                }};
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "vero";
                xAmzCredential = "omnis";
                xAmzDate = "quis";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "voluptate";
            }};            

            GETDescribeEventSubscriptionsResponse res = sdk.sdk.getDescribeEventSubscriptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEvents

Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEventsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEventsRequest;
import org.openapis.openapi.models.operations.GETDescribeEventsResponse;
import org.openapis.openapi.models.operations.GETDescribeEventsSourceTypeEnum;
import org.openapis.openapi.models.operations.GETDescribeEventsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEventsRequest req = new GETDescribeEventsRequest(GETDescribeEventsActionEnum.DESCRIBE_EVENTS, GETDescribeEventsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                duration = 878870L;
                endTime = OffsetDateTime.parse("2021-07-10T23:11:25.857Z");
                marker = "hic";
                maxRecords = 715561L;
                sourceIdentifier = "quod";
                sourceType = GETDescribeEventsSourceTypeEnum.CLUSTER_SECURITY_GROUP;
                startTime = OffsetDateTime.parse("2021-08-01T18:14:10.863Z");
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "dolore";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "illum";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "natus";
            }};            

            GETDescribeEventsResponse res = sdk.sdk.getDescribeEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeHsmClientCertificates

<p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeHsmClientCertificatesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeHsmClientCertificatesRequest;
import org.openapis.openapi.models.operations.GETDescribeHsmClientCertificatesResponse;
import org.openapis.openapi.models.operations.GETDescribeHsmClientCertificatesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeHsmClientCertificatesRequest req = new GETDescribeHsmClientCertificatesRequest(GETDescribeHsmClientCertificatesActionEnum.DESCRIBE_HSM_CLIENT_CERTIFICATES, GETDescribeHsmClientCertificatesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                hsmClientCertificateIdentifier = "aut";
                marker = "voluptatibus";
                maxRecords = 347233L;
                tagKeys = new String[]{{
                    add("fugit"),
                    add("porro"),
                    add("maiores"),
                    add("doloribus"),
                }};
                tagValues = new String[]{{
                    add("eligendi"),
                    add("ducimus"),
                }};
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "officia";
                xAmzCredential = "tempora";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "vel";
            }};            

            GETDescribeHsmClientCertificatesResponse res = sdk.sdk.getDescribeHsmClientCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeHsmConfigurations

<p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeHsmConfigurationsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeHsmConfigurationsRequest;
import org.openapis.openapi.models.operations.GETDescribeHsmConfigurationsResponse;
import org.openapis.openapi.models.operations.GETDescribeHsmConfigurationsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeHsmConfigurationsRequest req = new GETDescribeHsmConfigurationsRequest(GETDescribeHsmConfigurationsActionEnum.DESCRIBE_HSM_CONFIGURATIONS, GETDescribeHsmConfigurationsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                hsmConfigurationIdentifier = "magnam";
                marker = "ratione";
                maxRecords = 401132L;
                tagKeys = new String[]{{
                    add("dicta"),
                    add("dolor"),
                    add("maiores"),
                }};
                tagValues = new String[]{{
                    add("ex"),
                }};
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "saepe";
            }};            

            GETDescribeHsmConfigurationsResponse res = sdk.sdk.getDescribeHsmConfigurations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeLoggingStatus

Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeLoggingStatusActionEnum;
import org.openapis.openapi.models.operations.GETDescribeLoggingStatusRequest;
import org.openapis.openapi.models.operations.GETDescribeLoggingStatusResponse;
import org.openapis.openapi.models.operations.GETDescribeLoggingStatusVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLoggingStatusRequest req = new GETDescribeLoggingStatusRequest(GETDescribeLoggingStatusActionEnum.DESCRIBE_LOGGING_STATUS, "impedit", GETDescribeLoggingStatusVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "aliquid";
                xAmzDate = "inventore";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quo";
            }};            

            GETDescribeLoggingStatusResponse res = sdk.sdk.getDescribeLoggingStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeOrderableClusterOptions

Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeOrderableClusterOptionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeOrderableClusterOptionsRequest;
import org.openapis.openapi.models.operations.GETDescribeOrderableClusterOptionsResponse;
import org.openapis.openapi.models.operations.GETDescribeOrderableClusterOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeOrderableClusterOptionsRequest req = new GETDescribeOrderableClusterOptionsRequest(GETDescribeOrderableClusterOptionsActionEnum.DESCRIBE_ORDERABLE_CLUSTER_OPTIONS, GETDescribeOrderableClusterOptionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterVersion = "recusandae";
                marker = "aspernatur";
                maxRecords = 325310L;
                nodeType = "eaque";
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "libero";
                xAmzCredential = "aut";
                xAmzDate = "aut";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "aliquam";
            }};            

            GETDescribeOrderableClusterOptionsResponse res = sdk.sdk.getDescribeOrderableClusterOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribePartners

Returns information about the partner integrations defined for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribePartnersActionEnum;
import org.openapis.openapi.models.operations.GETDescribePartnersRequest;
import org.openapis.openapi.models.operations.GETDescribePartnersResponse;
import org.openapis.openapi.models.operations.GETDescribePartnersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribePartnersRequest req = new GETDescribePartnersRequest("accusamus", GETDescribePartnersActionEnum.DESCRIBE_PARTNERS, "inventore", GETDescribePartnersVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                databaseName = "non";
                partnerName = "et";
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "placeat";
                xAmzDate = "velit";
                xAmzSecurityToken = "eum";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nobis";
            }};            

            GETDescribePartnersResponse res = sdk.sdk.getDescribePartners(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeReservedNodeExchangeStatus

Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeReservedNodeExchangeStatusActionEnum;
import org.openapis.openapi.models.operations.GETDescribeReservedNodeExchangeStatusRequest;
import org.openapis.openapi.models.operations.GETDescribeReservedNodeExchangeStatusResponse;
import org.openapis.openapi.models.operations.GETDescribeReservedNodeExchangeStatusVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReservedNodeExchangeStatusRequest req = new GETDescribeReservedNodeExchangeStatusRequest(GETDescribeReservedNodeExchangeStatusActionEnum.DESCRIBE_RESERVED_NODE_EXCHANGE_STATUS, GETDescribeReservedNodeExchangeStatusVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "assumenda";
                maxRecords = 860552L;
                reservedNodeExchangeRequestId = "voluptas";
                reservedNodeId = "libero";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "numquam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "provident";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "molestiae";
            }};            

            GETDescribeReservedNodeExchangeStatusResponse res = sdk.sdk.getDescribeReservedNodeExchangeStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeReservedNodeOfferings

<p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeReservedNodeOfferingsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeReservedNodeOfferingsRequest;
import org.openapis.openapi.models.operations.GETDescribeReservedNodeOfferingsResponse;
import org.openapis.openapi.models.operations.GETDescribeReservedNodeOfferingsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReservedNodeOfferingsRequest req = new GETDescribeReservedNodeOfferingsRequest(GETDescribeReservedNodeOfferingsActionEnum.DESCRIBE_RESERVED_NODE_OFFERINGS, GETDescribeReservedNodeOfferingsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "odio";
                maxRecords = 262118L;
                reservedNodeOfferingId = "esse";
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "rem";
                xAmzCredential = "fuga";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ut";
            }};            

            GETDescribeReservedNodeOfferingsResponse res = sdk.sdk.getDescribeReservedNodeOfferings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeReservedNodes

Returns the descriptions of the reserved nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeReservedNodesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeReservedNodesRequest;
import org.openapis.openapi.models.operations.GETDescribeReservedNodesResponse;
import org.openapis.openapi.models.operations.GETDescribeReservedNodesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReservedNodesRequest req = new GETDescribeReservedNodesRequest(GETDescribeReservedNodesActionEnum.DESCRIBE_RESERVED_NODES, GETDescribeReservedNodesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "suscipit";
                maxRecords = 826871L;
                reservedNodeId = "eos";
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "id";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "neque";
            }};            

            GETDescribeReservedNodesResponse res = sdk.sdk.getDescribeReservedNodes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeResize

<p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeResizeActionEnum;
import org.openapis.openapi.models.operations.GETDescribeResizeRequest;
import org.openapis.openapi.models.operations.GETDescribeResizeResponse;
import org.openapis.openapi.models.operations.GETDescribeResizeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeResizeRequest req = new GETDescribeResizeRequest(GETDescribeResizeActionEnum.DESCRIBE_RESIZE, "illum", GETDescribeResizeVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "eius";
                xAmzDate = "eos";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "cupiditate";
            }};            

            GETDescribeResizeResponse res = sdk.sdk.getDescribeResize(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeSnapshotCopyGrants

<p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeSnapshotCopyGrantsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeSnapshotCopyGrantsRequest;
import org.openapis.openapi.models.operations.GETDescribeSnapshotCopyGrantsResponse;
import org.openapis.openapi.models.operations.GETDescribeSnapshotCopyGrantsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeSnapshotCopyGrantsRequest req = new GETDescribeSnapshotCopyGrantsRequest(GETDescribeSnapshotCopyGrantsActionEnum.DESCRIBE_SNAPSHOT_COPY_GRANTS, GETDescribeSnapshotCopyGrantsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "tempora";
                maxRecords = 892050L;
                snapshotCopyGrantName = "ipsam";
                tagKeys = new String[]{{
                    add("sequi"),
                }};
                tagValues = new String[]{{
                    add("esse"),
                    add("recusandae"),
                    add("aperiam"),
                    add("distinctio"),
                }};
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
            }};            

            GETDescribeSnapshotCopyGrantsResponse res = sdk.sdk.getDescribeSnapshotCopyGrants(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeSnapshotSchedules

Returns a list of snapshot schedules. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeSnapshotSchedulesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeSnapshotSchedulesRequest;
import org.openapis.openapi.models.operations.GETDescribeSnapshotSchedulesResponse;
import org.openapis.openapi.models.operations.GETDescribeSnapshotSchedulesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeSnapshotSchedulesRequest req = new GETDescribeSnapshotSchedulesRequest(GETDescribeSnapshotSchedulesActionEnum.DESCRIBE_SNAPSHOT_SCHEDULES, GETDescribeSnapshotSchedulesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterIdentifier = "occaecati";
                marker = "commodi";
                maxRecords = 959434L;
                scheduleIdentifier = "dolores";
                tagKeys = new String[]{{
                    add("molestiae"),
                    add("accusantium"),
                    add("porro"),
                }};
                tagValues = new String[]{{
                    add("quas"),
                    add("praesentium"),
                }};
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "fugit";
                xAmzDate = "fuga";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "atque";
            }};            

            GETDescribeSnapshotSchedulesResponse res = sdk.sdk.getDescribeSnapshotSchedules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStorage

Returns account level backups storage size and provisional storage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStorageActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStorageRequest;
import org.openapis.openapi.models.operations.GETDescribeStorageResponse;
import org.openapis.openapi.models.operations.GETDescribeStorageVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStorageRequest req = new GETDescribeStorageRequest(GETDescribeStorageActionEnum.DESCRIBE_STORAGE, GETDescribeStorageVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "fugit";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "explicabo";
            }};            

            GETDescribeStorageResponse res = sdk.sdk.getDescribeStorage(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeTableRestoreStatus

Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeTableRestoreStatusActionEnum;
import org.openapis.openapi.models.operations.GETDescribeTableRestoreStatusRequest;
import org.openapis.openapi.models.operations.GETDescribeTableRestoreStatusResponse;
import org.openapis.openapi.models.operations.GETDescribeTableRestoreStatusVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeTableRestoreStatusRequest req = new GETDescribeTableRestoreStatusRequest(GETDescribeTableRestoreStatusActionEnum.DESCRIBE_TABLE_RESTORE_STATUS, GETDescribeTableRestoreStatusVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterIdentifier = "occaecati";
                marker = "atque";
                maxRecords = 92260L;
                tableRestoreRequestId = "esse";
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "veritatis";
                xAmzDate = "esse";
                xAmzSecurityToken = "quod";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "vero";
            }};            

            GETDescribeTableRestoreStatusResponse res = sdk.sdk.getDescribeTableRestoreStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeTags

<p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeTagsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeTagsRequest;
import org.openapis.openapi.models.operations.GETDescribeTagsResponse;
import org.openapis.openapi.models.operations.GETDescribeTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeTagsRequest req = new GETDescribeTagsRequest(GETDescribeTagsActionEnum.DESCRIBE_TAGS, GETDescribeTagsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "quasi";
                maxRecords = 904045L;
                resourceName = "vel";
                resourceType = "harum";
                tagKeys = new String[]{{
                    add("rerum"),
                    add("occaecati"),
                }};
                tagValues = new String[]{{
                    add("distinctio"),
                    add("eligendi"),
                }};
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "tempore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "consequatur";
            }};            

            GETDescribeTagsResponse res = sdk.sdk.getDescribeTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeUsageLimits

<p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeUsageLimitsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeUsageLimitsFeatureTypeEnum;
import org.openapis.openapi.models.operations.GETDescribeUsageLimitsRequest;
import org.openapis.openapi.models.operations.GETDescribeUsageLimitsResponse;
import org.openapis.openapi.models.operations.GETDescribeUsageLimitsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeUsageLimitsRequest req = new GETDescribeUsageLimitsRequest(GETDescribeUsageLimitsActionEnum.DESCRIBE_USAGE_LIMITS, GETDescribeUsageLimitsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterIdentifier = "quaerat";
                featureType = GETDescribeUsageLimitsFeatureTypeEnum.CROSS_REGION_DATASHARING;
                marker = "consectetur";
                maxRecords = 458139L;
                tagKeys = new String[]{{
                    add("provident"),
                    add("a"),
                    add("nulla"),
                }};
                tagValues = new String[]{{
                    add("esse"),
                    add("quasi"),
                    add("a"),
                }};
                usageLimitId = "error";
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "possimus";
                xAmzDate = "quia";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "facere";
            }};            

            GETDescribeUsageLimitsResponse res = sdk.sdk.getDescribeUsageLimits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDisableLogging

Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDisableLoggingActionEnum;
import org.openapis.openapi.models.operations.GETDisableLoggingRequest;
import org.openapis.openapi.models.operations.GETDisableLoggingResponse;
import org.openapis.openapi.models.operations.GETDisableLoggingVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDisableLoggingRequest req = new GETDisableLoggingRequest(GETDisableLoggingActionEnum.DISABLE_LOGGING, "consequuntur", GETDisableLoggingVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "similique";
                xAmzCredential = "culpa";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "earum";
            }};            

            GETDisableLoggingResponse res = sdk.sdk.getDisableLogging(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDisableSnapshotCopy

<p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDisableSnapshotCopyActionEnum;
import org.openapis.openapi.models.operations.GETDisableSnapshotCopyRequest;
import org.openapis.openapi.models.operations.GETDisableSnapshotCopyResponse;
import org.openapis.openapi.models.operations.GETDisableSnapshotCopyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDisableSnapshotCopyRequest req = new GETDisableSnapshotCopyRequest(GETDisableSnapshotCopyActionEnum.DISABLE_SNAPSHOT_COPY, "in", GETDisableSnapshotCopyVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "libero";
                xAmzCredential = "illum";
                xAmzDate = "soluta";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "sapiente";
            }};            

            GETDisableSnapshotCopyResponse res = sdk.sdk.getDisableSnapshotCopy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDisassociateDataShareConsumer

From a datashare consumer account, remove association for the specified datashare. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDisassociateDataShareConsumerActionEnum;
import org.openapis.openapi.models.operations.GETDisassociateDataShareConsumerRequest;
import org.openapis.openapi.models.operations.GETDisassociateDataShareConsumerResponse;
import org.openapis.openapi.models.operations.GETDisassociateDataShareConsumerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDisassociateDataShareConsumerRequest req = new GETDisassociateDataShareConsumerRequest(GETDisassociateDataShareConsumerActionEnum.DISASSOCIATE_DATA_SHARE_CONSUMER, "ullam", GETDisassociateDataShareConsumerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                consumerArn = "reprehenderit";
                consumerRegion = "ullam";
                disassociateEntireAccount = false;
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatum";
                xAmzDate = "qui";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "deleniti";
            }};            

            GETDisassociateDataShareConsumerResponse res = sdk.sdk.getDisassociateDataShareConsumer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnableLogging

Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETEnableLoggingActionEnum;
import org.openapis.openapi.models.operations.GETEnableLoggingLogDestinationTypeEnum;
import org.openapis.openapi.models.operations.GETEnableLoggingRequest;
import org.openapis.openapi.models.operations.GETEnableLoggingResponse;
import org.openapis.openapi.models.operations.GETEnableLoggingVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETEnableLoggingRequest req = new GETEnableLoggingRequest(GETEnableLoggingActionEnum.ENABLE_LOGGING, "dolorum", GETEnableLoggingVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                bucketName = "architecto";
                logDestinationType = GETEnableLoggingLogDestinationTypeEnum.CLOUDWATCH;
                logExports = new String[]{{
                    add("quasi"),
                    add("at"),
                    add("et"),
                    add("voluptate"),
                }};
                s3KeyPrefix = "ipsa";
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "consectetur";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "iste";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "accusantium";
            }};            

            GETEnableLoggingResponse res = sdk.sdk.getEnableLogging(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnableSnapshotCopy

Enables the automatic copy of snapshots from one region to another region for a specified cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETEnableSnapshotCopyActionEnum;
import org.openapis.openapi.models.operations.GETEnableSnapshotCopyRequest;
import org.openapis.openapi.models.operations.GETEnableSnapshotCopyResponse;
import org.openapis.openapi.models.operations.GETEnableSnapshotCopyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETEnableSnapshotCopyRequest req = new GETEnableSnapshotCopyRequest(GETEnableSnapshotCopyActionEnum.ENABLE_SNAPSHOT_COPY, "aut", "laudantium", GETEnableSnapshotCopyVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                manualSnapshotRetentionPeriod = 428796L;
                retentionPeriod = 649832L;
                snapshotCopyGrantName = "ab";
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "non";
                xAmzCredential = "voluptatem";
                xAmzDate = "dolor";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "impedit";
            }};            

            GETEnableSnapshotCopyResponse res = sdk.sdk.getEnableSnapshotCopy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETClusterCredentials

<p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETClusterCredentialsActionEnum;
import org.openapis.openapi.models.operations.GETGETClusterCredentialsRequest;
import org.openapis.openapi.models.operations.GETGETClusterCredentialsResponse;
import org.openapis.openapi.models.operations.GETGETClusterCredentialsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETClusterCredentialsRequest req = new GETGETClusterCredentialsRequest(GETGETClusterCredentialsActionEnum.GET_CLUSTER_CREDENTIALS, "voluptas", "aut", GETGETClusterCredentialsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                autoCreate = false;
                dbGroups = new String[]{{
                    add("dicta"),
                    add("maiores"),
                }};
                dbName = "natus";
                durationSeconds = 244651L;
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "asperiores";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GETGETClusterCredentialsResponse res = sdk.sdk.getGETClusterCredentials(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETClusterCredentialsWithIAM

<p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETClusterCredentialsWithIAMActionEnum;
import org.openapis.openapi.models.operations.GETGETClusterCredentialsWithIAMRequest;
import org.openapis.openapi.models.operations.GETGETClusterCredentialsWithIAMResponse;
import org.openapis.openapi.models.operations.GETGETClusterCredentialsWithIAMVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETClusterCredentialsWithIAMRequest req = new GETGETClusterCredentialsWithIAMRequest(GETGETClusterCredentialsWithIAMActionEnum.GET_CLUSTER_CREDENTIALS_WITH_IAM, "officia", GETGETClusterCredentialsWithIAMVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                dbName = "maxime";
                durationSeconds = 490305L;
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nemo";
                xAmzDate = "quae";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "quod";
            }};            

            GETGETClusterCredentialsWithIAMResponse res = sdk.sdk.getGETClusterCredentialsWithIAM(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETReservedNodeExchangeConfigurationOptions

Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETReservedNodeExchangeConfigurationOptionsActionEnum;
import org.openapis.openapi.models.operations.GETGETReservedNodeExchangeConfigurationOptionsActionTypeEnum;
import org.openapis.openapi.models.operations.GETGETReservedNodeExchangeConfigurationOptionsRequest;
import org.openapis.openapi.models.operations.GETGETReservedNodeExchangeConfigurationOptionsResponse;
import org.openapis.openapi.models.operations.GETGETReservedNodeExchangeConfigurationOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETReservedNodeExchangeConfigurationOptionsRequest req = new GETGETReservedNodeExchangeConfigurationOptionsRequest(GETGETReservedNodeExchangeConfigurationOptionsActionEnum.GET_RESERVED_NODE_EXCHANGE_CONFIGURATION_OPTIONS, GETGETReservedNodeExchangeConfigurationOptionsActionTypeEnum.RESTORE_CLUSTER, GETGETReservedNodeExchangeConfigurationOptionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                clusterIdentifier = "adipisci";
                marker = "fuga";
                maxRecords = 662505L;
                snapshotIdentifier = "suscipit";
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "est";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "totam";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "vel";
            }};            

            GETGETReservedNodeExchangeConfigurationOptionsResponse res = sdk.sdk.getGETReservedNodeExchangeConfigurationOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETReservedNodeExchangeOfferings

Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETReservedNodeExchangeOfferingsActionEnum;
import org.openapis.openapi.models.operations.GETGETReservedNodeExchangeOfferingsRequest;
import org.openapis.openapi.models.operations.GETGETReservedNodeExchangeOfferingsResponse;
import org.openapis.openapi.models.operations.GETGETReservedNodeExchangeOfferingsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETReservedNodeExchangeOfferingsRequest req = new GETGETReservedNodeExchangeOfferingsRequest(GETGETReservedNodeExchangeOfferingsActionEnum.GET_RESERVED_NODE_EXCHANGE_OFFERINGS, "quos", GETGETReservedNodeExchangeOfferingsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "vel";
                maxRecords = 287051L;
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "cum";
                xAmzDate = "commodi";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GETGETReservedNodeExchangeOfferingsResponse res = sdk.sdk.getGETReservedNodeExchangeOfferings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyAquaConfiguration

This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyAquaConfigurationActionEnum;
import org.openapis.openapi.models.operations.GETModifyAquaConfigurationAquaConfigurationStatusEnum;
import org.openapis.openapi.models.operations.GETModifyAquaConfigurationRequest;
import org.openapis.openapi.models.operations.GETModifyAquaConfigurationResponse;
import org.openapis.openapi.models.operations.GETModifyAquaConfigurationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyAquaConfigurationRequest req = new GETModifyAquaConfigurationRequest(GETModifyAquaConfigurationActionEnum.MODIFY_AQUA_CONFIGURATION, "nemo", GETModifyAquaConfigurationVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                aquaConfigurationStatus = GETModifyAquaConfigurationAquaConfigurationStatusEnum.AUTO;
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "cum";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "in";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "earum";
            }};            

            GETModifyAquaConfigurationResponse res = sdk.sdk.getModifyAquaConfiguration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyAuthenticationProfile

Modifies an authentication profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyAuthenticationProfileActionEnum;
import org.openapis.openapi.models.operations.GETModifyAuthenticationProfileRequest;
import org.openapis.openapi.models.operations.GETModifyAuthenticationProfileResponse;
import org.openapis.openapi.models.operations.GETModifyAuthenticationProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyAuthenticationProfileRequest req = new GETModifyAuthenticationProfileRequest(GETModifyAuthenticationProfileActionEnum.MODIFY_AUTHENTICATION_PROFILE, "numquam", "doloribus", GETModifyAuthenticationProfileVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "quidem";
                xAmzDate = "saepe";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "sunt";
            }};            

            GETModifyAuthenticationProfileResponse res = sdk.sdk.getModifyAuthenticationProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyCluster

<p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyClusterActionEnum;
import org.openapis.openapi.models.operations.GETModifyClusterRequest;
import org.openapis.openapi.models.operations.GETModifyClusterResponse;
import org.openapis.openapi.models.operations.GETModifyClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyClusterRequest req = new GETModifyClusterRequest(GETModifyClusterActionEnum.MODIFY_CLUSTER, "adipisci", GETModifyClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                allowVersionUpgrade = false;
                automatedSnapshotRetentionPeriod = 249420L;
                availabilityZone = "amet";
                availabilityZoneRelocation = false;
                clusterParameterGroupName = "beatae";
                clusterSecurityGroups = new String[]{{
                    add("a"),
                    add("debitis"),
                }};
                clusterType = "consectetur";
                clusterVersion = "corporis";
                elasticIp = "harum";
                encrypted = false;
                enhancedVpcRouting = false;
                hsmClientCertificateIdentifier = "laboriosam";
                hsmConfigurationIdentifier = "ipsa";
                kmsKeyId = "voluptates";
                maintenanceTrackName = "libero";
                manualSnapshotRetentionPeriod = 113816L;
                masterUserPassword = "accusamus";
                newClusterIdentifier = "similique";
                nodeType = "tempora";
                numberOfNodes = 132815L;
                port = 379057L;
                preferredMaintenanceWindow = "voluptas";
                publiclyAccessible = false;
                vpcSecurityGroupIds = new String[]{{
                    add("minima"),
                    add("nobis"),
                }};
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "minus";
                xAmzDate = "dolores";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "dolore";
            }};            

            GETModifyClusterResponse res = sdk.sdk.getModifyCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyClusterDbRevision

Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyClusterDbRevisionActionEnum;
import org.openapis.openapi.models.operations.GETModifyClusterDbRevisionRequest;
import org.openapis.openapi.models.operations.GETModifyClusterDbRevisionResponse;
import org.openapis.openapi.models.operations.GETModifyClusterDbRevisionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyClusterDbRevisionRequest req = new GETModifyClusterDbRevisionRequest(GETModifyClusterDbRevisionActionEnum.MODIFY_CLUSTER_DB_REVISION, "officiis", "temporibus", GETModifyClusterDbRevisionVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cum";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "nesciunt";
            }};            

            GETModifyClusterDbRevisionResponse res = sdk.sdk.getModifyClusterDbRevision(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyClusterIamRoles

<p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyClusterIamRolesActionEnum;
import org.openapis.openapi.models.operations.GETModifyClusterIamRolesRequest;
import org.openapis.openapi.models.operations.GETModifyClusterIamRolesResponse;
import org.openapis.openapi.models.operations.GETModifyClusterIamRolesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyClusterIamRolesRequest req = new GETModifyClusterIamRolesRequest(GETModifyClusterIamRolesActionEnum.MODIFY_CLUSTER_IAM_ROLES, "corrupti", GETModifyClusterIamRolesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                addIamRoles = new String[]{{
                    add("totam"),
                    add("hic"),
                    add("exercitationem"),
                    add("nobis"),
                }};
                defaultIamRoleArn = "sit";
                removeIamRoles = new String[]{{
                    add("sed"),
                    add("reiciendis"),
                    add("explicabo"),
                }};
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "voluptate";
                xAmzDate = "expedita";
                xAmzSecurityToken = "ab";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolore";
            }};            

            GETModifyClusterIamRolesResponse res = sdk.sdk.getModifyClusterIamRoles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyClusterMaintenance

Modifies the maintenance settings of a cluster.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyClusterMaintenanceActionEnum;
import org.openapis.openapi.models.operations.GETModifyClusterMaintenanceRequest;
import org.openapis.openapi.models.operations.GETModifyClusterMaintenanceResponse;
import org.openapis.openapi.models.operations.GETModifyClusterMaintenanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyClusterMaintenanceRequest req = new GETModifyClusterMaintenanceRequest(GETModifyClusterMaintenanceActionEnum.MODIFY_CLUSTER_MAINTENANCE, "sed", GETModifyClusterMaintenanceVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                deferMaintenance = false;
                deferMaintenanceDuration = 447516L;
                deferMaintenanceEndTime = OffsetDateTime.parse("2022-04-21T22:21:50.112Z");
                deferMaintenanceIdentifier = "explicabo";
                deferMaintenanceStartTime = OffsetDateTime.parse("2022-05-25T11:55:40.494Z");
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "sapiente";
                xAmzDate = "debitis";
                xAmzSecurityToken = "illo";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "perferendis";
            }};            

            GETModifyClusterMaintenanceResponse res = sdk.sdk.getModifyClusterMaintenance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyClusterSnapshot

<p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETModifyClusterSnapshotRequest;
import org.openapis.openapi.models.operations.GETModifyClusterSnapshotResponse;
import org.openapis.openapi.models.operations.GETModifyClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyClusterSnapshotRequest req = new GETModifyClusterSnapshotRequest(GETModifyClusterSnapshotActionEnum.MODIFY_CLUSTER_SNAPSHOT, "maiores", GETModifyClusterSnapshotVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                force = false;
                manualSnapshotRetentionPeriod = 274823L;
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "provident";
                xAmzCredential = "eius";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "occaecati";
            }};            

            GETModifyClusterSnapshotResponse res = sdk.sdk.getModifyClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyClusterSnapshotSchedule

Modifies a snapshot schedule for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyClusterSnapshotScheduleActionEnum;
import org.openapis.openapi.models.operations.GETModifyClusterSnapshotScheduleRequest;
import org.openapis.openapi.models.operations.GETModifyClusterSnapshotScheduleResponse;
import org.openapis.openapi.models.operations.GETModifyClusterSnapshotScheduleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyClusterSnapshotScheduleRequest req = new GETModifyClusterSnapshotScheduleRequest(GETModifyClusterSnapshotScheduleActionEnum.MODIFY_CLUSTER_SNAPSHOT_SCHEDULE, "voluptatibus", GETModifyClusterSnapshotScheduleVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                disassociateSchedule = false;
                scheduleIdentifier = "tempora";
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "reiciendis";
                xAmzDate = "ex";
                xAmzSecurityToken = "sit";
                xAmzSignature = "non";
                xAmzSignedHeaders = "officiis";
            }};            

            GETModifyClusterSnapshotScheduleResponse res = sdk.sdk.getModifyClusterSnapshotSchedule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyClusterSubnetGroup

Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyClusterSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.GETModifyClusterSubnetGroupRequest;
import org.openapis.openapi.models.operations.GETModifyClusterSubnetGroupResponse;
import org.openapis.openapi.models.operations.GETModifyClusterSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyClusterSubnetGroupRequest req = new GETModifyClusterSubnetGroupRequest(GETModifyClusterSubnetGroupActionEnum.MODIFY_CLUSTER_SUBNET_GROUP, "facilis",                 new String[]{{
                                add("incidunt"),
                                add("ipsam"),
                            }}, GETModifyClusterSubnetGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                description = "debitis";
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "sit";
                xAmzCredential = "nobis";
                xAmzDate = "error";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "recusandae";
            }};            

            GETModifyClusterSubnetGroupResponse res = sdk.sdk.getModifyClusterSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyEndpointAccess

Modifies a Redshift-managed VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.GETModifyEndpointAccessRequest;
import org.openapis.openapi.models.operations.GETModifyEndpointAccessResponse;
import org.openapis.openapi.models.operations.GETModifyEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyEndpointAccessRequest req = new GETModifyEndpointAccessRequest(GETModifyEndpointAccessActionEnum.MODIFY_ENDPOINT_ACCESS, "nulla", GETModifyEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                vpcSecurityGroupIds = new String[]{{
                    add("aperiam"),
                }};
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veniam";
                xAmzDate = "in";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "laudantium";
            }};            

            GETModifyEndpointAccessResponse res = sdk.sdk.getModifyEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyEventSubscription

Modifies an existing Amazon Redshift event notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionRequest;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionResponse;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyEventSubscriptionRequest req = new GETModifyEventSubscriptionRequest(GETModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, "praesentium", GETModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                enabled = false;
                eventCategories = new String[]{{
                    add("laboriosam"),
                    add("dolorum"),
                    add("voluptatum"),
                }};
                severity = "error";
                snsTopicArn = "hic";
                sourceIds = new String[]{{
                    add("debitis"),
                    add("neque"),
                    add("dolorum"),
                }};
                sourceType = "nostrum";
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "corrupti";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "fugit";
            }};            

            GETModifyEventSubscriptionResponse res = sdk.sdk.getModifyEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifySnapshotCopyRetentionPeriod

Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifySnapshotCopyRetentionPeriodActionEnum;
import org.openapis.openapi.models.operations.GETModifySnapshotCopyRetentionPeriodRequest;
import org.openapis.openapi.models.operations.GETModifySnapshotCopyRetentionPeriodResponse;
import org.openapis.openapi.models.operations.GETModifySnapshotCopyRetentionPeriodVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifySnapshotCopyRetentionPeriodRequest req = new GETModifySnapshotCopyRetentionPeriodRequest(GETModifySnapshotCopyRetentionPeriodActionEnum.MODIFY_SNAPSHOT_COPY_RETENTION_PERIOD, "fugiat", 30235L, GETModifySnapshotCopyRetentionPeriodVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                manual = false;
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "magnam";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "sit";
            }};            

            GETModifySnapshotCopyRetentionPeriodResponse res = sdk.sdk.getModifySnapshotCopyRetentionPeriod(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifySnapshotSchedule

Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifySnapshotScheduleActionEnum;
import org.openapis.openapi.models.operations.GETModifySnapshotScheduleRequest;
import org.openapis.openapi.models.operations.GETModifySnapshotScheduleResponse;
import org.openapis.openapi.models.operations.GETModifySnapshotScheduleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifySnapshotScheduleRequest req = new GETModifySnapshotScheduleRequest(GETModifySnapshotScheduleActionEnum.MODIFY_SNAPSHOT_SCHEDULE,                 new String[]{{
                                add("repudiandae"),
                                add("corporis"),
                                add("et"),
                            }}, "blanditiis", GETModifySnapshotScheduleVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sed";
                xAmzCredential = "sit";
                xAmzDate = "vel";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "error";
            }};            

            GETModifySnapshotScheduleResponse res = sdk.sdk.getModifySnapshotSchedule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyUsageLimit

Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyUsageLimitActionEnum;
import org.openapis.openapi.models.operations.GETModifyUsageLimitBreachActionEnum;
import org.openapis.openapi.models.operations.GETModifyUsageLimitRequest;
import org.openapis.openapi.models.operations.GETModifyUsageLimitResponse;
import org.openapis.openapi.models.operations.GETModifyUsageLimitVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyUsageLimitRequest req = new GETModifyUsageLimitRequest(GETModifyUsageLimitActionEnum.MODIFY_USAGE_LIMIT, "incidunt", GETModifyUsageLimitVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                amount = 968865L;
                breachAction = GETModifyUsageLimitBreachActionEnum.LOG;
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "architecto";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "labore";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "atque";
            }};            

            GETModifyUsageLimitResponse res = sdk.sdk.getModifyUsageLimit(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPauseCluster

Pauses a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPauseClusterActionEnum;
import org.openapis.openapi.models.operations.GETPauseClusterRequest;
import org.openapis.openapi.models.operations.GETPauseClusterResponse;
import org.openapis.openapi.models.operations.GETPauseClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPauseClusterRequest req = new GETPauseClusterRequest(GETPauseClusterActionEnum.PAUSE_CLUSTER, "nam", GETPauseClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "alias";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "unde";
            }};            

            GETPauseClusterResponse res = sdk.sdk.getPauseCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPurchaseReservedNodeOffering

<p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPurchaseReservedNodeOfferingActionEnum;
import org.openapis.openapi.models.operations.GETPurchaseReservedNodeOfferingRequest;
import org.openapis.openapi.models.operations.GETPurchaseReservedNodeOfferingResponse;
import org.openapis.openapi.models.operations.GETPurchaseReservedNodeOfferingVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPurchaseReservedNodeOfferingRequest req = new GETPurchaseReservedNodeOfferingRequest(GETPurchaseReservedNodeOfferingActionEnum.PURCHASE_RESERVED_NODE_OFFERING, "provident", GETPurchaseReservedNodeOfferingVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                nodeCount = 833819L;
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "perferendis";
                xAmzDate = "est";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "facere";
            }};            

            GETPurchaseReservedNodeOfferingResponse res = sdk.sdk.getPurchaseReservedNodeOffering(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRebootCluster

Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRebootClusterActionEnum;
import org.openapis.openapi.models.operations.GETRebootClusterRequest;
import org.openapis.openapi.models.operations.GETRebootClusterResponse;
import org.openapis.openapi.models.operations.GETRebootClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRebootClusterRequest req = new GETRebootClusterRequest(GETRebootClusterActionEnum.REBOOT_CLUSTER, "praesentium", GETRebootClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "voluptatem";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "atque";
            }};            

            GETRebootClusterResponse res = sdk.sdk.getRebootCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRejectDataShare

From a datashare consumer account, rejects the specified datashare.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRejectDataShareActionEnum;
import org.openapis.openapi.models.operations.GETRejectDataShareRequest;
import org.openapis.openapi.models.operations.GETRejectDataShareResponse;
import org.openapis.openapi.models.operations.GETRejectDataShareVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRejectDataShareRequest req = new GETRejectDataShareRequest(GETRejectDataShareActionEnum.REJECT_DATA_SHARE, "asperiores", GETRejectDataShareVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "quidem";
                xAmzDate = "maxime";
                xAmzSecurityToken = "et";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "amet";
            }};            

            GETRejectDataShareResponse res = sdk.sdk.getRejectDataShare(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResizeCluster

<p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETResizeClusterActionEnum;
import org.openapis.openapi.models.operations.GETResizeClusterRequest;
import org.openapis.openapi.models.operations.GETResizeClusterResponse;
import org.openapis.openapi.models.operations.GETResizeClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETResizeClusterRequest req = new GETResizeClusterRequest(GETResizeClusterActionEnum.RESIZE_CLUSTER, "ea", GETResizeClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                classic = false;
                clusterType = "atque";
                nodeType = "error";
                numberOfNodes = 887265L;
                reservedNodeId = "officiis";
                targetReservedNodeOfferingId = "accusamus";
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "minima";
                xAmzCredential = "aspernatur";
                xAmzDate = "ex";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "at";
            }};            

            GETResizeClusterResponse res = sdk.sdk.getResizeCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRestoreFromClusterSnapshot

<p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRestoreFromClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETRestoreFromClusterSnapshotAquaConfigurationStatusEnum;
import org.openapis.openapi.models.operations.GETRestoreFromClusterSnapshotRequest;
import org.openapis.openapi.models.operations.GETRestoreFromClusterSnapshotResponse;
import org.openapis.openapi.models.operations.GETRestoreFromClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRestoreFromClusterSnapshotRequest req = new GETRestoreFromClusterSnapshotRequest(GETRestoreFromClusterSnapshotActionEnum.RESTORE_FROM_CLUSTER_SNAPSHOT, "blanditiis", GETRestoreFromClusterSnapshotVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                additionalInfo = "suscipit";
                allowVersionUpgrade = false;
                aquaConfigurationStatus = GETRestoreFromClusterSnapshotAquaConfigurationStatusEnum.AUTO;
                automatedSnapshotRetentionPeriod = 542129L;
                availabilityZone = "atque";
                availabilityZoneRelocation = false;
                clusterParameterGroupName = "sunt";
                clusterSecurityGroups = new String[]{{
                    add("dolorum"),
                    add("repellendus"),
                    add("labore"),
                    add("reiciendis"),
                }};
                clusterSubnetGroupName = "doloremque";
                defaultIamRoleArn = "repudiandae";
                elasticIp = "dicta";
                encrypted = false;
                enhancedVpcRouting = false;
                hsmClientCertificateIdentifier = "accusantium";
                hsmConfigurationIdentifier = "beatae";
                iamRoles = new String[]{{
                    add("enim"),
                }};
                kmsKeyId = "laboriosam";
                maintenanceTrackName = "velit";
                manualSnapshotRetentionPeriod = 952143L;
                nodeType = "molestias";
                numberOfNodes = 300029L;
                ownerAccount = "saepe";
                port = 160467L;
                preferredMaintenanceWindow = "occaecati";
                publiclyAccessible = false;
                reservedNodeId = "officiis";
                snapshotArn = "perspiciatis";
                snapshotClusterIdentifier = "in";
                snapshotIdentifier = "adipisci";
                snapshotScheduleIdentifier = "eveniet";
                targetReservedNodeOfferingId = "occaecati";
                vpcSecurityGroupIds = new String[]{{
                    add("fugit"),
                }};
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "quis";
                xAmzCredential = "reprehenderit";
                xAmzDate = "error";
                xAmzSecurityToken = "illo";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "quidem";
            }};            

            GETRestoreFromClusterSnapshotResponse res = sdk.sdk.getRestoreFromClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRestoreTableFromClusterSnapshot

<p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRestoreTableFromClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETRestoreTableFromClusterSnapshotRequest;
import org.openapis.openapi.models.operations.GETRestoreTableFromClusterSnapshotResponse;
import org.openapis.openapi.models.operations.GETRestoreTableFromClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRestoreTableFromClusterSnapshotRequest req = new GETRestoreTableFromClusterSnapshotRequest(GETRestoreTableFromClusterSnapshotActionEnum.RESTORE_TABLE_FROM_CLUSTER_SNAPSHOT, "non", "vero", "doloremque", "iure", "ipsa", GETRestoreTableFromClusterSnapshotVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                enableCaseSensitiveIdentifier = false;
                sourceSchemaName = "totam";
                targetDatabaseName = "quae";
                targetSchemaName = "molestiae";
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "qui";
                xAmzCredential = "cum";
                xAmzDate = "iure";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "laborum";
            }};            

            GETRestoreTableFromClusterSnapshotResponse res = sdk.sdk.getRestoreTableFromClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResumeCluster

Resumes a paused cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETResumeClusterActionEnum;
import org.openapis.openapi.models.operations.GETResumeClusterRequest;
import org.openapis.openapi.models.operations.GETResumeClusterResponse;
import org.openapis.openapi.models.operations.GETResumeClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETResumeClusterRequest req = new GETResumeClusterRequest(GETResumeClusterActionEnum.RESUME_CLUSTER, "voluptatum", GETResumeClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "ad";
                xAmzDate = "repellat";
                xAmzSecurityToken = "alias";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            GETResumeClusterResponse res = sdk.sdk.getResumeCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRevokeClusterSecurityGroupIngress

Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRevokeClusterSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.GETRevokeClusterSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.GETRevokeClusterSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.GETRevokeClusterSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRevokeClusterSecurityGroupIngressRequest req = new GETRevokeClusterSecurityGroupIngressRequest(GETRevokeClusterSecurityGroupIngressActionEnum.REVOKE_CLUSTER_SECURITY_GROUP_INGRESS, "mollitia", GETRevokeClusterSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                cidrip = "voluptas";
                ec2SecurityGroupName = "alias";
                ec2SecurityGroupOwnerId = "maiores";
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "id";
                xAmzDate = "minima";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "nesciunt";
            }};            

            GETRevokeClusterSecurityGroupIngressResponse res = sdk.sdk.getRevokeClusterSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRevokeEndpointAccess

Revokes access to a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRevokeEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.GETRevokeEndpointAccessRequest;
import org.openapis.openapi.models.operations.GETRevokeEndpointAccessResponse;
import org.openapis.openapi.models.operations.GETRevokeEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRevokeEndpointAccessRequest req = new GETRevokeEndpointAccessRequest(GETRevokeEndpointAccessActionEnum.REVOKE_ENDPOINT_ACCESS, GETRevokeEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                account = "recusandae";
                clusterIdentifier = "omnis";
                force = false;
                vpcIds = new String[]{{
                    add("molestiae"),
                    add("ex"),
                }};
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "adipisci";
                xAmzDate = "debitis";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "nemo";
            }};            

            GETRevokeEndpointAccessResponse res = sdk.sdk.getRevokeEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRevokeSnapshotAccess

<p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRevokeSnapshotAccessActionEnum;
import org.openapis.openapi.models.operations.GETRevokeSnapshotAccessRequest;
import org.openapis.openapi.models.operations.GETRevokeSnapshotAccessResponse;
import org.openapis.openapi.models.operations.GETRevokeSnapshotAccessVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRevokeSnapshotAccessRequest req = new GETRevokeSnapshotAccessRequest("esse", GETRevokeSnapshotAccessActionEnum.REVOKE_SNAPSHOT_ACCESS, GETRevokeSnapshotAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                snapshotArn = "provident";
                snapshotClusterIdentifier = "quis";
                snapshotIdentifier = "eum";
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "provident";
                xAmzCredential = "aspernatur";
                xAmzDate = "ullam";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "nostrum";
            }};            

            GETRevokeSnapshotAccessResponse res = sdk.sdk.getRevokeSnapshotAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRotateEncryptionKey

Rotates the encryption keys for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRotateEncryptionKeyActionEnum;
import org.openapis.openapi.models.operations.GETRotateEncryptionKeyRequest;
import org.openapis.openapi.models.operations.GETRotateEncryptionKeyResponse;
import org.openapis.openapi.models.operations.GETRotateEncryptionKeyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRotateEncryptionKeyRequest req = new GETRotateEncryptionKeyRequest(GETRotateEncryptionKeyActionEnum.ROTATE_ENCRYPTION_KEY, "provident", GETRotateEncryptionKeyVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "animi";
                xAmzCredential = "ex";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "doloribus";
            }};            

            GETRotateEncryptionKeyResponse res = sdk.sdk.getRotateEncryptionKey(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdatePartnerStatus

Updates the status of a partner integration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdatePartnerStatusActionEnum;
import org.openapis.openapi.models.operations.GETUpdatePartnerStatusRequest;
import org.openapis.openapi.models.operations.GETUpdatePartnerStatusResponse;
import org.openapis.openapi.models.operations.GETUpdatePartnerStatusStatusEnum;
import org.openapis.openapi.models.operations.GETUpdatePartnerStatusVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdatePartnerStatusRequest req = new GETUpdatePartnerStatusRequest("in", GETUpdatePartnerStatusActionEnum.UPDATE_PARTNER_STATUS, "nam", "earum", "officia", GETUpdatePartnerStatusStatusEnum.RUNTIME_FAILURE, GETUpdatePartnerStatusVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                statusMessage = "placeat";
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "molestias";
                xAmzDate = "officiis";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "vitae";
            }};            

            GETUpdatePartnerStatusResponse res = sdk.sdk.getUpdatePartnerStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAcceptReservedNodeExchange

Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAcceptReservedNodeExchangeActionEnum;
import org.openapis.openapi.models.operations.POSTAcceptReservedNodeExchangeRequest;
import org.openapis.openapi.models.operations.POSTAcceptReservedNodeExchangeResponse;
import org.openapis.openapi.models.operations.POSTAcceptReservedNodeExchangeVersionEnum;
import org.openapis.openapi.models.shared.AcceptReservedNodeExchangeInputMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAcceptReservedNodeExchangeRequest req = new POSTAcceptReservedNodeExchangeRequest(POSTAcceptReservedNodeExchangeActionEnum.ACCEPT_RESERVED_NODE_EXCHANGE, POSTAcceptReservedNodeExchangeVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "tempora".getBytes();
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "fugit";
                xAmzDate = "cumque";
                xAmzSecurityToken = "quae";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "velit";
            }};            

            POSTAcceptReservedNodeExchangeResponse res = sdk.sdk.postAcceptReservedNodeExchange(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddPartner

Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddPartnerActionEnum;
import org.openapis.openapi.models.operations.POSTAddPartnerRequest;
import org.openapis.openapi.models.operations.POSTAddPartnerResponse;
import org.openapis.openapi.models.operations.POSTAddPartnerVersionEnum;
import org.openapis.openapi.models.shared.PartnerIntegrationInputMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddPartnerRequest req = new POSTAddPartnerRequest(POSTAddPartnerActionEnum.ADD_PARTNER, POSTAddPartnerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "eum".getBytes();
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "rem";
                xAmzCredential = "at";
                xAmzDate = "impedit";
                xAmzSecurityToken = "eos";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "eum";
            }};            

            POSTAddPartnerResponse res = sdk.sdk.postAddPartner(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssociateDataShareConsumer

From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAssociateDataShareConsumerActionEnum;
import org.openapis.openapi.models.operations.POSTAssociateDataShareConsumerRequest;
import org.openapis.openapi.models.operations.POSTAssociateDataShareConsumerResponse;
import org.openapis.openapi.models.operations.POSTAssociateDataShareConsumerVersionEnum;
import org.openapis.openapi.models.shared.AssociateDataShareConsumerMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAssociateDataShareConsumerRequest req = new POSTAssociateDataShareConsumerRequest(POSTAssociateDataShareConsumerActionEnum.ASSOCIATE_DATA_SHARE_CONSUMER, POSTAssociateDataShareConsumerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "minima".getBytes();
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "provident";
                xAmzDate = "earum";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "illum";
            }};            

            POSTAssociateDataShareConsumerResponse res = sdk.sdk.postAssociateDataShareConsumer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthorizeClusterSecurityGroupIngress

<p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAuthorizeClusterSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.POSTAuthorizeClusterSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.POSTAuthorizeClusterSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.POSTAuthorizeClusterSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.AuthorizeClusterSecurityGroupIngressMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAuthorizeClusterSecurityGroupIngressRequest req = new POSTAuthorizeClusterSecurityGroupIngressRequest(POSTAuthorizeClusterSecurityGroupIngressActionEnum.AUTHORIZE_CLUSTER_SECURITY_GROUP_INGRESS, POSTAuthorizeClusterSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "earum".getBytes();
                xAmzAlgorithm = "perspiciatis";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "debitis";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "porro";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "dolorem";
            }};            

            POSTAuthorizeClusterSecurityGroupIngressResponse res = sdk.sdk.postAuthorizeClusterSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthorizeDataShare

From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAuthorizeDataShareActionEnum;
import org.openapis.openapi.models.operations.POSTAuthorizeDataShareRequest;
import org.openapis.openapi.models.operations.POSTAuthorizeDataShareResponse;
import org.openapis.openapi.models.operations.POSTAuthorizeDataShareVersionEnum;
import org.openapis.openapi.models.shared.AuthorizeDataShareMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAuthorizeDataShareRequest req = new POSTAuthorizeDataShareRequest(POSTAuthorizeDataShareActionEnum.AUTHORIZE_DATA_SHARE, POSTAuthorizeDataShareVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "cumque".getBytes();
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "animi";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "quasi";
            }};            

            POSTAuthorizeDataShareResponse res = sdk.sdk.postAuthorizeDataShare(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthorizeEndpointAccess

Grants access to a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAuthorizeEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.POSTAuthorizeEndpointAccessRequest;
import org.openapis.openapi.models.operations.POSTAuthorizeEndpointAccessResponse;
import org.openapis.openapi.models.operations.POSTAuthorizeEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.AuthorizeEndpointAccessMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAuthorizeEndpointAccessRequest req = new POSTAuthorizeEndpointAccessRequest(POSTAuthorizeEndpointAccessActionEnum.AUTHORIZE_ENDPOINT_ACCESS, POSTAuthorizeEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "ducimus".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "suscipit";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "doloribus";
            }};            

            POSTAuthorizeEndpointAccessResponse res = sdk.sdk.postAuthorizeEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthorizeSnapshotAccess

<p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAuthorizeSnapshotAccessActionEnum;
import org.openapis.openapi.models.operations.POSTAuthorizeSnapshotAccessRequest;
import org.openapis.openapi.models.operations.POSTAuthorizeSnapshotAccessResponse;
import org.openapis.openapi.models.operations.POSTAuthorizeSnapshotAccessVersionEnum;
import org.openapis.openapi.models.shared.AuthorizeSnapshotAccessMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAuthorizeSnapshotAccessRequest req = new POSTAuthorizeSnapshotAccessRequest(POSTAuthorizeSnapshotAccessActionEnum.AUTHORIZE_SNAPSHOT_ACCESS, POSTAuthorizeSnapshotAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "necessitatibus".getBytes();
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "nihil";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "esse";
            }};            

            POSTAuthorizeSnapshotAccessResponse res = sdk.sdk.postAuthorizeSnapshotAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBatchDeleteClusterSnapshots

Deletes a set of cluster snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTBatchDeleteClusterSnapshotsActionEnum;
import org.openapis.openapi.models.operations.POSTBatchDeleteClusterSnapshotsRequest;
import org.openapis.openapi.models.operations.POSTBatchDeleteClusterSnapshotsResponse;
import org.openapis.openapi.models.operations.POSTBatchDeleteClusterSnapshotsVersionEnum;
import org.openapis.openapi.models.shared.BatchDeleteClusterSnapshotsRequest;
import org.openapis.openapi.models.shared.DeleteClusterSnapshotMessageList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTBatchDeleteClusterSnapshotsRequest req = new POSTBatchDeleteClusterSnapshotsRequest(POSTBatchDeleteClusterSnapshotsActionEnum.BATCH_DELETE_CLUSTER_SNAPSHOTS, POSTBatchDeleteClusterSnapshotsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "maiores".getBytes();
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "vel";
                xAmzCredential = "architecto";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "odio";
            }};            

            POSTBatchDeleteClusterSnapshotsResponse res = sdk.sdk.postBatchDeleteClusterSnapshots(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBatchModifyClusterSnapshots

Modifies the settings for a set of cluster snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTBatchModifyClusterSnapshotsActionEnum;
import org.openapis.openapi.models.operations.POSTBatchModifyClusterSnapshotsRequest;
import org.openapis.openapi.models.operations.POSTBatchModifyClusterSnapshotsResponse;
import org.openapis.openapi.models.operations.POSTBatchModifyClusterSnapshotsVersionEnum;
import org.openapis.openapi.models.shared.BatchModifyClusterSnapshotsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTBatchModifyClusterSnapshotsRequest req = new POSTBatchModifyClusterSnapshotsRequest(POSTBatchModifyClusterSnapshotsActionEnum.BATCH_MODIFY_CLUSTER_SNAPSHOTS, POSTBatchModifyClusterSnapshotsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "aliquid";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "nostrum";
            }};            

            POSTBatchModifyClusterSnapshotsResponse res = sdk.sdk.postBatchModifyClusterSnapshots(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCancelResize

Cancels a resize operation for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCancelResizeActionEnum;
import org.openapis.openapi.models.operations.POSTCancelResizeRequest;
import org.openapis.openapi.models.operations.POSTCancelResizeResponse;
import org.openapis.openapi.models.operations.POSTCancelResizeVersionEnum;
import org.openapis.openapi.models.shared.CancelResizeMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCancelResizeRequest req = new POSTCancelResizeRequest(POSTCancelResizeActionEnum.CANCEL_RESIZE, POSTCancelResizeVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "expedita".getBytes();
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "officia";
                xAmzCredential = "suscipit";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "voluptas";
            }};            

            POSTCancelResizeResponse res = sdk.sdk.postCancelResize(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCopyClusterSnapshot

<p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCopyClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTCopyClusterSnapshotRequest;
import org.openapis.openapi.models.operations.POSTCopyClusterSnapshotResponse;
import org.openapis.openapi.models.operations.POSTCopyClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.CopyClusterSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyClusterSnapshotRequest req = new POSTCopyClusterSnapshotRequest(POSTCopyClusterSnapshotActionEnum.COPY_CLUSTER_SNAPSHOT, POSTCopyClusterSnapshotVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "id".getBytes();
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "error";
                xAmzCredential = "possimus";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "libero";
            }};            

            POSTCopyClusterSnapshotResponse res = sdk.sdk.postCopyClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateAuthenticationProfile

Creates an authentication profile with the specified parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateAuthenticationProfileActionEnum;
import org.openapis.openapi.models.operations.POSTCreateAuthenticationProfileRequest;
import org.openapis.openapi.models.operations.POSTCreateAuthenticationProfileResponse;
import org.openapis.openapi.models.operations.POSTCreateAuthenticationProfileVersionEnum;
import org.openapis.openapi.models.shared.CreateAuthenticationProfileMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateAuthenticationProfileRequest req = new POSTCreateAuthenticationProfileRequest(POSTCreateAuthenticationProfileActionEnum.CREATE_AUTHENTICATION_PROFILE, POSTCreateAuthenticationProfileVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "deleniti".getBytes();
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "repellendus";
                xAmzDate = "ex";
                xAmzSecurityToken = "quo";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "ut";
            }};            

            POSTCreateAuthenticationProfileResponse res = sdk.sdk.postCreateAuthenticationProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateCluster

<p>Creates a new cluster with the specified parameters.</p> <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateClusterActionEnum;
import org.openapis.openapi.models.operations.POSTCreateClusterRequest;
import org.openapis.openapi.models.operations.POSTCreateClusterResponse;
import org.openapis.openapi.models.operations.POSTCreateClusterVersionEnum;
import org.openapis.openapi.models.shared.AquaConfigurationStatusEnum;
import org.openapis.openapi.models.shared.CreateClusterMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateClusterRequest req = new POSTCreateClusterRequest(POSTCreateClusterActionEnum.CREATE_CLUSTER, POSTCreateClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "expedita".getBytes();
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "cum";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "omnis";
            }};            

            POSTCreateClusterResponse res = sdk.sdk.postCreateCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateClusterParameterGroup

<p>Creates an Amazon Redshift parameter group.</p> <p>Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p> <p>Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateClusterParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateClusterParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateClusterParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateClusterParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateClusterParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateClusterParameterGroupRequest req = new POSTCreateClusterParameterGroupRequest(POSTCreateClusterParameterGroupActionEnum.CREATE_CLUSTER_PARAMETER_GROUP, POSTCreateClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "rerum".getBytes();
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "voluptatem";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "fuga";
            }};            

            POSTCreateClusterParameterGroupResponse res = sdk.sdk.postCreateClusterParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateClusterSecurityGroup

<p>Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateClusterSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateClusterSecurityGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateClusterSecurityGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateClusterSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateClusterSecurityGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateClusterSecurityGroupRequest req = new POSTCreateClusterSecurityGroupRequest(POSTCreateClusterSecurityGroupActionEnum.CREATE_CLUSTER_SECURITY_GROUP, POSTCreateClusterSecurityGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "debitis".getBytes();
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "alias";
                xAmzCredential = "deleniti";
                xAmzDate = "earum";
                xAmzSecurityToken = "ex";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "rem";
            }};            

            POSTCreateClusterSecurityGroupResponse res = sdk.sdk.postCreateClusterSecurityGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateClusterSnapshot

<p>Creates a manual snapshot of the specified cluster. The cluster must be in the <code>available</code> state. </p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTCreateClusterSnapshotRequest;
import org.openapis.openapi.models.operations.POSTCreateClusterSnapshotResponse;
import org.openapis.openapi.models.operations.POSTCreateClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.CreateClusterSnapshotMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateClusterSnapshotRequest req = new POSTCreateClusterSnapshotRequest(POSTCreateClusterSnapshotActionEnum.CREATE_CLUSTER_SNAPSHOT, POSTCreateClusterSnapshotVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "nemo".getBytes();
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ullam";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "illum";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "impedit";
            }};            

            POSTCreateClusterSnapshotResponse res = sdk.sdk.postCreateClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateClusterSubnetGroup

<p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.</p> <p> For information about subnet groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateClusterSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateClusterSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateClusterSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateClusterSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateClusterSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateClusterSubnetGroupRequest req = new POSTCreateClusterSubnetGroupRequest(POSTCreateClusterSubnetGroupActionEnum.CREATE_CLUSTER_SUBNET_GROUP, POSTCreateClusterSubnetGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "nam".getBytes();
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "dolor";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "veritatis";
            }};            

            POSTCreateClusterSubnetGroupResponse res = sdk.sdk.postCreateClusterSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateEndpointAccess

Creates a Redshift-managed VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.POSTCreateEndpointAccessRequest;
import org.openapis.openapi.models.operations.POSTCreateEndpointAccessResponse;
import org.openapis.openapi.models.operations.POSTCreateEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.CreateEndpointAccessMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateEndpointAccessRequest req = new POSTCreateEndpointAccessRequest(POSTCreateEndpointAccessActionEnum.CREATE_ENDPOINT_ACCESS, POSTCreateEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "sit";
                xAmzDate = "modi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "laudantium";
            }};            

            POSTCreateEndpointAccessResponse res = sdk.sdk.postCreateEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateEventSubscription

<p>Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters.</p> <p>If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.CreateEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateEventSubscriptionRequest req = new POSTCreateEventSubscriptionRequest(POSTCreateEventSubscriptionActionEnum.CREATE_EVENT_SUBSCRIPTION, POSTCreateEventSubscriptionVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "consequuntur";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "quas";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "impedit";
            }};            

            POSTCreateEventSubscriptionResponse res = sdk.sdk.postCreateEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateHsmClientCertificate

<p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.</p> <p>The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateHsmClientCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTCreateHsmClientCertificateRequest;
import org.openapis.openapi.models.operations.POSTCreateHsmClientCertificateResponse;
import org.openapis.openapi.models.operations.POSTCreateHsmClientCertificateVersionEnum;
import org.openapis.openapi.models.shared.CreateHsmClientCertificateMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateHsmClientCertificateRequest req = new POSTCreateHsmClientCertificateRequest(POSTCreateHsmClientCertificateActionEnum.CREATE_HSM_CLIENT_CERTIFICATE, POSTCreateHsmClientCertificateVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "veniam";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "vel";
            }};            

            POSTCreateHsmClientCertificateResponse res = sdk.sdk.postCreateHsmClientCertificate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateHsmConfiguration

<p>Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM.</p> <p>In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateHsmConfigurationActionEnum;
import org.openapis.openapi.models.operations.POSTCreateHsmConfigurationRequest;
import org.openapis.openapi.models.operations.POSTCreateHsmConfigurationResponse;
import org.openapis.openapi.models.operations.POSTCreateHsmConfigurationVersionEnum;
import org.openapis.openapi.models.shared.CreateHsmConfigurationMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateHsmConfigurationRequest req = new POSTCreateHsmConfigurationRequest(POSTCreateHsmConfigurationActionEnum.CREATE_HSM_CONFIGURATION, POSTCreateHsmConfigurationVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "magnam".getBytes();
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "ab";
                xAmzCredential = "porro";
                xAmzDate = "autem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "recusandae";
            }};            

            POSTCreateHsmConfigurationResponse res = sdk.sdk.postCreateHsmConfiguration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateScheduledAction

Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateScheduledActionActionEnum;
import org.openapis.openapi.models.operations.POSTCreateScheduledActionRequest;
import org.openapis.openapi.models.operations.POSTCreateScheduledActionResponse;
import org.openapis.openapi.models.operations.POSTCreateScheduledActionVersionEnum;
import org.openapis.openapi.models.shared.CreateScheduledActionMessage;
import org.openapis.openapi.models.shared.PauseClusterMessage;
import org.openapis.openapi.models.shared.ResizeClusterMessage;
import org.openapis.openapi.models.shared.ResumeClusterMessage;
import org.openapis.openapi.models.shared.ScheduledActionType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateScheduledActionRequest req = new POSTCreateScheduledActionRequest(POSTCreateScheduledActionActionEnum.CREATE_SCHEDULED_ACTION, POSTCreateScheduledActionVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "voluptatem".getBytes();
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "quasi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "at";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "est";
            }};            

            POSTCreateScheduledActionResponse res = sdk.sdk.postCreateScheduledAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateSnapshotCopyGrant

<p>Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key from Key Management Service (KMS) to encrypt copied snapshots in a destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateSnapshotCopyGrantActionEnum;
import org.openapis.openapi.models.operations.POSTCreateSnapshotCopyGrantRequest;
import org.openapis.openapi.models.operations.POSTCreateSnapshotCopyGrantResponse;
import org.openapis.openapi.models.operations.POSTCreateSnapshotCopyGrantVersionEnum;
import org.openapis.openapi.models.shared.CreateSnapshotCopyGrantMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateSnapshotCopyGrantRequest req = new POSTCreateSnapshotCopyGrantRequest(POSTCreateSnapshotCopyGrantActionEnum.CREATE_SNAPSHOT_COPY_GRANT, POSTCreateSnapshotCopyGrantVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "sequi".getBytes();
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "optio";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "blanditiis";
            }};            

            POSTCreateSnapshotCopyGrantResponse res = sdk.sdk.postCreateSnapshotCopyGrant(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateSnapshotSchedule

Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateSnapshotScheduleActionEnum;
import org.openapis.openapi.models.operations.POSTCreateSnapshotScheduleRequest;
import org.openapis.openapi.models.operations.POSTCreateSnapshotScheduleResponse;
import org.openapis.openapi.models.operations.POSTCreateSnapshotScheduleVersionEnum;
import org.openapis.openapi.models.shared.CreateSnapshotScheduleMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateSnapshotScheduleRequest req = new POSTCreateSnapshotScheduleRequest(POSTCreateSnapshotScheduleActionEnum.CREATE_SNAPSHOT_SCHEDULE, POSTCreateSnapshotScheduleVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quos";
                xAmzDate = "eius";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "nesciunt";
            }};            

            POSTCreateSnapshotScheduleResponse res = sdk.sdk.postCreateSnapshotSchedule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateTags

<p>Adds tags to a cluster.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail.</p> <p>If you specify a key that already exists for the resource, the value for that key will be updated with the new value.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateTagsActionEnum;
import org.openapis.openapi.models.operations.POSTCreateTagsRequest;
import org.openapis.openapi.models.operations.POSTCreateTagsResponse;
import org.openapis.openapi.models.operations.POSTCreateTagsVersionEnum;
import org.openapis.openapi.models.shared.CreateTagsMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateTagsRequest req = new POSTCreateTagsRequest(POSTCreateTagsActionEnum.CREATE_TAGS, POSTCreateTagsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "laudantium".getBytes();
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "rem";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "consequuntur";
            }};            

            POSTCreateTagsResponse res = sdk.sdk.postCreateTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateUsageLimit

Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateUsageLimitActionEnum;
import org.openapis.openapi.models.operations.POSTCreateUsageLimitRequest;
import org.openapis.openapi.models.operations.POSTCreateUsageLimitResponse;
import org.openapis.openapi.models.operations.POSTCreateUsageLimitVersionEnum;
import org.openapis.openapi.models.shared.CreateUsageLimitMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;
import org.openapis.openapi.models.shared.UsageLimitBreachActionEnum;
import org.openapis.openapi.models.shared.UsageLimitFeatureTypeEnum;
import org.openapis.openapi.models.shared.UsageLimitLimitTypeEnum;
import org.openapis.openapi.models.shared.UsageLimitPeriodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateUsageLimitRequest req = new POSTCreateUsageLimitRequest(POSTCreateUsageLimitActionEnum.CREATE_USAGE_LIMIT, POSTCreateUsageLimitVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "aperiam".getBytes();
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "soluta";
                xAmzDate = "alias";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTCreateUsageLimitResponse res = sdk.sdk.postCreateUsageLimit(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeauthorizeDataShare

From a datashare producer account, removes authorization from the specified datashare. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeauthorizeDataShareActionEnum;
import org.openapis.openapi.models.operations.POSTDeauthorizeDataShareRequest;
import org.openapis.openapi.models.operations.POSTDeauthorizeDataShareResponse;
import org.openapis.openapi.models.operations.POSTDeauthorizeDataShareVersionEnum;
import org.openapis.openapi.models.shared.DeauthorizeDataShareMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeauthorizeDataShareRequest req = new POSTDeauthorizeDataShareRequest(POSTDeauthorizeDataShareActionEnum.DEAUTHORIZE_DATA_SHARE, POSTDeauthorizeDataShareVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "magni".getBytes();
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "accusamus";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "delectus";
            }};            

            POSTDeauthorizeDataShareResponse res = sdk.sdk.postDeauthorizeDataShare(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteAuthenticationProfile

Deletes an authentication profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteAuthenticationProfileActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteAuthenticationProfileRequest;
import org.openapis.openapi.models.operations.POSTDeleteAuthenticationProfileResponse;
import org.openapis.openapi.models.operations.POSTDeleteAuthenticationProfileVersionEnum;
import org.openapis.openapi.models.shared.DeleteAuthenticationProfileMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteAuthenticationProfileRequest req = new POSTDeleteAuthenticationProfileRequest(POSTDeleteAuthenticationProfileActionEnum.DELETE_AUTHENTICATION_PROFILE, POSTDeleteAuthenticationProfileVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "praesentium".getBytes();
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "temporibus";
                xAmzDate = "quos";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "commodi";
            }};            

            POSTDeleteAuthenticationProfileResponse res = sdk.sdk.postDeleteAuthenticationProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteCluster

<p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteClusterActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteClusterRequest;
import org.openapis.openapi.models.operations.POSTDeleteClusterResponse;
import org.openapis.openapi.models.operations.POSTDeleteClusterVersionEnum;
import org.openapis.openapi.models.shared.DeleteClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteClusterRequest req = new POSTDeleteClusterRequest(POSTDeleteClusterActionEnum.DELETE_CLUSTER, POSTDeleteClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "earum".getBytes();
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "nam";
                xAmzCredential = "vero";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "alias";
            }};            

            POSTDeleteClusterResponse res = sdk.sdk.postDeleteCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteClusterParameterGroup

<p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteClusterParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteClusterParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteClusterParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteClusterParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteClusterParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteClusterParameterGroupRequest req = new POSTDeleteClusterParameterGroupRequest(POSTDeleteClusterParameterGroupActionEnum.DELETE_CLUSTER_PARAMETER_GROUP, POSTDeleteClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "non".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "enim";
                xAmzCredential = "sint";
                xAmzDate = "nulla";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "nemo";
            }};            

            POSTDeleteClusterParameterGroupResponse res = sdk.sdk.postDeleteClusterParameterGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteClusterSecurityGroup

<p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteClusterSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteClusterSecurityGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteClusterSecurityGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteClusterSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteClusterSecurityGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteClusterSecurityGroupRequest req = new POSTDeleteClusterSecurityGroupRequest(POSTDeleteClusterSecurityGroupActionEnum.DELETE_CLUSTER_SECURITY_GROUP, POSTDeleteClusterSecurityGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "est".getBytes();
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "sint";
                xAmzCredential = "accusamus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "hic";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "asperiores";
            }};            

            POSTDeleteClusterSecurityGroupResponse res = sdk.sdk.postDeleteClusterSecurityGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteClusterSnapshot

<p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteClusterSnapshotRequest;
import org.openapis.openapi.models.operations.POSTDeleteClusterSnapshotResponse;
import org.openapis.openapi.models.operations.POSTDeleteClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.DeleteClusterSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteClusterSnapshotRequest req = new POSTDeleteClusterSnapshotRequest(POSTDeleteClusterSnapshotActionEnum.DELETE_CLUSTER_SNAPSHOT, POSTDeleteClusterSnapshotVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quae";
                xAmzDate = "minus";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "consectetur";
            }};            

            POSTDeleteClusterSnapshotResponse res = sdk.sdk.postDeleteClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteClusterSubnetGroup

Deletes the specified cluster subnet group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteClusterSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteClusterSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteClusterSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteClusterSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteClusterSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteClusterSubnetGroupRequest req = new POSTDeleteClusterSubnetGroupRequest(POSTDeleteClusterSubnetGroupActionEnum.DELETE_CLUSTER_SUBNET_GROUP, POSTDeleteClusterSubnetGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "atque".getBytes();
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "magni";
                xAmzDate = "soluta";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "dolore";
            }};            

            POSTDeleteClusterSubnetGroupResponse res = sdk.sdk.postDeleteClusterSubnetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteEndpointAccess

Deletes a Redshift-managed VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteEndpointAccessRequest;
import org.openapis.openapi.models.operations.POSTDeleteEndpointAccessResponse;
import org.openapis.openapi.models.operations.POSTDeleteEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.DeleteEndpointAccessMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteEndpointAccessRequest req = new POSTDeleteEndpointAccessRequest(POSTDeleteEndpointAccessActionEnum.DELETE_ENDPOINT_ACCESS, POSTDeleteEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "neque";
                xAmzDate = "quo";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "iure";
            }};            

            POSTDeleteEndpointAccessResponse res = sdk.sdk.postDeleteEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteEventSubscription

Deletes an Amazon Redshift event notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.DeleteEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteEventSubscriptionRequest req = new POSTDeleteEventSubscriptionRequest(POSTDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, POSTDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "voluptatibus".getBytes();
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "quibusdam";
                xAmzDate = "inventore";
                xAmzSecurityToken = "facere";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "architecto";
            }};            

            POSTDeleteEventSubscriptionResponse res = sdk.sdk.postDeleteEventSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteHsmClientCertificate

Deletes the specified HSM client certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteHsmClientCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteHsmClientCertificateRequest;
import org.openapis.openapi.models.operations.POSTDeleteHsmClientCertificateResponse;
import org.openapis.openapi.models.operations.POSTDeleteHsmClientCertificateVersionEnum;
import org.openapis.openapi.models.shared.DeleteHsmClientCertificateMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteHsmClientCertificateRequest req = new POSTDeleteHsmClientCertificateRequest(POSTDeleteHsmClientCertificateActionEnum.DELETE_HSM_CLIENT_CERTIFICATE, POSTDeleteHsmClientCertificateVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "quia".getBytes();
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "velit";
                xAmzDate = "illo";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "ea";
            }};            

            POSTDeleteHsmClientCertificateResponse res = sdk.sdk.postDeleteHsmClientCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteHsmConfiguration

Deletes the specified Amazon Redshift HSM configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteHsmConfigurationActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteHsmConfigurationRequest;
import org.openapis.openapi.models.operations.POSTDeleteHsmConfigurationResponse;
import org.openapis.openapi.models.operations.POSTDeleteHsmConfigurationVersionEnum;
import org.openapis.openapi.models.shared.DeleteHsmConfigurationMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteHsmConfigurationRequest req = new POSTDeleteHsmConfigurationRequest(POSTDeleteHsmConfigurationActionEnum.DELETE_HSM_CONFIGURATION, POSTDeleteHsmConfigurationVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "vero".getBytes();
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "eum";
                xAmzCredential = "velit";
                xAmzDate = "ut";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "dicta";
            }};            

            POSTDeleteHsmConfigurationResponse res = sdk.sdk.postDeleteHsmConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeletePartner

Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeletePartnerActionEnum;
import org.openapis.openapi.models.operations.POSTDeletePartnerRequest;
import org.openapis.openapi.models.operations.POSTDeletePartnerResponse;
import org.openapis.openapi.models.operations.POSTDeletePartnerVersionEnum;
import org.openapis.openapi.models.shared.PartnerIntegrationInputMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeletePartnerRequest req = new POSTDeletePartnerRequest(POSTDeletePartnerActionEnum.DELETE_PARTNER, POSTDeletePartnerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "voluptatibus".getBytes();
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "alias";
                xAmzDate = "nisi";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "laborum";
            }};            

            POSTDeletePartnerResponse res = sdk.sdk.postDeletePartner(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteScheduledAction

Deletes a scheduled action. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteScheduledActionActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteScheduledActionRequest;
import org.openapis.openapi.models.operations.POSTDeleteScheduledActionResponse;
import org.openapis.openapi.models.operations.POSTDeleteScheduledActionVersionEnum;
import org.openapis.openapi.models.shared.DeleteScheduledActionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteScheduledActionRequest req = new POSTDeleteScheduledActionRequest(POSTDeleteScheduledActionActionEnum.DELETE_SCHEDULED_ACTION, POSTDeleteScheduledActionVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "sit";
                xAmzCredential = "doloremque";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "officia";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "ea";
            }};            

            POSTDeleteScheduledActionResponse res = sdk.sdk.postDeleteScheduledAction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteSnapshotCopyGrant

Deletes the specified snapshot copy grant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotCopyGrantActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotCopyGrantRequest;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotCopyGrantResponse;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotCopyGrantVersionEnum;
import org.openapis.openapi.models.shared.DeleteSnapshotCopyGrantMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteSnapshotCopyGrantRequest req = new POSTDeleteSnapshotCopyGrantRequest(POSTDeleteSnapshotCopyGrantActionEnum.DELETE_SNAPSHOT_COPY_GRANT, POSTDeleteSnapshotCopyGrantVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "perspiciatis";
                xAmzDate = "expedita";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "a";
                xAmzSignedHeaders = "voluptate";
            }};            

            POSTDeleteSnapshotCopyGrantResponse res = sdk.sdk.postDeleteSnapshotCopyGrant(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteSnapshotSchedule

Deletes a snapshot schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotScheduleActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotScheduleRequest;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotScheduleResponse;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotScheduleVersionEnum;
import org.openapis.openapi.models.shared.DeleteSnapshotScheduleMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteSnapshotScheduleRequest req = new POSTDeleteSnapshotScheduleRequest(POSTDeleteSnapshotScheduleActionEnum.DELETE_SNAPSHOT_SCHEDULE, POSTDeleteSnapshotScheduleVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "unde".getBytes();
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "animi";
                xAmzCredential = "impedit";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "est";
                xAmzSignedHeaders = "error";
            }};            

            POSTDeleteSnapshotScheduleResponse res = sdk.sdk.postDeleteSnapshotSchedule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteTags

Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteTagsActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteTagsRequest;
import org.openapis.openapi.models.operations.POSTDeleteTagsResponse;
import org.openapis.openapi.models.operations.POSTDeleteTagsVersionEnum;
import org.openapis.openapi.models.shared.DeleteTagsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteTagsRequest req = new POSTDeleteTagsRequest(POSTDeleteTagsActionEnum.DELETE_TAGS, POSTDeleteTagsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "labore".getBytes();
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "vero";
                xAmzCredential = "consectetur";
                xAmzDate = "vitae";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "ad";
            }};            

            POSTDeleteTagsResponse res = sdk.sdk.postDeleteTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteUsageLimit

Deletes a usage limit from a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteUsageLimitActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteUsageLimitRequest;
import org.openapis.openapi.models.operations.POSTDeleteUsageLimitResponse;
import org.openapis.openapi.models.operations.POSTDeleteUsageLimitVersionEnum;
import org.openapis.openapi.models.shared.DeleteUsageLimitMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteUsageLimitRequest req = new POSTDeleteUsageLimitRequest(POSTDeleteUsageLimitActionEnum.DELETE_USAGE_LIMIT, POSTDeleteUsageLimitVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "iste".getBytes();
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "soluta";
                xAmzDate = "libero";
                xAmzSecurityToken = "rem";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "odio";
            }};            

            POSTDeleteUsageLimitResponse res = sdk.sdk.postDeleteUsageLimit(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAccountAttributes

Returns a list of attributes attached to an account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesRequest;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesResponse;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesVersionEnum;
import org.openapis.openapi.models.shared.DescribeAccountAttributesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAccountAttributesRequest req = new POSTDescribeAccountAttributesRequest(POSTDescribeAccountAttributesActionEnum.DESCRIBE_ACCOUNT_ATTRIBUTES, POSTDescribeAccountAttributesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "alias".getBytes();
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "vel";
                xAmzCredential = "quae";
                xAmzDate = "quae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "exercitationem";
            }};            

            POSTDescribeAccountAttributesResponse res = sdk.sdk.postDescribeAccountAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAuthenticationProfiles

Describes an authentication profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAuthenticationProfilesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAuthenticationProfilesRequest;
import org.openapis.openapi.models.operations.POSTDescribeAuthenticationProfilesResponse;
import org.openapis.openapi.models.operations.POSTDescribeAuthenticationProfilesVersionEnum;
import org.openapis.openapi.models.shared.DescribeAuthenticationProfilesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAuthenticationProfilesRequest req = new POSTDescribeAuthenticationProfilesRequest(POSTDescribeAuthenticationProfilesActionEnum.DESCRIBE_AUTHENTICATION_PROFILES, POSTDescribeAuthenticationProfilesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "et".getBytes();
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "quia";
            }};            

            POSTDescribeAuthenticationProfilesResponse res = sdk.sdk.postDescribeAuthenticationProfiles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeClusterDbRevisions

Returns an array of <code>ClusterDbRevision</code> objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeClusterDbRevisionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeClusterDbRevisionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeClusterDbRevisionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeClusterDbRevisionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeClusterDbRevisionsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeClusterDbRevisionsRequest req = new POSTDescribeClusterDbRevisionsRequest(POSTDescribeClusterDbRevisionsActionEnum.DESCRIBE_CLUSTER_DB_REVISIONS, POSTDescribeClusterDbRevisionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "omnis";
                maxRecords = "libero";
                requestBody = "dicta".getBytes();
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "libero";
                xAmzCredential = "fugiat";
                xAmzDate = "officia";
                xAmzSecurityToken = "quos";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "sit";
            }};            

            POSTDescribeClusterDbRevisionsResponse res = sdk.sdk.postDescribeClusterDbRevisions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeClusterParameterGroups

<p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeClusterParameterGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeClusterParameterGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeClusterParameterGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeClusterParameterGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeClusterParameterGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeClusterParameterGroupsRequest req = new POSTDescribeClusterParameterGroupsRequest(POSTDescribeClusterParameterGroupsActionEnum.DESCRIBE_CLUSTER_PARAMETER_GROUPS, POSTDescribeClusterParameterGroupsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "ipsa";
                maxRecords = "voluptates";
                requestBody = "inventore".getBytes();
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "totam";
                xAmzCredential = "dolore";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "autem";
            }};            

            POSTDescribeClusterParameterGroupsResponse res = sdk.sdk.postDescribeClusterParameterGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeClusterParameters

<p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeClusterParametersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeClusterParametersRequest;
import org.openapis.openapi.models.operations.POSTDescribeClusterParametersResponse;
import org.openapis.openapi.models.operations.POSTDescribeClusterParametersVersionEnum;
import org.openapis.openapi.models.shared.DescribeClusterParametersMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeClusterParametersRequest req = new POSTDescribeClusterParametersRequest(POSTDescribeClusterParametersActionEnum.DESCRIBE_CLUSTER_PARAMETERS, POSTDescribeClusterParametersVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "dolores";
                maxRecords = "assumenda";
                requestBody = "beatae".getBytes();
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "facere";
                xAmzCredential = "corrupti";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "provident";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            POSTDescribeClusterParametersResponse res = sdk.sdk.postDescribeClusterParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeClusterSecurityGroups

<p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeClusterSecurityGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeClusterSecurityGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeClusterSecurityGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeClusterSecurityGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeClusterSecurityGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeClusterSecurityGroupsRequest req = new POSTDescribeClusterSecurityGroupsRequest(POSTDescribeClusterSecurityGroupsActionEnum.DESCRIBE_CLUSTER_SECURITY_GROUPS, POSTDescribeClusterSecurityGroupsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "sint";
                maxRecords = "ea";
                requestBody = "autem".getBytes();
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "laudantium";
                xAmzDate = "corporis";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "cum";
            }};            

            POSTDescribeClusterSecurityGroupsResponse res = sdk.sdk.postDescribeClusterSecurityGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeClusterSnapshots

<p>Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by your Amazon Web Services account. No information is returned for snapshots owned by inactive Amazon Web Services accounts.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters.</p> <p>If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeClusterSnapshotsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeClusterSnapshotsRequest;
import org.openapis.openapi.models.operations.POSTDescribeClusterSnapshotsResponse;
import org.openapis.openapi.models.operations.POSTDescribeClusterSnapshotsVersionEnum;
import org.openapis.openapi.models.shared.DescribeClusterSnapshotsMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnapshotAttributeToSortByEnum;
import org.openapis.openapi.models.shared.SnapshotSortingEntityList;
import org.openapis.openapi.models.shared.SortByOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeClusterSnapshotsRequest req = new POSTDescribeClusterSnapshotsRequest(POSTDescribeClusterSnapshotsActionEnum.DESCRIBE_CLUSTER_SNAPSHOTS, POSTDescribeClusterSnapshotsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "alias";
                maxRecords = "quia";
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "accusantium";
                xAmzDate = "expedita";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "quibusdam";
            }};            

            POSTDescribeClusterSnapshotsResponse res = sdk.sdk.postDescribeClusterSnapshots(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeClusterSubnetGroups

<p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeClusterSubnetGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeClusterSubnetGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeClusterSubnetGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeClusterSubnetGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeClusterSubnetGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeClusterSubnetGroupsRequest req = new POSTDescribeClusterSubnetGroupsRequest(POSTDescribeClusterSubnetGroupsActionEnum.DESCRIBE_CLUSTER_SUBNET_GROUPS, POSTDescribeClusterSubnetGroupsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "praesentium";
                maxRecords = "odit";
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "error";
                xAmzCredential = "earum";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "ut";
            }};            

            POSTDescribeClusterSubnetGroupsResponse res = sdk.sdk.postDescribeClusterSubnetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeClusterTracks

Returns a list of all the available maintenance tracks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeClusterTracksActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeClusterTracksRequest;
import org.openapis.openapi.models.operations.POSTDescribeClusterTracksResponse;
import org.openapis.openapi.models.operations.POSTDescribeClusterTracksVersionEnum;
import org.openapis.openapi.models.shared.DescribeClusterTracksMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeClusterTracksRequest req = new POSTDescribeClusterTracksRequest(POSTDescribeClusterTracksActionEnum.DESCRIBE_CLUSTER_TRACKS, POSTDescribeClusterTracksVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "quis";
                maxRecords = "beatae";
                requestBody = "unde".getBytes();
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "cupiditate";
                xAmzDate = "fugit";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "nesciunt";
            }};            

            POSTDescribeClusterTracksResponse res = sdk.sdk.postDescribeClusterTracks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeClusterVersions

Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeClusterVersionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeClusterVersionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeClusterVersionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeClusterVersionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeClusterVersionsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeClusterVersionsRequest req = new POSTDescribeClusterVersionsRequest(POSTDescribeClusterVersionsActionEnum.DESCRIBE_CLUSTER_VERSIONS, POSTDescribeClusterVersionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "officia";
                maxRecords = "dignissimos";
                requestBody = "optio".getBytes();
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "qui";
                xAmzDate = "expedita";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "minima";
            }};            

            POSTDescribeClusterVersionsResponse res = sdk.sdk.postDescribeClusterVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeClusters

<p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeClustersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeClustersRequest;
import org.openapis.openapi.models.operations.POSTDescribeClustersResponse;
import org.openapis.openapi.models.operations.POSTDescribeClustersVersionEnum;
import org.openapis.openapi.models.shared.DescribeClustersMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeClustersRequest req = new POSTDescribeClustersRequest(POSTDescribeClustersActionEnum.DESCRIBE_CLUSTERS, POSTDescribeClustersVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "enim";
                maxRecords = "neque";
                requestBody = "in".getBytes();
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "eum";
                xAmzCredential = "modi";
                xAmzDate = "corporis";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "maiores";
            }};            

            POSTDescribeClustersResponse res = sdk.sdk.postDescribeClusters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDataShares

Shows the status of any inbound or outbound datashares available in the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesRequest;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesResponse;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesVersionEnum;
import org.openapis.openapi.models.shared.DescribeDataSharesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDataSharesRequest req = new POSTDescribeDataSharesRequest(POSTDescribeDataSharesActionEnum.DESCRIBE_DATA_SHARES, POSTDescribeDataSharesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "aperiam";
                maxRecords = "libero";
                requestBody = "ratione".getBytes();
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "totam";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "quo";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "minus";
            }};            

            POSTDescribeDataSharesResponse res = sdk.sdk.postDescribeDataShares(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDataSharesForConsumer

Returns a list of datashares where the account identifier being called is a consumer account identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesForConsumerActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesForConsumerRequest;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesForConsumerResponse;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesForConsumerVersionEnum;
import org.openapis.openapi.models.shared.DataShareStatusForConsumerEnum;
import org.openapis.openapi.models.shared.DescribeDataSharesForConsumerMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDataSharesForConsumerRequest req = new POSTDescribeDataSharesForConsumerRequest(POSTDescribeDataSharesForConsumerActionEnum.DESCRIBE_DATA_SHARES_FOR_CONSUMER, POSTDescribeDataSharesForConsumerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "nostrum";
                maxRecords = "est";
                requestBody = "impedit".getBytes();
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "vero";
                xAmzDate = "odit";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "nemo";
            }};            

            POSTDescribeDataSharesForConsumerResponse res = sdk.sdk.postDescribeDataSharesForConsumer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDataSharesForProducer

Returns a list of datashares when the account identifier being called is a producer account identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesForProducerActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesForProducerRequest;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesForProducerResponse;
import org.openapis.openapi.models.operations.POSTDescribeDataSharesForProducerVersionEnum;
import org.openapis.openapi.models.shared.DataShareStatusForProducerEnum;
import org.openapis.openapi.models.shared.DescribeDataSharesForProducerMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDataSharesForProducerRequest req = new POSTDescribeDataSharesForProducerRequest(POSTDescribeDataSharesForProducerActionEnum.DESCRIBE_DATA_SHARES_FOR_PRODUCER, POSTDescribeDataSharesForProducerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "aperiam";
                maxRecords = "odio";
                requestBody = "minima".getBytes();
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "excepturi";
                xAmzDate = "dolores";
                xAmzSecurityToken = "error";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ducimus";
            }};            

            POSTDescribeDataSharesForProducerResponse res = sdk.sdk.postDescribeDataSharesForProducer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDefaultClusterParameters

<p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDefaultClusterParametersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDefaultClusterParametersRequest;
import org.openapis.openapi.models.operations.POSTDescribeDefaultClusterParametersResponse;
import org.openapis.openapi.models.operations.POSTDescribeDefaultClusterParametersVersionEnum;
import org.openapis.openapi.models.shared.DescribeDefaultClusterParametersMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDefaultClusterParametersRequest req = new POSTDescribeDefaultClusterParametersRequest(POSTDescribeDefaultClusterParametersActionEnum.DESCRIBE_DEFAULT_CLUSTER_PARAMETERS, POSTDescribeDefaultClusterParametersVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "pariatur";
                maxRecords = "itaque";
                requestBody = "similique".getBytes();
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "ex";
                xAmzCredential = "quaerat";
                xAmzDate = "commodi";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTDescribeDefaultClusterParametersResponse res = sdk.sdk.postDescribeDefaultClusterParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEndpointAccess

Describes a Redshift-managed VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEndpointAccessRequest;
import org.openapis.openapi.models.operations.POSTDescribeEndpointAccessResponse;
import org.openapis.openapi.models.operations.POSTDescribeEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.DescribeEndpointAccessMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEndpointAccessRequest req = new POSTDescribeEndpointAccessRequest(POSTDescribeEndpointAccessActionEnum.DESCRIBE_ENDPOINT_ACCESS, POSTDescribeEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "quam";
                maxRecords = "dolorem";
                requestBody = "modi".getBytes();
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "sint";
                xAmzCredential = "vero";
                xAmzDate = "sequi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "dicta";
            }};            

            POSTDescribeEndpointAccessResponse res = sdk.sdk.postDescribeEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEndpointAuthorization

Describes an endpoint authorization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEndpointAuthorizationActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEndpointAuthorizationRequest;
import org.openapis.openapi.models.operations.POSTDescribeEndpointAuthorizationResponse;
import org.openapis.openapi.models.operations.POSTDescribeEndpointAuthorizationVersionEnum;
import org.openapis.openapi.models.shared.DescribeEndpointAuthorizationMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEndpointAuthorizationRequest req = new POSTDescribeEndpointAuthorizationRequest(POSTDescribeEndpointAuthorizationActionEnum.DESCRIBE_ENDPOINT_AUTHORIZATION, POSTDescribeEndpointAuthorizationVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "veniam";
                maxRecords = "animi";
                requestBody = "dolores".getBytes();
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "consequuntur";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "ducimus";
            }};            

            POSTDescribeEndpointAuthorizationResponse res = sdk.sdk.postDescribeEndpointAuthorization(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEventCategories

Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesRequest;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesResponse;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesVersionEnum;
import org.openapis.openapi.models.shared.DescribeEventCategoriesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventCategoriesRequest req = new POSTDescribeEventCategoriesRequest(POSTDescribeEventCategoriesActionEnum.DESCRIBE_EVENT_CATEGORIES, POSTDescribeEventCategoriesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "veritatis".getBytes();
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "pariatur";
                xAmzDate = "libero";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "nemo";
            }};            

            POSTDescribeEventCategoriesResponse res = sdk.sdk.postDescribeEventCategories(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEventSubscriptions

<p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeEventSubscriptionsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventSubscriptionsRequest req = new POSTDescribeEventSubscriptionsRequest(POSTDescribeEventSubscriptionsActionEnum.DESCRIBE_EVENT_SUBSCRIPTIONS, POSTDescribeEventSubscriptionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "nostrum";
                maxRecords = "doloribus";
                requestBody = "eligendi".getBytes();
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "enim";
                xAmzCredential = "hic";
                xAmzDate = "animi";
                xAmzSecurityToken = "quas";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "molestias";
            }};            

            POSTDescribeEventSubscriptionsResponse res = sdk.sdk.postDescribeEventSubscriptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEvents

Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEventsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEventsRequest;
import org.openapis.openapi.models.operations.POSTDescribeEventsResponse;
import org.openapis.openapi.models.operations.POSTDescribeEventsVersionEnum;
import org.openapis.openapi.models.shared.DescribeEventsMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventsRequest req = new POSTDescribeEventsRequest(POSTDescribeEventsActionEnum.DESCRIBE_EVENTS, POSTDescribeEventsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "eaque";
                maxRecords = "saepe";
                requestBody = "architecto".getBytes();
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "iste";
                xAmzCredential = "assumenda";
                xAmzDate = "tempore";
                xAmzSecurityToken = "libero";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "doloremque";
            }};            

            POSTDescribeEventsResponse res = sdk.sdk.postDescribeEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeHsmClientCertificates

<p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeHsmClientCertificatesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeHsmClientCertificatesRequest;
import org.openapis.openapi.models.operations.POSTDescribeHsmClientCertificatesResponse;
import org.openapis.openapi.models.operations.POSTDescribeHsmClientCertificatesVersionEnum;
import org.openapis.openapi.models.shared.DescribeHsmClientCertificatesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeHsmClientCertificatesRequest req = new POSTDescribeHsmClientCertificatesRequest(POSTDescribeHsmClientCertificatesActionEnum.DESCRIBE_HSM_CLIENT_CERTIFICATES, POSTDescribeHsmClientCertificatesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "impedit";
                maxRecords = "cum";
                requestBody = "ipsum".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "deserunt";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "libero";
            }};            

            POSTDescribeHsmClientCertificatesResponse res = sdk.sdk.postDescribeHsmClientCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeHsmConfigurations

<p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeHsmConfigurationsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeHsmConfigurationsRequest;
import org.openapis.openapi.models.operations.POSTDescribeHsmConfigurationsResponse;
import org.openapis.openapi.models.operations.POSTDescribeHsmConfigurationsVersionEnum;
import org.openapis.openapi.models.shared.DescribeHsmConfigurationsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeHsmConfigurationsRequest req = new POSTDescribeHsmConfigurationsRequest(POSTDescribeHsmConfigurationsActionEnum.DESCRIBE_HSM_CONFIGURATIONS, POSTDescribeHsmConfigurationsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "cupiditate";
                maxRecords = "molestiae";
                requestBody = "eligendi".getBytes();
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "non";
                xAmzCredential = "magnam";
                xAmzDate = "itaque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "veniam";
            }};            

            POSTDescribeHsmConfigurationsResponse res = sdk.sdk.postDescribeHsmConfigurations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeLoggingStatus

Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeLoggingStatusActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeLoggingStatusRequest;
import org.openapis.openapi.models.operations.POSTDescribeLoggingStatusResponse;
import org.openapis.openapi.models.operations.POSTDescribeLoggingStatusVersionEnum;
import org.openapis.openapi.models.shared.DescribeLoggingStatusMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLoggingStatusRequest req = new POSTDescribeLoggingStatusRequest(POSTDescribeLoggingStatusActionEnum.DESCRIBE_LOGGING_STATUS, POSTDescribeLoggingStatusVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "facere".getBytes();
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odit";
                xAmzCredential = "pariatur";
                xAmzDate = "amet";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "velit";
            }};            

            POSTDescribeLoggingStatusResponse res = sdk.sdk.postDescribeLoggingStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeNodeConfigurationOptions

Returns properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeNodeConfigurationOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeNodeConfigurationOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeNodeConfigurationOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeNodeConfigurationOptionsVersionEnum;
import org.openapis.openapi.models.shared.ActionTypeEnum;
import org.openapis.openapi.models.shared.DescribeNodeConfigurationOptionsMessage;
import org.openapis.openapi.models.shared.DescribeNodeConfigurationOptionsMessageFilters;
import org.openapis.openapi.models.shared.NodeConfigurationOptionsFilterNameEnum;
import org.openapis.openapi.models.shared.OperatorTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeNodeConfigurationOptionsRequest req = new POSTDescribeNodeConfigurationOptionsRequest(POSTDescribeNodeConfigurationOptionsActionEnum.DESCRIBE_NODE_CONFIGURATION_OPTIONS, POSTDescribeNodeConfigurationOptionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "tempore";
                maxRecords = "nisi";
                requestBody = "voluptatibus".getBytes();
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "distinctio";
                xAmzDate = "nisi";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "libero";
            }};            

            POSTDescribeNodeConfigurationOptionsResponse res = sdk.sdk.postDescribeNodeConfigurationOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeOrderableClusterOptions

Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeOrderableClusterOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeOrderableClusterOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeOrderableClusterOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeOrderableClusterOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeOrderableClusterOptionsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOrderableClusterOptionsRequest req = new POSTDescribeOrderableClusterOptionsRequest(POSTDescribeOrderableClusterOptionsActionEnum.DESCRIBE_ORDERABLE_CLUSTER_OPTIONS, POSTDescribeOrderableClusterOptionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "facere";
                maxRecords = "facilis";
                requestBody = "ipsum".getBytes();
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptatibus";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "rerum";
            }};            

            POSTDescribeOrderableClusterOptionsResponse res = sdk.sdk.postDescribeOrderableClusterOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribePartners

Returns information about the partner integrations defined for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribePartnersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribePartnersRequest;
import org.openapis.openapi.models.operations.POSTDescribePartnersResponse;
import org.openapis.openapi.models.operations.POSTDescribePartnersVersionEnum;
import org.openapis.openapi.models.shared.DescribePartnersInputMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribePartnersRequest req = new POSTDescribePartnersRequest(POSTDescribePartnersActionEnum.DESCRIBE_PARTNERS, POSTDescribePartnersVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "reprehenderit".getBytes();
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "neque";
                xAmzCredential = "iusto";
                xAmzDate = "est";
                xAmzSecurityToken = "rem";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "fugiat";
            }};            

            POSTDescribePartnersResponse res = sdk.sdk.postDescribePartners(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeReservedNodeExchangeStatus

Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodeExchangeStatusActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodeExchangeStatusRequest;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodeExchangeStatusResponse;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodeExchangeStatusVersionEnum;
import org.openapis.openapi.models.shared.DescribeReservedNodeExchangeStatusInputMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedNodeExchangeStatusRequest req = new POSTDescribeReservedNodeExchangeStatusRequest(POSTDescribeReservedNodeExchangeStatusActionEnum.DESCRIBE_RESERVED_NODE_EXCHANGE_STATUS, POSTDescribeReservedNodeExchangeStatusVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "officiis";
                maxRecords = "ducimus";
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "error";
                xAmzCredential = "porro";
                xAmzDate = "vitae";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "fugiat";
            }};            

            POSTDescribeReservedNodeExchangeStatusResponse res = sdk.sdk.postDescribeReservedNodeExchangeStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeReservedNodeOfferings

<p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodeOfferingsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodeOfferingsRequest;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodeOfferingsResponse;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodeOfferingsVersionEnum;
import org.openapis.openapi.models.shared.DescribeReservedNodeOfferingsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedNodeOfferingsRequest req = new POSTDescribeReservedNodeOfferingsRequest(POSTDescribeReservedNodeOfferingsActionEnum.DESCRIBE_RESERVED_NODE_OFFERINGS, POSTDescribeReservedNodeOfferingsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "aspernatur";
                maxRecords = "enim";
                requestBody = "delectus".getBytes();
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "libero";
                xAmzDate = "illo";
                xAmzSecurityToken = "ab";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTDescribeReservedNodeOfferingsResponse res = sdk.sdk.postDescribeReservedNodeOfferings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeReservedNodes

Returns the descriptions of the reserved nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodesRequest;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodesResponse;
import org.openapis.openapi.models.operations.POSTDescribeReservedNodesVersionEnum;
import org.openapis.openapi.models.shared.DescribeReservedNodesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedNodesRequest req = new POSTDescribeReservedNodesRequest(POSTDescribeReservedNodesActionEnum.DESCRIBE_RESERVED_NODES, POSTDescribeReservedNodesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "tempore";
                maxRecords = "veniam";
                requestBody = "eos".getBytes();
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "earum";
                xAmzCredential = "reprehenderit";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "quisquam";
            }};            

            POSTDescribeReservedNodesResponse res = sdk.sdk.postDescribeReservedNodes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeResize

<p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeResizeActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeResizeRequest;
import org.openapis.openapi.models.operations.POSTDescribeResizeResponse;
import org.openapis.openapi.models.operations.POSTDescribeResizeVersionEnum;
import org.openapis.openapi.models.shared.DescribeResizeMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeResizeRequest req = new POSTDescribeResizeRequest(POSTDescribeResizeActionEnum.DESCRIBE_RESIZE, POSTDescribeResizeVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "nihil".getBytes();
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "illo";
                xAmzCredential = "labore";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "provident";
            }};            

            POSTDescribeResizeResponse res = sdk.sdk.postDescribeResize(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeScheduledActions

Describes properties of scheduled actions. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeScheduledActionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeScheduledActionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeScheduledActionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeScheduledActionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeScheduledActionsMessage;
import org.openapis.openapi.models.shared.ScheduledActionFilterList;
import org.openapis.openapi.models.shared.ScheduledActionFilterNameEnum;
import org.openapis.openapi.models.shared.ScheduledActionTypeValuesEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeScheduledActionsRequest req = new POSTDescribeScheduledActionsRequest(POSTDescribeScheduledActionsActionEnum.DESCRIBE_SCHEDULED_ACTIONS, POSTDescribeScheduledActionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "repudiandae";
                maxRecords = "consequatur";
                requestBody = "maxime".getBytes();
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "nam";
                xAmzCredential = "expedita";
                xAmzDate = "quas";
                xAmzSecurityToken = "provident";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "rerum";
            }};            

            POSTDescribeScheduledActionsResponse res = sdk.sdk.postDescribeScheduledActions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeSnapshotCopyGrants

<p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotCopyGrantsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotCopyGrantsRequest;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotCopyGrantsResponse;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotCopyGrantsVersionEnum;
import org.openapis.openapi.models.shared.DescribeSnapshotCopyGrantsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeSnapshotCopyGrantsRequest req = new POSTDescribeSnapshotCopyGrantsRequest(POSTDescribeSnapshotCopyGrantsActionEnum.DESCRIBE_SNAPSHOT_COPY_GRANTS, POSTDescribeSnapshotCopyGrantsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "corporis";
                maxRecords = "vero";
                requestBody = "similique".getBytes();
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "iure";
                xAmzCredential = "dolorem";
                xAmzDate = "commodi";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "aut";
            }};            

            POSTDescribeSnapshotCopyGrantsResponse res = sdk.sdk.postDescribeSnapshotCopyGrants(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeSnapshotSchedules

Returns a list of snapshot schedules. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotSchedulesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotSchedulesRequest;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotSchedulesResponse;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotSchedulesVersionEnum;
import org.openapis.openapi.models.shared.DescribeSnapshotSchedulesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeSnapshotSchedulesRequest req = new POSTDescribeSnapshotSchedulesRequest(POSTDescribeSnapshotSchedulesActionEnum.DESCRIBE_SNAPSHOT_SCHEDULES, POSTDescribeSnapshotSchedulesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "ad";
                maxRecords = "quae";
                requestBody = "amet".getBytes();
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "quidem";
                xAmzDate = "cum";
                xAmzSecurityToken = "amet";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "dicta";
            }};            

            POSTDescribeSnapshotSchedulesResponse res = sdk.sdk.postDescribeSnapshotSchedules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStorage

Returns account level backups storage size and provisional storage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStorageActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStorageRequest;
import org.openapis.openapi.models.operations.POSTDescribeStorageResponse;
import org.openapis.openapi.models.operations.POSTDescribeStorageVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStorageRequest req = new POSTDescribeStorageRequest(POSTDescribeStorageActionEnum.DESCRIBE_STORAGE, POSTDescribeStorageVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "earum";
                xAmzCredential = "iusto";
                xAmzDate = "amet";
                xAmzSecurityToken = "provident";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            POSTDescribeStorageResponse res = sdk.sdk.postDescribeStorage(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeTableRestoreStatus

Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeTableRestoreStatusActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeTableRestoreStatusRequest;
import org.openapis.openapi.models.operations.POSTDescribeTableRestoreStatusResponse;
import org.openapis.openapi.models.operations.POSTDescribeTableRestoreStatusVersionEnum;
import org.openapis.openapi.models.shared.DescribeTableRestoreStatusMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeTableRestoreStatusRequest req = new POSTDescribeTableRestoreStatusRequest(POSTDescribeTableRestoreStatusActionEnum.DESCRIBE_TABLE_RESTORE_STATUS, POSTDescribeTableRestoreStatusVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "repudiandae";
                maxRecords = "consequatur";
                requestBody = "nemo".getBytes();
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "facilis";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTDescribeTableRestoreStatusResponse res = sdk.sdk.postDescribeTableRestoreStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeTags

<p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeTagsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeTagsRequest;
import org.openapis.openapi.models.operations.POSTDescribeTagsResponse;
import org.openapis.openapi.models.operations.POSTDescribeTagsVersionEnum;
import org.openapis.openapi.models.shared.DescribeTagsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeTagsRequest req = new POSTDescribeTagsRequest(POSTDescribeTagsActionEnum.DESCRIBE_TAGS, POSTDescribeTagsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "totam";
                maxRecords = "dicta";
                requestBody = "voluptatem".getBytes();
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "sunt";
                xAmzDate = "a";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "atque";
            }};            

            POSTDescribeTagsResponse res = sdk.sdk.postDescribeTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeUsageLimits

<p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeUsageLimitsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeUsageLimitsRequest;
import org.openapis.openapi.models.operations.POSTDescribeUsageLimitsResponse;
import org.openapis.openapi.models.operations.POSTDescribeUsageLimitsVersionEnum;
import org.openapis.openapi.models.shared.DescribeUsageLimitsMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UsageLimitFeatureTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeUsageLimitsRequest req = new POSTDescribeUsageLimitsRequest(POSTDescribeUsageLimitsActionEnum.DESCRIBE_USAGE_LIMITS, POSTDescribeUsageLimitsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "at";
                maxRecords = "labore";
                requestBody = "minus".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "perferendis";
                xAmzDate = "rerum";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "dignissimos";
            }};            

            POSTDescribeUsageLimitsResponse res = sdk.sdk.postDescribeUsageLimits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDisableLogging

Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDisableLoggingActionEnum;
import org.openapis.openapi.models.operations.POSTDisableLoggingRequest;
import org.openapis.openapi.models.operations.POSTDisableLoggingResponse;
import org.openapis.openapi.models.operations.POSTDisableLoggingVersionEnum;
import org.openapis.openapi.models.shared.DisableLoggingMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDisableLoggingRequest req = new POSTDisableLoggingRequest(POSTDisableLoggingActionEnum.DISABLE_LOGGING, POSTDisableLoggingVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "velit".getBytes();
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "provident";
                xAmzCredential = "consectetur";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "soluta";
            }};            

            POSTDisableLoggingResponse res = sdk.sdk.postDisableLogging(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDisableSnapshotCopy

<p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDisableSnapshotCopyActionEnum;
import org.openapis.openapi.models.operations.POSTDisableSnapshotCopyRequest;
import org.openapis.openapi.models.operations.POSTDisableSnapshotCopyResponse;
import org.openapis.openapi.models.operations.POSTDisableSnapshotCopyVersionEnum;
import org.openapis.openapi.models.shared.DisableSnapshotCopyMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDisableSnapshotCopyRequest req = new POSTDisableSnapshotCopyRequest(POSTDisableSnapshotCopyActionEnum.DISABLE_SNAPSHOT_COPY, POSTDisableSnapshotCopyVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "temporibus".getBytes();
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tenetur";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "quo";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "illum";
            }};            

            POSTDisableSnapshotCopyResponse res = sdk.sdk.postDisableSnapshotCopy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDisassociateDataShareConsumer

From a datashare consumer account, remove association for the specified datashare. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDisassociateDataShareConsumerActionEnum;
import org.openapis.openapi.models.operations.POSTDisassociateDataShareConsumerRequest;
import org.openapis.openapi.models.operations.POSTDisassociateDataShareConsumerResponse;
import org.openapis.openapi.models.operations.POSTDisassociateDataShareConsumerVersionEnum;
import org.openapis.openapi.models.shared.DisassociateDataShareConsumerMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDisassociateDataShareConsumerRequest req = new POSTDisassociateDataShareConsumerRequest(POSTDisassociateDataShareConsumerActionEnum.DISASSOCIATE_DATA_SHARE_CONSUMER, POSTDisassociateDataShareConsumerVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "dignissimos".getBytes();
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "qui";
                xAmzCredential = "consectetur";
                xAmzDate = "repellat";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "exercitationem";
            }};            

            POSTDisassociateDataShareConsumerResponse res = sdk.sdk.postDisassociateDataShareConsumer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEnableLogging

Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTEnableLoggingActionEnum;
import org.openapis.openapi.models.operations.POSTEnableLoggingRequest;
import org.openapis.openapi.models.operations.POSTEnableLoggingResponse;
import org.openapis.openapi.models.operations.POSTEnableLoggingVersionEnum;
import org.openapis.openapi.models.shared.EnableLoggingMessage;
import org.openapis.openapi.models.shared.LogDestinationTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTEnableLoggingRequest req = new POSTEnableLoggingRequest(POSTEnableLoggingActionEnum.ENABLE_LOGGING, POSTEnableLoggingVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "non".getBytes();
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "illo";
                xAmzCredential = "hic";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "non";
                xAmzSignedHeaders = "distinctio";
            }};            

            POSTEnableLoggingResponse res = sdk.sdk.postEnableLogging(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEnableSnapshotCopy

Enables the automatic copy of snapshots from one region to another region for a specified cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTEnableSnapshotCopyActionEnum;
import org.openapis.openapi.models.operations.POSTEnableSnapshotCopyRequest;
import org.openapis.openapi.models.operations.POSTEnableSnapshotCopyResponse;
import org.openapis.openapi.models.operations.POSTEnableSnapshotCopyVersionEnum;
import org.openapis.openapi.models.shared.EnableSnapshotCopyMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTEnableSnapshotCopyRequest req = new POSTEnableSnapshotCopyRequest(POSTEnableSnapshotCopyActionEnum.ENABLE_SNAPSHOT_COPY, POSTEnableSnapshotCopyVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "exercitationem".getBytes();
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "repudiandae";
                xAmzDate = "modi";
                xAmzSecurityToken = "in";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTEnableSnapshotCopyResponse res = sdk.sdk.postEnableSnapshotCopy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetClusterCredentials

<p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetClusterCredentialsActionEnum;
import org.openapis.openapi.models.operations.POSTGetClusterCredentialsRequest;
import org.openapis.openapi.models.operations.POSTGetClusterCredentialsResponse;
import org.openapis.openapi.models.operations.POSTGetClusterCredentialsVersionEnum;
import org.openapis.openapi.models.shared.GetClusterCredentialsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetClusterCredentialsRequest req = new POSTGetClusterCredentialsRequest(POSTGetClusterCredentialsActionEnum.GET_CLUSTER_CREDENTIALS, POSTGetClusterCredentialsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "aperiam".getBytes();
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "enim";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "similique";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "libero";
            }};            

            POSTGetClusterCredentialsResponse res = sdk.sdk.postGetClusterCredentials(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetClusterCredentialsWithIAM

<p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetClusterCredentialsWithIAMActionEnum;
import org.openapis.openapi.models.operations.POSTGetClusterCredentialsWithIAMRequest;
import org.openapis.openapi.models.operations.POSTGetClusterCredentialsWithIAMResponse;
import org.openapis.openapi.models.operations.POSTGetClusterCredentialsWithIAMVersionEnum;
import org.openapis.openapi.models.shared.GetClusterCredentialsWithIAMMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetClusterCredentialsWithIAMRequest req = new POSTGetClusterCredentialsWithIAMRequest(POSTGetClusterCredentialsWithIAMActionEnum.GET_CLUSTER_CREDENTIALS_WITH_IAM, POSTGetClusterCredentialsWithIAMVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "sit".getBytes();
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "eum";
                xAmzCredential = "nesciunt";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "nostrum";
            }};            

            POSTGetClusterCredentialsWithIAMResponse res = sdk.sdk.postGetClusterCredentialsWithIAM(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetReservedNodeExchangeConfigurationOptions

Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetReservedNodeExchangeConfigurationOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTGetReservedNodeExchangeConfigurationOptionsRequest;
import org.openapis.openapi.models.operations.POSTGetReservedNodeExchangeConfigurationOptionsResponse;
import org.openapis.openapi.models.operations.POSTGetReservedNodeExchangeConfigurationOptionsVersionEnum;
import org.openapis.openapi.models.shared.GetReservedNodeExchangeConfigurationOptionsInputMessage;
import org.openapis.openapi.models.shared.ReservedNodeExchangeActionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetReservedNodeExchangeConfigurationOptionsRequest req = new POSTGetReservedNodeExchangeConfigurationOptionsRequest(POSTGetReservedNodeExchangeConfigurationOptionsActionEnum.GET_RESERVED_NODE_EXCHANGE_CONFIGURATION_OPTIONS, POSTGetReservedNodeExchangeConfigurationOptionsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "veniam";
                maxRecords = "reiciendis";
                requestBody = "ab".getBytes();
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "aut";
                xAmzCredential = "aut";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "odio";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "numquam";
            }};            

            POSTGetReservedNodeExchangeConfigurationOptionsResponse res = sdk.sdk.postGetReservedNodeExchangeConfigurationOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetReservedNodeExchangeOfferings

Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetReservedNodeExchangeOfferingsActionEnum;
import org.openapis.openapi.models.operations.POSTGetReservedNodeExchangeOfferingsRequest;
import org.openapis.openapi.models.operations.POSTGetReservedNodeExchangeOfferingsResponse;
import org.openapis.openapi.models.operations.POSTGetReservedNodeExchangeOfferingsVersionEnum;
import org.openapis.openapi.models.shared.GetReservedNodeExchangeOfferingsInputMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetReservedNodeExchangeOfferingsRequest req = new POSTGetReservedNodeExchangeOfferingsRequest(POSTGetReservedNodeExchangeOfferingsActionEnum.GET_RESERVED_NODE_EXCHANGE_OFFERINGS, POSTGetReservedNodeExchangeOfferingsVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                marker = "possimus";
                maxRecords = "voluptate";
                requestBody = "consectetur".getBytes();
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "itaque";
                xAmzDate = "minus";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "iusto";
            }};            

            POSTGetReservedNodeExchangeOfferingsResponse res = sdk.sdk.postGetReservedNodeExchangeOfferings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyAquaConfiguration

This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyAquaConfigurationActionEnum;
import org.openapis.openapi.models.operations.POSTModifyAquaConfigurationRequest;
import org.openapis.openapi.models.operations.POSTModifyAquaConfigurationResponse;
import org.openapis.openapi.models.operations.POSTModifyAquaConfigurationVersionEnum;
import org.openapis.openapi.models.shared.AquaConfigurationStatusEnum;
import org.openapis.openapi.models.shared.ModifyAquaInputMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyAquaConfigurationRequest req = new POSTModifyAquaConfigurationRequest(POSTModifyAquaConfigurationActionEnum.MODIFY_AQUA_CONFIGURATION, POSTModifyAquaConfigurationVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "et".getBytes();
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "autem";
                xAmzDate = "fuga";
                xAmzSecurityToken = "alias";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "aut";
            }};            

            POSTModifyAquaConfigurationResponse res = sdk.sdk.postModifyAquaConfiguration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyAuthenticationProfile

Modifies an authentication profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyAuthenticationProfileActionEnum;
import org.openapis.openapi.models.operations.POSTModifyAuthenticationProfileRequest;
import org.openapis.openapi.models.operations.POSTModifyAuthenticationProfileResponse;
import org.openapis.openapi.models.operations.POSTModifyAuthenticationProfileVersionEnum;
import org.openapis.openapi.models.shared.ModifyAuthenticationProfileMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyAuthenticationProfileRequest req = new POSTModifyAuthenticationProfileRequest(POSTModifyAuthenticationProfileActionEnum.MODIFY_AUTHENTICATION_PROFILE, POSTModifyAuthenticationProfileVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "laudantium".getBytes();
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "quae";
                xAmzDate = "eaque";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "mollitia";
            }};            

            POSTModifyAuthenticationProfileResponse res = sdk.sdk.postModifyAuthenticationProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyCluster

<p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyClusterActionEnum;
import org.openapis.openapi.models.operations.POSTModifyClusterRequest;
import org.openapis.openapi.models.operations.POSTModifyClusterResponse;
import org.openapis.openapi.models.operations.POSTModifyClusterVersionEnum;
import org.openapis.openapi.models.shared.ModifyClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyClusterRequest req = new POSTModifyClusterRequest(POSTModifyClusterActionEnum.MODIFY_CLUSTER, POSTModifyClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "officia".getBytes();
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "alias";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "incidunt";
            }};            

            POSTModifyClusterResponse res = sdk.sdk.postModifyCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyClusterDbRevision

Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyClusterDbRevisionActionEnum;
import org.openapis.openapi.models.operations.POSTModifyClusterDbRevisionRequest;
import org.openapis.openapi.models.operations.POSTModifyClusterDbRevisionResponse;
import org.openapis.openapi.models.operations.POSTModifyClusterDbRevisionVersionEnum;
import org.openapis.openapi.models.shared.ModifyClusterDbRevisionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyClusterDbRevisionRequest req = new POSTModifyClusterDbRevisionRequest(POSTModifyClusterDbRevisionActionEnum.MODIFY_CLUSTER_DB_REVISION, POSTModifyClusterDbRevisionVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "qui".getBytes();
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "harum";
                xAmzCredential = "explicabo";
                xAmzDate = "beatae";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "optio";
            }};            

            POSTModifyClusterDbRevisionResponse res = sdk.sdk.postModifyClusterDbRevision(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyClusterIamRoles

<p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyClusterIamRolesActionEnum;
import org.openapis.openapi.models.operations.POSTModifyClusterIamRolesRequest;
import org.openapis.openapi.models.operations.POSTModifyClusterIamRolesResponse;
import org.openapis.openapi.models.operations.POSTModifyClusterIamRolesVersionEnum;
import org.openapis.openapi.models.shared.ModifyClusterIamRolesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyClusterIamRolesRequest req = new POSTModifyClusterIamRolesRequest(POSTModifyClusterIamRolesActionEnum.MODIFY_CLUSTER_IAM_ROLES, POSTModifyClusterIamRolesVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "molestias".getBytes();
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "libero";
                xAmzCredential = "totam";
                xAmzDate = "sequi";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "impedit";
            }};            

            POSTModifyClusterIamRolesResponse res = sdk.sdk.postModifyClusterIamRoles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyClusterMaintenance

Modifies the maintenance settings of a cluster.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyClusterMaintenanceActionEnum;
import org.openapis.openapi.models.operations.POSTModifyClusterMaintenanceRequest;
import org.openapis.openapi.models.operations.POSTModifyClusterMaintenanceResponse;
import org.openapis.openapi.models.operations.POSTModifyClusterMaintenanceVersionEnum;
import org.openapis.openapi.models.shared.ModifyClusterMaintenanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyClusterMaintenanceRequest req = new POSTModifyClusterMaintenanceRequest(POSTModifyClusterMaintenanceActionEnum.MODIFY_CLUSTER_MAINTENANCE, POSTModifyClusterMaintenanceVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "odit".getBytes();
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "repellat";
                xAmzDate = "nulla";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTModifyClusterMaintenanceResponse res = sdk.sdk.postModifyClusterMaintenance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyClusterParameterGroup

<p>Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyClusterParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyClusterParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyClusterParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyClusterParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.ModifyClusterParameterGroupMessage;
import org.openapis.openapi.models.shared.ParameterApplyTypeEnum;
import org.openapis.openapi.models.shared.ParametersList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyClusterParameterGroupRequest req = new POSTModifyClusterParameterGroupRequest(POSTModifyClusterParameterGroupActionEnum.MODIFY_CLUSTER_PARAMETER_GROUP, POSTModifyClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "nisi".getBytes();
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "voluptates";
                xAmzDate = "non";
                xAmzSecurityToken = "rem";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "ullam";
            }};            

            POSTModifyClusterParameterGroupResponse res = sdk.sdk.postModifyClusterParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyClusterSnapshot

<p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTModifyClusterSnapshotRequest;
import org.openapis.openapi.models.operations.POSTModifyClusterSnapshotResponse;
import org.openapis.openapi.models.operations.POSTModifyClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.ModifyClusterSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyClusterSnapshotRequest req = new POSTModifyClusterSnapshotRequest(POSTModifyClusterSnapshotActionEnum.MODIFY_CLUSTER_SNAPSHOT, POSTModifyClusterSnapshotVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "dicta".getBytes();
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "quae";
                xAmzDate = "officiis";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "enim";
            }};            

            POSTModifyClusterSnapshotResponse res = sdk.sdk.postModifyClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyClusterSnapshotSchedule

Modifies a snapshot schedule for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyClusterSnapshotScheduleActionEnum;
import org.openapis.openapi.models.operations.POSTModifyClusterSnapshotScheduleRequest;
import org.openapis.openapi.models.operations.POSTModifyClusterSnapshotScheduleResponse;
import org.openapis.openapi.models.operations.POSTModifyClusterSnapshotScheduleVersionEnum;
import org.openapis.openapi.models.shared.ModifyClusterSnapshotScheduleMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyClusterSnapshotScheduleRequest req = new POSTModifyClusterSnapshotScheduleRequest(POSTModifyClusterSnapshotScheduleActionEnum.MODIFY_CLUSTER_SNAPSHOT_SCHEDULE, POSTModifyClusterSnapshotScheduleVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "rem".getBytes();
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "reiciendis";
                xAmzDate = "a";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "quos";
            }};            

            POSTModifyClusterSnapshotScheduleResponse res = sdk.sdk.postModifyClusterSnapshotSchedule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyClusterSubnetGroup

Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyClusterSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyClusterSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyClusterSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyClusterSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.ModifyClusterSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyClusterSubnetGroupRequest req = new POSTModifyClusterSubnetGroupRequest(POSTModifyClusterSubnetGroupActionEnum.MODIFY_CLUSTER_SUBNET_GROUP, POSTModifyClusterSubnetGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "dolore".getBytes();
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "maxime";
                xAmzDate = "modi";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "vero";
            }};            

            POSTModifyClusterSubnetGroupResponse res = sdk.sdk.postModifyClusterSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyEndpointAccess

Modifies a Redshift-managed VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.POSTModifyEndpointAccessRequest;
import org.openapis.openapi.models.operations.POSTModifyEndpointAccessResponse;
import org.openapis.openapi.models.operations.POSTModifyEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.ModifyEndpointAccessMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyEndpointAccessRequest req = new POSTModifyEndpointAccessRequest(POSTModifyEndpointAccessActionEnum.MODIFY_ENDPOINT_ACCESS, POSTModifyEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "impedit".getBytes();
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "totam";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "ab";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "nihil";
            }};            

            POSTModifyEndpointAccessResponse res = sdk.sdk.postModifyEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyEventSubscription

Modifies an existing Amazon Redshift event notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.ModifyEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyEventSubscriptionRequest req = new POSTModifyEventSubscriptionRequest(POSTModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, POSTModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "iure".getBytes();
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "debitis";
                xAmzDate = "vel";
                xAmzSecurityToken = "neque";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "voluptas";
            }};            

            POSTModifyEventSubscriptionResponse res = sdk.sdk.postModifyEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyScheduledAction

Modifies a scheduled action. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyScheduledActionActionEnum;
import org.openapis.openapi.models.operations.POSTModifyScheduledActionRequest;
import org.openapis.openapi.models.operations.POSTModifyScheduledActionResponse;
import org.openapis.openapi.models.operations.POSTModifyScheduledActionVersionEnum;
import org.openapis.openapi.models.shared.ModifyScheduledActionMessage;
import org.openapis.openapi.models.shared.PauseClusterMessage;
import org.openapis.openapi.models.shared.ResizeClusterMessage;
import org.openapis.openapi.models.shared.ResumeClusterMessage;
import org.openapis.openapi.models.shared.ScheduledActionType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyScheduledActionRequest req = new POSTModifyScheduledActionRequest(POSTModifyScheduledActionActionEnum.MODIFY_SCHEDULED_ACTION, POSTModifyScheduledActionVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "officia".getBytes();
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "eius";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "rem";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "accusantium";
            }};            

            POSTModifyScheduledActionResponse res = sdk.sdk.postModifyScheduledAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifySnapshotCopyRetentionPeriod

Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifySnapshotCopyRetentionPeriodActionEnum;
import org.openapis.openapi.models.operations.POSTModifySnapshotCopyRetentionPeriodRequest;
import org.openapis.openapi.models.operations.POSTModifySnapshotCopyRetentionPeriodResponse;
import org.openapis.openapi.models.operations.POSTModifySnapshotCopyRetentionPeriodVersionEnum;
import org.openapis.openapi.models.shared.ModifySnapshotCopyRetentionPeriodMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifySnapshotCopyRetentionPeriodRequest req = new POSTModifySnapshotCopyRetentionPeriodRequest(POSTModifySnapshotCopyRetentionPeriodActionEnum.MODIFY_SNAPSHOT_COPY_RETENTION_PERIOD, POSTModifySnapshotCopyRetentionPeriodVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "saepe".getBytes();
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "facere";
                xAmzCredential = "aliquam";
                xAmzDate = "quos";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "est";
            }};            

            POSTModifySnapshotCopyRetentionPeriodResponse res = sdk.sdk.postModifySnapshotCopyRetentionPeriod(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifySnapshotSchedule

Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifySnapshotScheduleActionEnum;
import org.openapis.openapi.models.operations.POSTModifySnapshotScheduleRequest;
import org.openapis.openapi.models.operations.POSTModifySnapshotScheduleResponse;
import org.openapis.openapi.models.operations.POSTModifySnapshotScheduleVersionEnum;
import org.openapis.openapi.models.shared.ModifySnapshotScheduleMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifySnapshotScheduleRequest req = new POSTModifySnapshotScheduleRequest(POSTModifySnapshotScheduleActionEnum.MODIFY_SNAPSHOT_SCHEDULE, POSTModifySnapshotScheduleVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "velit".getBytes();
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "similique";
                xAmzDate = "illo";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "doloribus";
            }};            

            POSTModifySnapshotScheduleResponse res = sdk.sdk.postModifySnapshotSchedule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyUsageLimit

Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyUsageLimitActionEnum;
import org.openapis.openapi.models.operations.POSTModifyUsageLimitRequest;
import org.openapis.openapi.models.operations.POSTModifyUsageLimitResponse;
import org.openapis.openapi.models.operations.POSTModifyUsageLimitVersionEnum;
import org.openapis.openapi.models.shared.ModifyUsageLimitMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UsageLimitBreachActionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyUsageLimitRequest req = new POSTModifyUsageLimitRequest(POSTModifyUsageLimitActionEnum.MODIFY_USAGE_LIMIT, POSTModifyUsageLimitVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "unde".getBytes();
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "ipsam";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "optio";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTModifyUsageLimitResponse res = sdk.sdk.postModifyUsageLimit(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPauseCluster

Pauses a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPauseClusterActionEnum;
import org.openapis.openapi.models.operations.POSTPauseClusterRequest;
import org.openapis.openapi.models.operations.POSTPauseClusterResponse;
import org.openapis.openapi.models.operations.POSTPauseClusterVersionEnum;
import org.openapis.openapi.models.shared.PauseClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPauseClusterRequest req = new POSTPauseClusterRequest(POSTPauseClusterActionEnum.PAUSE_CLUSTER, POSTPauseClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "commodi".getBytes();
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "veniam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "officia";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "ut";
            }};            

            POSTPauseClusterResponse res = sdk.sdk.postPauseCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPurchaseReservedNodeOffering

<p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPurchaseReservedNodeOfferingActionEnum;
import org.openapis.openapi.models.operations.POSTPurchaseReservedNodeOfferingRequest;
import org.openapis.openapi.models.operations.POSTPurchaseReservedNodeOfferingResponse;
import org.openapis.openapi.models.operations.POSTPurchaseReservedNodeOfferingVersionEnum;
import org.openapis.openapi.models.shared.PurchaseReservedNodeOfferingMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPurchaseReservedNodeOfferingRequest req = new POSTPurchaseReservedNodeOfferingRequest(POSTPurchaseReservedNodeOfferingActionEnum.PURCHASE_RESERVED_NODE_OFFERING, POSTPurchaseReservedNodeOfferingVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "tenetur".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "libero";
                xAmzCredential = "in";
                xAmzDate = "minima";
                xAmzSecurityToken = "ex";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "ab";
            }};            

            POSTPurchaseReservedNodeOfferingResponse res = sdk.sdk.postPurchaseReservedNodeOffering(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRebootCluster

Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRebootClusterActionEnum;
import org.openapis.openapi.models.operations.POSTRebootClusterRequest;
import org.openapis.openapi.models.operations.POSTRebootClusterResponse;
import org.openapis.openapi.models.operations.POSTRebootClusterVersionEnum;
import org.openapis.openapi.models.shared.RebootClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRebootClusterRequest req = new POSTRebootClusterRequest(POSTRebootClusterActionEnum.REBOOT_CLUSTER, POSTRebootClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "hic".getBytes();
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "dolor";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "architecto";
            }};            

            POSTRebootClusterResponse res = sdk.sdk.postRebootCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRejectDataShare

From a datashare consumer account, rejects the specified datashare.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRejectDataShareActionEnum;
import org.openapis.openapi.models.operations.POSTRejectDataShareRequest;
import org.openapis.openapi.models.operations.POSTRejectDataShareResponse;
import org.openapis.openapi.models.operations.POSTRejectDataShareVersionEnum;
import org.openapis.openapi.models.shared.RejectDataShareMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRejectDataShareRequest req = new POSTRejectDataShareRequest(POSTRejectDataShareActionEnum.REJECT_DATA_SHARE, POSTRejectDataShareVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "aliquid".getBytes();
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "adipisci";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "expedita";
            }};            

            POSTRejectDataShareResponse res = sdk.sdk.postRejectDataShare(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postResetClusterParameterGroup

Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the <i>ResetAllParameters</i> parameter. For parameter changes to take effect you must reboot any associated clusters. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTResetClusterParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTResetClusterParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTResetClusterParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTResetClusterParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.ParameterApplyTypeEnum;
import org.openapis.openapi.models.shared.ParametersList;
import org.openapis.openapi.models.shared.ResetClusterParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResetClusterParameterGroupRequest req = new POSTResetClusterParameterGroupRequest(POSTResetClusterParameterGroupActionEnum.RESET_CLUSTER_PARAMETER_GROUP, POSTResetClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "impedit".getBytes();
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "modi";
            }};            

            POSTResetClusterParameterGroupResponse res = sdk.sdk.postResetClusterParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postResizeCluster

<p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTResizeClusterActionEnum;
import org.openapis.openapi.models.operations.POSTResizeClusterRequest;
import org.openapis.openapi.models.operations.POSTResizeClusterResponse;
import org.openapis.openapi.models.operations.POSTResizeClusterVersionEnum;
import org.openapis.openapi.models.shared.ResizeClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResizeClusterRequest req = new POSTResizeClusterRequest(POSTResizeClusterActionEnum.RESIZE_CLUSTER, POSTResizeClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "quod".getBytes();
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "a";
                xAmzCredential = "quisquam";
                xAmzDate = "enim";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "officiis";
            }};            

            POSTResizeClusterResponse res = sdk.sdk.postResizeCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRestoreFromClusterSnapshot

<p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreFromClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreFromClusterSnapshotRequest;
import org.openapis.openapi.models.operations.POSTRestoreFromClusterSnapshotResponse;
import org.openapis.openapi.models.operations.POSTRestoreFromClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.AquaConfigurationStatusEnum;
import org.openapis.openapi.models.shared.RestoreFromClusterSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreFromClusterSnapshotRequest req = new POSTRestoreFromClusterSnapshotRequest(POSTRestoreFromClusterSnapshotActionEnum.RESTORE_FROM_CLUSTER_SNAPSHOT, POSTRestoreFromClusterSnapshotVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "alias".getBytes();
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "nobis";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "quia";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "vel";
            }};            

            POSTRestoreFromClusterSnapshotResponse res = sdk.sdk.postRestoreFromClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRestoreTableFromClusterSnapshot

<p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreTableFromClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreTableFromClusterSnapshotRequest;
import org.openapis.openapi.models.operations.POSTRestoreTableFromClusterSnapshotResponse;
import org.openapis.openapi.models.operations.POSTRestoreTableFromClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.RestoreTableFromClusterSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreTableFromClusterSnapshotRequest req = new POSTRestoreTableFromClusterSnapshotRequest(POSTRestoreTableFromClusterSnapshotActionEnum.RESTORE_TABLE_FROM_CLUSTER_SNAPSHOT, POSTRestoreTableFromClusterSnapshotVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "debitis".getBytes();
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "accusantium";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "cumque";
            }};            

            POSTRestoreTableFromClusterSnapshotResponse res = sdk.sdk.postRestoreTableFromClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postResumeCluster

Resumes a paused cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTResumeClusterActionEnum;
import org.openapis.openapi.models.operations.POSTResumeClusterRequest;
import org.openapis.openapi.models.operations.POSTResumeClusterResponse;
import org.openapis.openapi.models.operations.POSTResumeClusterVersionEnum;
import org.openapis.openapi.models.shared.ResumeClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResumeClusterRequest req = new POSTResumeClusterRequest(POSTResumeClusterActionEnum.RESUME_CLUSTER, POSTResumeClusterVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "quibusdam".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "recusandae";
                xAmzDate = "velit";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "laboriosam";
            }};            

            POSTResumeClusterResponse res = sdk.sdk.postResumeCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRevokeClusterSecurityGroupIngress

Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRevokeClusterSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.POSTRevokeClusterSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.POSTRevokeClusterSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.POSTRevokeClusterSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.RevokeClusterSecurityGroupIngressMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRevokeClusterSecurityGroupIngressRequest req = new POSTRevokeClusterSecurityGroupIngressRequest(POSTRevokeClusterSecurityGroupIngressActionEnum.REVOKE_CLUSTER_SECURITY_GROUP_INGRESS, POSTRevokeClusterSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "odio".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "provident";
                xAmzCredential = "cum";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "itaque";
            }};            

            POSTRevokeClusterSecurityGroupIngressResponse res = sdk.sdk.postRevokeClusterSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRevokeEndpointAccess

Revokes access to a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRevokeEndpointAccessActionEnum;
import org.openapis.openapi.models.operations.POSTRevokeEndpointAccessRequest;
import org.openapis.openapi.models.operations.POSTRevokeEndpointAccessResponse;
import org.openapis.openapi.models.operations.POSTRevokeEndpointAccessVersionEnum;
import org.openapis.openapi.models.shared.RevokeEndpointAccessMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRevokeEndpointAccessRequest req = new POSTRevokeEndpointAccessRequest(POSTRevokeEndpointAccessActionEnum.REVOKE_ENDPOINT_ACCESS, POSTRevokeEndpointAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "unde".getBytes();
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "hic";
                xAmzDate = "cum";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "nam";
            }};            

            POSTRevokeEndpointAccessResponse res = sdk.sdk.postRevokeEndpointAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRevokeSnapshotAccess

<p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRevokeSnapshotAccessActionEnum;
import org.openapis.openapi.models.operations.POSTRevokeSnapshotAccessRequest;
import org.openapis.openapi.models.operations.POSTRevokeSnapshotAccessResponse;
import org.openapis.openapi.models.operations.POSTRevokeSnapshotAccessVersionEnum;
import org.openapis.openapi.models.shared.RevokeSnapshotAccessMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRevokeSnapshotAccessRequest req = new POSTRevokeSnapshotAccessRequest(POSTRevokeSnapshotAccessActionEnum.REVOKE_SNAPSHOT_ACCESS, POSTRevokeSnapshotAccessVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "recusandae".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "id";
                xAmzCredential = "saepe";
                xAmzDate = "autem";
                xAmzSecurityToken = "quo";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "illum";
            }};            

            POSTRevokeSnapshotAccessResponse res = sdk.sdk.postRevokeSnapshotAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRotateEncryptionKey

Rotates the encryption keys for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRotateEncryptionKeyActionEnum;
import org.openapis.openapi.models.operations.POSTRotateEncryptionKeyRequest;
import org.openapis.openapi.models.operations.POSTRotateEncryptionKeyResponse;
import org.openapis.openapi.models.operations.POSTRotateEncryptionKeyVersionEnum;
import org.openapis.openapi.models.shared.RotateEncryptionKeyMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRotateEncryptionKeyRequest req = new POSTRotateEncryptionKeyRequest(POSTRotateEncryptionKeyActionEnum.ROTATE_ENCRYPTION_KEY, POSTRotateEncryptionKeyVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "illum".getBytes();
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "non";
                xAmzCredential = "mollitia";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "pariatur";
            }};            

            POSTRotateEncryptionKeyResponse res = sdk.sdk.postRotateEncryptionKey(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdatePartnerStatus

Updates the status of a partner integration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdatePartnerStatusActionEnum;
import org.openapis.openapi.models.operations.POSTUpdatePartnerStatusRequest;
import org.openapis.openapi.models.operations.POSTUpdatePartnerStatusResponse;
import org.openapis.openapi.models.operations.POSTUpdatePartnerStatusVersionEnum;
import org.openapis.openapi.models.shared.PartnerIntegrationStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePartnerStatusInputMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdatePartnerStatusRequest req = new POSTUpdatePartnerStatusRequest(POSTUpdatePartnerStatusActionEnum.UPDATE_PARTNER_STATUS, POSTUpdatePartnerStatusVersionEnum.TWO_THOUSAND_AND_TWELVE1201) {{
                requestBody = "facere".getBytes();
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "laborum";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            POSTUpdatePartnerStatusResponse res = sdk.sdk.postUpdatePartnerStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
