import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ToggleNotificationChannelsRequest extends SpeakeasyBase {
    notificationChannelActivationRequest: shared.NotificationChannelActivationRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class ToggleNotificationChannelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    notificationChannelList?: shared.NotificationChannelList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
