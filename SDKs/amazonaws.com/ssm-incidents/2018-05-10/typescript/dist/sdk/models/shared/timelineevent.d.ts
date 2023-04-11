import { SpeakeasyBase } from "../../../internal/utils";
import { EventReference } from "./eventreference";
/**
 * A significant event that happened during the incident.
 */
export declare class TimelineEvent extends SpeakeasyBase {
    eventData: string;
    eventId: string;
    eventReferences?: EventReference[];
    eventTime: Date;
    eventType: string;
    eventUpdatedTime: Date;
    incidentRecordArn: string;
}
