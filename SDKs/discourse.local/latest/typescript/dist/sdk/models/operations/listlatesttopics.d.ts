import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListLatestTopicsRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    /**
     * Defaults to `desc`, add `ascending=true` to sort asc
     */
    ascending?: string;
    /**
     * Enum: `default`, `created`, `activity`, `views`, `posts`, `category`,
     *
     * @remarks
     * `likes`, `op_likes`, `posters`
     */
    order?: string;
}
export declare class ListLatestTopics200ApplicationJSONTopicListTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class ListLatestTopics200ApplicationJSONTopicListTopics extends SpeakeasyBase {
    archetype?: string;
    archived?: boolean;
    bookmarked?: boolean;
    bumped?: boolean;
    bumpedAt?: string;
    categoryId?: number;
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
    opLikeCount?: number;
    pinned?: boolean;
    pinnedGlobally?: boolean;
    posters?: ListLatestTopics200ApplicationJSONTopicListTopicsPosters[];
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
export declare class ListLatestTopics200ApplicationJSONTopicList extends SpeakeasyBase {
    canCreateTopic?: boolean;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    perPage?: number;
    topics?: ListLatestTopics200ApplicationJSONTopicListTopics[];
}
export declare class ListLatestTopics200ApplicationJSONUsers extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
/**
 * topic updated
 */
export declare class ListLatestTopics200ApplicationJSON extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList?: ListLatestTopics200ApplicationJSONTopicList;
    users?: ListLatestTopics200ApplicationJSONUsers[];
}
export declare class ListLatestTopicsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * topic updated
     */
    listLatestTopics200ApplicationJSONObject?: ListLatestTopics200ApplicationJSON;
}
