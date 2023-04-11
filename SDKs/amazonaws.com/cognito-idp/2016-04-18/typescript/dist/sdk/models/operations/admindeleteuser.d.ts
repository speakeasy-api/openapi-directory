import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminDeleteUserXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminDeleteUser = "AWSCognitoIdentityProviderService.AdminDeleteUser"
}
export declare class AdminDeleteUserRequest extends SpeakeasyBase {
    adminDeleteUserRequest: shared.AdminDeleteUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminDeleteUserXAmzTargetEnum;
}
export declare class AdminDeleteUserResponse extends SpeakeasyBase {
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
