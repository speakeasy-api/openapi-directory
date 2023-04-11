import { SpeakeasyBase } from "../../../internal/utils";
import { KinesisStreamingSourceOptions } from "./kinesisstreamingsourceoptions";
import { StreamingDataPreviewOptions } from "./streamingdatapreviewoptions";
/**
 * Specifies a Kinesis data source in the Glue Data Catalog.
 */
export declare class CatalogKinesisSource extends SpeakeasyBase {
    dataPreviewOptions?: StreamingDataPreviewOptions;
    database: string;
    detectSchema?: boolean;
    name: string;
    streamingOptions?: KinesisStreamingSourceOptions;
    table: string;
    windowSize?: number;
}
