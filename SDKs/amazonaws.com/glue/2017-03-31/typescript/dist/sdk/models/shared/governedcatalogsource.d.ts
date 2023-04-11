import { SpeakeasyBase } from "../../../internal/utils";
import { S3SourceAdditionalOptions } from "./s3sourceadditionaloptions";
/**
 * Specifies the data store in the governed Glue Data Catalog.
 */
export declare class GovernedCatalogSource extends SpeakeasyBase {
    additionalOptions?: S3SourceAdditionalOptions;
    database: string;
    name: string;
    partitionPredicate?: string;
    table: string;
}
