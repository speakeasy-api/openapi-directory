import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksImportationGetReportLink } from "./linksimportationgetreportlink";



export class ImportationReportingLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=report" })
  report?: LinksImportationGetReportLink;
}
