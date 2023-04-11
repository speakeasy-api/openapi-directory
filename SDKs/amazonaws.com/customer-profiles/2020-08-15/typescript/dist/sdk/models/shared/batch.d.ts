import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Batch defines the boundaries for ingestion for each step in <code>APPFLOW_INTEGRATION</code> workflow. <code>APPFLOW_INTEGRATION</code> workflow splits ingestion based on these boundaries.
 */
export declare class Batch extends SpeakeasyBase {
    endTime: Date;
    startTime: Date;
}
