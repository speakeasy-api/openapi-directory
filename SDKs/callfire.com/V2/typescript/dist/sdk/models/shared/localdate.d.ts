import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a date object (without time part)
 */
export declare class LocalDate extends SpeakeasyBase {
    /**
     * A day of the month. Available values: 1-31
     */
    day?: number;
    /**
     * A month of the year. Available values: 1-12
     */
    month?: number;
    /**
     * A year. Example: 2020
     */
    year?: number;
}
