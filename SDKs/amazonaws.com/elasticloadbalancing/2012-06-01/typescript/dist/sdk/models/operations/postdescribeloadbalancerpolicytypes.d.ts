import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeLoadBalancerPolicyTypesActionEnum {
    DescribeLoadBalancerPolicyTypes = "DescribeLoadBalancerPolicyTypes"
}
export declare enum POSTDescribeLoadBalancerPolicyTypesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTDescribeLoadBalancerPolicyTypesRequest extends SpeakeasyBase {
    action: POSTDescribeLoadBalancerPolicyTypesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeLoadBalancerPolicyTypesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeLoadBalancerPolicyTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
