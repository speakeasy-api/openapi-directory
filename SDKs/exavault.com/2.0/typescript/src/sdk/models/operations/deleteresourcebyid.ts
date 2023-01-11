import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteResourceByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteResourceByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class DeleteResourceByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteResourceByIdPathParams;

  @SpeakeasyMetadata()
  headers: DeleteResourceByIdHeaders;
}


export class DeleteResourceByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emptyResponse?: shared.EmptyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
