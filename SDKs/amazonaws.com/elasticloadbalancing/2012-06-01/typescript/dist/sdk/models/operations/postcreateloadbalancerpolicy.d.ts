import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateLoadBalancerPolicyActionEnum {
    CreateLoadBalancerPolicy = "CreateLoadBalancerPolicy"
}
export declare enum POSTCreateLoadBalancerPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTCreateLoadBalancerPolicyRequest extends SpeakeasyBase {
    action: POSTCreateLoadBalancerPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateLoadBalancerPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateLoadBalancerPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
