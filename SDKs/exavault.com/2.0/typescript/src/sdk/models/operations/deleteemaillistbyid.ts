import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteEmailListByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteEmailListByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class DeleteEmailListByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteEmailListByIdPathParams;

  @SpeakeasyMetadata()
  headers: DeleteEmailListByIdHeaders;
}


export class DeleteEmailListByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emptyResponse?: shared.EmptyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
