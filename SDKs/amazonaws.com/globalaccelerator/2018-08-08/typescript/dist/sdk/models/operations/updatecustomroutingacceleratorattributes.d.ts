import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributes = "GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes"
}
export declare class UpdateCustomRoutingAcceleratorAttributesRequest extends SpeakeasyBase {
    updateCustomRoutingAcceleratorAttributesRequest: shared.UpdateCustomRoutingAcceleratorAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum;
}
export declare class UpdateCustomRoutingAcceleratorAttributesResponse extends SpeakeasyBase {
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
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCustomRoutingAcceleratorAttributesResponse?: shared.UpdateCustomRoutingAcceleratorAttributesResponse;
}
