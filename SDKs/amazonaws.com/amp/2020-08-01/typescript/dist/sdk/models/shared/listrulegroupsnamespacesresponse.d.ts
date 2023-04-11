import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupsNamespaceSummary } from "./rulegroupsnamespacesummary";
/**
 * Represents the output of a ListRuleGroupsNamespaces operation.
 */
export declare class ListRuleGroupsNamespacesResponse extends SpeakeasyBase {
    nextToken?: string;
    ruleGroupsNamespaces: RuleGroupsNamespaceSummary[];
}
