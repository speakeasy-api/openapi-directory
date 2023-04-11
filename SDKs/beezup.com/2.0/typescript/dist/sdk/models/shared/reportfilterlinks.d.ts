import { SpeakeasyBase } from "../../../internal/utils";
import { LinksDeleteReportFilterLink } from "./linksdeletereportfilterlink";
import { LinksGetReportFilterLink } from "./linksgetreportfilterlink";
import { LinksSaveReportFilterLink } from "./linkssavereportfilterlink";
/**
 * Indicates the actions you can do on this report filter
 */
export declare class ReportFilterLinks extends SpeakeasyBase {
    delete?: LinksDeleteReportFilterLink;
    save?: LinksSaveReportFilterLink;
    self?: LinksGetReportFilterLink;
}
