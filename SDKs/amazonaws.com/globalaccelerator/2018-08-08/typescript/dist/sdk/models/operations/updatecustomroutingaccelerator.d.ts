import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateCustomRoutingAccelerator = "GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator"
}
export declare class UpdateCustomRoutingAcceleratorRequest extends SpeakeasyBase {
    updateCustomRoutingAcceleratorRequest: shared.UpdateCustomRoutingAcceleratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCustomRoutingAcceleratorXAmzTargetEnum;
}
export declare class UpdateCustomRoutingAcceleratorResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
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
    updateCustomRoutingAcceleratorResponse?: shared.UpdateCustomRoutingAcceleratorResponse;
}
