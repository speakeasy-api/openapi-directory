import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRemoveClientIDFromOpenIDConnectProviderActionEnum {
    RemoveClientIDFromOpenIDConnectProvider = "RemoveClientIDFromOpenIDConnectProvider"
}
export declare enum POSTRemoveClientIDFromOpenIDConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTRemoveClientIDFromOpenIDConnectProviderRequest extends SpeakeasyBase {
    action: POSTRemoveClientIDFromOpenIDConnectProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTRemoveClientIDFromOpenIDConnectProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRemoveClientIDFromOpenIDConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
