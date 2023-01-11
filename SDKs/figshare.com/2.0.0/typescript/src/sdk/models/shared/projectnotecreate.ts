import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProjectNoteCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
