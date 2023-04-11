import { SpeakeasyBase } from "../../../internal/utils";
export declare class NotificationRecipient extends SpeakeasyBase {
    /**
     * Timestamp of adding notification recipient.
     */
    created?: Date;
    /**
     * Recipient email.
     */
    email?: string;
    /**
     * ID of the recipient.
     */
    id?: number;
    /**
     * Timestamp of notification recipient modification.
     */
    modified?: Date;
    /**
     * ID of the notification that the recipient belongs to.
     */
    notificationId?: number;
}
