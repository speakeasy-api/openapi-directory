import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Summary totals for the last 7 days
 */
export declare class MetricsThisWeek extends SpeakeasyBase {
    /**
     * APIs added in the last week
     */
    added?: number;
    /**
     * APIs updated in the last week
     */
    updated?: number;
}
/**
 * List of basic metrics
 */
export declare class Metrics extends SpeakeasyBase {
    /**
     * Data used for charting etc
     */
    datasets?: any[];
    /**
     * Percentage of all APIs where auto fixes have been applied
     */
    fixedPct?: number;
    /**
     * Total number of fixes applied across all APIs
     */
    fixes?: number;
    /**
     * Number of newly invalid APIs
     */
    invalid?: number;
    /**
     * Open GitHub issues on our main repo
     */
    issues?: number;
    /**
     * Number of APIs
     */
    numAPIs: number;
    /**
     * Total number of endpoints inside all specifications
     */
    numEndpoints: number;
    /**
     * Number of API specifications including different versions of the same API
     */
    numSpecs: number;
    /**
     * GitHub stars for our main repo
     */
    stars?: number;
    /**
     * Summary totals for the last 7 days
     */
    thisWeek?: MetricsThisWeek;
    /**
     * Number of unofficial APIs
     */
    unofficial?: number;
    /**
     * Number of unreachable (4XX,5XX status) APIs
     */
    unreachable?: number;
}
