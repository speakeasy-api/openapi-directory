import { SpeakeasyBase } from "../../../internal/utils";
import { CostCategorySplitChargeMethodEnum } from "./costcategorysplitchargemethodenum";
import { CostCategorySplitChargeRuleParameter } from "./costcategorysplitchargeruleparameter";
/**
 * Use the split charge rule to split the cost of one Cost Category value across several other target values.
 */
export declare class CostCategorySplitChargeRule extends SpeakeasyBase {
    method: CostCategorySplitChargeMethodEnum;
    parameters?: CostCategorySplitChargeRuleParameter[];
    source: string;
    targets: string[];
}
