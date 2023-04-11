import { SpeakeasyBase } from "../../../internal/utils";
import { BillbeeInterfacesShippingShipmentDataDimensions } from "./billbeeinterfacesshippingshipmentdatadimensions";
/**
 * Details on the order and the shipping methods, that should be used.
 */
export declare class RechnungsdruckWebAppControllersApiShipmentWithLabel extends SpeakeasyBase {
    /**
     * Optional parameter to automatically change the orderstate to sent after creating the shipment
     */
    changeStateToSend?: boolean;
    /**
     * Optional specify a reference text to be included on the label. Works not with all carriers
     */
    clientReference?: string;
    dimension?: BillbeeInterfacesShippingShipmentDataDimensions;
    /**
     * The Billbee internal id of the order to ship
     */
    orderId?: number;
    /**
     * Optional the name of a connected cloudprinter to send the label to
     */
    printerName?: string;
    /**
     * the id of the shipping provider product to be used
     */
    productId?: number;
    /**
     * The id of the provider. You can query all providers with the shippingproviders endpoint
     */
    providerId?: number;
    /**
     * Optional specify the shipdate to be transmitted to the carrier
     */
    shipDate?: Date;
    /**
     * Optional the shipments weight in gram to override the calculated weight
     */
    weightInGram?: number;
}
