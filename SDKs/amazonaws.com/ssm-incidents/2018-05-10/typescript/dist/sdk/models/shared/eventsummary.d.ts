import { SpeakeasyBase } from "../../../internal/utils";
import { EventReference } from "./eventreference";
/**
 * Details about a timeline event during an incident.
 */
export declare class EventSummary extends SpeakeasyBase {
    eventId: string;
    eventReferences?: EventReference[];
    eventTime: Date;
    eventType: string;
    eventUpdatedTime: Date;
    incidentRecordArn: string;
}
