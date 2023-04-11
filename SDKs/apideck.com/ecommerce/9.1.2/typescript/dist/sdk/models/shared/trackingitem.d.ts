import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the tracking information associated with an ecommerce order.
 */
export declare class TrackingItem extends SpeakeasyBase {
    /**
     *  The tracking number associated with the shipment, which can be used to track the progress of the delivery.
     */
    number: string;
    /**
     * The name or code of the carrier or shipping company that is handling the shipment.
     */
    provider: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The URL of the carrier's tracking page, which can be used to view detailed information about the shipment's progress.
     */
    url?: string;
}
