import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=drive_id" })
  driveId?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=folder_id" })
  folderId?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=shared" })
  shared?: boolean;
}
