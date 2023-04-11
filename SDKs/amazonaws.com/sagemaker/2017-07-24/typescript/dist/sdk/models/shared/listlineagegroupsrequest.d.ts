import { SpeakeasyBase } from "../../../internal/utils";
import { SortLineageGroupsByEnum } from "./sortlineagegroupsbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListLineageGroupsRequest extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SortLineageGroupsByEnum;
    sortOrder?: SortOrderEnum;
}
