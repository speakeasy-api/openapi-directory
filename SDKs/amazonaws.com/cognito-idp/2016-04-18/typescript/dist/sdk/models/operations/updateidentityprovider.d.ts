import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateIdentityProviderXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceUpdateIdentityProvider = "AWSCognitoIdentityProviderService.UpdateIdentityProvider"
}
export declare class UpdateIdentityProviderRequest extends SpeakeasyBase {
    updateIdentityProviderRequest: shared.UpdateIdentityProviderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateIdentityProviderXAmzTargetEnum;
}
export declare class UpdateIdentityProviderResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedIdentityProviderException
     */
    unsupportedIdentityProviderException?: any;
    /**
     * Success
     */
    updateIdentityProviderResponse?: shared.UpdateIdentityProviderResponse;
}
