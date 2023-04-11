import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
import { ReplicaGlobalSecondaryIndexSettingsUpdate } from "./replicaglobalsecondaryindexsettingsupdate";
import { TableClassEnum } from "./tableclassenum";
/**
 * Represents the settings for a global table in a Region that will be modified.
 */
export declare class ReplicaSettingsUpdate extends SpeakeasyBase {
    regionName: string;
    replicaGlobalSecondaryIndexSettingsUpdate?: ReplicaGlobalSecondaryIndexSettingsUpdate[];
    replicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
    replicaProvisionedReadCapacityUnits?: number;
    replicaTableClass?: TableClassEnum;
}
