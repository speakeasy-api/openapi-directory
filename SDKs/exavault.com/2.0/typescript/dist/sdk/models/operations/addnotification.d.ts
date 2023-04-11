import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Type of action be notified about. Notifications will only be fired for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)
 */
export declare enum AddNotificationAddNotificationRequestBodyActionEnum {
    Upload = "upload",
    Download = "download",
    Delete = "delete",
    All = "all"
}
/**
 * What kind of notification you're making. Valid choices are:
 *
 * @remarks
 *
 * - **file** to monitor activity for a file resource
 * - **folder** to monitor activity for a folder resource
 */
export declare enum AddNotificationAddNotificationRequestBodyTypeEnum {
    File = "file",
    Folder = "folder"
}
export declare class AddNotificationAddNotificationRequestBody extends SpeakeasyBase {
    /**
     * Type of action be notified about. Notifications will only be fired for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)
     */
    action: AddNotificationAddNotificationRequestBodyActionEnum;
    /**
     * Custom message to include in notification emails.
     */
    message?: string;
    /**
     * Email addresses to send notification emails to. If not specified, sends to the current user's email address.
     */
    recipients?: string[];
    /**
     * Resources for this notification. See details on [how to specify resources](#section/Identifying-Resources) above.
     */
    resource: string;
    /**
     * Set to true if the user should be notified by email when the notification is triggered.
     */
    sendEmail: boolean;
    /**
     * What kind of notification you're making. Valid choices are:
     *
     * @remarks
     *
     * - **file** to monitor activity for a file resource
     * - **folder** to monitor activity for a folder resource
     */
    type: AddNotificationAddNotificationRequestBodyTypeEnum;
    /**
     * Determines which users' actions should trigger the notification.
     *
     * @remarks
     *
     * Rather than listing  individual users, you can also use 3 special options:
     *
     * - **notice\_user\_all** for activity by any user or share recipient
     * - **notice\_user\_all\_users** for activity only by user accounts
     * - **notice\_user\_all\_recipient** for activity only by share recipients
     */
    usernames: string[];
}
export declare class AddNotificationRequest extends SpeakeasyBase {
    requestBody?: AddNotificationAddNotificationRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make API call.
     */
    evApiKey: string;
}
export declare class AddNotificationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    notificationResponse?: shared.NotificationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
