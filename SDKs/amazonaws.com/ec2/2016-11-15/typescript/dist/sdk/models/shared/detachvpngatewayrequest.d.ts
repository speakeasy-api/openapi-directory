import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DetachVpnGateway.
 */
export declare class DetachVpnGatewayRequest extends SpeakeasyBase {
    dryRun?: boolean;
    vpcId: string;
    vpnGatewayId: string;
}
