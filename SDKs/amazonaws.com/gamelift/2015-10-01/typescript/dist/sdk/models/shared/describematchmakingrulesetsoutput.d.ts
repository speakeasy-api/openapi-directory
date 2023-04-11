import { SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingRuleSet } from "./matchmakingruleset";
/**
 * Success
 */
export declare class DescribeMatchmakingRuleSetsOutput extends SpeakeasyBase {
    nextToken?: string;
    ruleSets: MatchmakingRuleSet[];
}
