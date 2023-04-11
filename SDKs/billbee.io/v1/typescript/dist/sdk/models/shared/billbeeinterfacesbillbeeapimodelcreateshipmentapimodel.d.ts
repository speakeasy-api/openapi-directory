import { SpeakeasyBase } from "../../../internal/utils";
import { BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput } from "./billbeeinterfacesbillbeeapimodelshipmentaddressapimodel";
import { BillbeeInterfacesShippingShipmentDataDimensions } from "./billbeeinterfacesshippingshipmentdatadimensions";
export declare enum BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fourteen = "14",
    Fifteen = "15",
    Sixteen = "16",
    Seventeen = "17",
    Eighteen = "18"
}
/**
 * Data to specify shipment parameters
 */
export declare class BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput extends SpeakeasyBase {
    /**
     * Optional specify a text to be included on the label. Not possible with all carriers
     */
    clientReference?: string;
    /**
     * Optional specify a text describing the content of the shipment. Used for export shipments
     */
    content?: string;
    /**
     * Not used anymore
     */
    customerNumber?: string;
    dimension?: BillbeeInterfacesShippingShipmentDataDimensions;
    /**
     * The Currency if the ordersum
     */
    orderCurrencyCode?: string;
    /**
     * The value of the shipments content
     */
    orderSum?: number;
    /**
     * The id of a connected Cloudprinter to sent the export docs to
     */
    printerIdForExportDocs?: number;
    /**
     * The name of a connected Cloudprinter to sent the label to
     */
    printerName?: string;
    /**
     * The productcode to be used when creating the shipment. Values depends on the carrier used
     */
    productCode?: string;
    /**
     * The name of the provider as specified in the billbee account
     */
    providerName?: string;
    receiverAddress?: BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput;
    /**
     * Optional overwrite the shipdate to be transferred to the carrier
     */
    shipDate?: Date;
    /**
     * The value of the shipments content (net)
     */
    totalNet?: number;
    /**
     * Optional specify the weight in gram of the shipment
     */
    weightInGram?: number;
    shippingCarrier?: BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnum;
}
