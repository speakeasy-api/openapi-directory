import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A disk that should be replicated.
 */
export declare class RecoveryInstanceDataReplicationInfoReplicatedDisk extends SpeakeasyBase {
    backloggedStorageBytes?: number;
    deviceName?: string;
    replicatedStorageBytes?: number;
    rescannedStorageBytes?: number;
    totalStorageBytes?: number;
}
