import { SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { ParticipantRoleEnum } from "./participantroleenum";
import { RelativeTimeRange } from "./relativetimerange";
/**
 * <p>Flag the presence or absence of interruptions in your Call Analytics transcription output.</p> <p>Rules using <code>InterruptionFilter</code> are designed to match:</p> <ul> <li> <p>Instances where an agent interrupts a customer</p> </li> <li> <p>Instances where a customer interrupts an agent</p> </li> <li> <p>Either participant interrupting the other</p> </li> <li> <p>A lack of interruptions</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> for usage examples.</p>
 */
export declare class InterruptionFilter extends SpeakeasyBase {
    absoluteTimeRange?: AbsoluteTimeRange;
    negate?: boolean;
    participantRole?: ParticipantRoleEnum;
    relativeTimeRange?: RelativeTimeRange;
    threshold?: number;
}
