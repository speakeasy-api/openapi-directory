import { SpeakeasyBase } from "../../../internal/utils";
import { RoomWebhookAssignment } from "./roomwebhookassignment";
/**
 * Request model for handling webhook assignments
 */
export declare class UpdateRoomWebhookRequest extends SpeakeasyBase {
    /**
     * Assign a webhook to a room to use it for node actions within the room
     */
    items: RoomWebhookAssignment[];
}
