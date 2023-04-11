import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationFindingTypeEnum } from "./aggregationfindingtypeenum";
import { AggregationResourceTypeEnum } from "./aggregationresourcetypeenum";
import { FindingTypeSortByEnum } from "./findingtypesortbyenum";
import { SortOrderEnum } from "./sortorderenum";
/**
 * The details that define an aggregation based on finding type.
 */
export declare class FindingTypeAggregation extends SpeakeasyBase {
    findingType?: AggregationFindingTypeEnum;
    resourceType?: AggregationResourceTypeEnum;
    sortBy?: FindingTypeSortByEnum;
    sortOrder?: SortOrderEnum;
}
