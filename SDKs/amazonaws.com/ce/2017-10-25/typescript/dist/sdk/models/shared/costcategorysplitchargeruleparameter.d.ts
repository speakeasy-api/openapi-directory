import { SpeakeasyBase } from "../../../internal/utils";
import { CostCategorySplitChargeRuleParameterTypeEnum } from "./costcategorysplitchargeruleparametertypeenum";
/**
 * The parameters for a split charge method.
 */
export declare class CostCategorySplitChargeRuleParameter extends SpeakeasyBase {
    type: CostCategorySplitChargeRuleParameterTypeEnum;
    values: string[];
}
