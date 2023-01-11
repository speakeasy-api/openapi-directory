import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetReportFilterLink } from "./linksgetreportfilterlink";



export class ReportFilterHeaderLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetReportFilterLink;
}
