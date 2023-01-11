import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CurationCommentCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
