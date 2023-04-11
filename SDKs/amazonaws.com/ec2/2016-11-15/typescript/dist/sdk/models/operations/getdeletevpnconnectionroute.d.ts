import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteVpnConnectionRouteActionEnum {
    DeleteVpnConnectionRoute = "DeleteVpnConnectionRoute"
}
export declare enum GETDeleteVpnConnectionRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeleteVpnConnectionRouteRequest extends SpeakeasyBase {
    action: GETDeleteVpnConnectionRouteActionEnum;
    /**
     * The CIDR block associated with the local subnet of the customer network.
     */
    destinationCidrBlock: string;
    version: GETDeleteVpnConnectionRouteVersionEnum;
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
export declare class GETDeleteVpnConnectionRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
