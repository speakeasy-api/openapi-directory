import { SpeakeasyBase } from "../../../internal/utils";
import { SortByEnum } from "./sortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";
import { WarmPoolResourceStatusEnum } from "./warmpoolresourcestatusenum";
export declare class ListTrainingJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: SortByEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: TrainingJobStatusEnum;
    warmPoolStatusEquals?: WarmPoolResourceStatusEnum;
}
