import { SpeakeasyBase } from "../../../internal/utils";
import { OutputLogEvent } from "./outputlogevent";
/**
 * Success
 */
export declare class GetLogEventsResponse extends SpeakeasyBase {
    events?: OutputLogEvent[];
    nextBackwardToken?: string;
    nextForwardToken?: string;
}
