import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUntagSAMLProviderActionEnum {
    UntagSAMLProvider = "UntagSAMLProvider"
}
export declare enum POSTUntagSAMLProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUntagSAMLProviderRequest extends SpeakeasyBase {
    action: POSTUntagSAMLProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTUntagSAMLProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUntagSAMLProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
