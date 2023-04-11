import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListCategoryTopicsRequest extends SpeakeasyBase {
    id: number;
    slug: string;
}
export declare class ListCategoryTopics200ApplicationJSONTopicListTopicsPosters extends SpeakeasyBase {
    description: string;
    extras: string;
    primaryGroupId: string;
    userId: number;
}
export declare class ListCategoryTopics200ApplicationJSONTopicListTopics extends SpeakeasyBase {
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
    hasSummary: boolean;
    highestPostNumber: number;
    id: number;
    imageUrl: string;
    lastPostedAt: string;
    lastPosterUsername: string;
    likeCount: number;
    liked: string;
    pinned: boolean;
    pinnedGlobally: boolean;
    posters: ListCategoryTopics200ApplicationJSONTopicListTopicsPosters[];
    postsCount: number;
    replyCount: number;
    slug: string;
    title: string;
    unpinned: string;
    unseen: boolean;
    views: number;
    visible: boolean;
}
export declare class ListCategoryTopics200ApplicationJSONTopicList extends SpeakeasyBase {
    canCreateTopic: boolean;
    perPage: number;
    topTags?: any[];
    topics: ListCategoryTopics200ApplicationJSONTopicListTopics[];
}
export declare class ListCategoryTopics200ApplicationJSONUsers extends SpeakeasyBase {
    avatarTemplate: string;
    id: number;
    name: string;
    username: string;
}
/**
 * success response
 */
export declare class ListCategoryTopics200ApplicationJSON extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList: ListCategoryTopics200ApplicationJSONTopicList;
    users?: ListCategoryTopics200ApplicationJSONUsers[];
}
export declare class ListCategoryTopicsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    listCategoryTopics200ApplicationJSONObject?: ListCategoryTopics200ApplicationJSON;
}
