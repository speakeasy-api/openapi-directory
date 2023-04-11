import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchBundleNotificationsIdRequestBody extends SpeakeasyBase {
    /**
     * Triggers bundle notification when a registration action occurs for it.
     */
    notifyOnRegistration?: boolean;
    /**
     * Triggers bundle notification when a upload action occurs for it.
     */
    notifyOnUpload?: boolean;
}
export declare class PatchBundleNotificationsIdRequest extends SpeakeasyBase {
    requestBody?: PatchBundleNotificationsIdRequestBody;
    /**
     * Bundle Notification ID.
     */
    id: number;
}
export declare class PatchBundleNotificationsIdResponse extends SpeakeasyBase {
    /**
     * The BundleNotifications object.
     */
    bundleNotificationEntity?: shared.BundleNotificationEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
