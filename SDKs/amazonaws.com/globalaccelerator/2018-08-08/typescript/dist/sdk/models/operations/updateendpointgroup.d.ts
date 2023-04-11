import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateEndpointGroup = "GlobalAccelerator_V20180706.UpdateEndpointGroup"
}
export declare class UpdateEndpointGroupRequest extends SpeakeasyBase {
    updateEndpointGroupRequest: shared.UpdateEndpointGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEndpointGroupXAmzTargetEnum;
}
export declare class UpdateEndpointGroupResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
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
    /**
     * Success
     */
    updateEndpointGroupResponse?: shared.UpdateEndpointGroupResponse;
}
