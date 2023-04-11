import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for AttachVpnGateway.
 */
export declare class AttachVpnGatewayRequest extends SpeakeasyBase {
    dryRun?: boolean;
    vpcId: string;
    vpnGatewayId: string;
}
