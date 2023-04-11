import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAttachGroupPolicyActionEnum {
    AttachGroupPolicy = "AttachGroupPolicy"
}
export declare enum POSTAttachGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTAttachGroupPolicyRequest extends SpeakeasyBase {
    action: POSTAttachGroupPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTAttachGroupPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAttachGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
