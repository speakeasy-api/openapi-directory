import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserSentPrivateMessagesRequest extends SpeakeasyBase {
    username: string;
}
export declare class GetUserSentPrivateMessages200ApplicationJSONTopicListTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class GetUserSentPrivateMessages200ApplicationJSONTopicListTopics extends SpeakeasyBase {
    allowedUserCount?: number;
    archetype?: string;
    archived?: boolean;
    bookmarked?: boolean;
    bumped?: boolean;
    bumpedAt?: string;
    categoryId?: string;
    closed?: boolean;
    createdAt?: string;
    fancyTitle?: string;
    featuredLink?: string;
    hasSummary?: boolean;
    highestPostNumber?: number;
    id?: number;
    imageUrl?: string;
    lastPostedAt?: string;
    lastPosterUsername?: string;
    lastReadPostNumber?: number;
    likeCount?: number;
    liked?: boolean;
    notificationLevel?: number;
    participants?: any[];
    pinned?: boolean;
    pinnedGlobally?: boolean;
    posters?: GetUserSentPrivateMessages200ApplicationJSONTopicListTopicsPosters[];
    postsCount?: number;
    replyCount?: number;
    slug?: string;
    title?: string;
    unpinned?: string;
    unreadPosts?: number;
    unseen?: boolean;
    views?: number;
    visible?: boolean;
}
export declare class GetUserSentPrivateMessages200ApplicationJSONTopicList extends SpeakeasyBase {
    canCreateTopic?: boolean;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    perPage?: number;
    topics?: GetUserSentPrivateMessages200ApplicationJSONTopicListTopics[];
}
export declare class GetUserSentPrivateMessages200ApplicationJSONUsers extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
/**
 * private messages
 */
export declare class GetUserSentPrivateMessages200ApplicationJSON extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList?: GetUserSentPrivateMessages200ApplicationJSONTopicList;
    users?: GetUserSentPrivateMessages200ApplicationJSONUsers[];
}
export declare class GetUserSentPrivateMessagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * private messages
     */
    getUserSentPrivateMessages200ApplicationJSONObject?: GetUserSentPrivateMessages200ApplicationJSON;
}
