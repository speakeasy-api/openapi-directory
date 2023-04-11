import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An indicator as to whether query logging has been enabled or disabled for the collaboration.
 */
export declare enum CreateMembershipRequestBodyQueryLogStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class CreateMembershipRequestBody extends SpeakeasyBase {
    /**
     * The unique ID for the associated collaboration.
     */
    collaborationIdentifier: string;
    /**
     * An indicator as to whether query logging has been enabled or disabled for the collaboration.
     */
    queryLogStatus: CreateMembershipRequestBodyQueryLogStatusEnum;
    /**
     * Map of tags assigned to a resource
     */
    tags?: Record<string, string>;
}
export declare class CreateMembershipRequest extends SpeakeasyBase {
    requestBody: CreateMembershipRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMembershipResponse extends SpeakeasyBase {
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
    createMembershipOutput?: shared.CreateMembershipOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
