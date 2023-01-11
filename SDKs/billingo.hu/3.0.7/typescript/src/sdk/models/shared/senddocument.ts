import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];
}
