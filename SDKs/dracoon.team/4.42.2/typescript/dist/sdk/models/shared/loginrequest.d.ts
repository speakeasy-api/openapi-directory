import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Authentication methods
 */
export declare enum LoginRequestAuthTypeEnum {
    Basic = "basic",
    ActiveDirectory = "active_directory",
    Radius = "radius"
}
/**
 * User credentials
 */
export declare class LoginRequest extends SpeakeasyBase {
    /**
     * Authentication methods
     */
    authType?: LoginRequestAuthTypeEnum;
    /**
     * &#128679; Deprecated since v4.7.0
     *
     * @remarks
     *
     * Language ID or ISO 639-1 code
     */
    language?: string;
    /**
     * &#128679; Deprecated since v4.7.0
     *
     * @remarks
     *
     * User login name
     */
    login?: string;
    /**
     * Password
     */
    password: string;
    /**
     * For RADIUS Access-Challenge
     *
     * @remarks
     *
     * If a `replyState` is returned, it must be included as `state` in the following request.
     */
    state?: string;
    /**
     * RADIUS Token
     */
    token?: string;
    /**
     * &#128640; Since v4.13.0
     *
     * @remarks
     *
     * Username
     */
    userName?: string;
}
