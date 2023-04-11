import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListSAMLProviderTagsActionEnum {
    ListSAMLProviderTags = "ListSAMLProviderTags"
}
export declare enum POSTListSAMLProviderTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListSAMLProviderTagsRequest extends SpeakeasyBase {
    action: POSTListSAMLProviderTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListSAMLProviderTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListSAMLProviderTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
