import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type describes the VAT tax details. The eBay VAT tax type and the eBay VAT identifier number will be returned if a VAT tax is applicable for the order.<br><br><span class="tablenote"><b>Note:</b>  As of January 31, 2022, <b>addressLine2</b> no longer returns EU VAT tax information.</span>
 */
export declare class EbayTaxReference extends SpeakeasyBase {
    /**
     * This field value is returned to indicate the VAT tax type, which will vary by country/region. This string value will be one of the following:<ul><li><code>ABN</code>: if this string is returned, the ID in the <strong>value</strong> field is an Australia tax ID</li><li><code>DDG</code>: if this string is returned, it indicates that tax has been collected and remitted for Digitally Delivered Goods (DDG)</li><li><code>IOSS</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay EU or UK IOSS number</li><li><code>IRD</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay New Zealand tax ID</li><li><code>OSS</code>: if this string is returned, the ID in the <strong>value</strong> field is an  eBay Germany VAT ID</li><li><code>VOEC</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay Norway tax ID</li></ul>
     */
    name?: string;
    /**
     * The value returned in this field is the VAT identifier number (VATIN), which will vary by country/region. This field will be returned if VAT tax is applicable for the order. The <strong>name</strong> field indicates the VAT tax type, which will vary by country/region: <ul><li><strong>ABN</strong>: <em>eBay AU tax ID</em></li><li><strong>IOSS</strong>: <em>eBay EU IOSS number</em> / <em>eBay UK IOSS number</em></li><li><strong>IRD</strong>: <em>eBay NZ tax ID</em></li><li><strong>OSS</strong>: <em>eBay DE VAT ID</em></li><li><strong>VOEC</strong>: <em>eBay NO number</em></li></ul>
     */
    value?: string;
}
