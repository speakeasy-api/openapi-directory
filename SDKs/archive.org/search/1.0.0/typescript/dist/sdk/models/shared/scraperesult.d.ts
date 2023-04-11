import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of a scrape request
 */
export declare class ScrapeResult extends SpeakeasyBase {
    /**
     * Number of results returned
     */
    count?: number;
    /**
     * A scroll handle
     */
    cursor?: string;
    items?: Record<string, any>[];
    /**
     * A scroll handle
     */
    previous?: string;
    /**
     * Total number of results from this cursor point
     */
    total?: number;
}
