import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Details about an identity provider.
 */
export declare class StopProductSubscriptionRequestBodyIdentityProvider extends SpeakeasyBase {
    activeDirectoryIdentityProvider?: shared.ActiveDirectoryIdentityProvider;
}
export declare class StopProductSubscriptionRequestBody extends SpeakeasyBase {
    /**
     * The domain name of the user.
     */
    domain?: string;
    /**
     * Details about an identity provider.
     */
    identityProvider: StopProductSubscriptionRequestBodyIdentityProvider;
    /**
     * The name of the user-based subscription product.
     */
    product: string;
    /**
     * The user name from the identity provider for the user.
     */
    username: string;
}
export declare class StopProductSubscriptionRequest extends SpeakeasyBase {
    requestBody: StopProductSubscriptionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopProductSubscriptionResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
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
    stopProductSubscriptionResponse?: shared.StopProductSubscriptionResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
