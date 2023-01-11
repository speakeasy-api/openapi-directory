import { SpeakeasyBase } from "../../../internal/utils";
import { RuleTypeEnum } from "./ruletypeenum";
export declare class Rule extends SpeakeasyBase {
    parameters?: Record<string, string>;
    type?: RuleTypeEnum;
}
