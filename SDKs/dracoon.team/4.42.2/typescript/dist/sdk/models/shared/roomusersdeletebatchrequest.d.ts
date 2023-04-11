import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for revoking user(s) from the room
 */
export declare class RoomUsersDeleteBatchRequest extends SpeakeasyBase {
    /**
     * List of user IDs
     */
    ids: number[];
}
