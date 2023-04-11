import { SpeakeasyBase } from "../../../internal/utils";
import { GenerationStatusEnum } from "./generationstatusenum";
export declare class ListSavingsPlansPurchaseRecommendationGenerationRequest extends SpeakeasyBase {
    generationStatus?: GenerationStatusEnum;
    nextPageToken?: string;
    pageSize?: number;
    recommendationIds?: string[];
}
