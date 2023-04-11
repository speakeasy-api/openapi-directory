import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogSchemaChangePolicy } from "./catalogschemachangepolicy";
/**
 * Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.
 */
export declare class GovernedCatalogTarget extends SpeakeasyBase {
    database: string;
    inputs: string[];
    name: string;
    partitionKeys?: string[][];
    schemaChangePolicy?: CatalogSchemaChangePolicy;
    table: string;
}
