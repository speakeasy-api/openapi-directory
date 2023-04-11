import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HttpEndpointBufferingHints } from "./httpendpointbufferinghints";
import { HttpEndpointConfiguration } from "./httpendpointconfiguration";
import { HttpEndpointRequestConfiguration } from "./httpendpointrequestconfiguration";
import { HttpEndpointRetryOptions } from "./httpendpointretryoptions";
import { HttpEndpointS3BackupModeEnum } from "./httpendpoints3backupmodeenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationUpdate } from "./s3destinationupdate";
/**
 * Updates the specified HTTP endpoint destination.
 */
export declare class HttpEndpointDestinationUpdate extends SpeakeasyBase {
    bufferingHints?: HttpEndpointBufferingHints;
    /**
     * Describes the Amazon CloudWatch logging options for your delivery stream.
     */
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    endpointConfiguration?: HttpEndpointConfiguration;
    /**
     * Describes a data processing configuration.
     */
    processingConfiguration?: ProcessingConfiguration;
    requestConfiguration?: HttpEndpointRequestConfiguration;
    retryOptions?: HttpEndpointRetryOptions;
    roleARN?: string;
    s3BackupMode?: HttpEndpointS3BackupModeEnum;
    /**
     * Describes an update for a destination in Amazon S3.
     */
    s3Update?: S3DestinationUpdate;
}
