import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A complex type that describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination (for CloudWatch Logs, Kinesis Firehose, or S3).
 */
export declare class UpdateLoggingConfigurationRequestBodyDestinationConfiguration extends SpeakeasyBase {
    cloudWatchLogs?: shared.CloudWatchLogsDestinationConfiguration;
    firehose?: shared.FirehoseDestinationConfiguration;
    s3?: shared.S3DestinationConfiguration;
}
export declare class UpdateLoggingConfigurationRequestBody extends SpeakeasyBase {
    /**
     * A complex type that describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination (for CloudWatch Logs, Kinesis Firehose, or S3).
     */
    destinationConfiguration?: UpdateLoggingConfigurationRequestBodyDestinationConfiguration;
    /**
     * Identifier of the logging configuration to be updated.
     */
    identifier: string;
    /**
     * Logging-configuration name. The value does not need to be unique.
     */
    name?: string;
}
export declare class UpdateLoggingConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateLoggingConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateLoggingConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * PendingVerification
     */
    pendingVerification?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateLoggingConfigurationResponse?: shared.UpdateLoggingConfigurationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
