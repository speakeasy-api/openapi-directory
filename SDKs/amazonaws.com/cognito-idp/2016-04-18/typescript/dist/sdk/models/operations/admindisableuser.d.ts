import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminDisableUserXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminDisableUser = "AWSCognitoIdentityProviderService.AdminDisableUser"
}
export declare class AdminDisableUserRequest extends SpeakeasyBase {
    adminDisableUserRequest: shared.AdminDisableUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminDisableUserXAmzTargetEnum;
}
export declare class AdminDisableUserResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminDisableUserResponse?: Record<string, any>;
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
