import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how long in days before a recovery point transitions to cold storage or is deleted.
 */
export declare class AwsBackupRecoveryPointCalculatedLifecycleDetails extends SpeakeasyBase {
    deleteAt?: string;
    moveToColdStorageAt?: string;
}
