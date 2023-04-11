import { SpeakeasyBase } from "../../../internal/utils";
import { EventStream } from "./eventstream";
/**
 * Success
 */
export declare class PutEventStreamResponse extends SpeakeasyBase {
    /**
     * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
     */
    eventStream: EventStream;
}
