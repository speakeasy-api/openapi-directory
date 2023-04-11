import { SpeakeasyBase } from "../../../internal/utils";
import { TrackingInfo } from "./trackinginfo";
/**
 * This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return.
 */
export declare class InfoFromBuyer extends SpeakeasyBase {
    /**
     * This field shows any note that was left by the buyer in regard to the dispute.
     */
    note?: string;
    /**
     * This array shows shipment tracking information for one or more shipping packages being returned to the buyer after a payment dispute.
     */
    returnShipmentTracking?: TrackingInfo[];
}
