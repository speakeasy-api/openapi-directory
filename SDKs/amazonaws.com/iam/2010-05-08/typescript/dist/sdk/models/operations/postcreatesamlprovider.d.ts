import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateSAMLProviderActionEnum {
    CreateSAMLProvider = "CreateSAMLProvider"
}
export declare enum POSTCreateSAMLProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTCreateSAMLProviderRequest extends SpeakeasyBase {
    action: POSTCreateSAMLProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateSAMLProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateSAMLProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
