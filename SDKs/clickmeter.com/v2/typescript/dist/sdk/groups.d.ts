import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Count the groups associated to the user.
     */
    groupsCount(req: operations.GroupsCountRequest, config?: AxiosRequestConfig): Promise<operations.GroupsCountResponse>;
    /**
     * Delete group specified by id
     */
    groupsDelete(req: operations.GroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GroupsDeleteResponse>;
    /**
     * List of all the groups associated to the user.
     */
    groupsGet(req: operations.GroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetResponse>;
    /**
     * List of all the datapoints associated to the user in this group.
     */
    groupsGetDatapoints(req: operations.GroupsGetDatapointsRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetDatapointsResponse>;
    /**
     * Count the datapoints associated to the user in this group.
     */
    groupsGetDatapointsCount(req: operations.GroupsGetDatapointsCountRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetDatapointsCountResponse>;
    /**
     * Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
     */
    groupsGetDatapointsSummary(req: operations.GroupsGetDatapointsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetDatapointsSummaryResponse>;
    /**
     * Retrieve the list of events related to this group.
     */
    groupsGetHits(req: operations.GroupsGetHitsRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetHitsResponse>;
    /**
     * Retrieve statistics about this customer for a timeframe by groups
     */
    groupsGetStatisticsAggregatedSingle(req: operations.GroupsGetStatisticsAggregatedSingleRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetStatisticsAggregatedSingleResponse>;
    /**
     * Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
     */
    groupsGetStatisticsAllList(req: operations.GroupsGetStatisticsAllListRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetStatisticsAllListResponse>;
    /**
     * Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
     */
    groupsGetStatisticsList(req: operations.GroupsGetStatisticsListRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetStatisticsListResponse>;
    /**
     * Retrieve statistics about this group for a timeframe
     */
    groupsGetStatisticsSingle(req: operations.GroupsGetStatisticsSingleRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetStatisticsSingleResponse>;
    /**
     * Fast switch the "favourite" field of a group
     */
    groupsPatchFavourite(req: operations.GroupsPatchFavouriteRequest, config?: AxiosRequestConfig): Promise<operations.GroupsPatchFavouriteResponse>;
    /**
     * Fast patch the "notes" field of a group
     */
    groupsPatchNotesForm(req: operations.GroupsPatchNotesFormRequest, config?: AxiosRequestConfig): Promise<operations.GroupsPatchNotesFormResponse>;
    /**
     * Fast patch the "notes" field of a group
     */
    groupsPatchNotesJson(req: operations.GroupsPatchNotesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GroupsPatchNotesJsonResponse>;
    /**
     * Fast patch the "notes" field of a group
     */
    groupsPatchNotesRaw(req: operations.GroupsPatchNotesRawRequest, config?: AxiosRequestConfig): Promise<operations.GroupsPatchNotesRawResponse>;
    /**
     * Update a group
     */
    groupsPost(req: operations.GroupsPostRequest, config?: AxiosRequestConfig): Promise<operations.GroupsPostResponse>;
    /**
     * Create a group
     */
    groupsPut(req: shared.ApiCoreDtoGroupsGroup, config?: AxiosRequestConfig): Promise<operations.GroupsPutResponse>;
    /**
     * Create a datapoint in this group
     */
    groupsPutDatapoint(req: operations.GroupsPutDatapointRequest, config?: AxiosRequestConfig): Promise<operations.GroupsPutDatapointResponse>;
    /**
     * Get a group
     */
    getGroupsId(req: operations.GetGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsIdResponse>;
}
