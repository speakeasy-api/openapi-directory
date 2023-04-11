import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The disk image format for the exported image.
 */
export declare enum ExportImageResultDiskImageFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * Information about the destination Amazon S3 bucket.
 */
export declare class ExportImageResultS3ExportLocation extends SpeakeasyBase {
    s3Bucket?: string;
    s3Prefix?: string;
}
/**
 * Describes a tag.
 */
export declare class ExportImageResultTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Success
 */
export declare class ExportImageResult extends SpeakeasyBase {
    description?: string;
    diskImageFormat?: ExportImageResultDiskImageFormatEnum;
    exportImageTaskId?: string;
    imageId?: string;
    progress?: string;
    roleName?: string;
    s3ExportLocation?: ExportImageResultS3ExportLocation;
    status?: string;
    statusMessage?: string;
    tags?: ExportImageResultTags[];
}
