import { SpeakeasyBase } from "../../../internal/utils";
import { SubscribedRuleGroupSummary } from "./subscribedrulegroupsummary";
/**
 * Success
 */
export declare class ListSubscribedRuleGroupsResponse extends SpeakeasyBase {
    nextMarker?: string;
    ruleGroups?: SubscribedRuleGroupSummary[];
}
