import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateEndpointAccessActionEnum {
    CreateEndpointAccess = "CreateEndpointAccess"
}
export declare enum POSTCreateEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTCreateEndpointAccessRequest extends SpeakeasyBase {
    action: POSTCreateEndpointAccessActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateEndpointAccessVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
