import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTResetServiceSpecificCredentialActionEnum {
    ResetServiceSpecificCredential = "ResetServiceSpecificCredential"
}
export declare enum POSTResetServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTResetServiceSpecificCredentialRequest extends SpeakeasyBase {
    action: POSTResetServiceSpecificCredentialActionEnum;
    requestBody?: Uint8Array;
    version: POSTResetServiceSpecificCredentialVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTResetServiceSpecificCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
