import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User
 */
export declare class User extends SpeakeasyBase {
    /**
     * User ID.
     */
    dollarId: string;
    /**
     * User email address.
     */
    email: string;
    /**
     * Email verification status.
     */
    emailVerification: boolean;
    /**
     * User name.
     */
    name: string;
    /**
     * Unix timestamp of the most recent password update
     */
    passwordUpdate: number;
    /**
     * User preferences as a key-value object
     */
    prefs: Record<string, any>;
    /**
     * User registration date in Unix timestamp.
     */
    registration: number;
    /**
     * User status. 0 for Unactivated, 1 for active and 2 is blocked.
     */
    status: number;
}
