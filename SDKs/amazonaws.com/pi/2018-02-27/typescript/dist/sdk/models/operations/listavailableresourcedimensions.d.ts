import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAvailableResourceDimensionsXAmzTargetEnum {
    PerformanceInsightsv20180227ListAvailableResourceDimensions = "PerformanceInsightsv20180227.ListAvailableResourceDimensions"
}
export declare class ListAvailableResourceDimensionsRequest extends SpeakeasyBase {
    listAvailableResourceDimensionsRequest: shared.ListAvailableResourceDimensionsRequest;
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
    xAmzTarget: ListAvailableResourceDimensionsXAmzTargetEnum;
}
export declare class ListAvailableResourceDimensionsResponse extends SpeakeasyBase {
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
    listAvailableResourceDimensionsResponse?: shared.ListAvailableResourceDimensionsResponse;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
