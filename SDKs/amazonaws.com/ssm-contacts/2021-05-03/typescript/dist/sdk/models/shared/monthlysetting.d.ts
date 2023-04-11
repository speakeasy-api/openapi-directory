import { SpeakeasyBase } from "../../../internal/utils";
import { HandOffTime } from "./handofftime";
/**
 * Information about on-call rotations that recur monthly.
 */
export declare class MonthlySetting extends SpeakeasyBase {
    dayOfMonth: number;
    handOffTime: HandOffTime;
}
