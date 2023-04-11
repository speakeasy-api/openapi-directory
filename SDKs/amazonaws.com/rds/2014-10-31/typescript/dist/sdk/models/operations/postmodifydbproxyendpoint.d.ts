import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyDBProxyEndpointActionEnum {
    ModifyDBProxyEndpoint = "ModifyDBProxyEndpoint"
}
export declare enum POSTModifyDBProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTModifyDBProxyEndpointRequest extends SpeakeasyBase {
    action: POSTModifyDBProxyEndpointActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyDBProxyEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyDBProxyEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
