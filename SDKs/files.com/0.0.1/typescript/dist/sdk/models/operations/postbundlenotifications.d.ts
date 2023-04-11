import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostBundleNotificationsRequestBody extends SpeakeasyBase {
    /**
     * Bundle ID to notify on
     */
    bundleId: number;
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
export declare class PostBundleNotificationsResponse extends SpeakeasyBase {
    /**
     * The BundleNotifications object.
     */
    bundleNotificationEntity?: shared.BundleNotificationEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
