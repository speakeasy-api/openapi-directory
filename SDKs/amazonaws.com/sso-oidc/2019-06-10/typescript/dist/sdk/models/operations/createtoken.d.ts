import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTokenRequestBody extends SpeakeasyBase {
    /**
     * The unique identifier string for each client. This value should come from the persisted result of the <a>RegisterClient</a> API.
     */
    clientId: string;
    /**
     * A secret string generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API.
     */
    clientSecret: string;
    /**
     * The authorization code received from the authorization service. This parameter is required to perform an authorization grant request to get access to a token.
     */
    code?: string;
    /**
     * Used only when calling this API for the device code grant type. This short-term code is used to identify this authentication attempt. This should come from an in-memory reference to the result of the <a>StartDeviceAuthorization</a> API.
     */
    deviceCode?: string;
    /**
     * <p>Supports grant types for the authorization code, refresh token, and device code request. For device code requests, specify the following value:</p> <p> <code>urn:ietf:params:oauth:grant-type:<i>device_code</i> </code> </p> <p>For information about how to obtain the device code, see the <a>StartDeviceAuthorization</a> topic.</p>
     */
    grantType: string;
    /**
     * The location of the application that will receive the authorization code. Users authorize the service to send the request to this location.
     */
    redirectUri?: string;
    /**
     * <p>Currently, <code>refreshToken</code> is not yet implemented and is not supported. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center OIDC API Reference</a>.</p> <p>The token used to obtain an access token in the event that the access token is invalid or expired.</p>
     */
    refreshToken?: string;
    /**
     * The list of scopes that is defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token.
     */
    scope?: string[];
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    requestBody: CreateTokenRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AuthorizationPendingException
     */
    authorizationPendingException?: any;
    contentType: string;
    /**
     * Success
     */
    createTokenResponse?: shared.CreateTokenResponse;
    /**
     * ExpiredTokenException
     */
    expiredTokenException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidClientException
     */
    invalidClientException?: any;
    /**
     * InvalidGrantException
     */
    invalidGrantException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidScopeException
     */
    invalidScopeException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SlowDownException
     */
    slowDownException?: any;
    /**
     * UnauthorizedClientException
     */
    unauthorizedClientException?: any;
    /**
     * UnsupportedGrantTypeException
     */
    unsupportedGrantTypeException?: any;
}
