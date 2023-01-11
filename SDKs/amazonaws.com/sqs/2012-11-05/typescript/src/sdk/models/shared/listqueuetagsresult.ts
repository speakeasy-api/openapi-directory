import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListQueueTagsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  tags?: Record<string, string>;
}
