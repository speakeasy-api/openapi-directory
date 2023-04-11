import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class PutInsightRuleInput extends SpeakeasyBase {
    ruleDefinition: string;
    ruleName: string;
    ruleState?: string;
    tags?: Tag[];
}
