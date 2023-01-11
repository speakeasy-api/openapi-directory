import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationRecipient } from "./notificationrecipient";
export declare enum NotificationAttributesActionEnum {
    Upload = "upload",
    Download = "download",
    Delete = "delete",
    All = "all"
}
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
**/
export declare class NotificationAttributes extends SpeakeasyBase {
    action?: NotificationAttributesActionEnum;
    created?: Date;
    message?: string;
    modified?: Date;
    name?: string;
    path?: string;
    readableDescription?: string;
    readableDescriptionWithoutPath?: string;
    recipients?: NotificationRecipient[];
    sendEmail?: boolean;
    shareId?: string;
    type?: NotificationAttributesTypeEnum;
    userId?: string;
    usernames?: string[];
}
