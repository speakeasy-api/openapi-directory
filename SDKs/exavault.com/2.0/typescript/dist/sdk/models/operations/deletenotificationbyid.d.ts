import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteNotificationByIdRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.
     */
    id: number;
}
export declare class DeleteNotificationByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
