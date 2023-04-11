import { SpeakeasyBase } from "../../../internal/utils";
import { PackageSortByEnum } from "./packagesortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { StringFilter } from "./stringfilter";
/**
 * The details that define an aggregation based on operating system package type.
 */
export declare class PackageAggregation extends SpeakeasyBase {
    packageNames?: StringFilter[];
    sortBy?: PackageSortByEnum;
    sortOrder?: SortOrderEnum;
}
