import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListNotificationsActionEnum {
    Connect = "connect",
    Download = "download",
    Upload = "upload",
    Delete = "delete",
    All = "all"
}

export enum ListNotificationsIncludeEnum {
    Resource = "resource",
    Share = "share",
    User = "user"
}

export enum ListNotificationsTypeEnum {
    File = "file",
    Folder = "folder",
    SharedFolder = "shared_folder",
    SendReceipt = "send_receipt",
    ShareReceipt = "share_receipt",
    FileDrop = "file_drop"
}


export class ListNotificationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: ListNotificationsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: ListNotificationsIncludeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ListNotificationsTypeEnum;
}


export class ListNotificationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class ListNotificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListNotificationsQueryParams;

  @SpeakeasyMetadata()
  headers: ListNotificationsHeaders;
}


export class ListNotificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notificationCollectionResponse?: shared.NotificationCollectionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
