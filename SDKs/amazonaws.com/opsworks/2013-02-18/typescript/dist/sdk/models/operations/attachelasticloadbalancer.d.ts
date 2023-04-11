import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AttachElasticLoadBalancerXAmzTargetEnum {
    OpsWorks20130218AttachElasticLoadBalancer = "OpsWorks_20130218.AttachElasticLoadBalancer"
}
export declare class AttachElasticLoadBalancerRequest extends SpeakeasyBase {
    attachElasticLoadBalancerRequest: shared.AttachElasticLoadBalancerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachElasticLoadBalancerXAmzTargetEnum;
}
export declare class AttachElasticLoadBalancerResponse extends SpeakeasyBase {
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
