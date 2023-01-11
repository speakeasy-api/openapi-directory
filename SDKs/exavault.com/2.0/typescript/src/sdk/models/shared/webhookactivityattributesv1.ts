import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WebhookActivityAttributesV1WebhookV1Details extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=attempt" })
  attempt?: number;

  @SpeakeasyMetadata({ data: "json, name=attemptId" })
  attemptId?: string;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}

export enum WebhookActivityAttributesV1EventEnum {
    ResourcesUpload = "resources.upload",
    ResourcesDownload = "resources.download",
    ResourcesDelete = "resources.delete",
    ResourcesRename = "resources.rename",
    ResourcesCopy = "resources.copy",
    ResourcesMove = "resources.move",
    ResourcesCompress = "resources.compress",
    ResourcesExtract = "resources.extract",
    ResourcesCreateFolder = "resources.createFolder",
    SharesFormSubmit = "shares.formSubmit"
}


export class WebhookActivityAttributesV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=attemptId" })
  attemptId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: WebhookActivityAttributesV1WebhookV1Details;

  @SpeakeasyMetadata({ data: "json, name=endpointUrl" })
  endpointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: WebhookActivityAttributesV1EventEnum;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=resend" })
  resend?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourcePath" })
  resourcePath?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookFormat" })
  webhookFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookId" })
  webhookId?: number;

  @SpeakeasyMetadata({ data: "json, name=webhookPath" })
  webhookPath?: string;
}
