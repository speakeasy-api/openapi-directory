import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the Client VPN endpoint.
**/
export declare class CreateClientVpnEndpointResultStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
export declare class CreateClientVpnEndpointResult extends SpeakeasyBase {
    clientVpnEndpointId?: Record<string, any>;
    dnsName?: Record<string, any>;
    status?: CreateClientVpnEndpointResultStatus;
}
