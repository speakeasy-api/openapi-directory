import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a single shipment.
 */
export declare class BillbeeInterfacesBillbeeAPIModelShipment extends SpeakeasyBase {
    /**
     * The billbee internal id of the shipment
     */
    billbeeId?: number;
    /**
     * The creation date
     */
    created?: Date;
    /**
     * Shipment Type, 0 if Shipment, 1 if Retoure
     */
    shipmentType?: number;
    /**
     * The name of the shipping provider
     */
    shipper?: string;
    /**
     * The carrier used to ship the parcel with
     */
    shippingCarrier?: number;
    /**
     * The id of this shipment
     */
    shippingId?: string;
    /**
     * The id of the used shipping provider
     */
    shippingProviderId?: number;
    /**
     * The id of the used shipping provider product
     */
    shippingProviderProductId?: number;
    /**
     * The url to track this shipment
     */
    trackingUrl?: string;
}
