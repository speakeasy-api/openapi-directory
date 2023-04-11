import { SpeakeasyBase } from "../../../internal/utils";
import { AuditFrequencyEnum } from "./auditfrequencyenum";
import { DayOfWeekEnum } from "./dayofweekenum";
/**
 * Information about the scheduled audit.
 */
export declare class ScheduledAuditMetadata extends SpeakeasyBase {
    dayOfMonth?: string;
    dayOfWeek?: DayOfWeekEnum;
    frequency?: AuditFrequencyEnum;
    scheduledAuditArn?: string;
    scheduledAuditName?: string;
}
