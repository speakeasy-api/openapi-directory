import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNotifications200ApplicationJSONNotificationsData extends SpeakeasyBase {
    badgeId?: number;
    badgeName?: string;
    badgeSlug?: string;
    badgeTitle?: boolean;
    username?: string;
}
export declare class GetNotifications200ApplicationJSONNotifications extends SpeakeasyBase {
    createdAt?: string;
    data?: GetNotifications200ApplicationJSONNotificationsData;
    id?: number;
    notificationType?: number;
    postNumber?: string;
    read?: boolean;
    slug?: string;
    topicId?: number;
    userId?: number;
}
/**
 * notifications
 */
export declare class GetNotifications200ApplicationJSON extends SpeakeasyBase {
    loadMoreNotifications?: string;
    notifications?: GetNotifications200ApplicationJSONNotifications[];
    seenNotificationId?: number;
    totalRowsNotifications?: number;
}
export declare class GetNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * notifications
     */
    getNotifications200ApplicationJSONObject?: GetNotifications200ApplicationJSON;
}
