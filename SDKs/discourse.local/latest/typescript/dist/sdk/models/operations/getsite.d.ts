import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSite200ApplicationJSONArchetypes extends SpeakeasyBase {
    id: string;
    name: string;
    options: any[];
}
export declare class GetSite200ApplicationJSONCategoriesRequiredTagGroups extends SpeakeasyBase {
    minCount: number;
    name: string;
}
export declare class GetSite200ApplicationJSONCategories extends SpeakeasyBase {
    allowGlobalTags: boolean;
    allowedTagGroups: any[];
    allowedTags: any[];
    canEdit: boolean;
    color: string;
    customFields?: Record<string, any>;
    defaultListFilter: string;
    defaultTopPeriod: string;
    defaultView: string;
    description?: string;
    descriptionExcerpt?: string;
    descriptionText?: string;
    formTemplateIds?: any[];
    hasChildren: boolean;
    id: number;
    minimumRequiredTags: number;
    name: string;
    navigateToFirstPostAfterRead: boolean;
    notificationLevel: number;
    numFeaturedTopics: number;
    parentCategoryId?: number;
    permission: number;
    position: number;
    postCount: number;
    readOnlyBanner: string;
    readRestricted: boolean;
    requiredTagGroups: GetSite200ApplicationJSONCategoriesRequiredTagGroups[];
    showSubcategoryList: boolean;
    slug: string;
    sortAscending: string;
    sortOrder: string;
    subcategoryListStyle: string;
    textColor: string;
    topicCount: number;
    topicTemplate: string;
    topicUrl: string;
    uploadedBackground: string;
    uploadedLogo: string;
    uploadedLogoDark: string;
}
export declare class GetSite200ApplicationJSONGroups extends SpeakeasyBase {
    flairBgColor: string;
    flairColor: string;
    flairUrl: string;
    id: number;
    name: string;
}
export declare class GetSite200ApplicationJSONNotificationTypes extends SpeakeasyBase {
    assigned?: number;
    bookmarkReminder: number;
    chatGroupMention: number;
    chatInvitation: number;
    chatMention: number;
    chatMessage: number;
    chatQuoted?: number;
    circlesActivity?: number;
    codeReviewCommitApproved: number;
    custom: number;
    edited: number;
    eventInvitation: number;
    eventReminder: number;
    following?: number;
    followingCreatedTopic?: number;
    followingReplied?: number;
    grantedBadge: number;
    groupMentioned: number;
    groupMessageSummary: number;
    invitedToPrivateMessage: number;
    invitedToTopic: number;
    inviteeAccepted: number;
    liked: number;
    likedConsolidated: number;
    linked: number;
    membershipRequestAccepted: number;
    membershipRequestConsolidated: number;
    mentioned: number;
    movedPost: number;
    newFeatures?: number;
    postApproved: number;
    posted: number;
    privateMessage: number;
    questionAnswerUserCommented?: number;
    quoted: number;
    reaction: number;
    replied: number;
    topicReminder: number;
    votesReleased: number;
    watchingCategoryOrTag: number;
    watchingFirstPost: number;
}
export declare class GetSite200ApplicationJSONPostActionTypes extends SpeakeasyBase {
    description: string;
    id: number;
    isCustomFlag: boolean;
    isFlag: boolean;
    name: string;
    nameKey: string;
    shortDescription: string;
}
export declare class GetSite200ApplicationJSONPostTypes extends SpeakeasyBase {
    moderatorAction: number;
    regular: number;
    smallAction: number;
    whisper: number;
}
export declare class GetSite200ApplicationJSONTopicFlagTypes extends SpeakeasyBase {
    description: string;
    id: number;
    isCustomFlag: boolean;
    isFlag: boolean;
    name: string;
    nameKey: string;
    shortDescription: string;
}
export declare class GetSite200ApplicationJSONTrustLevels extends SpeakeasyBase {
    basic: number;
    leader: number;
    member: number;
    newuser: number;
    regular: number;
}
export declare class GetSite200ApplicationJSONUserColorSchemes extends SpeakeasyBase {
    id: number;
    isDark: boolean;
    name: string;
}
export declare class GetSite200ApplicationJSONUserThemes extends SpeakeasyBase {
    colorSchemeId: number;
    default: boolean;
    name: string;
    themeId: number;
}
/**
 * success response
 */
export declare class GetSite200ApplicationJSON extends SpeakeasyBase {
    anonymousTopMenuItems: any[];
    archetypes: GetSite200ApplicationJSONArchetypes[];
    authProviders: any[];
    canAssociateGroups?: boolean;
    canCreateTag: boolean;
    canTagPms: boolean;
    canTagTopics: boolean;
    categories: GetSite200ApplicationJSONCategories[];
    censoredRegexp: Record<string, any>[];
    customEmojiTranslation: Record<string, any>;
    defaultArchetype: string;
    defaultDarkColorScheme: Record<string, any>;
    displayedAboutPluginStatGroups?: any[];
    filters: any[];
    groups: GetSite200ApplicationJSONGroups[];
    hashtagConfigurations?: Record<string, any>;
    hashtagIcons?: any[];
    markdownAdditionalOptions?: Record<string, any>;
    notificationTypes: GetSite200ApplicationJSONNotificationTypes;
    periods: any[];
    postActionTypes: GetSite200ApplicationJSONPostActionTypes[];
    postTypes: GetSite200ApplicationJSONPostTypes;
    showWelcomeTopicBanner?: boolean;
    tagsFilterRegexp: string;
    topMenuItems: any[];
    topTags: any[];
    topicFeaturedLinkAllowedCategoryIds: any[];
    topicFlagTypes: GetSite200ApplicationJSONTopicFlagTypes[];
    trustLevels: GetSite200ApplicationJSONTrustLevels;
    uncategorizedCategoryId: number;
    userColorSchemes: GetSite200ApplicationJSONUserColorSchemes[];
    userFieldMaxLength: number;
    userFields: any[];
    userThemes: GetSite200ApplicationJSONUserThemes[];
    watchedWordsLink: string;
    watchedWordsReplace: string;
    whispersAllowedGroupsNames?: any[];
    wizardRequired?: boolean;
}
export declare class GetSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    getSite200ApplicationJSONObject?: GetSite200ApplicationJSON;
}
