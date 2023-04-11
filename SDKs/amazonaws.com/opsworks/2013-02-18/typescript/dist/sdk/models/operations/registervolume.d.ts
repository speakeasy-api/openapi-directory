import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterVolumeXAmzTargetEnum {
    OpsWorks20130218RegisterVolume = "OpsWorks_20130218.RegisterVolume"
}
export declare class RegisterVolumeRequest extends SpeakeasyBase {
    registerVolumeRequest: shared.RegisterVolumeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterVolumeXAmzTargetEnum;
}
export declare class RegisterVolumeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    registerVolumeResult?: shared.RegisterVolumeResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
