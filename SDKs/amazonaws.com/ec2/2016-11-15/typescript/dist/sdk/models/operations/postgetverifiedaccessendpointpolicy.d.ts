import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetVerifiedAccessEndpointPolicyActionEnum {
    GetVerifiedAccessEndpointPolicy = "GetVerifiedAccessEndpointPolicy"
}
export declare enum POSTGetVerifiedAccessEndpointPolicyVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetVerifiedAccessEndpointPolicyRequest extends SpeakeasyBase {
    action: POSTGetVerifiedAccessEndpointPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetVerifiedAccessEndpointPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetVerifiedAccessEndpointPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
