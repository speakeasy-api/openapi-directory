import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
/**
 * Success
 */
export declare class ListSitesResponse extends SpeakeasyBase {
    /**
     * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
     */
    nextToken?: string;
    /**
     * List of facilities.
     */
    sites?: Site[];
}
