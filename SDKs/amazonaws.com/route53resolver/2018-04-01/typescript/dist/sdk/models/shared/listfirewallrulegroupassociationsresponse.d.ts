import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroupAssociation } from "./firewallrulegroupassociation";
/**
 * Success
 */
export declare class ListFirewallRuleGroupAssociationsResponse extends SpeakeasyBase {
    firewallRuleGroupAssociations?: FirewallRuleGroupAssociation[];
    nextToken?: string;
}
