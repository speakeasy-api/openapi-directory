import { SpeakeasyBase } from "../../../internal/utils";
import { SensitivityAggregations } from "./sensitivityaggregations";
/**
 * Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets, grouped by bucket sensitivity score (sensitivityScore). If automated sensitive data discovery is currently disabled for your account, the value for each metric is 0.
 */
export declare class BucketStatisticsBySensitivity extends SpeakeasyBase {
    classificationError?: SensitivityAggregations;
    notClassified?: SensitivityAggregations;
    notSensitive?: SensitivityAggregations;
    sensitive?: SensitivityAggregations;
}
