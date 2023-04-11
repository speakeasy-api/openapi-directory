import { SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { RelativeTimeRange } from "./relativetimerange";
/**
 * <p>Flag the presence or absence of periods of silence in your Call Analytics transcription output.</p> <p>Rules using <code>NonTalkTimeFilter</code> are designed to match:</p> <ul> <li> <p>The presence of silence at specified periods throughout the call</p> </li> <li> <p>The presence of speech at specified periods throughout the call</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> for usage examples.</p>
 */
export declare class NonTalkTimeFilter extends SpeakeasyBase {
    absoluteTimeRange?: AbsoluteTimeRange;
    negate?: boolean;
    relativeTimeRange?: RelativeTimeRange;
    threshold?: number;
}
