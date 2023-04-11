import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains the details of a geographical address.
 */
export declare class Address extends SpeakeasyBase {
    /**
     * The first line of the street address.<br><br><span class="tablenote"><strong>Note:</strong> For any order that is more than 90 days old the <b>addressLine1</b> that is returned will be masked. For example, 5************e</span>
     */
    addressLine1?: string;
    /**
     * The second line of the street address. This field can be used for additional address information, such as a suite or apartment number. This field will be returned if defined for the shipping address.<br><br><span class="tablenote"><strong>Note:</strong> For any order that is more than 90 days old any <b>addressLine2</b> information that is returned will be masked. For example, S*****4</span><br><br><span class="tablenote"><b>Note:</b> As of January 31, 2022, <b>addressLine2</b> no longer returns EU VAT tax information. To determine line-item level VAT tax information, refer to <a href="#response.orders.lineItems.ebayCollectAndRemitTaxes.ebayReference">eBayReference</a>.</span>
     */
    addressLine2?: string;
    /**
     * The city of the shipping destination.
     */
    city?: string;
    /**
     * The country of the shipping destination, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, <code>US</code> represents the United States, and <code>DE</code> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>
     */
    countryCode?: string;
    /**
     * The county of the shipping destination. Counties typically, but not always, contain multiple cities or towns. This field is returned if known/available.
     */
    county?: string;
    /**
     * The postal code of the shipping destination. Usually referred to as Zip codes in the US. Most countries have postal codes, but not all. The postal code will be returned if applicable.
     */
    postalCode?: string;
    /**
     * The state or province of the shipping destination. Most countries have states or provinces, but not all. The state or province will be returned if applicable.
     */
    stateOrProvince?: string;
}
