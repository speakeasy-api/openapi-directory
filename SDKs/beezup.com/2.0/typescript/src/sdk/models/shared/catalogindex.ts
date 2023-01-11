import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CatalogIndexLinks } from "./catalogindexlinks";
import { CatalogIndexLovLinks } from "./catalogindexlovlinks";
import { CatalogStoreIndexList } from "./catalogstoreindexlist";



export class CatalogIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: CatalogIndexLinks;

  @SpeakeasyMetadata({ data: "json, name=lovLinks" })
  lovLinks: CatalogIndexLovLinks;

  @SpeakeasyMetadata({ data: "json, name=storeLinks" })
  storeLinks?: CatalogStoreIndexList;
}
