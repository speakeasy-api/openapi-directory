import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPostsRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    /**
     * Load posts with an id lower than this value. Useful for pagination.
     */
    before?: string;
}
export declare class ListPosts200ApplicationJSONLatestPostsActionsSummary extends SpeakeasyBase {
    canAct?: boolean;
    id?: number;
}
export declare class ListPosts200ApplicationJSONLatestPosts extends SpeakeasyBase {
    actionsSummary?: ListPosts200ApplicationJSONLatestPostsActionsSummary[];
    admin?: boolean;
    avatarTemplate?: string;
    canDelete?: boolean;
    canEdit?: boolean;
    canRecover?: boolean;
    canViewEditHistory?: boolean;
    canWiki?: boolean;
    categoryId?: number;
    cooked?: string;
    createdAt?: string;
    deletedAt?: string;
    displayUsername?: string;
    editReason?: string;
    flairBgColor?: string;
    flairColor?: string;
    flairName?: string;
    flairUrl?: string;
    hidden?: boolean;
    id?: number;
    incomingLinkCount?: number;
    moderator?: boolean;
    name?: string;
    postNumber?: number;
    postType?: number;
    primaryGroupName?: string;
    quoteCount?: number;
    raw?: string;
    readersCount?: number;
    reads?: number;
    replyCount?: number;
    replyToPostNumber?: string;
    reviewableId?: string;
    reviewableScoreCount?: number;
    reviewableScorePendingCount?: number;
    score?: number;
    staff?: boolean;
    topicHtmlTitle?: string;
    topicId?: number;
    topicSlug?: string;
    topicTitle?: string;
    trustLevel?: number;
    updatedAt?: string;
    userDeleted?: boolean;
    userId?: number;
    userTitle?: string;
    username?: string;
    version?: number;
    wiki?: boolean;
    yours?: boolean;
}
/**
 * latest posts
 */
export declare class ListPosts200ApplicationJSON extends SpeakeasyBase {
    latestPosts?: ListPosts200ApplicationJSONLatestPosts[];
}
export declare class ListPostsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * latest posts
     */
    listPosts200ApplicationJSONObject?: ListPosts200ApplicationJSON;
}
