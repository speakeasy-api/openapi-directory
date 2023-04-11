import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Bundle Notifications
 */
export declare class BundleNotificationEntity extends SpeakeasyBase {
    /**
     * Bundle ID to notify on
     */
    bundleId?: number;
    /**
     * Bundle Notification ID
     */
    id?: number;
    /**
     * Triggers bundle notification when a registration action occurs for it.
     */
    notifyOnRegistration?: boolean;
    /**
     * Triggers bundle notification when a upload action occurs for it.
     */
    notifyOnUpload?: boolean;
    /**
     * The id of the user to notify.
     */
    userId?: number;
}
