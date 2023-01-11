import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateWebhookHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}

export enum UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum {
    V2 = "v2",
    V1 = "v1"
}


export class UpdateWebhookUpdateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpointUrl" })
  endpointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=responseVersion" })
  responseVersion?: UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=triggers" })
  triggers?: shared.WebhookTriggers;
}


export class UpdateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateWebhookPathParams;

  @SpeakeasyMetadata()
  headers: UpdateWebhookHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateWebhookUpdateWebhookRequestBody;
}


export class UpdateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhookResponse?: shared.WebhookResponse;
}
