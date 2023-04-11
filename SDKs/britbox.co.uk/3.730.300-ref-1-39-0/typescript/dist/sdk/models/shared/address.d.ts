import { SpeakeasyBase } from "../../../internal/utils";
export declare class Address extends SpeakeasyBase {
    /**
     * The first line of the street address.
     */
    addressLine1?: string;
    /**
     * The second line of the street address.
     */
    addressLine2?: string;
    /**
     * The city name.
     */
    city?: string;
    /**
     * The country name or code.
     */
    country?: string;
    /**
     * The postal or zip code.
     */
    postcode?: string;
    /**
     * The state name or abbreviation.
     */
    state?: string;
}
