import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminConfirmSignUpXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminConfirmSignUp = "AWSCognitoIdentityProviderService.AdminConfirmSignUp"
}
export declare class AdminConfirmSignUpRequest extends SpeakeasyBase {
    adminConfirmSignUpRequest: shared.AdminConfirmSignUpRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminConfirmSignUpXAmzTargetEnum;
}
export declare class AdminConfirmSignUpResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminConfirmSignUpResponse?: Record<string, any>;
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
