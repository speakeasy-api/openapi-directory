import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Details about an identity provider.
 */
export declare class StartProductSubscriptionRequestBodyIdentityProvider extends SpeakeasyBase {
    activeDirectoryIdentityProvider?: shared.ActiveDirectoryIdentityProvider;
}
export declare class StartProductSubscriptionRequestBody extends SpeakeasyBase {
    /**
     * The domain name of the user.
     */
    domain?: string;
    /**
     * Details about an identity provider.
     */
    identityProvider: StartProductSubscriptionRequestBodyIdentityProvider;
    /**
     * The name of the user-based subscription product.
     */
    product: string;
    /**
     * The user name from the identity provider of the user.
     */
    username: string;
}
export declare class StartProductSubscriptionRequest extends SpeakeasyBase {
    requestBody: StartProductSubscriptionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartProductSubscriptionResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    startProductSubscriptionResponse?: shared.StartProductSubscriptionResponse;
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
