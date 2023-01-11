import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the Client VPN endpoint.
**/
export declare class DeleteClientVpnEndpointResultStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
export declare class DeleteClientVpnEndpointResult extends SpeakeasyBase {
    status?: DeleteClientVpnEndpointResultStatus;
}
