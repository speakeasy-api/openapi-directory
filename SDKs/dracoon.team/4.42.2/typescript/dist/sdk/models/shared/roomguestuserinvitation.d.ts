import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request item model for inviting a guest user to a room
 */
export declare class RoomGuestUserInvitation extends SpeakeasyBase {
    /**
     * Email
     */
    email: string;
    /**
     * User first name
     */
    firstName: string;
    /**
     * User last name
     */
    lastName: string;
}
