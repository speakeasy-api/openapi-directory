import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByDay } from "./reportbyday";
import { ReportByDayGlobal } from "./reportbydayglobal";
export declare class ReportByDayResponse extends SpeakeasyBase {
    currencyCode?: string;
    days?: ReportByDay[];
    globalPerformanceIndicators?: ReportByDayGlobal;
}
