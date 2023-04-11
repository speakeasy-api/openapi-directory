import { SpeakeasyBase } from "../../../internal/utils";
import { EventParameters } from "./eventparameters";
import { EventSourceValuesEnum } from "./eventsourcevaluesenum";
/**
 *  <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy.
 */
export declare class EventSource extends SpeakeasyBase {
    parameters?: EventParameters;
    type: EventSourceValuesEnum;
}
