import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoreListLinks } from "./storelistlinks";
import { Store } from "./store";



export class StoreList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: StoreListLinks;

  @SpeakeasyMetadata({ data: "json, name=stores", elemType: Store })
  stores: Store[];
}
