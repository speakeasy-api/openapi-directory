import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum VerifyUserAttributeXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceVerifyUserAttribute = "AWSCognitoIdentityProviderService.VerifyUserAttribute"
}
export declare class VerifyUserAttributeRequest extends SpeakeasyBase {
    verifyUserAttributeRequest: shared.VerifyUserAttributeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: VerifyUserAttributeXAmzTargetEnum;
}
export declare class VerifyUserAttributeResponse extends SpeakeasyBase {
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
     * PasswordResetRequiredException
     */
    passwordResetRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UserNotConfirmedException
     */
    userNotConfirmedException?: any;
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
    /**
     * Success
     */
    verifyUserAttributeResponse?: Record<string, any>;
}
