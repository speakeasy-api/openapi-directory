import { SpeakeasyBase } from "../../../internal/utils";
import { CpuVendorArchitectureEnum } from "./cpuvendorarchitectureenum";
import { EnhancedInfrastructureMetricsEnum } from "./enhancedinfrastructuremetricsenum";
import { ExternalMetricsPreference } from "./externalmetricspreference";
import { InferredWorkloadTypesPreferenceEnum } from "./inferredworkloadtypespreferenceenum";
/**
 * Describes the effective recommendation preferences for a resource.
 */
export declare class EffectiveRecommendationPreferences extends SpeakeasyBase {
    cpuVendorArchitectures?: CpuVendorArchitectureEnum[];
    enhancedInfrastructureMetrics?: EnhancedInfrastructureMetricsEnum;
    externalMetricsPreference?: ExternalMetricsPreference;
    inferredWorkloadTypes?: InferredWorkloadTypesPreferenceEnum;
}
