import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Owner } from "./owner";
import { LinkedFolder } from "./linkedfolder";



export class Folder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: Owner;

  @SpeakeasyMetadata({ data: "json, name=parent_folders", elemType: LinkedFolder })
  parentFolders: LinkedFolder[];

  @SpeakeasyMetadata({ data: "json, name=parent_folders_complete" })
  parentFoldersComplete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
