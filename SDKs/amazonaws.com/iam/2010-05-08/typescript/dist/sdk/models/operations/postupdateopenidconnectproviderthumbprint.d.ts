import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateOpenIDConnectProviderThumbprintActionEnum {
    UpdateOpenIDConnectProviderThumbprint = "UpdateOpenIDConnectProviderThumbprint"
}
export declare enum POSTUpdateOpenIDConnectProviderThumbprintVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUpdateOpenIDConnectProviderThumbprintRequest extends SpeakeasyBase {
    action: POSTUpdateOpenIDConnectProviderThumbprintActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateOpenIDConnectProviderThumbprintVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateOpenIDConnectProviderThumbprintResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
