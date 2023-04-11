import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
/**
 * Success
 */
export declare class ListEventsResponse extends SpeakeasyBase {
    events: Event[];
    nextToken?: string;
}
