import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVerifiedAccessGroupPolicyActionEnum {
    ModifyVerifiedAccessGroupPolicy = "ModifyVerifiedAccessGroupPolicy"
}
export declare enum POSTModifyVerifiedAccessGroupPolicyVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVerifiedAccessGroupPolicyRequest extends SpeakeasyBase {
    action: POSTModifyVerifiedAccessGroupPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVerifiedAccessGroupPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVerifiedAccessGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
