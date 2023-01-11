import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessMode } from "./accessmode";
import { ShareMessage } from "./sharemessage";
import { ShareRecipient } from "./sharerecipient";



export class WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessedAt" })
  accessedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=fileCount" })
  fileCount?: number;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=previewable" })
  previewable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=uploadDate" })
  uploadDate?: Date;
}


export class WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessDescription" })
  accessDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=accessMode" })
  accessMode?: AccessMode;

  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets?: string[];

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: string;

  @SpeakeasyMetadata({ data: "json, name=expired" })
  expired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fileDropCreateFolders" })
  fileDropCreateFolders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=formId" })
  formId?: number;

  @SpeakeasyMetadata({ data: "json, name=hasNotification" })
  hasNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasPassword" })
  hasPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=inherited" })
  inherited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: ShareMessage })
  messages?: ShareMessage[];

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerHash" })
  ownerHash?: string;

  @SpeakeasyMetadata({ data: "json, name=paths" })
  paths?: string[];

  @SpeakeasyMetadata({ data: "json, name=recipients", elemType: ShareRecipient })
  recipients?: ShareRecipient[];

  @SpeakeasyMetadata({ data: "json, name=requireEmail" })
  requireEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resent" })
  resent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=trackingStatus" })
  trackingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formDetails" })
  formDetails?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources })
  resources?: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataResources[];

  @SpeakeasyMetadata({ data: "json, name=share", elemType: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare })
  share?: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventDataShare[];

  @SpeakeasyMetadata({ data: "json, name=transferStatus" })
  transferStatus?: string;
}


export class WebhookActivityAttributesV2WebhookV2Details extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=attemptId" })
  attemptId?: string;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "json, name=eventData" })
  eventData?: WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData;

  @SpeakeasyMetadata({ data: "json, name=eventTimestamp" })
  eventTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}

export enum WebhookActivityAttributesV2EventEnum {
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


export class WebhookActivityAttributesV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=attemptId" })
  attemptId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: WebhookActivityAttributesV2WebhookV2Details;

  @SpeakeasyMetadata({ data: "json, name=endpointUrl" })
  endpointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: WebhookActivityAttributesV2EventEnum;

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
