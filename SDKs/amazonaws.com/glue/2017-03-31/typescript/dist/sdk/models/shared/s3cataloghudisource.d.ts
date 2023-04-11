import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
/**
 * Specifies a Hudi data source that is registered in the Glue Data Catalog. The Hudi data source must be stored in Amazon S3.
 */
export declare class S3CatalogHudiSource extends SpeakeasyBase {
    additionalHudiOptions?: Record<string, string>;
    database: string;
    name: string;
    outputSchemas?: GlueSchema[];
    table: string;
}
