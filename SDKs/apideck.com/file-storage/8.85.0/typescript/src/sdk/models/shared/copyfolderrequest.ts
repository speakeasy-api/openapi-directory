import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopyFolderRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_folder_id" })
  parentFolderId: string;
}
