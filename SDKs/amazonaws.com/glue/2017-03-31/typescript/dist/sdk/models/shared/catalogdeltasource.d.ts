import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
/**
 * Specifies a Delta Lake data source that is registered in the Glue Data Catalog.
 */
export declare class CatalogDeltaSource extends SpeakeasyBase {
    additionalDeltaOptions?: Record<string, string>;
    database: string;
    name: string;
    outputSchemas?: GlueSchema[];
    table: string;
}
