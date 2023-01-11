import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Record<string, string>;
}
