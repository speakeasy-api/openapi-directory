import { SpeakeasyBase } from "../../../internal/utils";
import { RepositorySortByEnum } from "./repositorysortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { StringFilter } from "./stringfilter";
/**
 * The details that define an aggregation based on repository.
 */
export declare class RepositoryAggregation extends SpeakeasyBase {
    repositories?: StringFilter[];
    sortBy?: RepositorySortByEnum;
    sortOrder?: SortOrderEnum;
}
