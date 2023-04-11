import { SpeakeasyBase } from "../../../internal/utils";
import { CoverageTime } from "./coveragetime";
import { HandOffTime } from "./handofftime";
import { MonthlySetting } from "./monthlysetting";
import { WeeklySetting } from "./weeklysetting";
/**
 * Information about when an on-call rotation is in effect and how long the rotation period lasts.
 */
export declare class RecurrenceSettings extends SpeakeasyBase {
    dailySettings?: HandOffTime[];
    monthlySettings?: MonthlySetting[];
    numberOfOnCalls: number;
    recurrenceMultiplier: number;
    shiftCoverages?: Record<string, CoverageTime[]>;
    weeklySettings?: WeeklySetting[];
}
