import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListSAMLProvidersActionEnum {
    ListSAMLProviders = "ListSAMLProviders"
}
export declare enum GETListSAMLProvidersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETListSAMLProvidersRequest extends SpeakeasyBase {
    action: GETListSAMLProvidersActionEnum;
    version: GETListSAMLProvidersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListSAMLProvidersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
