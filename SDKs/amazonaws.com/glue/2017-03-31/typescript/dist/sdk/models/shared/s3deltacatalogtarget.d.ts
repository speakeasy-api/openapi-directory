import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogSchemaChangePolicy } from "./catalogschemachangepolicy";
/**
 * Specifies a target that writes to a Delta Lake data source in the Glue Data Catalog.
 */
export declare class S3DeltaCatalogTarget extends SpeakeasyBase {
    additionalOptions?: Record<string, string>;
    database: string;
    inputs: string[];
    name: string;
    partitionKeys?: string[][];
    schemaChangePolicy?: CatalogSchemaChangePolicy;
    table: string;
}
