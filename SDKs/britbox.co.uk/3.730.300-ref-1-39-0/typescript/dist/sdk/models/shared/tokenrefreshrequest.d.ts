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
export declare enum TokenRefreshRequestCookieTypeEnum {
    Session = "Session",
    Persistent = "Persistent"
}
/**
 * The token to refresh.
 */
export declare class TokenRefreshRequest extends SpeakeasyBase {
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
    cookieType?: TokenRefreshRequestCookieTypeEnum;
    /**
     * The token to refresh.
     */
    token: string;
}
