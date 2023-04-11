import { SpeakeasyBase } from "../../../internal/utils";
import { DiskImageFormatEnum } from "./diskimageformatenum";
/**
 * Properties that configure export from your build instance to a compatible file format for your VM.
 */
export declare class S3ExportConfiguration extends SpeakeasyBase {
    diskImageFormat: DiskImageFormatEnum;
    roleName: string;
    s3Bucket: string;
    s3Prefix?: string;
}
