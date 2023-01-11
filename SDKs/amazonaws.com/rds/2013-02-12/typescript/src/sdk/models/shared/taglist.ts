import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}
