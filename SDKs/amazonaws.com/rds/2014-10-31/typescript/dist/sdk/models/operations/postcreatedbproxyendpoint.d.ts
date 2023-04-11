import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDBProxyEndpointActionEnum {
    CreateDBProxyEndpoint = "CreateDBProxyEndpoint"
}
export declare enum POSTCreateDBProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTCreateDBProxyEndpointRequest extends SpeakeasyBase {
    action: POSTCreateDBProxyEndpointActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDBProxyEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDBProxyEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
