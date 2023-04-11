import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
/**
 * Specifies a Delta Lake data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3.
 */
export declare class S3CatalogDeltaSource extends SpeakeasyBase {
    additionalDeltaOptions?: Record<string, string>;
    database: string;
    name: string;
    outputSchemas?: GlueSchema[];
    table: string;
}
