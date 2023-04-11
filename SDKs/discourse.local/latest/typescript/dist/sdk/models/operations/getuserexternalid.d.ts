import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserExternalIdRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    externalId: string;
}
export declare class GetUserExternalId200ApplicationJSONUserCustomFields extends SpeakeasyBase {
    firstName?: string;
}
export declare class GetUserExternalId200ApplicationJSONUserGroupUsers extends SpeakeasyBase {
    groupId: number;
    notificationLevel: number;
    owner?: boolean;
    userId: number;
}
export declare class GetUserExternalId200ApplicationJSONUserGroups extends SpeakeasyBase {
    allowMembershipRequests: boolean;
    automatic: boolean;
    bioCooked: string;
    bioExcerpt: string;
    bioRaw: string;
    canAdminGroup: boolean;
    canSeeMembers: boolean;
    defaultNotificationLevel: number;
    displayName: string;
    flairBgColor: string;
    flairColor: string;
    flairUrl: string;
    fullName: string;
    grantTrustLevel: string;
    hasMessages: boolean;
    id: number;
    incomingEmail: string;
    membersVisibilityLevel: number;
    membershipRequestTemplate: string;
    mentionableLevel: number;
    messageableLevel: number;
    name: string;
    primaryGroup: boolean;
    publicAdmission: boolean;
    publicExit: boolean;
    publishReadState: boolean;
    title: string;
    userCount: number;
    visibilityLevel: number;
}
export declare class GetUserExternalId200ApplicationJSONUserUserAuthTokens extends SpeakeasyBase {
    browser: string;
    clientIp: string;
    createdAt: string;
    device: string;
    icon: string;
    id: number;
    isActive: boolean;
    location: string;
    os: string;
    seenAt: string;
}
export declare class GetUserExternalId200ApplicationJSONUserUserFields extends SpeakeasyBase {
    one: string;
    two: string;
}
export declare class GetUserExternalId200ApplicationJSONUserUserNotificationSchedule extends SpeakeasyBase {
    day0EndTime: number;
    day0StartTime: number;
    day1EndTime: number;
    day1StartTime: number;
    day2EndTime: number;
    day2StartTime: number;
    day3EndTime: number;
    day3StartTime: number;
    day4EndTime: number;
    day4StartTime: number;
    day5EndTime: number;
    day5StartTime: number;
    day6EndTime: number;
    day6StartTime: number;
    enabled: boolean;
}
export declare class GetUserExternalId200ApplicationJSONUserUserOption extends SpeakeasyBase {
    allowPrivateMessages: boolean;
    autoTrackTopicsAfterMsecs: number;
    automaticallyUnpinTopics: boolean;
    bookmarkAutoDeletePreference?: number;
    colorSchemeId: string;
    darkSchemeId: string;
    defaultCalendar?: string;
    digestAfterMinutes: number;
    dynamicFavicon: boolean;
    emailDigests: boolean;
    emailInReplyTo: boolean;
    emailLevel: number;
    emailMessagesLevel: number;
    emailPreviousReplies: number;
    enableAllowedPmUsers: boolean;
    enableDefer: boolean;
    enableQuoting: boolean;
    externalLinksInNewTab: boolean;
    hideProfileAndPresence: boolean;
    homepageId: string;
    includeTl0InDigests: boolean;
    likeNotificationFrequency: number;
    mailingListMode: boolean;
    mailingListModeFrequency: number;
    newTopicDurationMinutes: number;
    notificationLevelWhenReplying: number;
    oldestSearchLogDate?: string;
    seenPopups?: any[];
    sidebarListDestination?: string;
    skipNewUserTips: boolean;
    textSize: string;
    textSizeSeq: number;
    themeIds: any[];
    themeKeySeq: number;
    timezone: string;
    titleCountMode: string;
    userId: number;
}
export declare class GetUserExternalId200ApplicationJSONUser extends SpeakeasyBase {
    admin: boolean;
    allowedPmUsernames: any[];
    avatarTemplate: string;
    badgeCount: number;
    canBeDeleted: boolean;
    canChangeBio: boolean;
    canChangeLocation: boolean;
    canChangeTrackingPreferences: boolean;
    canChangeWebsite: boolean;
    canDeleteAllPosts: boolean;
    canEdit: boolean;
    canEditEmail: boolean;
    canEditName: boolean;
    canEditUsername: boolean;
    canIgnoreUser: boolean;
    canMuteUser: boolean;
    canSendPrivateMessageToUser: boolean;
    canSendPrivateMessages: boolean;
    canUploadProfileHeader: boolean;
    canUploadUserCardBackground: boolean;
    createdAt: string;
    customFields: GetUserExternalId200ApplicationJSONUserCustomFields;
    featuredTopic: string;
    featuredUserBadgeIds: any[];
    flairBgColor: string;
    flairColor: string;
    flairGroupId: string;
    flairName: string;
    flairUrl: string;
    groupUsers: GetUserExternalId200ApplicationJSONUserGroupUsers[];
    groups: GetUserExternalId200ApplicationJSONUserGroups[];
    hasTitleBadges: boolean;
    id: number;
    ignored: boolean;
    ignoredUsernames: any[];
    invitedBy: string;
    lastPostedAt: string;
    lastSeenAt: string;
    locale: string;
    mailingListPostsPerDay: number;
    moderator: boolean;
    muted: boolean;
    mutedCategoryIds: any[];
    mutedTags: any[];
    mutedUsernames: any[];
    name: string;
    pendingCount: number;
    pendingPostsCount?: number;
    postCount: number;
    primaryGroupId: string;
    primaryGroupName: string;
    profileViewCount: number;
    recentTimeRead: number;
    regularCategoryIds: any[];
    secondFactorBackupEnabled?: boolean;
    secondFactorEnabled: boolean;
    staged: boolean;
    systemAvatarTemplate: string;
    systemAvatarUploadId: string;
    timeRead: number;
    title: string;
    trackedCategoryIds: any[];
    trackedTags: any[];
    trustLevel: number;
    uploadedAvatarId: string;
    useLogoSmallAsAvatar: boolean;
    userApiKeys: string;
    userAuthTokens: GetUserExternalId200ApplicationJSONUserUserAuthTokens[];
    userFields?: GetUserExternalId200ApplicationJSONUserUserFields;
    userNotificationSchedule: GetUserExternalId200ApplicationJSONUserUserNotificationSchedule;
    userOption: GetUserExternalId200ApplicationJSONUserUserOption;
    username: string;
    watchedCategoryIds: any[];
    watchedFirstPostCategoryIds: any[];
    watchedTags: any[];
    watchingFirstPostTags: any[];
}
/**
 * user response
 */
export declare class GetUserExternalId200ApplicationJSON extends SpeakeasyBase {
    user: GetUserExternalId200ApplicationJSONUser;
    userBadges: any[];
}
export declare class GetUserExternalIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * user response
     */
    getUserExternalId200ApplicationJSONObject?: GetUserExternalId200ApplicationJSON;
}
