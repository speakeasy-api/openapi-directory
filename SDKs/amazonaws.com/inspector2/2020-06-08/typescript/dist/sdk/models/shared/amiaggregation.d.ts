import { SpeakeasyBase } from "../../../internal/utils";
import { AmiSortByEnum } from "./amisortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { StringFilter } from "./stringfilter";
/**
 * The details that define an aggregation based on Amazon machine images (AMIs).
 */
export declare class AmiAggregation extends SpeakeasyBase {
    amis?: StringFilter[];
    sortBy?: AmiSortByEnum;
    sortOrder?: SortOrderEnum;
}
