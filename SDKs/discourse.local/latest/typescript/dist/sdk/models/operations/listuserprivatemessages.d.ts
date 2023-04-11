import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListUserPrivateMessagesRequest extends SpeakeasyBase {
    username: string;
}
export declare class ListUserPrivateMessages200ApplicationJSONTopicListTopicsParticipants extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class ListUserPrivateMessages200ApplicationJSONTopicListTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class ListUserPrivateMessages200ApplicationJSONTopicListTopics extends SpeakeasyBase {
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
    participants?: ListUserPrivateMessages200ApplicationJSONTopicListTopicsParticipants[];
    pinned?: boolean;
    pinnedGlobally?: boolean;
    posters?: ListUserPrivateMessages200ApplicationJSONTopicListTopicsPosters[];
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
export declare class ListUserPrivateMessages200ApplicationJSONTopicList extends SpeakeasyBase {
    canCreateTopic?: boolean;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    perPage?: number;
    topics?: ListUserPrivateMessages200ApplicationJSONTopicListTopics[];
}
export declare class ListUserPrivateMessages200ApplicationJSONUsers extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
/**
 * private messages
 */
export declare class ListUserPrivateMessages200ApplicationJSON extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList?: ListUserPrivateMessages200ApplicationJSONTopicList;
    users?: ListUserPrivateMessages200ApplicationJSONUsers[];
}
export declare class ListUserPrivateMessagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * private messages
     */
    listUserPrivateMessages200ApplicationJSONObject?: ListUserPrivateMessages200ApplicationJSON;
}
