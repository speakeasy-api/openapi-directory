import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegenerateWebhookTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RegenerateWebhookTokenHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class RegenerateWebhookTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegenerateWebhookTokenPathParams;

  @SpeakeasyMetadata()
  headers: RegenerateWebhookTokenHeaders;
}


export class RegenerateWebhookTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhookResponse?: shared.WebhookResponse;
}
