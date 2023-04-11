import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecord } from "./usagerecord";
import { UsageRecordResult } from "./usagerecordresult";
/**
 * Contains the <code>UsageRecords</code> processed by <code>BatchMeterUsage</code> and any records that have failed due to transient error.
 */
export declare class BatchMeterUsageResult extends SpeakeasyBase {
    results?: UsageRecordResult[];
    unprocessedRecords?: UsageRecord[];
}
