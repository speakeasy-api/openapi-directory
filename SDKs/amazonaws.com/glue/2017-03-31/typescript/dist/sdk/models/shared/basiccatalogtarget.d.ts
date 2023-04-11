import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a target that uses a Glue Data Catalog table.
 */
export declare class BasicCatalogTarget extends SpeakeasyBase {
    database: string;
    inputs: string[];
    name: string;
    table: string;
}
