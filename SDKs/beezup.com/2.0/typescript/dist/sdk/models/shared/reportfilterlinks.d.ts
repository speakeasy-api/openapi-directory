import { SpeakeasyBase } from "../../../internal/utils";
import { LinksDeleteReportFilterLink } from "./linksdeletereportfilterlink";
import { LinksSaveReportFilterLink } from "./linkssavereportfilterlink";
import { LinksGetReportFilterLink } from "./linksgetreportfilterlink";
/**
 * Indicates the actions you can do on this report filter
**/
export declare class ReportFilterLinks extends SpeakeasyBase {
    delete?: LinksDeleteReportFilterLink;
    save?: LinksSaveReportFilterLink;
    self?: LinksGetReportFilterLink;
}
