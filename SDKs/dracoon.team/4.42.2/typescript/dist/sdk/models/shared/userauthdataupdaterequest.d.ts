import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User Authentication Data Update Request
 */
export declare class UserAuthDataUpdateRequest extends SpeakeasyBase {
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
    method?: string;
    /**
     * ID of the user's OIDC provider.
     */
    oidConfigId?: number;
}
