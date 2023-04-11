import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets. Each field contains aggregated data for all the buckets that have a sensitivity score (sensitivityScore) of a specified value or within a specified range (BucketStatisticsBySensitivity). If automated sensitive data discovery is currently disabled for your account, the value for each field is 0.
 */
export declare class SensitivityAggregations extends SpeakeasyBase {
    classifiableSizeInBytes?: number;
    publiclyAccessibleCount?: number;
    totalCount?: number;
    totalSizeInBytes?: number;
}
