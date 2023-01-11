import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessMode } from "./accessmode";
import { ShareMessage } from "./sharemessage";
import { ShareRecipient } from "./sharerecipient";


export enum ShareAttributesTrackingStatusEnum {
    Complete = "complete",
    Incomplete = "incomplete",
    Pending = "pending"
}

export enum ShareAttributesTypeEnum {
    SharedFolder = "shared_folder",
    Send = "send",
    Receive = "receive"
}


// ShareAttributes
/** 
 * Attributes of the share including the name, path and share recipients. 
**/
export class ShareAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessDescription" })
  accessDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=accessMode" })
  accessMode?: AccessMode;

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

  @SpeakeasyMetadata({ data: "json, name=inherited" })
  inherited?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recipients", elemType: ShareRecipient })
  recipients?: ShareRecipient[];

  @SpeakeasyMetadata({ data: "json, name=requireEmail" })
  requireEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resent" })
  resent?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=trackingStatus" })
  trackingStatus?: ShareAttributesTrackingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ShareAttributesTypeEnum;
}
