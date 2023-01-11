import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UntagResourcesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARNList" })
  resourceARNList: string[];

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
