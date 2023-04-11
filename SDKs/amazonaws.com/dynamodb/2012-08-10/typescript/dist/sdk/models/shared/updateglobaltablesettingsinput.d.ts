import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalTableGlobalSecondaryIndexSettingsUpdate } from "./globaltableglobalsecondaryindexsettingsupdate";
import { ReplicaSettingsUpdate } from "./replicasettingsupdate";
export declare class UpdateGlobalTableSettingsInput extends SpeakeasyBase {
    globalTableBillingMode?: BillingModeEnum;
    globalTableGlobalSecondaryIndexSettingsUpdate?: GlobalTableGlobalSecondaryIndexSettingsUpdate[];
    globalTableName: string;
    globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
    globalTableProvisionedWriteCapacityUnits?: number;
    replicaSettingsUpdate?: ReplicaSettingsUpdate[];
}
