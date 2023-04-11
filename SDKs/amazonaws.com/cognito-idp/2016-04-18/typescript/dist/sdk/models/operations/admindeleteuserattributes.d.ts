import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminDeleteUserAttributesXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminDeleteUserAttributes = "AWSCognitoIdentityProviderService.AdminDeleteUserAttributes"
}
export declare class AdminDeleteUserAttributesRequest extends SpeakeasyBase {
    adminDeleteUserAttributesRequest: shared.AdminDeleteUserAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminDeleteUserAttributesXAmzTargetEnum;
}
export declare class AdminDeleteUserAttributesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminDeleteUserAttributesResponse?: Record<string, any>;
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
