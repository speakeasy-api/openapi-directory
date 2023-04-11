import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum ListUsersPublicAscEnum {
    True = "true"
}
export declare enum ListUsersPublicOrderEnum {
    LikesReceived = "likes_received",
    LikesGiven = "likes_given",
    TopicCount = "topic_count",
    PostCount = "post_count",
    TopicsEntered = "topics_entered",
    PostsRead = "posts_read",
    DaysVisited = "days_visited"
}
export declare enum ListUsersPublicPeriodEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Quarterly = "quarterly",
    Yearly = "yearly",
    All = "all"
}
export declare class ListUsersPublicRequest extends SpeakeasyBase {
    asc?: ListUsersPublicAscEnum;
    order: ListUsersPublicOrderEnum;
    page?: number;
    period: ListUsersPublicPeriodEnum;
}
export declare class ListUsersPublic200ApplicationJSONDirectoryItemsUser extends SpeakeasyBase {
    avatarTemplate: string;
    id: number;
    name: string;
    title: string;
    username: string;
}
export declare class ListUsersPublic200ApplicationJSONDirectoryItems extends SpeakeasyBase {
    daysVisited: number;
    id: number;
    likesGiven: number;
    likesReceived: number;
    postCount: number;
    postsRead: number;
    topicCount: number;
    topicsEntered: number;
    user: ListUsersPublic200ApplicationJSONDirectoryItemsUser;
}
export declare class ListUsersPublic200ApplicationJSONMeta extends SpeakeasyBase {
    lastUpdatedAt: string;
    loadMoreDirectoryItems: string;
    totalRowsDirectoryItems: number;
}
/**
 * directory items response
 */
export declare class ListUsersPublic200ApplicationJSON extends SpeakeasyBase {
    directoryItems: ListUsersPublic200ApplicationJSONDirectoryItems[];
    meta: ListUsersPublic200ApplicationJSONMeta;
}
export declare class ListUsersPublicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * directory items response
     */
    listUsersPublic200ApplicationJSONObject?: ListUsersPublic200ApplicationJSON;
}
