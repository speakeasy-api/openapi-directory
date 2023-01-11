import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlanDetailsWebhookOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=includeTriggers" })
  includeTriggers?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictionTypes" })
  restrictionTypes?: string[];
}


export class PlanDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeys" })
  apiKeys?: number;

  @SpeakeasyMetadata({ data: "json, name=apiTokens" })
  apiTokens?: number;

  @SpeakeasyMetadata({ data: "json, name=colorSchema" })
  colorSchema?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customDomain" })
  customDomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customName" })
  customName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=directLinks" })
  directLinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipWhitelist" })
  ipWhitelist?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sharingOptions" })
  sharingOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=sshKeys" })
  sshKeys?: number;

  @SpeakeasyMetadata({ data: "json, name=storageAddOn" })
  storageAddOn?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimitedUsers" })
  unlimitedUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userExpiration" })
  userExpiration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userImport" })
  userImport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webhookOptions" })
  webhookOptions?: PlanDetailsWebhookOptions;
}
