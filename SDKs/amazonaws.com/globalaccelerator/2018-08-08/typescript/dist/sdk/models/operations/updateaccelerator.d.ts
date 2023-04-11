import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateAccelerator = "GlobalAccelerator_V20180706.UpdateAccelerator"
}
export declare class UpdateAcceleratorRequest extends SpeakeasyBase {
    updateAcceleratorRequest: shared.UpdateAcceleratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAcceleratorXAmzTargetEnum;
}
export declare class UpdateAcceleratorResponse extends SpeakeasyBase {
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
    updateAcceleratorResponse?: shared.UpdateAcceleratorResponse;
}
