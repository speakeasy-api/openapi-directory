import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostNotificationsRequestBody extends SpeakeasyBase {
    /**
     * The ID of the group to notify.  Provide `user_id`, `username` or `group_id`.
     */
    groupId?: number;
    /**
     * Custom message to include in notification emails.
     */
    message?: string;
    /**
     * If `true`, copying or moving resources into this path will trigger a notification, in addition to just uploads.
     */
    notifyOnCopy?: boolean;
    /**
     * Triggers notification when deleting files from this path
     */
    notifyOnDelete?: boolean;
    /**
     * Triggers notification when downloading files from this path
     */
    notifyOnDownload?: boolean;
    /**
     * Triggers notification when moving files to this path
     */
    notifyOnMove?: boolean;
    /**
     * Triggers notification when uploading new files to this path
     */
    notifyOnUpload?: boolean;
    /**
     * If `true` actions initiated by the user will still result in a notification
     */
    notifyUserActions?: boolean;
    /**
     * Path
     */
    path?: string;
    /**
     * If `true`, enable notifications for each subfolder in this path
     */
    recursive?: boolean;
    /**
     * The time interval that notifications are aggregated by.  Can be `five_minutes`, `fifteen_minutes`, `hourly`, or `daily`.
     */
    sendInterval?: string;
    /**
     * Notify when actions are performed by a share recipient?
     */
    triggerByShareRecipients?: boolean;
    /**
     * Array of filenames (possibly with wildcards) to match for action path
     */
    triggeringFilenames?: string[];
    /**
     * Only notify on actions made by a member of one of the specified groups
     */
    triggeringGroupIds?: number[];
    /**
     * Only notify on actions made one of the specified users
     */
    triggeringUserIds?: number[];
    /**
     * The id of the user to notify. Provide `user_id`, `username` or `group_id`.
     */
    userId?: number;
    /**
     * The username of the user to notify.  Provide `user_id`, `username` or `group_id`.
     */
    username?: string;
}
export declare class PostNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Notifications object.
     */
    notificationEntity?: shared.NotificationEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
