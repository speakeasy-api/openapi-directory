import { SpeakeasyBase } from "../../../internal/utils";
import { GenerationStatusEnum } from "./generationstatusenum";
/**
 * The summary of the Savings Plans recommendation generation.
 */
export declare class GenerationSummary extends SpeakeasyBase {
    estimatedCompletionTime?: string;
    generationCompletionTime?: string;
    generationStartedTime?: string;
    generationStatus?: GenerationStatusEnum;
    recommendationId?: string;
}
