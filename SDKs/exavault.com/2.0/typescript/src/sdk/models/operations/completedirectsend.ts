import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompleteDirectSendPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CompleteDirectSendHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class CompleteDirectSendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompleteDirectSendPathParams;

  @SpeakeasyMetadata()
  headers: CompleteDirectSendHeaders;
}


export class CompleteDirectSendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  shareResponse?: shared.ShareResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
