import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteLoadBalancerPolicyActionEnum {
    DeleteLoadBalancerPolicy = "DeleteLoadBalancerPolicy"
}
export declare enum GETDeleteLoadBalancerPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETDeleteLoadBalancerPolicyRequest extends SpeakeasyBase {
    action: GETDeleteLoadBalancerPolicyActionEnum;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    /**
     * The name of the policy.
     */
    policyName: string;
    version: GETDeleteLoadBalancerPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteLoadBalancerPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
