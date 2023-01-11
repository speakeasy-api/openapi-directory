import { SpeakeasyBase } from "../../../internal/utils";
import { AccountsWithRestoreAccessList } from "./accountswithrestoreaccesslist";
import { TagList } from "./taglist";
/**
 * Describes a snapshot.
**/
export declare class Snapshot extends SpeakeasyBase {
    accountsWithRestoreAccess?: AccountsWithRestoreAccessList[];
    actualIncrementalBackupSizeInMegaBytes?: number;
    availabilityZone?: string;
    backupProgressInMegaBytes?: number;
    clusterCreateTime?: Date;
    clusterIdentifier?: string;
    clusterVersion?: string;
    currentBackupRateInMegaBytesPerSecond?: number;
    dbName?: string;
    elapsedTimeInSeconds?: number;
    encrypted?: boolean;
    encryptedWithHSM?: boolean;
    engineFullVersion?: string;
    enhancedVpcRouting?: boolean;
    estimatedSecondsToCompletion?: number;
    kmsKeyId?: string;
    maintenanceTrackName?: string;
    manualSnapshotRemainingDays?: number;
    manualSnapshotRetentionPeriod?: number;
    masterUsername?: string;
    nodeType?: string;
    numberOfNodes?: number;
    ownerAccount?: string;
    port?: number;
    restorableNodeTypes?: Record<string, any>[];
    snapshotCreateTime?: Date;
    snapshotIdentifier?: string;
    snapshotRetentionStartTime?: Date;
    snapshotType?: string;
    sourceRegion?: string;
    status?: string;
    tags?: TagList[];
    totalBackupSizeInMegaBytes?: number;
    vpcId?: string;
}
