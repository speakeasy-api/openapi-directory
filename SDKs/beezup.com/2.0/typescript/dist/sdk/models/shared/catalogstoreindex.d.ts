import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogStoreIndexLinks } from "./catalogstoreindexlinks";
import { CatalogStoreStatusEnum } from "./catalogstorestatusenum";
/**
 * The catalog index
 */
export declare class CatalogStoreIndex extends SpeakeasyBase {
    links: CatalogStoreIndexLinks;
    /**
     * Indicates the status of the catalog store.
     *
     * @remarks
     * * OK: If the latest importation is a success!
     * * Failed: If the latest importation has failed !
     * * Outdated: If the latest succeed importation is later than 1 day.
     *
     */
    status: CatalogStoreStatusEnum;
}
