import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the starting point in a Kinesis stream to start processing. You can use the producer timestamp or the fragment number. One of either producer timestamp or fragment number is required. If you use the producer timestamp, you must put the time in milliseconds. For more information about fragment numbers, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_Fragment.html">Fragment</a>.
 */
export declare class KinesisVideoStreamStartSelector extends SpeakeasyBase {
    fragmentNumber?: string;
    producerTimestamp?: number;
}
