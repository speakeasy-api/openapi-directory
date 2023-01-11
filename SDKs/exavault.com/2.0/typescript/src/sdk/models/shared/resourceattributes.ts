import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ResourceAttributesTypeEnum {
    File = "file",
    Dir = "dir"
}


// ResourceAttributes
/** 
 * Attributes of resource
**/
export class ResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessedAt" })
  accessedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=accessedTime" })
  accessedTime?: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: number;

  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=fileCount" })
  fileCount?: number;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=previewable" })
  previewable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ResourceAttributesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedTime" })
  updatedTime?: number;

  @SpeakeasyMetadata({ data: "json, name=uploadDate" })
  uploadDate?: Date;
}
