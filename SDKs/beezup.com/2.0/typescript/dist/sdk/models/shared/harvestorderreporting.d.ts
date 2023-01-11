import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reporting related to a harvest order operation
**/
export declare class HarvestOrderReporting extends SpeakeasyBase {
    beezUPForcedStatus?: string;
    beezUPStatus?: string;
    creationUtcDate?: Date;
    errorMessage?: string;
    executionUUID?: string;
    lastUpdateUtcDate?: Date;
    marketplaceStatus?: string;
    processingStatus?: string;
    warningMessage?: string;
}
