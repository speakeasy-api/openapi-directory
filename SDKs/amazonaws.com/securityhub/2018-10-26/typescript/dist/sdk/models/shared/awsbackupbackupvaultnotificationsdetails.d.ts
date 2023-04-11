import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides details about the Amazon SNS event notifications for the specified backup vault.
 */
export declare class AwsBackupBackupVaultNotificationsDetails extends SpeakeasyBase {
    backupVaultEvents?: string[];
    snsTopicArn?: string;
}
