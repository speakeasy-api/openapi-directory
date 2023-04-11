import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTopicRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    id: string;
}
export declare class GetTopic200ApplicationJSONActionsSummary extends SpeakeasyBase {
    canAct: boolean;
    count: number;
    hidden: boolean;
    id: number;
}
export declare class GetTopic200ApplicationJSONDetailsCreatedBy extends SpeakeasyBase {
    avatarTemplate: string;
    id: number;
    name: string;
    username: string;
}
export declare class GetTopic200ApplicationJSONDetailsLastPoster extends SpeakeasyBase {
    avatarTemplate: string;
    id: number;
    name: string;
    username: string;
}
export declare class GetTopic200ApplicationJSONDetailsParticipants extends SpeakeasyBase {
    admin: boolean;
    avatarTemplate: string;
    flairBgColor: string;
    flairColor: string;
    flairName: string;
    flairUrl: string;
    id: number;
    moderator: boolean;
    name: string;
    postCount: number;
    primaryGroupName: string;
    trustLevel: number;
    username: string;
}
export declare class GetTopic200ApplicationJSONDetails extends SpeakeasyBase {
    canArchiveTopic: boolean;
    canCloseTopic: boolean;
    canConvertTopic: boolean;
    canCreatePost: boolean;
    canDelete: boolean;
    canEdit: boolean;
    canEditStaffNotes: boolean;
    canFlagTopic?: boolean;
    canInviteTo?: boolean;
    canInviteViaEmail?: boolean;
    canModerateCategory: boolean;
    canMovePosts: boolean;
    canPinUnpinTopic: boolean;
    canRemoveAllowedUsers: boolean;
    canRemoveSelfId: number;
    canReplyAsNewTopic: boolean;
    canReviewTopic: boolean;
    canSplitMergeTopic: boolean;
    canToggleTopicVisibility: boolean;
    createdBy: GetTopic200ApplicationJSONDetailsCreatedBy;
    lastPoster: GetTopic200ApplicationJSONDetailsLastPoster;
    notificationLevel: number;
    participants?: GetTopic200ApplicationJSONDetailsParticipants[];
}
export declare class GetTopic200ApplicationJSONPostStreamPostsActionsSummary extends SpeakeasyBase {
    canAct: boolean;
    id: number;
}
export declare class GetTopic200ApplicationJSONPostStreamPostsLinkCounts extends SpeakeasyBase {
    clicks: number;
    internal: boolean;
    reflection: boolean;
    title: string;
    url: string;
}
export declare class GetTopic200ApplicationJSONPostStreamPosts extends SpeakeasyBase {
    actionsSummary: GetTopic200ApplicationJSONPostStreamPostsActionsSummary[];
    admin: boolean;
    avatarTemplate: string;
    bookmarked: boolean;
    canDelete: boolean;
    canEdit: boolean;
    canRecover: boolean;
    canViewEditHistory: boolean;
    canWiki: boolean;
    cooked: string;
    createdAt: string;
    deletedAt: string;
    displayUsername: string;
    editReason: string;
    flairBgColor: string;
    flairColor: string;
    flairName: string;
    flairUrl: string;
    hidden: boolean;
    id: number;
    incomingLinkCount: number;
    linkCounts: GetTopic200ApplicationJSONPostStreamPostsLinkCounts[];
    moderator: boolean;
    name: string;
    postNumber: number;
    postType: number;
    primaryGroupName: string;
    quoteCount: number;
    read: boolean;
    readersCount: number;
    reads: number;
    replyCount: number;
    replyToPostNumber: string;
    reviewableId: number;
    reviewableScoreCount: number;
    reviewableScorePendingCount: number;
    score: number;
    staff: boolean;
    topicId: number;
    topicSlug: string;
    trustLevel: number;
    updatedAt: string;
    userDeleted: boolean;
    userId: number;
    userTitle: string;
    username: string;
    version: number;
    wiki: boolean;
    yours: boolean;
}
export declare class GetTopic200ApplicationJSONPostStream extends SpeakeasyBase {
    posts: GetTopic200ApplicationJSONPostStreamPosts[];
    stream: any[];
}
export declare class GetTopic200ApplicationJSONSuggestedTopicsPostersUser extends SpeakeasyBase {
    avatarTemplate: string;
    id: number;
    name: string;
    username: string;
}
export declare class GetTopic200ApplicationJSONSuggestedTopicsPosters extends SpeakeasyBase {
    description: string;
    extras: string;
    user: GetTopic200ApplicationJSONSuggestedTopicsPostersUser;
}
export declare class GetTopic200ApplicationJSONSuggestedTopics extends SpeakeasyBase {
    archetype: string;
    archived: boolean;
    bookmarked: string;
    bumped: boolean;
    bumpedAt: string;
    categoryId: number;
    closed: boolean;
    createdAt: string;
    excerpt: string;
    fancyTitle: string;
    featuredLink: string;
    highestPostNumber: number;
    id: number;
    imageUrl: string;
    lastPostedAt: string;
    likeCount: number;
    liked: string;
    pinned: boolean;
    posters: GetTopic200ApplicationJSONSuggestedTopicsPosters[];
    postsCount: number;
    replyCount: number;
    slug: string;
    tags: any[];
    tagsDescriptions: Record<string, any>;
    title: string;
    unpinned: string;
    unseen: boolean;
    views: number;
    visible: boolean;
}
/**
 * specific posts
 */
export declare class GetTopic200ApplicationJSON extends SpeakeasyBase {
    actionsSummary: GetTopic200ApplicationJSONActionsSummary[];
    archetype: string;
    archived: boolean;
    bookmarked: boolean;
    bookmarks: any[];
    categoryId: number;
    chunkSize: number;
    closed: boolean;
    createdAt: string;
    currentPostNumber?: number;
    deletedAt: string;
    deletedBy: string;
    details: GetTopic200ApplicationJSONDetails;
    draft: string;
    draftKey: string;
    draftSequence: number;
    fancyTitle: string;
    featuredLink: string;
    hasDeleted: boolean;
    hasSummary: boolean;
    highestPostNumber: number;
    id: number;
    imageUrl: string;
    lastPostedAt: string;
    likeCount: number;
    messageBusLastId: number;
    participantCount: number;
    pinned: boolean;
    pinnedAt: string;
    pinnedGlobally: boolean;
    pinnedUntil: string;
    postStream: GetTopic200ApplicationJSONPostStream;
    postsCount: number;
    replyCount: number;
    showReadIndicator: boolean;
    slowModeEnabledUntil: string;
    slowModeSeconds: number;
    slug: string;
    suggestedTopics: GetTopic200ApplicationJSONSuggestedTopics[];
    tags: any[];
    tagsDescriptions: Record<string, any>;
    thumbnails: string;
    timelineLookup: any[];
    title: string;
    topicTimer: string;
    unpinned: string;
    userId: number;
    views: number;
    visible: boolean;
    wordCount: number;
}
export declare class GetTopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * specific posts
     */
    getTopic200ApplicationJSONObject?: GetTopic200ApplicationJSON;
}
