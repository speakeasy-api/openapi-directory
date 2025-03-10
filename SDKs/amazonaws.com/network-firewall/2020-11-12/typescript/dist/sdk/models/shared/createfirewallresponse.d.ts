import { SpeakeasyBase } from "../../../internal/utils";
import { Firewall } from "./firewall";
import { FirewallStatus } from "./firewallstatus";
/**
 * Success
 */
export declare class CreateFirewallResponse extends SpeakeasyBase {
    firewall?: Firewall;
    firewallStatus?: FirewallStatus;
}
