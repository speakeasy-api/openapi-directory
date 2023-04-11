import { SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";
/**
 * Success
 */
export declare class GetBucketsAggregationResponse extends SpeakeasyBase {
    buckets?: Bucket[];
    totalCount?: number;
}
