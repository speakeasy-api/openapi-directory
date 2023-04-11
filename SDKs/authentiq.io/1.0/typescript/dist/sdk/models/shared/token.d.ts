import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful token response
 *
 * @remarks
 *
 */
export declare class Token extends SpeakeasyBase {
    /**
     * The access token issued by the authorization server.
     */
    accessToken?: string;
    /**
     * The time the access token will expire in seconds since epoch.
     */
    expiresAt?: number;
    /**
     * The lifetime in seconds of the access token.
     */
    expiresIn?: number;
    /**
     * ID Token value associated with the authenticated session.
     */
    idToken?: string;
    /**
     * The refresh token issued to the client, if any.
     */
    refreshToken?: string;
    /**
     * The scope of the granted tokens.
     */
    scope?: string;
    tokenType: string;
}
