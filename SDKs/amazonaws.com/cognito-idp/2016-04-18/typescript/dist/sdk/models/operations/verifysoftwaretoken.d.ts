import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum VerifySoftwareTokenXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceVerifySoftwareToken = "AWSCognitoIdentityProviderService.VerifySoftwareToken"
}
export declare class VerifySoftwareTokenRequest extends SpeakeasyBase {
    verifySoftwareTokenRequest: shared.VerifySoftwareTokenRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: VerifySoftwareTokenXAmzTargetEnum;
}
export declare class VerifySoftwareTokenResponse extends SpeakeasyBase {
    /**
     * CodeMismatchException
     */
    codeMismatchException?: any;
    contentType: string;
    /**
     * EnableSoftwareTokenMFAException
     */
    enableSoftwareTokenMFAException?: any;
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
     * SoftwareTokenMFANotFoundException
     */
    softwareTokenMFANotFoundException?: any;
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
    verifySoftwareTokenResponse?: shared.VerifySoftwareTokenResponse;
}
