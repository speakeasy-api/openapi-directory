import { SpeakeasyBase } from "../../../internal/utils";
import { AwsBackupBackupPlanAdvancedBackupSettingsDetails } from "./awsbackupbackupplanadvancedbackupsettingsdetails";
import { AwsBackupBackupPlanRuleDetails } from "./awsbackupbackupplanruledetails";
/**
 * Provides details about an Backup backup plan and an array of <code>BackupRule</code> objects, each of which specifies a backup rule.
 */
export declare class AwsBackupBackupPlanBackupPlanDetails extends SpeakeasyBase {
    advancedBackupSettings?: AwsBackupBackupPlanAdvancedBackupSettingsDetails[];
    backupPlanName?: string;
    backupPlanRule?: AwsBackupBackupPlanRuleDetails[];
}
