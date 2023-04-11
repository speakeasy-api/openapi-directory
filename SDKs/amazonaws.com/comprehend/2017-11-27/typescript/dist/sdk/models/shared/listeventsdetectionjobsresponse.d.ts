import { SpeakeasyBase } from "../../../internal/utils";
import { EventsDetectionJobProperties } from "./eventsdetectionjobproperties";
/**
 * Success
 */
export declare class ListEventsDetectionJobsResponse extends SpeakeasyBase {
    eventsDetectionJobPropertiesList?: EventsDetectionJobProperties[];
    nextToken?: string;
}
