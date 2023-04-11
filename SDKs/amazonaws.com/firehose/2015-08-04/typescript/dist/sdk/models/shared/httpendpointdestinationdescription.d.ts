import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { HttpEndpointBufferingHints } from "./httpendpointbufferinghints";
import { HttpEndpointDescription } from "./httpendpointdescription";
import { HttpEndpointRequestConfiguration } from "./httpendpointrequestconfiguration";
import { HttpEndpointRetryOptions } from "./httpendpointretryoptions";
import { HttpEndpointS3BackupModeEnum } from "./httpendpoints3backupmodeenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { S3DestinationDescription } from "./s3destinationdescription";
/**
 * Describes the HTTP endpoint destination.
 */
export declare class HttpEndpointDestinationDescription extends SpeakeasyBase {
    bufferingHints?: HttpEndpointBufferingHints;
    /**
     * Describes the Amazon CloudWatch logging options for your delivery stream.
     */
    cloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    endpointConfiguration?: HttpEndpointDescription;
    /**
     * Describes a data processing configuration.
     */
    processingConfiguration?: ProcessingConfiguration;
    requestConfiguration?: HttpEndpointRequestConfiguration;
    retryOptions?: HttpEndpointRetryOptions;
    roleARN?: string;
    s3BackupMode?: HttpEndpointS3BackupModeEnum;
    /**
     * Describes a destination in Amazon S3.
     */
    s3DestinationDescription?: S3DestinationDescription;
}
