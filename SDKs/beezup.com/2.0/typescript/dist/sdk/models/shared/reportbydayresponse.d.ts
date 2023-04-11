import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByDay } from "./reportbyday";
import { ReportByDayGlobal } from "./reportbydayglobal";
/**
 * Your reporting by day
 */
export declare class ReportByDayResponse extends SpeakeasyBase {
    /**
     * The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>
     *
     * @remarks
     *
     */
    currencyCode: string;
    days: ReportByDay[];
    globalPerformanceIndicators: ReportByDayGlobal;
}
