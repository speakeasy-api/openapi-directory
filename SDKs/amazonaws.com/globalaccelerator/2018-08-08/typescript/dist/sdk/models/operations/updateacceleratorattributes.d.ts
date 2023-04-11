import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateAcceleratorAttributes = "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes"
}
export declare class UpdateAcceleratorAttributesRequest extends SpeakeasyBase {
    updateAcceleratorAttributesRequest: shared.UpdateAcceleratorAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAcceleratorAttributesXAmzTargetEnum;
}
export declare class UpdateAcceleratorAttributesResponse extends SpeakeasyBase {
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
    updateAcceleratorAttributesResponse?: shared.UpdateAcceleratorAttributesResponse;
}
