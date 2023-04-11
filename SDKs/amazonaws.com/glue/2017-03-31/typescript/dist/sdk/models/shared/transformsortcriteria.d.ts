import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionTypeEnum } from "./sortdirectiontypeenum";
import { TransformSortColumnTypeEnum } from "./transformsortcolumntypeenum";
/**
 * The sorting criteria that are associated with the machine learning transform.
 */
export declare class TransformSortCriteria extends SpeakeasyBase {
    column: TransformSortColumnTypeEnum;
    sortDirection: SortDirectionTypeEnum;
}
