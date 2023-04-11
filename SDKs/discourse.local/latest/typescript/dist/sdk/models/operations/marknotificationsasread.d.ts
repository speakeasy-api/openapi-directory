import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MarkNotificationsAsReadRequestBody extends SpeakeasyBase {
    /**
     * (optional) Leave off to mark all notifications as
     *
     * @remarks
     * read
     */
    id?: number;
}
/**
 * notifications marked read
 */
export declare class MarkNotificationsAsRead200ApplicationJSON extends SpeakeasyBase {
    success?: string;
}
export declare class MarkNotificationsAsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * notifications marked read
     */
    markNotificationsAsRead200ApplicationJSONObject?: MarkNotificationsAsRead200ApplicationJSON;
}
