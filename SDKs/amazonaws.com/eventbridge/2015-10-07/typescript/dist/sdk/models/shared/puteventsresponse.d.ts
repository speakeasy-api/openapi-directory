import { SpeakeasyBase } from "../../../internal/utils";
import { PutEventsResultEntry } from "./puteventsresultentry";
/**
 * Success
 */
export declare class PutEventsResponse extends SpeakeasyBase {
    entries?: PutEventsResultEntry[];
    failedEntryCount?: number;
}
