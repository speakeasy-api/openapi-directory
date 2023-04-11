import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTagRequest extends SpeakeasyBase {
    name: string;
}
export declare class GetTag200ApplicationJSONTopicListTags extends SpeakeasyBase {
    id?: number;
    name?: string;
    staff?: boolean;
    topicCount?: number;
}
export declare class GetTag200ApplicationJSONTopicListTopicsPosters extends SpeakeasyBase {
    description?: string;
    extras?: string;
    primaryGroupId?: string;
    userId?: number;
}
export declare class GetTag200ApplicationJSONTopicListTopics extends SpeakeasyBase {
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
    pinned?: boolean;
    pinnedGlobally?: boolean;
    posters?: GetTag200ApplicationJSONTopicListTopicsPosters[];
    postsCount?: number;
    replyCount?: number;
    slug?: string;
    tags?: any[];
    title?: string;
    unpinned?: string;
    unreadPosts?: number;
    unseen?: boolean;
    views?: number;
    visible?: boolean;
}
export declare class GetTag200ApplicationJSONTopicList extends SpeakeasyBase {
    canCreateTopic?: boolean;
    draft?: string;
    draftKey?: string;
    draftSequence?: number;
    perPage?: number;
    tags?: GetTag200ApplicationJSONTopicListTags[];
    topics?: GetTag200ApplicationJSONTopicListTopics[];
}
export declare class GetTag200ApplicationJSONUsers extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
/**
 * notifications
 */
export declare class GetTag200ApplicationJSON extends SpeakeasyBase {
    primaryGroups?: any[];
    topicList?: GetTag200ApplicationJSONTopicList;
    users?: GetTag200ApplicationJSONUsers[];
}
export declare class GetTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * notifications
     */
    getTag200ApplicationJSONObject?: GetTag200ApplicationJSON;
}
