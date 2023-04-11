import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { RuleCondition } from "./rulecondition";
import { Tag } from "./tag";
export declare class CreateRuleInput extends SpeakeasyBase {
    actions: Action[];
    conditions: RuleCondition[];
    listenerArn: string;
    priority: number;
    tags?: Tag[];
}
