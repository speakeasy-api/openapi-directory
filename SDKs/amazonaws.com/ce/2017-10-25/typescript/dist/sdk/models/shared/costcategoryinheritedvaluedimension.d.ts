import { SpeakeasyBase } from "../../../internal/utils";
import { CostCategoryInheritedValueDimensionNameEnum } from "./costcategoryinheritedvaluedimensionnameenum";
/**
 * When you create or update a cost category, you can define the <code>CostCategoryRule</code> rule type as <code>INHERITED_VALUE</code>. This rule type adds the flexibility to define a rule that dynamically inherits the cost category value from the dimension value that's defined by <code>CostCategoryInheritedValueDimension</code>. For example, suppose that you want to dynamically group costs that are based on the value of a specific tag key. First, choose an inherited value rule type, and then choose the tag dimension and specify the tag key to use.
 */
export declare class CostCategoryInheritedValueDimension extends SpeakeasyBase {
    dimensionKey?: string;
    dimensionName?: CostCategoryInheritedValueDimensionNameEnum;
}
