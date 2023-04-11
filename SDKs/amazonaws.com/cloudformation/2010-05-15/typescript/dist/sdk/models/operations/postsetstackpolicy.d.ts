import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetStackPolicyActionEnum {
    SetStackPolicy = "SetStackPolicy"
}
export declare enum POSTSetStackPolicyVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTSetStackPolicyRequest extends SpeakeasyBase {
    action: POSTSetStackPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetStackPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetStackPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
