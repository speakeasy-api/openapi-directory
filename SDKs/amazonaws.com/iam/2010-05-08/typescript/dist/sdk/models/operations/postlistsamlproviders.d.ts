import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListSAMLProvidersActionEnum {
    ListSAMLProviders = "ListSAMLProviders"
}
export declare enum POSTListSAMLProvidersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListSAMLProvidersRequest extends SpeakeasyBase {
    action: POSTListSAMLProvidersActionEnum;
    requestBody?: Uint8Array;
    version: POSTListSAMLProvidersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListSAMLProvidersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
