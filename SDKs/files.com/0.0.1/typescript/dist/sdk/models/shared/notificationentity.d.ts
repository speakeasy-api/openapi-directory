import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The time interval that notifications are aggregated to
 */
export declare enum NotificationEntitySendIntervalEnum {
    FiveMinutes = "five_minutes",
    FifteenMinutes = "fifteen_minutes",
    Hourly = "hourly",
    Daily = "daily"
}
/**
 * The reason that the user unsubscribed
 */
export declare enum NotificationEntityUnsubscribedReasonEnum {
    None = "none",
    UnsubscribeLinkClicked = "unsubscribe_link_clicked",
    MailBounced = "mail_bounced",
    MailMarkedAsSpam = "mail_marked_as_spam"
}
/**
 * List Notifications
 */
export declare class NotificationEntity extends SpeakeasyBase {
    /**
     * Notification group id
     */
    groupId?: number;
    /**
     * Group name if applicable
     */
    groupName?: string;
    /**
     * Notification ID
     */
    id?: number;
    /**
     * Custom message to include in notification emails.
     */
    message?: string;
    /**
     * Triggers notification when copying files to this path
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
     * Trigger notification on notification user actions?
     */
    notifyUserActions?: boolean;
    /**
     * Folder path to notify on
     */
    path?: string;
    /**
     * Enable notifications for each subfolder in this path
     */
    recursive?: boolean;
    /**
     * The time interval that notifications are aggregated to
     */
    sendInterval?: NotificationEntitySendIntervalEnum;
    /**
     * If true, it means that the recipient at this user's email address has manually unsubscribed from all emails, or had their email "hard bounce", which means that we are unable to send mail to this user's current email address. Notifications will resume if the user changes their email address.
     */
    suppressedEmail?: boolean;
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
     * Is the user unsubscribed from this notification?
     */
    unsubscribed?: boolean;
    /**
     * The reason that the user unsubscribed
     */
    unsubscribedReason?: NotificationEntityUnsubscribedReasonEnum;
    /**
     * Notification user ID
     */
    userId?: number;
    /**
     * Notification username
     */
    username?: string;
}
