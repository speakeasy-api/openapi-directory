import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterElasticIpXAmzTargetEnum {
    OpsWorks20130218RegisterElasticIp = "OpsWorks_20130218.RegisterElasticIp"
}
export declare class RegisterElasticIpRequest extends SpeakeasyBase {
    registerElasticIpRequest: shared.RegisterElasticIpRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterElasticIpXAmzTargetEnum;
}
export declare class RegisterElasticIpResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    registerElasticIpResult?: shared.RegisterElasticIpResult;
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
