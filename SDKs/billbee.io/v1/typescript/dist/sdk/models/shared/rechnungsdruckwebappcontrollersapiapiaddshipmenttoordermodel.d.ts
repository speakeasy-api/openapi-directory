import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data of the shipment to be created
 */
export declare class RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel extends SpeakeasyBase {
    /**
     * Optional the id of a shipping carrier that should be assigend to the shipment
     *
     * @remarks
     * Will override the carrier from the shipment product.
     * Please use the integer value from this Enumeration:
     * {Billbee.Interfaces.Shipping.Enums.ShippingCarrier}
     */
    carrierId?: number;
    /**
     * Optional a text stored with the shipment
     */
    comment?: string;
    /**
     * Optional a differing order number of the shipment if available
     */
    orderId?: string;
    /**
     * 0 if Shipment, 1 if Retoure
     *
     * @remarks
     * {Billbee.Interfaces.Shipping.Enums.ShipmentTypeEnum}
     */
    shipmentType?: number;
    /**
     * The id of the shipment (Sendungsnummer/trackingid)
     */
    shippingId?: string;
    /**
     * Optional the id of a shipping provider existing in the billbee account that should be assigned to the shipment
     */
    shippingProviderId?: number;
    /**
     * Optional the id of a shipping provider product that should be assigend to the shipment
     */
    shippingProviderProductId?: number;
}
