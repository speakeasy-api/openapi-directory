import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used to provide sales tax settings for a specific tax jurisdiction.
 */
export declare class SalesTax extends SpeakeasyBase {
    /**
     * The country code enumeration value identifies the country to which this sales tax rate applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum'>eBay API documentation</a>
     */
    countryCode?: string;
    /**
     * A unique ID that identifies the sales tax jurisdiction to which the sales tax rate applies (for example, a state within the United States).
     */
    salesTaxJurisdictionId?: string;
    /**
     * The sales tax rate that will be applied to sales price. The <b>shippingAndHandlingTaxed</b> value will indicate whether or not sales tax is also applied to shipping and handling charges<br><br>Although it is a string, a percentage value is returned here, such as <code>7.75</code>
     */
    salesTaxPercentage?: string;
    /**
     * If returned as <code>true</code>, sales tax is also applied to shipping and handling charges, and not just the total sales price of the order.
     */
    shippingAndHandlingTaxed?: boolean;
}
