import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMetricAttributionMetricsXAmzTargetEnum {
    AmazonPersonalizeListMetricAttributionMetrics = "AmazonPersonalize.ListMetricAttributionMetrics"
}
export declare class ListMetricAttributionMetricsRequest extends SpeakeasyBase {
    listMetricAttributionMetricsRequest: shared.ListMetricAttributionMetricsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMetricAttributionMetricsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListMetricAttributionMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listMetricAttributionMetricsResponse?: shared.ListMetricAttributionMetricsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
