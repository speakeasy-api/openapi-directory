import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddNotificationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}

export enum AddNotificationAddNotificationRequestBodyActionEnum {
    Upload = "upload",
    Download = "download",
    Delete = "delete",
    All = "all"
}

export enum AddNotificationAddNotificationRequestBodyTypeEnum {
    File = "file",
    Folder = "folder"
}


export class AddNotificationAddNotificationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: AddNotificationAddNotificationRequestBodyActionEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=recipients" })
  recipients?: string[];

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=sendEmail" })
  sendEmail: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AddNotificationAddNotificationRequestBodyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=usernames" })
  usernames: string[];
}


export class AddNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddNotificationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AddNotificationAddNotificationRequestBody;
}


export class AddNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notificationResponse?: shared.NotificationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
