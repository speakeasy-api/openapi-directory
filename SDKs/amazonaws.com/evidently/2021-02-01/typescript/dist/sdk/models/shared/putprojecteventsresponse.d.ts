import { SpeakeasyBase } from "../../../internal/utils";
import { PutProjectEventsResultEntry } from "./putprojecteventsresultentry";
/**
 * Success
 */
export declare class PutProjectEventsResponse extends SpeakeasyBase {
    eventResults?: PutProjectEventsResultEntry[];
    failedEventCount?: number;
}
