import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
/**
 * Represents the auto scaling settings of a global secondary index for a replica that will be modified.
 */
export declare class ReplicaGlobalSecondaryIndexAutoScalingUpdate extends SpeakeasyBase {
    indexName?: string;
    /**
     * Represents the auto scaling settings to be modified for a global table or global secondary index.
     */
    provisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
