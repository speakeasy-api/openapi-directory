import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeList } from "./attributelist";



export class ItemList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alternateNameEncoding?: Record<string, any>;

  @SpeakeasyMetadata({ elemType: AttributeList })
  attributes: AttributeList[];

  @SpeakeasyMetadata()
  name: string;
}
