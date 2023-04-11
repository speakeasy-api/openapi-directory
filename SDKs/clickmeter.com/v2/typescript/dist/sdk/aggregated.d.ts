import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Aggregated {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve statistics about a subset of conversions for a timeframe with conversions data
     */
    aggregatedGetConversionsSummary(req: operations.AggregatedGetConversionsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.AggregatedGetConversionsSummaryResponse>;
    /**
     * Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
     */
    aggregatedGetDatapointsSummary(req: operations.AggregatedGetDatapointsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.AggregatedGetDatapointsSummaryResponse>;
    /**
     * Retrieve statistics about a subset of groups for a timeframe with groups data
     */
    aggregatedGetGroupsSummary(req: operations.AggregatedGetGroupsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.AggregatedGetGroupsSummaryResponse>;
    /**
     * Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
     */
    aggregatedGetStatisticsList(req: operations.AggregatedGetStatisticsListRequest, config?: AxiosRequestConfig): Promise<operations.AggregatedGetStatisticsListResponse>;
    /**
     * Retrieve statistics about this customer for a timeframe
     */
    aggregatedGetStatisticsSingle(req: operations.AggregatedGetStatisticsSingleRequest, config?: AxiosRequestConfig): Promise<operations.AggregatedGetStatisticsSingleResponse>;
}
