import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration information about the S3 bucket where Identity Resolution Jobs write result files.
 */
export declare class S3ExportingConfig extends SpeakeasyBase {
    s3BucketName: string;
    s3KeyName?: string;
}
