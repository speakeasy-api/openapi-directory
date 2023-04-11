import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAddClientIDToOpenIDConnectProviderActionEnum {
    AddClientIDToOpenIDConnectProvider = "AddClientIDToOpenIDConnectProvider"
}
export declare enum POSTAddClientIDToOpenIDConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTAddClientIDToOpenIDConnectProviderRequest extends SpeakeasyBase {
    action: POSTAddClientIDToOpenIDConnectProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTAddClientIDToOpenIDConnectProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAddClientIDToOpenIDConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
