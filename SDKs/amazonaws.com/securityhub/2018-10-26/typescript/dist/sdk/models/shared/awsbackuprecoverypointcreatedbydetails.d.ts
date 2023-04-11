import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the backup plan and rule that Backup used to initiate the recovery point backup.
 */
export declare class AwsBackupRecoveryPointCreatedByDetails extends SpeakeasyBase {
    backupPlanArn?: string;
    backupPlanId?: string;
    backupPlanVersion?: string;
    backupRuleId?: string;
}
