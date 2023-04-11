import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterDevicesXAmzTargetEnum {
    SageMakerRegisterDevices = "SageMaker.RegisterDevices"
}
export declare class RegisterDevicesRequest extends SpeakeasyBase {
    registerDevicesRequest: shared.RegisterDevicesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterDevicesXAmzTargetEnum;
}
export declare class RegisterDevicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
