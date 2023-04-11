import { SpeakeasyBase } from "../../../internal/utils";
import { KinesisStreamingSourceOptions } from "./kinesisstreamingsourceoptions";
import { StreamingDataPreviewOptions } from "./streamingdatapreviewoptions";
/**
 * Specifies a direct Amazon Kinesis data source.
 */
export declare class DirectKinesisSource extends SpeakeasyBase {
    dataPreviewOptions?: StreamingDataPreviewOptions;
    detectSchema?: boolean;
    name: string;
    streamingOptions?: KinesisStreamingSourceOptions;
    windowSize?: number;
}
