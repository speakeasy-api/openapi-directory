import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This complex type specifies the details of a geographical address.
 */
export declare class ContactAddress extends SpeakeasyBase {
    /**
     * The first line of the street address.
     */
    addressLine1?: string;
    /**
     * The second line of the street address. Use this field for additional address information, such as a suite or apartment number.
     */
    addressLine2?: string;
    /**
     * The city in which the address is located.
     */
    city?: string;
    /**
     * The country of the address, represented as two-letter <a href="https://www.iso.org/iso-3166-country-codes.html" title="https://www.iso.org" target="_blank">ISO 3166</a> country code. For example, <code>US</code> represents the United States and <code>DE</code> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/bas:CountryCodeEnum'>eBay API documentation</a>
     */
    countryCode?: string;
    /**
     * The county (not country) in which the address is located. Counties typically contain multiple cities or towns.
     */
    county?: string;
    /**
     * The postal code of the address.
     */
    postalCode?: string;
    /**
     * The state or province in which the address is located. States and provinces often contain multiple counties.
     */
    stateOrProvince?: string;
}
