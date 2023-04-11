import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAggregateDiscoveredResourceCountsXAmzTargetEnum {
    StarlingDoveServiceGetAggregateDiscoveredResourceCounts = "StarlingDoveService.GetAggregateDiscoveredResourceCounts"
}
export declare class GetAggregateDiscoveredResourceCountsRequest extends SpeakeasyBase {
    getAggregateDiscoveredResourceCountsRequest: shared.GetAggregateDiscoveredResourceCountsRequest;
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
    xAmzTarget: GetAggregateDiscoveredResourceCountsXAmzTargetEnum;
}
export declare class GetAggregateDiscoveredResourceCountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAggregateDiscoveredResourceCountsResponse?: shared.GetAggregateDiscoveredResourceCountsResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * NoSuchConfigurationAggregatorException
     */
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
