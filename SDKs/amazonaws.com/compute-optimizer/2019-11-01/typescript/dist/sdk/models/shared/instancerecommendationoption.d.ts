import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationEffortEnum } from "./migrationeffortenum";
import { PlatformDifferenceEnum } from "./platformdifferenceenum";
import { SavingsOpportunity } from "./savingsopportunity";
import { UtilizationMetric } from "./utilizationmetric";
/**
 * Describes a recommendation option for an Amazon EC2 instance.
 */
export declare class InstanceRecommendationOption extends SpeakeasyBase {
    instanceType?: string;
    migrationEffort?: MigrationEffortEnum;
    performanceRisk?: number;
    platformDifferences?: PlatformDifferenceEnum[];
    projectedUtilizationMetrics?: UtilizationMetric[];
    rank?: number;
    savingsOpportunity?: SavingsOpportunity;
}
