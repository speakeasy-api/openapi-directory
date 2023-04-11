import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallConfig } from "./firewallconfig";
/**
 * Success
 */
export declare class ListFirewallConfigsResponse extends SpeakeasyBase {
    firewallConfigs?: FirewallConfig[];
    nextToken?: string;
}
