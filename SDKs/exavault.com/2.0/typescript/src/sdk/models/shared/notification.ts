import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationAttributes } from "./notificationattributes";


export enum NotificationRelationshipsOwnerUserDataTypeEnum {
    User = "user"
}


export class NotificationRelationshipsOwnerUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NotificationRelationshipsOwnerUserDataTypeEnum;
}


export class NotificationRelationshipsOwnerUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: NotificationRelationshipsOwnerUserData;
}


export class NotificationRelationshipsResourceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class NotificationRelationshipsResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: NotificationRelationshipsResourceData;
}


export class NotificationRelationshipsShareData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class NotificationRelationshipsShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: NotificationRelationshipsShareData;
}


export class NotificationRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ownerUser" })
  ownerUser?: NotificationRelationshipsOwnerUser;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: NotificationRelationshipsResource;

  @SpeakeasyMetadata({ data: "json, name=share" })
  share?: NotificationRelationshipsShare;
}


// Notification
/** 
 * Object containing notification properties.
**/
export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: NotificationAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: NotificationRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
