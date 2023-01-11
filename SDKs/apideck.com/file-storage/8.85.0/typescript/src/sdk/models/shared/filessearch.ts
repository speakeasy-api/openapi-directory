import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilesSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drive_id" })
  driveId?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: string;
}
