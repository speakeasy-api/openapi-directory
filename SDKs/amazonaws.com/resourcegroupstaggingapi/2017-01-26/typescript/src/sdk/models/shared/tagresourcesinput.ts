import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagResourcesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARNList" })
  resourceARNList: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags: Record<string, string>;
}
