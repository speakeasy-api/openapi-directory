import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ConfirmForgotPasswordXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceConfirmForgotPassword = "AWSCognitoIdentityProviderService.ConfirmForgotPassword"
}
export declare class ConfirmForgotPasswordRequest extends SpeakeasyBase {
    confirmForgotPasswordRequest: shared.ConfirmForgotPasswordRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmForgotPasswordXAmzTargetEnum;
}
export declare class ConfirmForgotPasswordResponse extends SpeakeasyBase {
    /**
     * CodeMismatchException
     */
    codeMismatchException?: any;
    /**
     * Success
     */
    confirmForgotPasswordResponse?: Record<string, any>;
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
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyFailedAttemptsException
     */
    tooManyFailedAttemptsException?: any;
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
