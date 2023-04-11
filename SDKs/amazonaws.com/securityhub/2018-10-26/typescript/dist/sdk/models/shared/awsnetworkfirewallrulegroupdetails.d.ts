import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupDetails } from "./rulegroupdetails";
/**
 * <p>Details about an Network Firewall rule group. Rule groups are used to inspect and control network traffic. Stateless rule groups apply to individual packets. Stateful rule groups apply to packets in the context of their traffic flow.</p> <p>Rule groups are referenced in firewall policies. </p>
 */
export declare class AwsNetworkFirewallRuleGroupDetails extends SpeakeasyBase {
    capacity?: number;
    description?: string;
    ruleGroup?: RuleGroupDetails;
    ruleGroupArn?: string;
    ruleGroupId?: string;
    ruleGroupName?: string;
    type?: string;
}
