import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides statistical data for sensitive data discovery metrics that apply to an S3 bucket that Amazon Macie monitors and analyzes for your account. The statistics capture the results of automated sensitive data discovery activities that Macie has performed for the bucket. The data is available only if automated sensitive data discovery is currently enabled for your account.
 */
export declare class ResourceStatistics extends SpeakeasyBase {
    totalBytesClassified?: number;
    totalDetections?: number;
    totalDetectionsSuppressed?: number;
    totalItemsClassified?: number;
    totalItemsSensitive?: number;
    totalItemsSkipped?: number;
    totalItemsSkippedInvalidEncryption?: number;
    totalItemsSkippedInvalidKms?: number;
    totalItemsSkippedPermissionDenied?: number;
}
