import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a target that uses Oracle SQL.
 */
export declare class OracleSQLCatalogTarget extends SpeakeasyBase {
    database: string;
    inputs: string[];
    name: string;
    table: string;
}
