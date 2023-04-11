import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the logging status of the cluster.
 */
export declare class AwsRedshiftClusterLoggingStatus extends SpeakeasyBase {
    bucketName?: string;
    lastFailureMessage?: string;
    lastFailureTime?: string;
    lastSuccessfulDeliveryTime?: string;
    loggingEnabled?: boolean;
    s3KeyPrefix?: string;
}
