import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutUserPolicyActionEnum {
    PutUserPolicy = "PutUserPolicy"
}
export declare enum POSTPutUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTPutUserPolicyRequest extends SpeakeasyBase {
    action: POSTPutUserPolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTPutUserPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPutUserPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
