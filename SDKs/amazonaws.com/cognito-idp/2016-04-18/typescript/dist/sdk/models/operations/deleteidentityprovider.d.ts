import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteIdentityProviderXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceDeleteIdentityProvider = "AWSCognitoIdentityProviderService.DeleteIdentityProvider"
}
export declare class DeleteIdentityProviderRequest extends SpeakeasyBase {
    deleteIdentityProviderRequest: shared.DeleteIdentityProviderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteIdentityProviderXAmzTargetEnum;
}
export declare class DeleteIdentityProviderResponse extends SpeakeasyBase {
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
     * UnsupportedIdentityProviderException
     */
    unsupportedIdentityProviderException?: any;
}
