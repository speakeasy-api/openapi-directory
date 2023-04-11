import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourceMetricsXAmzTargetEnum {
    PerformanceInsightsv20180227GetResourceMetrics = "PerformanceInsightsv20180227.GetResourceMetrics"
}
export declare class GetResourceMetricsRequest extends SpeakeasyBase {
    getResourceMetricsRequest: shared.GetResourceMetricsRequest;
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
    xAmzTarget: GetResourceMetricsXAmzTargetEnum;
}
export declare class GetResourceMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourceMetricsResponse?: shared.GetResourceMetricsResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
