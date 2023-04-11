import { SpeakeasyBase } from "../../../internal/utils";
import { AwsBackupRecoveryPointCalculatedLifecycleDetails } from "./awsbackuprecoverypointcalculatedlifecycledetails";
import { AwsBackupRecoveryPointCreatedByDetails } from "./awsbackuprecoverypointcreatedbydetails";
import { AwsBackupRecoveryPointLifecycleDetails } from "./awsbackuprecoverypointlifecycledetails";
/**
 * Contains detailed information about the recovery points stored in an Backup backup vault. A backup, or recovery point, represents the content of a resource at a specified time.
 */
export declare class AwsBackupRecoveryPointDetails extends SpeakeasyBase {
    backupSizeInBytes?: number;
    backupVaultArn?: string;
    backupVaultName?: string;
    calculatedLifecycle?: AwsBackupRecoveryPointCalculatedLifecycleDetails;
    completionDate?: string;
    createdBy?: AwsBackupRecoveryPointCreatedByDetails;
    creationDate?: string;
    encryptionKeyArn?: string;
    iamRoleArn?: string;
    isEncrypted?: boolean;
    lastRestoreTime?: string;
    lifecycle?: AwsBackupRecoveryPointLifecycleDetails;
    recoveryPointArn?: string;
    resourceArn?: string;
    resourceType?: string;
    sourceBackupVaultArn?: string;
    status?: string;
    statusMessage?: string;
    storageClass?: string;
}
