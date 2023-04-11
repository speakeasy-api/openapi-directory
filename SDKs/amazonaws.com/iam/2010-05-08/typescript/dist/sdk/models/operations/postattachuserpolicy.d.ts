import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAttachUserPolicyActionEnum {
    AttachUserPolicy = "AttachUserPolicy"
}
export declare enum POSTAttachUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTAttachUserPolicyRequest extends SpeakeasyBase {
    action: POSTAttachUserPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTAttachUserPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAttachUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
