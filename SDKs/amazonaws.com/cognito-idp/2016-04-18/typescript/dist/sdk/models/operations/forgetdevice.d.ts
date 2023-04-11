import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ForgetDeviceXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceForgetDevice = "AWSCognitoIdentityProviderService.ForgetDevice"
}
export declare class ForgetDeviceRequest extends SpeakeasyBase {
    forgetDeviceRequest: shared.ForgetDeviceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ForgetDeviceXAmzTargetEnum;
}
export declare class ForgetDeviceResponse extends SpeakeasyBase {
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
     * InvalidUserPoolConfigurationException
     */
    invalidUserPoolConfigurationException?: any;
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
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
