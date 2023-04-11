import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Store Tracking Status
 */
export declare class StoreTrackingStatus extends SpeakeasyBase {
    /**
     * The utc date of the latest synchronized click
     */
    clickSynchronizationUtcDate?: Date;
    /**
     * The utc date of the latest synchronized marketplace order
     */
    marketplaceOrderSynchonizationUtcDate?: Date;
    /**
     * The utc date of the latest synchronized order
     */
    orderSynchonizationUtcDate?: Date;
}
