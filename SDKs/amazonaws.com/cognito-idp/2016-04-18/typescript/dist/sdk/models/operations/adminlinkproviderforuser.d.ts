import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminLinkProviderForUserXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminLinkProviderForUser = "AWSCognitoIdentityProviderService.AdminLinkProviderForUser"
}
export declare class AdminLinkProviderForUserRequest extends SpeakeasyBase {
    adminLinkProviderForUserRequest: shared.AdminLinkProviderForUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminLinkProviderForUserXAmzTargetEnum;
}
export declare class AdminLinkProviderForUserResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminLinkProviderForUserResponse?: Record<string, any>;
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
     * LimitExceededException
     */
    limitExceededException?: any;
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
