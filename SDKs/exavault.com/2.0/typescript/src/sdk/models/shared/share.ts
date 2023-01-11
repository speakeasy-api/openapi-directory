import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShareAttributes } from "./shareattributes";


export enum ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum {
    Message = "message"
}


export class ShareShareRelationshipsShareRelationshipsMessageShareMessageData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum;
}


export class ShareShareRelationshipsShareRelationshipsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ShareShareRelationshipsShareRelationshipsMessageShareMessageData;
}

export enum ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum {
    Notification = "notification"
}


export class ShareShareRelationshipsShareRelationshipsNotificationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum;
}


export class ShareShareRelationshipsShareRelationshipsNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ShareShareRelationshipsShareRelationshipsNotificationData;
}


export class ShareShareRelationshipsShareRelationshipsOwnerData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ShareShareRelationshipsShareRelationshipsOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ShareShareRelationshipsShareRelationshipsOwnerData;
}

export enum ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum {
    Resource = "resource"
}


export class ShareShareRelationshipsShareRelationshipsResourceShareResourceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum;
}


export class ShareShareRelationshipsShareRelationshipsResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ShareShareRelationshipsShareRelationshipsResourceShareResourceData;
}


// ShareShareRelationships
/** 
 * Message, owner, resource, and notification relationships of the share. 
**/
export class ShareShareRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: ShareShareRelationshipsShareRelationshipsMessage })
  messages?: ShareShareRelationshipsShareRelationshipsMessage[];

  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: ShareShareRelationshipsShareRelationshipsNotification })
  notifications?: ShareShareRelationshipsShareRelationshipsNotification[];

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: ShareShareRelationshipsShareRelationshipsOwner;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ShareShareRelationshipsShareRelationshipsResource })
  resources?: ShareShareRelationshipsShareRelationshipsResource[];
}

export enum ShareTypeEnum {
    Share = "share"
}


// Share
/** 
 * Object contains share properties.
**/
export class Share extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: ShareAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: ShareShareRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ShareTypeEnum;
}
