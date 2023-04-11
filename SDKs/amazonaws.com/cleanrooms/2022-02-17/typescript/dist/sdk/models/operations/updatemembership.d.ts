import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An indicator as to whether query logging has been enabled or disabled for the collaboration.
 */
export declare enum UpdateMembershipRequestBodyQueryLogStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateMembershipRequestBody extends SpeakeasyBase {
    /**
     * An indicator as to whether query logging has been enabled or disabled for the collaboration.
     */
    queryLogStatus?: UpdateMembershipRequestBodyQueryLogStatusEnum;
}
export declare class UpdateMembershipRequest extends SpeakeasyBase {
    requestBody: UpdateMembershipRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the membership.
     */
    membershipIdentifier: string;
}
export declare class UpdateMembershipResponse extends SpeakeasyBase {
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateMembershipOutput?: shared.UpdateMembershipOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
