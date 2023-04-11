import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { EbayTaxReference } from "./ebaytaxreference";
/**
 * This type contains information about the type and amount of tax that eBay will collect and remit to the state, province, country, or other taxing authority in the buyer's location, as required by that taxing authority.<br><br>'Collect and Remit' tax includes:<ul><li>US state-mandated sales tax</li><li>Federal and Provincial Sales Tax in Canada</li><li>'Goods and Services' tax in Canada, Australia, and New Zealand</li><li>VAT collected for the UK and EU countries</li></ul>
 */
export declare class EbayCollectAndRemitTax extends SpeakeasyBase {
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    amount?: Amount;
    /**
     * This field indicates the collection method used to collect the 'Collect and Remit' tax for the order. This field is always returned for orders subject to 'Collect and Remit' tax, and its value is always <code>NET</code>.<br><br><span class="tablenote"><strong>Note:</strong> Although the <strong>collectionMethod</strong> field is returned for all orders subject to 'Collect and Remit' tax, the <strong>collectionMethod</strong> field and the <strong>CollectionMethodEnum</strong> type are not currently of any practical use, although this field may have use in the future. If and when the logic of this field is changed, this note will be updated and a note will also be added to the Release Notes.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CollectionMethodEnum'>eBay API documentation</a>
     */
    collectionMethod?: string;
    /**
     * This type describes the VAT tax details. The eBay VAT tax type and the eBay VAT identifier number will be returned if a VAT tax is applicable for the order.<br><br><span class="tablenote"><b>Note:</b>  As of January 31, 2022, <b>addressLine2</b> no longer returns EU VAT tax information.</span>
     */
    ebayReference?: EbayTaxReference;
    /**
     * The type of tax and fees that eBay will collect and remit to the taxing or fee authority. See the <strong>TaxTypeEnum</strong> type definition for more information about each tax or fee type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxTypeEnum'>eBay API documentation</a>
     */
    taxType?: string;
}
