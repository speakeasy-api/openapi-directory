import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a Relational database data source in the Glue Data Catalog.
 */
export declare class RelationalCatalogSource extends SpeakeasyBase {
    database: string;
    name: string;
    table: string;
}
