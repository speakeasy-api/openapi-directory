import { SpeakeasyBase } from "../../../internal/utils";
import { SalesStats } from "./salesstats";
/**
 * Sales count query response
 */
export declare class Sales extends SpeakeasyBase {
    /**
     * City
     */
    city?: string;
    /**
     * Sales count
     */
    counts?: number;
    /**
     * cpo sales count
     */
    cpo?: number;
    /**
     * Sales stats response
     */
    domStats?: SalesStats;
    /**
     * inventory_type
     */
    inventoryType?: string;
    /**
     * Make
     */
    make?: string;
    /**
     * Sales stats response
     */
    milesStats?: SalesStats;
    /**
     * model
     */
    model?: string;
    /**
     * Non-cpo sales count
     */
    nonCpo?: number;
    /**
     * Sales stats response
     */
    priceStats?: SalesStats;
    /**
     * State
     */
    state?: string;
    /**
     * taxonomy_vin
     */
    taxonomyVin?: string;
    /**
     * trim
     */
    trim?: string;
    /**
     * year
     */
    year?: string;
}
