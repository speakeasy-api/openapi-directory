import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If you specify a cookie type then a content filter cookie will be returned
 *
 * @remarks
 * along with the token(s). This is only intended for web based clients which
 * need to pass the cookies to a server to render a page based on the user's
 * content filters e.g subscription code.
 *
 * If type `Session` the cookie will be session based.
 * If type `Persistent` the cookie will have a medium term lifespan.
 * If undefined no cookies will be set.
 *
 */
export declare enum AccountTokenRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}
export declare enum AccountTokenRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings",
    Playback = "Playback"
}
/**
 * The account credentials with requested token scope.
 */
export declare class AccountTokenRequest extends SpeakeasyBase {
    /**
     * If you specify a cookie type then a content filter cookie will be returned
     *
     * @remarks
     * along with the token(s). This is only intended for web based clients which
     * need to pass the cookies to a server to render a page based on the user's
     * content filters e.g subscription code.
     *
     * If type `Session` the cookie will be session based.
     * If type `Persistent` the cookie will have a medium term lifespan.
     * If undefined no cookies will be set.
     *
     */
    cookieType?: AccountTokenRequestCookieTypeEnum;
    /**
     * The email associated with the account.
     */
    email: string;
    /**
     * The password associated with the account.
     */
    password: string;
    /**
     * The scope(s) of the tokens required.
     *
     * @remarks
     * For each scope listed an Account and Profile token of that scope will be returned
     *
     */
    scopes: AccountTokenRequestScopesEnum[];
}
