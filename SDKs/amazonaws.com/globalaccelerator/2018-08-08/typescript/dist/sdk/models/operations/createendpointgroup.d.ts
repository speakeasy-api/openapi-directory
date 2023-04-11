import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateEndpointGroup = "GlobalAccelerator_V20180706.CreateEndpointGroup"
}
export declare class CreateEndpointGroupRequest extends SpeakeasyBase {
    createEndpointGroupRequest: shared.CreateEndpointGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEndpointGroupXAmzTargetEnum;
}
export declare class CreateEndpointGroupResponse extends SpeakeasyBase {
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
    createEndpointGroupResponse?: shared.CreateEndpointGroupResponse;
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
