import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetUserPolicyActionEnum {
    GetUserPolicy = "GetUserPolicy"
}
export declare enum POSTGetUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetUserPolicyRequest extends SpeakeasyBase {
    action: POSTGetUserPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetUserPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
