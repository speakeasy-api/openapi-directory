import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Always `AccessToken`. (This will change to `refresh_token` in a future release.)
 */
export declare enum AuthenticateAuthenticationGrantTypeEnum {
    AccessToken = "AccessToken"
}
/**
 * Authentication data
 */
export declare class AuthenticateAuthentication extends SpeakeasyBase {
    /**
     * The Client ID for this API Application
     */
    clientId?: string;
    /**
     * The SHA256 hash of the nonce above and the app’s Client Key. The Client Key will only be shown to you when you create the app, so don’t forget to save it somewhere safe. SECRET=( `/bin/echo -n $NONCE$CLIENT_KEY | sha256sum` ).
     */
    clientSecret?: string;
    /**
     * Always `AccessToken`. (This will change to `refresh_token` in a future release.)
     */
    grantType?: AuthenticateAuthenticationGrantTypeEnum;
    /**
     * A random non-repeating number used as a salt for the `clientSecret` below. The simplest nonce is a unix time.
     */
    nonce?: number;
    /**
     * The Refresh Token for this API Application
     */
    refreshToken?: string;
}
/**
 * Successfully authenticated
 */
export declare class AuthenticateAccessToken extends SpeakeasyBase {
    /**
     * The App Bearer Access Token you can use in further API calls.
     */
    accessToken?: string;
    /**
     * The ID of the application you are using.
     */
    apiApplicationId?: number;
    /**
     * The business ID for the business.
     */
    businessId?: number;
    /**
     * The expiry date and time for this token (ISO-8601).
     */
    expiry?: Date;
    /**
     * The permissions assigned to the Access Token as an array of strings. This provides information on what API access it is allowed. See the section on Scope below.
     */
    permissions?: string[];
}
export declare class AuthenticateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully authenticated
     */
    accessToken?: AuthenticateAccessToken;
}
