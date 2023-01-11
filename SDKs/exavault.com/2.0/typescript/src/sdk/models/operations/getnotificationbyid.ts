import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNotificationByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetNotificationByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetNotificationByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class GetNotificationByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNotificationByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNotificationByIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetNotificationByIdHeaders;
}


export class GetNotificationByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notificationResponse?: shared.NotificationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
