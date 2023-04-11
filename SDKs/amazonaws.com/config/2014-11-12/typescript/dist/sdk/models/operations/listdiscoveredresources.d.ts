import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDiscoveredResourcesXAmzTargetEnum {
    StarlingDoveServiceListDiscoveredResources = "StarlingDoveService.ListDiscoveredResources"
}
export declare class ListDiscoveredResourcesRequest extends SpeakeasyBase {
    listDiscoveredResourcesRequest: shared.ListDiscoveredResourcesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDiscoveredResourcesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListDiscoveredResourcesResponse extends SpeakeasyBase {
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
    listDiscoveredResourcesResponse?: shared.ListDiscoveredResourcesResponse;
    /**
     * NoAvailableConfigurationRecorderException
     */
    noAvailableConfigurationRecorderException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
