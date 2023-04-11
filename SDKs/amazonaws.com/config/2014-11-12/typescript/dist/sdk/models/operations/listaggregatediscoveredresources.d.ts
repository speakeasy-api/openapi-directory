import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAggregateDiscoveredResourcesXAmzTargetEnum {
    StarlingDoveServiceListAggregateDiscoveredResources = "StarlingDoveService.ListAggregateDiscoveredResources"
}
export declare class ListAggregateDiscoveredResourcesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listAggregateDiscoveredResourcesRequest: shared.ListAggregateDiscoveredResourcesRequest;
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
    xAmzTarget: ListAggregateDiscoveredResourcesXAmzTargetEnum;
}
export declare class ListAggregateDiscoveredResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listAggregateDiscoveredResourcesResponse?: shared.ListAggregateDiscoveredResourcesResponse;
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
