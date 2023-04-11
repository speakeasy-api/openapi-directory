import { SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { ParticipantRoleEnum } from "./participantroleenum";
import { RelativeTimeRange } from "./relativetimerange";
import { TranscriptFilterTypeEnum } from "./transcriptfiltertypeenum";
/**
 * <p>Flag the presence or absence of specific words or phrases detected in your Call Analytics transcription output.</p> <p>Rules using <code>TranscriptFilter</code> are designed to match:</p> <ul> <li> <p>Custom words or phrases spoken by the agent, the customer, or both</p> </li> <li> <p>Custom words or phrases <b>not</b> spoken by the agent, the customer, or either</p> </li> <li> <p>Custom words or phrases that occur at a specific time frame</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html#tca-rules-stream">Rule criteria for streaming categories</a> for usage examples.</p>
 */
export declare class TranscriptFilter extends SpeakeasyBase {
    absoluteTimeRange?: AbsoluteTimeRange;
    negate?: boolean;
    participantRole?: ParticipantRoleEnum;
    relativeTimeRange?: RelativeTimeRange;
    targets: string[];
    transcriptFilterType: TranscriptFilterTypeEnum;
}
