import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePendingAggregationRequestsXAmzTargetEnum {
    StarlingDoveServiceDescribePendingAggregationRequests = "StarlingDoveService.DescribePendingAggregationRequests"
}
export declare class DescribePendingAggregationRequestsRequest extends SpeakeasyBase {
    describePendingAggregationRequestsRequest: shared.DescribePendingAggregationRequestsRequest;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: DescribePendingAggregationRequestsXAmzTargetEnum;
}
export declare class DescribePendingAggregationRequestsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePendingAggregationRequestsResponse?: shared.DescribePendingAggregationRequestsResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
