import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteOpenIDConnectProviderActionEnum {
    DeleteOpenIDConnectProvider = "DeleteOpenIDConnectProvider"
}
export declare enum POSTDeleteOpenIDConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTDeleteOpenIDConnectProviderRequest extends SpeakeasyBase {
    action: POSTDeleteOpenIDConnectProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteOpenIDConnectProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteOpenIDConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
