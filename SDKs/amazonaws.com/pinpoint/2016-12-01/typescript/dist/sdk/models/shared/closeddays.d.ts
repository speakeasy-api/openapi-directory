import { SpeakeasyBase } from "../../../internal/utils";
import { ClosedDaysRule } from "./closeddaysrule";
/**
 * The time when journey will stop sending messages.
 */
export declare class ClosedDays extends SpeakeasyBase {
    custom?: ClosedDaysRule[];
    email?: ClosedDaysRule[];
    push?: ClosedDaysRule[];
    sms?: ClosedDaysRule[];
    voice?: ClosedDaysRule[];
}
