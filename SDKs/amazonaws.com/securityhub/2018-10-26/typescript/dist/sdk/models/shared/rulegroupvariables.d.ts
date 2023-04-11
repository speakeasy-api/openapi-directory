import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupVariablesIpSetsDetails } from "./rulegroupvariablesipsetsdetails";
import { RuleGroupVariablesPortSetsDetails } from "./rulegroupvariablesportsetsdetails";
/**
 * Additional settings to use in the specified rules.
 */
export declare class RuleGroupVariables extends SpeakeasyBase {
    ipSets?: RuleGroupVariablesIpSetsDetails;
    portSets?: RuleGroupVariablesPortSetsDetails;
}
