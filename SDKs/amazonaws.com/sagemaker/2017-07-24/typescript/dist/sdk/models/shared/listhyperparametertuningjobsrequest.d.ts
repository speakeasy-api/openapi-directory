import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobSortByOptionsEnum } from "./hyperparametertuningjobsortbyoptionsenum";
import { HyperParameterTuningJobStatusEnum } from "./hyperparametertuningjobstatusenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListHyperParameterTuningJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: HyperParameterTuningJobSortByOptionsEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: HyperParameterTuningJobStatusEnum;
}
