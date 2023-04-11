import { SpeakeasyBase } from "../../../internal/utils";
import { CostCategory } from "./costcategory";
/**
 * Success
 */
export declare class DescribeCostCategoryDefinitionResponse extends SpeakeasyBase {
    /**
     * The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object.
     */
    costCategory?: CostCategory;
}
