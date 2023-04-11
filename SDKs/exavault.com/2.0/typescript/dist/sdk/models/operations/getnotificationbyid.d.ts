import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNotificationByIdRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.
     */
    id: number;
    /**
     * Related record types to include in the response. You can include multiple types by separating them with commas. Valid options are **ownerUser**, **resource**, and **share**.
     */
    include?: string;
}
export declare class GetNotificationByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    notificationResponse?: shared.NotificationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
