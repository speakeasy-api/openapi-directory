import { SpeakeasyBase } from "../../../internal/utils";
import { EventSummary } from "./eventsummary";
/**
 * Success
 */
export declare class ListTimelineEventsOutput extends SpeakeasyBase {
    eventSummaries: EventSummary[];
    nextToken?: string;
}
