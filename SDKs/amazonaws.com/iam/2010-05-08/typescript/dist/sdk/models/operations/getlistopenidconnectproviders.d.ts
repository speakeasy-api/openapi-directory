import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListOpenIDConnectProvidersActionEnum {
    ListOpenIDConnectProviders = "ListOpenIDConnectProviders"
}
export declare enum GETListOpenIDConnectProvidersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETListOpenIDConnectProvidersRequest extends SpeakeasyBase {
    action: GETListOpenIDConnectProvidersActionEnum;
    version: GETListOpenIDConnectProvidersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListOpenIDConnectProvidersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
