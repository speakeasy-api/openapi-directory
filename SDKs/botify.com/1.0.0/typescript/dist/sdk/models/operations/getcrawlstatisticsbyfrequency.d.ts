import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Aggregation frequency
 */
export declare enum GetCrawlStatisticsByFrequencyFrequencyEnum {
    Onemn = "1mn",
    Fivemn = "5mn",
    Sixtymn = "60mn"
}
export declare class GetCrawlStatisticsByFrequencyRequest extends SpeakeasyBase {
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    /**
     * Aggregation frequency
     */
    frequency: GetCrawlStatisticsByFrequencyFrequencyEnum;
    /**
     * max number of elements to retrieve
     */
    limit?: number;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * User's identifier
     */
    username: string;
}
export declare class GetCrawlStatisticsByFrequencyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    crawlStatisticsTime?: shared.CrawlStatisticsTime;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
