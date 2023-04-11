import { SpeakeasyBase } from "../../../internal/utils";
import { UsageLimitBreachActionEnum } from "./usagelimitbreachactionenum";
export declare class ModifyUsageLimitMessage extends SpeakeasyBase {
    amount?: number;
    breachAction?: UsageLimitBreachActionEnum;
    usageLimitId: string;
}
