import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For a SQL-based Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration.
 */
export declare class KinesisStreamsInputDescription extends SpeakeasyBase {
    resourceARN: string;
    roleARN?: string;
}
