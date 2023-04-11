import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTTagOpenIDConnectProviderActionEnum {
    TagOpenIDConnectProvider = "TagOpenIDConnectProvider"
}
export declare enum POSTTagOpenIDConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTTagOpenIDConnectProviderRequest extends SpeakeasyBase {
    action: POSTTagOpenIDConnectProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTTagOpenIDConnectProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTTagOpenIDConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
