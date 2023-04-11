import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User Authentication Data
 */
export declare class UserAuthData extends SpeakeasyBase {
    /**
     * ID of the user's Active Directory.
     */
    adConfigId?: number;
    /**
     * User login name
     */
    login?: string;
    /**
     * Authentication method
     *
     * @remarks
     *
     *
     *
     * Authentication methods:
     *
     * * `basic`
     *
     * * `active_directory`
     *
     * * `radius`
     *
     * * `openid`
     */
    method: string;
    /**
     * Determines whether user has to change his / her password
     *
     * @remarks
     *
     * * default: `true` for `basic` auth type
     *
     * * default: `false` for `active_directory`, `openid` and `radius` auth types
     */
    mustChangePassword?: boolean;
    /**
     * ID of the user's OIDC provider.
     */
    oidConfigId?: number;
    /**
     * Password (only relevant for `basic` authentication type)
     *
     * @remarks
     *
     * *NOT* your Active Directory, OpenID or RADIUS password!
     */
    password?: string;
}
