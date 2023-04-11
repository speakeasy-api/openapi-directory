import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { RuleCondition } from "./rulecondition";
export declare class ModifyRuleInput extends SpeakeasyBase {
    actions?: Action[];
    conditions?: RuleCondition[];
    ruleArn: string;
}
