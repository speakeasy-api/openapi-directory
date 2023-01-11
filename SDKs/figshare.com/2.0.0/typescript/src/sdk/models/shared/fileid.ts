import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_id" })
  fileId?: number;
}
