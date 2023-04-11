import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The settings for the source S3 bucket.
 */
export declare class S3ImportSource extends SpeakeasyBase {
    s3BucketAccessRoleArn: string;
    s3BucketRegion: string;
    s3LocationUri: string;
}
