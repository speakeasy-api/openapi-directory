import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalOption } from "./additionaloption";
import { Amount } from "./amount";
/**
 * The "rate" that has been selected and purchased for the shipment, as referenced by the <b>rateId</b> value.
 */
export declare class PurchasedRate extends SpeakeasyBase {
    /**
     * An list of additional, optional features that have been purchased for the shipment.
     */
    additionalOptions?: AdditionalOption[];
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    baseShippingCost?: Amount;
    /**
     * The time zone of the destination according to <a href="https://www.iana.org/time-zones" target="_blank">Time Zone Database</a>. For example, "America/Los_Angeles".
     */
    destinationTimeZone?: string;
    /**
     * A string value representing maximum (latest) estimated delivery time, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code>
     */
    maxEstimatedDeliveryDate?: string;
    /**
     * A string value representing minimum (earliest) estimated delivery time, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a>ISO 8601</a> UTC string.
     */
    minEstimatedDeliveryDate?: string;
    /**
     * A list of pickup networks compatible with the shipping service.
     */
    pickupNetworks?: string[];
    /**
     * This unique eBay-assigned ID value is returned only if the shipment has been configured for a scheduled pickup.
     */
    pickupSlotId?: string;
    /**
     * The type of pickup or drop off configured for the shipment. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum'>eBay API documentation</a>
     */
    pickupType?: string;
    /**
     * The eBay-generated ID of the shipping rate that the seller has chosen to purchase for the shipment.
     */
    rateId?: string;
    /**
     * The ID code for the carrier that was selected for the package shipment.
     */
    shippingCarrierCode?: string;
    /**
     * The name of the shipping carrier.
     */
    shippingCarrierName?: string;
    /**
     * The unique eBay-generated ID of the <i>shipping quote</i> from which the seller selected a shipping rate (<b>rateId</b>).
     */
    shippingQuoteId?: string;
    /**
     * String ID code for the shipping service selected for the package shipment. This is a service that the shipping carrier supplies.
     */
    shippingServiceCode?: string;
    /**
     * The name of the shipping service.
     */
    shippingServiceName?: string;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    totalShippingCost?: Amount;
}
