import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUntagOpenIDConnectProviderActionEnum {
    UntagOpenIDConnectProvider = "UntagOpenIDConnectProvider"
}
export declare enum POSTUntagOpenIDConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUntagOpenIDConnectProviderRequest extends SpeakeasyBase {
    action: POSTUntagOpenIDConnectProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTUntagOpenIDConnectProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUntagOpenIDConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
