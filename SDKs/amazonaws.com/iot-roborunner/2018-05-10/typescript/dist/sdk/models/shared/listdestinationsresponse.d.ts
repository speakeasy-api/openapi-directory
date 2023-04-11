import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
/**
 * Success
 */
export declare class ListDestinationsResponse extends SpeakeasyBase {
    /**
     * List of destinations.
     */
    destinations?: Destination[];
    /**
     * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
     */
    nextToken?: string;
}
