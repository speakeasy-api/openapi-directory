import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyLoadBalancerAttributesActionEnum {
    ModifyLoadBalancerAttributes = "ModifyLoadBalancerAttributes"
}
export declare enum POSTModifyLoadBalancerAttributesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTModifyLoadBalancerAttributesRequest extends SpeakeasyBase {
    action: POSTModifyLoadBalancerAttributesActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyLoadBalancerAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyLoadBalancerAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
