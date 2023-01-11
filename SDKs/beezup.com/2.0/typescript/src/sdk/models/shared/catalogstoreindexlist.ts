import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CatalogStoreIndex } from "./catalogstoreindex";



export class CatalogStoreIndexList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: CatalogStoreIndex })
  links?: Record<string, CatalogStoreIndex>;
}
