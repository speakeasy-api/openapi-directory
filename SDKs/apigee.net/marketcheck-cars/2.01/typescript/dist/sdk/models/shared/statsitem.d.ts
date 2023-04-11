import { SpeakeasyBase } from "../../../internal/utils";
export declare class StatsItem extends SpeakeasyBase {
    /**
     * count
     */
    count?: number;
    /**
     * Maximum value of the field
     */
    max?: number;
    /**
     * Mean of the field
     */
    mean?: number;
    /**
     * median of the field
     */
    median?: number;
    /**
     * Minimum value of the field
     */
    min?: number;
    /**
     * count of listings missing particular field
     */
    missing?: number;
    /**
     * stddev of the field
     */
    stddev?: number;
    /**
     * Summation of all values of the field
     */
    sum?: number;
    /**
     * sum_of_squares of the field
     */
    sumOfSquares?: number;
}
