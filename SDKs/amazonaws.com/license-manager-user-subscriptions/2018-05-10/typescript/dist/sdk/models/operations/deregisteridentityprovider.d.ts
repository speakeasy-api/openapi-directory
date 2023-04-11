import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Details about an identity provider.
 */
export declare class DeregisterIdentityProviderRequestBodyIdentityProvider extends SpeakeasyBase {
    activeDirectoryIdentityProvider?: shared.ActiveDirectoryIdentityProvider;
}
export declare class DeregisterIdentityProviderRequestBody extends SpeakeasyBase {
    /**
     * Details about an identity provider.
     */
    identityProvider: DeregisterIdentityProviderRequestBodyIdentityProvider;
    /**
     * The name of the user-based subscription product.
     */
    product: string;
}
export declare class DeregisterIdentityProviderRequest extends SpeakeasyBase {
    requestBody: DeregisterIdentityProviderRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeregisterIdentityProviderResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deregisterIdentityProviderResponse?: shared.DeregisterIdentityProviderResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
