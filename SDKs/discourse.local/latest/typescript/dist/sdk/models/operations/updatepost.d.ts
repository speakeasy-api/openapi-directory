import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePostRequestBodyPost extends SpeakeasyBase {
    editReason?: string;
    raw: string;
}
export declare class UpdatePostRequestBody extends SpeakeasyBase {
    post?: UpdatePostRequestBodyPost;
}
export declare class UpdatePostRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: UpdatePostRequestBody;
    id: string;
}
export declare class UpdatePost200ApplicationJSONPostActionsSummary extends SpeakeasyBase {
    canAct?: boolean;
    id?: number;
}
export declare class UpdatePost200ApplicationJSONPost extends SpeakeasyBase {
    actionsSummary?: UpdatePost200ApplicationJSONPostActionsSummary[];
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
    draftSequence?: number;
    editReason?: string;
    flairBgColor?: string;
    flairColor?: string;
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
/**
 * post updated
 */
export declare class UpdatePost200ApplicationJSON extends SpeakeasyBase {
    post?: UpdatePost200ApplicationJSONPost;
}
export declare class UpdatePostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * post updated
     */
    updatePost200ApplicationJSONObject?: UpdatePost200ApplicationJSON;
}
