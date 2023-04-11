import { SpeakeasyBase } from "../../../internal/utils";
import { CompilationJobStatusEnum } from "./compilationjobstatusenum";
import { ListCompilationJobsSortByEnum } from "./listcompilationjobssortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListCompilationJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ListCompilationJobsSortByEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: CompilationJobStatusEnum;
}
