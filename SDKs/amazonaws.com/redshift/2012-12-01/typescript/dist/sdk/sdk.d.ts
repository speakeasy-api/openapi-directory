import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://redshift.{region}.amazonaws.com", "https://redshift.{region}.amazonaws.com", "http://redshift.{region}.amazonaws.com.cn", "https://redshift.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <fullname>Amazon Redshift</fullname> <p> <b>Overview</b> </p> <p>This is an interface reference for Amazon Redshift. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift clusters. Note that Amazon Redshift is asynchronous, which means that some interfaces may require techniques, such as polling or asynchronous callback handlers, to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a change is applied immediately, on the next instance reboot, or during the next maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the Amazon Redshift Management Interfaces</a>.</p> <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data warehouse: provisioning capacity, monitoring and backing up the cluster, and applying patches and upgrades to the Amazon Redshift engine. You can focus on using your data to acquire new insights for your business and customers.</p> <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p> <p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design, build, query, and maintain the databases that make up your data warehouse. </p>
 *
 * @see {@link https://docs.aws.amazon.com/redshift/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs.
     */
    getAcceptReservedNodeExchange(req: operations.GETAcceptReservedNodeExchangeRequest, config?: AxiosRequestConfig): Promise<operations.GETAcceptReservedNodeExchangeResponse>;
    /**
     * Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.
     */
    getAddPartner(req: operations.GETAddPartnerRequest, config?: AxiosRequestConfig): Promise<operations.GETAddPartnerResponse>;
    /**
     * From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.
     */
    getAssociateDataShareConsumer(req: operations.GETAssociateDataShareConsumerRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateDataShareConsumerResponse>;
    /**
     * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getAuthorizeClusterSecurityGroupIngress(req: operations.GETAuthorizeClusterSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GETAuthorizeClusterSecurityGroupIngressResponse>;
    /**
     * From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.
     */
    getAuthorizeDataShare(req: operations.GETAuthorizeDataShareRequest, config?: AxiosRequestConfig): Promise<operations.GETAuthorizeDataShareResponse>;
    /**
     * Grants access to a cluster.
     */
    getAuthorizeEndpointAccess(req: operations.GETAuthorizeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GETAuthorizeEndpointAccessResponse>;
    /**
     * <p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getAuthorizeSnapshotAccess(req: operations.GETAuthorizeSnapshotAccessRequest, config?: AxiosRequestConfig): Promise<operations.GETAuthorizeSnapshotAccessResponse>;
    /**
     * Modifies the settings for a set of cluster snapshots.
     */
    getBatchModifyClusterSnapshots(req: operations.GETBatchModifyClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GETBatchModifyClusterSnapshotsResponse>;
    /**
     * Cancels a resize operation for a cluster.
     */
    getCancelResize(req: operations.GETCancelResizeRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelResizeResponse>;
    /**
     * <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getCopyClusterSnapshot(req: operations.GETCopyClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETCopyClusterSnapshotResponse>;
    /**
     * Creates an authentication profile with the specified parameters.
     */
    getCreateAuthenticationProfile(req: operations.GETCreateAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateAuthenticationProfileResponse>;
    /**
     * Creates a Redshift-managed VPC endpoint.
     */
    getCreateEndpointAccess(req: operations.GETCreateEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateEndpointAccessResponse>;
    /**
     * From a datashare producer account, removes authorization from the specified datashare.
     */
    getDeauthorizeDataShare(req: operations.GETDeauthorizeDataShareRequest, config?: AxiosRequestConfig): Promise<operations.GETDeauthorizeDataShareResponse>;
    /**
     * Deletes an authentication profile.
     */
    getDeleteAuthenticationProfile(req: operations.GETDeleteAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteAuthenticationProfileResponse>;
    /**
     * <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getDeleteCluster(req: operations.GETDeleteClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteClusterResponse>;
    /**
     * <p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>
     */
    getDeleteClusterParameterGroup(req: operations.GETDeleteClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteClusterParameterGroupResponse>;
    /**
     * <p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getDeleteClusterSecurityGroup(req: operations.GETDeleteClusterSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteClusterSecurityGroupResponse>;
    /**
     * <p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>
     */
    getDeleteClusterSnapshot(req: operations.GETDeleteClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteClusterSnapshotResponse>;
    /**
     * Deletes the specified cluster subnet group.
     */
    getDeleteClusterSubnetGroup(req: operations.GETDeleteClusterSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteClusterSubnetGroupResponse>;
    /**
     * Deletes a Redshift-managed VPC endpoint.
     */
    getDeleteEndpointAccess(req: operations.GETDeleteEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteEndpointAccessResponse>;
    /**
     * Deletes an Amazon Redshift event notification subscription.
     */
    getDeleteEventSubscription(req: operations.GETDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteEventSubscriptionResponse>;
    /**
     * Deletes the specified HSM client certificate.
     */
    getDeleteHsmClientCertificate(req: operations.GETDeleteHsmClientCertificateRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteHsmClientCertificateResponse>;
    /**
     * Deletes the specified Amazon Redshift HSM configuration.
     */
    getDeleteHsmConfiguration(req: operations.GETDeleteHsmConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteHsmConfigurationResponse>;
    /**
     * Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.
     */
    getDeletePartner(req: operations.GETDeletePartnerRequest, config?: AxiosRequestConfig): Promise<operations.GETDeletePartnerResponse>;
    /**
     * Deletes a scheduled action.
     */
    getDeleteScheduledAction(req: operations.GETDeleteScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteScheduledActionResponse>;
    /**
     * Deletes the specified snapshot copy grant.
     */
    getDeleteSnapshotCopyGrant(req: operations.GETDeleteSnapshotCopyGrantRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteSnapshotCopyGrantResponse>;
    /**
     * Deletes a snapshot schedule.
     */
    getDeleteSnapshotSchedule(req: operations.GETDeleteSnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteSnapshotScheduleResponse>;
    /**
     * Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.
     */
    getDeleteTags(req: operations.GETDeleteTagsRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTagsResponse>;
    /**
     * Deletes a usage limit from a cluster.
     */
    getDeleteUsageLimit(req: operations.GETDeleteUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteUsageLimitResponse>;
    /**
     * Returns a list of attributes attached to an account
     */
    getDescribeAccountAttributes(req: operations.GETDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAccountAttributesResponse>;
    /**
     * Describes an authentication profile.
     */
    getDescribeAuthenticationProfiles(req: operations.GETDescribeAuthenticationProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAuthenticationProfilesResponse>;
    /**
     * Returns an array of <code>ClusterDbRevision</code> objects.
     */
    getDescribeClusterDbRevisions(req: operations.GETDescribeClusterDbRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeClusterDbRevisionsResponse>;
    /**
     * <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    getDescribeClusterParameterGroups(req: operations.GETDescribeClusterParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeClusterParameterGroupsResponse>;
    /**
     * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getDescribeClusterParameters(req: operations.GETDescribeClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeClusterParametersResponse>;
    /**
     * <p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    getDescribeClusterSecurityGroups(req: operations.GETDescribeClusterSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeClusterSecurityGroupsResponse>;
    /**
     * <p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    getDescribeClusterSubnetGroups(req: operations.GETDescribeClusterSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeClusterSubnetGroupsResponse>;
    /**
     * Returns a list of all the available maintenance tracks.
     */
    getDescribeClusterTracks(req: operations.GETDescribeClusterTracksRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeClusterTracksResponse>;
    /**
     * Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
     */
    getDescribeClusterVersions(req: operations.GETDescribeClusterVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeClusterVersionsResponse>;
    /**
     * <p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    getDescribeClusters(req: operations.GETDescribeClustersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeClustersResponse>;
    /**
     * Shows the status of any inbound or outbound datashares available in the specified account.
     */
    getDescribeDataShares(req: operations.GETDescribeDataSharesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDataSharesResponse>;
    /**
     * Returns a list of datashares where the account identifier being called is a consumer account identifier.
     */
    getDescribeDataSharesForConsumer(req: operations.GETDescribeDataSharesForConsumerRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDataSharesForConsumerResponse>;
    /**
     * Returns a list of datashares when the account identifier being called is a producer account identifier.
     */
    getDescribeDataSharesForProducer(req: operations.GETDescribeDataSharesForProducerRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDataSharesForProducerResponse>;
    /**
     * <p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getDescribeDefaultClusterParameters(req: operations.GETDescribeDefaultClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDefaultClusterParametersResponse>;
    /**
     * Describes a Redshift-managed VPC endpoint.
     */
    getDescribeEndpointAccess(req: operations.GETDescribeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEndpointAccessResponse>;
    /**
     * Describes an endpoint authorization.
     */
    getDescribeEndpointAuthorization(req: operations.GETDescribeEndpointAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEndpointAuthorizationResponse>;
    /**
     * Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.
     */
    getDescribeEventCategories(req: operations.GETDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEventCategoriesResponse>;
    /**
     * <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    getDescribeEventSubscriptions(req: operations.GETDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEventSubscriptionsResponse>;
    /**
     * Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
     */
    getDescribeEvents(req: operations.GETDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEventsResponse>;
    /**
     * <p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    getDescribeHsmClientCertificates(req: operations.GETDescribeHsmClientCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeHsmClientCertificatesResponse>;
    /**
     * <p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    getDescribeHsmConfigurations(req: operations.GETDescribeHsmConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeHsmConfigurationsResponse>;
    /**
     * Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.
     */
    getDescribeLoggingStatus(req: operations.GETDescribeLoggingStatusRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeLoggingStatusResponse>;
    /**
     * Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
     */
    getDescribeOrderableClusterOptions(req: operations.GETDescribeOrderableClusterOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeOrderableClusterOptionsResponse>;
    /**
     * Returns information about the partner integrations defined for a cluster.
     */
    getDescribePartners(req: operations.GETDescribePartnersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribePartnersResponse>;
    /**
     * Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.
     */
    getDescribeReservedNodeExchangeStatus(req: operations.GETDescribeReservedNodeExchangeStatusRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeReservedNodeExchangeStatusResponse>;
    /**
     * <p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getDescribeReservedNodeOfferings(req: operations.GETDescribeReservedNodeOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeReservedNodeOfferingsResponse>;
    /**
     * Returns the descriptions of the reserved nodes.
     */
    getDescribeReservedNodes(req: operations.GETDescribeReservedNodesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeReservedNodesResponse>;
    /**
     * <p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>
     */
    getDescribeResize(req: operations.GETDescribeResizeRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeResizeResponse>;
    /**
     * <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
     */
    getDescribeSnapshotCopyGrants(req: operations.GETDescribeSnapshotCopyGrantsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSnapshotCopyGrantsResponse>;
    /**
     * Returns a list of snapshot schedules.
     */
    getDescribeSnapshotSchedules(req: operations.GETDescribeSnapshotSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSnapshotSchedulesResponse>;
    /**
     * Returns account level backups storage size and provisional storage.
     */
    getDescribeStorage(req: operations.GETDescribeStorageRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeStorageResponse>;
    /**
     * Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.
     */
    getDescribeTableRestoreStatus(req: operations.GETDescribeTableRestoreStatusRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeTableRestoreStatusResponse>;
    /**
     * <p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    getDescribeTags(req: operations.GETDescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeTagsResponse>;
    /**
     * <p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>
     */
    getDescribeUsageLimits(req: operations.GETDescribeUsageLimitsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeUsageLimitsResponse>;
    /**
     * Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
     */
    getDisableLogging(req: operations.GETDisableLoggingRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableLoggingResponse>;
    /**
     * <p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>
     */
    getDisableSnapshotCopy(req: operations.GETDisableSnapshotCopyRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableSnapshotCopyResponse>;
    /**
     * From a datashare consumer account, remove association for the specified datashare.
     */
    getDisassociateDataShareConsumer(req: operations.GETDisassociateDataShareConsumerRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateDataShareConsumerResponse>;
    /**
     * Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
     */
    getEnableLogging(req: operations.GETEnableLoggingRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableLoggingResponse>;
    /**
     * Enables the automatic copy of snapshots from one region to another region for a specified cluster.
     */
    getEnableSnapshotCopy(req: operations.GETEnableSnapshotCopyRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableSnapshotCopyResponse>;
    /**
     * <p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>
     */
    getGETClusterCredentials(req: operations.GETGETClusterCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GETGETClusterCredentialsResponse>;
    /**
     * <p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>
     */
    getGETClusterCredentialsWithIAM(req: operations.GETGETClusterCredentialsWithIAMRequest, config?: AxiosRequestConfig): Promise<operations.GETGETClusterCredentialsWithIAMResponse>;
    /**
     * Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.
     */
    getGETReservedNodeExchangeConfigurationOptions(req: operations.GETGETReservedNodeExchangeConfigurationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETGETReservedNodeExchangeConfigurationOptionsResponse>;
    /**
     * Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.
     */
    getGETReservedNodeExchangeOfferings(req: operations.GETGETReservedNodeExchangeOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.GETGETReservedNodeExchangeOfferingsResponse>;
    /**
     * This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
     */
    getModifyAquaConfiguration(req: operations.GETModifyAquaConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyAquaConfigurationResponse>;
    /**
     * Modifies an authentication profile.
     */
    getModifyAuthenticationProfile(req: operations.GETModifyAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyAuthenticationProfileResponse>;
    /**
     * <p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getModifyCluster(req: operations.GETModifyClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyClusterResponse>;
    /**
     * Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.
     */
    getModifyClusterDbRevision(req: operations.GETModifyClusterDbRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyClusterDbRevisionResponse>;
    /**
     * <p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getModifyClusterIamRoles(req: operations.GETModifyClusterIamRolesRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyClusterIamRolesResponse>;
    /**
     * Modifies the maintenance settings of a cluster.
     */
    getModifyClusterMaintenance(req: operations.GETModifyClusterMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyClusterMaintenanceResponse>;
    /**
     * <p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
     */
    getModifyClusterSnapshot(req: operations.GETModifyClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyClusterSnapshotResponse>;
    /**
     * Modifies a snapshot schedule for a cluster.
     */
    getModifyClusterSnapshotSchedule(req: operations.GETModifyClusterSnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyClusterSnapshotScheduleResponse>;
    /**
     * Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.
     */
    getModifyClusterSubnetGroup(req: operations.GETModifyClusterSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyClusterSubnetGroupResponse>;
    /**
     * Modifies a Redshift-managed VPC endpoint.
     */
    getModifyEndpointAccess(req: operations.GETModifyEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyEndpointAccessResponse>;
    /**
     * Modifies an existing Amazon Redshift event notification subscription.
     */
    getModifyEventSubscription(req: operations.GETModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyEventSubscriptionResponse>;
    /**
     * Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period.
     */
    getModifySnapshotCopyRetentionPeriod(req: operations.GETModifySnapshotCopyRetentionPeriodRequest, config?: AxiosRequestConfig): Promise<operations.GETModifySnapshotCopyRetentionPeriodResponse>;
    /**
     * Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.
     */
    getModifySnapshotSchedule(req: operations.GETModifySnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GETModifySnapshotScheduleResponse>;
    /**
     * Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.
     */
    getModifyUsageLimit(req: operations.GETModifyUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyUsageLimitResponse>;
    /**
     * Pauses a cluster.
     */
    getPauseCluster(req: operations.GETPauseClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETPauseClusterResponse>;
    /**
     * <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getPurchaseReservedNodeOffering(req: operations.GETPurchaseReservedNodeOfferingRequest, config?: AxiosRequestConfig): Promise<operations.GETPurchaseReservedNodeOfferingResponse>;
    /**
     * Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
     */
    getRebootCluster(req: operations.GETRebootClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETRebootClusterResponse>;
    /**
     * From a datashare consumer account, rejects the specified datashare.
     */
    getRejectDataShare(req: operations.GETRejectDataShareRequest, config?: AxiosRequestConfig): Promise<operations.GETRejectDataShareResponse>;
    /**
     * <p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>
     */
    getResizeCluster(req: operations.GETResizeClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETResizeClusterResponse>;
    /**
     * <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getRestoreFromClusterSnapshot(req: operations.GETRestoreFromClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETRestoreFromClusterSnapshotResponse>;
    /**
     * <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>
     */
    getRestoreTableFromClusterSnapshot(req: operations.GETRestoreTableFromClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETRestoreTableFromClusterSnapshotResponse>;
    /**
     * Resumes a paused cluster.
     */
    getResumeCluster(req: operations.GETResumeClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETResumeClusterResponse>;
    /**
     * Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
     */
    getRevokeClusterSecurityGroupIngress(req: operations.GETRevokeClusterSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GETRevokeClusterSecurityGroupIngressResponse>;
    /**
     * Revokes access to a cluster.
     */
    getRevokeEndpointAccess(req: operations.GETRevokeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GETRevokeEndpointAccessResponse>;
    /**
     * <p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    getRevokeSnapshotAccess(req: operations.GETRevokeSnapshotAccessRequest, config?: AxiosRequestConfig): Promise<operations.GETRevokeSnapshotAccessResponse>;
    /**
     * Rotates the encryption keys for a cluster.
     */
    getRotateEncryptionKey(req: operations.GETRotateEncryptionKeyRequest, config?: AxiosRequestConfig): Promise<operations.GETRotateEncryptionKeyResponse>;
    /**
     * Updates the status of a partner integration.
     */
    getUpdatePartnerStatus(req: operations.GETUpdatePartnerStatusRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdatePartnerStatusResponse>;
    /**
     * Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs.
     */
    postAcceptReservedNodeExchange(req: operations.POSTAcceptReservedNodeExchangeRequest, config?: AxiosRequestConfig): Promise<operations.POSTAcceptReservedNodeExchangeResponse>;
    /**
     * Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.
     */
    postAddPartner(req: operations.POSTAddPartnerRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddPartnerResponse>;
    /**
     * From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.
     */
    postAssociateDataShareConsumer(req: operations.POSTAssociateDataShareConsumerRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateDataShareConsumerResponse>;
    /**
     * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postAuthorizeClusterSecurityGroupIngress(req: operations.POSTAuthorizeClusterSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTAuthorizeClusterSecurityGroupIngressResponse>;
    /**
     * From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.
     */
    postAuthorizeDataShare(req: operations.POSTAuthorizeDataShareRequest, config?: AxiosRequestConfig): Promise<operations.POSTAuthorizeDataShareResponse>;
    /**
     * Grants access to a cluster.
     */
    postAuthorizeEndpointAccess(req: operations.POSTAuthorizeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.POSTAuthorizeEndpointAccessResponse>;
    /**
     * <p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postAuthorizeSnapshotAccess(req: operations.POSTAuthorizeSnapshotAccessRequest, config?: AxiosRequestConfig): Promise<operations.POSTAuthorizeSnapshotAccessResponse>;
    /**
     * Deletes a set of cluster snapshots.
     */
    postBatchDeleteClusterSnapshots(req: operations.POSTBatchDeleteClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.POSTBatchDeleteClusterSnapshotsResponse>;
    /**
     * Modifies the settings for a set of cluster snapshots.
     */
    postBatchModifyClusterSnapshots(req: operations.POSTBatchModifyClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.POSTBatchModifyClusterSnapshotsResponse>;
    /**
     * Cancels a resize operation for a cluster.
     */
    postCancelResize(req: operations.POSTCancelResizeRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelResizeResponse>;
    /**
     * <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postCopyClusterSnapshot(req: operations.POSTCopyClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyClusterSnapshotResponse>;
    /**
     * Creates an authentication profile with the specified parameters.
     */
    postCreateAuthenticationProfile(req: operations.POSTCreateAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateAuthenticationProfileResponse>;
    /**
     * <p>Creates a new cluster with the specified parameters.</p> <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postCreateCluster(req: operations.POSTCreateClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateClusterResponse>;
    /**
     * <p>Creates an Amazon Redshift parameter group.</p> <p>Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p> <p>Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postCreateClusterParameterGroup(req: operations.POSTCreateClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateClusterParameterGroupResponse>;
    /**
     * <p>Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postCreateClusterSecurityGroup(req: operations.POSTCreateClusterSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateClusterSecurityGroupResponse>;
    /**
     * <p>Creates a manual snapshot of the specified cluster. The cluster must be in the <code>available</code> state. </p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postCreateClusterSnapshot(req: operations.POSTCreateClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateClusterSnapshotResponse>;
    /**
     * <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.</p> <p> For information about subnet groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postCreateClusterSubnetGroup(req: operations.POSTCreateClusterSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateClusterSubnetGroupResponse>;
    /**
     * Creates a Redshift-managed VPC endpoint.
     */
    postCreateEndpointAccess(req: operations.POSTCreateEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateEndpointAccessResponse>;
    /**
     * <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters.</p> <p>If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.</p>
     */
    postCreateEventSubscription(req: operations.POSTCreateEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateEventSubscriptionResponse>;
    /**
     * <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.</p> <p>The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postCreateHsmClientCertificate(req: operations.POSTCreateHsmClientCertificateRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateHsmClientCertificateResponse>;
    /**
     * <p>Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM.</p> <p>In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>
     */
    postCreateHsmConfiguration(req: operations.POSTCreateHsmConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateHsmConfigurationResponse>;
    /**
     * Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation.
     */
    postCreateScheduledAction(req: operations.POSTCreateScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateScheduledActionResponse>;
    /**
     * <p>Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key from Key Management Service (KMS) to encrypt copied snapshots in a destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
     */
    postCreateSnapshotCopyGrant(req: operations.POSTCreateSnapshotCopyGrantRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateSnapshotCopyGrantResponse>;
    /**
     * Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule.
     */
    postCreateSnapshotSchedule(req: operations.POSTCreateSnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateSnapshotScheduleResponse>;
    /**
     * <p>Adds tags to a cluster.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail.</p> <p>If you specify a key that already exists for the resource, the value for that key will be updated with the new value.</p>
     */
    postCreateTags(req: operations.POSTCreateTagsRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTagsResponse>;
    /**
     * Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.
     */
    postCreateUsageLimit(req: operations.POSTCreateUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateUsageLimitResponse>;
    /**
     * From a datashare producer account, removes authorization from the specified datashare.
     */
    postDeauthorizeDataShare(req: operations.POSTDeauthorizeDataShareRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeauthorizeDataShareResponse>;
    /**
     * Deletes an authentication profile.
     */
    postDeleteAuthenticationProfile(req: operations.POSTDeleteAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteAuthenticationProfileResponse>;
    /**
     * <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postDeleteCluster(req: operations.POSTDeleteClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteClusterResponse>;
    /**
     * <p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>
     */
    postDeleteClusterParameterGroup(req: operations.POSTDeleteClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteClusterParameterGroupResponse>;
    /**
     * <p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postDeleteClusterSecurityGroup(req: operations.POSTDeleteClusterSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteClusterSecurityGroupResponse>;
    /**
     * <p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>
     */
    postDeleteClusterSnapshot(req: operations.POSTDeleteClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteClusterSnapshotResponse>;
    /**
     * Deletes the specified cluster subnet group.
     */
    postDeleteClusterSubnetGroup(req: operations.POSTDeleteClusterSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteClusterSubnetGroupResponse>;
    /**
     * Deletes a Redshift-managed VPC endpoint.
     */
    postDeleteEndpointAccess(req: operations.POSTDeleteEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteEndpointAccessResponse>;
    /**
     * Deletes an Amazon Redshift event notification subscription.
     */
    postDeleteEventSubscription(req: operations.POSTDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteEventSubscriptionResponse>;
    /**
     * Deletes the specified HSM client certificate.
     */
    postDeleteHsmClientCertificate(req: operations.POSTDeleteHsmClientCertificateRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteHsmClientCertificateResponse>;
    /**
     * Deletes the specified Amazon Redshift HSM configuration.
     */
    postDeleteHsmConfiguration(req: operations.POSTDeleteHsmConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteHsmConfigurationResponse>;
    /**
     * Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.
     */
    postDeletePartner(req: operations.POSTDeletePartnerRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeletePartnerResponse>;
    /**
     * Deletes a scheduled action.
     */
    postDeleteScheduledAction(req: operations.POSTDeleteScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteScheduledActionResponse>;
    /**
     * Deletes the specified snapshot copy grant.
     */
    postDeleteSnapshotCopyGrant(req: operations.POSTDeleteSnapshotCopyGrantRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteSnapshotCopyGrantResponse>;
    /**
     * Deletes a snapshot schedule.
     */
    postDeleteSnapshotSchedule(req: operations.POSTDeleteSnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteSnapshotScheduleResponse>;
    /**
     * Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.
     */
    postDeleteTags(req: operations.POSTDeleteTagsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTagsResponse>;
    /**
     * Deletes a usage limit from a cluster.
     */
    postDeleteUsageLimit(req: operations.POSTDeleteUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteUsageLimitResponse>;
    /**
     * Returns a list of attributes attached to an account
     */
    postDescribeAccountAttributes(req: operations.POSTDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAccountAttributesResponse>;
    /**
     * Describes an authentication profile.
     */
    postDescribeAuthenticationProfiles(req: operations.POSTDescribeAuthenticationProfilesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAuthenticationProfilesResponse>;
    /**
     * Returns an array of <code>ClusterDbRevision</code> objects.
     */
    postDescribeClusterDbRevisions(req: operations.POSTDescribeClusterDbRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClusterDbRevisionsResponse>;
    /**
     * <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    postDescribeClusterParameterGroups(req: operations.POSTDescribeClusterParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClusterParameterGroupsResponse>;
    /**
     * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postDescribeClusterParameters(req: operations.POSTDescribeClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClusterParametersResponse>;
    /**
     * <p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    postDescribeClusterSecurityGroups(req: operations.POSTDescribeClusterSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClusterSecurityGroupsResponse>;
    /**
     * <p>Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by your Amazon Web Services account. No information is returned for snapshots owned by inactive Amazon Web Services accounts.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters.</p> <p>If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    postDescribeClusterSnapshots(req: operations.POSTDescribeClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClusterSnapshotsResponse>;
    /**
     * <p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    postDescribeClusterSubnetGroups(req: operations.POSTDescribeClusterSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClusterSubnetGroupsResponse>;
    /**
     * Returns a list of all the available maintenance tracks.
     */
    postDescribeClusterTracks(req: operations.POSTDescribeClusterTracksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClusterTracksResponse>;
    /**
     * Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
     */
    postDescribeClusterVersions(req: operations.POSTDescribeClusterVersionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClusterVersionsResponse>;
    /**
     * <p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    postDescribeClusters(req: operations.POSTDescribeClustersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClustersResponse>;
    /**
     * Shows the status of any inbound or outbound datashares available in the specified account.
     */
    postDescribeDataShares(req: operations.POSTDescribeDataSharesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDataSharesResponse>;
    /**
     * Returns a list of datashares where the account identifier being called is a consumer account identifier.
     */
    postDescribeDataSharesForConsumer(req: operations.POSTDescribeDataSharesForConsumerRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDataSharesForConsumerResponse>;
    /**
     * Returns a list of datashares when the account identifier being called is a producer account identifier.
     */
    postDescribeDataSharesForProducer(req: operations.POSTDescribeDataSharesForProducerRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDataSharesForProducerResponse>;
    /**
     * <p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postDescribeDefaultClusterParameters(req: operations.POSTDescribeDefaultClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDefaultClusterParametersResponse>;
    /**
     * Describes a Redshift-managed VPC endpoint.
     */
    postDescribeEndpointAccess(req: operations.POSTDescribeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEndpointAccessResponse>;
    /**
     * Describes an endpoint authorization.
     */
    postDescribeEndpointAuthorization(req: operations.POSTDescribeEndpointAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEndpointAuthorizationResponse>;
    /**
     * Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.
     */
    postDescribeEventCategories(req: operations.POSTDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventCategoriesResponse>;
    /**
     * <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    postDescribeEventSubscriptions(req: operations.POSTDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventSubscriptionsResponse>;
    /**
     * Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
     */
    postDescribeEvents(req: operations.POSTDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventsResponse>;
    /**
     * <p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    postDescribeHsmClientCertificates(req: operations.POSTDescribeHsmClientCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeHsmClientCertificatesResponse>;
    /**
     * <p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    postDescribeHsmConfigurations(req: operations.POSTDescribeHsmConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeHsmConfigurationsResponse>;
    /**
     * Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.
     */
    postDescribeLoggingStatus(req: operations.POSTDescribeLoggingStatusRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeLoggingStatusResponse>;
    /**
     * Returns properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type.
     */
    postDescribeNodeConfigurationOptions(req: operations.POSTDescribeNodeConfigurationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeNodeConfigurationOptionsResponse>;
    /**
     * Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
     */
    postDescribeOrderableClusterOptions(req: operations.POSTDescribeOrderableClusterOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeOrderableClusterOptionsResponse>;
    /**
     * Returns information about the partner integrations defined for a cluster.
     */
    postDescribePartners(req: operations.POSTDescribePartnersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribePartnersResponse>;
    /**
     * Returns exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested.
     */
    postDescribeReservedNodeExchangeStatus(req: operations.POSTDescribeReservedNodeExchangeStatusRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedNodeExchangeStatusResponse>;
    /**
     * <p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postDescribeReservedNodeOfferings(req: operations.POSTDescribeReservedNodeOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedNodeOfferingsResponse>;
    /**
     * Returns the descriptions of the reserved nodes.
     */
    postDescribeReservedNodes(req: operations.POSTDescribeReservedNodesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedNodesResponse>;
    /**
     * <p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>
     */
    postDescribeResize(req: operations.POSTDescribeResizeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeResizeResponse>;
    /**
     * Describes properties of scheduled actions.
     */
    postDescribeScheduledActions(req: operations.POSTDescribeScheduledActionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeScheduledActionsResponse>;
    /**
     * <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
     */
    postDescribeSnapshotCopyGrants(req: operations.POSTDescribeSnapshotCopyGrantsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSnapshotCopyGrantsResponse>;
    /**
     * Returns a list of snapshot schedules.
     */
    postDescribeSnapshotSchedules(req: operations.POSTDescribeSnapshotSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSnapshotSchedulesResponse>;
    /**
     * Returns account level backups storage size and provisional storage.
     */
    postDescribeStorage(req: operations.POSTDescribeStorageRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeStorageResponse>;
    /**
     * Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.
     */
    postDescribeTableRestoreStatus(req: operations.POSTDescribeTableRestoreStatusRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTableRestoreStatusResponse>;
    /**
     * <p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>
     */
    postDescribeTags(req: operations.POSTDescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTagsResponse>;
    /**
     * <p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>
     */
    postDescribeUsageLimits(req: operations.POSTDescribeUsageLimitsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeUsageLimitsResponse>;
    /**
     * Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
     */
    postDisableLogging(req: operations.POSTDisableLoggingRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableLoggingResponse>;
    /**
     * <p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the key in the destination region. </p>
     */
    postDisableSnapshotCopy(req: operations.POSTDisableSnapshotCopyRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableSnapshotCopyResponse>;
    /**
     * From a datashare consumer account, remove association for the specified datashare.
     */
    postDisassociateDataShareConsumer(req: operations.POSTDisassociateDataShareConsumerRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateDataShareConsumerResponse>;
    /**
     * Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
     */
    postEnableLogging(req: operations.POSTEnableLoggingRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableLoggingResponse>;
    /**
     * Enables the automatic copy of snapshots from one region to another region for a specified cluster.
     */
    postEnableSnapshotCopy(req: operations.POSTEnableSnapshotCopyRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableSnapshotCopyResponse>;
    /**
     * <p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> permission.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>
     */
    postGetClusterCredentials(req: operations.POSTGetClusterCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetClusterCredentialsResponse>;
    /**
     * <p>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the Amazon Web Services Identity and Access Management User Guide.</p> <p>The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the Amazon Redshift Cluster Management Guide. </p>
     */
    postGetClusterCredentialsWithIAM(req: operations.POSTGetClusterCredentialsWithIAMRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetClusterCredentialsWithIAMResponse>;
    /**
     * Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.
     */
    postGetReservedNodeExchangeConfigurationOptions(req: operations.POSTGetReservedNodeExchangeConfigurationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetReservedNodeExchangeConfigurationOptionsResponse>;
    /**
     * Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.
     */
    postGetReservedNodeExchangeOfferings(req: operations.POSTGetReservedNodeExchangeOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetReservedNodeExchangeOfferingsResponse>;
    /**
     * This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
     */
    postModifyAquaConfiguration(req: operations.POSTModifyAquaConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyAquaConfigurationResponse>;
    /**
     * Modifies an authentication profile.
     */
    postModifyAuthenticationProfile(req: operations.POSTModifyAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyAuthenticationProfileResponse>;
    /**
     * <p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postModifyCluster(req: operations.POSTModifyClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyClusterResponse>;
    /**
     * Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.
     */
    postModifyClusterDbRevision(req: operations.POSTModifyClusterDbRevisionRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyClusterDbRevisionResponse>;
    /**
     * <p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postModifyClusterIamRoles(req: operations.POSTModifyClusterIamRolesRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyClusterIamRolesResponse>;
    /**
     * Modifies the maintenance settings of a cluster.
     */
    postModifyClusterMaintenance(req: operations.POSTModifyClusterMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyClusterMaintenanceResponse>;
    /**
     * <p>Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postModifyClusterParameterGroup(req: operations.POSTModifyClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyClusterParameterGroupResponse>;
    /**
     * <p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
     */
    postModifyClusterSnapshot(req: operations.POSTModifyClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyClusterSnapshotResponse>;
    /**
     * Modifies a snapshot schedule for a cluster.
     */
    postModifyClusterSnapshotSchedule(req: operations.POSTModifyClusterSnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyClusterSnapshotScheduleResponse>;
    /**
     * Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.
     */
    postModifyClusterSubnetGroup(req: operations.POSTModifyClusterSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyClusterSubnetGroupResponse>;
    /**
     * Modifies a Redshift-managed VPC endpoint.
     */
    postModifyEndpointAccess(req: operations.POSTModifyEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyEndpointAccessResponse>;
    /**
     * Modifies an existing Amazon Redshift event notification subscription.
     */
    postModifyEventSubscription(req: operations.POSTModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyEventSubscriptionResponse>;
    /**
     * Modifies a scheduled action.
     */
    postModifyScheduledAction(req: operations.POSTModifyScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyScheduledActionResponse>;
    /**
     * Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period.
     */
    postModifySnapshotCopyRetentionPeriod(req: operations.POSTModifySnapshotCopyRetentionPeriodRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifySnapshotCopyRetentionPeriodResponse>;
    /**
     * Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.
     */
    postModifySnapshotSchedule(req: operations.POSTModifySnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifySnapshotScheduleResponse>;
    /**
     * Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.
     */
    postModifyUsageLimit(req: operations.POSTModifyUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyUsageLimitResponse>;
    /**
     * Pauses a cluster.
     */
    postPauseCluster(req: operations.POSTPauseClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTPauseClusterResponse>;
    /**
     * <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postPurchaseReservedNodeOffering(req: operations.POSTPurchaseReservedNodeOfferingRequest, config?: AxiosRequestConfig): Promise<operations.POSTPurchaseReservedNodeOfferingResponse>;
    /**
     * Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
     */
    postRebootCluster(req: operations.POSTRebootClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTRebootClusterResponse>;
    /**
     * From a datashare consumer account, rejects the specified datashare.
     */
    postRejectDataShare(req: operations.POSTRejectDataShareRequest, config?: AxiosRequestConfig): Promise<operations.POSTRejectDataShareResponse>;
    /**
     * Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the <i>ResetAllParameters</i> parameter. For parameter changes to take effect you must reboot any associated clusters.
     */
    postResetClusterParameterGroup(req: operations.POSTResetClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetClusterParameterGroupResponse>;
    /**
     * <p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>
     */
    postResizeCluster(req: operations.POSTResizeClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTResizeClusterResponse>;
    /**
     * <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postRestoreFromClusterSnapshot(req: operations.POSTRestoreFromClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreFromClusterSnapshotResponse>;
    /**
     * <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p> <p>You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>
     */
    postRestoreTableFromClusterSnapshot(req: operations.POSTRestoreTableFromClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreTableFromClusterSnapshotResponse>;
    /**
     * Resumes a paused cluster.
     */
    postResumeCluster(req: operations.POSTResumeClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTResumeClusterResponse>;
    /**
     * Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
     */
    postRevokeClusterSecurityGroupIngress(req: operations.POSTRevokeClusterSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTRevokeClusterSecurityGroupIngressResponse>;
    /**
     * Revokes access to a cluster.
     */
    postRevokeEndpointAccess(req: operations.POSTRevokeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.POSTRevokeEndpointAccessResponse>;
    /**
     * <p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    postRevokeSnapshotAccess(req: operations.POSTRevokeSnapshotAccessRequest, config?: AxiosRequestConfig): Promise<operations.POSTRevokeSnapshotAccessResponse>;
    /**
     * Rotates the encryption keys for a cluster.
     */
    postRotateEncryptionKey(req: operations.POSTRotateEncryptionKeyRequest, config?: AxiosRequestConfig): Promise<operations.POSTRotateEncryptionKeyResponse>;
    /**
     * Updates the status of a partner integration.
     */
    postUpdatePartnerStatus(req: operations.POSTUpdatePartnerStatusRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdatePartnerStatusResponse>;
}
