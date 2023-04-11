import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterInstanceXAmzTargetEnum {
    Route53AutoNamingV20170314RegisterInstance = "Route53AutoNaming_v20170314.RegisterInstance"
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
     * DuplicateRequest
     */
    duplicateRequest?: any;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * Success
     */
    registerInstanceResponse?: shared.RegisterInstanceResponse;
    /**
     * ServiceNotFound
     */
    serviceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
