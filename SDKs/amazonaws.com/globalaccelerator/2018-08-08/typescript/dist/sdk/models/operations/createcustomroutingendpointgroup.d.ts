import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCustomRoutingEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateCustomRoutingEndpointGroup = "GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup"
}
export declare class CreateCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
    createCustomRoutingEndpointGroupRequest: shared.CreateCustomRoutingEndpointGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCustomRoutingEndpointGroupXAmzTargetEnum;
}
export declare class CreateCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createCustomRoutingEndpointGroupResponse?: shared.CreateCustomRoutingEndpointGroupResponse;
    /**
     * EndpointGroupAlreadyExistsException
     */
    endpointGroupAlreadyExistsException?: any;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidPortRangeException
     */
    invalidPortRangeException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ListenerNotFoundException
     */
    listenerNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
