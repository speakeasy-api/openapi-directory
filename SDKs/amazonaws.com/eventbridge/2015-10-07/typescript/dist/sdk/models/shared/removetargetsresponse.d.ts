import { SpeakeasyBase } from "../../../internal/utils";
import { RemoveTargetsResultEntry } from "./removetargetsresultentry";
/**
 * Success
 */
export declare class RemoveTargetsResponse extends SpeakeasyBase {
    failedEntries?: RemoveTargetsResultEntry[];
    failedEntryCount?: number;
}
