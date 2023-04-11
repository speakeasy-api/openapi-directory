import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RespondToAuthChallengeXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceRespondToAuthChallenge = "AWSCognitoIdentityProviderService.RespondToAuthChallenge"
}
export declare class RespondToAuthChallengeRequest extends SpeakeasyBase {
    respondToAuthChallengeRequest: shared.RespondToAuthChallengeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RespondToAuthChallengeXAmzTargetEnum;
}
export declare class RespondToAuthChallengeResponse extends SpeakeasyBase {
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
     * ForbiddenException
     */
    forbiddenException?: any;
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
    /**
     * Success
     */
    respondToAuthChallengeResponse?: shared.RespondToAuthChallengeResponse;
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
