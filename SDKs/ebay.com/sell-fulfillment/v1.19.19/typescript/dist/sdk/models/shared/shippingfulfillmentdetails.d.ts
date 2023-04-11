import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemReference } from "./lineitemreference";
/**
 * This type contains the details for creating a fulfillment for an order.
 */
export declare class ShippingFulfillmentDetails extends SpeakeasyBase {
    /**
     * This array contains a list of or more line items and the quantity that will be shipped in the same package.
     */
    lineItems?: LineItemReference[];
    /**
     * This is the actual date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. The seller should use the actual date/time that the package was shipped, but if this field is omitted, it will default to the current date/time.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code><br><br><b>Default:</b> The current date and time.
     */
    shippedDate?: string;
    /**
     * The unique identifier of the shipping carrier being used to ship the line item(s). Technically, the <strong>shippingCarrierCode</strong> and <strong>trackingNumber</strong> fields are optional, but generally these fields will be provided if the shipping carrier and tracking number are known. <br><br><span class="tablenote"><strong>Note:</strong> Use the Trading API's <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call to retrieve the latest shipping carrier enumeration values. When making the <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call, include the <strong>DetailName</strong> field in the request payload and set its value to <code>ShippingCarrierDetails</code>. Each valid shipping carrier enumeration value is returned in a <strong>ShippingCarrierDetails.ShippingCarrier</strong> field in the response payload.</span>
     */
    shippingCarrierCode?: string;
    /**
     * The tracking number provided by the shipping carrier for this fulfillment. The seller should be careful that this tracking number is accurate since the buyer will use this tracking number to track shipment, and eBay has no way to verify the accuracy of this number.<br><br>This field and the <b>shippingCarrierCode</b> field are mutually dependent. If you include one, you must also include the other.<br><br><span class="tablenote"><strong>Note:</strong> If you include <b>trackingNumber</b> (and <b>shippingCarrierCode</b>) in the request, the resulting fulfillment's ID (returned in the HTTP location code) is the tracking number. If you do not include shipment tracking information, the resulting fulfillment ID will default to an arbitrary number such as <code>999</code>.</span><br><span class="tablenote"><strong>Note:</strong> Only alphanumeric characters are supported for shipment tracking numbers. Spaces, hyphens, and all other special characters are not supported. Do not include a space in the tracking number even if a space appears in the tracking number on the shipping label.</span>
     */
    trackingNumber?: string;
}
