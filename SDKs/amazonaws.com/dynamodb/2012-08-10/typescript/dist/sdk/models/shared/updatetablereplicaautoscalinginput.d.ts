import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
import { GlobalSecondaryIndexAutoScalingUpdate } from "./globalsecondaryindexautoscalingupdate";
import { ReplicaAutoScalingUpdate } from "./replicaautoscalingupdate";
export declare class UpdateTableReplicaAutoScalingInput extends SpeakeasyBase {
    globalSecondaryIndexUpdates?: GlobalSecondaryIndexAutoScalingUpdate[];
    /**
     * Represents the auto scaling settings to be modified for a global table or global secondary index.
     */
    provisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
    replicaUpdates?: ReplicaAutoScalingUpdate[];
    tableName: string;
}
