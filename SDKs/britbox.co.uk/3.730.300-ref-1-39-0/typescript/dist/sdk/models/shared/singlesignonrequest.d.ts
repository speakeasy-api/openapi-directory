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
export declare enum SingleSignOnRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}
/**
 * The third party single-sign-on provider.
 */
export declare enum SingleSignOnRequestProviderEnum {
    Facebook = "Facebook"
}
export declare enum SingleSignOnRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings",
    Playback = "Playback"
}
/**
 * A single-sign-on request.
 */
export declare class SingleSignOnRequest extends SpeakeasyBase {
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
    cookieType?: SingleSignOnRequestCookieTypeEnum;
    /**
     * When a user attempts to sign in using single-sign-on, we may find an account created
     *
     * @remarks
     * previously through the manual sign up flow with the same email. If this is the
     * case then an option to link the two accounts can be made available.
     *
     * If this flag is set to true then accounts will be linked automatically.
     *
     * If this flag is not set or set to false and an existing account is found
     * then an http 401 with subcode `6001` will be returned. Client apps can then present the
     * option to link the accounts. If the user decides to accept, then the same call
     * can be repeated with this flag set to true.
     *
     */
    linkAccounts?: boolean;
    /**
     * The third party single-sign-on provider.
     */
    provider: SingleSignOnRequestProviderEnum;
    /**
     * The scope(s) of the tokens required.
     *
     * @remarks
     * For each scope listed an Account and Profile token of that scope will be returned.
     *
     */
    scopes?: SingleSignOnRequestScopesEnum[];
    /**
     * A token from the third party single-sign-on provider e.g. an identity token from Facebook.
     */
    token: string;
}
