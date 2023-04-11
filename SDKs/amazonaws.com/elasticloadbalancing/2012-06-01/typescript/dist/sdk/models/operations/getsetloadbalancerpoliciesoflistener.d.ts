import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetLoadBalancerPoliciesOfListenerActionEnum {
    SetLoadBalancerPoliciesOfListener = "SetLoadBalancerPoliciesOfListener"
}
export declare enum GETSetLoadBalancerPoliciesOfListenerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETSetLoadBalancerPoliciesOfListenerRequest extends SpeakeasyBase {
    action: GETSetLoadBalancerPoliciesOfListenerActionEnum;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    /**
     * The external port of the load balancer.
     */
    loadBalancerPort: number;
    /**
     * The names of the policies. This list must include all policies to be enabled. If you omit a policy that is currently enabled, it is disabled. If the list is empty, all current policies are disabled.
     */
    policyNames: string[];
    version: GETSetLoadBalancerPoliciesOfListenerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetLoadBalancerPoliciesOfListenerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
