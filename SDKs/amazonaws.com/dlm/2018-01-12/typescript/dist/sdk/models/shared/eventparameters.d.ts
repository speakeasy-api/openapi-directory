import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeValuesEnum } from "./eventtypevaluesenum";
/**
 *  <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy.
 */
export declare class EventParameters extends SpeakeasyBase {
    descriptionRegex: string;
    eventType: EventTypeValuesEnum;
    snapshotOwner: string[];
}
