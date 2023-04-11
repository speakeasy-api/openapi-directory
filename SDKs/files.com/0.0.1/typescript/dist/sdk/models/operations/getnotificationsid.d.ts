import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNotificationsIdRequest extends SpeakeasyBase {
    /**
     * Notification ID.
     */
    id: number;
}
export declare class GetNotificationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Notifications object.
     */
    notificationEntity?: shared.NotificationEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
