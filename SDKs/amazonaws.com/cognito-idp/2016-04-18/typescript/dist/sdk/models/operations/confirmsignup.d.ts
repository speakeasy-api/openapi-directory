import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ConfirmSignUpXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceConfirmSignUp = "AWSCognitoIdentityProviderService.ConfirmSignUp"
}
export declare class ConfirmSignUpRequest extends SpeakeasyBase {
    confirmSignUpRequest: shared.ConfirmSignUpRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmSignUpXAmzTargetEnum;
}
export declare class ConfirmSignUpResponse extends SpeakeasyBase {
    /**
     * AliasExistsException
     */
    aliasExistsException?: any;
    /**
     * CodeMismatchException
     */
    codeMismatchException?: any;
    /**
     * Success
     */
    confirmSignUpResponse?: Record<string, any>;
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
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
