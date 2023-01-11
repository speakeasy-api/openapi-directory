import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items" })
  items?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: Record<string, any>;
}
