import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceAttributes } from "./resourceattributes";



export class ResourceRelationshipsDirectFileData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ResourceRelationshipsDirectFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceRelationshipsDirectFileData;
}


export class ResourceRelationshipsNotificationsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ResourceRelationshipsNotifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceRelationshipsNotificationsData;
}


export class ResourceRelationshipsParentResourceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ResourceRelationshipsParentResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceRelationshipsParentResourceData;
}


export class ResourceRelationshipsShareData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ResourceRelationshipsShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceRelationshipsShareData;
}


export class ResourceRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directFile" })
  directFile?: ResourceRelationshipsDirectFile;

  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: ResourceRelationshipsNotifications })
  notifications?: ResourceRelationshipsNotifications[];

  @SpeakeasyMetadata({ data: "json, name=parentResource" })
  parentResource?: ResourceRelationshipsParentResource;

  @SpeakeasyMetadata({ data: "json, name=share" })
  share?: ResourceRelationshipsShare;
}

export enum ResourceTypeEnum {
    Resource = "resource"
}


// Resource
/** 
 * All properties of the resource.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: ResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: ResourceRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ResourceTypeEnum;
}
