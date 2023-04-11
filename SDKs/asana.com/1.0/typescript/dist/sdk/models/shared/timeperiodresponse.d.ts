import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriodCompact } from "./timeperiodcompact";
/**
 * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`, `Q3`, or `Q4`.
 */
export declare enum TimePeriodResponsePeriodEnum {
    Fy = "FY",
    H1 = "H1",
    H2 = "H2",
    Q1 = "Q1",
    Q2 = "Q2",
    Q3 = "Q3",
    Q4 = "Q4"
}
/**
 * A generic Asana Resource, containing a globally unique identifier.
 */
export declare class TimePeriodResponse extends SpeakeasyBase {
    /**
     * A string representing the cadence code and the fiscal year.
     */
    displayName?: string;
    /**
     * The localized end date of the time period in `YYYY-MM-DD` format.
     */
    endOn?: string;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    parent?: TimePeriodCompact;
    /**
     * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`, `Q3`, or `Q4`.
     */
    period?: TimePeriodResponsePeriodEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The localized start date of the time period in `YYYY-MM-DD` format.
     */
    startOn?: string;
}
