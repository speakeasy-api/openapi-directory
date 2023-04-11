import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class GetCostCategoriesResponse extends SpeakeasyBase {
    costCategoryNames?: string[];
    costCategoryValues?: string[];
    nextPageToken?: string;
    returnSize: number;
    totalSize: number;
}
