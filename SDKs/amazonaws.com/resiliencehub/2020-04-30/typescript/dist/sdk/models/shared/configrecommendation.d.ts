import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigRecommendationOptimizationTypeEnum } from "./configrecommendationoptimizationtypeenum";
import { Cost } from "./cost";
import { DisruptionCompliance } from "./disruptioncompliance";
import { HaArchitectureEnum } from "./haarchitectureenum";
import { RecommendationDisruptionCompliance } from "./recommendationdisruptioncompliance";
/**
 * Defines a configuration recommendation.
 */
export declare class ConfigRecommendation extends SpeakeasyBase {
    appComponentName?: string;
    compliance?: Record<string, DisruptionCompliance>;
    cost?: Cost;
    description?: string;
    haArchitecture?: HaArchitectureEnum;
    name: string;
    optimizationType: ConfigRecommendationOptimizationTypeEnum;
    recommendationCompliance?: Record<string, RecommendationDisruptionCompliance>;
    referenceId: string;
    suggestedChanges?: string[];
}
