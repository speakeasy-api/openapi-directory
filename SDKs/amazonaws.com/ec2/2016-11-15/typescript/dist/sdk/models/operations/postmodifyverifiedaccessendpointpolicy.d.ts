import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVerifiedAccessEndpointPolicyActionEnum {
    ModifyVerifiedAccessEndpointPolicy = "ModifyVerifiedAccessEndpointPolicy"
}
export declare enum POSTModifyVerifiedAccessEndpointPolicyVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVerifiedAccessEndpointPolicyRequest extends SpeakeasyBase {
    action: POSTModifyVerifiedAccessEndpointPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVerifiedAccessEndpointPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVerifiedAccessEndpointPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
