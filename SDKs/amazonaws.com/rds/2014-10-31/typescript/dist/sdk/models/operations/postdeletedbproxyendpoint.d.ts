import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDBProxyEndpointActionEnum {
    DeleteDBProxyEndpoint = "DeleteDBProxyEndpoint"
}
export declare enum POSTDeleteDBProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDeleteDBProxyEndpointRequest extends SpeakeasyBase {
    action: POSTDeleteDBProxyEndpointActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDBProxyEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDBProxyEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
