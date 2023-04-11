import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for switching notification channel status
 */
export declare class NotificationChannelActivationRequest extends SpeakeasyBase {
    /**
     * Channel ID
     */
    channelId: number;
    /**
     * Determines whether channel is enabled
     */
    isEnabled: boolean;
}
