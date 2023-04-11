import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The tracking status informations
 */
export declare class TrackingStatus extends SpeakeasyBase {
    /**
     * The utc date of the latest synchronized click
     */
    clickSynchronizationUtcDate: Date;
    /**
     * The utc date of the latest synchronized marketplace order
     */
    marketplaceOrderSynchonizationUtcDate: Date;
    /**
     * The utc date of the latest synchronized order
     */
    orderSynchonizationUtcDate: Date;
}
