import { SpeakeasyBase } from "../../../internal/utils";
import { CostCategoryInheritedValueDimension } from "./costcategoryinheritedvaluedimension";
import { CostCategoryRuleTypeEnum } from "./costcategoryruletypeenum";
import { Expression } from "./expression";
/**
 * Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.
 */
export declare class CostCategoryRule extends SpeakeasyBase {
    inheritedValue?: CostCategoryInheritedValueDimension;
    rule?: Expression;
    type?: CostCategoryRuleTypeEnum;
    /**
     * The default value for the cost category.
     */
    value?: string;
}
