import { SpeakeasyBase } from "../../../internal/utils";
import { EnhancedInfrastructureMetricsEnum } from "./enhancedinfrastructuremetricsenum";
import { ExternalMetricsPreference } from "./externalmetricspreference";
import { InferredWorkloadTypesPreferenceEnum } from "./inferredworkloadtypespreferenceenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Scope } from "./scope";
/**
 * Describes a recommendation preference.
 */
export declare class RecommendationPreferencesDetail extends SpeakeasyBase {
    enhancedInfrastructureMetrics?: EnhancedInfrastructureMetricsEnum;
    externalMetricsPreference?: ExternalMetricsPreference;
    inferredWorkloadTypes?: InferredWorkloadTypesPreferenceEnum;
    resourceType?: ResourceTypeEnum;
    scope?: Scope;
}
