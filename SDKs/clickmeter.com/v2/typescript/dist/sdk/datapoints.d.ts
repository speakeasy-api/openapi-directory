import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DataPoints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete multiple datapoints
     */
    dataPointsBatchDelete(req: shared.ApiCoreRequestsDeleteBatch, config?: AxiosRequestConfig): Promise<operations.DataPointsBatchDeleteResponse>;
    /**
     * Update multiple datapoints
     */
    dataPointsBatchPost(req: shared.ApiCoreRequestsDatapointsBatch, config?: AxiosRequestConfig): Promise<operations.DataPointsBatchPostResponse>;
    /**
     * Create multiple datapoints
     */
    dataPointsBatchPut(req: shared.ApiCoreRequestsDatapointsBatch, config?: AxiosRequestConfig): Promise<operations.DataPointsBatchPutResponse>;
    /**
     * Count the datapoints associated to the user
     */
    dataPointsCount(req: operations.DataPointsCountRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsCountResponse>;
    /**
     * Delete a datapoint
     */
    dataPointsDelete(req: operations.DataPointsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsDeleteResponse>;
    /**
     * List of all the datapoints associated to the user
     */
    dataPointsGet(req: operations.DataPointsGetRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetResponse>;
    /**
     * Retrieve the list of events related to this datapoint.
     */
    dataPointsGetHits(req: operations.DataPointsGetHitsRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetHitsResponse>;
    /**
     * Retrieve statistics about this customer for a timeframe by groups
     */
    dataPointsGetStatisticsAggregatedSingle(req: operations.DataPointsGetStatisticsAggregatedSingleRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetStatisticsAggregatedSingleResponse>;
    /**
     * Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
     */
    dataPointsGetStatisticsAllList(req: operations.DataPointsGetStatisticsAllListRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetStatisticsAllListResponse>;
    /**
     * Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
     */
    dataPointsGetStatisticsList(req: operations.DataPointsGetStatisticsListRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetStatisticsListResponse>;
    /**
     * Retrieve statistics about this datapoint for a timeframe
     */
    dataPointsGetStatisticsSingle(req: operations.DataPointsGetStatisticsSingleRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetStatisticsSingleResponse>;
    /**
     * Fast switch the "favourite" field of a datapoint
     */
    dataPointsPatchFavourite(req: operations.DataPointsPatchFavouriteRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsPatchFavouriteResponse>;
    /**
     * Fast patch the "notes" field of a datapoint
     */
    dataPointsPatchNotesForm(req: operations.DataPointsPatchNotesFormRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsPatchNotesFormResponse>;
    /**
     * Fast patch the "notes" field of a datapoint
     */
    dataPointsPatchNotesJson(req: operations.DataPointsPatchNotesJsonRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsPatchNotesJsonResponse>;
    /**
     * Fast patch the "notes" field of a datapoint
     */
    dataPointsPatchNotesRaw(req: operations.DataPointsPatchNotesRawRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsPatchNotesRawResponse>;
    /**
     * Update a datapoint
     */
    dataPointsPost(req: operations.DataPointsPostRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsPostResponse>;
    /**
     * Create a datapoint
     */
    dataPointsPut(req: shared.ApiCoreDtoDatapointsDatapoint, config?: AxiosRequestConfig): Promise<operations.DataPointsPutResponse>;
    /**
     * Get a datapoint
     */
    getDatapointsId(req: operations.GetDatapointsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDatapointsIdResponse>;
}
