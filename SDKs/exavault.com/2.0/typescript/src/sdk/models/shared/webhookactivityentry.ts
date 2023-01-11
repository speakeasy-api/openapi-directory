import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookActivityAttributesV2 } from "./webhookactivityattributesv2";
import { WebhookActivityAttributesV1 } from "./webhookactivityattributesv1";


export enum WebhookActivityEntryTypeEnum {
    WebhookActivity = "webhookActivity"
}


export class WebhookActivityEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: any;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WebhookActivityEntryTypeEnum;
}
