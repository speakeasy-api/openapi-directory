import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCrawlerMetricsXAmzTargetEnum {
    AWSGlueGetCrawlerMetrics = "AWSGlue.GetCrawlerMetrics"
}
export declare class GetCrawlerMetricsRequest extends SpeakeasyBase {
    getCrawlerMetricsRequest: shared.GetCrawlerMetricsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCrawlerMetricsXAmzTargetEnum;
}
export declare class GetCrawlerMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCrawlerMetricsResponse?: shared.GetCrawlerMetricsResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
