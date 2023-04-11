import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminEnableUserXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminEnableUser = "AWSCognitoIdentityProviderService.AdminEnableUser"
}
export declare class AdminEnableUserRequest extends SpeakeasyBase {
    adminEnableUserRequest: shared.AdminEnableUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminEnableUserXAmzTargetEnum;
}
export declare class AdminEnableUserResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminEnableUserResponse?: Record<string, any>;
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
