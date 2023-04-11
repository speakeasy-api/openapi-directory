import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { ReplicaGlobalSecondaryIndexAutoScalingDescription } from "./replicaglobalsecondaryindexautoscalingdescription";
import { ReplicaStatusEnum } from "./replicastatusenum";
/**
 * Represents the auto scaling settings of the replica.
 */
export declare class ReplicaAutoScalingDescription extends SpeakeasyBase {
    globalSecondaryIndexes?: ReplicaGlobalSecondaryIndexAutoScalingDescription[];
    regionName?: string;
    /**
     * Represents the auto scaling settings for a global table or global secondary index.
     */
    replicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    /**
     * Represents the auto scaling settings for a global table or global secondary index.
     */
    replicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    replicaStatus?: ReplicaStatusEnum;
}
