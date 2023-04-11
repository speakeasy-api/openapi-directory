import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateVpnConnectionRouteActionEnum {
    CreateVpnConnectionRoute = "CreateVpnConnectionRoute"
}
export declare enum GETCreateVpnConnectionRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCreateVpnConnectionRouteRequest extends SpeakeasyBase {
    action: GETCreateVpnConnectionRouteActionEnum;
    /**
     * The CIDR block associated with the local subnet of the customer network.
     */
    destinationCidrBlock: string;
    version: GETCreateVpnConnectionRouteVersionEnum;
    /**
     * The ID of the VPN connection.
     */
    vpnConnectionId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateVpnConnectionRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
