import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a MySQL data source in the Glue Data Catalog.
 */
export declare class MySQLCatalogSource extends SpeakeasyBase {
    database: string;
    name: string;
    table: string;
}
