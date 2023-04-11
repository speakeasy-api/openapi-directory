import { SpeakeasyBase } from "../../../internal/utils";
import { EventSource } from "./eventsource";
/**
 * Success
 */
export declare class ListEventSourcesResponse extends SpeakeasyBase {
    eventSources?: EventSource[];
    nextToken?: string;
}
