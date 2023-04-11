import { SpeakeasyBase } from "../../../internal/utils";
import { EventList } from "./eventlist";
/**
 * Represents the output of <a>DescribeEvents</a>.
 */
export declare class EventsMessage extends SpeakeasyBase {
    events?: EventList[];
    marker?: string;
}
