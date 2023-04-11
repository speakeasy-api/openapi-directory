import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an event that failed to be submitted. For information about the errors that are common to all actions, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/CommonErrors.html">Common Errors</a>.
 */
export declare class PutEventsResultEntry extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    eventId?: string;
}
