import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Details about an identity provider.
 */
export declare class DisassociateUserRequestBodyIdentityProvider extends SpeakeasyBase {
    activeDirectoryIdentityProvider?: shared.ActiveDirectoryIdentityProvider;
}
export declare class DisassociateUserRequestBody extends SpeakeasyBase {
    /**
     * The domain name of the user.
     */
    domain?: string;
    /**
     * Details about an identity provider.
     */
    identityProvider: DisassociateUserRequestBodyIdentityProvider;
    /**
     * The ID of the EC2 instance, which provides user-based subscriptions.
     */
    instanceId: string;
    /**
     * The user name from the identity provider for the user.
     */
    username: string;
}
export declare class DisassociateUserRequest extends SpeakeasyBase {
    requestBody: DisassociateUserRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateUserResponse extends SpeakeasyBase {
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
    disassociateUserResponse?: shared.DisassociateUserResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
