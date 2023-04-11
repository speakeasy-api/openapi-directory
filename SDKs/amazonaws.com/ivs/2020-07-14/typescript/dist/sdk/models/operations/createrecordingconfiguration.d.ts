import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
 */
export declare class CreateRecordingConfigurationRequestBodyDestinationConfiguration extends SpeakeasyBase {
    s3?: shared.S3DestinationConfiguration;
}
/**
 * An object representing a configuration of thumbnails for recorded video.
 */
export declare class CreateRecordingConfigurationRequestBodyThumbnailConfiguration extends SpeakeasyBase {
    recordingMode?: shared.RecordingModeEnum;
    targetIntervalSeconds?: number;
}
export declare class CreateRecordingConfigurationRequestBody extends SpeakeasyBase {
    /**
     * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
     */
    destinationConfiguration: CreateRecordingConfigurationRequestBodyDestinationConfiguration;
    /**
     * Recording-configuration name. The value does not need to be unique.
     */
    name?: string;
    /**
     * If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together. Default: 0.
     */
    recordingReconnectWindowSeconds?: number;
    /**
     * Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
     */
    tags?: Record<string, string>;
    /**
     * An object representing a configuration of thumbnails for recorded video.
     */
    thumbnailConfiguration?: CreateRecordingConfigurationRequestBodyThumbnailConfiguration;
}
export declare class CreateRecordingConfigurationRequest extends SpeakeasyBase {
    requestBody: CreateRecordingConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRecordingConfigurationResponse extends SpeakeasyBase {
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
    createRecordingConfigurationResponse?: shared.CreateRecordingConfigurationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * PendingVerification
     */
    pendingVerification?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
