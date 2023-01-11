import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateNotificationByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateNotificationByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare enum UpdateNotificationByIdUpdateNotificationByIdRequestBodyActionEnum {
    Upload = "upload",
    Download = "download",
    Delete = "delete",
    All = "all"
}
export declare class UpdateNotificationByIdUpdateNotificationByIdRequestBody extends SpeakeasyBase {
    action?: UpdateNotificationByIdUpdateNotificationByIdRequestBodyActionEnum;
    message?: string;
    recipients?: string[];
    sendEmail?: boolean;
    usernames?: string[];
}
export declare class UpdateNotificationByIdRequest extends SpeakeasyBase {
    pathParams: UpdateNotificationByIdPathParams;
    headers: UpdateNotificationByIdHeaders;
    request?: UpdateNotificationByIdUpdateNotificationByIdRequestBody;
}
export declare class UpdateNotificationByIdResponse extends SpeakeasyBase {
    contentType: string;
    notificationResponse?: shared.NotificationResponse;
    statusCode: number;
}
