import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A complex type that describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination (for CloudWatch Logs, Kinesis Firehose, or S3).
 */
export declare class CreateLoggingConfigurationRequestBodyDestinationConfiguration extends SpeakeasyBase {
    cloudWatchLogs?: shared.CloudWatchLogsDestinationConfiguration;
    firehose?: shared.FirehoseDestinationConfiguration;
    s3?: shared.S3DestinationConfiguration;
}
export declare class CreateLoggingConfigurationRequestBody extends SpeakeasyBase {
    /**
     * A complex type that describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination (for CloudWatch Logs, Kinesis Firehose, or S3).
     */
    destinationConfiguration: CreateLoggingConfigurationRequestBodyDestinationConfiguration;
    /**
     * Logging-configuration name. The value does not need to be unique.
     */
    name?: string;
    /**
     * Tags to attach to the resource. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints on tags beyond what is documented there.
     */
    tags?: Record<string, string>;
}
export declare class CreateLoggingConfigurationRequest extends SpeakeasyBase {
    requestBody: CreateLoggingConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateLoggingConfigurationResponse extends SpeakeasyBase {
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
     * Success
     */
    createLoggingConfigurationResponse?: shared.CreateLoggingConfigurationResponse;
    /**
     * PendingVerification
     */
    pendingVerification?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
