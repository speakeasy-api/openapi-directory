import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteNotificationByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteNotificationByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class DeleteNotificationByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNotificationByIdPathParams;

  @SpeakeasyMetadata()
  headers: DeleteNotificationByIdHeaders;
}


export class DeleteNotificationByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emptyResponse?: shared.EmptyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
