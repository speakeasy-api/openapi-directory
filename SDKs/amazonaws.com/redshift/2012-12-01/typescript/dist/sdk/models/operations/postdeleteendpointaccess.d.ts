import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteEndpointAccessActionEnum {
    DeleteEndpointAccess = "DeleteEndpointAccess"
}
export declare enum POSTDeleteEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTDeleteEndpointAccessRequest extends SpeakeasyBase {
    action: POSTDeleteEndpointAccessActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteEndpointAccessVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
