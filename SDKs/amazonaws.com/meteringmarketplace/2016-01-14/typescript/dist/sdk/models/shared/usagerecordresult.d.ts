import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecord } from "./usagerecord";
import { UsageRecordResultStatusEnum } from "./usagerecordresultstatusenum";
/**
 * A <code>UsageRecordResult</code> indicates the status of a given <code>UsageRecord</code> processed by <code>BatchMeterUsage</code>.
 */
export declare class UsageRecordResult extends SpeakeasyBase {
    meteringRecordId?: string;
    status?: UsageRecordResultStatusEnum;
    usageRecord?: UsageRecord;
}
