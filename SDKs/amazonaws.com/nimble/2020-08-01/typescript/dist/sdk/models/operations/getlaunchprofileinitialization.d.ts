import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLaunchProfileInitializationRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
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
     * The launch profile protocol versions supported by the client.
     */
    launchProfileProtocolVersions: string[];
    /**
     * The launch purpose.
     */
    launchPurpose: string;
    /**
     * The platform where this Launch Profile will be used, either Windows or Linux.
     */
    platform: string;
    /**
     * The studio ID.
     */
    studioId: string;
}
export declare class GetLaunchProfileInitializationResponse extends SpeakeasyBase {
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
    getLaunchProfileInitializationResponse?: shared.GetLaunchProfileInitializationResponse;
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
