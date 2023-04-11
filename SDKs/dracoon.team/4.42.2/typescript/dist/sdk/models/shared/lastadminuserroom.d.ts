import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Room information
 */
export declare class LastAdminUserRoom extends SpeakeasyBase {
    /**
     * Room ID
     */
    id: number;
    /**
     * Determines whether user is last admin of a room due to being the last member of last admin group
     */
    lastAdminInGroup: boolean;
    /**
     * ID of the last admin group where the user is the only remaining member
     *
     * @remarks
     *
     * (returned only if `lastAdminInGroup` is `true`)
     */
    lastAdminInGroupId?: number;
    /**
     * Room name
     */
    name: string;
    /**
     * Parent room ID
     */
    parentId?: number;
    /**
     * Parent node path
     *
     * @remarks
     *
     * `/` if node is a root node (room)
     */
    parentPath: string;
}
