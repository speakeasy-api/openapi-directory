import { SpeakeasyBase } from "../../../internal/utils";
import { RoomUsersAddBatchRequestItem } from "./roomusersaddbatchrequestitem";
/**
 * Request model for granting user(s) to the room
 */
export declare class RoomUsersAddBatchRequest extends SpeakeasyBase {
    /**
     * List of room-user mappings
     */
    items: RoomUsersAddBatchRequestItem[];
}
