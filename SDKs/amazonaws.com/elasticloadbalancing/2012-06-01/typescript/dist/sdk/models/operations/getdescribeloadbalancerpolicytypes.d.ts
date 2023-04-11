import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeLoadBalancerPolicyTypesActionEnum {
    DescribeLoadBalancerPolicyTypes = "DescribeLoadBalancerPolicyTypes"
}
export declare enum GETDescribeLoadBalancerPolicyTypesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETDescribeLoadBalancerPolicyTypesRequest extends SpeakeasyBase {
    action: GETDescribeLoadBalancerPolicyTypesActionEnum;
    /**
     * The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.
     */
    policyTypeNames?: string[];
    version: GETDescribeLoadBalancerPolicyTypesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeLoadBalancerPolicyTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
