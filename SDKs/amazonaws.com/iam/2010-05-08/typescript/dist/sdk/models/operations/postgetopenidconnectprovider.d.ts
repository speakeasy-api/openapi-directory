import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetOpenIDConnectProviderActionEnum {
    GetOpenIDConnectProvider = "GetOpenIDConnectProvider"
}
export declare enum POSTGetOpenIDConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetOpenIDConnectProviderRequest extends SpeakeasyBase {
    action: POSTGetOpenIDConnectProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetOpenIDConnectProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetOpenIDConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
