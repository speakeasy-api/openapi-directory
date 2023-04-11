import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User lockout information
 */
export declare class UserLockout extends SpeakeasyBase {
    /**
     * Determines whether user lockout is enabled
     */
    enabled: boolean;
    /**
     * Amount of minutes a user has to wait to make another login attempt after `maxNumberOfLoginFailures` has been exceeded
     */
    lockoutPeriod?: number;
    /**
     * Maximum allowed number of failed login attempts
     */
    maxNumberOfLoginFailures?: number;
}
