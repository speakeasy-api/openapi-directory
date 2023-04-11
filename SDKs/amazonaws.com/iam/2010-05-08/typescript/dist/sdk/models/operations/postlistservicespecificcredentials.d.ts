import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListServiceSpecificCredentialsActionEnum {
    ListServiceSpecificCredentials = "ListServiceSpecificCredentials"
}
export declare enum POSTListServiceSpecificCredentialsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListServiceSpecificCredentialsRequest extends SpeakeasyBase {
    action: POSTListServiceSpecificCredentialsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListServiceSpecificCredentialsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListServiceSpecificCredentialsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
