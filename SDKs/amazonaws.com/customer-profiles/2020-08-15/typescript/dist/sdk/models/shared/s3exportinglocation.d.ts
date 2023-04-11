import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The S3 location where Identity Resolution Jobs write result files.
 */
export declare class S3ExportingLocation extends SpeakeasyBase {
    s3BucketName?: string;
    s3KeyName?: string;
}
