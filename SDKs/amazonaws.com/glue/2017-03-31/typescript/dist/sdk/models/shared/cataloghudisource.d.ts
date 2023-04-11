import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
/**
 * Specifies a Hudi data source that is registered in the Glue Data Catalog.
 */
export declare class CatalogHudiSource extends SpeakeasyBase {
    additionalHudiOptions?: Record<string, string>;
    database: string;
    name: string;
    outputSchemas?: GlueSchema[];
    table: string;
}
