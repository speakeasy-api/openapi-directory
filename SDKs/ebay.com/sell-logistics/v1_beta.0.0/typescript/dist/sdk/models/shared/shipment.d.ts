import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
import { PurchasedRate } from "./purchasedrate";
import { ShipmentCancellation } from "./shipmentcancellation";
/**
 * This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.
 */
export declare class Shipment extends SpeakeasyBase {
    /**
     * This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request.
     */
    cancellation?: ShipmentCancellation;
    /**
     * The date and time the shipment was created, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code>
     */
    creationDate?: string;
    /**
     * If supported by the selected shipping carrier, this field can contain optional seller text to be printed on the shipping label.
     */
    labelCustomMessage?: string;
    /**
     * The direct URL the seller can use to download an image of the shipping label. By default, the file format is PDF. See <a href="/api-docs/sell/logistics/resources/shipment/methods/downloadLabelFile">downloadLabelFile</a> for requesting different response file formats.
     */
    labelDownloadUrl?: string;
    /**
     * The seller's desired label size. The support for multi-sized labels is shipping-carrier specific and if the size requested in the <b>creaateFromShippingQuote</b> call matches a size the carrier supports, the value will be represented here in the shipment. <br><br>Currently, the only valid value is: <code>4"x6"</code>
     */
    labelSize?: string;
    /**
     * This list value is optionally assigned by the seller. When present, each element in the returned list contains seller-assigned information about an order (such as an order number). Because a package can contain all or part of one or more orders, this field provides a way for sellers to identify the packages that contain specific orders.
     */
    orders?: Order[];
    /**
     * This complex type specifies the dimensions and weight of a package.
     */
    packageSpecification?: PackageSpecification;
    /**
     * The "rate" that has been selected and purchased for the shipment, as referenced by the <b>rateId</b> value.
     */
    rate?: PurchasedRate;
    /**
     * This complex type contains contact information for an individual buyer or seller.
     */
    returnTo?: Contact;
    /**
     * This complex type contains contact information for an individual buyer or seller.
     */
    shipFrom?: Contact;
    /**
     * This complex type contains contact information for an individual buyer or seller.
     */
    shipTo?: Contact;
    /**
     * The unique eBay-assigned ID for the shipment. The ID is generated when the shipment is created by a call to <b>createFromShippingQuote</b>.
     */
    shipmentId?: string;
    /**
     * A unique carrier-assigned ID string that can be used to track the shipment.
     */
    shipmentTrackingNumber?: string;
}
