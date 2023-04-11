import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Membership
 */
export declare class Membership extends SpeakeasyBase {
    /**
     * Membership ID.
     */
    dollarId: string;
    /**
     * User confirmation status, true if the user has joined the team or false otherwise.
     */
    confirm: boolean;
    /**
     * User email address.
     */
    email: string;
    /**
     * Date, the user has been invited to join the team in Unix timestamp.
     */
    invited: number;
    /**
     * Date, the user has accepted the invitation to join the team in Unix timestamp.
     */
    joined: number;
    /**
     * User name.
     */
    name: string;
    /**
     * User list of roles
     */
    roles: string[];
    /**
     * Team ID.
     */
    teamId: string;
    /**
     * User ID.
     */
    userId: string;
}
