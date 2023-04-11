import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides lifecycle details for the backup plan. A lifecycle defines when a backup is transitioned to cold storage and when it expires.
 */
export declare class AwsBackupBackupPlanLifecycleDetails extends SpeakeasyBase {
    deleteAfterDays?: number;
    moveToColdStorageAfterDays?: number;
}
