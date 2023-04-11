import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateStudioRequestBody extends SpeakeasyBase {
    /**
     * The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.
     */
    adminRoleArn?: string;
    /**
     * A friendly name for the studio.
     */
    displayName?: string;
    /**
     * The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.
     */
    userRoleArn?: string;
}
export declare class UpdateStudioRequest extends SpeakeasyBase {
    requestBody: UpdateStudioRequestBody;
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
export declare class UpdateStudioResponse extends SpeakeasyBase {
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
    updateStudioResponse?: shared.UpdateStudioResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
