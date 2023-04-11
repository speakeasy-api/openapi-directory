import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateElasticIpXAmzTargetEnum {
    OpsWorks20130218UpdateElasticIp = "OpsWorks_20130218.UpdateElasticIp"
}
export declare class UpdateElasticIpRequest extends SpeakeasyBase {
    updateElasticIpRequest: shared.UpdateElasticIpRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateElasticIpXAmzTargetEnum;
}
export declare class UpdateElasticIpResponse extends SpeakeasyBase {
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
