import { SpeakeasyBase } from "../../../internal/utils";
import { ModifyVpnTunnelOptionsSpecification } from "./modifyvpntunneloptionsspecification";
export declare class ModifyVpnTunnelOptionsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    tunnelOptions: ModifyVpnTunnelOptionsSpecification;
    vpnConnectionId: string;
    vpnTunnelOutsideIpAddress: string;
}
