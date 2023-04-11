import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUserAttributeVerificationCodeXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceGetUserAttributeVerificationCode = "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode"
}
export declare class GetUserAttributeVerificationCodeRequest extends SpeakeasyBase {
    getUserAttributeVerificationCodeRequest: shared.GetUserAttributeVerificationCodeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUserAttributeVerificationCodeXAmzTargetEnum;
}
export declare class GetUserAttributeVerificationCodeResponse extends SpeakeasyBase {
    /**
     * CodeDeliveryFailureException
     */
    codeDeliveryFailureException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * Success
     */
    getUserAttributeVerificationCodeResponse?: shared.GetUserAttributeVerificationCodeResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidEmailRoleAccessPolicyException
     */
    invalidEmailRoleAccessPolicyException?: any;
    /**
     * InvalidLambdaResponseException
     */
    invalidLambdaResponseException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidSmsRoleAccessPolicyException
     */
    invalidSmsRoleAccessPolicyException?: any;
    /**
     * InvalidSmsRoleTrustRelationshipException
     */
    invalidSmsRoleTrustRelationshipException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
