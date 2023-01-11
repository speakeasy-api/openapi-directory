import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemList } from "./itemlist";



export class SelectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ItemList })
  items?: ItemList[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
