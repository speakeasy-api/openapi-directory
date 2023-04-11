import { SpeakeasyBase } from "../../../internal/utils";
import { RoomGuestUserInvitation } from "./roomguestuserinvitation";
/**
 * Request model for adding a guest user to the room
 */
export declare class RoomGuestUserAddRequest extends SpeakeasyBase {
    /**
     * List of room-user mappings
     */
    roomGuestInvitations: RoomGuestUserInvitation[];
}
