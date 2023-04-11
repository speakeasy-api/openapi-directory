import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetPolicyVersionActionEnum {
    GetPolicyVersion = "GetPolicyVersion"
}
export declare enum POSTGetPolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetPolicyVersionRequest extends SpeakeasyBase {
    action: POSTGetPolicyVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetPolicyVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetPolicyVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
