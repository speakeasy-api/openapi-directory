import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The kind of action which triggers the notification. Valid choices are **connect** (only for delivery receipts), **download**, **upload**, **delete**, or **all**
 *
 * @remarks
 *
 * **Note** The **all** action matches notifications set to "all", not all notifications. For example, notifications set to trigger only on delete are not included if you filter for action=all
 */
export declare enum ListNotificationsActionEnum {
    Connect = "connect",
    Download = "download",
    Upload = "upload",
    Delete = "delete",
    All = "all"
}
/**
 * Related records to include in the response. Valid options are **ownerUser**, **resource**, **share**
 */
export declare enum ListNotificationsIncludeEnum {
    Resource = "resource",
    Share = "share",
    User = "user"
}
/**
 * Type of notification include in the list. Valid options are **file**, **folder**, **send_receipt**, **share_receipt**, **file_drop**
 *
 * @remarks
 *
 * If this parameter is not used, only **file** and **folder** type notifications are included in the list.
 */
export declare enum ListNotificationsTypeEnum {
    File = "file",
    Folder = "folder",
    SharedFolder = "shared_folder",
    SendReceipt = "send_receipt",
    ShareReceipt = "share_receipt",
    FileDrop = "file_drop"
}
export declare class ListNotificationsRequest extends SpeakeasyBase {
    /**
     * The kind of action which triggers the notification. Valid choices are **connect** (only for delivery receipts), **download**, **upload**, **delete**, or **all**
     *
     * @remarks
     *
     * **Note** The **all** action matches notifications set to "all", not all notifications. For example, notifications set to trigger only on delete are not included if you filter for action=all
     */
    action?: ListNotificationsActionEnum;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * Related records to include in the response. Valid options are **ownerUser**, **resource**, **share**
     */
    include?: ListNotificationsIncludeEnum;
    /**
     * Number of notification records to return. Can be used for pagination.
     */
    limit?: number;
    /**
     * Starting notification record in the result set. Can be used for pagination.
     */
    offset?: number;
    /**
     * What order the list of matches should be in. Valid sort fields are **resourcename**, **date**, **action** and **type**. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.
     *
     * @remarks
     *
     * You can chose multiple options for the sort by separating them with commmas, such as "type,-date" to sort by type, then most recent.
     */
    sort?: string;
    /**
     * Type of notification include in the list. Valid options are **file**, **folder**, **send_receipt**, **share_receipt**, **file_drop**
     *
     * @remarks
     *
     * If this parameter is not used, only **file** and **folder** type notifications are included in the list.
     */
    type?: ListNotificationsTypeEnum;
}
export declare class ListNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    notificationCollectionResponse?: shared.NotificationCollectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
