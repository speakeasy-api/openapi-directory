import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAuthorizeEndpointAccessActionEnum {
    AuthorizeEndpointAccess = "AuthorizeEndpointAccess"
}
export declare enum POSTAuthorizeEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTAuthorizeEndpointAccessRequest extends SpeakeasyBase {
    action: POSTAuthorizeEndpointAccessActionEnum;
    requestBody?: Uint8Array;
    version: POSTAuthorizeEndpointAccessVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAuthorizeEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
