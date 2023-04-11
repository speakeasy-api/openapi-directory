import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminCreateUserXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminCreateUser = "AWSCognitoIdentityProviderService.AdminCreateUser"
}
export declare class AdminCreateUserRequest extends SpeakeasyBase {
    adminCreateUserRequest: shared.AdminCreateUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminCreateUserXAmzTargetEnum;
}
export declare class AdminCreateUserResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminCreateUserResponse?: shared.AdminCreateUserResponse;
    /**
     * CodeDeliveryFailureException
     */
    codeDeliveryFailureException?: any;
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidLambdaResponseException
     */
    invalidLambdaResponseException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidPasswordException
     */
    invalidPasswordException?: any;
    /**
     * InvalidSmsRoleAccessPolicyException
     */
    invalidSmsRoleAccessPolicyException?: any;
    /**
     * InvalidSmsRoleTrustRelationshipException
     */
    invalidSmsRoleTrustRelationshipException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * PreconditionNotMetException
     */
    preconditionNotMetException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnexpectedLambdaException
     */
    unexpectedLambdaException?: any;
    /**
     * UnsupportedUserStateException
     */
    unsupportedUserStateException?: any;
    /**
     * UserLambdaValidationException
     */
    userLambdaValidationException?: any;
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
    /**
     * UsernameExistsException
     */
    usernameExistsException?: any;
}
