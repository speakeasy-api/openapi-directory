import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDiscoveredResourceCountsXAmzTargetEnum {
    StarlingDoveServiceGetDiscoveredResourceCounts = "StarlingDoveService.GetDiscoveredResourceCounts"
}
export declare class GetDiscoveredResourceCountsRequest extends SpeakeasyBase {
    getDiscoveredResourceCountsRequest: shared.GetDiscoveredResourceCountsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDiscoveredResourceCountsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetDiscoveredResourceCountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDiscoveredResourceCountsResponse?: shared.GetDiscoveredResourceCountsResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
