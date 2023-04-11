import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteGroupPolicyActionEnum {
    DeleteGroupPolicy = "DeleteGroupPolicy"
}
export declare enum POSTDeleteGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTDeleteGroupPolicyRequest extends SpeakeasyBase {
    action: POSTDeleteGroupPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteGroupPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
