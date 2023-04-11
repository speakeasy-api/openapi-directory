import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityMarkNotificationsAsReadRequestBody extends SpeakeasyBase {
    /**
     * Describes the last point that notifications were checked.
     */
    lastReadAt?: Date;
    /**
     * Whether the notification has been read.
     */
    read?: boolean;
}
/**
 * Response
 */
export declare class ActivityMarkNotificationsAsRead202ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
export declare class ActivityMarkNotificationsAsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    activityMarkNotificationsAsRead202ApplicationJSONObject?: ActivityMarkNotificationsAsRead202ApplicationJSON;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
