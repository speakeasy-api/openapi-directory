import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating notification configuration
 */
export declare class NotificationConfigChangeRequest extends SpeakeasyBase {
    /**
     * List of notification channel IDs.
     *
     * @remarks
     *
     * Leave empty to disable notifications.
     */
    channelIds: number[];
}
