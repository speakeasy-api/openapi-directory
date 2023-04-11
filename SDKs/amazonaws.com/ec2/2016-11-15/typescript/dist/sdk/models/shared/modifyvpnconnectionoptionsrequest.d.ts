import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyVpnConnectionOptionsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    localIpv4NetworkCidr?: string;
    localIpv6NetworkCidr?: string;
    remoteIpv4NetworkCidr?: string;
    remoteIpv6NetworkCidr?: string;
    vpnConnectionId: string;
}
