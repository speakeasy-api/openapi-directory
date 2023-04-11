import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListUserActionsRequest extends SpeakeasyBase {
    filter: string;
    offset: number;
    username: string;
}
export declare class ListUserActions200ApplicationJSONUserActions extends SpeakeasyBase {
    actingAvatarTemplate: string;
    actingName: string;
    actingUserId: number;
    actingUsername: string;
    actionCode: string;
    actionType: number;
    archived: boolean;
    avatarTemplate: string;
    categoryId: number;
    closed: boolean;
    createdAt: string;
    deleted: boolean;
    excerpt: string;
    hidden: string;
    name: string;
    postId: string;
    postNumber: number;
    postType: string;
    slug: string;
    targetName: string;
    targetUserId: number;
    targetUsername: string;
    title: string;
    topicId: number;
    userId: number;
    username: string;
}
/**
 * response
 */
export declare class ListUserActions200ApplicationJSON extends SpeakeasyBase {
    userActions: ListUserActions200ApplicationJSONUserActions[];
}
export declare class ListUserActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    listUserActions200ApplicationJSONObject?: ListUserActions200ApplicationJSON;
}
