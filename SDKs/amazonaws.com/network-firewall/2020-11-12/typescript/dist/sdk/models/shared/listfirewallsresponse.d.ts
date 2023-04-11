import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallMetadata } from "./firewallmetadata";
/**
 * Success
 */
export declare class ListFirewallsResponse extends SpeakeasyBase {
    firewalls?: FirewallMetadata[];
    nextToken?: string;
}
