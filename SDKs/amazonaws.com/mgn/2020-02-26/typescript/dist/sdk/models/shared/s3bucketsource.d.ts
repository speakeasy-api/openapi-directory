import { SpeakeasyBase } from "../../../internal/utils";
/**
 * S3 bucket source.
 */
export declare class S3BucketSource extends SpeakeasyBase {
    s3Bucket: string;
    s3BucketOwner?: string;
    s3Key: string;
}
