import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateClientVpnEndpointActionEnum {
    CreateClientVpnEndpoint = "CreateClientVpnEndpoint"
}
export declare enum POSTCreateClientVpnEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateClientVpnEndpointRequest extends SpeakeasyBase {
    action: POSTCreateClientVpnEndpointActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateClientVpnEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateClientVpnEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
