import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceExperimentStatusEnum } from "./inferenceexperimentstatusenum";
import { InferenceExperimentTypeEnum } from "./inferenceexperimenttypeenum";
import { SortInferenceExperimentsByEnum } from "./sortinferenceexperimentsbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListInferenceExperimentsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: SortInferenceExperimentsByEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: InferenceExperimentStatusEnum;
    type?: InferenceExperimentTypeEnum;
}
