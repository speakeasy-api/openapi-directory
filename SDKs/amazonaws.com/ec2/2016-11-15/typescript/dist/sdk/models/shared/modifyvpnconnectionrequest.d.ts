import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyVpnConnectionRequest extends SpeakeasyBase {
    customerGatewayId?: string;
    dryRun?: boolean;
    transitGatewayId?: string;
    vpnConnectionId: string;
    vpnGatewayId?: string;
}
