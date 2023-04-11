import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminUserGlobalSignOutXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminUserGlobalSignOut = "AWSCognitoIdentityProviderService.AdminUserGlobalSignOut"
}
export declare class AdminUserGlobalSignOutRequest extends SpeakeasyBase {
    adminUserGlobalSignOutRequest: shared.AdminUserGlobalSignOutRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminUserGlobalSignOutXAmzTargetEnum;
}
export declare class AdminUserGlobalSignOutResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminUserGlobalSignOutResponse?: Record<string, any>;
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
