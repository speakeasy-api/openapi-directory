import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBundleNotificationsIdRequest extends SpeakeasyBase {
    /**
     * Bundle Notification ID.
     */
    id: number;
}
export declare class GetBundleNotificationsIdResponse extends SpeakeasyBase {
    /**
     * The BundleNotifications object.
     */
    bundleNotificationEntity?: shared.BundleNotificationEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
