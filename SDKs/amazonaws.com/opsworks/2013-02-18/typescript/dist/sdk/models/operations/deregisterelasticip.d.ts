import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterElasticIpXAmzTargetEnum {
    OpsWorks20130218DeregisterElasticIp = "OpsWorks_20130218.DeregisterElasticIp"
}
export declare class DeregisterElasticIpRequest extends SpeakeasyBase {
    deregisterElasticIpRequest: shared.DeregisterElasticIpRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterElasticIpXAmzTargetEnum;
}
export declare class DeregisterElasticIpResponse extends SpeakeasyBase {
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
