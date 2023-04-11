import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains an array of Transition objects specifying how long in days before a recovery point transitions to cold storage or is deleted.
 */
export declare class AwsBackupRecoveryPointLifecycleDetails extends SpeakeasyBase {
    deleteAfterDays?: number;
    moveToColdStorageAfterDays?: number;
}
