import { SpeakeasyBase } from "../../../internal/utils";
import { ActivatedRule } from "./activatedrule";
/**
 * Success
 */
export declare class ListActivatedRulesInRuleGroupResponse extends SpeakeasyBase {
    activatedRules?: ActivatedRule[];
    nextMarker?: string;
}
