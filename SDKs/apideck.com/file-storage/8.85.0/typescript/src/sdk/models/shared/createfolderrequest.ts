import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFolderRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=drive_id" })
  driveId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent_folder_id" })
  parentFolderId: string;
}
