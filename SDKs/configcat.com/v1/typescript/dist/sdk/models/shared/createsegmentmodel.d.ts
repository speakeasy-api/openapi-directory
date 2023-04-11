import { SpeakeasyBase } from "../../../internal/utils";
import { RolloutRuleComparatorEnum } from "./rolloutrulecomparatorenum";
export declare class CreateSegmentModel extends SpeakeasyBase {
    comparator: RolloutRuleComparatorEnum;
    comparisonAttribute: string;
    comparisonValue: string;
    description?: string;
    name: string;
}
