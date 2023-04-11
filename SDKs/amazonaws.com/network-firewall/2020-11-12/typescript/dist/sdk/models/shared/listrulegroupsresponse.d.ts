import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupMetadata } from "./rulegroupmetadata";
/**
 * Success
 */
export declare class ListRuleGroupsResponse extends SpeakeasyBase {
    nextToken?: string;
    ruleGroups?: RuleGroupMetadata[];
}
