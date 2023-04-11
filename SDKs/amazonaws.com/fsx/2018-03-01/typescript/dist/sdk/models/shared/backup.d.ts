import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryBackupAttributes } from "./activedirectorybackupattributes";
import { BackupFailureDetails } from "./backupfailuredetails";
import { BackupLifecycleEnum } from "./backuplifecycleenum";
import { BackupTypeEnum } from "./backuptypeenum";
import { FileSystem } from "./filesystem";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
import { Volume } from "./volume";
/**
 * A backup of an Amazon FSx for Windows File Server, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system.
 */
export declare class Backup extends SpeakeasyBase {
    backupId: string;
    creationTime: Date;
    directoryInformation?: ActiveDirectoryBackupAttributes;
    failureDetails?: BackupFailureDetails;
    fileSystem: FileSystem;
    kmsKeyId?: string;
    lifecycle: BackupLifecycleEnum;
    /**
     * An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
     */
    ownerId?: string;
    /**
     * The current percent of progress of an asynchronous task.
     */
    progressPercent?: number;
    resourceARN?: string;
    resourceType?: ResourceTypeEnum;
    /**
     * The ID of the source backup. Specifies the backup that you are copying.
     */
    sourceBackupId?: string;
    sourceBackupRegion?: string;
    tags?: Tag[];
    type: BackupTypeEnum;
    /**
     * Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.
     */
    volume?: Volume;
}
