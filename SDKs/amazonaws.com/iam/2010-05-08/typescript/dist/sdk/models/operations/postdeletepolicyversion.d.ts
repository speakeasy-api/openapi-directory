import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeletePolicyVersionActionEnum {
    DeletePolicyVersion = "DeletePolicyVersion"
}
export declare enum POSTDeletePolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTDeletePolicyVersionRequest extends SpeakeasyBase {
    action: POSTDeletePolicyVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeletePolicyVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeletePolicyVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
