import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeletePolicyActionEnum {
    DeletePolicy = "DeletePolicy"
}
export declare enum POSTDeletePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTDeletePolicyRequest extends SpeakeasyBase {
    action: POSTDeletePolicyActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeletePolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeletePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
