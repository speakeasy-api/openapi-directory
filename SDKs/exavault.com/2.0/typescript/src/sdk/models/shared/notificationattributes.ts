import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationRecipient } from "./notificationrecipient";


export enum NotificationAttributesActionEnum {
    Upload = "upload",
    Download = "download",
    Delete = "delete",
    All = "all"
}

export enum NotificationAttributesTypeEnum {
    File = "file",
    Folder = "folder",
    SharedFolder = "shared_folder",
    SendReceipt = "send_receipt",
    ShareReceipt = "share_receipt",
    FileDrop = "file_drop"
}


// NotificationAttributes
/** 
 * Attributes for the notification including the path, recipients, and share data. 
**/
export class NotificationAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: NotificationAttributesActionEnum;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=readableDescription" })
  readableDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=readableDescriptionWithoutPath" })
  readableDescriptionWithoutPath?: string;

  @SpeakeasyMetadata({ data: "json, name=recipients", elemType: NotificationRecipient })
  recipients?: NotificationRecipient[];

  @SpeakeasyMetadata({ data: "json, name=sendEmail" })
  sendEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shareId" })
  shareId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NotificationAttributesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=usernames" })
  usernames?: string[];
}
