import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteShareByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteShareByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class DeleteShareByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteShareByIdPathParams;

  @SpeakeasyMetadata()
  headers: DeleteShareByIdHeaders;
}


export class DeleteShareByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emptyResponse?: shared.EmptyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
