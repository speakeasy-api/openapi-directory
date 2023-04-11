import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HECEndpointTypeEnum } from "./hecendpointtypeenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationUpdate } from "./s3destinationupdate";
import { SplunkRetryOptions } from "./splunkretryoptions";
import { SplunkS3BackupModeEnum } from "./splunks3backupmodeenum";
/**
 * Describes an update for a destination in Splunk.
 */
export declare class SplunkDestinationUpdate extends SpeakeasyBase {
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    hecAcknowledgmentTimeoutInSeconds?: number;
    hecEndpoint?: string;
    hecEndpointType?: HECEndpointTypeEnum;
    hecToken?: string;
    processingConfiguration?: ProcessingConfiguration;
    retryOptions?: SplunkRetryOptions;
    s3BackupMode?: SplunkS3BackupModeEnum;
    s3Update?: S3DestinationUpdate;
}
