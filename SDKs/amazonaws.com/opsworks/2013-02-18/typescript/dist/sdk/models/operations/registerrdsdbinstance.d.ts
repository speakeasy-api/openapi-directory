import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterRdsDbInstanceXAmzTargetEnum {
    OpsWorks20130218RegisterRdsDbInstance = "OpsWorks_20130218.RegisterRdsDbInstance"
}
export declare class RegisterRdsDbInstanceRequest extends SpeakeasyBase {
    registerRdsDbInstanceRequest: shared.RegisterRdsDbInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterRdsDbInstanceXAmzTargetEnum;
}
export declare class RegisterRdsDbInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
