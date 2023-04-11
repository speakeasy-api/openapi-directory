import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminGetUserXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminGetUser = "AWSCognitoIdentityProviderService.AdminGetUser"
}
export declare class AdminGetUserRequest extends SpeakeasyBase {
    adminGetUserRequest: shared.AdminGetUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminGetUserXAmzTargetEnum;
}
export declare class AdminGetUserResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminGetUserResponse?: shared.AdminGetUserResponse;
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
