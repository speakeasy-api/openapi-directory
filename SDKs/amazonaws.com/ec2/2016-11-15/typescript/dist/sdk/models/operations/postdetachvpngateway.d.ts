import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDetachVpnGatewayActionEnum {
    DetachVpnGateway = "DetachVpnGateway"
}
export declare enum POSTDetachVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDetachVpnGatewayRequest extends SpeakeasyBase {
    action: POSTDetachVpnGatewayActionEnum;
    requestBody?: Uint8Array;
    version: POSTDetachVpnGatewayVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDetachVpnGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
