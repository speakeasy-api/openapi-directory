import { SpeakeasyBase } from "../../../internal/utils";
import { UsageLimitBreachActionEnum } from "./usagelimitbreachactionenum";
import { UsageLimitPeriodEnum } from "./usagelimitperiodenum";
import { UsageLimitUsageTypeEnum } from "./usagelimitusagetypeenum";
export declare class CreateUsageLimitRequest extends SpeakeasyBase {
    amount: number;
    breachAction?: UsageLimitBreachActionEnum;
    period?: UsageLimitPeriodEnum;
    resourceArn: string;
    usageType: UsageLimitUsageTypeEnum;
}
