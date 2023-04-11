import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetPolicyActionEnum {
    GetPolicy = "GetPolicy"
}
export declare enum POSTGetPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetPolicyRequest extends SpeakeasyBase {
    action: POSTGetPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
