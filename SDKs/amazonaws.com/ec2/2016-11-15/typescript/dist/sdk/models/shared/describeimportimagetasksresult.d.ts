import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The boot mode of the virtual machine.
 */
export declare enum DescribeImportImageTasksResultImportImageTasksBootModeEnum {
    LegacyBios = "legacy-bios",
    Uefi = "uefi",
    UefiPreferred = "uefi-preferred"
}
/**
 *  The response information for license configurations.
 */
export declare class DescribeImportImageTasksResultImportImageTasksLicenseSpecifications extends SpeakeasyBase {
    licenseConfigurationArn?: string;
}
/**
 * The Amazon S3 bucket for the disk image.
 */
export declare class DescribeImportImageTasksResultImportImageTasksSnapshotDetailsUserBucket extends SpeakeasyBase {
    s3Bucket?: string;
    s3Key?: string;
}
/**
 * Describes the snapshot created from the imported disk.
 */
export declare class DescribeImportImageTasksResultImportImageTasksSnapshotDetails extends SpeakeasyBase {
    description?: string;
    deviceName?: string;
    diskImageSize?: number;
    format?: string;
    progress?: string;
    snapshotId?: string;
    status?: string;
    statusMessage?: string;
    url?: string;
    userBucket?: DescribeImportImageTasksResultImportImageTasksSnapshotDetailsUserBucket;
}
/**
 * Describes a tag.
 */
export declare class DescribeImportImageTasksResultImportImageTasksTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an import image task.
 */
export declare class DescribeImportImageTasksResultImportImageTasks extends SpeakeasyBase {
    architecture?: string;
    bootMode?: DescribeImportImageTasksResultImportImageTasksBootModeEnum;
    description?: string;
    encrypted?: boolean;
    hypervisor?: string;
    imageId?: string;
    importTaskId?: string;
    kmsKeyId?: string;
    licenseSpecifications?: DescribeImportImageTasksResultImportImageTasksLicenseSpecifications[];
    licenseType?: string;
    platform?: string;
    progress?: string;
    snapshotDetails?: DescribeImportImageTasksResultImportImageTasksSnapshotDetails[];
    status?: string;
    statusMessage?: string;
    tags?: DescribeImportImageTasksResultImportImageTasksTags[];
    usageOperation?: string;
}
/**
 * Success
 */
export declare class DescribeImportImageTasksResult extends SpeakeasyBase {
    importImageTasks?: DescribeImportImageTasksResultImportImageTasks[];
    nextToken?: string;
}
