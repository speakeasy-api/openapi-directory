import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecord } from "./usagerecord";
/**
 * A <code>BatchMeterUsageRequest</code> contains <code>UsageRecords</code>, which indicate quantities of usage within your application.
 */
export declare class BatchMeterUsageRequest extends SpeakeasyBase {
    productCode: string;
    usageRecords: UsageRecord[];
}
