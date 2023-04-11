import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used by the <strong>shipmentTracking</strong> array returned under the <strong>evidence</strong> container if the seller has provided shipment tracking information as evidence to support <code>PROOF_OF_DELIVERY</code> for an INR-related payment dispute.
 */
export declare class TrackingInfo extends SpeakeasyBase {
    /**
     * This string value represents the shipment tracking number of the package.
     */
    shipmentTrackingNumber?: string;
    /**
     * This string value represents the shipping carrier used to ship the package.
     */
    shippingCarrierCode?: string;
}
