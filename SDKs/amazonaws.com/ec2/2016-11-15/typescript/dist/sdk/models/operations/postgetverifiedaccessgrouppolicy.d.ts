import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetVerifiedAccessGroupPolicyActionEnum {
    GetVerifiedAccessGroupPolicy = "GetVerifiedAccessGroupPolicy"
}
export declare enum POSTGetVerifiedAccessGroupPolicyVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetVerifiedAccessGroupPolicyRequest extends SpeakeasyBase {
    action: POSTGetVerifiedAccessGroupPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetVerifiedAccessGroupPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetVerifiedAccessGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
