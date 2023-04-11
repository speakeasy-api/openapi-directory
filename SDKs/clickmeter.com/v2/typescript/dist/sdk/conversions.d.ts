import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Conversions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a count of conversions
     */
    conversionsCount(req: operations.ConversionsCountRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsCountResponse>;
    /**
     * Delete conversion specified by id
     */
    conversionsDelete(req: operations.ConversionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsDeleteResponse>;
    /**
     * Retrieve a list of conversions
     */
    conversionsGet(req: operations.ConversionsGetRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetResponse>;
    /**
     * Retrieve a list of datapoints connected to this conversion
     */
    conversionsGetDatapoints(req: operations.ConversionsGetDatapointsRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetDatapointsResponse>;
    /**
     * Retrieve a count of datapoints connected to this conversion
     */
    conversionsGetDatapointsCount(req: operations.ConversionsGetDatapointsCountRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetDatapointsCountResponse>;
    /**
     * Retrieve the list of events related to this conversion.
     */
    conversionsGetHits(req: operations.ConversionsGetHitsRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetHitsResponse>;
    /**
     * Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
     */
    conversionsGetStatisticsAllList(req: operations.ConversionsGetStatisticsAllListRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetStatisticsAllListResponse>;
    /**
     * Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
     */
    conversionsGetStatisticsList(req: operations.ConversionsGetStatisticsListRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetStatisticsListResponse>;
    /**
     * Retrieve statistics about this conversion for a timeframe
     */
    conversionsGetStatisticsSingle(req: operations.ConversionsGetStatisticsSingleRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetStatisticsSingleResponse>;
    /**
     * Fast patch the "notes" field of a conversion
     */
    conversionsPatchNotesForm(req: operations.ConversionsPatchNotesFormRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPatchNotesFormResponse>;
    /**
     * Fast patch the "notes" field of a conversion
     */
    conversionsPatchNotesJson(req: operations.ConversionsPatchNotesJsonRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPatchNotesJsonResponse>;
    /**
     * Fast patch the "notes" field of a conversion
     */
    conversionsPatchNotesRaw(req: operations.ConversionsPatchNotesRawRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPatchNotesRawResponse>;
    /**
     * Modify the association between a conversion and a datapoint
     */
    conversionsPatchForm(req: operations.ConversionsPatchFormRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPatchFormResponse>;
    /**
     * Modify the association between a conversion and a datapoint
     */
    conversionsPatchJson(req: operations.ConversionsPatchJsonRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPatchJsonResponse>;
    /**
     * Modify the association between a conversion and a datapoint
     */
    conversionsPatchRaw(req: operations.ConversionsPatchRawRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPatchRawResponse>;
    /**
     * Update conversion specified by id
     */
    conversionsPostForm(req: operations.ConversionsPostFormRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPostFormResponse>;
    /**
     * Update conversion specified by id
     */
    conversionsPostJson(req: operations.ConversionsPostJsonRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPostJsonResponse>;
    /**
     * Update conversion specified by id
     */
    conversionsPostRaw(req: operations.ConversionsPostRawRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPostRawResponse>;
    /**
     * Create a conversion
     */
    conversionsPutForm(req: shared.ApiCoreDtoConversionsConversion, config?: AxiosRequestConfig): Promise<operations.ConversionsPutFormResponse>;
    /**
     * Create a conversion
     */
    conversionsPutJson(req: shared.ApiCoreDtoConversionsConversion, config?: AxiosRequestConfig): Promise<operations.ConversionsPutJsonResponse>;
    /**
     * Create a conversion
     */
    conversionsPutRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.ConversionsPutRawResponse>;
    /**
     * Retrieve conversion specified by id
     */
    getConversionsConversionId(req: operations.GetConversionsConversionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConversionsConversionIdResponse>;
    /**
     * Modify the association between a conversion and multiple datapoints
     */
    putConversionsConversionIdDatapointsBatchPatch(req: operations.PutConversionsConversionIdDatapointsBatchPatchRequest, config?: AxiosRequestConfig): Promise<operations.PutConversionsConversionIdDatapointsBatchPatchResponse>;
}
