import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListTopTopicsRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    /**
     * Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily`
     */
    period?: string;
}
export declare class ListTopTopics200ApplicationJSONTopicListTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class ListTopTopics200ApplicationJSONTopicListTopics extends SpeakeasyBase {
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
    posters?: ListTopTopics200ApplicationJSONTopicListTopicsPosters[];
    postsCount?: number;
    replyCount?: number;
    slug?: string;
    title?: string;
    unpinned?: boolean;
    unreadPosts?: number;
    unseen?: boolean;
    views?: number;
    visible?: boolean;
}
export declare class ListTopTopics200ApplicationJSONTopicList extends SpeakeasyBase {
    canCreateTopic?: boolean;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    forPeriod?: string;
    perPage?: number;
    topics?: ListTopTopics200ApplicationJSONTopicListTopics[];
}
export declare class ListTopTopics200ApplicationJSONUsers extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
/**
 * response
 */
export declare class ListTopTopics200ApplicationJSON extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList?: ListTopTopics200ApplicationJSONTopicList;
    users?: ListTopTopics200ApplicationJSONUsers[];
}
export declare class ListTopTopicsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    listTopTopics200ApplicationJSONObject?: ListTopTopics200ApplicationJSON;
}
