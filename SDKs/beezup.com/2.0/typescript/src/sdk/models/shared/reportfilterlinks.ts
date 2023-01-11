import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksDeleteReportFilterLink } from "./linksdeletereportfilterlink";
import { LinksSaveReportFilterLink } from "./linkssavereportfilterlink";
import { LinksGetReportFilterLink } from "./linksgetreportfilterlink";



// ReportFilterLinks
/** 
 * Indicates the actions you can do on this report filter
**/
export class ReportFilterLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: LinksDeleteReportFilterLink;

  @SpeakeasyMetadata({ data: "json, name=save" })
  save?: LinksSaveReportFilterLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetReportFilterLink;
}
