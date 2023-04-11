import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an Oracle data source in the Glue Data Catalog.
 */
export declare class OracleSQLCatalogSource extends SpeakeasyBase {
    database: string;
    name: string;
    table: string;
}
