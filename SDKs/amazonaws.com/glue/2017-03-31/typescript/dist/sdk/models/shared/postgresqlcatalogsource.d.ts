import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a PostgresSQL data source in the Glue Data Catalog.
 */
export declare class PostgreSQLCatalogSource extends SpeakeasyBase {
    database: string;
    name: string;
    table: string;
}
