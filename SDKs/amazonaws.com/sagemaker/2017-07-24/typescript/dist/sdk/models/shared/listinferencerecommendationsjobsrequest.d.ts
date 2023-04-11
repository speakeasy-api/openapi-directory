import { SpeakeasyBase } from "../../../internal/utils";
import { ListInferenceRecommendationsJobsSortByEnum } from "./listinferencerecommendationsjobssortbyenum";
import { RecommendationJobStatusEnum } from "./recommendationjobstatusenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListInferenceRecommendationsJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ListInferenceRecommendationsJobsSortByEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: RecommendationJobStatusEnum;
}
