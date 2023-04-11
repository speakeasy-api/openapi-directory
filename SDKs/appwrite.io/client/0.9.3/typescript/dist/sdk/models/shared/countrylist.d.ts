import { SpeakeasyBase } from "../../../internal/utils";
import { Country } from "./country";
/**
 * Countries List
 */
export declare class CountryList extends SpeakeasyBase {
    /**
     * List of countries.
     */
    countries: Country[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
