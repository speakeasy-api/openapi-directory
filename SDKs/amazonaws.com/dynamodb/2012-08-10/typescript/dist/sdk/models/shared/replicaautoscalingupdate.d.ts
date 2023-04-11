import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
import { ReplicaGlobalSecondaryIndexAutoScalingUpdate } from "./replicaglobalsecondaryindexautoscalingupdate";
/**
 * Represents the auto scaling settings of a replica that will be modified.
 */
export declare class ReplicaAutoScalingUpdate extends SpeakeasyBase {
    regionName: string;
    replicaGlobalSecondaryIndexUpdates?: ReplicaGlobalSecondaryIndexAutoScalingUpdate[];
    /**
     * Represents the auto scaling settings to be modified for a global table or global secondary index.
     */
    replicaProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
