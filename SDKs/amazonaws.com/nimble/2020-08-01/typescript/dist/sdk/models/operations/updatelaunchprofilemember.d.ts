import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The persona.
 */
export declare enum UpdateLaunchProfileMemberRequestBodyPersonaEnum {
    User = "USER"
}
export declare class UpdateLaunchProfileMemberRequestBody extends SpeakeasyBase {
    /**
     * The persona.
     */
    persona: UpdateLaunchProfileMemberRequestBodyPersonaEnum;
}
export declare class UpdateLaunchProfileMemberRequest extends SpeakeasyBase {
    requestBody: UpdateLaunchProfileMemberRequestBody;
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
     * The principal ID. This currently supports a IAM Identity Center UserId.
     */
    principalId: string;
    /**
     * The studio ID.
     */
    studioId: string;
}
export declare class UpdateLaunchProfileMemberResponse extends SpeakeasyBase {
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
    updateLaunchProfileMemberResponse?: shared.UpdateLaunchProfileMemberResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
