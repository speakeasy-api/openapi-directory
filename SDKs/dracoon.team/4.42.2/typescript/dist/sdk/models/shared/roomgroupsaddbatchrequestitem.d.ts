import { SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";
/**
 * Behaviour when new users are added to the group:
 *
 * @remarks
 *
 * * `autoallow`
 *
 * * `pending`
 *
 *
 *
 * Only relevant if `adminGroupIds` has items.
 */
export declare enum RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow",
    Pending = "pending"
}
/**
 * Request item model for granting group to the room
 */
export declare class RoomGroupsAddBatchRequestItem extends SpeakeasyBase {
    /**
     * Unique identifier for the group
     */
    id: number;
    /**
     * Behaviour when new users are added to the group:
     *
     * @remarks
     *
     * * `autoallow`
     *
     * * `pending`
     *
     *
     *
     * Only relevant if `adminGroupIds` has items.
     */
    newGroupMemberAcceptance?: RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum;
    /**
     * Node permissions
     */
    permissions: NodePermissions;
}
