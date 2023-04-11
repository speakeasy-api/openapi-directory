import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCredentialsForIdentityXAmzTargetEnum {
    AWSCognitoIdentityServiceGetCredentialsForIdentity = "AWSCognitoIdentityService.GetCredentialsForIdentity"
}
export declare class GetCredentialsForIdentityRequest extends SpeakeasyBase {
    getCredentialsForIdentityInput: shared.GetCredentialsForIdentityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCredentialsForIdentityXAmzTargetEnum;
}
export declare class GetCredentialsForIdentityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExternalServiceException
     */
    externalServiceException?: any;
    /**
     * Success
     */
    getCredentialsForIdentityResponse?: shared.GetCredentialsForIdentityResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidIdentityPoolConfigurationException
     */
    invalidIdentityPoolConfigurationException?: any;
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
