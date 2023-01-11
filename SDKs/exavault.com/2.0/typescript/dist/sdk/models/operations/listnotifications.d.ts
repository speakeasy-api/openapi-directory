import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListNotificationsActionEnum {
    Connect = "connect",
    Download = "download",
    Upload = "upload",
    Delete = "delete",
    All = "all"
}
export declare enum ListNotificationsIncludeEnum {
    Resource = "resource",
    Share = "share",
    User = "user"
}
export declare enum ListNotificationsTypeEnum {
    File = "file",
    Folder = "folder",
    SharedFolder = "shared_folder",
    SendReceipt = "send_receipt",
    ShareReceipt = "share_receipt",
    FileDrop = "file_drop"
}
export declare class ListNotificationsQueryParams extends SpeakeasyBase {
    action?: ListNotificationsActionEnum;
    include?: ListNotificationsIncludeEnum;
    limit?: number;
    offset?: number;
    sort?: string;
    type?: ListNotificationsTypeEnum;
}
export declare class ListNotificationsHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class ListNotificationsRequest extends SpeakeasyBase {
    queryParams: ListNotificationsQueryParams;
    headers: ListNotificationsHeaders;
}
export declare class ListNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    notificationCollectionResponse?: shared.NotificationCollectionResponse;
    statusCode: number;
}
