import { SpeakeasyBase } from "../../../internal/utils";
import { HubSortByEnum } from "./hubsortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListHubsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: HubSortByEnum;
    sortOrder?: SortOrderEnum;
}
