import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetStackPolicyActionEnum {
    GetStackPolicy = "GetStackPolicy"
}
export declare enum POSTGetStackPolicyVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTGetStackPolicyRequest extends SpeakeasyBase {
    action: POSTGetStackPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetStackPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetStackPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
