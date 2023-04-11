import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { BillingModeSummary } from "./billingmodesummary";
import { ReplicaGlobalSecondaryIndexSettingsDescription } from "./replicaglobalsecondaryindexsettingsdescription";
import { ReplicaStatusEnum } from "./replicastatusenum";
import { TableClassSummary } from "./tableclasssummary";
/**
 * Represents the properties of a replica.
 */
export declare class ReplicaSettingsDescription extends SpeakeasyBase {
    regionName: string;
    replicaBillingModeSummary?: BillingModeSummary;
    replicaGlobalSecondaryIndexSettings?: ReplicaGlobalSecondaryIndexSettingsDescription[];
    replicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    replicaProvisionedReadCapacityUnits?: number;
    replicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    replicaProvisionedWriteCapacityUnits?: number;
    replicaStatus?: ReplicaStatusEnum;
    /**
     * Contains details of the table class.
     */
    replicaTableClassSummary?: TableClassSummary;
}
