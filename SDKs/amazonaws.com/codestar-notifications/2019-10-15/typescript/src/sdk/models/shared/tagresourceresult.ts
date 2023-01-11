import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagResourceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Record<string, string>;
}
