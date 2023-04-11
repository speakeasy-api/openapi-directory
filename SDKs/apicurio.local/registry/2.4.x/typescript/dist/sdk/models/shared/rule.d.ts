import { SpeakeasyBase } from "../../../internal/utils";
import { RuleTypeEnum } from "./ruletypeenum";
/**
 * The global rule's configuration.
 */
export declare class Rule extends SpeakeasyBase {
    config: string;
    type?: RuleTypeEnum;
}
