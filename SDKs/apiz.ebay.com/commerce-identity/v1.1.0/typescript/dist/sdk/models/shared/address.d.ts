import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type that defines the fields for an address.
 */
export declare class Address extends SpeakeasyBase {
    /**
     * The first line of the street address.
     */
    addressLine1?: string;
    /**
     * The second line of the street address. This field is not always used, but can be used for 'Suite Number' or 'Apt Number'.
     */
    addressLine2?: string;
    /**
     * The city of the address.
     */
    city?: string;
    /**
     * The two-letter ISO 3166 standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/bas:CountryCodeEnum'>eBay API documentation</a>
     */
    country?: string;
    /**
     * The county of the address.
     */
    county?: string;
    /**
     * The postal code of the address.
     */
    postalCode?: string;
    /**
     * The state or province of the address.
     */
    stateOrProvince?: string;
}
