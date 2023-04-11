import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupConfiguration } from "./autoscalinggroupconfiguration";
import { MigrationEffortEnum } from "./migrationeffortenum";
import { SavingsOpportunity } from "./savingsopportunity";
import { UtilizationMetric } from "./utilizationmetric";
/**
 * Describes a recommendation option for an Auto Scaling group.
 */
export declare class AutoScalingGroupRecommendationOption extends SpeakeasyBase {
    configuration?: AutoScalingGroupConfiguration;
    migrationEffort?: MigrationEffortEnum;
    performanceRisk?: number;
    projectedUtilizationMetrics?: UtilizationMetric[];
    rank?: number;
    savingsOpportunity?: SavingsOpportunity;
}
