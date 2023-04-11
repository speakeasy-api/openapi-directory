import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The S3 bucket that is being imported from.
 */
export declare class S3BucketSource extends SpeakeasyBase {
    s3Bucket: string;
    s3BucketOwner?: string;
    s3KeyPrefix?: string;
}
