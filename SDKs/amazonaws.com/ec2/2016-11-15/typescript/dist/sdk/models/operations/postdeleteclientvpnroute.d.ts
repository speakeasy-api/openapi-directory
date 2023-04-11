import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteClientVpnRouteActionEnum {
    DeleteClientVpnRoute = "DeleteClientVpnRoute"
}
export declare enum POSTDeleteClientVpnRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteClientVpnRouteRequest extends SpeakeasyBase {
    action: POSTDeleteClientVpnRouteActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteClientVpnRouteVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteClientVpnRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
