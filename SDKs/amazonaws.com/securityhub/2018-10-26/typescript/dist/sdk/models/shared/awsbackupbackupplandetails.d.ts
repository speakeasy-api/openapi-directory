import { SpeakeasyBase } from "../../../internal/utils";
import { AwsBackupBackupPlanBackupPlanDetails } from "./awsbackupbackupplanbackupplandetails";
/**
 * Provides details about an Backup backup plan and an array of <code>BackupRule</code> objects, each of which specifies a backup rule.
 */
export declare class AwsBackupBackupPlanDetails extends SpeakeasyBase {
    backupPlan?: AwsBackupBackupPlanBackupPlanDetails;
    backupPlanArn?: string;
    backupPlanId?: string;
    versionId?: string;
}
