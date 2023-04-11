import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreatePolicyVersionActionEnum {
    CreatePolicyVersion = "CreatePolicyVersion"
}
export declare enum POSTCreatePolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTCreatePolicyVersionRequest extends SpeakeasyBase {
    action: POSTCreatePolicyVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreatePolicyVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreatePolicyVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
