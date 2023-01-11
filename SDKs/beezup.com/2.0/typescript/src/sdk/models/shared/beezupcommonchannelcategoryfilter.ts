import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BeezUpCommonChannelCategoryFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryPath" })
  categoryPath?: string[];
}
