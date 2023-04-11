import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * groupV2
 */
export declare class GroupV2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
     */
    groupV2AbdicateFoundership(req: operations.GroupV2AbdicateFoundershipRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2AbdicateFoundershipResponse>;
    /**
     * Add a new optional conversation/chat channel. Requires admin permissions to the group.
     */
    groupV2AddOptionalConversation(req: operations.GroupV2AddOptionalConversationRequest, security: operations.GroupV2AddOptionalConversationSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2AddOptionalConversationResponse>;
    /**
     * Approve all of the pending users for the given group.
     */
    groupV2ApproveAllPending(req: operations.GroupV2ApproveAllPendingRequest, security: operations.GroupV2ApproveAllPendingSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2ApproveAllPendingResponse>;
    /**
     * Approve the given membershipId to join the group/clan as long as they have applied.
     */
    groupV2ApprovePending(req: operations.GroupV2ApprovePendingRequest, security: operations.GroupV2ApprovePendingSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2ApprovePendingResponse>;
    /**
     * Approve all of the pending users for the given group.
     */
    groupV2ApprovePendingForList(req: operations.GroupV2ApprovePendingForListRequest, security: operations.GroupV2ApprovePendingForListSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2ApprovePendingForListResponse>;
    /**
     * Bans the requested member from the requested group for the specified period of time.
     */
    groupV2BanMember(req: operations.GroupV2BanMemberRequest, security: operations.GroupV2BanMemberSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2BanMemberResponse>;
    /**
     * Deny all of the pending users for the given group.
     */
    groupV2DenyAllPending(req: operations.GroupV2DenyAllPendingRequest, security: operations.GroupV2DenyAllPendingSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2DenyAllPendingResponse>;
    /**
     * Deny all of the pending users for the given group that match the passed-in .
     */
    groupV2DenyPendingForList(req: operations.GroupV2DenyPendingForListRequest, security: operations.GroupV2DenyPendingForListSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2DenyPendingForListResponse>;
    /**
     * Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.
     */
    groupV2EditClanBanner(req: operations.GroupV2EditClanBannerRequest, security: operations.GroupV2EditClanBannerSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2EditClanBannerResponse>;
    /**
     * Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.
     */
    groupV2EditFounderOptions(req: operations.GroupV2EditFounderOptionsRequest, security: operations.GroupV2EditFounderOptionsSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2EditFounderOptionsResponse>;
    /**
     * Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
     */
    groupV2EditGroup(req: operations.GroupV2EditGroupRequest, security: operations.GroupV2EditGroupSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2EditGroupResponse>;
    /**
     * Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
     */
    groupV2EditGroupMembership(req: operations.GroupV2EditGroupMembershipRequest, security: operations.GroupV2EditGroupMembershipSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2EditGroupMembershipResponse>;
    /**
     * Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
     */
    groupV2EditOptionalConversation(req: operations.GroupV2EditOptionalConversationRequest, security: operations.GroupV2EditOptionalConversationSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2EditOptionalConversationResponse>;
    /**
     * Get the list of members in a given group who are of admin level or higher.
     */
    groupV2GetAdminsAndFounderOfGroup(req: operations.GroupV2GetAdminsAndFounderOfGroupRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetAdminsAndFounderOfGroupResponse>;
    /**
     * Returns a list of all available group avatars for the signed-in user.
     */
    groupV2GetAvailableAvatars(config?: AxiosRequestConfig): Promise<operations.GroupV2GetAvailableAvatarsResponse>;
    /**
     * Returns a list of all available group themes.
     */
    groupV2GetAvailableThemes(config?: AxiosRequestConfig): Promise<operations.GroupV2GetAvailableThemesResponse>;
    /**
     * Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.
     */
    groupV2GetBannedMembersOfGroup(req: operations.GroupV2GetBannedMembersOfGroupRequest, security: operations.GroupV2GetBannedMembersOfGroupSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2GetBannedMembersOfGroupResponse>;
    /**
     * Get information about a specific group of the given ID.
     */
    groupV2GetGroup(req: operations.GroupV2GetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetGroupResponse>;
    /**
     * Get information about a specific group with the given name and type.
     */
    groupV2GetGroupByName(req: operations.GroupV2GetGroupByNameRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetGroupByNameResponse>;
    /**
     * Get information about a specific group with the given name and type. The POST version.
     */
    groupV2GetGroupByNameV2(config?: AxiosRequestConfig): Promise<operations.GroupV2GetGroupByNameV2Response>;
    /**
     * Gets a list of available optional conversation channels and their settings.
     */
    groupV2GetGroupOptionalConversations(req: operations.GroupV2GetGroupOptionalConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetGroupOptionalConversationsResponse>;
    /**
     * Get information about the groups that a given member has joined.
     */
    groupV2GetGroupsForMember(req: operations.GroupV2GetGroupsForMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetGroupsForMemberResponse>;
    /**
     * Get the list of users who have been invited into the group.
     */
    groupV2GetInvitedIndividuals(req: operations.GroupV2GetInvitedIndividualsRequest, security: operations.GroupV2GetInvitedIndividualsSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2GetInvitedIndividualsResponse>;
    /**
     * Get the list of members in a given group.
     */
    groupV2GetMembersOfGroup(req: operations.GroupV2GetMembersOfGroupRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetMembersOfGroupResponse>;
    /**
     * Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
     */
    groupV2GetPendingMemberships(req: operations.GroupV2GetPendingMembershipsRequest, security: operations.GroupV2GetPendingMembershipsSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2GetPendingMembershipsResponse>;
    /**
     * Get information about the groups that a given member has applied to or been invited to.
     */
    groupV2GetPotentialGroupsForMember(req: operations.GroupV2GetPotentialGroupsForMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetPotentialGroupsForMemberResponse>;
    /**
     * Gets groups recommended for you based on the groups to whom those you follow belong.
     */
    groupV2GetRecommendedGroups(req: operations.GroupV2GetRecommendedGroupsRequest, security: operations.GroupV2GetRecommendedGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2GetRecommendedGroupsResponse>;
    /**
     * Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
     */
    groupV2GetUserClanInviteSetting(req: operations.GroupV2GetUserClanInviteSettingRequest, security: operations.GroupV2GetUserClanInviteSettingSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2GetUserClanInviteSettingResponse>;
    /**
     * Search for Groups.
     */
    groupV2GroupSearch(config?: AxiosRequestConfig): Promise<operations.GroupV2GroupSearchResponse>;
    /**
     * Invite a user to join this group.
     */
    groupV2IndividualGroupInvite(req: operations.GroupV2IndividualGroupInviteRequest, security: operations.GroupV2IndividualGroupInviteSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2IndividualGroupInviteResponse>;
    /**
     * Cancels a pending invitation to join a group.
     */
    groupV2IndividualGroupInviteCancel(req: operations.GroupV2IndividualGroupInviteCancelRequest, security: operations.GroupV2IndividualGroupInviteCancelSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2IndividualGroupInviteCancelResponse>;
    /**
     * Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.
     */
    groupV2KickMember(req: operations.GroupV2KickMemberRequest, security: operations.GroupV2KickMemberSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2KickMemberResponse>;
    /**
     * Allows a founder to manually recover a group they can see in game but not on bungie.net
     */
    groupV2RecoverGroupForFounder(req: operations.GroupV2RecoverGroupForFounderRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2RecoverGroupForFounderResponse>;
    /**
     * Unbans the requested member, allowing them to re-apply for membership.
     */
    groupV2UnbanMember(req: operations.GroupV2UnbanMemberRequest, security: operations.GroupV2UnbanMemberSecurity, config?: AxiosRequestConfig): Promise<operations.GroupV2UnbanMemberResponse>;
}
