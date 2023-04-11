import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListOpenIDConnectProvidersActionEnum {
    ListOpenIDConnectProviders = "ListOpenIDConnectProviders"
}
export declare enum POSTListOpenIDConnectProvidersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListOpenIDConnectProvidersRequest extends SpeakeasyBase {
    action: POSTListOpenIDConnectProvidersActionEnum;
    requestBody?: Uint8Array;
    version: POSTListOpenIDConnectProvidersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListOpenIDConnectProvidersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
