import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionPeriodUnitEnum } from "./retentionperiodunitenum";
/**
 * Information about the retention period for which the retention rule is to retain resources.
 */
export declare class RetentionPeriod extends SpeakeasyBase {
    retentionPeriodUnit: RetentionPeriodUnitEnum;
    retentionPeriodValue: number;
}
