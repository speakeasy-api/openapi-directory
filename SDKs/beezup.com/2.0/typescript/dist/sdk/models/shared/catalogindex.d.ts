import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogIndexLinks } from "./catalogindexlinks";
import { CatalogIndexLovLinks } from "./catalogindexlovlinks";
import { CatalogStoreIndexList } from "./catalogstoreindexlist";
export declare class CatalogIndex extends SpeakeasyBase {
    links: CatalogIndexLinks;
    lovLinks: CatalogIndexLovLinks;
    storeLinks?: CatalogStoreIndexList;
}
