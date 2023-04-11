import { SpeakeasyBase } from "../../../internal/utils";
import { EdgePackagingJobStatusEnum } from "./edgepackagingjobstatusenum";
import { ListEdgePackagingJobsSortByEnum } from "./listedgepackagingjobssortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListEdgePackagingJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    modelNameContains?: string;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ListEdgePackagingJobsSortByEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: EdgePackagingJobStatusEnum;
}
