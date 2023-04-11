import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status code.
 */
export declare enum DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsCloudWatchLogsDeliveryStatusCodeEnum {
    Success = "success",
    Failed = "failed"
}
/**
 * The delivery status for access logs.
 */
export declare class DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsCloudWatchLogsDeliveryStatus extends SpeakeasyBase {
    code?: DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsCloudWatchLogsDeliveryStatusCodeEnum;
    message?: string;
}
/**
 * CloudWatch Logs logging destination.
 */
export declare class DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsCloudWatchLogs extends SpeakeasyBase {
    deliveryStatus?: DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsCloudWatchLogsDeliveryStatus;
    enabled?: boolean;
    logGroup?: string;
}
/**
 * The status code.
 */
export declare enum DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsKinesisDataFirehoseDeliveryStatusCodeEnum {
    Success = "success",
    Failed = "failed"
}
/**
 * The delivery status.
 */
export declare class DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsKinesisDataFirehoseDeliveryStatus extends SpeakeasyBase {
    code?: DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsKinesisDataFirehoseDeliveryStatusCodeEnum;
    message?: string;
}
/**
 * Kinesis logging destination.
 */
export declare class DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsKinesisDataFirehose extends SpeakeasyBase {
    deliveryStatus?: DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsKinesisDataFirehoseDeliveryStatus;
    deliveryStream?: string;
    enabled?: boolean;
}
/**
 * The status code.
 */
export declare enum DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsS3DeliveryStatusCodeEnum {
    Success = "success",
    Failed = "failed"
}
/**
 * The delivery status.
 */
export declare class DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsS3DeliveryStatus extends SpeakeasyBase {
    code?: DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsS3DeliveryStatusCodeEnum;
    message?: string;
}
/**
 * Amazon S3 logging options.
 */
export declare class DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsS3 extends SpeakeasyBase {
    bucketName?: string;
    bucketOwner?: string;
    deliveryStatus?: DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsS3DeliveryStatus;
    enabled?: boolean;
    prefix?: string;
}
/**
 * Details about the logging options.
 */
export declare class DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogs extends SpeakeasyBase {
    cloudWatchLogs?: DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsCloudWatchLogs;
    kinesisDataFirehose?: DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsKinesisDataFirehose;
    s3?: DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogsS3;
}
/**
 * Describes logging options for an Amazon Web Services Verified Access instance.
 */
export declare class DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurations extends SpeakeasyBase {
    accessLogs?: DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurationsAccessLogs;
    verifiedAccessInstanceId?: string;
}
/**
 * Success
 */
export declare class DescribeVerifiedAccessInstanceLoggingConfigurationsResult extends SpeakeasyBase {
    loggingConfigurations?: DescribeVerifiedAccessInstanceLoggingConfigurationsResultLoggingConfigurations[];
    nextToken?: string;
}
