import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a target that uses MySQL.
 */
export declare class MySQLCatalogTarget extends SpeakeasyBase {
    database: string;
    inputs: string[];
    name: string;
    table: string;
}
