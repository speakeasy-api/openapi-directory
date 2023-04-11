import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledAuditMetadata } from "./scheduledauditmetadata";
/**
 * Success
 */
export declare class ListScheduledAuditsResponse extends SpeakeasyBase {
    nextToken?: string;
    scheduledAudits?: ScheduledAuditMetadata[];
}
