import { SpeakeasyBase } from "../../../internal/utils";
import { LookbackPeriodInDaysEnum } from "./lookbackperiodindaysenum";
/**
 * Metadata for this recommendation set.
 */
export declare class RightsizingRecommendationMetadata extends SpeakeasyBase {
    additionalMetadata?: string;
    generationTimestamp?: string;
    lookbackPeriodInDays?: LookbackPeriodInDaysEnum;
    recommendationId?: string;
}
