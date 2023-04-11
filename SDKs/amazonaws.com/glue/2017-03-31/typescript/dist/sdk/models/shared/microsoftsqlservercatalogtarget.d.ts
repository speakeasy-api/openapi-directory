import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a target that uses Microsoft SQL.
 */
export declare class MicrosoftSQLServerCatalogTarget extends SpeakeasyBase {
    database: string;
    inputs: string[];
    name: string;
    table: string;
}
