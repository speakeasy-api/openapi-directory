import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogStoreIndex } from "./catalogstoreindex";
export declare class CatalogStoreIndexList extends SpeakeasyBase {
    /**
     * The key is the store identifier.
     */
    links?: Record<string, CatalogStoreIndex>;
}
