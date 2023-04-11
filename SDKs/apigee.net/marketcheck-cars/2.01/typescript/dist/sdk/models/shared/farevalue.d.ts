import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Fare value of a car
 */
export declare class FareValue extends SpeakeasyBase {
    /**
     * Average days to sold of car around given postal code & radius
     */
    avgDaysToSoldLocal?: number;
    /**
     * Average days to sold of car for all available listings
     */
    avgDaysToSoldNational?: number;
    /**
     * Fare value calculated for all available listing around given postal code & radius
     */
    fmvLocal?: number;
    /**
     * Fare value calculated for all available listing
     */
    fmvNational?: number;
}
