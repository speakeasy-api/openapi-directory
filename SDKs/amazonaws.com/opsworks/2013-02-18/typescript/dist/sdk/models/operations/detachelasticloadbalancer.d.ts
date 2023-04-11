import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetachElasticLoadBalancerXAmzTargetEnum {
    OpsWorks20130218DetachElasticLoadBalancer = "OpsWorks_20130218.DetachElasticLoadBalancer"
}
export declare class DetachElasticLoadBalancerRequest extends SpeakeasyBase {
    detachElasticLoadBalancerRequest: shared.DetachElasticLoadBalancerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachElasticLoadBalancerXAmzTargetEnum;
}
export declare class DetachElasticLoadBalancerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
