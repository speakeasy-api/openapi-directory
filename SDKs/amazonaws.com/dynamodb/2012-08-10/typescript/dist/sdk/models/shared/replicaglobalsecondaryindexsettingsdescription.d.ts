import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { IndexStatusEnum } from "./indexstatusenum";
/**
 * Represents the properties of a global secondary index.
 */
export declare class ReplicaGlobalSecondaryIndexSettingsDescription extends SpeakeasyBase {
    indexName: string;
    indexStatus?: IndexStatusEnum;
    provisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    provisionedReadCapacityUnits?: number;
    provisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    provisionedWriteCapacityUnits?: number;
}
