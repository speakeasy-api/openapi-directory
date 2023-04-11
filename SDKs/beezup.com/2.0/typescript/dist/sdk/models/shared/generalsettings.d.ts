import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the general settings of your channel catalog
 */
export declare class GeneralSettings extends SpeakeasyBase {
    /**
     * If true then you authorize disclosure of my statistics generated from clicks and sales
     */
    acceptToPublishInfo: boolean;
    /**
     * Activate BeezUP tracking for my statistics (checked by default)
     */
    activeBeezUPTracking: boolean;
    /**
     * Do not export "out of stock" products. Note: this option is not taken into account by the counter.
     *
     * @remarks
     *
     */
    doNotExportOutOfStockProducts: boolean;
}
