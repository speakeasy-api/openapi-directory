import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reporting related to a harvest order operation
 */
export declare class HarvestOrderReporting extends SpeakeasyBase {
    /**
     * The marketplace order status forced by BeezUP during the order change oepration. This could happend when there is no status on the marketplace side.
     */
    beezUPForcedStatus?: string;
    /**
     * BeezUP order status. Unified for all marketplaces.
     */
    beezUPStatus?: string;
    /**
     * The creation UTC date of the execution
     */
    creationUtcDate?: Date;
    /**
     * The warning message during the execution
     */
    errorMessage?: string;
    /**
     * The execution identifier
     */
    executionUUID?: string;
    /**
     * The last update UTC date of the execution
     */
    lastUpdateUtcDate?: Date;
    /**
     * The order marketplace status
     */
    marketplaceStatus?: string;
    /**
     * The processing status of the execution
     */
    processingStatus?: string;
    /**
     * The warning message during the execution
     */
    warningMessage?: string;
}
