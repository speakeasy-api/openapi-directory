import { SpeakeasyBase } from "../../../internal/utils";
import { BucketMetadata } from "./bucketmetadata";
/**
 * Success
 */
export declare class DescribeBucketsResponse extends SpeakeasyBase {
    buckets?: BucketMetadata[];
    nextToken?: string;
}
