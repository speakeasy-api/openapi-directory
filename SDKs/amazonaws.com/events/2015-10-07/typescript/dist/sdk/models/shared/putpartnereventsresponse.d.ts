import { SpeakeasyBase } from "../../../internal/utils";
import { PutPartnerEventsResultEntry } from "./putpartnereventsresultentry";
/**
 * Success
 */
export declare class PutPartnerEventsResponse extends SpeakeasyBase {
    entries?: PutPartnerEventsResultEntry[];
    failedEntryCount?: number;
}
