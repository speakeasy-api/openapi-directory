import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListOpenIDConnectProviderTagsActionEnum {
    ListOpenIDConnectProviderTags = "ListOpenIDConnectProviderTags"
}
export declare enum POSTListOpenIDConnectProviderTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListOpenIDConnectProviderTagsRequest extends SpeakeasyBase {
    action: POSTListOpenIDConnectProviderTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListOpenIDConnectProviderTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListOpenIDConnectProviderTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
