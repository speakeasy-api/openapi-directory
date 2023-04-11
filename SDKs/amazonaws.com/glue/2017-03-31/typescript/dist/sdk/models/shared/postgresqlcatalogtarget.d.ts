import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a target that uses Postgres SQL.
 */
export declare class PostgreSQLCatalogTarget extends SpeakeasyBase {
    database: string;
    inputs: string[];
    name: string;
    table: string;
}
