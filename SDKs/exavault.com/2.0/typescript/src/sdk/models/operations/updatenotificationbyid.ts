import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateNotificationByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateNotificationByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}

export enum UpdateNotificationByIdUpdateNotificationByIdRequestBodyActionEnum {
    Upload = "upload",
    Download = "download",
    Delete = "delete",
    All = "all"
}


export class UpdateNotificationByIdUpdateNotificationByIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: UpdateNotificationByIdUpdateNotificationByIdRequestBodyActionEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=recipients" })
  recipients?: string[];

  @SpeakeasyMetadata({ data: "json, name=sendEmail" })
  sendEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usernames" })
  usernames?: string[];
}


export class UpdateNotificationByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNotificationByIdPathParams;

  @SpeakeasyMetadata()
  headers: UpdateNotificationByIdHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNotificationByIdUpdateNotificationByIdRequestBody;
}


export class UpdateNotificationByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notificationResponse?: shared.NotificationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
