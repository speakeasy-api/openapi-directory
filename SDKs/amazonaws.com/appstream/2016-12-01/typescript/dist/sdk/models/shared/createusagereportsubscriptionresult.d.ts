import { SpeakeasyBase } from "../../../internal/utils";
import { UsageReportScheduleEnum } from "./usagereportscheduleenum";
/**
 * Success
 */
export declare class CreateUsageReportSubscriptionResult extends SpeakeasyBase {
    s3BucketName?: string;
    schedule?: UsageReportScheduleEnum;
}
