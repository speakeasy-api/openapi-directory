import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Notification channel information
 */
export declare class NotificationChannel extends SpeakeasyBase {
    /**
     * Channel frequency (aggregation window size in minutes)
     */
    frequency: number;
    /**
     * Channel ID
     */
    id: number;
    /**
     * Determines whether channel is enabled
     */
    isEnabled: boolean;
    /**
     * Name
     */
    name: string;
    /**
     * Channel type (only `EMAIL` available at the moment)
     */
    type: string;
}
