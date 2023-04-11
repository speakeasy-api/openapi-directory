import { SpeakeasyBase } from "../../../internal/utils";
/**
 * &#128640; Since v4.11.0
 *
 * @remarks
 *
 * Flow, which is used at authentication
 */
export declare enum UpdateOpenIdIdpConfigRequestFlowEnum {
    AuthorizationCode = "authorization_code",
    Hybrid = "hybrid"
}
/**
 * &#128640; Since v4.23.0
 *
 * @remarks
 *
 * Source, which is used to get user information at the import or update of a user.
 */
export declare enum UpdateOpenIdIdpConfigRequestUserInfoSourceEnum {
    UserInfoEndpoint = "user_info_endpoint",
    IdToken = "id_token"
}
/**
 * Request model for updating an OpenID Connect IDP configuration
 */
export declare class UpdateOpenIdIdpConfigRequest extends SpeakeasyBase {
    /**
     * URL of the authorization endpoint
     */
    authorizationEndPointUrl?: string;
    /**
     * ID of the OpenID client
     */
    clientId?: string;
    /**
     * Secret, which client uses at authentication.
     */
    clientSecret?: string;
    /**
     * Name of the claim which is used for the user mapping fallback.
     */
    fallbackMappingClaim?: string;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Flow, which is used at authentication
     */
    flow?: UpdateOpenIdIdpConfigRequestFlowEnum;
    /**
     * Issuer identifier of the IDP
     *
     * @remarks
     *
     * The value is a case sensitive URL.
     */
    issuer?: string;
    /**
     * URL of the JWKS endpoint
     */
    jwksEndPointUrl?: string;
    /**
     * Name of the claim which is used for the user mapping.
     */
    mappingClaim?: string;
    /**
     * Name of the IDP
     */
    name?: string;
    /**
     * PKCE code challenge method.
     *
     * @remarks
     *
     * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
     */
    pkceChallengeMethod?: string;
    /**
     * Determines whether PKCE is enabled.
     *
     * @remarks
     *
     * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
     */
    pkceEnabled?: boolean;
    /**
     * URIs, to which a user is redirected after authorization.
     */
    redirectUris?: string[];
    /**
     * Set `true` to reset `fallbackMappingClaim`.
     */
    resetFallbackMappingClaim?: boolean;
    /**
     * List of requested scopes
     *
     * @remarks
     *
     * Usually `openid` and the names of the requested claims.
     */
    scopes?: string[];
    /**
     * URL of the token endpoint
     */
    tokenEndPointUrl?: string;
    /**
     * Determines if a DRACOON account is automatically created for a new user
     *
     * @remarks
     *
     * who successfully logs on with his / her AD / IDP account.
     */
    userImportEnabled?: boolean;
    /**
     * User group that is assigned to users who are created by automatic import.
     *
     * @remarks
     *
     * Reset with `0`
     */
    userImportGroup?: number;
    /**
     * URL of the user info endpoint
     */
    userInfoEndPointUrl?: string;
    /**
     * &#128640; Since v4.23.0
     *
     * @remarks
     *
     * Source, which is used to get user information at the import or update of a user.
     */
    userInfoSource?: UpdateOpenIdIdpConfigRequestUserInfoSourceEnum;
    /**
     * URL of the user management UI.
     *
     * @remarks
     *
     * Use empty string to remove.
     */
    userManagementUrl?: string;
    /**
     * Determines if the DRACOON account is updated with data from AD / IDP.
     *
     * @remarks
     *
     * For OpenID Connect, the scopes `email` and `profile` are needed.
     */
    userUpdateEnabled?: boolean;
}
