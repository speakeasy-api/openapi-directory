import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookAttributes } from "./webhookattributes";



export class WebhookRelationshipsOwnerAccountData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class WebhookRelationshipsOwnerAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: WebhookRelationshipsOwnerAccountData;
}


export class WebhookRelationshipsResourceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class WebhookRelationshipsResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: WebhookRelationshipsResourceData;
}


export class WebhookRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount?: WebhookRelationshipsOwnerAccount;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: WebhookRelationshipsResource;
}


export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: WebhookAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: WebhookRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
