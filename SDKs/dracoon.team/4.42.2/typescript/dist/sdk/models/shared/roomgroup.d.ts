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
export declare enum RoomGroupNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow",
    Pending = "pending"
}
/**
 * Group information
 */
export declare class RoomGroup extends SpeakeasyBase {
    /**
     * Unique identifier for the group
     */
    id: number;
    /**
     * Is user granted room permissions
     */
    isGranted: boolean;
    /**
     * Group name
     */
    name: string;
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
    newGroupMemberAcceptance?: RoomGroupNewGroupMemberAcceptanceEnum;
    /**
     * Node permissions
     */
    permissions?: NodePermissions;
}
