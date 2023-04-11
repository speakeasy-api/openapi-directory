import { SpeakeasyBase } from "../../../internal/utils";
import { HubContentSortByEnum } from "./hubcontentsortbyenum";
import { HubContentTypeEnum } from "./hubcontenttypeenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListHubContentsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    hubContentType: HubContentTypeEnum;
    hubName: string;
    maxResults?: number;
    maxSchemaVersion?: string;
    nameContains?: string;
    nextToken?: string;
    sortBy?: HubContentSortByEnum;
    sortOrder?: SortOrderEnum;
}
