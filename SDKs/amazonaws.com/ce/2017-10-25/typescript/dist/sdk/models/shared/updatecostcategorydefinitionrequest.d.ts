import { SpeakeasyBase } from "../../../internal/utils";
import { CostCategoryRule } from "./costcategoryrule";
import { CostCategoryRuleVersionEnum } from "./costcategoryruleversionenum";
import { CostCategorySplitChargeRule } from "./costcategorysplitchargerule";
export declare class UpdateCostCategoryDefinitionRequest extends SpeakeasyBase {
    costCategoryArn: string;
    /**
     * The default value for the cost category.
     */
    defaultValue?: string;
    effectiveStart?: string;
    /**
     * The rule schema version in this particular Cost Category.
     */
    ruleVersion: CostCategoryRuleVersionEnum;
    rules: CostCategoryRule[];
    splitChargeRules?: CostCategorySplitChargeRule[];
}
