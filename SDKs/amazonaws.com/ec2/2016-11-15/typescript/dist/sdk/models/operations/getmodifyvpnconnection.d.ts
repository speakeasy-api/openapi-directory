import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyVpnConnectionActionEnum {
    ModifyVpnConnection = "ModifyVpnConnection"
}
export declare enum GETModifyVpnConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyVpnConnectionRequest extends SpeakeasyBase {
    action: GETModifyVpnConnectionActionEnum;
    /**
     * The ID of the customer gateway at your end of the VPN connection.
     */
    customerGatewayId?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the transit gateway.
     */
    transitGatewayId?: string;
    version: GETModifyVpnConnectionVersionEnum;
    /**
     * The ID of the VPN connection.
     */
    vpnConnectionId: string;
    /**
     * The ID of the virtual private gateway at the Amazon Web Services side of the VPN connection.
     */
    vpnGatewayId?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyVpnConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
