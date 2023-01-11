import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelCategorySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mappingLeafRequired" })
  mappingLeafRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mappingRequired" })
  mappingRequired?: boolean;
}
