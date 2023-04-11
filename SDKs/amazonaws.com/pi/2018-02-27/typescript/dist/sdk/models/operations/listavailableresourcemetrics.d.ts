import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAvailableResourceMetricsXAmzTargetEnum {
    PerformanceInsightsv20180227ListAvailableResourceMetrics = "PerformanceInsightsv20180227.ListAvailableResourceMetrics"
}
export declare class ListAvailableResourceMetricsRequest extends SpeakeasyBase {
    listAvailableResourceMetricsRequest: shared.ListAvailableResourceMetricsRequest;
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
    xAmzTarget: ListAvailableResourceMetricsXAmzTargetEnum;
}
export declare class ListAvailableResourceMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * Success
     */
    listAvailableResourceMetricsResponse?: shared.ListAvailableResourceMetricsResponse;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
