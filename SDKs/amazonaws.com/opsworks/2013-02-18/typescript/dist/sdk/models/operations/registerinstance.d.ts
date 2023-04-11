import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterInstanceXAmzTargetEnum {
    OpsWorks20130218RegisterInstance = "OpsWorks_20130218.RegisterInstance"
}
export declare class RegisterInstanceRequest extends SpeakeasyBase {
    registerInstanceRequest: shared.RegisterInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterInstanceXAmzTargetEnum;
}
export declare class RegisterInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    registerInstanceResult?: shared.RegisterInstanceResult;
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
