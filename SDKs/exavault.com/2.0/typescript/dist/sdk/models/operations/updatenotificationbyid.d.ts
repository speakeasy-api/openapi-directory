import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Type of action be notified about. Notifications will only be sent for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)
 */
export declare enum UpdateNotificationByIdUpdateNotificationByIdRequestBodyActionEnum {
    Upload = "upload",
    Download = "download",
    Delete = "delete",
    All = "all"
}
export declare class UpdateNotificationByIdUpdateNotificationByIdRequestBody extends SpeakeasyBase {
    /**
     * Type of action be notified about. Notifications will only be sent for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)
     */
    action?: UpdateNotificationByIdUpdateNotificationByIdRequestBodyActionEnum;
    /**
     * Custom message to insert into the notification emails, along with the matching activity.
     */
    message?: string;
    /**
     * Email addresses to send notification emails to. If empty, sends to the current user's email address.
     */
    recipients?: string[];
    /**
     * Whether an email should be sent to the recipients when matching activity happens.
     */
    sendEmail?: boolean;
    /**
     * Determines which users' actions should trigger the notification.
     *
     * @remarks
     *
     * Rather than listing  individual users, you can also use 3 special options:
     *
     * - **notice\_user\_all** for activity by any user or share recipient
     * - **notice\_user\_all\_users** for activity only by user accounts
     * - **notice\_user\_all\_recipients** for activity only by share recipients
     */
    usernames?: string[];
}
export declare class UpdateNotificationByIdRequest extends SpeakeasyBase {
    requestBody?: UpdateNotificationByIdUpdateNotificationByIdRequestBody;
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
}
export declare class UpdateNotificationByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    notificationResponse?: shared.NotificationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
