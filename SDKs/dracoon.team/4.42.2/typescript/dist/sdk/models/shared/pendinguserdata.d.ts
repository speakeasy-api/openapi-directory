import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pending user information
 */
export declare class PendingUserData extends SpeakeasyBase {
    /**
     * Display name
     *
     * @remarks
     *
     * use information from `UserInfo` instead to combine a display name
     */
    displayName: string;
    /**
     * Email
     *
     * @remarks
     *
     * use `email` from `UserInfo` instead
     */
    email: string;
    /**
     * Unique identifier for the user
     */
    id: number;
    /**
     * User login name
     */
    login: string;
}
