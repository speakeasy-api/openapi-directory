import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendWelcomeEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class SendWelcomeEmailHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class SendWelcomeEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendWelcomeEmailPathParams;

  @SpeakeasyMetadata()
  headers: SendWelcomeEmailHeaders;
}


export class SendWelcomeEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emptyResponse?: shared.EmptyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
