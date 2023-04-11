import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type describes the physical location of an order.
 */
export declare class ItemLocation extends SpeakeasyBase {
    /**
     * The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code representing the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>
     */
    countryCode?: string;
    /**
     * Indicates the geographical location of the item (along with the value in the <strong>countryCode</strong> field). This field provides city, province, state, or similar information.
     */
    location?: string;
    /**
     * The postal code of the address.
     */
    postalCode?: string;
}
