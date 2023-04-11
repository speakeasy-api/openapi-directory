import { SpeakeasyBase } from "../../../internal/utils";
import { ShipmentCarrierEnum } from "./shipmentcarrierenum";
/**
 *  Information about a line item shipment.
 */
export declare class ShipmentInformation extends SpeakeasyBase {
    shipmentCarrier?: ShipmentCarrierEnum;
    shipmentTrackingNumber?: string;
}
