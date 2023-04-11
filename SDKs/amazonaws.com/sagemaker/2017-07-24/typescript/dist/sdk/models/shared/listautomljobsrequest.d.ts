import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLJobStatusEnum } from "./automljobstatusenum";
import { AutoMLSortByEnum } from "./automlsortbyenum";
import { AutoMLSortOrderEnum } from "./automlsortorderenum";
export declare class ListAutoMLJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: AutoMLSortByEnum;
    sortOrder?: AutoMLSortOrderEnum;
    statusEquals?: AutoMLJobStatusEnum;
}
