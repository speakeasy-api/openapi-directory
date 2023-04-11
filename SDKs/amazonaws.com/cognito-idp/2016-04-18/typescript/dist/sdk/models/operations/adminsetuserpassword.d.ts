import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminSetUserPasswordXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminSetUserPassword = "AWSCognitoIdentityProviderService.AdminSetUserPassword"
}
export declare class AdminSetUserPasswordRequest extends SpeakeasyBase {
    adminSetUserPasswordRequest: shared.AdminSetUserPasswordRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminSetUserPasswordXAmzTargetEnum;
}
export declare class AdminSetUserPasswordResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminSetUserPasswordResponse?: Record<string, any>;
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
     * InvalidPasswordException
     */
    invalidPasswordException?: any;
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
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
