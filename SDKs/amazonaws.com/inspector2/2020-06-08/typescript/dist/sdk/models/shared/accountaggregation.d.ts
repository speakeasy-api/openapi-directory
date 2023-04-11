import { SpeakeasyBase } from "../../../internal/utils";
import { AccountSortByEnum } from "./accountsortbyenum";
import { AggregationFindingTypeEnum } from "./aggregationfindingtypeenum";
import { AggregationResourceTypeEnum } from "./aggregationresourcetypeenum";
import { SortOrderEnum } from "./sortorderenum";
/**
 * An object that contains details about an aggregation response based on Amazon Web Services accounts.
 */
export declare class AccountAggregation extends SpeakeasyBase {
    findingType?: AggregationFindingTypeEnum;
    resourceType?: AggregationResourceTypeEnum;
    sortBy?: AccountSortByEnum;
    sortOrder?: SortOrderEnum;
}
