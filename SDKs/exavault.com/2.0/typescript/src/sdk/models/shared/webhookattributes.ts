import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookTriggers } from "./webhooktriggers";


export enum WebhookAttributesResponseVersionEnum {
    V1 = "v1",
    V2 = "v2"
}


export class WebhookAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=endpointUrl" })
  endpointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: Date;

  @SpeakeasyMetadata({ data: "json, name=responseVersion" })
  responseVersion?: WebhookAttributesResponseVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=triggers" })
  triggers?: WebhookTriggers;

  @SpeakeasyMetadata({ data: "json, name=verificationToken" })
  verificationToken?: string;
}
