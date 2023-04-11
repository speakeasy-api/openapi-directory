import { SpeakeasyBase } from "../../../internal/utils";
/**
 * &#128640; Since v4.12.0
 *
 * @remarks
 *
 * User agent category.
 */
export declare enum OAuthAuthorizationUserAgentCategoryEnum {
    Browser = "browser",
    Native = "native",
    Unknown = "unknown"
}
/**
 * OAuth authorization
 */
export declare class OAuthAuthorization extends SpeakeasyBase {
    /**
     * ID of the OAuth client
     */
    clientId: string;
    /**
     * Name, which is shown at the client configuration and authorization.
     */
    clientName: string;
    /**
     * &#128640; Since v4.13.0
     *
     * @remarks
     *
     * Creation date of the authorization
     */
    createdAt?: Date;
    /**
     * Expiration date of the authorization
     */
    expiresAt?: Date;
    /**
     * &#128640; Since v4.12.0
     *
     * @remarks
     *
     * ID of the OAuth authorization
     */
    id?: number;
    /**
     * &#128640; Since v4.25.0
     *
     * @remarks
     *
     * Determines whether authorization matches the one from Authorization Header
     */
    isCurrentAuthorization?: boolean;
    /**
     * &#128640; Since v4.12.0
     *
     * @remarks
     *
     * Determines whether client is a standard client.
     */
    isStandard?: boolean;
    /**
     * &#128640; Since v4.13.0
     *
     * @remarks
     *
     * Usage date of the authorization
     *
     * (Time of last usage.)
     */
    usedAt?: Date;
    /**
     * &#128640; Since v4.12.0
     *
     * @remarks
     *
     * User agent category.
     */
    userAgentCategory: OAuthAuthorizationUserAgentCategoryEnum;
    /**
     * &#128640; Since v4.12.0
     *
     * @remarks
     *
     * User agent info.
     */
    userAgentInfo?: string;
    /**
     * &#128640; Since v4.12.0
     *
     * @remarks
     *
     * User agent OS.
     */
    userAgentOs?: string;
    /**
     * &#128640; Since v4.12.0
     *
     * @remarks
     *
     * User agent type.
     */
    userAgentType?: string;
}
