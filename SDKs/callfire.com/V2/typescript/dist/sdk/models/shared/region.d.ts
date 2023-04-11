import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Every local number associated with a region. You can query regions to use them in subsequent purchase requests
 */
export declare class Region extends SpeakeasyBase {
    /**
     * A city of a region
     */
    city?: string;
    /**
     * A country of a region
     */
    country?: string;
    /**
     * A latitude of a region
     */
    latitude?: number;
    /**
     * A longitude of a region
     */
    longitude?: number;
    /**
     * A country prefix of a region. 4-7 digit
     */
    prefix?: string;
    /**
     * A two-letter state code of region
     */
    state?: string;
    /**
     * A timezone of a region
     */
    timeZone?: string;
    /**
     * A five-digit zip code of a region
     */
    zipcode?: string;
}
