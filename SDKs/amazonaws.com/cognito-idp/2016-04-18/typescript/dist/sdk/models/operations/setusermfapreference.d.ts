import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetUserMFAPreferenceXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceSetUserMFAPreference = "AWSCognitoIdentityProviderService.SetUserMFAPreference"
}
export declare class SetUserMFAPreferenceRequest extends SpeakeasyBase {
    setUserMFAPreferenceRequest: shared.SetUserMFAPreferenceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetUserMFAPreferenceXAmzTargetEnum;
}
export declare class SetUserMFAPreferenceResponse extends SpeakeasyBase {
    contentType: string;
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
    setUserMFAPreferenceResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UserNotConfirmedException
     */
    userNotConfirmedException?: any;
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
