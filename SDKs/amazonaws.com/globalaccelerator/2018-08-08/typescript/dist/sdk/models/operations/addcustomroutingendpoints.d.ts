import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddCustomRoutingEndpointsXAmzTargetEnum {
    GlobalAcceleratorV20180706AddCustomRoutingEndpoints = "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints"
}
export declare class AddCustomRoutingEndpointsRequest extends SpeakeasyBase {
    addCustomRoutingEndpointsRequest: shared.AddCustomRoutingEndpointsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddCustomRoutingEndpointsXAmzTargetEnum;
}
export declare class AddCustomRoutingEndpointsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    addCustomRoutingEndpointsResponse?: shared.AddCustomRoutingEndpointsResponse;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * EndpointAlreadyExistsException
     */
    endpointAlreadyExistsException?: any;
    /**
     * EndpointGroupNotFoundException
     */
    endpointGroupNotFoundException?: any;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
