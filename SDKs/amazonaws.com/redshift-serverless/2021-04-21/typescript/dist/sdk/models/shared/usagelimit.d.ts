import { SpeakeasyBase } from "../../../internal/utils";
import { UsageLimitBreachActionEnum } from "./usagelimitbreachactionenum";
import { UsageLimitPeriodEnum } from "./usagelimitperiodenum";
import { UsageLimitUsageTypeEnum } from "./usagelimitusagetypeenum";
/**
 * The usage limit object.
 */
export declare class UsageLimit extends SpeakeasyBase {
    amount?: number;
    breachAction?: UsageLimitBreachActionEnum;
    period?: UsageLimitPeriodEnum;
    resourceArn?: string;
    usageLimitArn?: string;
    usageLimitId?: string;
    usageType?: UsageLimitUsageTypeEnum;
}
