import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A disk that should be replicated.
 */
export declare class DataReplicationInfoReplicatedDisk extends SpeakeasyBase {
    backloggedStorageBytes?: number;
    deviceName?: string;
    replicatedStorageBytes?: number;
    rescannedStorageBytes?: number;
    totalStorageBytes?: number;
}
