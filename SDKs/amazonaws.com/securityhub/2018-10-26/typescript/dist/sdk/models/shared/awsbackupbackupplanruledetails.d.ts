import { SpeakeasyBase } from "../../../internal/utils";
import { AwsBackupBackupPlanLifecycleDetails } from "./awsbackupbackupplanlifecycledetails";
import { AwsBackupBackupPlanRuleCopyActionsDetails } from "./awsbackupbackupplanrulecopyactionsdetails";
/**
 * Provides details about an array of <code>BackupRule</code> objects, each of which specifies a scheduled task that is used to back up a selection of resources.
 */
export declare class AwsBackupBackupPlanRuleDetails extends SpeakeasyBase {
    completionWindowMinutes?: number;
    copyActions?: AwsBackupBackupPlanRuleCopyActionsDetails[];
    enableContinuousBackup?: boolean;
    lifecycle?: AwsBackupBackupPlanLifecycleDetails;
    ruleId?: string;
    ruleName?: string;
    scheduleExpression?: string;
    startWindowMinutes?: number;
    targetBackupVault?: string;
}
