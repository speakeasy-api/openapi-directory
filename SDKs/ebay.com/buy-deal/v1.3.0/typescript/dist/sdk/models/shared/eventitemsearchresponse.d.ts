import { SpeakeasyBase } from "../../../internal/utils";
import { EventItem } from "./eventitem";
/**
 * The result set for the event item search.
 */
export declare class EventItemSearchResponse extends SpeakeasyBase {
    /**
     * A list of event items that match the search criteria.
     */
    eventItems?: EventItem[];
    /**
     * The relative path to the current set of results.
     */
    href?: string;
    /**
     * The maximum number of items, from the current result set, returned on a single page. Default: 20
     */
    limit?: number;
    /**
     * The relative path to the next set of results.
     */
    next?: string;
    /**
     * The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0
     */
    offset?: number;
    /**
     * The relative path to the previous set of results.
     */
    prev?: string;
    /**
     * The total number of matches for the specified search criteria.
     */
    total?: number;
}
