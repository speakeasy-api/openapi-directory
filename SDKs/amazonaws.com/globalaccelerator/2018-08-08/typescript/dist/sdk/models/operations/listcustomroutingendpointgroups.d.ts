import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCustomRoutingEndpointGroupsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingEndpointGroups = "GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups"
}
export declare class ListCustomRoutingEndpointGroupsRequest extends SpeakeasyBase {
    listCustomRoutingEndpointGroupsRequest: shared.ListCustomRoutingEndpointGroupsRequest;
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
    xAmzTarget: ListCustomRoutingEndpointGroupsXAmzTargetEnum;
}
export declare class ListCustomRoutingEndpointGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listCustomRoutingEndpointGroupsResponse?: shared.ListCustomRoutingEndpointGroupsResponse;
    /**
     * ListenerNotFoundException
     */
    listenerNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
