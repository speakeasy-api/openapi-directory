import { SpeakeasyBase } from "../../../internal/utils";
import { S3BucketInfo } from "./s3bucketinfo";
/**
 * Success
 */
export declare class ListS3BucketsResponse extends SpeakeasyBase {
    buckets?: S3BucketInfo[];
    nextToken?: string;
}
