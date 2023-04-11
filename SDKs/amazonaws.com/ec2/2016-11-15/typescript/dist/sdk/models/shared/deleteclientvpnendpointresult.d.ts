import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The state of the Client VPN endpoint. Possible states include:</p> <ul> <li> <p> <code>pending-associate</code> - The Client VPN endpoint has been created but no target networks have been associated. The Client VPN endpoint cannot accept connections.</p> </li> <li> <p> <code>available</code> - The Client VPN endpoint has been created and a target network has been associated. The Client VPN endpoint can accept connections.</p> </li> <li> <p> <code>deleting</code> - The Client VPN endpoint is being deleted. The Client VPN endpoint cannot accept connections.</p> </li> <li> <p> <code>deleted</code> - The Client VPN endpoint has been deleted. The Client VPN endpoint cannot accept connections.</p> </li> </ul>
 */
export declare enum DeleteClientVpnEndpointResultStatusCodeEnum {
    PendingAssociate = "pending-associate",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The current state of the Client VPN endpoint.
 */
export declare class DeleteClientVpnEndpointResultStatus extends SpeakeasyBase {
    code?: DeleteClientVpnEndpointResultStatusCodeEnum;
    message?: string;
}
/**
 * Success
 */
export declare class DeleteClientVpnEndpointResult extends SpeakeasyBase {
    status?: DeleteClientVpnEndpointResultStatus;
}
