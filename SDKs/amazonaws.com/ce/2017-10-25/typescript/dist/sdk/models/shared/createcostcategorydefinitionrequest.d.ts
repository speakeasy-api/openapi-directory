import { SpeakeasyBase } from "../../../internal/utils";
import { CostCategoryRule } from "./costcategoryrule";
import { CostCategoryRuleVersionEnum } from "./costcategoryruleversionenum";
import { CostCategorySplitChargeRule } from "./costcategorysplitchargerule";
import { ResourceTag } from "./resourcetag";
export declare class CreateCostCategoryDefinitionRequest extends SpeakeasyBase {
    /**
     * The default value for the cost category.
     */
    defaultValue?: string;
    effectiveStart?: string;
    /**
     * The unique name of the Cost Category.
     */
    name: string;
    resourceTags?: ResourceTag[];
    /**
     * The rule schema version in this particular Cost Category.
     */
    ruleVersion: CostCategoryRuleVersionEnum;
    rules: CostCategoryRule[];
    splitChargeRules?: CostCategorySplitChargeRule[];
}
