import { SpeakeasyBase } from "../../../internal/utils";
import { HubContentSortByEnum } from "./hubcontentsortbyenum";
import { HubContentTypeEnum } from "./hubcontenttypeenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListHubContentVersionsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    hubContentName: string;
    hubContentType: HubContentTypeEnum;
    hubName: string;
    maxResults?: number;
    maxSchemaVersion?: string;
    minVersion?: string;
    nextToken?: string;
    sortBy?: HubContentSortByEnum;
    sortOrder?: SortOrderEnum;
}
