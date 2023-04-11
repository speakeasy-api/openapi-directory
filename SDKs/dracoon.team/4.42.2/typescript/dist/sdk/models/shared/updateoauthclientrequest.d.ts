import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Determines whether client is a confidential or public client.
 */
export declare enum UpdateOAuthClientRequestClientTypeEnum {
    Confidential = "confidential",
    Public = "public"
}
/**
 * Authorized grant types
 *
 * @remarks
 *
 * * `authorization_code`
 *
 * * `implicit`
 *
 * * `password`
 *
 * * `client_credentials`
 *
 * * `refresh_token`
 *
 *
 *
 * cf. [RFC 6749](https://tools.ietf.org/html/rfc6749)
 */
export declare enum UpdateOAuthClientRequestGrantTypesEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    Implicit = "implicit",
    Password = "password",
    RefreshToken = "refresh_token"
}
/**
 * Request model for updating an OAuth client
 */
export declare class UpdateOAuthClientRequest extends SpeakeasyBase {
    /**
     * Validity of the access token in seconds.
     */
    accessTokenValidity?: number;
    /**
     * &#128640; Since v4.22.0
     *
     * @remarks
     *
     * Validity of the approval interval in seconds.
     */
    approvalValidity?: number;
    /**
     * Name, which is shown at the client configuration and authorization.
     */
    clientName?: string;
    /**
     * Secret, which client uses at authentication.
     */
    clientSecret?: string;
    /**
     * Determines whether client is a confidential or public client.
     */
    clientType?: UpdateOAuthClientRequestClientTypeEnum;
    /**
     * Authorized grant types
     *
     * @remarks
     *
     * * `authorization_code`
     *
     * * `implicit`
     *
     * * `password`
     *
     * * `client_credentials`
     *
     * * `refresh_token`
     *
     *
     *
     * cf. [RFC 6749](https://tools.ietf.org/html/rfc6749)
     */
    grantTypes: UpdateOAuthClientRequestGrantTypesEnum;
    /**
     * Determines whether client is enabled.
     */
    isEnabled?: boolean;
    /**
     * URIs, to which a user is redirected after authorization.
     */
    redirectUris?: string[];
    /**
     * Validity of the refresh token in seconds.
     */
    refreshTokenValidity?: number;
}
