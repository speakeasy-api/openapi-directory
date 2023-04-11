import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminDisableProviderForUserXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminDisableProviderForUser = "AWSCognitoIdentityProviderService.AdminDisableProviderForUser"
}
export declare class AdminDisableProviderForUserRequest extends SpeakeasyBase {
    adminDisableProviderForUserRequest: shared.AdminDisableProviderForUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminDisableProviderForUserXAmzTargetEnum;
}
export declare class AdminDisableProviderForUserResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminDisableProviderForUserResponse?: Record<string, any>;
    /**
     * AliasExistsException
     */
    aliasExistsException?: any;
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
