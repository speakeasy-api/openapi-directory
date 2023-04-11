import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationResourceTypeEnum } from "./aggregationresourcetypeenum";
import { SortOrderEnum } from "./sortorderenum";
import { StringFilter } from "./stringfilter";
import { TitleSortByEnum } from "./titlesortbyenum";
/**
 * The details that define an aggregation based on finding title.
 */
export declare class TitleAggregation extends SpeakeasyBase {
    resourceType?: AggregationResourceTypeEnum;
    sortBy?: TitleSortByEnum;
    sortOrder?: SortOrderEnum;
    titles?: StringFilter[];
    vulnerabilityIds?: StringFilter[];
}
