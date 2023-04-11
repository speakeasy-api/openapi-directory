import { SpeakeasyBase } from "../../../internal/utils";
import { LastReportGenerationExecutionError } from "./lastreportgenerationexecutionerror";
import { UsageReportScheduleEnum } from "./usagereportscheduleenum";
/**
 * Describes information about the usage report subscription.
 */
export declare class UsageReportSubscription extends SpeakeasyBase {
    lastGeneratedReportDate?: Date;
    s3BucketName?: string;
    schedule?: UsageReportScheduleEnum;
    subscriptionErrors?: LastReportGenerationExecutionError[];
}
