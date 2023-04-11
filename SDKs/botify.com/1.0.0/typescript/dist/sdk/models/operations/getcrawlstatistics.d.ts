import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCrawlStatisticsRequest extends SpeakeasyBase {
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * User's identifier
     */
    username: string;
}
export declare class GetCrawlStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    crawlStatistics?: shared.CrawlStatistics;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
