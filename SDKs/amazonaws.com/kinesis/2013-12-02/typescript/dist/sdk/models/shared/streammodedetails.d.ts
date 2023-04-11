import { SpeakeasyBase } from "../../../internal/utils";
import { StreamModeEnum } from "./streammodeenum";
/**
 *  Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams.
 */
export declare class StreamModeDetails extends SpeakeasyBase {
    streamMode: StreamModeEnum;
}
