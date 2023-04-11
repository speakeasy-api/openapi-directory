import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum {
    AWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentity = "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity"
}
export declare class GetOpenIdTokenForDeveloperIdentityRequest extends SpeakeasyBase {
    getOpenIdTokenForDeveloperIdentityInput: shared.GetOpenIdTokenForDeveloperIdentityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum;
}
export declare class GetOpenIdTokenForDeveloperIdentityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DeveloperUserAlreadyRegisteredException
     */
    developerUserAlreadyRegisteredException?: any;
    /**
     * Success
     */
    getOpenIdTokenForDeveloperIdentityResponse?: shared.GetOpenIdTokenForDeveloperIdentityResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
