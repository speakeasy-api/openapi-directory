import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Classification ID:
 *
 * @remarks
 *
 * * `1` - public
 *
 * * `2` - internal
 *
 * * `3` - confidential
 *
 * * `4` - strictly confidential
 *
 *
 *
 * Provided (or default) classification is taken from room
 *
 * when file gets uploaded without any classification.
 */
export declare enum ConfigRoomRequestClassificationEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
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
export declare enum ConfigRoomRequestNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow",
    Pending = "pending"
}
/**
 * Request model for configuring a room
 */
export declare class ConfigRoomRequest extends SpeakeasyBase {
    /**
     * List of group ids
     *
     * @remarks
     *
     * A room requires at least one admin (user or group)
     */
    adminGroupIds?: number[];
    /**
     * List of user ids
     *
     * @remarks
     *
     * A room requires at least one admin (user or group)
     */
    adminIds?: number[];
    /**
     * Classification ID:
     *
     * @remarks
     *
     * * `1` - public
     *
     * * `2` - internal
     *
     * * `3` - confidential
     *
     * * `4` - strictly confidential
     *
     *
     *
     * Provided (or default) classification is taken from room
     *
     * when file gets uploaded without any classification.
     */
    classification?: ConfigRoomRequestClassificationEnum;
    /**
     * Is activities log active (for rooms only)
     */
    hasActivitiesLog?: boolean;
    /**
     * Inherit permissions from parent room
     *
     * @remarks
     *
     * (default: `false` if `parentId` is `0`; otherwise: `true`)
     */
    inheritPermissions?: boolean;
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
    newGroupMemberAcceptance?: ConfigRoomRequestNewGroupMemberAcceptanceEnum;
    /**
     * Retention period for deleted nodes in days
     */
    recycleBinRetentionPeriod?: number;
    /**
     * Take over existing permissions
     */
    takeOverPermissions?: boolean;
}
