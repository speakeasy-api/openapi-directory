import { SpeakeasyBase } from "../../../internal/utils";
export declare class Address extends SpeakeasyBase {
    /**
     * The city name.
     */
    city: string;
    /**
     * A valid value is an ISO two-character country code (e.g. 'NL').
     */
    country: string;
    /**
     * The house number or name.
     */
    houseNumberOrName: string;
    /**
     * The postal code with a maximum of 5 characters for USA and maximum of 10 characters for any other country.
     */
    postalCode?: string;
    /**
     * For USA or Canada, a valid 2-character abbreviation for the state or province respectively. For other countries any abbreviation with maximum 3 characters for the state or province.
     */
    stateOrProvince?: string;
    /**
     * The street name.
     *
     * @remarks
     * > Don't append the house number to this field. Instead, pass the house number separately as `houseNumberOrName`.
     *
     */
    street: string;
}
