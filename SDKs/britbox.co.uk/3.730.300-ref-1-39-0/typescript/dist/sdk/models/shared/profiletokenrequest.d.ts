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
export declare enum ProfileTokenRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}
export declare enum ProfileTokenRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings"
}
/**
 * The profile id and optional pin with required token scope.
 */
export declare class ProfileTokenRequest extends SpeakeasyBase {
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
    cookieType?: ProfileTokenRequestCookieTypeEnum;
    /**
     * The pin associated with this profile, if any.
     */
    pin?: string;
    /**
     * The id of the profile the token should grant access rights to.
     */
    profileId: string;
    /**
     * The scope(s) of the token(s) required.
     */
    scopes: ProfileTokenRequestScopesEnum[];
}
