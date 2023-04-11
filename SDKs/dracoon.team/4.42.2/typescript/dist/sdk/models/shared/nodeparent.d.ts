import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parent node
 */
export declare class NodeParent extends SpeakeasyBase {
    /**
     * Node ID
     */
    id: number;
    /**
     * Node name
     */
    name: string;
    /**
     * Parent node ID (room or folder)
     */
    parentId?: number;
    /**
     * Node type
     */
    type: string;
}
