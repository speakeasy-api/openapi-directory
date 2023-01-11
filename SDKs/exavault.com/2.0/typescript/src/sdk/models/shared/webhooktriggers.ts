import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WebhookTriggersResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compress" })
  compress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=copy" })
  copy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createFolder" })
  createFolder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extract" })
  extract?: boolean;

  @SpeakeasyMetadata({ data: "json, name=move" })
  move?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rename" })
  rename?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload?: boolean;
}


export class WebhookTriggersShares extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formSubmit" })
  formSubmit?: boolean;
}


export class WebhookTriggers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: WebhookTriggersResources;

  @SpeakeasyMetadata({ data: "json, name=shares" })
  shares?: WebhookTriggersShares;
}
