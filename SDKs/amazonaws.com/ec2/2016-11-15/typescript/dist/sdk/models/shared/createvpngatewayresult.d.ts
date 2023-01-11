import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the virtual private gateway.
**/
export declare class CreateVpnGatewayResultVpnGateway extends SpeakeasyBase {
    amazonSideAsn?: Record<string, any>;
    availabilityZone?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    type?: Record<string, any>;
    vpcAttachments?: Record<string, any>;
    vpnGatewayId?: Record<string, any>;
}
/**
 * Contains the output of CreateVpnGateway.
**/
export declare class CreateVpnGatewayResult extends SpeakeasyBase {
    vpnGateway?: CreateVpnGatewayResultVpnGateway;
}
