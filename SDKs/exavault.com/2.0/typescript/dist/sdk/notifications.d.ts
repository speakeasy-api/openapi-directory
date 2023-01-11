import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addNotification - Create a new notification
     *
     * Create a new notification for a [resource](#section/Identifying-Resources) in your account. Notifications can be sent via email or webhook;
     *
     * - To enable email, pass an array of email addresses to the `recipients` parameter of this call.
     * - To enable webhooks, setup the webhook callback URL in your account settings via [PATCH /account](#operation/updateAccount).
     *
     * **Notes:**
     *   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)
     *
    **/
    addNotification(req: operations.AddNotificationRequest, config?: AxiosRequestConfig): Promise<operations.AddNotificationResponse>;
    /**
     * deleteNotificationById - Delete a notification
     *
     * Deletes a notification. Note that deleting a notification _only_ deletes the notification &ndash; it does not delete any underlying files or folders.
     *
     * **Notes:**
     *
     * - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
     * - You can only delete notifications owned by your user account.
    **/
    deleteNotificationById(req: operations.DeleteNotificationByIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationByIdResponse>;
    /**
     * getNotificationById - Get notification details
     *
     * Get the details for a notification with a specific ID number. You'll be able to review its path, triggers and who's getting the notification.
     *
     * **Notes**
     *
     * - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to view the detail for a notification.
     * - You can only retrieve notifications owned by your user account.
    **/
    getNotificationById(req: operations.GetNotificationByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationByIdResponse>;
    /**
     * listNotifications - Get a list of notifications
     *
     * Get a list of all the [notifications](/docs/account/06-notifications) you have access to. You can use sorting and filtering to limit the returned list.
     *
     * **Notes:**
     *   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)
    **/
    listNotifications(req: operations.ListNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.ListNotificationsResponse>;
    /**
     * updateNotificationById - Update a notification
     *
     * Update an existing notification. You can add additional emails or change the action or users that cause a notification to trigger.
     *
     * When updating recipient emails, make sure your `recipients` parameter contains the full list of people who should be included on the notification. If you resend the list without an existing recipient, they will be deleted from the notification emails.
     *
     * **Notes:**
     *
     * - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
     * - You can only change notifications owned by your user account.
    **/
    updateNotificationById(req: operations.UpdateNotificationByIdRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNotificationByIdResponse>;
}
