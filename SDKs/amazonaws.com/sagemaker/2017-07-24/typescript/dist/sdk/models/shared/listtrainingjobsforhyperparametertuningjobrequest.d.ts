import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
import { TrainingJobSortByOptionsEnum } from "./trainingjobsortbyoptionsenum";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";
export declare class ListTrainingJobsForHyperParameterTuningJobRequest extends SpeakeasyBase {
    hyperParameterTuningJobName: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: TrainingJobSortByOptionsEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: TrainingJobStatusEnum;
}
