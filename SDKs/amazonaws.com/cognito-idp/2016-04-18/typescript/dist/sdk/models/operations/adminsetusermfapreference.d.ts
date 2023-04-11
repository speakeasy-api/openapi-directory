import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminSetUserMFAPreferenceXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminSetUserMFAPreference = "AWSCognitoIdentityProviderService.AdminSetUserMFAPreference"
}
export declare class AdminSetUserMFAPreferenceRequest extends SpeakeasyBase {
    adminSetUserMFAPreferenceRequest: shared.AdminSetUserMFAPreferenceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminSetUserMFAPreferenceXAmzTargetEnum;
}
export declare class AdminSetUserMFAPreferenceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminSetUserMFAPreferenceResponse?: Record<string, any>;
    contentType: string;
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
     * UserNotConfirmedException
     */
    userNotConfirmedException?: any;
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
