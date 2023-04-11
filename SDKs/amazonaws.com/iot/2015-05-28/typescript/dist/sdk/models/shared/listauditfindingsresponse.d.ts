import { SpeakeasyBase } from "../../../internal/utils";
import { AuditFinding } from "./auditfinding";
/**
 * Success
 */
export declare class ListAuditFindingsResponse extends SpeakeasyBase {
    findings?: AuditFinding[];
    nextToken?: string;
}
