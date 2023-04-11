import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { IndexStatusEnum } from "./indexstatusenum";
/**
 * Represents the auto scaling configuration for a replica global secondary index.
 */
export declare class ReplicaGlobalSecondaryIndexAutoScalingDescription extends SpeakeasyBase {
    indexName?: string;
    indexStatus?: IndexStatusEnum;
    /**
     * Represents the auto scaling settings for a global table or global secondary index.
     */
    provisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    /**
     * Represents the auto scaling settings for a global table or global secondary index.
     */
    provisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
}
