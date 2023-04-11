import { SpeakeasyBase } from "../../../internal/utils";
import { StreamModeDetails } from "./streammodedetails";
import { StreamStatusEnum } from "./streamstatusenum";
/**
 * The summary of a stream.
 */
export declare class StreamSummary extends SpeakeasyBase {
    streamARN: string;
    streamCreationTimestamp?: Date;
    /**
     *  Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams.
     */
    streamModeDetails?: StreamModeDetails;
    streamName: string;
    streamStatus: StreamStatusEnum;
}
