import { SpeakeasyBase } from "../../../internal/utils";
import { AuditEventResultEntry } from "./auditeventresultentry";
import { ResultErrorEntry } from "./resulterrorentry";
/**
 * Success
 */
export declare class PutAuditEventsResponse extends SpeakeasyBase {
    failed: ResultErrorEntry[];
    successful: AuditEventResultEntry[];
}
