import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogIndexLinks } from "./catalogindexlinks";
import { CatalogIndexLOVLinks } from "./catalogindexlovlinks";
import { CatalogStoreIndexList } from "./catalogstoreindexlist";
/**
 * OK
 */
export declare class CatalogIndex extends SpeakeasyBase {
    links: CatalogIndexLinks;
    lovLinks: CatalogIndexLOVLinks;
    storeLinks?: CatalogStoreIndexList;
}
