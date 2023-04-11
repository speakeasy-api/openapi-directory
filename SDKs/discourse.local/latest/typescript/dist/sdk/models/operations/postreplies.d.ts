import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRepliesRequest extends SpeakeasyBase {
    id: string;
}
export declare class PostReplies200ApplicationJSONActionsSummary extends SpeakeasyBase {
    canAct: boolean;
    id: number;
}
export declare class PostReplies200ApplicationJSONReplyToUser extends SpeakeasyBase {
    avatarTemplate: string;
    name?: string;
    username: string;
}
export declare class PostReplies200ApplicationJSON extends SpeakeasyBase {
    actionsSummary: PostReplies200ApplicationJSONActionsSummary[];
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
    moderator: boolean;
    name: string;
    postNumber: number;
    postType: number;
    primaryGroupName: string;
    quoteCount: number;
    readersCount: number;
    reads: number;
    replyCount: number;
    replyToPostNumber: number;
    replyToUser: PostReplies200ApplicationJSONReplyToUser;
    reviewableId: string;
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
export declare class PostRepliesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * post replies
     */
    postReplies200ApplicationJSONObjects?: PostReplies200ApplicationJSON[];
}
