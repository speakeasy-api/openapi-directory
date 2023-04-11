import { SpeakeasyBase } from "../../../internal/utils";
import { ReportGroupTrendStats } from "./reportgrouptrendstats";
import { ReportWithRawData } from "./reportwithrawdata";
/**
 * Success
 */
export declare class GetReportGroupTrendOutput extends SpeakeasyBase {
    rawData?: ReportWithRawData[];
    stats?: ReportGroupTrendStats;
}
