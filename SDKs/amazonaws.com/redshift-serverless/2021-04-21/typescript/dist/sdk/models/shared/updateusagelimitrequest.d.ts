import { SpeakeasyBase } from "../../../internal/utils";
import { UsageLimitBreachActionEnum } from "./usagelimitbreachactionenum";
export declare class UpdateUsageLimitRequest extends SpeakeasyBase {
    amount?: number;
    breachAction?: UsageLimitBreachActionEnum;
    usageLimitId: string;
}
