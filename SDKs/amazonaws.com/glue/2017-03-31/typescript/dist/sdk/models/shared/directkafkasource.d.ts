import { SpeakeasyBase } from "../../../internal/utils";
import { KafkaStreamingSourceOptions } from "./kafkastreamingsourceoptions";
import { StreamingDataPreviewOptions } from "./streamingdatapreviewoptions";
/**
 * Specifies an Apache Kafka data store.
 */
export declare class DirectKafkaSource extends SpeakeasyBase {
    dataPreviewOptions?: StreamingDataPreviewOptions;
    detectSchema?: boolean;
    name: string;
    streamingOptions?: KafkaStreamingSourceOptions;
    windowSize?: number;
}
