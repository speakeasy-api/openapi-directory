import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configuration for streaming workstations created using this launch profile.
 */
export declare class UpdateLaunchProfileRequestBodyStreamConfiguration extends SpeakeasyBase {
    automaticTerminationMode?: shared.AutomaticTerminationModeEnum;
    clipboardMode?: shared.StreamingClipboardModeEnum;
    ec2InstanceTypes?: shared.StreamingInstanceTypeEnum[];
    maxSessionLengthInMinutes?: number;
    maxStoppedSessionLengthInMinutes?: number;
    sessionBackup?: shared.StreamConfigurationSessionBackup;
    sessionPersistenceMode?: shared.SessionPersistenceModeEnum;
    sessionStorage?: shared.StreamConfigurationSessionStorage;
    streamingImageIds?: string[];
    volumeConfiguration?: shared.VolumeConfiguration;
}
export declare class UpdateLaunchProfileRequestBody extends SpeakeasyBase {
    /**
     * A human-readable description of the launch profile.
     */
    description?: string;
    /**
     * The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".
     */
    launchProfileProtocolVersions?: string[];
    /**
     * The name for the launch profile.
     */
    name?: string;
    /**
     * Configuration for streaming workstations created using this launch profile.
     */
    streamConfiguration?: UpdateLaunchProfileRequestBodyStreamConfiguration;
    /**
     * Unique identifiers for a collection of studio components that can be used with this launch profile.
     */
    studioComponentIds?: string[];
}
export declare class UpdateLaunchProfileRequest extends SpeakeasyBase {
    requestBody: UpdateLaunchProfileRequestBody;
    xAmzAlgorithm?: string;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.
     */
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the launch profile used to control access from the streaming session.
     */
    launchProfileId: string;
    /**
     * The studio ID.
     */
    studioId: string;
}
export declare class UpdateLaunchProfileResponse extends SpeakeasyBase {
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
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateLaunchProfileResponse?: shared.UpdateLaunchProfileResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
