import { SpeakeasyBase } from "../../../internal/utils";
import { RuleTypeEnum } from "./ruletypeenum";
/**
 * Information about a rule.
 */
export declare class Rule extends SpeakeasyBase {
    config: string;
    type?: RuleTypeEnum;
}
