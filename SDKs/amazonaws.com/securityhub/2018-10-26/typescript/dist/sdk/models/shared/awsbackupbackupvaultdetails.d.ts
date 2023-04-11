import { SpeakeasyBase } from "../../../internal/utils";
import { AwsBackupBackupVaultNotificationsDetails } from "./awsbackupbackupvaultnotificationsdetails";
/**
 * Provides details about an Backup backup vault. In Backup, a backup vault is a container that stores and organizes your backups.
 */
export declare class AwsBackupBackupVaultDetails extends SpeakeasyBase {
    accessPolicy?: string;
    backupVaultArn?: string;
    backupVaultName?: string;
    encryptionKeyArn?: string;
    notifications?: AwsBackupBackupVaultNotificationsDetails;
}
