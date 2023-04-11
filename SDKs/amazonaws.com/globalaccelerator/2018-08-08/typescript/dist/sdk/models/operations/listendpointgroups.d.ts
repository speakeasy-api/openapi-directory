import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEndpointGroupsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListEndpointGroups = "GlobalAccelerator_V20180706.ListEndpointGroups"
}
export declare class ListEndpointGroupsRequest extends SpeakeasyBase {
    listEndpointGroupsRequest: shared.ListEndpointGroupsRequest;
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
    xAmzTarget: ListEndpointGroupsXAmzTargetEnum;
}
export declare class ListEndpointGroupsResponse extends SpeakeasyBase {
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
    listEndpointGroupsResponse?: shared.ListEndpointGroupsResponse;
    /**
     * ListenerNotFoundException
     */
    listenerNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
