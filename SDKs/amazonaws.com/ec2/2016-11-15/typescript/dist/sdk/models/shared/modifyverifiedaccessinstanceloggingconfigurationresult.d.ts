import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status code.
 */
export declare enum ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsCloudWatchLogsDeliveryStatusCodeEnum {
    Success = "success",
    Failed = "failed"
}
/**
 * The delivery status for access logs.
 */
export declare class ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsCloudWatchLogsDeliveryStatus extends SpeakeasyBase {
    code?: ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsCloudWatchLogsDeliveryStatusCodeEnum;
    message?: string;
}
/**
 * CloudWatch Logs logging destination.
 */
export declare class ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsCloudWatchLogs extends SpeakeasyBase {
    deliveryStatus?: ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsCloudWatchLogsDeliveryStatus;
    enabled?: boolean;
    logGroup?: string;
}
/**
 * The status code.
 */
export declare enum ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsKinesisDataFirehoseDeliveryStatusCodeEnum {
    Success = "success",
    Failed = "failed"
}
/**
 * The delivery status.
 */
export declare class ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsKinesisDataFirehoseDeliveryStatus extends SpeakeasyBase {
    code?: ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsKinesisDataFirehoseDeliveryStatusCodeEnum;
    message?: string;
}
/**
 * Kinesis logging destination.
 */
export declare class ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsKinesisDataFirehose extends SpeakeasyBase {
    deliveryStatus?: ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsKinesisDataFirehoseDeliveryStatus;
    deliveryStream?: string;
    enabled?: boolean;
}
/**
 * The status code.
 */
export declare enum ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsS3DeliveryStatusCodeEnum {
    Success = "success",
    Failed = "failed"
}
/**
 * The delivery status.
 */
export declare class ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsS3DeliveryStatus extends SpeakeasyBase {
    code?: ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsS3DeliveryStatusCodeEnum;
    message?: string;
}
/**
 * Amazon S3 logging options.
 */
export declare class ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsS3 extends SpeakeasyBase {
    bucketName?: string;
    bucketOwner?: string;
    deliveryStatus?: ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsS3DeliveryStatus;
    enabled?: boolean;
    prefix?: string;
}
/**
 * Details about the logging options.
 */
export declare class ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogs extends SpeakeasyBase {
    cloudWatchLogs?: ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsCloudWatchLogs;
    kinesisDataFirehose?: ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsKinesisDataFirehose;
    s3?: ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogsS3;
}
/**
 * The logging configuration for Amazon Web Services Verified Access instance.
 */
export declare class ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfiguration extends SpeakeasyBase {
    accessLogs?: ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfigurationAccessLogs;
    verifiedAccessInstanceId?: string;
}
/**
 * Success
 */
export declare class ModifyVerifiedAccessInstanceLoggingConfigurationResult extends SpeakeasyBase {
    loggingConfiguration?: ModifyVerifiedAccessInstanceLoggingConfigurationResultLoggingConfiguration;
}
