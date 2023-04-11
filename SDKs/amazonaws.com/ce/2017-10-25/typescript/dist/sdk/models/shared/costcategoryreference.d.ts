import { SpeakeasyBase } from "../../../internal/utils";
import { CostCategoryProcessingStatus } from "./costcategoryprocessingstatus";
/**
 * <p>A reference to a Cost Category containing only enough information to identify the Cost Category.</p> <p>You can use this information to retrieve the full Cost Category information using <code>DescribeCostCategory</code>.</p>
 */
export declare class CostCategoryReference extends SpeakeasyBase {
    costCategoryArn?: string;
    /**
     * The default value for the cost category.
     */
    defaultValue?: string;
    effectiveEnd?: string;
    effectiveStart?: string;
    /**
     * The unique name of the Cost Category.
     */
    name?: string;
    numberOfRules?: number;
    processingStatus?: CostCategoryProcessingStatus[];
    values?: string[];
}
