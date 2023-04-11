import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the destination for an export image task.
 */
export declare class ExportTaskS3LocationRequest extends SpeakeasyBase {
    s3Bucket: string;
    s3Prefix?: string;
}
