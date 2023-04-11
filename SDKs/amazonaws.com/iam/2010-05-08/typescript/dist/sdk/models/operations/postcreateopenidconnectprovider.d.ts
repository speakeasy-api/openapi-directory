import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateOpenIDConnectProviderActionEnum {
    CreateOpenIDConnectProvider = "CreateOpenIDConnectProvider"
}
export declare enum POSTCreateOpenIDConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTCreateOpenIDConnectProviderRequest extends SpeakeasyBase {
    action: POSTCreateOpenIDConnectProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateOpenIDConnectProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateOpenIDConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
