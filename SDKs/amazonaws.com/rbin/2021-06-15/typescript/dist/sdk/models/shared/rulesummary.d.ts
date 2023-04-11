import { SpeakeasyBase } from "../../../internal/utils";
import { LockStateEnum } from "./lockstateenum";
import { RetentionPeriod } from "./retentionperiod";
/**
 * Information about a Recycle Bin retention rule.
 */
export declare class RuleSummary extends SpeakeasyBase {
    description?: string;
    identifier?: string;
    lockState?: LockStateEnum;
    retentionPeriod?: RetentionPeriod;
}
