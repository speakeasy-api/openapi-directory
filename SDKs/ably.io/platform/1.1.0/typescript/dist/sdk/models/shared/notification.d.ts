import { SpeakeasyBase } from "../../../internal/utils";
export declare class Notification extends SpeakeasyBase {
    /**
     * Text below title on the expanded notification.
     */
    body?: string;
    /**
     * Platform-specific, used to group notifications together.
     */
    collapseKey?: string;
    /**
     * Platform-specific icon for the notification.
     */
    icon?: string;
    /**
     * Platform-specific sound for the notification.
     */
    sound?: string;
    /**
     * Title to display at the notification.
     */
    title?: string;
}
