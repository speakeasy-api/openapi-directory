import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The physical location of the item.
 */
export declare class Address extends SpeakeasyBase {
    /**
     * The city of the charitable organization.
     */
    city?: string;
    /**
     * The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html ">ISO 3166</a> standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/charity/types/bas:CountryCodeEnum'>eBay API documentation</a>
     */
    country?: string;
    /**
     * The postal code of the charitable organization.
     */
    postalCode?: string;
    /**
     * The state or province of the charitable organization.
     */
    stateOrProvince?: string;
}
