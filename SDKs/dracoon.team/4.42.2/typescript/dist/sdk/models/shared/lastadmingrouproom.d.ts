import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Room information
 */
export declare class LastAdminGroupRoom extends SpeakeasyBase {
    /**
     * Room ID
     */
    id: number;
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
