import { SpeakeasyBase } from "../../../internal/utils";
import { AuditFrequencyEnum } from "./auditfrequencyenum";
import { DayOfWeekEnum } from "./dayofweekenum";
/**
 * Success
 */
export declare class DescribeScheduledAuditResponse extends SpeakeasyBase {
    dayOfMonth?: string;
    dayOfWeek?: DayOfWeekEnum;
    frequency?: AuditFrequencyEnum;
    scheduledAuditArn?: string;
    scheduledAuditName?: string;
    targetCheckNames?: string[];
}
