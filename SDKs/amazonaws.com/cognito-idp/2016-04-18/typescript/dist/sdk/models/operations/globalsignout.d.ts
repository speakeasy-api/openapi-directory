import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GlobalSignOutXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceGlobalSignOut = "AWSCognitoIdentityProviderService.GlobalSignOut"
}
export declare class GlobalSignOutRequest extends SpeakeasyBase {
    globalSignOutRequest: shared.GlobalSignOutRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GlobalSignOutXAmzTargetEnum;
}
export declare class GlobalSignOutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * Success
     */
    globalSignOutResponse?: Record<string, any>;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
     * UserNotConfirmedException
     */
    userNotConfirmedException?: any;
}
