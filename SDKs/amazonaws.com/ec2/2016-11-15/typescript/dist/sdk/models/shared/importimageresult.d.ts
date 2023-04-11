import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The response information for license configurations.
 */
export declare class ImportImageResultLicenseSpecifications extends SpeakeasyBase {
    licenseConfigurationArn?: string;
}
/**
 * The Amazon S3 bucket for the disk image.
 */
export declare class ImportImageResultSnapshotDetailsUserBucket extends SpeakeasyBase {
    s3Bucket?: string;
    s3Key?: string;
}
/**
 * Describes the snapshot created from the imported disk.
 */
export declare class ImportImageResultSnapshotDetails extends SpeakeasyBase {
    description?: string;
    deviceName?: string;
    diskImageSize?: number;
    format?: string;
    progress?: string;
    snapshotId?: string;
    status?: string;
    statusMessage?: string;
    url?: string;
    userBucket?: ImportImageResultSnapshotDetailsUserBucket;
}
/**
 * Describes a tag.
 */
export declare class ImportImageResultTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Success
 */
export declare class ImportImageResult extends SpeakeasyBase {
    architecture?: string;
    description?: string;
    encrypted?: boolean;
    hypervisor?: string;
    imageId?: string;
    importTaskId?: string;
    kmsKeyId?: string;
    licenseSpecifications?: ImportImageResultLicenseSpecifications[];
    licenseType?: string;
    platform?: string;
    progress?: string;
    snapshotDetails?: ImportImageResultSnapshotDetails[];
    status?: string;
    statusMessage?: string;
    tags?: ImportImageResultTags[];
    usageOperation?: string;
}
