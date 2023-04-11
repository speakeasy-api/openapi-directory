import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminRespondToAuthChallengeXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminRespondToAuthChallenge = "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge"
}
export declare class AdminRespondToAuthChallengeRequest extends SpeakeasyBase {
    adminRespondToAuthChallengeRequest: shared.AdminRespondToAuthChallengeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminRespondToAuthChallengeXAmzTargetEnum;
}
export declare class AdminRespondToAuthChallengeResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminRespondToAuthChallengeResponse?: shared.AdminRespondToAuthChallengeResponse;
    /**
     * AliasExistsException
     */
    aliasExistsException?: any;
    /**
     * CodeMismatchException
     */
    codeMismatchException?: any;
    contentType: string;
    /**
     * ExpiredCodeException
     */
    expiredCodeException?: any;
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
     * InvalidUserPoolConfigurationException
     */
    invalidUserPoolConfigurationException?: any;
    /**
     * MFAMethodNotFoundException
     */
    mfaMethodNotFoundException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * PasswordResetRequiredException
     */
    passwordResetRequiredException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SoftwareTokenMFANotFoundException
     */
    softwareTokenMFANotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnexpectedLambdaException
     */
    unexpectedLambdaException?: any;
    /**
     * UserLambdaValidationException
     */
    userLambdaValidationException?: any;
    /**
     * UserNotConfirmedException
     */
    userNotConfirmedException?: any;
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
