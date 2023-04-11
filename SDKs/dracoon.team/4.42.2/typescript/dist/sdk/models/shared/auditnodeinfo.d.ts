import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Audit node info
 */
export declare class AuditNodeInfo extends SpeakeasyBase {
    /**
     * Number of direct children
     *
     * @remarks
     *
     * (no recursion; for rooms only)
     */
    countChildren?: number;
    /**
     * Node ID
     */
    nodeId: number;
    /**
     * Encryption state
     */
    nodeIsEncrypted?: boolean;
    /**
     * Node name
     */
    nodeName: string;
    /**
     * Parent room ID
     */
    nodeParentId?: number;
    /**
     * Parent node path
     *
     * @remarks
     *
     * `/` if node is a root node (room)
     */
    nodeParentPath: string;
}
