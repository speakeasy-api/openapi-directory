import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeSSLPoliciesActionEnum {
    DescribeSSLPolicies = "DescribeSSLPolicies"
}
/**
 *  The type of load balancer. The default lists the SSL policies for all load balancers.
 */
export declare enum GETDescribeSSLPoliciesLoadBalancerTypeEnum {
    Application = "application",
    Network = "network",
    Gateway = "gateway"
}
export declare enum GETDescribeSSLPoliciesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDescribeSSLPoliciesRequest extends SpeakeasyBase {
    action: GETDescribeSSLPoliciesActionEnum;
    /**
     *  The type of load balancer. The default lists the SSL policies for all load balancers.
     */
    loadBalancerType?: GETDescribeSSLPoliciesLoadBalancerTypeEnum;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    marker?: string;
    /**
     * The names of the policies.
     */
    names?: string[];
    /**
     * The maximum number of results to return with this call.
     */
    pageSize?: number;
    version: GETDescribeSSLPoliciesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeSSLPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
