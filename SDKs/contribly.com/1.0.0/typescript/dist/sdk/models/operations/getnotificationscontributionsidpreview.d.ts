import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNotificationsContributionsIdPreviewRequest extends SpeakeasyBase {
    /**
     * Id of the contribution to preview a notification for
     */
    id: string;
    /**
     * Type of message to preview.
     */
    message: string;
}
export declare class GetNotificationsContributionsIdPreviewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Notification preview
     */
    notificationPreview?: shared.NotificationPreview;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
