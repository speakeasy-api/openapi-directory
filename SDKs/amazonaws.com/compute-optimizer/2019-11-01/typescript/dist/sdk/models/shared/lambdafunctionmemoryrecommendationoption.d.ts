import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionMemoryProjectedMetric } from "./lambdafunctionmemoryprojectedmetric";
import { SavingsOpportunity } from "./savingsopportunity";
/**
 * Describes a recommendation option for an Lambda function.
 */
export declare class LambdaFunctionMemoryRecommendationOption extends SpeakeasyBase {
    memorySize?: number;
    projectedUtilizationMetrics?: LambdaFunctionMemoryProjectedMetric[];
    rank?: number;
    savingsOpportunity?: SavingsOpportunity;
}
