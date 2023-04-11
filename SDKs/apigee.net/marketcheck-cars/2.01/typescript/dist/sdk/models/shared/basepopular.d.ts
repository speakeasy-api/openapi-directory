import { SpeakeasyBase } from "../../../internal/utils";
import { SalesStats } from "./salesstats";
/**
 * Single popular car in array
 */
export declare class BasePopular extends SpeakeasyBase {
    /**
     * City
     */
    city?: string;
    /**
     * Number of sold listings of this model
     */
    counts?: string;
    /**
     * Sales stats response
     */
    domStats?: SalesStats;
    /**
     * Inventory type
     */
    inventoryType?: string;
    /**
     * Make name
     */
    make?: string;
    /**
     * Sales stats response
     */
    milesStats?: SalesStats;
    /**
     * Model name
     */
    model?: string;
    /**
     * Sales stats response
     */
    priceStats?: SalesStats;
    /**
     * State
     */
    state?: string;
}
