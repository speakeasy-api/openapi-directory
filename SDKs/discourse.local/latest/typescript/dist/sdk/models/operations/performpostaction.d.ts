import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PerformPostActionRequestBody extends SpeakeasyBase {
    flagTopic?: boolean;
    id: number;
    postActionTypeId: number;
}
export declare class PerformPostActionRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: PerformPostActionRequestBody;
}
export declare class PerformPostAction200ApplicationJSONActionsSummary extends SpeakeasyBase {
    acted?: boolean;
    canUndo?: boolean;
    count?: number;
    id?: number;
}
/**
 * post updated
 */
export declare class PerformPostAction200ApplicationJSON extends SpeakeasyBase {
    actionsSummary?: PerformPostAction200ApplicationJSONActionsSummary[];
    admin?: boolean;
    avatarTemplate?: string;
    canDelete?: boolean;
    canEdit?: boolean;
    canRecover?: boolean;
    canViewEditHistory?: boolean;
    canWiki?: boolean;
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
    notice?: Record<string, any>;
    postNumber?: number;
    postType?: number;
    primaryGroupName?: string;
    quoteCount?: number;
    readersCount?: number;
    reads?: number;
    replyCount?: number;
    replyToPostNumber?: string;
    reviewableId?: string;
    reviewableScoreCount?: number;
    reviewableScorePendingCount?: number;
    score?: number;
    staff?: boolean;
    topicId?: number;
    topicSlug?: string;
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
export declare class PerformPostActionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * post updated
     */
    performPostAction200ApplicationJSONObject?: PerformPostAction200ApplicationJSON;
}
