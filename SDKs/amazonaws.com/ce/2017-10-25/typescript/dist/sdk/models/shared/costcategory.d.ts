import { SpeakeasyBase } from "../../../internal/utils";
import { CostCategoryProcessingStatus } from "./costcategoryprocessingstatus";
import { CostCategoryRule } from "./costcategoryrule";
import { CostCategoryRuleVersionEnum } from "./costcategoryruleversionenum";
import { CostCategorySplitChargeRule } from "./costcategorysplitchargerule";
/**
 * The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object.
 */
export declare class CostCategory extends SpeakeasyBase {
    costCategoryArn: string;
    /**
     * The default value for the cost category.
     */
    defaultValue?: string;
    effectiveEnd?: string;
    effectiveStart: string;
    /**
     * The unique name of the Cost Category.
     */
    name: string;
    processingStatus?: CostCategoryProcessingStatus[];
    /**
     * The rule schema version in this particular Cost Category.
     */
    ruleVersion: CostCategoryRuleVersionEnum;
    rules: CostCategoryRule[];
    splitChargeRules?: CostCategorySplitChargeRule[];
}
