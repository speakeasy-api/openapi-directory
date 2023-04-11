import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveCustomRoutingEndpointsXAmzTargetEnum {
    GlobalAcceleratorV20180706RemoveCustomRoutingEndpoints = "GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints"
}
export declare class RemoveCustomRoutingEndpointsRequest extends SpeakeasyBase {
    removeCustomRoutingEndpointsRequest: shared.RemoveCustomRoutingEndpointsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveCustomRoutingEndpointsXAmzTargetEnum;
}
export declare class RemoveCustomRoutingEndpointsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * EndpointGroupNotFoundException
     */
    endpointGroupNotFoundException?: any;
    /**
     * EndpointNotFoundException
     */
    endpointNotFoundException?: any;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
