import { SpeakeasyBase } from "../../../internal/utils";
import { AuditUserPermission } from "./audituserpermission";
import { UserInfo } from "./userinfo";
/**
 * Audit node report
 */
export declare class AuditNodeResponse extends SpeakeasyBase {
    /**
     * List of assigned users with permissions
     */
    auditUserPermissionList: AuditUserPermission[];
    /**
     * Number of direct children
     *
     * @remarks
     *
     * (no recursion; for rooms only)
     */
    nodeCntChildren: number;
    /**
     * Creation date
     */
    nodeCreatedAt?: Date;
    /**
     * User information
     */
    nodeCreatedBy?: UserInfo;
    /**
     * Is activities log active (for rooms only)
     */
    nodeHasActivitiesLog?: boolean;
    /**
     * &#128679; Deprecated since v4.10.0
     *
     * @remarks
     *
     * Is recycle bin active (for rooms only)
     *
     * Recycle bin is always on (disabling is not possible).
     */
    nodeHasRecycleBin?: boolean;
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
     * Parent node ID (room or folder)
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
    /**
     * Quota in byte
     */
    nodeQuota?: number;
    /**
     * Retention period for deleted nodes in days
     */
    nodeRecycleBinRetentionPeriod?: number;
    /**
     * Node size in byte
     */
    nodeSize?: number;
    /**
     * Modification date
     */
    nodeUpdatedAt?: Date;
    /**
     * User information
     */
    nodeUpdatedBy?: UserInfo;
}
