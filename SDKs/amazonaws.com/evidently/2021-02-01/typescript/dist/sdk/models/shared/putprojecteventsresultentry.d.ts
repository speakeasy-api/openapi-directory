import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that contains Evidently's response to the sent events, including an event ID and error codes, if any.
 */
export declare class PutProjectEventsResultEntry extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    eventId?: string;
}
