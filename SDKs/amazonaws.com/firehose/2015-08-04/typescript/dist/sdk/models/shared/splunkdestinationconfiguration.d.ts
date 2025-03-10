import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HECEndpointTypeEnum } from "./hecendpointtypeenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { SplunkRetryOptions } from "./splunkretryoptions";
import { SplunkS3BackupModeEnum } from "./splunks3backupmodeenum";
/**
 * Describes the configuration of a destination in Splunk.
 */
export declare class SplunkDestinationConfiguration extends SpeakeasyBase {
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    hecAcknowledgmentTimeoutInSeconds?: number;
    hecEndpoint: string;
    hecEndpointType: HECEndpointTypeEnum;
    hecToken: string;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: SplunkRetryOptions;
    s3BackupMode?: SplunkS3BackupModeEnum;
    s3Configuration: S3DestinationConfiguration;
}
