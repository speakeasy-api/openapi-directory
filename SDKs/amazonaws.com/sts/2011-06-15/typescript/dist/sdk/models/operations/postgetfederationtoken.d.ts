import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetFederationTokenActionEnum {
    GetFederationToken = "GetFederationToken"
}
export declare enum POSTGetFederationTokenVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class POSTGetFederationTokenRequest extends SpeakeasyBase {
    action: POSTGetFederationTokenActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetFederationTokenVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetFederationTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
