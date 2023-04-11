import { SpeakeasyBase } from "../../../internal/utils";
import { KafkaStreamingSourceOptions } from "./kafkastreamingsourceoptions";
import { StreamingDataPreviewOptions } from "./streamingdatapreviewoptions";
/**
 * Specifies an Apache Kafka data store in the Data Catalog.
 */
export declare class CatalogKafkaSource extends SpeakeasyBase {
    dataPreviewOptions?: StreamingDataPreviewOptions;
    database: string;
    detectSchema?: boolean;
    name: string;
    streamingOptions?: KafkaStreamingSourceOptions;
    table: string;
    windowSize?: number;
}
