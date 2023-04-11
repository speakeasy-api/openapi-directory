import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotStatusEnum } from "./snapshotstatusenum";
/**
 * A snapshot object that contains databases.
 */
export declare class Snapshot extends SpeakeasyBase {
    accountsWithProvisionedRestoreAccess?: string[];
    accountsWithRestoreAccess?: string[];
    actualIncrementalBackupSizeInMegaBytes?: number;
    adminUsername?: string;
    backupProgressInMegaBytes?: number;
    currentBackupRateInMegaBytesPerSecond?: number;
    elapsedTimeInSeconds?: number;
    estimatedSecondsToCompletion?: number;
    kmsKeyId?: string;
    namespaceArn?: string;
    namespaceName?: string;
    ownerAccount?: string;
    snapshotArn?: string;
    snapshotCreateTime?: Date;
    snapshotName?: string;
    snapshotRemainingDays?: number;
    snapshotRetentionPeriod?: number;
    snapshotRetentionStartTime?: Date;
    status?: SnapshotStatusEnum;
    totalBackupSizeInMegaBytes?: number;
}
