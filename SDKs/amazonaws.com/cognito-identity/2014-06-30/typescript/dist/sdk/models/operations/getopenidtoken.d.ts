import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOpenIdTokenXAmzTargetEnum {
    AWSCognitoIdentityServiceGetOpenIdToken = "AWSCognitoIdentityService.GetOpenIdToken"
}
export declare class GetOpenIdTokenRequest extends SpeakeasyBase {
    getOpenIdTokenInput: shared.GetOpenIdTokenInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOpenIdTokenXAmzTargetEnum;
}
export declare class GetOpenIdTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExternalServiceException
     */
    externalServiceException?: any;
    /**
     * Success
     */
    getOpenIdTokenResponse?: shared.GetOpenIdTokenResponse;
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
