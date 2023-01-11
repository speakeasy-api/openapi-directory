import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddNotificationHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare enum AddNotificationAddNotificationRequestBodyActionEnum {
    Upload = "upload",
    Download = "download",
    Delete = "delete",
    All = "all"
}
export declare enum AddNotificationAddNotificationRequestBodyTypeEnum {
    File = "file",
    Folder = "folder"
}
export declare class AddNotificationAddNotificationRequestBody extends SpeakeasyBase {
    action: AddNotificationAddNotificationRequestBodyActionEnum;
    message?: string;
    recipients?: string[];
    resource: string;
    sendEmail: boolean;
    type: AddNotificationAddNotificationRequestBodyTypeEnum;
    usernames: string[];
}
export declare class AddNotificationRequest extends SpeakeasyBase {
    headers: AddNotificationHeaders;
    request?: AddNotificationAddNotificationRequestBody;
}
export declare class AddNotificationResponse extends SpeakeasyBase {
    contentType: string;
    notificationResponse?: shared.NotificationResponse;
    statusCode: number;
}
