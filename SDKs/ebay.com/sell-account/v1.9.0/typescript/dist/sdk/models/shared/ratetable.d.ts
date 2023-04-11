import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used to provide details about each shipping rate table that is returned in the <b>getRateTables</b> response.
 */
export declare class RateTable extends SpeakeasyBase {
    /**
     * A two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> country code representing the eBay marketplace where the shipping rate table is defined. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum'>eBay API documentation</a>
     */
    countryCode?: string;
    /**
     * This enumeration value returned here indicates whether the shipping rate table is a domestic or international shipping rate table. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ShippingOptionTypeEnum'>eBay API documentation</a>
     */
    locality?: string;
    /**
     * The seller-defined name for the shipping rate table.
     */
    name?: string;
    /**
     * A unique eBay-assigned ID for a seller's shipping rate table. These <b>rateTableId</b> values are used to associate shipping rate tables to fulfillment business policies or directly to listings through an add/revise/relist call in the Trading API.
     */
    rateTableId?: string;
}
