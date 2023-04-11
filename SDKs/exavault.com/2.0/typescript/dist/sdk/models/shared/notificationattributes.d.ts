import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationRecipient } from "./notificationrecipient";
/**
 * Action that triggers notification.
 */
export declare enum NotificationAttributesActionEnum {
    Upload = "upload",
    Download = "download",
    Delete = "delete",
    All = "all"
}
/**
 * Whether or not an email will send when the notification is triggered.
 */
export declare enum NotificationAttributesSendEmailEnum {
    True = "true",
    False = "false"
}
/**
 * Type of the resource the notification is attached to.
 */
export declare enum NotificationAttributesTypeEnum {
    File = "file",
    Folder = "folder",
    SharedFolder = "shared_folder",
    SendReceipt = "send_receipt",
    ShareReceipt = "share_receipt",
    FileDrop = "file_drop"
}
/**
 * Attributes for the notification including the path, recipients, and share data.
 */
export declare class NotificationAttributes extends SpeakeasyBase {
    /**
     * Action that triggers notification.
     */
    action?: NotificationAttributesActionEnum;
    /**
     * Timestamp of notifiction creation.
     */
    created?: Date;
    /**
     * Custom message that will be sent to the notification recipients.
     */
    message?: string;
    /**
     * Timestamp of notification modification.
     */
    modified?: Date;
    /**
     * Name of the item that the notification is set on.
     */
    name?: string;
    /**
     * Path to the item that the notification is set on.
     */
    path?: string;
    /**
     * Human readable description of the notification.
     */
    readableDescription?: string;
    /**
     * Human readable description of the notification without item path.
     */
    readableDescriptionWithoutPath?: string;
    /**
     * Notification recipients.
     */
    recipients?: NotificationRecipient[];
    /**
     * Whether or not an email will send when the notification is triggered.
     */
    sendEmail?: NotificationAttributesSendEmailEnum;
    /**
     * ID of the share that the notification belogns to.
     */
    shareId?: string;
    /**
     * Type of the resource the notification is attached to.
     */
    type?: NotificationAttributesTypeEnum;
    /**
     * ID of the user that the notification belongs to.
     */
    userId?: string;
    /**
     * Detail on which users can trigger the notification.
     */
    usernames?: string[];
}
