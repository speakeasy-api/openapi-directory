import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddWebhookHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}

export enum AddWebhookAddWebhookRequestBodyResponseVersionEnum {
    V1 = "v1",
    V2 = "v2"
}


export class AddWebhookAddWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpointUrl" })
  endpointUrl: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=responseVersion" })
  responseVersion?: AddWebhookAddWebhookRequestBodyResponseVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=triggers" })
  triggers?: shared.WebhookTriggers;
}


export class AddWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddWebhookHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AddWebhookAddWebhookRequestBody;
}


export class AddWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhookResponse?: shared.WebhookResponse;
}
