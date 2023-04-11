import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This container consists of address information that can be used by sellers for tax purpose.
 */
export declare class TaxAddress extends SpeakeasyBase {
    /**
     * The city name that can be used by sellers for tax purpose.
     */
    city?: string;
    /**
     * The country code that can be used by sellers for tax purpose, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, <strong>US</strong> represents the United States, and <strong>DE</strong> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>
     */
    countryCode?: string;
    /**
     * The postal code that can be used by sellers for tax purpose. Usually referred to as Zip codes in the US.
     */
    postalCode?: string;
    /**
     * The state name that can be used by sellers for tax purpose.
     */
    stateOrProvince?: string;
}
