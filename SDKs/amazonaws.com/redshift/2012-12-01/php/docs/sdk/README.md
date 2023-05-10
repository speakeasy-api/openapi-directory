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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAcceptReservedNodeExchangeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAcceptReservedNodeExchangeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAcceptReservedNodeExchangeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAcceptReservedNodeExchangeRequest();
    $request->action = GETAcceptReservedNodeExchangeActionEnum::ACCEPT_RESERVED_NODE_EXCHANGE;
    $request->reservedNodeId = 'error';
    $request->targetReservedNodeOfferingId = 'deserunt';
    $request->version = GETAcceptReservedNodeExchangeVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->getAcceptReservedNodeExchange($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddPartner

Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddPartnerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddPartnerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddPartnerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddPartnerRequest();
    $request->accountId = 'suscipit';
    $request->action = GETAddPartnerActionEnum::ADD_PARTNER;
    $request->clusterIdentifier = 'molestiae';
    $request->databaseName = 'minus';
    $request->partnerName = 'placeat';
    $request->version = GETAddPartnerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->getAddPartner($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssociateDataShareConsumer

From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAssociateDataShareConsumerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAssociateDataShareConsumerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAssociateDataShareConsumerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAssociateDataShareConsumerRequest();
    $request->action = GETAssociateDataShareConsumerActionEnum::ASSOCIATE_DATA_SHARE_CONSUMER;
    $request->associateEntireAccount = false;
    $request->consumerArn = 'quis';
    $request->consumerRegion = 'veritatis';
    $request->dataShareArn = 'deserunt';
    $request->version = GETAssociateDataShareConsumerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->getAssociateDataShareConsumer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorizeClusterSecurityGroupIngress

<p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeClusterSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeClusterSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeClusterSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAuthorizeClusterSecurityGroupIngressRequest();
    $request->action = GETAuthorizeClusterSecurityGroupIngressActionEnum::AUTHORIZE_CLUSTER_SECURITY_GROUP_INGRESS;
    $request->cidrip = 'at';
    $request->clusterSecurityGroupName = 'maiores';
    $request->ec2SecurityGroupName = 'molestiae';
    $request->ec2SecurityGroupOwnerId = 'quod';
    $request->version = GETAuthorizeClusterSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->getAuthorizeClusterSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorizeDataShare

From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeDataShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeDataShareActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeDataShareVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAuthorizeDataShareRequest();
    $request->action = GETAuthorizeDataShareActionEnum::AUTHORIZE_DATA_SHARE;
    $request->consumerIdentifier = 'officia';
    $request->dataShareArn = 'occaecati';
    $request->version = GETAuthorizeDataShareVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->getAuthorizeDataShare($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorizeEndpointAccess

Grants access to a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAuthorizeEndpointAccessRequest();
    $request->account = 'molestiae';
    $request->action = GETAuthorizeEndpointAccessActionEnum::AUTHORIZE_ENDPOINT_ACCESS;
    $request->clusterIdentifier = 'modi';
    $request->version = GETAuthorizeEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->vpcIds = [
        'impedit',
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->getAuthorizeEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorizeSnapshotAccess

<p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeSnapshotAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeSnapshotAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeSnapshotAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAuthorizeSnapshotAccessRequest();
    $request->accountWithRestoreAccess = 'natus';
    $request->action = GETAuthorizeSnapshotAccessActionEnum::AUTHORIZE_SNAPSHOT_ACCESS;
    $request->snapshotArn = 'sed';
    $request->snapshotClusterIdentifier = 'iste';
    $request->snapshotIdentifier = 'dolor';
    $request->version = GETAuthorizeSnapshotAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->getAuthorizeSnapshotAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchModifyClusterSnapshots

Modifies the settings for a set of cluster snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchModifyClusterSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchModifyClusterSnapshotsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchModifyClusterSnapshotsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETBatchModifyClusterSnapshotsRequest();
    $request->action = GETBatchModifyClusterSnapshotsActionEnum::BATCH_MODIFY_CLUSTER_SNAPSHOTS;
    $request->force = false;
    $request->manualSnapshotRetentionPeriod = 613064;
    $request->snapshotIdentifierList = [
        'saepe',
        'quidem',
    ];
    $request->version = GETBatchModifyClusterSnapshotsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->getBatchModifyClusterSnapshots($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCancelResize

Cancels a resize operation for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelResizeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelResizeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelResizeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCancelResizeRequest();
    $request->action = GETCancelResizeActionEnum::CANCEL_RESIZE;
    $request->clusterIdentifier = 'dolorem';
    $request->version = GETCancelResizeVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->getCancelResize($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCopyClusterSnapshot

<p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCopyClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCopyClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCopyClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCopyClusterSnapshotRequest();
    $request->action = GETCopyClusterSnapshotActionEnum::COPY_CLUSTER_SNAPSHOT;
    $request->manualSnapshotRetentionPeriod = 570197;
    $request->sourceSnapshotClusterIdentifier = 'accusantium';
    $request->sourceSnapshotIdentifier = 'iure';
    $request->targetSnapshotIdentifier = 'culpa';
    $request->version = GETCopyClusterSnapshotVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->getCopyClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateAuthenticationProfile

Creates an authentication profile with the specified parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAuthenticationProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAuthenticationProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAuthenticationProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateAuthenticationProfileRequest();
    $request->action = GETCreateAuthenticationProfileActionEnum::CREATE_AUTHENTICATION_PROFILE;
    $request->authenticationProfileContent = 'repellat';
    $request->authenticationProfileName = 'mollitia';
    $request->version = GETCreateAuthenticationProfileVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->getCreateAuthenticationProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateEndpointAccess

Creates a Redshift-managed VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateEndpointAccessRequest();
    $request->action = GETCreateEndpointAccessActionEnum::CREATE_ENDPOINT_ACCESS;
    $request->clusterIdentifier = 'quia';
    $request->endpointName = 'quis';
    $request->resourceOwner = 'vitae';
    $request->subnetGroupName = 'laborum';
    $request->version = GETCreateEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->vpcSecurityGroupIds = [
        'enim',
        'odit',
        'quo',
    ];
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getCreateEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeauthorizeDataShare

From a datashare producer account, removes authorization from the specified datashare. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeauthorizeDataShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeauthorizeDataShareActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeauthorizeDataShareVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeauthorizeDataShareRequest();
    $request->action = GETDeauthorizeDataShareActionEnum::DEAUTHORIZE_DATA_SHARE;
    $request->consumerIdentifier = 'error';
    $request->dataShareArn = 'temporibus';
    $request->version = GETDeauthorizeDataShareVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->getDeauthorizeDataShare($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteAuthenticationProfile

Deletes an authentication profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAuthenticationProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAuthenticationProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAuthenticationProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteAuthenticationProfileRequest();
    $request->action = GETDeleteAuthenticationProfileActionEnum::DELETE_AUTHENTICATION_PROFILE;
    $request->authenticationProfileName = 'voluptatibus';
    $request->version = GETDeleteAuthenticationProfileVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->getDeleteAuthenticationProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteCluster

<p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteClusterRequest();
    $request->action = GETDeleteClusterActionEnum::DELETE_CLUSTER;
    $request->clusterIdentifier = 'ut';
    $request->finalClusterSnapshotIdentifier = 'maiores';
    $request->finalClusterSnapshotRetentionPeriod = 120196;
    $request->skipFinalClusterSnapshot = false;
    $request->version = GETDeleteClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->getDeleteCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteClusterParameterGroup

<p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteClusterParameterGroupRequest();
    $request->action = GETDeleteClusterParameterGroupActionEnum::DELETE_CLUSTER_PARAMETER_GROUP;
    $request->parameterGroupName = 'commodi';
    $request->version = GETDeleteClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->getDeleteClusterParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteClusterSecurityGroup

<p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteClusterSecurityGroupRequest();
    $request->action = GETDeleteClusterSecurityGroupActionEnum::DELETE_CLUSTER_SECURITY_GROUP;
    $request->clusterSecurityGroupName = 'modi';
    $request->version = GETDeleteClusterSecurityGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->getDeleteClusterSecurityGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteClusterSnapshot

<p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteClusterSnapshotRequest();
    $request->action = GETDeleteClusterSnapshotActionEnum::DELETE_CLUSTER_SNAPSHOT;
    $request->snapshotClusterIdentifier = 'itaque';
    $request->snapshotIdentifier = 'incidunt';
    $request->version = GETDeleteClusterSnapshotVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';

    $response = $sdk->sdk->getDeleteClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteClusterSubnetGroup

Deletes the specified cluster subnet group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteClusterSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteClusterSubnetGroupRequest();
    $request->action = GETDeleteClusterSubnetGroupActionEnum::DELETE_CLUSTER_SUBNET_GROUP;
    $request->clusterSubnetGroupName = 'quibusdam';
    $request->version = GETDeleteClusterSubnetGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getDeleteClusterSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteEndpointAccess

Deletes a Redshift-managed VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteEndpointAccessRequest();
    $request->action = GETDeleteEndpointAccessActionEnum::DELETE_ENDPOINT_ACCESS;
    $request->endpointName = 'magni';
    $request->version = GETDeleteEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->getDeleteEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteEventSubscription

Deletes an Amazon Redshift event notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteEventSubscriptionRequest();
    $request->action = GETDeleteEventSubscriptionActionEnum::DELETE_EVENT_SUBSCRIPTION;
    $request->subscriptionName = 'facilis';
    $request->version = GETDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->getDeleteEventSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteHsmClientCertificate

Deletes the specified HSM client certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteHsmClientCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteHsmClientCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteHsmClientCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteHsmClientCertificateRequest();
    $request->action = GETDeleteHsmClientCertificateActionEnum::DELETE_HSM_CLIENT_CERTIFICATE;
    $request->hsmClientCertificateIdentifier = 'aliquid';
    $request->version = GETDeleteHsmClientCertificateVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->getDeleteHsmClientCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteHsmConfiguration

Deletes the specified Amazon Redshift HSM configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteHsmConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteHsmConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteHsmConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteHsmConfigurationRequest();
    $request->action = GETDeleteHsmConfigurationActionEnum::DELETE_HSM_CONFIGURATION;
    $request->hsmConfigurationIdentifier = 'dolorum';
    $request->version = GETDeleteHsmConfigurationVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->getDeleteHsmConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeletePartner

Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePartnerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePartnerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePartnerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeletePartnerRequest();
    $request->accountId = 'cumque';
    $request->action = GETDeletePartnerActionEnum::DELETE_PARTNER;
    $request->clusterIdentifier = 'facere';
    $request->databaseName = 'ea';
    $request->partnerName = 'aliquid';
    $request->version = GETDeletePartnerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->getDeletePartner($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteScheduledAction

Deletes a scheduled action. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteScheduledActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteScheduledActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteScheduledActionRequest();
    $request->action = GETDeleteScheduledActionActionEnum::DELETE_SCHEDULED_ACTION;
    $request->scheduledActionName = 'quidem';
    $request->version = GETDeleteScheduledActionVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->getDeleteScheduledAction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteSnapshotCopyGrant

Deletes the specified snapshot copy grant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSnapshotCopyGrantRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSnapshotCopyGrantActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSnapshotCopyGrantVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteSnapshotCopyGrantRequest();
    $request->action = GETDeleteSnapshotCopyGrantActionEnum::DELETE_SNAPSHOT_COPY_GRANT;
    $request->snapshotCopyGrantName = 'deserunt';
    $request->version = GETDeleteSnapshotCopyGrantVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->getDeleteSnapshotCopyGrant($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteSnapshotSchedule

Deletes a snapshot schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSnapshotScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSnapshotScheduleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSnapshotScheduleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteSnapshotScheduleRequest();
    $request->action = GETDeleteSnapshotScheduleActionEnum::DELETE_SNAPSHOT_SCHEDULE;
    $request->scheduleIdentifier = 'magnam';
    $request->version = GETDeleteSnapshotScheduleVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getDeleteSnapshotSchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteTags

Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteTagsRequest();
    $request->action = GETDeleteTagsActionEnum::DELETE_TAGS;
    $request->resourceName = 'eum';
    $request->tagKeys = [
        'aspernatur',
        'architecto',
        'magnam',
        'et',
    ];
    $request->version = GETDeleteTagsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->getDeleteTags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteUsageLimit

Deletes a usage limit from a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUsageLimitActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUsageLimitVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteUsageLimitRequest();
    $request->action = GETDeleteUsageLimitActionEnum::DELETE_USAGE_LIMIT;
    $request->usageLimitId = 'reiciendis';
    $request->version = GETDeleteUsageLimitVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->getDeleteUsageLimit($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAccountAttributes

Returns a list of attributes attached to an account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAccountAttributesRequest();
    $request->action = GETDescribeAccountAttributesActionEnum::DESCRIBE_ACCOUNT_ATTRIBUTES;
    $request->attributeNames = [
        'iure',
    ];
    $request->version = GETDescribeAccountAttributesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->getDescribeAccountAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAuthenticationProfiles

Describes an authentication profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAuthenticationProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAuthenticationProfilesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAuthenticationProfilesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAuthenticationProfilesRequest();
    $request->action = GETDescribeAuthenticationProfilesActionEnum::DESCRIBE_AUTHENTICATION_PROFILES;
    $request->authenticationProfileName = 'architecto';
    $request->version = GETDescribeAuthenticationProfilesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->getDescribeAuthenticationProfiles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeClusterDbRevisions

Returns an array of <code>ClusterDbRevision</code> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterDbRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterDbRevisionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterDbRevisionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeClusterDbRevisionsRequest();
    $request->action = GETDescribeClusterDbRevisionsActionEnum::DESCRIBE_CLUSTER_DB_REVISIONS;
    $request->clusterIdentifier = 'sed';
    $request->marker = 'saepe';
    $request->maxRecords = 868126;
    $request->version = GETDescribeClusterDbRevisionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->getDescribeClusterDbRevisions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeClusterParameterGroups

<p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterParameterGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterParameterGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterParameterGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeClusterParameterGroupsRequest();
    $request->action = GETDescribeClusterParameterGroupsActionEnum::DESCRIBE_CLUSTER_PARAMETER_GROUPS;
    $request->marker = 'illum';
    $request->maxRecords = 864934;
    $request->parameterGroupName = 'maxime';
    $request->tagKeys = [
        'excepturi',
        'odit',
    ];
    $request->tagValues = [
        'accusantium',
        'ab',
    ];
    $request->version = GETDescribeClusterParameterGroupsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->getDescribeClusterParameterGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeClusterParameters

<p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeClusterParametersRequest();
    $request->action = GETDescribeClusterParametersActionEnum::DESCRIBE_CLUSTER_PARAMETERS;
    $request->marker = 'pariatur';
    $request->maxRecords = 365496;
    $request->parameterGroupName = 'voluptatibus';
    $request->source = 'perferendis';
    $request->version = GETDescribeClusterParametersVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->getDescribeClusterParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeClusterSecurityGroups

<p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterSecurityGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterSecurityGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterSecurityGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeClusterSecurityGroupsRequest();
    $request->action = GETDescribeClusterSecurityGroupsActionEnum::DESCRIBE_CLUSTER_SECURITY_GROUPS;
    $request->clusterSecurityGroupName = 'nobis';
    $request->marker = 'dolores';
    $request->maxRecords = 339404;
    $request->tagKeys = [
        'dignissimos',
        'eaque',
        'quis',
    ];
    $request->tagValues = [
        'eos',
    ];
    $request->version = GETDescribeClusterSecurityGroupsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->getDescribeClusterSecurityGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeClusterSubnetGroups

<p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterSubnetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterSubnetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterSubnetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeClusterSubnetGroupsRequest();
    $request->action = GETDescribeClusterSubnetGroupsActionEnum::DESCRIBE_CLUSTER_SUBNET_GROUPS;
    $request->clusterSubnetGroupName = 'hic';
    $request->marker = 'recusandae';
    $request->maxRecords = 608253;
    $request->tagKeys = [
        'perspiciatis',
        'voluptatem',
        'porro',
    ];
    $request->tagValues = [
        'blanditiis',
    ];
    $request->version = GETDescribeClusterSubnetGroupsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->getDescribeClusterSubnetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeClusterTracks

Returns a list of all the available maintenance tracks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterTracksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterTracksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterTracksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeClusterTracksRequest();
    $request->action = GETDescribeClusterTracksActionEnum::DESCRIBE_CLUSTER_TRACKS;
    $request->maintenanceTrackName = 'modi';
    $request->marker = 'iste';
    $request->maxRecords = 679091;
    $request->version = GETDescribeClusterTracksVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->getDescribeClusterTracks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeClusterVersions

Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeClusterVersionsRequest();
    $request->action = GETDescribeClusterVersionsActionEnum::DESCRIBE_CLUSTER_VERSIONS;
    $request->clusterParameterGroupFamily = 'quos';
    $request->clusterVersion = 'aliquid';
    $request->marker = 'dolorem';
    $request->maxRecords = 209843;
    $request->version = GETDescribeClusterVersionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getDescribeClusterVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeClusters

<p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClustersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeClustersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeClustersRequest();
    $request->action = GETDescribeClustersActionEnum::DESCRIBE_CLUSTERS;
    $request->clusterIdentifier = 'dignissimos';
    $request->marker = 'reiciendis';
    $request->maxRecords = 227414;
    $request->tagKeys = [
        'numquam',
        'veritatis',
        'ipsa',
    ];
    $request->tagValues = [
        'iure',
    ];
    $request->version = GETDescribeClustersVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getDescribeClusters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDataShares

Shows the status of any inbound or outbound datashares available in the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDataSharesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDataSharesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDataSharesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDataSharesRequest();
    $request->action = GETDescribeDataSharesActionEnum::DESCRIBE_DATA_SHARES;
    $request->dataShareArn = 'eos';
    $request->marker = 'atque';
    $request->maxRecords = 24678;
    $request->version = GETDescribeDataSharesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getDescribeDataShares($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDataSharesForConsumer

Returns a list of datashares where the account identifier being called is a consumer account identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDataSharesForConsumerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDataSharesForConsumerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDataSharesForConsumerStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDataSharesForConsumerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDataSharesForConsumerRequest();
    $request->action = GETDescribeDataSharesForConsumerActionEnum::DESCRIBE_DATA_SHARES_FOR_CONSUMER;
    $request->consumerArn = 'deleniti';
    $request->marker = 'omnis';
    $request->maxRecords = 896672;
    $request->status = GETDescribeDataSharesForConsumerStatusEnum::AVAILABLE;
    $request->version = GETDescribeDataSharesForConsumerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'eius';

    $response = $sdk->sdk->getDescribeDataSharesForConsumer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDataSharesForProducer

Returns a list of datashares when the account identifier being called is a producer account identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDataSharesForProducerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDataSharesForProducerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDataSharesForProducerStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDataSharesForProducerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDataSharesForProducerRequest();
    $request->action = GETDescribeDataSharesForProducerActionEnum::DESCRIBE_DATA_SHARES_FOR_PRODUCER;
    $request->marker = 'aspernatur';
    $request->maxRecords = 20651;
    $request->producerArn = 'amet';
    $request->status = GETDescribeDataSharesForProducerStatusEnum::DEAUTHORIZED;
    $request->version = GETDescribeDataSharesForProducerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->getDescribeDataSharesForProducer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDefaultClusterParameters

<p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDefaultClusterParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDefaultClusterParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDefaultClusterParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDefaultClusterParametersRequest();
    $request->action = GETDescribeDefaultClusterParametersActionEnum::DESCRIBE_DEFAULT_CLUSTER_PARAMETERS;
    $request->marker = 'repellendus';
    $request->maxRecords = 519711;
    $request->parameterGroupFamily = 'similique';
    $request->version = GETDescribeDefaultClusterParametersVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';

    $response = $sdk->sdk->getDescribeDefaultClusterParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEndpointAccess

Describes a Redshift-managed VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEndpointAccessRequest();
    $request->action = GETDescribeEndpointAccessActionEnum::DESCRIBE_ENDPOINT_ACCESS;
    $request->clusterIdentifier = 'qui';
    $request->endpointName = 'dolorum';
    $request->marker = 'a';
    $request->maxRecords = 456130;
    $request->resourceOwner = 'harum';
    $request->version = GETDescribeEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->vpcId = 'iusto';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->getDescribeEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEndpointAuthorization

Describes an endpoint authorization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEndpointAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEndpointAuthorizationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEndpointAuthorizationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEndpointAuthorizationRequest();
    $request->account = 'enim';
    $request->action = GETDescribeEndpointAuthorizationActionEnum::DESCRIBE_ENDPOINT_AUTHORIZATION;
    $request->clusterIdentifier = 'dolorem';
    $request->grantee = false;
    $request->marker = 'sapiente';
    $request->maxRecords = 518201;
    $request->version = GETDescribeEndpointAuthorizationVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->getDescribeEndpointAuthorization($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEventCategories

Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventCategoriesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventCategoriesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEventCategoriesRequest();
    $request->action = GETDescribeEventCategoriesActionEnum::DESCRIBE_EVENT_CATEGORIES;
    $request->sourceType = 'voluptas';
    $request->version = GETDescribeEventCategoriesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->getDescribeEventCategories($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEventSubscriptions

<p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventSubscriptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventSubscriptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEventSubscriptionsRequest();
    $request->action = GETDescribeEventSubscriptionsActionEnum::DESCRIBE_EVENT_SUBSCRIPTIONS;
    $request->marker = 'pariatur';
    $request->maxRecords = 747080;
    $request->subscriptionName = 'dicta';
    $request->tagKeys = [
        'totam',
        'incidunt',
        'aspernatur',
    ];
    $request->tagValues = [
        'distinctio',
    ];
    $request->version = GETDescribeEventSubscriptionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->getDescribeEventSubscriptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEvents

Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEventsRequest();
    $request->action = GETDescribeEventsActionEnum::DESCRIBE_EVENTS;
    $request->duration = 144847;
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T20:37:36.497Z');
    $request->marker = 'sunt';
    $request->maxRecords = 355613;
    $request->sourceIdentifier = 'nam';
    $request->sourceType = GETDescribeEventsSourceTypeEnum::SCHEDULED_ACTION;
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T15:45:02.604Z');
    $request->version = GETDescribeEventsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getDescribeEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeHsmClientCertificates

<p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeHsmClientCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeHsmClientCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeHsmClientCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeHsmClientCertificatesRequest();
    $request->action = GETDescribeHsmClientCertificatesActionEnum::DESCRIBE_HSM_CLIENT_CERTIFICATES;
    $request->hsmClientCertificateIdentifier = 'quos';
    $request->marker = 'tempore';
    $request->maxRecords = 584476;
    $request->tagKeys = [
        'delectus',
    ];
    $request->tagValues = [
        'dolore',
    ];
    $request->version = GETDescribeHsmClientCertificatesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->getDescribeHsmClientCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeHsmConfigurations

<p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeHsmConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeHsmConfigurationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeHsmConfigurationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeHsmConfigurationsRequest();
    $request->action = GETDescribeHsmConfigurationsActionEnum::DESCRIBE_HSM_CONFIGURATIONS;
    $request->hsmConfigurationIdentifier = 'itaque';
    $request->marker = 'consequatur';
    $request->maxRecords = 669917;
    $request->tagKeys = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->tagValues = [
        'qui',
        'quae',
        'laudantium',
    ];
    $request->version = GETDescribeHsmConfigurationsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->getDescribeHsmConfigurations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLoggingStatus

Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoggingStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoggingStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoggingStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeLoggingStatusRequest();
    $request->action = GETDescribeLoggingStatusActionEnum::DESCRIBE_LOGGING_STATUS;
    $request->clusterIdentifier = 'ipsum';
    $request->version = GETDescribeLoggingStatusVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getDescribeLoggingStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeOrderableClusterOptions

Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOrderableClusterOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOrderableClusterOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOrderableClusterOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeOrderableClusterOptionsRequest();
    $request->action = GETDescribeOrderableClusterOptionsActionEnum::DESCRIBE_ORDERABLE_CLUSTER_OPTIONS;
    $request->clusterVersion = 'distinctio';
    $request->marker = 'quod';
    $request->maxRecords = 486160;
    $request->nodeType = 'similique';
    $request->version = GETDescribeOrderableClusterOptionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'sequi';

    $response = $sdk->sdk->getDescribeOrderableClusterOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribePartners

Returns information about the partner integrations defined for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePartnersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePartnersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePartnersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribePartnersRequest();
    $request->accountId = 'natus';
    $request->action = GETDescribePartnersActionEnum::DESCRIBE_PARTNERS;
    $request->clusterIdentifier = 'impedit';
    $request->databaseName = 'aut';
    $request->partnerName = 'voluptatibus';
    $request->version = GETDescribePartnersVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->getDescribePartners($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeReservedNodeExchangeStatus

Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedNodeExchangeStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedNodeExchangeStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedNodeExchangeStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeReservedNodeExchangeStatusRequest();
    $request->action = GETDescribeReservedNodeExchangeStatusActionEnum::DESCRIBE_RESERVED_NODE_EXCHANGE_STATUS;
    $request->marker = 'eligendi';
    $request->maxRecords = 497391;
    $request->reservedNodeExchangeRequestId = 'alias';
    $request->reservedNodeId = 'officia';
    $request->version = GETDescribeReservedNodeExchangeStatusVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->getDescribeReservedNodeExchangeStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeReservedNodeOfferings

<p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedNodeOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedNodeOfferingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedNodeOfferingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeReservedNodeOfferingsRequest();
    $request->action = GETDescribeReservedNodeOfferingsActionEnum::DESCRIBE_RESERVED_NODE_OFFERINGS;
    $request->marker = 'ratione';
    $request->maxRecords = 401132;
    $request->reservedNodeOfferingId = 'laudantium';
    $request->version = GETDescribeReservedNodeOfferingsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getDescribeReservedNodeOfferings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeReservedNodes

Returns the descriptions of the reserved nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedNodesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedNodesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedNodesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeReservedNodesRequest();
    $request->action = GETDescribeReservedNodesActionEnum::DESCRIBE_RESERVED_NODES;
    $request->marker = 'voluptatibus';
    $request->maxRecords = 343605;
    $request->reservedNodeId = 'sapiente';
    $request->version = GETDescribeReservedNodesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->getDescribeReservedNodes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeResize

<p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeResizeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeResizeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeResizeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeResizeRequest();
    $request->action = GETDescribeResizeActionEnum::DESCRIBE_RESIZE;
    $request->clusterIdentifier = 'inventore';
    $request->version = GETDescribeResizeVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->getDescribeResize($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeSnapshotCopyGrants

<p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSnapshotCopyGrantsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSnapshotCopyGrantsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSnapshotCopyGrantsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeSnapshotCopyGrantsRequest();
    $request->action = GETDescribeSnapshotCopyGrantsActionEnum::DESCRIBE_SNAPSHOT_COPY_GRANTS;
    $request->marker = 'eaque';
    $request->maxRecords = 952871;
    $request->snapshotCopyGrantName = 'libero';
    $request->tagKeys = [
        'aut',
    ];
    $request->tagValues = [
        'impedit',
        'aliquam',
        'fugit',
    ];
    $request->version = GETDescribeSnapshotCopyGrantsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->getDescribeSnapshotCopyGrants($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeSnapshotSchedules

Returns a list of snapshot schedules. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSnapshotSchedulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSnapshotSchedulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSnapshotSchedulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeSnapshotSchedulesRequest();
    $request->action = GETDescribeSnapshotSchedulesActionEnum::DESCRIBE_SNAPSHOT_SCHEDULES;
    $request->clusterIdentifier = 'velit';
    $request->marker = 'eum';
    $request->maxRecords = 420539;
    $request->scheduleIdentifier = 'nobis';
    $request->tagKeys = [
        'assumenda',
        'nulla',
        'voluptas',
    ];
    $request->tagValues = [
        'quasi',
        'tempora',
        'numquam',
    ];
    $request->version = GETDescribeSnapshotSchedulesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eius';

    $response = $sdk->sdk->getDescribeSnapshotSchedules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStorage

Returns account level backups storage size and provisional storage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStorageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStorageActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStorageVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStorageRequest();
    $request->action = GETDescribeStorageActionEnum::DESCRIBE_STORAGE;
    $request->version = GETDescribeStorageVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'fugiat';

    $response = $sdk->sdk->getDescribeStorage($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeTableRestoreStatus

Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTableRestoreStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTableRestoreStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTableRestoreStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeTableRestoreStatusRequest();
    $request->action = GETDescribeTableRestoreStatusActionEnum::DESCRIBE_TABLE_RESTORE_STATUS;
    $request->clusterIdentifier = 'ut';
    $request->marker = 'eum';
    $request->maxRecords = 379927;
    $request->tableRestoreRequestId = 'assumenda';
    $request->version = GETDescribeTableRestoreStatusVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->getDescribeTableRestoreStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeTags

<p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeTagsRequest();
    $request->action = GETDescribeTagsActionEnum::DESCRIBE_TAGS;
    $request->marker = 'neque';
    $request->maxRecords = 778696;
    $request->resourceName = 'illum';
    $request->resourceType = 'quo';
    $request->tagKeys = [
        'eius',
        'eos',
        'voluptas',
    ];
    $request->tagValues = [
        'cupiditate',
    ];
    $request->version = GETDescribeTagsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->getDescribeTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeUsageLimits

<p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeUsageLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeUsageLimitsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeUsageLimitsFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeUsageLimitsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeUsageLimitsRequest();
    $request->action = GETDescribeUsageLimitsActionEnum::DESCRIBE_USAGE_LIMITS;
    $request->clusterIdentifier = 'esse';
    $request->featureType = GETDescribeUsageLimitsFeatureTypeEnum::CROSS_REGION_DATASHARING;
    $request->marker = 'aperiam';
    $request->maxRecords = 715179;
    $request->tagKeys = [
        'dignissimos',
        'inventore',
        'nihil',
        'totam',
    ];
    $request->tagValues = [
        'aliquam',
        'odio',
        'occaecati',
        'commodi',
    ];
    $request->usageLimitId = 'sapiente';
    $request->version = GETDescribeUsageLimitsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->getDescribeUsageLimits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisableLogging

Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableLoggingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableLoggingActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableLoggingVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDisableLoggingRequest();
    $request->action = GETDisableLoggingActionEnum::DISABLE_LOGGING;
    $request->clusterIdentifier = 'praesentium';
    $request->version = GETDisableLoggingVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'atque';

    $response = $sdk->sdk->getDisableLogging($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisableSnapshotCopy

<p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableSnapshotCopyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableSnapshotCopyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableSnapshotCopyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDisableSnapshotCopyRequest();
    $request->action = GETDisableSnapshotCopyActionEnum::DISABLE_SNAPSHOT_COPY;
    $request->clusterIdentifier = 'explicabo';
    $request->version = GETDisableSnapshotCopyVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->getDisableSnapshotCopy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisassociateDataShareConsumer

From a datashare consumer account, remove association for the specified datashare. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDisassociateDataShareConsumerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDisassociateDataShareConsumerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDisassociateDataShareConsumerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDisassociateDataShareConsumerRequest();
    $request->action = GETDisassociateDataShareConsumerActionEnum::DISASSOCIATE_DATA_SHARE_CONSUMER;
    $request->consumerArn = 'saepe';
    $request->consumerRegion = 'occaecati';
    $request->dataShareArn = 'atque';
    $request->disassociateEntireAccount = false;
    $request->version = GETDisassociateDataShareConsumerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->getDisassociateDataShareConsumer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnableLogging

Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableLoggingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableLoggingActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableLoggingLogDestinationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableLoggingVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETEnableLoggingRequest();
    $request->action = GETEnableLoggingActionEnum::ENABLE_LOGGING;
    $request->bucketName = 'nam';
    $request->clusterIdentifier = 'vero';
    $request->logDestinationType = GETEnableLoggingLogDestinationTypeEnum::S3;
    $request->logExports = [
        'saepe',
    ];
    $request->s3KeyPrefix = 'vel';
    $request->version = GETEnableLoggingVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'eligendi';

    $response = $sdk->sdk->getEnableLogging($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnableSnapshotCopy

Enables the automatic copy of snapshots from one region to another region for a specified cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableSnapshotCopyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableSnapshotCopyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableSnapshotCopyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETEnableSnapshotCopyRequest();
    $request->action = GETEnableSnapshotCopyActionEnum::ENABLE_SNAPSHOT_COPY;
    $request->clusterIdentifier = 'sit';
    $request->destinationRegion = 'culpa';
    $request->manualSnapshotRetentionPeriod = 731398;
    $request->retentionPeriod = 240020;
    $request->snapshotCopyGrantName = 'cumque';
    $request->version = GETEnableSnapshotCopyVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->getEnableSnapshotCopy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETClusterCredentials

<p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETClusterCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETClusterCredentialsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETClusterCredentialsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETClusterCredentialsRequest();
    $request->action = GETGETClusterCredentialsActionEnum::GET_CLUSTER_CREDENTIALS;
    $request->autoCreate = false;
    $request->clusterIdentifier = 'blanditiis';
    $request->dbGroups = [
        'a',
        'nulla',
        'quas',
    ];
    $request->dbName = 'esse';
    $request->dbUser = 'quasi';
    $request->durationSeconds = 951875;
    $request->version = GETGETClusterCredentialsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->getGETClusterCredentials($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETClusterCredentialsWithIAM

<p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETClusterCredentialsWithIAMRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETClusterCredentialsWithIAMActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETClusterCredentialsWithIAMVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETClusterCredentialsWithIAMRequest();
    $request->action = GETGETClusterCredentialsWithIAMActionEnum::GET_CLUSTER_CREDENTIALS_WITH_IAM;
    $request->clusterIdentifier = 'facere';
    $request->dbName = 'veritatis';
    $request->durationSeconds = 159414;
    $request->version = GETGETClusterCredentialsWithIAMVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->getGETClusterCredentialsWithIAM($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETReservedNodeExchangeConfigurationOptions

Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETReservedNodeExchangeConfigurationOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETReservedNodeExchangeConfigurationOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETReservedNodeExchangeConfigurationOptionsActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETReservedNodeExchangeConfigurationOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETReservedNodeExchangeConfigurationOptionsRequest();
    $request->action = GETGETReservedNodeExchangeConfigurationOptionsActionEnum::GET_RESERVED_NODE_EXCHANGE_CONFIGURATION_OPTIONS;
    $request->actionType = GETGETReservedNodeExchangeConfigurationOptionsActionTypeEnum::RESTORE_CLUSTER;
    $request->clusterIdentifier = 'in';
    $request->marker = 'eius';
    $request->maxRecords = 727697;
    $request->snapshotIdentifier = 'illum';
    $request->version = GETGETReservedNodeExchangeConfigurationOptionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->getGETReservedNodeExchangeConfigurationOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETReservedNodeExchangeOfferings

Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETReservedNodeExchangeOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETReservedNodeExchangeOfferingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETReservedNodeExchangeOfferingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETReservedNodeExchangeOfferingsRequest();
    $request->action = GETGETReservedNodeExchangeOfferingsActionEnum::GET_RESERVED_NODE_EXCHANGE_OFFERINGS;
    $request->marker = 'ullam';
    $request->maxRecords = 391774;
    $request->reservedNodeId = 'aut';
    $request->version = GETGETReservedNodeExchangeOfferingsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getGETReservedNodeExchangeOfferings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyAquaConfiguration

This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyAquaConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyAquaConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyAquaConfigurationAquaConfigurationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyAquaConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyAquaConfigurationRequest();
    $request->action = GETModifyAquaConfigurationActionEnum::MODIFY_AQUA_CONFIGURATION;
    $request->aquaConfigurationStatus = GETModifyAquaConfigurationAquaConfigurationStatusEnum::ENABLED;
    $request->clusterIdentifier = 'omnis';
    $request->version = GETModifyAquaConfigurationVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->getModifyAquaConfiguration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyAuthenticationProfile

Modifies an authentication profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyAuthenticationProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyAuthenticationProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyAuthenticationProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyAuthenticationProfileRequest();
    $request->action = GETModifyAuthenticationProfileActionEnum::MODIFY_AUTHENTICATION_PROFILE;
    $request->authenticationProfileContent = 'veritatis';
    $request->authenticationProfileName = 'consectetur';
    $request->version = GETModifyAuthenticationProfileVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'laudantium';

    $response = $sdk->sdk->getModifyAuthenticationProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyCluster

<p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyClusterRequest();
    $request->action = GETModifyClusterActionEnum::MODIFY_CLUSTER;
    $request->allowVersionUpgrade = false;
    $request->automatedSnapshotRetentionPeriod = 428796;
    $request->availabilityZone = 'mollitia';
    $request->availabilityZoneRelocation = false;
    $request->clusterIdentifier = 'ab';
    $request->clusterParameterGroupName = 'corrupti';
    $request->clusterSecurityGroups = [
        'voluptatem',
        'dolor',
    ];
    $request->clusterType = 'occaecati';
    $request->clusterVersion = 'numquam';
    $request->elasticIp = 'impedit';
    $request->encrypted = false;
    $request->enhancedVpcRouting = false;
    $request->hsmClientCertificateIdentifier = 'explicabo';
    $request->hsmConfigurationIdentifier = 'voluptas';
    $request->kmsKeyId = 'aut';
    $request->maintenanceTrackName = 'dignissimos';
    $request->manualSnapshotRetentionPeriod = 115484;
    $request->masterUserPassword = 'maiores';
    $request->newClusterIdentifier = 'natus';
    $request->nodeType = 'velit';
    $request->numberOfNodes = 974257;
    $request->port = 374323;
    $request->preferredMaintenanceWindow = 'asperiores';
    $request->publiclyAccessible = false;
    $request->version = GETModifyClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->vpcSecurityGroupIds = [
        'ea',
    ];
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->getModifyCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyClusterDbRevision

Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterDbRevisionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterDbRevisionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterDbRevisionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyClusterDbRevisionRequest();
    $request->action = GETModifyClusterDbRevisionActionEnum::MODIFY_CLUSTER_DB_REVISION;
    $request->clusterIdentifier = 'asperiores';
    $request->revisionTarget = 'nemo';
    $request->version = GETModifyClusterDbRevisionVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->getModifyClusterDbRevision($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyClusterIamRoles

<p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterIamRolesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterIamRolesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterIamRolesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyClusterIamRolesRequest();
    $request->action = GETModifyClusterIamRolesActionEnum::MODIFY_CLUSTER_IAM_ROLES;
    $request->addIamRoles = [
        'id',
        'suscipit',
        'velit',
    ];
    $request->clusterIdentifier = 'culpa';
    $request->defaultIamRoleArn = 'est';
    $request->removeIamRoles = [
        'totam',
        'fugiat',
        'vel',
        'ducimus',
    ];
    $request->version = GETModifyClusterIamRolesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->getModifyClusterIamRoles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyClusterMaintenance

Modifies the maintenance settings of a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterMaintenanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterMaintenanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterMaintenanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyClusterMaintenanceRequest();
    $request->action = GETModifyClusterMaintenanceActionEnum::MODIFY_CLUSTER_MAINTENANCE;
    $request->clusterIdentifier = 'in';
    $request->deferMaintenance = false;
    $request->deferMaintenanceDuration = 360545;
    $request->deferMaintenanceEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-07T14:53:46.338Z');
    $request->deferMaintenanceIdentifier = 'nemo';
    $request->deferMaintenanceStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-22T16:49:10.196Z');
    $request->version = GETModifyClusterMaintenanceVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->getModifyClusterMaintenance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyClusterSnapshot

<p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyClusterSnapshotRequest();
    $request->action = GETModifyClusterSnapshotActionEnum::MODIFY_CLUSTER_SNAPSHOT;
    $request->force = false;
    $request->manualSnapshotRetentionPeriod = 257233;
    $request->snapshotIdentifier = 'doloribus';
    $request->version = GETModifyClusterSnapshotVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'sunt';

    $response = $sdk->sdk->getModifyClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyClusterSnapshotSchedule

Modifies a snapshot schedule for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterSnapshotScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterSnapshotScheduleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterSnapshotScheduleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyClusterSnapshotScheduleRequest();
    $request->action = GETModifyClusterSnapshotScheduleActionEnum::MODIFY_CLUSTER_SNAPSHOT_SCHEDULE;
    $request->clusterIdentifier = 'asperiores';
    $request->disassociateSchedule = false;
    $request->scheduleIdentifier = 'adipisci';
    $request->version = GETModifyClusterSnapshotScheduleVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->getModifyClusterSnapshotSchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyClusterSubnetGroup

Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyClusterSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyClusterSubnetGroupRequest();
    $request->action = GETModifyClusterSubnetGroupActionEnum::MODIFY_CLUSTER_SUBNET_GROUP;
    $request->clusterSubnetGroupName = 'corporis';
    $request->description = 'harum';
    $request->subnetIds = [
        'ipsa',
        'voluptates',
    ];
    $request->version = GETModifyClusterSubnetGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->getModifyClusterSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyEndpointAccess

Modifies a Redshift-managed VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyEndpointAccessRequest();
    $request->action = GETModifyEndpointAccessActionEnum::MODIFY_ENDPOINT_ACCESS;
    $request->endpointName = 'voluptas';
    $request->version = GETModifyEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->vpcSecurityGroupIds = [
        'minima',
        'nobis',
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->getModifyEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyEventSubscription

Modifies an existing Amazon Redshift event notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyEventSubscriptionRequest();
    $request->action = GETModifyEventSubscriptionActionEnum::MODIFY_EVENT_SUBSCRIPTION;
    $request->enabled = false;
    $request->eventCategories = [
        'officiis',
        'temporibus',
    ];
    $request->severity = 'ullam';
    $request->snsTopicArn = 'adipisci';
    $request->sourceIds = [
        'blanditiis',
        'quas',
        'hic',
    ];
    $request->sourceType = 'nesciunt';
    $request->subscriptionName = 'culpa';
    $request->version = GETModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->getModifyEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifySnapshotCopyRetentionPeriod

Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifySnapshotCopyRetentionPeriodRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifySnapshotCopyRetentionPeriodActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifySnapshotCopyRetentionPeriodVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifySnapshotCopyRetentionPeriodRequest();
    $request->action = GETModifySnapshotCopyRetentionPeriodActionEnum::MODIFY_SNAPSHOT_COPY_RETENTION_PERIOD;
    $request->clusterIdentifier = 'rerum';
    $request->manual = false;
    $request->retentionPeriod = 148829;
    $request->version = GETModifySnapshotCopyRetentionPeriodVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->getModifySnapshotCopyRetentionPeriod($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifySnapshotSchedule

Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifySnapshotScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifySnapshotScheduleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifySnapshotScheduleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifySnapshotScheduleRequest();
    $request->action = GETModifySnapshotScheduleActionEnum::MODIFY_SNAPSHOT_SCHEDULE;
    $request->scheduleDefinitions = [
        'dolore',
        'laborum',
        'sed',
    ];
    $request->scheduleIdentifier = 'in';
    $request->version = GETModifySnapshotScheduleVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->getModifySnapshotSchedule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyUsageLimit

Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyUsageLimitActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyUsageLimitBreachActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyUsageLimitVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyUsageLimitRequest();
    $request->action = GETModifyUsageLimitActionEnum::MODIFY_USAGE_LIMIT;
    $request->amount = 960257;
    $request->breachAction = GETModifyUsageLimitBreachActionEnum::DISABLE;
    $request->usageLimitId = 'illo';
    $request->version = GETModifyUsageLimitVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->getModifyUsageLimit($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPauseCluster

Pauses a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPauseClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPauseClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPauseClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPauseClusterRequest();
    $request->action = GETPauseClusterActionEnum::PAUSE_CLUSTER;
    $request->clusterIdentifier = 'eius';
    $request->version = GETPauseClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->getPauseCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPurchaseReservedNodeOffering

<p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPurchaseReservedNodeOfferingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPurchaseReservedNodeOfferingActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPurchaseReservedNodeOfferingVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPurchaseReservedNodeOfferingRequest();
    $request->action = GETPurchaseReservedNodeOfferingActionEnum::PURCHASE_RESERVED_NODE_OFFERING;
    $request->nodeCount = 273009;
    $request->reservedNodeOfferingId = 'voluptate';
    $request->version = GETPurchaseReservedNodeOfferingVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->getPurchaseReservedNodeOffering($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRebootCluster

Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRebootClusterRequest();
    $request->action = GETRebootClusterActionEnum::REBOOT_CLUSTER;
    $request->clusterIdentifier = 'quaerat';
    $request->version = GETRebootClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->getRebootCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRejectDataShare

From a datashare consumer account, rejects the specified datashare.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRejectDataShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRejectDataShareActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRejectDataShareVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRejectDataShareRequest();
    $request->action = GETRejectDataShareActionEnum::REJECT_DATA_SHARE;
    $request->dataShareArn = 'veniam';
    $request->version = GETRejectDataShareVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->getRejectDataShare($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResizeCluster

<p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETResizeClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETResizeClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETResizeClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETResizeClusterRequest();
    $request->action = GETResizeClusterActionEnum::RESIZE_CLUSTER;
    $request->classic = false;
    $request->clusterIdentifier = 'numquam';
    $request->clusterType = 'veniam';
    $request->nodeType = 'in';
    $request->numberOfNodes = 889234;
    $request->reservedNodeId = 'beatae';
    $request->targetReservedNodeOfferingId = 'laudantium';
    $request->version = GETResizeClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->getResizeCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRestoreFromClusterSnapshot

<p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreFromClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreFromClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreFromClusterSnapshotAquaConfigurationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreFromClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRestoreFromClusterSnapshotRequest();
    $request->action = GETRestoreFromClusterSnapshotActionEnum::RESTORE_FROM_CLUSTER_SNAPSHOT;
    $request->additionalInfo = 'hic';
    $request->allowVersionUpgrade = false;
    $request->aquaConfigurationStatus = GETRestoreFromClusterSnapshotAquaConfigurationStatusEnum::AUTO;
    $request->automatedSnapshotRetentionPeriod = 892863;
    $request->availabilityZone = 'neque';
    $request->availabilityZoneRelocation = false;
    $request->clusterIdentifier = 'dolorum';
    $request->clusterParameterGroupName = 'nostrum';
    $request->clusterSecurityGroups = [
        'dolorum',
        'corrupti',
        'accusamus',
    ];
    $request->clusterSubnetGroupName = 'tempora';
    $request->defaultIamRoleArn = 'atque';
    $request->elasticIp = 'fugit';
    $request->encrypted = false;
    $request->enhancedVpcRouting = false;
    $request->hsmClientCertificateIdentifier = 'ut';
    $request->hsmConfigurationIdentifier = 'fugiat';
    $request->iamRoles = [
        'culpa',
    ];
    $request->kmsKeyId = 'expedita';
    $request->maintenanceTrackName = 'magnam';
    $request->manualSnapshotRetentionPeriod = 7884;
    $request->nodeType = 'esse';
    $request->numberOfNodes = 372679;
    $request->ownerAccount = 'sit';
    $request->port = 530537;
    $request->preferredMaintenanceWindow = 'quas';
    $request->publiclyAccessible = false;
    $request->reservedNodeId = 'repudiandae';
    $request->snapshotArn = 'corporis';
    $request->snapshotClusterIdentifier = 'et';
    $request->snapshotIdentifier = 'blanditiis';
    $request->snapshotScheduleIdentifier = 'ex';
    $request->targetReservedNodeOfferingId = 'sed';
    $request->version = GETRestoreFromClusterSnapshotVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->vpcSecurityGroupIds = [
        'vel',
    ];
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->getRestoreFromClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRestoreTableFromClusterSnapshot

<p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreTableFromClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreTableFromClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreTableFromClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRestoreTableFromClusterSnapshotRequest();
    $request->action = GETRestoreTableFromClusterSnapshotActionEnum::RESTORE_TABLE_FROM_CLUSTER_SNAPSHOT;
    $request->clusterIdentifier = 'harum';
    $request->enableCaseSensitiveIdentifier = false;
    $request->newTableName = 'dicta';
    $request->snapshotIdentifier = 'architecto';
    $request->sourceDatabaseName = 'occaecati';
    $request->sourceSchemaName = 'labore';
    $request->sourceTableName = 'quidem';
    $request->targetDatabaseName = 'atque';
    $request->targetSchemaName = 'laborum';
    $request->version = GETRestoreTableFromClusterSnapshotVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getRestoreTableFromClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResumeCluster

Resumes a paused cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETResumeClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETResumeClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETResumeClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETResumeClusterRequest();
    $request->action = GETResumeClusterActionEnum::RESUME_CLUSTER;
    $request->clusterIdentifier = 'unde';
    $request->version = GETResumeClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->getResumeCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevokeClusterSecurityGroupIngress

Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeClusterSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeClusterSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeClusterSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRevokeClusterSecurityGroupIngressRequest();
    $request->action = GETRevokeClusterSecurityGroupIngressActionEnum::REVOKE_CLUSTER_SECURITY_GROUP_INGRESS;
    $request->cidrip = 'quidem';
    $request->clusterSecurityGroupName = 'reprehenderit';
    $request->ec2SecurityGroupName = 'facere';
    $request->ec2SecurityGroupOwnerId = 'fuga';
    $request->version = GETRevokeClusterSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getRevokeClusterSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevokeEndpointAccess

Revokes access to a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRevokeEndpointAccessRequest();
    $request->account = 'atque';
    $request->action = GETRevokeEndpointAccessActionEnum::REVOKE_ENDPOINT_ACCESS;
    $request->clusterIdentifier = 'reprehenderit';
    $request->force = false;
    $request->version = GETRevokeEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->vpcIds = [
        'totam',
        'suscipit',
        'quidem',
        'maxime',
    ];
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->getRevokeEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevokeSnapshotAccess

<p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeSnapshotAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeSnapshotAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeSnapshotAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRevokeSnapshotAccessRequest();
    $request->accountWithRestoreAccess = 'officiis';
    $request->action = GETRevokeSnapshotAccessActionEnum::REVOKE_SNAPSHOT_ACCESS;
    $request->snapshotArn = 'officiis';
    $request->snapshotClusterIdentifier = 'accusamus';
    $request->snapshotIdentifier = 'natus';
    $request->version = GETRevokeSnapshotAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->getRevokeSnapshotAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRotateEncryptionKey

Rotates the encryption keys for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRotateEncryptionKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRotateEncryptionKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRotateEncryptionKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRotateEncryptionKeyRequest();
    $request->action = GETRotateEncryptionKeyActionEnum::ROTATE_ENCRYPTION_KEY;
    $request->clusterIdentifier = 'blanditiis';
    $request->version = GETRotateEncryptionKeyVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getRotateEncryptionKey($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdatePartnerStatus

Updates the status of a partner integration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdatePartnerStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdatePartnerStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdatePartnerStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdatePartnerStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdatePartnerStatusRequest();
    $request->accountId = 'repellendus';
    $request->action = GETUpdatePartnerStatusActionEnum::UPDATE_PARTNER_STATUS;
    $request->clusterIdentifier = 'labore';
    $request->databaseName = 'reiciendis';
    $request->partnerName = 'doloremque';
    $request->status = GETUpdatePartnerStatusStatusEnum::CONNECTION_FAILURE;
    $request->statusMessage = 'dicta';
    $request->version = GETUpdatePartnerStatusVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->getUpdatePartnerStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAcceptReservedNodeExchange

Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAcceptReservedNodeExchangeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAcceptReservedNodeExchangeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAcceptReservedNodeExchangeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAcceptReservedNodeExchangeRequest();
    $request->action = POSTAcceptReservedNodeExchangeActionEnum::ACCEPT_RESERVED_NODE_EXCHANGE;
    $request->requestBody = 'molestias';
    $request->version = POSTAcceptReservedNodeExchangeVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->postAcceptReservedNodeExchange($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddPartner

Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddPartnerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddPartnerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddPartnerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddPartnerRequest();
    $request->action = POSTAddPartnerActionEnum::ADD_PARTNER;
    $request->requestBody = 'adipisci';
    $request->version = POSTAddPartnerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->postAddPartner($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssociateDataShareConsumer

From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAssociateDataShareConsumerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAssociateDataShareConsumerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAssociateDataShareConsumerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAssociateDataShareConsumerRequest();
    $request->action = POSTAssociateDataShareConsumerActionEnum::ASSOCIATE_DATA_SHARE_CONSUMER;
    $request->requestBody = 'error';
    $request->version = POSTAssociateDataShareConsumerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'illo';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'doloremque';

    $response = $sdk->sdk->postAssociateDataShareConsumer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthorizeClusterSecurityGroupIngress

<p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeClusterSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeClusterSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeClusterSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAuthorizeClusterSecurityGroupIngressRequest();
    $request->action = POSTAuthorizeClusterSecurityGroupIngressActionEnum::AUTHORIZE_CLUSTER_SECURITY_GROUP_INGRESS;
    $request->requestBody = 'iure';
    $request->version = POSTAuthorizeClusterSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->postAuthorizeClusterSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthorizeDataShare

From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeDataShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeDataShareActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeDataShareVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAuthorizeDataShareRequest();
    $request->action = POSTAuthorizeDataShareActionEnum::AUTHORIZE_DATA_SHARE;
    $request->requestBody = 'iure';
    $request->version = POSTAuthorizeDataShareVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'aliquam';

    $response = $sdk->sdk->postAuthorizeDataShare($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthorizeEndpointAccess

Grants access to a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAuthorizeEndpointAccessRequest();
    $request->action = POSTAuthorizeEndpointAccessActionEnum::AUTHORIZE_ENDPOINT_ACCESS;
    $request->requestBody = 'ad';
    $request->version = POSTAuthorizeEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->postAuthorizeEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthorizeSnapshotAccess

<p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeSnapshotAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeSnapshotAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeSnapshotAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAuthorizeSnapshotAccessRequest();
    $request->action = POSTAuthorizeSnapshotAccessActionEnum::AUTHORIZE_SNAPSHOT_ACCESS;
    $request->requestBody = 'alias';
    $request->version = POSTAuthorizeSnapshotAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->postAuthorizeSnapshotAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBatchDeleteClusterSnapshots

Deletes a set of cluster snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDeleteClusterSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDeleteClusterSnapshotsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDeleteClusterSnapshotsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTBatchDeleteClusterSnapshotsRequest();
    $request->action = POSTBatchDeleteClusterSnapshotsActionEnum::BATCH_DELETE_CLUSTER_SNAPSHOTS;
    $request->requestBody = 'nesciunt';
    $request->version = POSTBatchDeleteClusterSnapshotsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'ut';

    $response = $sdk->sdk->postBatchDeleteClusterSnapshots($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBatchModifyClusterSnapshots

Modifies the settings for a set of cluster snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchModifyClusterSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchModifyClusterSnapshotsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchModifyClusterSnapshotsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTBatchModifyClusterSnapshotsRequest();
    $request->action = POSTBatchModifyClusterSnapshotsActionEnum::BATCH_MODIFY_CLUSTER_SNAPSHOTS;
    $request->requestBody = 'culpa';
    $request->version = POSTBatchModifyClusterSnapshotsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postBatchModifyClusterSnapshots($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCancelResize

Cancels a resize operation for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelResizeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelResizeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelResizeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCancelResizeRequest();
    $request->action = POSTCancelResizeActionEnum::CANCEL_RESIZE;
    $request->requestBody = 'provident';
    $request->version = POSTCancelResizeVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->postCancelResize($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCopyClusterSnapshot

<p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCopyClusterSnapshotRequest();
    $request->action = POSTCopyClusterSnapshotActionEnum::COPY_CLUSTER_SNAPSHOT;
    $request->requestBody = 'animi';
    $request->version = POSTCopyClusterSnapshotVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postCopyClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateAuthenticationProfile

Creates an authentication profile with the specified parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAuthenticationProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAuthenticationProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAuthenticationProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateAuthenticationProfileRequest();
    $request->action = POSTCreateAuthenticationProfileActionEnum::CREATE_AUTHENTICATION_PROFILE;
    $request->requestBody = 'accusantium';
    $request->version = POSTCreateAuthenticationProfileVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->postCreateAuthenticationProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateCluster

<p>Creates a new cluster with the specified parameters.</p> <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateClusterRequest();
    $request->action = POSTCreateClusterActionEnum::CREATE_CLUSTER;
    $request->requestBody = 'laborum';
    $request->version = POSTCreateClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'cumque';

    $response = $sdk->sdk->postCreateCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateClusterParameterGroup

<p>Creates an Amazon Redshift parameter group.</p> <p>Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p> <p>Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateClusterParameterGroupRequest();
    $request->action = POSTCreateClusterParameterGroupActionEnum::CREATE_CLUSTER_PARAMETER_GROUP;
    $request->requestBody = 'vitae';
    $request->version = POSTCreateClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postCreateClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateClusterSecurityGroup

<p>Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateClusterSecurityGroupRequest();
    $request->action = POSTCreateClusterSecurityGroupActionEnum::CREATE_CLUSTER_SECURITY_GROUP;
    $request->requestBody = 'perferendis';
    $request->version = POSTCreateClusterSecurityGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->postCreateClusterSecurityGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateClusterSnapshot

<p>Creates a manual snapshot of the specified cluster. The cluster must be in the <code>available</code> state. </p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateClusterSnapshotRequest();
    $request->action = POSTCreateClusterSnapshotActionEnum::CREATE_CLUSTER_SNAPSHOT;
    $request->requestBody = 'eos';
    $request->version = POSTCreateClusterSnapshotVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->postCreateClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateClusterSubnetGroup

<p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.</p> <p> For information about subnet groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateClusterSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateClusterSubnetGroupRequest();
    $request->action = POSTCreateClusterSubnetGroupActionEnum::CREATE_CLUSTER_SUBNET_GROUP;
    $request->requestBody = 'earum';
    $request->version = POSTCreateClusterSubnetGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->postCreateClusterSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateEndpointAccess

Creates a Redshift-managed VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateEndpointAccessRequest();
    $request->action = POSTCreateEndpointAccessActionEnum::CREATE_ENDPOINT_ACCESS;
    $request->requestBody = 'debitis';
    $request->version = POSTCreateEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->postCreateEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateEventSubscription

<p>Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters.</p> <p>If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateEventSubscriptionRequest();
    $request->action = POSTCreateEventSubscriptionActionEnum::CREATE_EVENT_SUBSCRIPTION;
    $request->requestBody = 'ratione';
    $request->version = POSTCreateEventSubscriptionVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->postCreateEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateHsmClientCertificate

<p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.</p> <p>The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateHsmClientCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateHsmClientCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateHsmClientCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateHsmClientCertificateRequest();
    $request->action = POSTCreateHsmClientCertificateActionEnum::CREATE_HSM_CLIENT_CERTIFICATE;
    $request->requestBody = 'natus';
    $request->version = POSTCreateHsmClientCertificateVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'nulla';

    $response = $sdk->sdk->postCreateHsmClientCertificate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateHsmConfiguration

<p>Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM.</p> <p>In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateHsmConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateHsmConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateHsmConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateHsmConfigurationRequest();
    $request->action = POSTCreateHsmConfigurationActionEnum::CREATE_HSM_CONFIGURATION;
    $request->requestBody = 'necessitatibus';
    $request->version = POSTCreateHsmConfigurationVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postCreateHsmConfiguration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateScheduledAction

Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateScheduledActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateScheduledActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateScheduledActionRequest();
    $request->action = POSTCreateScheduledActionActionEnum::CREATE_SCHEDULED_ACTION;
    $request->requestBody = 'praesentium';
    $request->version = POSTCreateScheduledActionVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postCreateScheduledAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateSnapshotCopyGrant

<p>Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key from Key Management Service (KMS) to encrypt copied snapshots in a destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSnapshotCopyGrantRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSnapshotCopyGrantActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSnapshotCopyGrantVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateSnapshotCopyGrantRequest();
    $request->action = POSTCreateSnapshotCopyGrantActionEnum::CREATE_SNAPSHOT_COPY_GRANT;
    $request->requestBody = 'odio';
    $request->version = POSTCreateSnapshotCopyGrantVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->postCreateSnapshotCopyGrant($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateSnapshotSchedule

Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSnapshotScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSnapshotScheduleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSnapshotScheduleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateSnapshotScheduleRequest();
    $request->action = POSTCreateSnapshotScheduleActionEnum::CREATE_SNAPSHOT_SCHEDULE;
    $request->requestBody = 'sunt';
    $request->version = POSTCreateSnapshotScheduleVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postCreateSnapshotSchedule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateTags

<p>Adds tags to a cluster.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail.</p> <p>If you specify a key that already exists for the resource, the value for that key will be updated with the new value.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateTagsRequest();
    $request->action = POSTCreateTagsActionEnum::CREATE_TAGS;
    $request->requestBody = 'perferendis';
    $request->version = POSTCreateTagsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'possimus';

    $response = $sdk->sdk->postCreateTags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateUsageLimit

Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUsageLimitActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUsageLimitVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateUsageLimitRequest();
    $request->action = POSTCreateUsageLimitActionEnum::CREATE_USAGE_LIMIT;
    $request->requestBody = 'voluptates';
    $request->version = POSTCreateUsageLimitVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'vitae';

    $response = $sdk->sdk->postCreateUsageLimit($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeauthorizeDataShare

From a datashare producer account, removes authorization from the specified datashare. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeauthorizeDataShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeauthorizeDataShareActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeauthorizeDataShareVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeauthorizeDataShareRequest();
    $request->action = POSTDeauthorizeDataShareActionEnum::DEAUTHORIZE_DATA_SHARE;
    $request->requestBody = 'repellendus';
    $request->version = POSTDeauthorizeDataShareVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->postDeauthorizeDataShare($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteAuthenticationProfile

Deletes an authentication profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAuthenticationProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAuthenticationProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAuthenticationProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteAuthenticationProfileRequest();
    $request->action = POSTDeleteAuthenticationProfileActionEnum::DELETE_AUTHENTICATION_PROFILE;
    $request->requestBody = 'molestias';
    $request->version = POSTDeleteAuthenticationProfileVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'rerum';

    $response = $sdk->sdk->postDeleteAuthenticationProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteCluster

<p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteClusterRequest();
    $request->action = POSTDeleteClusterActionEnum::DELETE_CLUSTER;
    $request->requestBody = 'est';
    $request->version = POSTDeleteClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->postDeleteCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteClusterParameterGroup

<p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteClusterParameterGroupRequest();
    $request->action = POSTDeleteClusterParameterGroupActionEnum::DELETE_CLUSTER_PARAMETER_GROUP;
    $request->requestBody = 'debitis';
    $request->version = POSTDeleteClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->postDeleteClusterParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteClusterSecurityGroup

<p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteClusterSecurityGroupRequest();
    $request->action = POSTDeleteClusterSecurityGroupActionEnum::DELETE_CLUSTER_SECURITY_GROUP;
    $request->requestBody = 'minus';
    $request->version = POSTDeleteClusterSecurityGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->postDeleteClusterSecurityGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteClusterSnapshot

<p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteClusterSnapshotRequest();
    $request->action = POSTDeleteClusterSnapshotActionEnum::DELETE_CLUSTER_SNAPSHOT;
    $request->requestBody = 'impedit';
    $request->version = POSTDeleteClusterSnapshotVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'inventore';

    $response = $sdk->sdk->postDeleteClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteClusterSubnetGroup

Deletes the specified cluster subnet group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteClusterSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteClusterSubnetGroupRequest();
    $request->action = POSTDeleteClusterSubnetGroupActionEnum::DELETE_CLUSTER_SUBNET_GROUP;
    $request->requestBody = 'deleniti';
    $request->version = POSTDeleteClusterSubnetGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->postDeleteClusterSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteEndpointAccess

Deletes a Redshift-managed VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteEndpointAccessRequest();
    $request->action = POSTDeleteEndpointAccessActionEnum::DELETE_ENDPOINT_ACCESS;
    $request->requestBody = 'fugit';
    $request->version = POSTDeleteEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->postDeleteEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteEventSubscription

Deletes an Amazon Redshift event notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteEventSubscriptionRequest();
    $request->action = POSTDeleteEventSubscriptionActionEnum::DELETE_EVENT_SUBSCRIPTION;
    $request->requestBody = 'ipsa';
    $request->version = POSTDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'eveniet';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->postDeleteEventSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteHsmClientCertificate

Deletes the specified HSM client certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteHsmClientCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteHsmClientCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteHsmClientCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteHsmClientCertificateRequest();
    $request->action = POSTDeleteHsmClientCertificateActionEnum::DELETE_HSM_CLIENT_CERTIFICATE;
    $request->requestBody = 'veniam';
    $request->version = POSTDeleteHsmClientCertificateVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'exercitationem';

    $response = $sdk->sdk->postDeleteHsmClientCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteHsmConfiguration

Deletes the specified Amazon Redshift HSM configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteHsmConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteHsmConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteHsmConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteHsmConfigurationRequest();
    $request->action = POSTDeleteHsmConfigurationActionEnum::DELETE_HSM_CONFIGURATION;
    $request->requestBody = 'ab';
    $request->version = POSTDeleteHsmConfigurationVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->postDeleteHsmConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeletePartner

Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePartnerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePartnerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePartnerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeletePartnerRequest();
    $request->action = POSTDeletePartnerActionEnum::DELETE_PARTNER;
    $request->requestBody = 'exercitationem';
    $request->version = POSTDeletePartnerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->postDeletePartner($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteScheduledAction

Deletes a scheduled action. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteScheduledActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteScheduledActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteScheduledActionRequest();
    $request->action = POSTDeleteScheduledActionActionEnum::DELETE_SCHEDULED_ACTION;
    $request->requestBody = 'sequi';
    $request->version = POSTDeleteScheduledActionVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->postDeleteScheduledAction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteSnapshotCopyGrant

Deletes the specified snapshot copy grant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSnapshotCopyGrantRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSnapshotCopyGrantActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSnapshotCopyGrantVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteSnapshotCopyGrantRequest();
    $request->action = POSTDeleteSnapshotCopyGrantActionEnum::DELETE_SNAPSHOT_COPY_GRANT;
    $request->requestBody = 'officia';
    $request->version = POSTDeleteSnapshotCopyGrantVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->postDeleteSnapshotCopyGrant($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteSnapshotSchedule

Deletes a snapshot schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSnapshotScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSnapshotScheduleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSnapshotScheduleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteSnapshotScheduleRequest();
    $request->action = POSTDeleteSnapshotScheduleActionEnum::DELETE_SNAPSHOT_SCHEDULE;
    $request->requestBody = 'nesciunt';
    $request->version = POSTDeleteSnapshotScheduleVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postDeleteSnapshotSchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteTags

Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteTagsRequest();
    $request->action = POSTDeleteTagsActionEnum::DELETE_TAGS;
    $request->requestBody = 'nisi';
    $request->version = POSTDeleteTagsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->postDeleteTags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteUsageLimit

Deletes a usage limit from a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUsageLimitActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUsageLimitVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteUsageLimitRequest();
    $request->action = POSTDeleteUsageLimitActionEnum::DELETE_USAGE_LIMIT;
    $request->requestBody = 'omnis';
    $request->version = POSTDeleteUsageLimitVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->postDeleteUsageLimit($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAccountAttributes

Returns a list of attributes attached to an account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAccountAttributesRequest();
    $request->action = POSTDescribeAccountAttributesActionEnum::DESCRIBE_ACCOUNT_ATTRIBUTES;
    $request->requestBody = 'voluptatibus';
    $request->version = POSTDescribeAccountAttributesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->postDescribeAccountAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAuthenticationProfiles

Describes an authentication profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAuthenticationProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAuthenticationProfilesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAuthenticationProfilesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAuthenticationProfilesRequest();
    $request->action = POSTDescribeAuthenticationProfilesActionEnum::DESCRIBE_AUTHENTICATION_PROFILES;
    $request->requestBody = 'temporibus';
    $request->version = POSTDescribeAuthenticationProfilesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->postDescribeAuthenticationProfiles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeClusterDbRevisions

Returns an array of <code>ClusterDbRevision</code> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterDbRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterDbRevisionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterDbRevisionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeClusterDbRevisionsRequest();
    $request->action = POSTDescribeClusterDbRevisionsActionEnum::DESCRIBE_CLUSTER_DB_REVISIONS;
    $request->marker = 'nam';
    $request->maxRecords = 'vero';
    $request->requestBody = 'voluptatem';
    $request->version = POSTDescribeClusterDbRevisionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->postDescribeClusterDbRevisions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeClusterParameterGroups

<p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterParameterGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterParameterGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterParameterGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeClusterParameterGroupsRequest();
    $request->action = POSTDescribeClusterParameterGroupsActionEnum::DESCRIBE_CLUSTER_PARAMETER_GROUPS;
    $request->marker = 'sint';
    $request->maxRecords = 'nulla';
    $request->requestBody = 'deserunt';
    $request->version = POSTDescribeClusterParameterGroupsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->postDescribeClusterParameterGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeClusterParameters

<p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeClusterParametersRequest();
    $request->action = POSTDescribeClusterParametersActionEnum::DESCRIBE_CLUSTER_PARAMETERS;
    $request->marker = 'impedit';
    $request->maxRecords = 'hic';
    $request->requestBody = 'necessitatibus';
    $request->version = POSTDescribeClusterParametersVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->postDescribeClusterParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeClusterSecurityGroups

<p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterSecurityGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterSecurityGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterSecurityGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeClusterSecurityGroupsRequest();
    $request->action = POSTDescribeClusterSecurityGroupsActionEnum::DESCRIBE_CLUSTER_SECURITY_GROUPS;
    $request->marker = 'fuga';
    $request->maxRecords = 'laborum';
    $request->requestBody = 'consectetur';
    $request->version = POSTDescribeClusterSecurityGroupsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->postDescribeClusterSecurityGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeClusterSnapshots

<p>Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by your Amazon Web Services account. No information is returned for snapshots owned by inactive Amazon Web Services accounts.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters.</p> <p>If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterSnapshotsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterSnapshotsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeClusterSnapshotsRequest();
    $request->action = POSTDescribeClusterSnapshotsActionEnum::DESCRIBE_CLUSTER_SNAPSHOTS;
    $request->marker = 'nam';
    $request->maxRecords = 'dolore';
    $request->requestBody = 'iusto';
    $request->version = POSTDescribeClusterSnapshotsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->postDescribeClusterSnapshots($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeClusterSubnetGroups

<p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterSubnetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterSubnetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterSubnetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeClusterSubnetGroupsRequest();
    $request->action = POSTDescribeClusterSubnetGroupsActionEnum::DESCRIBE_CLUSTER_SUBNET_GROUPS;
    $request->marker = 'iure';
    $request->maxRecords = 'odit';
    $request->requestBody = 'voluptatibus';
    $request->version = POSTDescribeClusterSubnetGroupsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->postDescribeClusterSubnetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeClusterTracks

Returns a list of all the available maintenance tracks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterTracksRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterTracksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterTracksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeClusterTracksRequest();
    $request->action = POSTDescribeClusterTracksActionEnum::DESCRIBE_CLUSTER_TRACKS;
    $request->marker = 'voluptatibus';
    $request->maxRecords = 'quia';
    $request->requestBody = 'porro';
    $request->version = POSTDescribeClusterTracksVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'illo';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->postDescribeClusterTracks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeClusterVersions

Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClusterVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeClusterVersionsRequest();
    $request->action = POSTDescribeClusterVersionsActionEnum::DESCRIBE_CLUSTER_VERSIONS;
    $request->marker = 'vero';
    $request->maxRecords = 'excepturi';
    $request->requestBody = 'eum';
    $request->version = POSTDescribeClusterVersionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->postDescribeClusterVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeClusters

<p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClustersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeClustersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeClustersRequest();
    $request->action = POSTDescribeClustersActionEnum::DESCRIBE_CLUSTERS;
    $request->marker = 'iste';
    $request->maxRecords = 'itaque';
    $request->requestBody = 'alias';
    $request->version = POSTDescribeClustersVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->postDescribeClusters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDataShares

Shows the status of any inbound or outbound datashares available in the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDataSharesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDataSharesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDataSharesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDataSharesRequest();
    $request->action = POSTDescribeDataSharesActionEnum::DESCRIBE_DATA_SHARES;
    $request->marker = 'sit';
    $request->maxRecords = 'doloremque';
    $request->requestBody = 'consequatur';
    $request->version = POSTDescribeDataSharesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->postDescribeDataShares($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDataSharesForConsumer

Returns a list of datashares where the account identifier being called is a consumer account identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDataSharesForConsumerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDataSharesForConsumerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDataSharesForConsumerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDataSharesForConsumerRequest();
    $request->action = POSTDescribeDataSharesForConsumerActionEnum::DESCRIBE_DATA_SHARES_FOR_CONSUMER;
    $request->marker = 'perspiciatis';
    $request->maxRecords = 'expedita';
    $request->requestBody = 'deleniti';
    $request->version = POSTDescribeDataSharesForConsumerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->postDescribeDataSharesForConsumer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDataSharesForProducer

Returns a list of datashares when the account identifier being called is a producer account identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDataSharesForProducerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDataSharesForProducerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDataSharesForProducerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDataSharesForProducerRequest();
    $request->action = POSTDescribeDataSharesForProducerActionEnum::DESCRIBE_DATA_SHARES_FOR_PRODUCER;
    $request->marker = 'ipsam';
    $request->maxRecords = 'corporis';
    $request->requestBody = 'est';
    $request->version = POSTDescribeDataSharesForProducerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'vitae';

    $response = $sdk->sdk->postDescribeDataSharesForProducer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDefaultClusterParameters

<p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDefaultClusterParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDefaultClusterParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDefaultClusterParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDefaultClusterParametersRequest();
    $request->action = POSTDescribeDefaultClusterParametersActionEnum::DESCRIBE_DEFAULT_CLUSTER_PARAMETERS;
    $request->marker = 'inventore';
    $request->maxRecords = 'dolorem';
    $request->requestBody = 'ad';
    $request->version = POSTDescribeDefaultClusterParametersVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->postDescribeDefaultClusterParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEndpointAccess

Describes a Redshift-managed VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEndpointAccessRequest();
    $request->action = POSTDescribeEndpointAccessActionEnum::DESCRIBE_ENDPOINT_ACCESS;
    $request->marker = 'dolorum';
    $request->maxRecords = 'odio';
    $request->requestBody = 'fugit';
    $request->version = POSTDescribeEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->postDescribeEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEndpointAuthorization

Describes an endpoint authorization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEndpointAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEndpointAuthorizationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEndpointAuthorizationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEndpointAuthorizationRequest();
    $request->action = POSTDescribeEndpointAuthorizationActionEnum::DESCRIBE_ENDPOINT_AUTHORIZATION;
    $request->marker = 'exercitationem';
    $request->maxRecords = 'itaque';
    $request->requestBody = 'et';
    $request->version = POSTDescribeEndpointAuthorizationVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quia';

    $response = $sdk->sdk->postDescribeEndpointAuthorization($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEventCategories

Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventCategoriesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventCategoriesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEventCategoriesRequest();
    $request->action = POSTDescribeEventCategoriesActionEnum::DESCRIBE_EVENT_CATEGORIES;
    $request->requestBody = 'nostrum';
    $request->version = POSTDescribeEventCategoriesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->postDescribeEventCategories($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEventSubscriptions

<p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventSubscriptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventSubscriptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEventSubscriptionsRequest();
    $request->action = POSTDescribeEventSubscriptionsActionEnum::DESCRIBE_EVENT_SUBSCRIPTIONS;
    $request->marker = 'quos';
    $request->maxRecords = 'placeat';
    $request->requestBody = 'sit';
    $request->version = POSTDescribeEventSubscriptionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->postDescribeEventSubscriptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEvents

Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEventsRequest();
    $request->action = POSTDescribeEventsActionEnum::DESCRIBE_EVENTS;
    $request->marker = 'eligendi';
    $request->maxRecords = 'distinctio';
    $request->requestBody = 'voluptatem';
    $request->version = POSTDescribeEventsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->postDescribeEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeHsmClientCertificates

<p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeHsmClientCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeHsmClientCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeHsmClientCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeHsmClientCertificatesRequest();
    $request->action = POSTDescribeHsmClientCertificatesActionEnum::DESCRIBE_HSM_CLIENT_CERTIFICATES;
    $request->marker = 'corrupti';
    $request->maxRecords = 'molestiae';
    $request->requestBody = 'provident';
    $request->version = POSTDescribeHsmClientCertificatesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->postDescribeHsmClientCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeHsmConfigurations

<p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeHsmConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeHsmConfigurationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeHsmConfigurationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeHsmConfigurationsRequest();
    $request->action = POSTDescribeHsmConfigurationsActionEnum::DESCRIBE_HSM_CONFIGURATIONS;
    $request->marker = 'rerum';
    $request->maxRecords = 'laudantium';
    $request->requestBody = 'corporis';
    $request->version = POSTDescribeHsmConfigurationsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postDescribeHsmConfigurations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLoggingStatus

Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoggingStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoggingStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoggingStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeLoggingStatusRequest();
    $request->action = POSTDescribeLoggingStatusActionEnum::DESCRIBE_LOGGING_STATUS;
    $request->requestBody = 'fuga';
    $request->version = POSTDescribeLoggingStatusVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->postDescribeLoggingStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeNodeConfigurationOptions

Returns properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeNodeConfigurationOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeNodeConfigurationOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeNodeConfigurationOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeNodeConfigurationOptionsRequest();
    $request->action = POSTDescribeNodeConfigurationOptionsActionEnum::DESCRIBE_NODE_CONFIGURATION_OPTIONS;
    $request->marker = 'praesentium';
    $request->maxRecords = 'odit';
    $request->requestBody = 'explicabo';
    $request->version = POSTDescribeNodeConfigurationOptionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'ut';

    $response = $sdk->sdk->postDescribeNodeConfigurationOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeOrderableClusterOptions

Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOrderableClusterOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOrderableClusterOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOrderableClusterOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeOrderableClusterOptionsRequest();
    $request->action = POSTDescribeOrderableClusterOptionsActionEnum::DESCRIBE_ORDERABLE_CLUSTER_OPTIONS;
    $request->marker = 'quidem';
    $request->maxRecords = 'quis';
    $request->requestBody = 'beatae';
    $request->version = POSTDescribeOrderableClusterOptionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->postDescribeOrderableClusterOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribePartners

Returns information about the partner integrations defined for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePartnersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePartnersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePartnersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribePartnersRequest();
    $request->action = POSTDescribePartnersActionEnum::DESCRIBE_PARTNERS;
    $request->requestBody = 'nesciunt';
    $request->version = POSTDescribePartnersVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->postDescribePartners($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReservedNodeExchangeStatus

Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedNodeExchangeStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedNodeExchangeStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedNodeExchangeStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReservedNodeExchangeStatusRequest();
    $request->action = POSTDescribeReservedNodeExchangeStatusActionEnum::DESCRIBE_RESERVED_NODE_EXCHANGE_STATUS;
    $request->marker = 'expedita';
    $request->maxRecords = 'voluptatum';
    $request->requestBody = 'cupiditate';
    $request->version = POSTDescribeReservedNodeExchangeStatusVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->postDescribeReservedNodeExchangeStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReservedNodeOfferings

<p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedNodeOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedNodeOfferingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedNodeOfferingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReservedNodeOfferingsRequest();
    $request->action = POSTDescribeReservedNodeOfferingsActionEnum::DESCRIBE_RESERVED_NODE_OFFERINGS;
    $request->marker = 'modi';
    $request->maxRecords = 'corporis';
    $request->requestBody = 'magnam';
    $request->version = POSTDescribeReservedNodeOfferingsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->postDescribeReservedNodeOfferings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReservedNodes

Returns the descriptions of the reserved nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedNodesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedNodesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedNodesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReservedNodesRequest();
    $request->action = POSTDescribeReservedNodesActionEnum::DESCRIBE_RESERVED_NODES;
    $request->marker = 'totam';
    $request->maxRecords = 'occaecati';
    $request->requestBody = 'voluptas';
    $request->version = POSTDescribeReservedNodesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->postDescribeReservedNodes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeResize

<p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeResizeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeResizeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeResizeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeResizeRequest();
    $request->action = POSTDescribeResizeActionEnum::DESCRIBE_RESIZE;
    $request->requestBody = 'delectus';
    $request->version = POSTDescribeResizeVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->postDescribeResize($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeScheduledActions

Describes properties of scheduled actions. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScheduledActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScheduledActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeScheduledActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeScheduledActionsRequest();
    $request->action = POSTDescribeScheduledActionsActionEnum::DESCRIBE_SCHEDULED_ACTIONS;
    $request->marker = 'aperiam';
    $request->maxRecords = 'odio';
    $request->requestBody = 'minima';
    $request->version = POSTDescribeScheduledActionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->postDescribeScheduledActions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeSnapshotCopyGrants

<p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSnapshotCopyGrantsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSnapshotCopyGrantsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSnapshotCopyGrantsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeSnapshotCopyGrantsRequest();
    $request->action = POSTDescribeSnapshotCopyGrantsActionEnum::DESCRIBE_SNAPSHOT_COPY_GRANTS;
    $request->marker = 'voluptate';
    $request->maxRecords = 'pariatur';
    $request->requestBody = 'itaque';
    $request->version = POSTDescribeSnapshotCopyGrantsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->postDescribeSnapshotCopyGrants($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeSnapshotSchedules

Returns a list of snapshot schedules. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSnapshotSchedulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSnapshotSchedulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSnapshotSchedulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeSnapshotSchedulesRequest();
    $request->action = POSTDescribeSnapshotSchedulesActionEnum::DESCRIBE_SNAPSHOT_SCHEDULES;
    $request->marker = 'quidem';
    $request->maxRecords = 'exercitationem';
    $request->requestBody = 'quam';
    $request->version = POSTDescribeSnapshotSchedulesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->postDescribeSnapshotSchedules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStorage

Returns account level backups storage size and provisional storage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStorageRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStorageActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStorageVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStorageRequest();
    $request->action = POSTDescribeStorageActionEnum::DESCRIBE_STORAGE;
    $request->version = POSTDescribeStorageVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->postDescribeStorage($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeTableRestoreStatus

Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTableRestoreStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTableRestoreStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTableRestoreStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeTableRestoreStatusRequest();
    $request->action = POSTDescribeTableRestoreStatusActionEnum::DESCRIBE_TABLE_RESTORE_STATUS;
    $request->marker = 'dicta';
    $request->maxRecords = 'consequuntur';
    $request->requestBody = 'necessitatibus';
    $request->version = POSTDescribeTableRestoreStatusVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'laboriosam';

    $response = $sdk->sdk->postDescribeTableRestoreStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeTags

<p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeTagsRequest();
    $request->action = POSTDescribeTagsActionEnum::DESCRIBE_TAGS;
    $request->marker = 'pariatur';
    $request->maxRecords = 'libero';
    $request->requestBody = 'excepturi';
    $request->version = POSTDescribeTagsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->postDescribeTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeUsageLimits

<p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUsageLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUsageLimitsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUsageLimitsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeUsageLimitsRequest();
    $request->action = POSTDescribeUsageLimitsActionEnum::DESCRIBE_USAGE_LIMITS;
    $request->marker = 'enim';
    $request->maxRecords = 'hic';
    $request->requestBody = 'animi';
    $request->version = POSTDescribeUsageLimitsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->postDescribeUsageLimits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDisableLogging

Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableLoggingRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableLoggingActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableLoggingVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDisableLoggingRequest();
    $request->action = POSTDisableLoggingActionEnum::DISABLE_LOGGING;
    $request->requestBody = 'quos';
    $request->version = POSTDisableLoggingVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->postDisableLogging($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDisableSnapshotCopy

<p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableSnapshotCopyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableSnapshotCopyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableSnapshotCopyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDisableSnapshotCopyRequest();
    $request->action = POSTDisableSnapshotCopyActionEnum::DISABLE_SNAPSHOT_COPY;
    $request->requestBody = 'impedit';
    $request->version = POSTDisableSnapshotCopyVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->postDisableSnapshotCopy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDisassociateDataShareConsumer

From a datashare consumer account, remove association for the specified datashare. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisassociateDataShareConsumerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisassociateDataShareConsumerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisassociateDataShareConsumerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDisassociateDataShareConsumerRequest();
    $request->action = POSTDisassociateDataShareConsumerActionEnum::DISASSOCIATE_DATA_SHARE_CONSUMER;
    $request->requestBody = 'veniam';
    $request->version = POSTDisassociateDataShareConsumerVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->postDisassociateDataShareConsumer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEnableLogging

Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableLoggingRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableLoggingActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableLoggingVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTEnableLoggingRequest();
    $request->action = POSTEnableLoggingActionEnum::ENABLE_LOGGING;
    $request->requestBody = 'magnam';
    $request->version = POSTEnableLoggingVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'laudantium';

    $response = $sdk->sdk->postEnableLogging($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEnableSnapshotCopy

Enables the automatic copy of snapshots from one region to another region for a specified cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableSnapshotCopyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableSnapshotCopyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableSnapshotCopyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTEnableSnapshotCopyRequest();
    $request->action = POSTEnableSnapshotCopyActionEnum::ENABLE_SNAPSHOT_COPY;
    $request->requestBody = 'odit';
    $request->version = POSTEnableSnapshotCopyVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';

    $response = $sdk->sdk->postEnableSnapshotCopy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetClusterCredentials

<p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetClusterCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetClusterCredentialsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetClusterCredentialsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetClusterCredentialsRequest();
    $request->action = POSTGetClusterCredentialsActionEnum::GET_CLUSTER_CREDENTIALS;
    $request->requestBody = 'nisi';
    $request->version = POSTGetClusterCredentialsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->postGetClusterCredentials($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetClusterCredentialsWithIAM

<p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetClusterCredentialsWithIAMRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetClusterCredentialsWithIAMActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetClusterCredentialsWithIAMVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetClusterCredentialsWithIAMRequest();
    $request->action = POSTGetClusterCredentialsWithIAMActionEnum::GET_CLUSTER_CREDENTIALS_WITH_IAM;
    $request->requestBody = 'libero';
    $request->version = POSTGetClusterCredentialsWithIAMVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->postGetClusterCredentialsWithIAM($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetReservedNodeExchangeConfigurationOptions

Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetReservedNodeExchangeConfigurationOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetReservedNodeExchangeConfigurationOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetReservedNodeExchangeConfigurationOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetReservedNodeExchangeConfigurationOptionsRequest();
    $request->action = POSTGetReservedNodeExchangeConfigurationOptionsActionEnum::GET_RESERVED_NODE_EXCHANGE_CONFIGURATION_OPTIONS;
    $request->marker = 'consequuntur';
    $request->maxRecords = 'debitis';
    $request->requestBody = 'labore';
    $request->version = POSTGetReservedNodeExchangeConfigurationOptionsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->postGetReservedNodeExchangeConfigurationOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetReservedNodeExchangeOfferings

Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetReservedNodeExchangeOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetReservedNodeExchangeOfferingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetReservedNodeExchangeOfferingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetReservedNodeExchangeOfferingsRequest();
    $request->action = POSTGetReservedNodeExchangeOfferingsActionEnum::GET_RESERVED_NODE_EXCHANGE_OFFERINGS;
    $request->marker = 'rem';
    $request->maxRecords = 'eligendi';
    $request->requestBody = 'fugiat';
    $request->version = POSTGetReservedNodeExchangeOfferingsVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->postGetReservedNodeExchangeOfferings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyAquaConfiguration

This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyAquaConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyAquaConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyAquaConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyAquaConfigurationRequest();
    $request->action = POSTModifyAquaConfigurationActionEnum::MODIFY_AQUA_CONFIGURATION;
    $request->requestBody = 'vitae';
    $request->version = POSTModifyAquaConfigurationVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->postModifyAquaConfiguration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyAuthenticationProfile

Modifies an authentication profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyAuthenticationProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyAuthenticationProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyAuthenticationProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyAuthenticationProfileRequest();
    $request->action = POSTModifyAuthenticationProfileActionEnum::MODIFY_AUTHENTICATION_PROFILE;
    $request->requestBody = 'iusto';
    $request->version = POSTModifyAuthenticationProfileVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'illo';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->postModifyAuthenticationProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyCluster

<p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyClusterRequest();
    $request->action = POSTModifyClusterActionEnum::MODIFY_CLUSTER;
    $request->requestBody = 'tempore';
    $request->version = POSTModifyClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->postModifyCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyClusterDbRevision

Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterDbRevisionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterDbRevisionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterDbRevisionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyClusterDbRevisionRequest();
    $request->action = POSTModifyClusterDbRevisionActionEnum::MODIFY_CLUSTER_DB_REVISION;
    $request->requestBody = 'repellat';
    $request->version = POSTModifyClusterDbRevisionVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'illo';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->sdk->postModifyClusterDbRevision($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyClusterIamRoles

<p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterIamRolesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterIamRolesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterIamRolesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyClusterIamRolesRequest();
    $request->action = POSTModifyClusterIamRolesActionEnum::MODIFY_CLUSTER_IAM_ROLES;
    $request->requestBody = 'aliquam';
    $request->version = POSTModifyClusterIamRolesVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->postModifyClusterIamRoles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyClusterMaintenance

Modifies the maintenance settings of a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterMaintenanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterMaintenanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterMaintenanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyClusterMaintenanceRequest();
    $request->action = POSTModifyClusterMaintenanceActionEnum::MODIFY_CLUSTER_MAINTENANCE;
    $request->requestBody = 'nam';
    $request->version = POSTModifyClusterMaintenanceVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->postModifyClusterMaintenance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyClusterParameterGroup

<p>Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyClusterParameterGroupRequest();
    $request->action = POSTModifyClusterParameterGroupActionEnum::MODIFY_CLUSTER_PARAMETER_GROUP;
    $request->requestBody = 'vero';
    $request->version = POSTModifyClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->postModifyClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyClusterSnapshot

<p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyClusterSnapshotRequest();
    $request->action = POSTModifyClusterSnapshotActionEnum::MODIFY_CLUSTER_SNAPSHOT;
    $request->requestBody = 'aut';
    $request->version = POSTModifyClusterSnapshotVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postModifyClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyClusterSnapshotSchedule

Modifies a snapshot schedule for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterSnapshotScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterSnapshotScheduleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterSnapshotScheduleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyClusterSnapshotScheduleRequest();
    $request->action = POSTModifyClusterSnapshotScheduleActionEnum::MODIFY_CLUSTER_SNAPSHOT_SCHEDULE;
    $request->requestBody = 'cum';
    $request->version = POSTModifyClusterSnapshotScheduleVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->postModifyClusterSnapshotSchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyClusterSubnetGroup

Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyClusterSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyClusterSubnetGroupRequest();
    $request->action = POSTModifyClusterSubnetGroupActionEnum::MODIFY_CLUSTER_SUBNET_GROUP;
    $request->requestBody = 'amet';
    $request->version = POSTModifyClusterSubnetGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->postModifyClusterSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyEndpointAccess

Modifies a Redshift-managed VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyEndpointAccessRequest();
    $request->action = POSTModifyEndpointAccessActionEnum::MODIFY_ENDPOINT_ACCESS;
    $request->requestBody = 'molestiae';
    $request->version = POSTModifyEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->postModifyEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyEventSubscription

Modifies an existing Amazon Redshift event notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyEventSubscriptionRequest();
    $request->action = POSTModifyEventSubscriptionActionEnum::MODIFY_EVENT_SUBSCRIPTION;
    $request->requestBody = 'totam';
    $request->version = POSTModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->postModifyEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyScheduledAction

Modifies a scheduled action. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyScheduledActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyScheduledActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyScheduledActionRequest();
    $request->action = POSTModifyScheduledActionActionEnum::MODIFY_SCHEDULED_ACTION;
    $request->requestBody = 'occaecati';
    $request->version = POSTModifyScheduledActionVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->postModifyScheduledAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifySnapshotCopyRetentionPeriod

Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifySnapshotCopyRetentionPeriodRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifySnapshotCopyRetentionPeriodActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifySnapshotCopyRetentionPeriodVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifySnapshotCopyRetentionPeriodRequest();
    $request->action = POSTModifySnapshotCopyRetentionPeriodActionEnum::MODIFY_SNAPSHOT_COPY_RETENTION_PERIOD;
    $request->requestBody = 'perferendis';
    $request->version = POSTModifySnapshotCopyRetentionPeriodVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->postModifySnapshotCopyRetentionPeriod($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifySnapshotSchedule

Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifySnapshotScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifySnapshotScheduleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifySnapshotScheduleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifySnapshotScheduleRequest();
    $request->action = POSTModifySnapshotScheduleActionEnum::MODIFY_SNAPSHOT_SCHEDULE;
    $request->requestBody = 'provident';
    $request->version = POSTModifySnapshotScheduleVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->postModifySnapshotSchedule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyUsageLimit

Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyUsageLimitActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyUsageLimitVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyUsageLimitRequest();
    $request->action = POSTModifyUsageLimitActionEnum::MODIFY_USAGE_LIMIT;
    $request->requestBody = 'officia';
    $request->version = POSTModifyUsageLimitVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->postModifyUsageLimit($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPauseCluster

Pauses a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPauseClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPauseClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPauseClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPauseClusterRequest();
    $request->action = POSTPauseClusterActionEnum::PAUSE_CLUSTER;
    $request->requestBody = 'dignissimos';
    $request->version = POSTPauseClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'exercitationem';

    $response = $sdk->sdk->postPauseCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPurchaseReservedNodeOffering

<p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedNodeOfferingRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedNodeOfferingActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedNodeOfferingVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPurchaseReservedNodeOfferingRequest();
    $request->action = POSTPurchaseReservedNodeOfferingActionEnum::PURCHASE_RESERVED_NODE_OFFERING;
    $request->requestBody = 'nihil';
    $request->version = POSTPurchaseReservedNodeOfferingVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'illo';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->postPurchaseReservedNodeOffering($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRebootCluster

Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRebootClusterRequest();
    $request->action = POSTRebootClusterActionEnum::REBOOT_CLUSTER;
    $request->requestBody = 'distinctio';
    $request->version = POSTRebootClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->postRebootCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRejectDataShare

From a datashare consumer account, rejects the specified datashare.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRejectDataShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRejectDataShareActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRejectDataShareVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRejectDataShareRequest();
    $request->action = POSTRejectDataShareActionEnum::REJECT_DATA_SHARE;
    $request->requestBody = 'explicabo';
    $request->version = POSTRejectDataShareVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->postRejectDataShare($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResetClusterParameterGroup

Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the <i>ResetAllParameters</i> parameter. For parameter changes to take effect you must reboot any associated clusters. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetClusterParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetClusterParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetClusterParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTResetClusterParameterGroupRequest();
    $request->action = POSTResetClusterParameterGroupActionEnum::RESET_CLUSTER_PARAMETER_GROUP;
    $request->requestBody = 'similique';
    $request->version = POSTResetClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'nesciunt';

    $response = $sdk->sdk->postResetClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResizeCluster

<p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTResizeClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTResizeClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTResizeClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTResizeClusterRequest();
    $request->action = POSTResizeClusterActionEnum::RESIZE_CLUSTER;
    $request->requestBody = 'mollitia';
    $request->version = POSTResizeClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->postResizeCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreFromClusterSnapshot

<p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreFromClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreFromClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreFromClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRestoreFromClusterSnapshotRequest();
    $request->action = POSTRestoreFromClusterSnapshotActionEnum::RESTORE_FROM_CLUSTER_SNAPSHOT;
    $request->requestBody = 'modi';
    $request->version = POSTRestoreFromClusterSnapshotVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->postRestoreFromClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreTableFromClusterSnapshot

<p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreTableFromClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreTableFromClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreTableFromClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRestoreTableFromClusterSnapshotRequest();
    $request->action = POSTRestoreTableFromClusterSnapshotActionEnum::RESTORE_TABLE_FROM_CLUSTER_SNAPSHOT;
    $request->requestBody = 'possimus';
    $request->version = POSTRestoreTableFromClusterSnapshotVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'sunt';

    $response = $sdk->sdk->postRestoreTableFromClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResumeCluster

Resumes a paused cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTResumeClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTResumeClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTResumeClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTResumeClusterRequest();
    $request->action = POSTResumeClusterActionEnum::RESUME_CLUSTER;
    $request->requestBody = 'distinctio';
    $request->version = POSTResumeClusterVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->postResumeCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRevokeClusterSecurityGroupIngress

Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeClusterSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeClusterSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeClusterSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRevokeClusterSecurityGroupIngressRequest();
    $request->action = POSTRevokeClusterSecurityGroupIngressActionEnum::REVOKE_CLUSTER_SECURITY_GROUP_INGRESS;
    $request->requestBody = 'alias';
    $request->version = POSTRevokeClusterSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postRevokeClusterSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRevokeEndpointAccess

Revokes access to a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeEndpointAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeEndpointAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRevokeEndpointAccessRequest();
    $request->action = POSTRevokeEndpointAccessActionEnum::REVOKE_ENDPOINT_ACCESS;
    $request->requestBody = 'eaque';
    $request->version = POSTRevokeEndpointAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->postRevokeEndpointAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRevokeSnapshotAccess

<p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeSnapshotAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeSnapshotAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeSnapshotAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRevokeSnapshotAccessRequest();
    $request->action = POSTRevokeSnapshotAccessActionEnum::REVOKE_SNAPSHOT_ACCESS;
    $request->requestBody = 'alias';
    $request->version = POSTRevokeSnapshotAccessVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->postRevokeSnapshotAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRotateEncryptionKey

Rotates the encryption keys for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRotateEncryptionKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRotateEncryptionKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRotateEncryptionKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRotateEncryptionKeyRequest();
    $request->action = POSTRotateEncryptionKeyActionEnum::ROTATE_ENCRYPTION_KEY;
    $request->requestBody = 'harum';
    $request->version = POSTRotateEncryptionKeyVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'molestias';

    $response = $sdk->sdk->postRotateEncryptionKey($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdatePartnerStatus

Updates the status of a partner integration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdatePartnerStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdatePartnerStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdatePartnerStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdatePartnerStatusRequest();
    $request->action = POSTUpdatePartnerStatusActionEnum::UPDATE_PARTNER_STATUS;
    $request->requestBody = 'officia';
    $request->version = POSTUpdatePartnerStatusVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->postUpdatePartnerStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
