import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for revoking group(s) from the room
 */
export declare class RoomGroupsDeleteBatchRequest extends SpeakeasyBase {
    /**
     * List of group IDs
     */
    ids: number[];
}
