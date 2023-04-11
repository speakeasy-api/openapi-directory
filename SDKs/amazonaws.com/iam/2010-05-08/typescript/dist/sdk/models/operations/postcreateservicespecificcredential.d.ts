import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateServiceSpecificCredentialActionEnum {
    CreateServiceSpecificCredential = "CreateServiceSpecificCredential"
}
export declare enum POSTCreateServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTCreateServiceSpecificCredentialRequest extends SpeakeasyBase {
    action: POSTCreateServiceSpecificCredentialActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateServiceSpecificCredentialVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateServiceSpecificCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
