import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogItem } from "./catalogitem";
/**
 * Success
 */
export declare class ListCatalogItemsOutput extends SpeakeasyBase {
    catalogItems?: CatalogItem[];
    /**
     * The pagination token.
     */
    nextToken?: string;
}
