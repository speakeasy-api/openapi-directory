import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configuration for streaming workstations created using this launch profile.
 */
export declare class CreateLaunchProfileRequestBodyStreamConfiguration extends SpeakeasyBase {
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
export declare class CreateLaunchProfileRequestBody extends SpeakeasyBase {
    /**
     * A human-readable description of the launch profile.
     */
    description?: string;
    /**
     * Specifies the IDs of the EC2 subnets where streaming sessions will be accessible from. These subnets must support the specified instance types.
     */
    ec2SubnetIds: string[];
    /**
     * The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".
     */
    launchProfileProtocolVersions: string[];
    /**
     * The name for the launch profile.
     */
    name: string;
    /**
     * Configuration for streaming workstations created using this launch profile.
     */
    streamConfiguration: CreateLaunchProfileRequestBodyStreamConfiguration;
    /**
     * Unique identifiers for a collection of studio components that can be used with this launch profile.
     */
    studioComponentIds: string[];
    /**
     * A collection of labels, in the form of key-value pairs, that apply to this resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateLaunchProfileRequest extends SpeakeasyBase {
    requestBody: CreateLaunchProfileRequestBody;
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
     * The studio ID.
     */
    studioId: string;
}
export declare class CreateLaunchProfileResponse extends SpeakeasyBase {
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
    createLaunchProfileResponse?: shared.CreateLaunchProfileResponse;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
