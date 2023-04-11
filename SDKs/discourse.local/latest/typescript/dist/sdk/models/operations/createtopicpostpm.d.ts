import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateTopicPostPMRequestBody extends SpeakeasyBase {
    /**
     * Required for new private message.
     */
    archetype?: string;
    /**
     * Optional if creating a new topic, and ignored if creating
     *
     * @remarks
     * a new post.
     */
    category?: number;
    createdAt?: string;
    /**
     * Provide a URL from a remote system to associate a forum
     *
     * @remarks
     * topic with that URL, typically for using Discourse as a comments
     * system for an external blog.
     */
    embedUrl?: string;
    /**
     * Provide an external_id from a remote system to associate
     *
     * @remarks
     * a forum topic with that id.
     */
    externalId?: string;
    raw: string;
    /**
     * Required for private message, comma separated.
     */
    targetRecipients?: string;
    /**
     * Deprecated. Use target_recipients instead.
     */
    targetUsernames?: string;
    /**
     * Required if creating a new topic or new private message.
     */
    title?: string;
    /**
     * Required if creating a new post.
     */
    topicId?: number;
}
export declare class CreateTopicPostPm200ApplicationJSONActionsSummary extends SpeakeasyBase {
    canAct: boolean;
    id: number;
}
/**
 * post created
 */
export declare class CreateTopicPostPm200ApplicationJSON extends SpeakeasyBase {
    actionsSummary: CreateTopicPostPm200ApplicationJSONActionsSummary[];
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
    draftSequence: number;
    editReason: string;
    flairBgColor: string;
    flairColor: string;
    flairName: string;
    flairUrl: string;
    hidden: boolean;
    id: number;
    incomingLinkCount: number;
    mentionedUsers?: any[];
    moderator: boolean;
    name: string;
    postNumber: number;
    postType: number;
    primaryGroupName: string;
    quoteCount: number;
    raw?: string;
    readersCount: number;
    reads: number;
    replyCount: number;
    replyToPostNumber: string;
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
export declare class CreateTopicPostPMResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * post created
     */
    createTopicPostPM200ApplicationJSONObject?: CreateTopicPostPm200ApplicationJSON;
}
