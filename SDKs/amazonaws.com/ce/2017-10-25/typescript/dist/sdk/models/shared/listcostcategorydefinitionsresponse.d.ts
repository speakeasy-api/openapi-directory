import { SpeakeasyBase } from "../../../internal/utils";
import { CostCategoryReference } from "./costcategoryreference";
/**
 * Success
 */
export declare class ListCostCategoryDefinitionsResponse extends SpeakeasyBase {
    costCategoryReferences?: CostCategoryReference[];
    nextToken?: string;
}
