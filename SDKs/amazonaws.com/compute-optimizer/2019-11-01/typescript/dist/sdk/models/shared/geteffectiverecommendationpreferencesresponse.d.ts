import { SpeakeasyBase } from "../../../internal/utils";
import { EnhancedInfrastructureMetricsEnum } from "./enhancedinfrastructuremetricsenum";
import { ExternalMetricsPreference } from "./externalmetricspreference";
/**
 * Success
 */
export declare class GetEffectiveRecommendationPreferencesResponse extends SpeakeasyBase {
    enhancedInfrastructureMetrics?: EnhancedInfrastructureMetricsEnum;
    externalMetricsPreference?: ExternalMetricsPreference;
}
