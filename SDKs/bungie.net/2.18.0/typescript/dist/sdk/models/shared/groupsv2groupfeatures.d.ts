import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupsV2GroupFeatures extends SpeakeasyBase {
    capabilities?: number;
    /**
     * Minimum Member Level allowed to host guided games
     *
     * @remarks
     * Always Allowed: Founder, Acting Founder, Admin
     * Allowed Overrides: None, Member, Beginner
     * Default is Member for clans, None for groups, although this means nothing for groups.
     */
    hostGuidedGamePermissionOverride?: number;
    /**
     * Minimum Member Level allowed to invite new members to group
     *
     * @remarks
     * Always Allowed: Founder, Acting Founder
     * True means admins have this power, false means they don't
     * Default is false for clans, true for groups.
     */
    invitePermissionOverride?: boolean;
    /**
     * Level to join a member at when accepting an invite, application, or joining an open clan
     *
     * @remarks
     * Default is Beginner.
     */
    joinLevel?: number;
    maximumMembers?: number;
    /**
     * Maximum number of groups of this type a typical membership may join. For example, a user may join about 50 General groups with their Bungie.net account. They may join one clan per Destiny membership.
     */
    maximumMembershipsOfGroupType?: number;
    membershipTypes?: number[];
    /**
     * Minimum Member Level allowed to update banner
     *
     * @remarks
     * Always Allowed: Founder, Acting Founder
     * True means admins have this power, false means they don't
     * Default is false for clans, true for groups.
     */
    updateBannerPermissionOverride?: boolean;
    /**
     * Minimum Member Level allowed to update group culture
     *
     * @remarks
     * Always Allowed: Founder, Acting Founder
     * True means admins have this power, false means they don't
     * Default is false for clans, true for groups.
     */
    updateCulturePermissionOverride?: boolean;
}
