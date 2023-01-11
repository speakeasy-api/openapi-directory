import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksSaveReportFilterLink } from "./linkssavereportfilterlink";
import { LinksGetReportFiltersLink } from "./linksgetreportfilterslink";



export class ReportFiltersLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=save" })
  save: LinksSaveReportFilterLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetReportFiltersLink;
}
