import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeLoadBalancerPoliciesActionEnum {
    DescribeLoadBalancerPolicies = "DescribeLoadBalancerPolicies"
}
export declare enum POSTDescribeLoadBalancerPoliciesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTDescribeLoadBalancerPoliciesRequest extends SpeakeasyBase {
    action: POSTDescribeLoadBalancerPoliciesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeLoadBalancerPoliciesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeLoadBalancerPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
