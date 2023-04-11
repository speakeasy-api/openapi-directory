import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateNotificationConfigRequest extends SpeakeasyBase {
    notificationConfigChangeRequest: shared.NotificationConfigChangeRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Unique identifier for a notification configuration
     */
    id: number;
}
export declare class UpdateNotificationConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    notificationConfig?: shared.NotificationConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
