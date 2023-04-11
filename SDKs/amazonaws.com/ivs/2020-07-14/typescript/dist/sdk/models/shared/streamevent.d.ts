import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object specifying a stream’s events. For a list of events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon IVS</a>.
 */
export declare class StreamEvent extends SpeakeasyBase {
    eventTime?: Date;
    name?: string;
    type?: string;
}
