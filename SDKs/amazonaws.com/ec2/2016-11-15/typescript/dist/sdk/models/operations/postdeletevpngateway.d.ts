import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteVpnGatewayActionEnum {
    DeleteVpnGateway = "DeleteVpnGateway"
}
export declare enum POSTDeleteVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteVpnGatewayRequest extends SpeakeasyBase {
    action: POSTDeleteVpnGatewayActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteVpnGatewayVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteVpnGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
