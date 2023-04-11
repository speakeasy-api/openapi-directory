import { SpeakeasyBase } from "../../../internal/utils";
import { S3SourceAdditionalOptions } from "./s3sourceadditionaloptions";
/**
 * Specifies an Amazon S3 data store in the Glue Data Catalog.
 */
export declare class S3CatalogSource extends SpeakeasyBase {
    additionalOptions?: S3SourceAdditionalOptions;
    database: string;
    name: string;
    partitionPredicate?: string;
    table: string;
}
