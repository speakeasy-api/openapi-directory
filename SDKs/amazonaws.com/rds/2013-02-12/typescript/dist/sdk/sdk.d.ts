import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://rds.{region}.amazonaws.com", "https://rds.{region}.amazonaws.com", "http://rds.amazonaws.com", "https://rds.amazonaws.com", "http://rds.{region}.amazonaws.com.cn", "https://rds.{region}.amazonaws.com.cn"];
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
 *
 * @see {@link https://docs.aws.amazon.com/rds/} - Amazon Web Services documentation
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
    getAddSourceIdentifierToSubscription(req: operations.GETAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETAddSourceIdentifierToSubscriptionResponse>;
    getAuthorizeDBSecurityGroupIngress(req: operations.GETAuthorizeDBSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GETAuthorizeDBSecurityGroupIngressResponse>;
    getCopyDBSnapshot(req: operations.GETCopyDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETCopyDBSnapshotResponse>;
    getCreateDBInstance(req: operations.GETCreateDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateDBInstanceResponse>;
    getCreateDBInstanceReadReplica(req: operations.GETCreateDBInstanceReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateDBInstanceReadReplicaResponse>;
    getCreateDBParameterGroup(req: operations.GETCreateDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateDBParameterGroupResponse>;
    getCreateDBSecurityGroup(req: operations.GETCreateDBSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateDBSecurityGroupResponse>;
    getCreateDBSnapshot(req: operations.GETCreateDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateDBSnapshotResponse>;
    getCreateDBSubnetGroup(req: operations.GETCreateDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateDBSubnetGroupResponse>;
    getCreateEventSubscription(req: operations.GETCreateEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateEventSubscriptionResponse>;
    getCreateOptionGroup(req: operations.GETCreateOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateOptionGroupResponse>;
    getDeleteDBInstance(req: operations.GETDeleteDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBInstanceResponse>;
    getDeleteDBParameterGroup(req: operations.GETDeleteDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBParameterGroupResponse>;
    getDeleteDBSecurityGroup(req: operations.GETDeleteDBSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBSecurityGroupResponse>;
    getDeleteDBSnapshot(req: operations.GETDeleteDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBSnapshotResponse>;
    getDeleteDBSubnetGroup(req: operations.GETDeleteDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBSubnetGroupResponse>;
    getDeleteEventSubscription(req: operations.GETDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteEventSubscriptionResponse>;
    getDeleteOptionGroup(req: operations.GETDeleteOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteOptionGroupResponse>;
    getDescribeDBEngineVersions(req: operations.GETDescribeDBEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBEngineVersionsResponse>;
    getDescribeDBInstances(req: operations.GETDescribeDBInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBInstancesResponse>;
    getDescribeDBLogFiles(req: operations.GETDescribeDBLogFilesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBLogFilesResponse>;
    getDescribeDBParameterGroups(req: operations.GETDescribeDBParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBParameterGroupsResponse>;
    getDescribeDBParameters(req: operations.GETDescribeDBParametersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBParametersResponse>;
    getDescribeDBSecurityGroups(req: operations.GETDescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBSecurityGroupsResponse>;
    getDescribeDBSnapshots(req: operations.GETDescribeDBSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBSnapshotsResponse>;
    getDescribeDBSubnetGroups(req: operations.GETDescribeDBSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBSubnetGroupsResponse>;
    getDescribeEngineDefaultParameters(req: operations.GETDescribeEngineDefaultParametersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEngineDefaultParametersResponse>;
    getDescribeEventCategories(req: operations.GETDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEventCategoriesResponse>;
    getDescribeEventSubscriptions(req: operations.GETDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEventSubscriptionsResponse>;
    getDescribeEvents(req: operations.GETDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEventsResponse>;
    getDescribeOptionGroupOptions(req: operations.GETDescribeOptionGroupOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeOptionGroupOptionsResponse>;
    getDescribeOptionGroups(req: operations.GETDescribeOptionGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeOptionGroupsResponse>;
    getDescribeOrderableDBInstanceOptions(req: operations.GETDescribeOrderableDBInstanceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeOrderableDBInstanceOptionsResponse>;
    getDescribeReservedDBInstances(req: operations.GETDescribeReservedDBInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeReservedDBInstancesResponse>;
    getDescribeReservedDBInstancesOfferings(req: operations.GETDescribeReservedDBInstancesOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeReservedDBInstancesOfferingsResponse>;
    getDownloadDBLogFilePortion(req: operations.GETDownloadDBLogFilePortionRequest, config?: AxiosRequestConfig): Promise<operations.GETDownloadDBLogFilePortionResponse>;
    getListTagsForResource(req: operations.GETListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.GETListTagsForResourceResponse>;
    getModifyDBInstance(req: operations.GETModifyDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBInstanceResponse>;
    getModifyDBSubnetGroup(req: operations.GETModifyDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBSubnetGroupResponse>;
    getModifyEventSubscription(req: operations.GETModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyEventSubscriptionResponse>;
    getPromoteReadReplica(req: operations.GETPromoteReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.GETPromoteReadReplicaResponse>;
    getPurchaseReservedDBInstancesOffering(req: operations.GETPurchaseReservedDBInstancesOfferingRequest, config?: AxiosRequestConfig): Promise<operations.GETPurchaseReservedDBInstancesOfferingResponse>;
    getRebootDBInstance(req: operations.GETRebootDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETRebootDBInstanceResponse>;
    getRemoveSourceIdentifierFromSubscription(req: operations.GETRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveSourceIdentifierFromSubscriptionResponse>;
    getRemoveTagsFromResource(req: operations.GETRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveTagsFromResourceResponse>;
    getRestoreDBInstanceFromDBSnapshot(req: operations.GETRestoreDBInstanceFromDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETRestoreDBInstanceFromDBSnapshotResponse>;
    getRestoreDBInstanceToPointInTime(req: operations.GETRestoreDBInstanceToPointInTimeRequest, config?: AxiosRequestConfig): Promise<operations.GETRestoreDBInstanceToPointInTimeResponse>;
    getRevokeDBSecurityGroupIngress(req: operations.GETRevokeDBSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GETRevokeDBSecurityGroupIngressResponse>;
    postAddSourceIdentifierToSubscription(req: operations.POSTAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddSourceIdentifierToSubscriptionResponse>;
    postAddTagsToResource(req: operations.POSTAddTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddTagsToResourceResponse>;
    postAuthorizeDBSecurityGroupIngress(req: operations.POSTAuthorizeDBSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTAuthorizeDBSecurityGroupIngressResponse>;
    postCopyDBSnapshot(req: operations.POSTCopyDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyDBSnapshotResponse>;
    postCreateDBInstance(req: operations.POSTCreateDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBInstanceResponse>;
    postCreateDBInstanceReadReplica(req: operations.POSTCreateDBInstanceReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBInstanceReadReplicaResponse>;
    postCreateDBParameterGroup(req: operations.POSTCreateDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBParameterGroupResponse>;
    postCreateDBSecurityGroup(req: operations.POSTCreateDBSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBSecurityGroupResponse>;
    postCreateDBSnapshot(req: operations.POSTCreateDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBSnapshotResponse>;
    postCreateDBSubnetGroup(req: operations.POSTCreateDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBSubnetGroupResponse>;
    postCreateEventSubscription(req: operations.POSTCreateEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateEventSubscriptionResponse>;
    postCreateOptionGroup(req: operations.POSTCreateOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateOptionGroupResponse>;
    postDeleteDBInstance(req: operations.POSTDeleteDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBInstanceResponse>;
    postDeleteDBParameterGroup(req: operations.POSTDeleteDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBParameterGroupResponse>;
    postDeleteDBSecurityGroup(req: operations.POSTDeleteDBSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBSecurityGroupResponse>;
    postDeleteDBSnapshot(req: operations.POSTDeleteDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBSnapshotResponse>;
    postDeleteDBSubnetGroup(req: operations.POSTDeleteDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBSubnetGroupResponse>;
    postDeleteEventSubscription(req: operations.POSTDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteEventSubscriptionResponse>;
    postDeleteOptionGroup(req: operations.POSTDeleteOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteOptionGroupResponse>;
    postDescribeDBEngineVersions(req: operations.POSTDescribeDBEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBEngineVersionsResponse>;
    postDescribeDBInstances(req: operations.POSTDescribeDBInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBInstancesResponse>;
    postDescribeDBLogFiles(req: operations.POSTDescribeDBLogFilesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBLogFilesResponse>;
    postDescribeDBParameterGroups(req: operations.POSTDescribeDBParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBParameterGroupsResponse>;
    postDescribeDBParameters(req: operations.POSTDescribeDBParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBParametersResponse>;
    postDescribeDBSecurityGroups(req: operations.POSTDescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBSecurityGroupsResponse>;
    postDescribeDBSnapshots(req: operations.POSTDescribeDBSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBSnapshotsResponse>;
    postDescribeDBSubnetGroups(req: operations.POSTDescribeDBSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBSubnetGroupsResponse>;
    postDescribeEngineDefaultParameters(req: operations.POSTDescribeEngineDefaultParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEngineDefaultParametersResponse>;
    postDescribeEventCategories(req: operations.POSTDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventCategoriesResponse>;
    postDescribeEventSubscriptions(req: operations.POSTDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventSubscriptionsResponse>;
    postDescribeEvents(req: operations.POSTDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventsResponse>;
    postDescribeOptionGroupOptions(req: operations.POSTDescribeOptionGroupOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeOptionGroupOptionsResponse>;
    postDescribeOptionGroups(req: operations.POSTDescribeOptionGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeOptionGroupsResponse>;
    postDescribeOrderableDBInstanceOptions(req: operations.POSTDescribeOrderableDBInstanceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeOrderableDBInstanceOptionsResponse>;
    postDescribeReservedDBInstances(req: operations.POSTDescribeReservedDBInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedDBInstancesResponse>;
    postDescribeReservedDBInstancesOfferings(req: operations.POSTDescribeReservedDBInstancesOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedDBInstancesOfferingsResponse>;
    postDownloadDBLogFilePortion(req: operations.POSTDownloadDBLogFilePortionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDownloadDBLogFilePortionResponse>;
    postListTagsForResource(req: operations.POSTListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTListTagsForResourceResponse>;
    postModifyDBInstance(req: operations.POSTModifyDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBInstanceResponse>;
    postModifyDBParameterGroup(req: operations.POSTModifyDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBParameterGroupResponse>;
    postModifyDBSubnetGroup(req: operations.POSTModifyDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBSubnetGroupResponse>;
    postModifyEventSubscription(req: operations.POSTModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyEventSubscriptionResponse>;
    postModifyOptionGroup(req: operations.POSTModifyOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyOptionGroupResponse>;
    postPromoteReadReplica(req: operations.POSTPromoteReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.POSTPromoteReadReplicaResponse>;
    postPurchaseReservedDBInstancesOffering(req: operations.POSTPurchaseReservedDBInstancesOfferingRequest, config?: AxiosRequestConfig): Promise<operations.POSTPurchaseReservedDBInstancesOfferingResponse>;
    postRebootDBInstance(req: operations.POSTRebootDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTRebootDBInstanceResponse>;
    postRemoveSourceIdentifierFromSubscription(req: operations.POSTRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveSourceIdentifierFromSubscriptionResponse>;
    postRemoveTagsFromResource(req: operations.POSTRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveTagsFromResourceResponse>;
    postResetDBParameterGroup(req: operations.POSTResetDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetDBParameterGroupResponse>;
    postRestoreDBInstanceFromDBSnapshot(req: operations.POSTRestoreDBInstanceFromDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBInstanceFromDBSnapshotResponse>;
    postRestoreDBInstanceToPointInTime(req: operations.POSTRestoreDBInstanceToPointInTimeRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBInstanceToPointInTimeResponse>;
    postRevokeDBSecurityGroupIngress(req: operations.POSTRevokeDBSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTRevokeDBSecurityGroupIngressResponse>;
}
