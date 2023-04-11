import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFilterHeader } from "./reportfilterheader";
import { ReportFiltersLinks } from "./reportfilterslinks";
/**
 * Report filter list
 */
export declare class ReportFilterList extends SpeakeasyBase {
    links: ReportFiltersLinks;
    reportFilters: ReportFilterHeader[];
}
