import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAttachRolePolicyActionEnum {
    AttachRolePolicy = "AttachRolePolicy"
}
export declare enum POSTAttachRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTAttachRolePolicyRequest extends SpeakeasyBase {
    action: POSTAttachRolePolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTAttachRolePolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAttachRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
