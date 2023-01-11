import { SpeakeasyBase } from "../../../internal/utils";
import { EventList } from "./eventlist";
/**
 *  Contains the result of a successful invocation of the <code>DescribeEvents</code> action.
**/
export declare class EventsMessage extends SpeakeasyBase {
    events?: EventList[];
    marker?: string;
}
